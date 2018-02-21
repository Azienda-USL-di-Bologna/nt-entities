import {Azienda} from "./azienda";
import {Entity, OdataForeignKey} from "@bds/nt-context";

export class Struttura extends Entity {
    public id: number;
    public attiva: boolean;
    public codice: number;
    public codiceDislocazione: string;
    public dataAttivazione: Date;
    public dataCessazione: Date;
    public dislocazione: string;
    public nome: string;
    public spettrale: boolean;
    public usaSegreteriaBucataPadre: boolean;
    public FK_id_azienda: number;
    public idAzienda: Azienda;
    public FK_id_struttura_padre: number;
    public idStrutturaPadre: Struttura;
    public FK_id_struttura_segreteria: number;
    public idStrutturaSegreteria: Struttura;

    public getOdataContextEntity(): any {
        return {
            name: this.getName(),
            key: "id",
            keyType: "Int32",
            fieldTypes: {
                id: "Int32",
                attiva: "Boolean",
                codice: "Int32",
                codiceDislocazione: "String",
                dataAttivazione: "DateTime",
                dataCessazione: "DateTime",
                dislocazione: "String",
                nome: "String",
                spettrale: "Boolean",
                usaSegreteriaBucataPadre: "Boolean",
                idAzienda: new OdataForeignKey(new Azienda().getName(), "id"),
                idStrutturaPadre: new OdataForeignKey(this.getName(), "id"),
                idStrutturaSegreteria: new OdataForeignKey(this.getName(), "id"),
            }
        };
    }

    public getName(): string {
        return "Strutturas";
    }
}
