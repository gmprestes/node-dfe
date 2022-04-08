const fs = require('fs');
const lib = require('./lib');
const signUtils = require('./lib/factory/signature');
const XmlHelper = require('./lib/factory/xmlHelper');

// @ts-ignore: Unreachable code error
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let cert = {
    key: fs.readFileSync('./cert-papa/cert.key'),
    pem: fs.readFileSync('./cert-papa/cert.pem'),
    pfx: fs.readFileSync('./cert-papa/cert.pfx'),
    password: '142536'
};

cert2 = {
    key: fs.readFileSync('./cert.key'),
    pem: fs.readFileSync('./cert.pem'),
    pfx: fs.readFileSync('./cert.pfx'),
    password: '142536'
};

let empresa = {
    cnpj: '27003626000108',
    razaoSocial: 'IN SUGAR WE TRUST LTDA ME',
    nomeFantasia: 'GUDCAKES',
    inscricaoEstadual: '0470024852',
    inscricaoMunicipal: '',
    codRegimeTributario: '1',
    endereco: {
        logradouro: 'RUA FREI CANECA',
        numero: 88,
        complemento: '',
        bairro: 'CENTRO',
        municipio: 'FELIZ',
        codMunicipio: '4308102',
        uf: 'RS',
        cUf: '43',
        cep: '95770000',
        //telefone: '999999999'
    },
    certificado: cert2,
    idCSC: '2',
    CSC: '7AEC8936-CEDC-4B38-A95E-413FA081538F'
};

empresa2 = {
    cnpj: '31472747000176',
    razaoSocial: 'PAPA COMERCIO DE ALIMENTOS CONGELADOS LTDA',
    nomeFantasia: 'PAPA PIZZAS',
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
    idCSC: '0',
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

let documento = {
    dhEmissao: moment().format(),
    ambiente: '1',
    modelo: '65',
    numeroNota: 20312,//randomInt(2, 9999),
    serie: '20',
    naturezaOperacao: 'VENDA',
    tipoDocumentoFiscal: '1',
    identificadorDestinoOperacao: '1',
    codUF: '43',
    codIbgeFatoGerador: '4302352',
    processoEmissao: '0',
    finalidadeEmissao: '1',
    indConsumidorFinal: '1',
    indPresenca: '1',
    tipoEmissao: '1',
    tipoImpressao: '4',
    versaoAplicativoEmissao: 'GMPRESTES 1.2',
};

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

let destNFCe =  
{
    indicadorIEDestinario: '9',
    documento: '01123695024',
    // inscricaoEstadual: '',
    //nome: 'Fabio Oliveira dos Santos',
    // email: '',
    // isEstrangeiro: false,
    endereco: null,
    //  {
    //     logradouro: '',
    //     numero: '',
    //     complemento: '',
    //     bairro: '',
    //     municipio: '',
    //     codMunicipio: '',
    //     cUf: '',
    //     uf: '',
    //     cep: '',
    //     telefone: ''
    // }
};


let transp = {
    modalidateFrete: '0'
};

let transpNFCe = {
    modalidateFrete: '9'
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
        codigo: '2',
        cEAN: '7898633240015',
        descricao: 'Pao de Queijo',
        cest: '1705100',
        NCM: '19052090',
        CFOP: '5101',
        unidadeComercial: 'UN',
        quantidadeComercial: 2,
        valorUnitarioComercial: 5,
        valorTotal: 10,
        cEANTrib: '7898633240015',
        unidadeTributavel: 'UN',
        quantidadeTributavel: 2,
        valorUnitarioTributavel: 5,
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
            CSOSN: '102',
            orig: '0',
            modBCST: 0,
            pMVAST: 0,
            pRedBCST: '',
            vBCST: 0,
            pICMSST: 0,
            vICMSST: 0,
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
        codigo: '3',
        cEAN: '7898633240015',
        descricao: 'Soda Italiana Morango',
        cest: '1705100',
        NCM: '19052090',
        CFOP: '5101',
        unidadeComercial: 'UN',
        quantidadeComercial: 2,
        valorUnitarioComercial: 12,
        valorTotal: 24,
        cEANTrib: '7898633240015',
        unidadeTributavel: 'UN',
        quantidadeTributavel: 2,
        valorUnitarioTributavel: 12,
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
            CSOSN: '102',
            orig: '0',
            modBCST: 0,
            pMVAST: 0,
            pRedBCST: '',
            vBCST: 0,
            pICMSST: 0,
            vICMSST: 0,
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
        codigo: '1',
        cEAN: '7898633240015',
        descricao: 'Cappuccino',
        cest: '1705100',
        NCM: '19052090',
        CFOP: '5101',
        unidadeComercial: 'UN',
        quantidadeComercial: 1,
        valorUnitarioComercial: 12,
        valorTotal: 12,
        cEANTrib: '7898633240015',
        unidadeTributavel: 'UN',
        quantidadeTributavel: 1,
        valorUnitarioTributavel: 12,
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
            CSOSN: '102',
            orig: '0',
            modBCST: 0,
            pMVAST: 0,
            pRedBCST: '',
            vBCST: 0,
            pICMSST: 0,
            vICMSST: 0,
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
        codigo: '1',
        cEAN: '7898633240015',
        descricao: 'Suco Degrade',
        cest: '1705100',
        NCM: '19052090',
        CFOP: '5101',
        unidadeComercial: 'UN',
        quantidadeComercial: 1,
        valorUnitarioComercial: 6,
        valorTotal: 6,
        cEANTrib: '7898633240015',
        unidadeTributavel: 'UN',
        quantidadeTributavel: 1,
        valorUnitarioTributavel: 6,
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
            CSOSN: '102',
            orig: '0',
            modBCST: 0,
            pMVAST: 0,
            pRedBCST: '',
            vBCST: 0,
            pICMSST: 0,
            vICMSST: 0,
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
        codigo: '1',
        cEAN: '7898633240015',
        descricao: 'Assado Frango',
        cest: '1705100',
        NCM: '19052090',
        CFOP: '5101',
        unidadeComercial: 'UN',
        quantidadeComercial: 1,
        valorUnitarioComercial: 9,
        valorTotal: 9,
        cEANTrib: '7898633240015',
        unidadeTributavel: 'UN',
        quantidadeTributavel: 1,
        valorUnitarioTributavel: 9,
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
            CSOSN: '102',
            orig: '0',
            modBCST: 0,
            pMVAST: 0,
            pRedBCST: '',
            vBCST: 0,
            pICMSST: 0,
            vICMSST: 0,
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
        codigo: '1',
        cEAN: '7898633240015',
        descricao: 'Coxinha',
        cest: '1705100',
        NCM: '19052090',
        CFOP: '5101',
        unidadeComercial: 'UN',
        quantidadeComercial: 1,
        valorUnitarioComercial: 6,
        valorTotal: 6,
        cEANTrib: '7898633240015',
        unidadeTributavel: 'UN',
        quantidadeTributavel: 1,
        valorUnitarioTributavel: 6,
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
            CSOSN: '102',
            orig: '0',
            modBCST: 0,
            pMVAST: 0,
            pRedBCST: '',
            vBCST: 0,
            pICMSST: 0,
            vICMSST: 0,
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
        codigo: '1',
        cEAN: '7898633240015',
        descricao: 'Trio Confeitado Brownie',
        cest: '1705100',
        NCM: '19052090',
        CFOP: '5101',
        unidadeComercial: 'UN',
        quantidadeComercial: 1,
        valorUnitarioComercial: 32,
        valorTotal: 32,
        cEANTrib: '7898633240015',
        unidadeTributavel: 'UN',
        quantidadeTributavel: 1,
        valorUnitarioTributavel: 32,
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
            CSOSN: '102',
            orig: '0',
            modBCST: 0,
            pMVAST: 0,
            pRedBCST: '',
            vBCST: 0,
            pICMSST: 0,
            vICMSST: 0,
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
        codigo: '1',
        cEAN: '7898633240015',
        descricao: 'Brownie Fatia',
        cest: '1705100',
        NCM: '19052090',
        CFOP: '5101',
        unidadeComercial: 'UN',
        quantidadeComercial: 1,
        valorUnitarioComercial: 12,
        valorTotal: 12,
        cEANTrib: '7898633240015',
        unidadeTributavel: 'UN',
        quantidadeTributavel: 1,
        valorUnitarioTributavel: 12,
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
            CSOSN: '102',
            orig: '0',
            modBCST: 0,
            pMVAST: 0,
            pRedBCST: '',
            vBCST: 0,
            pICMSST: 0,
            vICMSST: 0,
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
        codigo: '1',
        cEAN: '7898633240015',
        descricao: 'Extra Bola de Sorvete',
        cest: '1705100',
        NCM: '19052090',
        CFOP: '5101',
        unidadeComercial: 'UN',
        quantidadeComercial: 2,
        valorUnitarioComercial: 4,
        valorTotal: 8,
        cEANTrib: '7898633240015',
        unidadeTributavel: 'UN',
        quantidadeTributavel: 2,
        valorUnitarioTributavel: 4,
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
            CSOSN: '102',
            orig: '0',
            modBCST: 0,
            pMVAST: 0,
            pRedBCST: '',
            vBCST: 0,
            pICMSST: 0,
            vICMSST: 0,
            vBCFCPST: '',
            pFCPST: '',
            vFCPST: ''
        }
    },
    //infoAdicional: 'TEST',
    // numeroItem: i,
    numeroItem: 1,

});

// produtos.push({
//     prod: {
//         codigo: '1',
//         cEAN: '7898633240015',
//         descricao: 'Cupcake',
//         cest: '1705100',
//         NCM: '19052090',
//         CFOP: '5101',
//         unidadeComercial: 'UN',
//         quantidadeComercial: 1,
//         valorUnitarioComercial: 8,
//         valorTotal: 8,
//         cEANTrib: '7898633240015',
//         unidadeTributavel: 'UN',
//         quantidadeTributavel: 1,
//         valorUnitarioTributavel: 8,
//         indicadorTotal: '1',
//         valorFrete: '',
//         valorSeguro: '',
//         valorDesconto: '',
//         valorOutro: '',
//         numeroPedido: '',
//         numeroItemPedido: '',
//     },
//     imposto: {
//         valorAproximadoTributos: 0,
//         icms: {
//             CSOSN: '102',
//             orig: '0',
//             modBCST: 0,
//             pMVAST: 0,
//             pRedBCST: '',
//             vBCST: 0,
//             pICMSST: 0,
//             vICMSST: 0,
//             vBCFCPST: '',
//             pFCPST: '',
//             vFCPST: ''
//         }
//     },
//     //infoAdicional: 'TEST',
//     // numeroItem: i,
//     numeroItem: 1,

// });

// produtos.push({
//     prod: {
//         codigo: '1',
//         cEAN: '7898633240015',
//         descricao: 'Pao Queijo',
//         cest: '1705100',
//         NCM: '19052090',
//         CFOP: '5101',
//         unidadeComercial: 'UN',
//         quantidadeComercial: 1,
//         valorUnitarioComercial: 4,
//         valorTotal: 4,
//         cEANTrib: '7898633240015',
//         unidadeTributavel: 'UN',
//         quantidadeTributavel: 1,
//         valorUnitarioTributavel: 4,
//         indicadorTotal: '1',
//         valorFrete: '',
//         valorSeguro: '',
//         valorDesconto: '',
//         valorOutro: '',
//         numeroPedido: '',
//         numeroItemPedido: '',
//     },
//     imposto: {
//         valorAproximadoTributos: 0,
//         icms: {
//             CSOSN: '102',
//             orig: '0',
//             modBCST: 0,
//             pMVAST: 0,
//             pRedBCST: '',
//             vBCST: 0,
//             pICMSST: 0,
//             vICMSST: 0,
//             vBCFCPST: '',
//             pFCPST: '',
//             vFCPST: ''
//         }
//     },
//     //infoAdicional: 'TEST',
//     // numeroItem: i,
//     numeroItem: 1,

// });

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
    docFiscal: documento,
    destinatario: destNFCe,
    produtos: produtos,
    total: {
        icmsTot: icmsTot
    },
    transporte: transpNFCe,
    pagamento: pagamento,
    infoAdicional: infoAdic
};

async function testeEmissaoNFCe() {
    const nfeProc = new lib.NFeProcessor(empresa, null);

    const ini = new Date();
    let result = await nfeProc.processarDocumento(nfce);
    const fin = new Date();
    console.log(`${(fin.getTime() - ini.getTime()) / 1000}s`)

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
    console.log(`${(fin.getTime() - ini.getTime()) / 1000}s`)

    result = require('util').inspect(result, false, null);
    console.log('Resultado Emissão NFC-e: \n\n' + result);
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
//testeConsultaStatusServico(empresa, '2', '65');

//testeCancelamentoNFe(empresa2, '1', '55', '43211031472747000176550010000048721568051299', '143210209719959', 'Pedido faturado erroneamente. CANCELADO.')

//testeDesereliaze();
testeEmissaoNFCe();
//testeEmissaoNFe();

//testeEmissaoNFCeContingenciaOffline(empresa);
//testeQRcodeNFCe();
//testHashRespTec();