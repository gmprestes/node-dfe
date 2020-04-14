import { ServicosSefaz } from '../interface/nfe';
import * as Utils from '../utils/utils';

const servicos: any = {
    'autorizacao': {
        method: 'http://www.portalfiscal.inf.br/nfe/wsdl/NFeAutorizacao4',
        action: 'http://www.portalfiscal.inf.br/nfe/wsdl/NFeAutorizacao4/nfeAutorizacaoLote',
    }, 
    'retAutorizacao': {
        method: 'http://www.portalfiscal.inf.br/nfe/wsdl/NFeRetAutorizacao4',
        action: 'http://www.portalfiscal.inf.br/nfe/wsdl/NFeRetAutorizacao4/nfeRetAutorizacaoLote'
    }, 
    'consultarStatusServico': {
        method: 'http://www.portalfiscal.inf.br/nfe/wsdl/NFeStatusServico4',
        action: 'http://www.portalfiscal.inf.br/nfe/wsdl/NFeStatusServico4/nfeStatusServicoNF'
    },
    'recepcaoEvento': {
        method: 'http://www.portalfiscal.inf.br/nfe/wsdl/NFeRecepcaoEvento4',
        action: 'http://www.portalfiscal.inf.br/nfe/wsdl/NFeRecepcaoEvento4/nfeRecepcaoEvento'
    }
};

const autorizadores = {
    'AM': {
        nome: 'Amazonas',
        servicos: {
            autorizacao: {
                url_producao: 'https://nfe.sefaz.am.gov.br/services2/services/NfeAutorizacao4',
                url_homologacao: 'https://homnfe.sefaz.am.gov.br/services2/services/NfeAutorizacao4'
            },
            retAutorizacao: {
                url_producao: 'https://nfe.sefaz.am.gov.br/services2/services/NfeRetAutorizacao4',
                url_homologacao: 'https://homnfe.sefaz.am.gov.br/services2/services/NfeRetAutorizacao4'
            },
            consultarStatusServico: {
                url_producao: 'https://nfe.sefaz.am.gov.br/services2/services/NfeStatusServico4',
                url_homologacao: 'https://homnfe.sefaz.am.gov.br/services2/services/NfeStatusServico4'
            }
        }
    },
    'BA': {
        nome: 'Bahia',
        servicos: {
            autorizacao: {
                url_producao: 'https://nfe.sefaz.ba.gov.br/webservices/NFeAutorizacao4/NFeAutorizacao4.asmx',
                url_homologacao: 'https://hnfe.sefaz.ba.gov.br/webservices/NFeAutorizacao4/NFeAutorizacao4.asmx'
            },
            retAutorizacao: {
                url_producao: 'https://nfe.sefaz.ba.gov.br/webservices/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx',
                url_homologacao: 'https://hnfe.sefaz.ba.gov.br/webservices/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx'
            },
            consultarStatusServico: {
                url_producao: 'https://nfe.sefaz.ba.gov.br/webservices/NFeStatusServico4/NFeStatusServico4.asmx',
                url_homologacao: 'https://hnfe.sefaz.ba.gov.br/webservices/NFeStatusServico4/NFeStatusServico4.asmx'
            }
        }
    },
    'CE': {
        nome: 'Ceará',
        servicos: {
            autorizacao: {
                url_producao: 'https://nfe.sefaz.ce.gov.br/nfe4/services/NFeAutorizacao4?wsdl',
                url_homologacao: 'https://nfeh.sefaz.ce.gov.br/nfe4/services/NFeAutorizacao4?WSDL'
            },
            retAutorizacao: {
                url_producao: 'https://nfe.sefaz.ce.gov.br/nfe4/services/NFeRetAutorizacao4?wsdl',
                url_homologacao: 'https://nfeh.sefaz.ce.gov.br/nfe4/services/NFeRetAutorizacao4?WSDL'
            },
            consultarStatusServico: {
                url_producao: 'https://nfe.sefaz.ce.gov.br/nfe4/services/NFeStatusServico4?wsdl',
                url_homologacao: 'https://nfeh.sefaz.ce.gov.br/nfe4/services/NFeStatusServico4?WSDL'
            }
        }
    },
    'GO': {
        nome: 'Goiás',
        servicos: {
            autorizacao: {
                url_producao: 'https://nfe.sefaz.go.gov.br/nfe/services/NFeAutorizacao4?wsdl',
                url_homologacao: 'https://homolog.sefaz.go.gov.br/nfe/services/NFeAutorizacao4?wsdl'
            },
            retAutorizacao: {
                url_producao: 'https://nfe.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4?wsdl',
                url_homologacao: 'https://homolog.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4?wsdl'
            },
            consultarStatusServico: {
                url_producao: 'https://nfe.sefaz.go.gov.br/nfe/services/NFeStatusServico4?wsdl',
                url_homologacao: 'https://homolog.sefaz.go.gov.br/nfe/services/NFeStatusServico4?wsdl'
            }
        }
    },
    'MG': {
        nome: 'Minas Gerais',
        servicos: {
            autorizacao: {
                url_producao: 'https://nfe.fazenda.mg.gov.br/nfe2/services/NFeAutorizacao4',
                url_homologacao: 'https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeAutorizacao4'
            },
            retAutorizacao: {
                url_producao: 'https://nfe.fazenda.mg.gov.br/nfe2/services/NFeRetAutorizacao4',
                url_homologacao: 'https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeRetAutorizacao4'
            },
            consultarStatusServico: {
                url_producao: 'https://nfe.fazenda.mg.gov.br/nfe2/services/NFeStatusServico4',
                url_homologacao: 'https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeStatusServico4'
            }
        }
    },
    'MS': {
        nome: 'Mato Grosso do Sul',
        servicos: {
            autorizacao: {
                url_producao: 'https://nfe.sefaz.ms.gov.br/ws/NFeAutorizacao4',
                url_homologacao: 'https://hom.nfe.sefaz.ms.gov.br/ws/NFeAutorizacao4'
            },
            retAutorizacao: {
                url_producao: 'https://nfe.sefaz.ms.gov.br/ws/NFeRetAutorizacao4',
                url_homologacao: 'https://hom.nfe.sefaz.ms.gov.br/ws/NFeRetAutorizacao4'
            },
            consultarStatusServico: {
                url_producao: 'https://nfe.sefaz.ms.gov.br/ws/NFeStatusServico4',
                url_homologacao: 'https://hom.nfe.sefaz.ms.gov.br/ws/NFeStatusServico4'
            }
        }
    },
    'MT': {
        nome: 'Mato Grosso',
        servicos: {
            autorizacao: {
                url_producao: 'https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeAutorizacao4?wsdl',
                url_homologacao: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeAutorizacao4?wsdl'
            },
            retAutorizacao: {
                url_producao: 'https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeRetAutorizacao4?wsdl',
                url_homologacao: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeRetAutorizacao4?wsdl'
            },
            consultarStatusServico: {
                url_producao: 'https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl',
                url_homologacao: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl'
            }
        }
    },
    'PE': {
        nome: 'Pernambuco',
        servicos: {
            autorizacao: {
                url_producao: 'https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeAutorizacao4',
                url_homologacao: 'https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeAutorizacao4'
            },
            retAutorizacao: {
                url_producao: 'https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRetAutorizacao4',
                url_homologacao: 'https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeRetAutorizacao4'
            },
            consultarStatusServico: {
                url_producao: 'https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeStatusServico4',
                url_homologacao: 'https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeStatusServico4'
            }
        }
    },
    'PR': {
        nome: 'Paraná',
        servicos: {
            autorizacao: {
                url_producao: 'https://nfe.sefa.pr.gov.br/nfe/NFeAutorizacao4?wsdl',
                url_homologacao: 'https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeAutorizacao4?wsdl'
            },
            retAutorizacao: {
                url_producao: 'https://nfe.sefa.pr.gov.br/nfe/NFeRetAutorizacao4?wsdl',
                url_homologacao: 'https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeRetAutorizacao4?wsdl'
            },
            consultarStatusServico: {
                url_producao: 'https://nfe.sefa.pr.gov.br/nfe/NFeStatusServico4?wsdl',
                url_homologacao: 'https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeStatusServico4?wsdl'
            }
        }
    },
    'RS': {
        nome: 'Rio Grande do Sul',
        servicos: {
            autorizacao: {
                url_producao: 'https://nfe.sefazrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx',
                url_homologacao: 'https://nfe-homologacao.sefazrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx'
            },
            retAutorizacao: {
                url_producao: 'https://nfe.sefazrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx',
                url_homologacao: 'https://nfe-homologacao.sefazrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx'
            },
            consultarStatusServico: {
                url_producao: 'https://nfe.sefazrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx',
                url_homologacao: 'https://nfe-homologacao.sefazrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx'
            },
            recepcaoEvento: {
                url_producao: 'https://nfe.sefazrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx',
                url_homologacao: 'https://nfe-homologacao.sefazrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx'
            }

            
        }
    },
    'SP': {
        nome: 'São Paulo',
        servicos: {
            autorizacao: {
                url_producao: 'https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx',
                url_homologacao: 'https://homologacao.nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx'
            },
            retAutorizacao: {
                url_producao: 'https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx',
                url_homologacao: 'https://homologacao.nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx'
            },
            consultarStatusServico: {
                url_producao: 'https://nfe.fazenda.sp.gov.br/ws/nfestatusservico4.asmx',
                url_homologacao: 'https://homologacao.nfe.fazenda.sp.gov.br/ws/nfestatusservico4.asmx'
            }
        }
    },
    'SVAN': {
        nome: 'Sefaz Virtual - Ambiente Nacional',
        servicos: {
            autorizacao: {
                url_producao: 'https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx',
                url_homologacao: 'https://hom.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx'
            },
            retAutorizacao: {
                url_producao: 'https://www.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx',
                url_homologacao: 'https://hom.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx'
            },
            consultarStatusServico: {
                url_producao: 'https://www.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx',
                url_homologacao: 'https://hom.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx'
            }
        }
    },
    'SVRS': {
        nome: 'SEFAZ Virtual – RS',
        servicos: {
            autorizacao: {
                url_producao: 'https://nfe.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx',
                url_homologacao: 'https://nfe-homologacao.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx'
            },
            retAutorizacao: {
                url_producao: 'https://nfe.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx',
                url_homologacao: 'https://nfe-homologacao.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx'
            },
            consultarStatusServico: {
                url_producao: 'https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx',
                url_homologacao: 'https://nfe-homologacao.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx'
            }
        }
    },
    'SVC-AN': {
        nome: 'SEFAZ Virtual de Contingência Ambiente Nacional',
        servicos: {
            autorizacao: {
                url_producao: 'https://www.svc.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx',
                url_homologacao: 'https://hom.svc.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx'
            },
            retAutorizacao: {
                url_producao: 'https://www.svc.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx',
                url_homologacao: 'https://hom.svc.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx'
            },
            consultarStatusServico: {
                url_producao: 'https://www.svc.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx',
                url_homologacao: 'https://hom.svc.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx'
            }
        }
    },
    'SVC-RS': {
        nome: 'SEFAZ Virtual de Contingência Rio Grande do Sul',
        servicos: {
            autorizacao: {
                url_producao: 'https://nfe.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx',
                url_homologacao: 'https://nfe-homologacao.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx'
            },
            retAutorizacao: {
                url_producao: 'https://nfe.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx',
                url_homologacao: 'https://nfe-homologacao.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx'
            },
            consultarStatusServico: {
                url_producao: 'https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx',
                url_homologacao: 'https://nfe-homologacao.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx'
            }
        }
    },
}
export abstract class SefazNFe {

    private static getAutorizadorContingenciaByUF(uf: string): any {
        switch (uf) {
            case 'AC':
            case 'AL':
            case 'AP':
            case 'DF':
            case 'ES':
            case 'MG':
            case 'PB':
            case 'RJ':
            case 'RN':
            case 'RO':
            case 'RR':
            case 'RS':
            case 'SC':
            case 'SE':
            case 'SP':
            case 'TO':
                return autorizadores["SVC-AN"];
            case 'AM':
            case 'BA':
            case 'CE':
            case 'GO':
            case 'MA':
            case 'MS':
            case 'MT':
            case 'PA':
            case 'PE':
            case 'PI':
            case 'PR':
                return autorizadores["SVC-RS"];
            default:
                throw new Error('Autorizador de Contingência não encontrado!');
        }
    }

    private static getAutorizadorByUF(uf: string): any {
        switch (uf) {
            case 'AM':
                return autorizadores.AM;
            case 'BA':
                return autorizadores.BA;
            case 'CE':
                return autorizadores.CE;
            case 'GO':
                return autorizadores.GO;
            case 'MG':
                return autorizadores.MG;
            case 'MS':
                return autorizadores.MS;
            case 'MT':
                return autorizadores.MT;
            case 'PE':
                return autorizadores.PE;
            case 'PR':
                return autorizadores.PR;
            case 'RS':
                return autorizadores.RS;
            case 'SP':
                return autorizadores.SP;
            case 'MA':
            case 'PA':
                return autorizadores.SVAN;
            case 'AC':
            case 'AL':
            case 'AP':
            case 'DF':
            case 'ES':
            case 'PB':
            case 'PI':
            case 'RJ':
            case 'RN':
            case 'RO':
            case 'RR':
            case 'SC':
            case 'SE':
            case 'TO':
                return autorizadores.SVRS;
            default:
                throw new Error('Autorizador não encontrado!');
        }
    }

    public static getSoapInfo(uf: string, amb: string, servico: ServicosSefaz, isContingencia?: boolean) {
        let soap: any = {};
        let autorizador = isContingencia ? this.getAutorizadorContingenciaByUF(uf) : this.getAutorizadorByUF(uf);

        if (amb == '1')
            soap.url = Utils.validaUrlWsdl(autorizador.servicos[servico].url_producao);
        else
            soap.url = Utils.validaUrlWsdl(autorizador.servicos[servico].url_homologacao);

        soap.method = servicos[servico].method;
        soap.action = servicos[servico].action;

        return soap;
    }

}