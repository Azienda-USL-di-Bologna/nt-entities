import { Entity, OdataForeignKey } from "@bds/nt-context";
import { CODICE_STATI } from "../../../client-objects/constants/stati-iter";
import { DESCRIZIONE_STATI } from "../../../client-objects/constants/stati-iter";

export class Stato extends Entity {
    public id: number;
    public codice: CODICE_STATI;
    public descrizione: DESCRIZIONE_STATI;

    getName(): string {
        return "Statos";
        
    }
    getOdataContextEntity() {
        return {
            name: this.getName(),
            key: "id",
            keyType: "Int32",
            fieldTypes: {
                id: "Int32",
                codice: "String",
                descrizione: "String"
            }
        };   
    }
}