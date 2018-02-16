import {Entity} from "@bds/nt-angular-context";

export class Titolo extends Entity {
    public id: number;
    public nome: string;
    public idAzienda: number;
    public classificazione: string;

    public getOdataContextEntity(): any {
        return {
            name: this.getName(),
            key: "id",
            keyType: "Int32",
            fieldTypes: {
                id: "Int32",
                nome: "String",
                idAzienda: "Int32",
                classificazione: "String"

            }
        };
    }

    public getName(): string {
        return "Titolos";
    }
}
