import { Entity, OdataForeignKey } from "@bds/nt-context";

export class Stato extends Entity {
    public id: number;
    public codice: string;
    public descrizione: string;

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