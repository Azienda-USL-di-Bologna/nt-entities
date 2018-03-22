import {Azienda} from "../baborg/azienda";
import {TipoProcedimento} from "./tipo-procedimento";
import {Titolo} from "./titolo";
import {Entity, OdataForeignKey} from "@bds/nt-context";

export class AziendaTipoProcedimento extends Entity {
    public id: number;
    public descrizioneTipoProcedimento: string;
    public dataFine: Date;
    public dataInizio: Date;
    public durataMassimaProcedimento: number;
    public durataMassimaSospensione: number;
    public obbligoEsitoConclusivo: boolean;
    public FK_id_azienda: number;
    public idAzienda: Azienda;
    public FK_id_tipo_procedimento: number;
    public idTipoProcedimento: TipoProcedimento;
    public FK_id_titolo: number;
    public idTitolo: Titolo;
    public procedimentoList: Titolo[];
    public giorniPreavvisoScadenzaTermini: number;
    public regolamentiRiferimentiInterni: string;



    public getOdataContextEntity(): any {
        return {
            name: this.getName(),
            key: "id",
            keyType: "Int32",
            fieldTypes: {
                id: "Int32",
                descrizioneTipoProcedimento: "String",
                dataFine: "DateTime",
                dataInizio: "DateTime",
                durataMassimaProcedimento: "Int32",
                durataMassimaSospensione: "Int32",
                obbligoEsitoConclusivo: "Boolean",
                idAzienda: new OdataForeignKey(new Azienda().getName(), "id"),
                idTipoProcedimento: new OdataForeignKey(new TipoProcedimento().getName(), "id"),
                idTitolo: new OdataForeignKey(new Titolo().getName(), "id"),
                giorniPreavvisoScadenzaTermini: "Int32",
                regolamentiRiferimentiInterni: "String"
            }
        };
    }
    public getName(): string {
        return "AziendaTipoProcedimentos";
    }
}
