const fs = require('fs');
const lib = require('./lib');
const signUtils = require('./lib/factory/signature');
const XmlHelper = require('./lib/factory/xmlHelper');

// @ts-ignore: Unreachable code error
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let cert = {
    key: fs.readFileSync('./cert.key'),
    pem: fs.readFileSync('./cert.pem'),
    pfx: fs.readFileSync('./cert.pfx'),
    password: '142536'
};

let empresa = {
    cnpj: '31472747000176',
    razaoSocial: 'PAPA COMERCIO DE ALIMENTOS CONGELADOS LTDA',
    nomeFantasia: 'PAPA PIZZA',
    inscricaoEstadual: '2330024201',
    inscricaoMunicipal: '',
    codRegimeTributario: '1',
    endereco: {
        logradouro: 'RUA ADOLIBIO SEIBEL',
        numero: 3850,
        complemento: '',
        bairro: 'INDUSTRIAL',
        municipio: 'BOM PRINCIPIO',
        codMunicipio: '4302352',
        uf: 'RS',
        cUf: '43',
        cep: '95765000',
        //telefone: '999999999'
    },
    certificado: cert,
    idCSC: '1',
    CSC: ''
};

let responsavelTecnico = {
    cnpj: 'empresa teste',
    contato: 'teste',
    email: 'teste@teste.com',
    fone: '999999999',
    idCSRT: '01',
    CSRT: 'G8063VRTNDMO886SFNK5LDUDEI24XJ22YIPO'
};

let moment = require('moment');

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let documento = {
//     dhEmissao: moment().format(),
//     ambiente: '2',
//     modelo: '65',
//     numeroNota: randomInt(2, 9999),
//     serie: '20',
//     naturezaOperacao: 'VENDA',
//     tipoDocumentoFiscal: '1',
//     identificadorDestinoOperacao: '1',
//     codUF: '43',
//     codIbgeFatoGerador: '4302352',
//     processoEmissao: '0',
//     finalidadeEmissao: '1',
//     indConsumidorFinal: '1',
//     indPresenca: '1',
//     tipoEmissao: '1',
//     tipoImpressao: '4',
//     versaoAplicativoEmissao: 'NODE-NFE TEST 1.0',
// };

let documento2 = {
    dhEmissao: moment().format(),
    ambiente: '2',
    modelo: '55',
    numeroNota: randomInt(2, 9999),
    serie: '30',
    naturezaOperacao: '5401 VENDA PROD ESTAB Q PROD ESTEJA SUJO REG SUBST TRIB',
    tipoDocumentoFiscal: '1',
    identificadorDestinoOperacao: '1',
    codUF: '43',
    codIbgeFatoGerador: '4302352',
    processoEmissao: '0',
    finalidadeEmissao: '1',
    indConsumidorFinal: '1',
    indPresenca: '1',
    tipoEmissao: '1',
    tipoImpressao: '1',
    versaoAplicativoEmissao: 'GMPRESTES 1.0',
};

let dest = {
    indicadorIEDestinario: '1',
    documento: '02945891000699',
    inscricaoEstadual: '963716212',
    nome: 'ELAIZE SILVA PEZZI &amp; CIA LTDA',
    email: '',
    isEstrangeiro: false,
    endereco: {
        logradouro: 'AV ERICO VERISSIMO',
        numero: 495,
        complemento: '',
        bairro: 'MENINO DEUS',
        municipio: 'PORTO ALEGRE',
        codMunicipio: '4314902',
        cUf: '43',
        uf: 'RS',
        cep: '90160181',
        telefone: ''
    }
};


let transp = {
    modalidateFrete: '0'
};

let infoAdic = {
    infoComplementar: ''
};

let produtos = [];

let valorTotalProdutos = 0;
let valorTotalvBCST = 0;
let valorTotalST = 0;

produtos.push({
    prod: {
        codigo: '4',
        cEAN: '7898633240015',
        descricao: 'Pizza Calabresa',
        cest: '1704800',
        NCM: '19022000',
        CFOP: '5401',
        unidadeComercial: 'UN',
        quantidadeComercial: 15,
        valorUnitarioComercial: 9.55,
        valorTotal: 143.25,
        cEANTrib: '7898633240015',
        unidadeTributavel: 'UN',
        quantidadeTributavel: 15,
        valorUnitarioTributavel: 9.55,
        indicadorTotal: '1',
        valorFrete: '',
        valorSeguro: '',
        valorDesconto: '',
        valorOutro: '',
        numeroPedido: '',
        numeroItemPedido: '',
    },
    imposto: {
        valorAproximadoTributos: 0,
        icms: {
            CSOSN: '202',
            orig: '0',
            modBCST: 4,
            pMVAST: 35.73,
            pRedBCST: '',
            vBCST: 194.43,
            pICMSST: 12,
            vICMSST: 6.14,
            vBCFCPST: '',
            pFCPST: '',
            vFCPST: ''
        }
    },
    //infoAdicional: 'TEST',
    // numeroItem: i,
    numeroItem: 1,

});

produtos.push({
    prod: {
        codigo: '6',
        cEAN: '7898633240084',
        descricao: 'Pizza Bacon',
        cest: '1704800',
        NCM: '19022000',
        CFOP: '5401',
        unidadeComercial: 'UN',
        quantidadeComercial: 10,
        valorUnitarioComercial: 9.55,
        valorTotal: '95.50',
        cEANTrib: '7898633240084',
        unidadeTributavel: 'UN',
        quantidadeTributavel: 10,
        valorUnitarioTributavel: 9.55,
        indicadorTotal: '1',
        valorFrete: '',
        valorSeguro: '',
        valorDesconto: '',
        valorOutro: '',
        numeroPedido: '',
        numeroItemPedido: '',
    },
    imposto: {
        valorAproximadoTributos: 0,
        icms: {
            CSOSN: '202',
            orig: '0',
            modBCST: 4,
            pMVAST: 35.73,
            pRedBCST: '',
            vBCST: 129.62,
            pICMSST: 12,
            vICMSST: 4.09,
            vBCFCPST: '',
            pFCPST: '',
            vFCPST: ''
        }
    },
    //infoAdicional: 'TEST',
    // numeroItem: i,
    numeroItem: 2,

});

produtos.push({
    prod: {
        codigo: '8',
        cEAN: '7898633240084',
        descricao: 'Pizza Pizza Frango com Requeijao',
        cest: '1704800',
        NCM: '19022000',
        CFOP: '5401',
        unidadeComercial: 'UN',
        quantidadeComercial: 10,
        valorUnitarioComercial: 9.55,
        valorTotal: '95.50',
        cEANTrib: '7898633240084',
        unidadeTributavel: 'UN',
        quantidadeTributavel: 10,
        valorUnitarioTributavel: 9.55,
        indicadorTotal: '1',
        valorFrete: '',
        valorSeguro: '',
        valorDesconto: '',
        valorOutro: '',
        numeroPedido: '',
        numeroItemPedido: '',
    },
    imposto: {
        valorAproximadoTributos: 0,
        icms: {
            CSOSN: '202',
            orig: '0',
            modBCST: 4,
            pMVAST: 35.73,
            pRedBCST: '',
            vBCST: 129.62,
            pICMSST: 12,
            vICMSST: 4.09,
            vBCFCPST: '',
            pFCPST: '',
            vFCPST: ''
        }
    },
    //infoAdicional: 'TEST',
    // numeroItem: i,
    numeroItem: 3,

});

produtos.push({
    prod: {
        codigo: '8',
        cEAN: '7898633240084',
        descricao: 'Pizza Pizza Frango com Requeijao',
        cest: '1704800',
        NCM: '19022000',
        CFOP: '5901',
        unidadeComercial: 'UN',
        quantidadeComercial: 10,
        valorUnitarioComercial: 9.55,
        valorTotal: '95.50',
        cEANTrib: '7898633240084',
        unidadeTributavel: 'UN',
        quantidadeTributavel: 10,
        valorUnitarioTributavel: 9.55,
        indicadorTotal: '1',
        valorFrete: '',
        valorSeguro: '',
        valorDesconto: '',
        valorOutro: '',
        numeroPedido: '',
        numeroItemPedido: '',
    },
    imposto: {
        valorAproximadoTributos: 0,
        icms: {
            CSOSN: '202',
            orig: '0',
            modBCST: 4,
            pMVAST: 35.73,
            pRedBCST: '',
            vBCST: 129.62,
            pICMSST: 12,
            vICMSST: 4.09,
            vBCFCPST: '',
            pFCPST: '',
            vFCPST: ''
        }
    },
    //infoAdicional: 'TEST',
    // numeroItem: i,
    numeroItem: 0,

});



for (let i in produtos) {
    //console.log('Produto --> ', produtos[i].prod);

    valorTotalProdutos += +produtos[i].prod.valorTotal;

    let vST = +produtos[i].imposto.icms.vICMSST;
    if (vST > 0) {
        valorTotalvBCST += +produtos[i].imposto.icms.vBCST;
        valorTotalST += vST;
    }


    produtos[i].numeroItem = +i + 1;
}

// console.log(produtos);

// for (let i = 0; i <= produtos.length; i++) {
//     console.log('PRODUTO --->',produtos[i]);
//     
// }

//console.log('TESTETETE ', typeof produtos);




let pagamento = {
    //valorTroco: '',
    pagamentos: [{
        indicadorFormaPagamento: '',
        formaPagamento: '01',
        valor: valorTotalProdutos.toFixed(2),
        // dadosCartao: {
        //     tipoIntegracao: '1',
        //     cnpj: '99999999999999',
        //     bandeira: '01',
        //     codAutorizacao: '1321231231'
        // }
    }]
};

let icmsTot = {
    vBC: '0.00',
    vICMS: '0.00',
    vICMSDeson: '0.00',
    //vFCPUFDest: '0.00',
    //vICMSUFDest:'0.00',
    //vICMSUFRemet: '0.00',
    vFCP: '0.00',
    vBCST: valorTotalvBCST.toFixed(2),
    vST: valorTotalST.toFixed(2),
    vFCPST: '0.00',
    vFCPSTRet: '0.00',
    vProd: valorTotalProdutos.toFixed(2),
    vFrete: '0.00',
    vSeg: '0.00',
    vDesc: '0.00',
    vII: '0.00',
    vIPI: '0.00',
    vIPIDevol: '0.00',
    vPIS: '0.00',
    vCOFINS: '0.00',
    vOutro: '0.00',
    vNF: (valorTotalProdutos + valorTotalST).toFixed(2),
    //vTotTrib: '0.00',
};

let nfe = {
    docFiscal: documento2,
    destinatario: dest,
    produtos: produtos,
    total: {
        icmsTot: icmsTot
    },
    transporte: transp,
    pagamento: pagamento,
    infoAdicional: infoAdic
};

let nfce = {
    //docFiscal: documento,
    destinatario: dest,
    produtos: produtos,
    total: {
        icmsTot: icmsTot
    },
    transporte: transp,
    pagamento: pagamento,
    infoAdicional: infoAdic
};

async function testeEmissaoNFCe() {
    const nfeProc = new lib.NFeProcessor(empresa, null);

    const ini = new Date();
    let result = await nfeProc.processarDocumento(nfce);
    const fin = new Date();
    console.log(`${(fin.getTime() - ini.getTime())/1000}s`)

    result = require('util').inspect(result, false, null);
    console.log('Resultado Emissão NFC-e: \n\n' + result);
}

async function testeEmissaoNFe() {
    const nfeProc = new lib.NFeProcessor(empresa, null);

    const ini = new Date();
    let result = await nfeProc.processarDocumento(nfe);

    let dataResult = '';

    if (result.success)
        dataResult = require('util').inspect(result.envioNF.data, false, null)
    else
        dataResult = require('util').inspect(result.envioNF.xml_enviado, false, null)



    console.log('Resultado Emissão NF-e: ', require('util').inspect(result.envioNF.xml_enviado, false, null));

}


async function testeEmissaoNFe() {
    const nfeProc = new lib.NFeProcessor(empresa, null);

    const ini = new Date();
    let result = await nfeProc.processarDocumento(nfe);

    let dataResult = '';

    if (result.success)
        dataResult = require('util').inspect(result.envioNF.data, false, null)
    else
        dataResult = require('util').inspect(result.envioNF, false, null)



    console.log('Resultado Emissão NF-e: ', result.envioNF.xml_enviado);

}

async function testeEmissaoNFCeAsync(empresa) {
    const nfeProc = new lib.NFeProcessor(empresa);

    const ini = new Date();
    let result = await nfeProc.processarDocumentoAsync(nfce);
    const fin = new Date();
    console.log(`${(fin.getTime() - ini.getTime())/1000}s`)

    //result = require('util').inspect(result, false, null);
    //console.log('Resultado Emissão NFC-e: \n\n' + result);
}

async function testeEmissaoNFCeContingenciaOffline(empresa) {
    const nfeProc = new lib.NFeProcessor(empresa);

    nfce.docFiscal.isContingenciaOffline = true;
    nfce.docFiscal.dhContingencia = moment().format();
    nfce.docFiscal.justificativaContingencia = 'TESTE CONTINGENCIA';

    let result = await nfeProc.processarDocumento(nfce);
    //console.log('Resultado Geração XML NFC-e Contingencia: \n\n' + require('util').inspect(result, false, null) + '\n\n');

    let result_emissao = await nfeProc.transmitirXml(Object(result.retornoContingenciaOffline).xml_gerado, '2', null);
    console.log('Resultado Transmissão XML Contingencia: \n\n' + require('util').inspect(result_emissao, false, null));

}

function testeAssinaturaXML() {
    //Test assinatura
    let xml_test = '<consStatServ id="test" versao="4.00" xmlns="http://www.portalfiscal.inf.br/nfe"><tpAmb>2</tpAmb><cUF>43</cUF><xServ>STATUS</xServ></consStatServ>';
    let xmlAssinado = signUtils.Signature.signXmlX509(xml_test, 'consStatServ', cert);
    console.log(xmlAssinado)
}

function testeQRcodeNFCe() {
    //urls qrcode: http://nfce.encat.org/consulte-sua-nota-qr-code-versao-2-0/
    const nfeProc = new lib.NFeProcessor(empresa);
    console.log(nfeProc.gerarQRCodeNFCeOnline('https://www.sefaz.rs.gov.br/NFCE/NFCE-COM.aspx?', '43181296418264011920650200000086101048053960', '2', '2', empresa.idCSC, empresa.CSC));
}

// TESTES STATUS SERVICO:
async function testeConsultaStatusServico(empresa, ambiente, modelo) {
    const statusProc = new lib.StatusServicoProcessor(empresa, ambiente, modelo);
    let result = await statusProc.processarDocumento();
    console.log(result.data);

    console.log(result.data.retConsStatServ.xMotivo);
}


// TESTES STATUS SERVICO:
async function testeCancelamentoNFe(empresa, ambiente, modelo, chAcesso, nProt, xJust) {
    const eventoProc = new lib.EventoProcessor(empresa, ambiente, modelo);
    let result = await eventoProc.cancelarDocumento(chAcesso, nProt, xJust);
    console.log(require('util').inspect(result, false, null));
}

function testeDesereliaze() {
    let xml = `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><nfeResultMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeStatusServico4"><retConsStatServ versao="4.00" xmlns="http://www.portalfiscal.inf.br/nfe"><tpAmb>2</tpAmb><verAplic>RSnfce201805211008</verAplic><cStat>107</cStat><xMotivo>Servico em Operacao</xMotivo><cUF>43</cUF><dhRecbto>2019-03-21T22:37:44-03:00</dhRecbto><tMed>1</tMed></retConsStatServ></nfeResultMsg></soap:Body></soap:Envelope>
    <consStatServ versao="4.00" xmlns="http://www.portalfiscal.inf.br/nfe"><tpAmb>2</tpAmb><cUF>43</cUF><xServ>STATUS</xServ></consStatServ>`;

    let obj = XmlHelper.XmlHelper.deserializeXml(xml);
    console.log(require('util').inspect(obj, false, null))
}

function testHashRespTec() {
    const nfeProc = new lib.NFeProcessor(empresa);
    console.log(nfeProc.gerarHashCSRT('41180678393592000146558900000006041028190697', 'G8063VRTNDMO886SFNK5LDUDEI24XJ22YIPO'));
}

//testeAssinaturaXML();
//testeConsultaStatusServico(empresa, '2', '55');

testeCancelamentoNFe(empresa, '2', '55', '43200431472747000176550300000038981748744766', '143200000281849', 'Eu estou testando essa funcionalidade')

//testeDesereliaze();
//testeEmissaoNFCe();
//testeEmissaoNFe();

//testeEmissaoNFCeContingenciaOffline(empresa);
//testeQRcodeNFCe();
//testHashRespTec();