import {Entity, OdataForeignKey} from "@bds/nt-context";
import {Pec} from "./pec";
import {Struttura} from "./struttura";

export class PecStruttura extends Entity {
    public id: number;
    public propagaStruttureFiglie: boolean;
    public FK_id_pec: number;
    public idPec: Pec;
    public FK_id_struttura: number;
    public idStruttura: Struttura;

    public getOdataContextEntity(): any {
        return {
            name: this.getName(),
            key: "id",
            keyType: "Int32",
            fieldTypes: {
                id: "Int32",
                propagaStruttureFiglie: "Boolean",
                idPec: new OdataForeignKey(new Pec().getName(), "id"),
                idStruttura: new OdataForeignKey(new Struttura().getName(), "id")
            }
        };
    }

    public getName(): string {
        return "PecStrutturas";
    }
}
