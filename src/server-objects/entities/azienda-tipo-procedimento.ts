import {Azienda} from "./azienda";
import {TipoProcedimento} from "./tipo-procedimento";
import {Titolo} from "./titolo";
import {OdataForeignKey} from "@bds/nt-angular-context/server-object";
import {ENTITIES} from "../declarations";
import {Entity} from "@bds/nt-angular-context/entity";

export class AziendaTipoProcedimento extends Entity {
    public id: number;
    public dataFine: Date;
    public dataInizio: Date;
    public descrizioneTipoProcedimento: string;
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

    public static getOdataContextEntity(): any {
        return {
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
                idAzienda: new OdataForeignKey(ENTITIES.Azienda, "id"),
                idTipoProcedimento: new OdataForeignKey(ENTITIES.TipoProcedimento, "id"),
                idTitolo: new OdataForeignKey(ENTITIES.Titolo, "id")
            }
        };
    }
}
