import {Entity, OdataForeignKey} from "@bds/nt-context";
import {Permessi} from "./permessi";

export class TipiPermesso extends Entity {
    public id: number;
    public nomePermesso: string;
    public ambito: string;
    public nomeVisualizzazione: string;
    public descrizione: string;
    public permessiList: Permessi[];

    public getOdataContextEntity(): any {
        return {
            name: this.getName(),
            key: "id",
            keyType: "Int32",
            fieldTypes: {
                id: "Int32",
                nomePermesso: "String",
                ambito: "String",
                nomeVisualizzazione: "String",
                descrizione: "String"
            }
        };
    }

    public getName(): string {
        return "TipiPermessos";
    }
}
