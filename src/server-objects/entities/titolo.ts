import {Entity} from "@bds/nt-angular-context/entity";
export class Titolo extends Entity {
    public id: number;
    public nome: string;
    public idAzienda: number;
    public classificazione: string;

    public static getOdataContextEntity(): any {
        return {
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
}
