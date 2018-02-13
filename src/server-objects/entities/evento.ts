import { Entity } from "@bds/nt-angular-context/entity";

export class Evento extends Entity {
  public id: number;
  public nome: string;
  public codice: string;

  public static getOdataContextEntity(): any {
    return {
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        nome: "String",
        codice: "String"
      }
    };
  }
}
