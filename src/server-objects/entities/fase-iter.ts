import {Entity} from "@bds/nt-context";
import { Iter } from "./iter";
import { Fase } from "./fase";

export class FaseIter extends Entity {
    public id: number;
    public FK_id_iter: number;
    public idIter: Iter;
    public FK_id_fase: number;
    public idFase: Fase;
    public dataInizioFase: Date;
    public dataFineFase: Date;

    public getOdataContextEntity(): any {
        return {
            name: this.getName(),
            key: "id",
            keyTypes: "Int32",
            fieldsTypes: {
                id: "Int32",
                idFase: "Int32",
                idIter: "Int32",
                dataInizioFase: "DateTime",
                dataFineFase: "DateTime"
            }
        };
    }

    public getName(): string {
        return "FaseIters";
    }
}
