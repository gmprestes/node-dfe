import * as schema from '../schema/index'
import { XmlHelper } from "../xmlHelper";
import { WebServiceHelper, WebProxy } from "../webservices/webserviceHelper";
import { Empresa, ServicosSefaz } from "../interface/nfe";
import * as Utils from "../utils/utils";
import { Signature } from '../signature';
import { SefazNFCe } from '../webservices/sefazNfce';
import { SefazNFe } from '../webservices/sefazNfe';
import { verify } from 'crypto';

let moment = require('moment');

// const sha1 = require('sha1');

/**
 * Classe para processamento dos Eventos
 */
export class EventoProcessor {

    constructor(
        private empresa: Empresa,
        private ambiente: string,
        private modelo: string,
        private webProxy?: WebProxy) { }

    async cancelarDocumento(chDocumento: string, nProtocolo: string, justificativa: string) {

        let xmlEvento = this.gerarXmlCancelamento('1.00', this.ambiente, this.empresa.endereco.cUf, this.empresa.cnpj, chDocumento, nProtocolo, justificativa);
        let xmlAssinado = Signature.signXmlX509(xmlEvento, 'infEvento', this.empresa.certificado);
        let xmlEnvEvento = this.gerarCabecalhoEvento('1.00', xmlAssinado);

        return await this.enviarEvento(xmlEnvEvento, this.empresa.certificado);
    }

    async enviarEvento(xml: string, cert: any) {
        let Sefaz = this.modelo == '65' ? SefazNFCe : SefazNFe;
        let soap = Sefaz.getSoapInfo(this.empresa.endereco.uf, this.ambiente, ServicosSefaz.recepcaoEvento);

        console.log(soap);

        return await WebServiceHelper.makeSoapRequest(xml, cert, soap, this.webProxy,true);
    }

    gerarCabecalhoEvento(versao: string, xmlEventos: string) {
        let envEvento = {
            $: {
                versao: versao,
                xmlns: 'http://www.portalfiscal.inf.br/nfe'
            },
            idLote: Utils.randomInt(1, 999999999999999).toString(),
            _: '[XMLS]'
        };

        let xmlEvento = XmlHelper.serializeXml(envEvento, 'envEvento');
        return xmlEvento.replace('[XMLS]', xmlEventos);
    }

    gerarXmlCancelamento(versao: string, ambiente: string, cUf: string, cnpj: string, chNFE: string, nProt: string, xJust: string) {

        let tpEvento = '110111'; // Cancelamento

        if (xJust.length < 15)
            xJust = 'Justificativa apresentada ' + xJust;

        let evento = {
            $: {
                versao: versao,
                xmlns: 'http://www.portalfiscal.inf.br/nfe'
            },
            infEvento:
            {
                $: {
                    Id: 'ID' + tpEvento + chNFE + '01'
                },
                cOrgao: Utils.getEnumByValue(schema.TCodUfIBGE, cUf),
                tpAmb: Utils.getEnumByValue(schema.TAmb, ambiente),
                CNPJ: cnpj,
                chNFe: chNFE,
                dhEvento: moment().format(),
                tpEvento: tpEvento,
                nSeqEvento: '1',
                verEvento: versao,
                detEvento: {
                    $: {
                        versao: versao,
                    },
                    descEvento: 'Cancelamento',
                    nProt: nProt,
                    xJust: xJust,
                }
            }
        };

        return XmlHelper.serializeXml(evento, 'evento');
    }
}