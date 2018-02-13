import {Entity} from "@bds/nt-angular-context/entity";

export class Ruolo extends Entity {
  public id: number;
  public nome: string;
  public nomeBreve: string;
  public mascherBit: number;
  public superaziendale: boolean;

  public static getOdataContextEntity(): any {
    return {
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        nome: "String",
        nomeBreve: "String",
        mascheraBit: "Int32",
        superaziendale: "Boolean"
      }
    };
  }

  constructor() {
    super();
  }
}
