import * as request from 'request'
import { XmlHelper } from '../xmlHelper'

import { RetornoProcessamento } from '../interface/nfe'



export interface WebProxy {
    host: string
    port: string
    isHttps?: boolean
    auth?: {
        username: string
        password: string
    }
}

function proxyToUrl(pr: WebProxy): string {
    const server = `${pr.host}:${pr.port}`
    let auth = null;
    let final = pr.isHttps ? 'https://' : 'http://'
    if (pr.auth) {
        final = `${final}${pr.auth.username}:${pr.auth.password}@`
    }

    return `${final}${server}`
}

interface PostResponse {
    response: request.Response
    body: any
}

export abstract class WebServiceHelper {

    private static httpPost(reqOpt: any) {
        return new Promise((resolve, reject) => {
            console.log('REQ OPT -----> ',reqOpt)

            // Isso é necessario para que os certificados loucos da sefaz nao deem erro
            request.defaults({ rejectUnauthorized: false });
            request.post(reqOpt, function (err: any, resp: request.Response, body: any) {
                //console.error(err)
                if (err) {
                    console.log('ERRO REQ ----> ', err)
                    reject(err)
                }

                resolve(<PostResponse>{
                    response: resp,
                    body: body
                })
            })
        });
    }

    public static buildSoapEnvelope(xml: string, soapMethod: string) {
        let soapEnvelopeObj = {
            '$': {
                'xmlns:soap': 'http://www.w3.org/2003/05/soap-envelope',
                'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema'
            },
            'soap:Body': {
                'nfeDadosMsg': {
                    '$': {
                        'xmlns': soapMethod
                    },
                    _: '[XML]'
                }
            }
        };

        let soapEnvXml = XmlHelper.serializeXml(soapEnvelopeObj, 'soap:Envelope');
        return soapEnvXml.replace('[XML]', xml);
    }

    /*
    public static getHttpsAgent(cert: any) {
        return new https.Agent({
            rejectUnauthorized: false,
            //strictSSL: false,
            pfx: cert.pfx,
            passphrase: cert.password
        });
    }
    */


    private static buildSoapRequestOpt(
        cert: any, soapParams: any, xml: string, proxy?: WebProxy) {
        const result: any = {
            url: soapParams.url,
            agentOptions: this.buildCertAgentOpt(cert),
            headers: {
                "Content-Type": "text/xml;charset=utf-8",
                "SOAPAction": soapParams.action
            },
            body: this.buildSoapEnvelope(xml, soapParams.method),
            family: 4 //workaround para erro de dns em versões antigas da glibc
        }

        if (proxy) {
            result.proxy = proxyToUrl(proxy)
        }
        console.log(result)
        return result
    }

    private static buildCertAgentOpt(cert: any) {
        return {
            pfx: cert.pfx,
            passphrase: cert.password
        }
    }

    public static async makeSoapRequest(xml: string, cert: any, soap: any, proxy?: WebProxy) {
        let result = <RetornoProcessamento>{ xml_enviado: xml };
        try {
            const reqOpt: any = this.buildSoapRequestOpt(
                cert, soap, xml, proxy
            )

            console.log('REQ URL ----->', reqOpt.url)

            //let res = await axios(reqOpt);
            const res = ((await this.httpPost(reqOpt)) as PostResponse);
            console.log('RESP STATUS CODE ----->', res.response.statusCode)
            result.status = res.response.statusCode;

            console.log('RESP BODY ----->', res.response.statusCode)
            result.xml_recebido = res.response.body;

            if (result.status == 200) {
                result.success = true;

                //let retorno = (require('util').inspect(XmlHelper.deserializeXml(res.data), false, null));
                let retorno = XmlHelper.deserializeXml(result.xml_recebido);
                if (retorno) {
                    //result.data = retorno;
                    result.data = Object(retorno)['soap:Envelope']['soap:Body']['nfeResultMsg'];
                    //console.log(result.data)
                }
            }
            console.log('----->', result.success)
            return result;

        } catch (err) {

            result.success = false;
            result.error = err;
            console.log('----->', result.success)
            return result;
        }
    }
}