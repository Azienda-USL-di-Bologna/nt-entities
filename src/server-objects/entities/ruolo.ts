import {Entity} from "@bds/nt-angular-context";

export class Ruolo extends Entity {
  public id: number;
  public nome: string;
  public nomeBreve: string;
  public mascherBit: number;
  public superaziendale: boolean;

  constructor() {
    super();
  }
  public getOdataContextEntity(): any {
    return {
      name: this.getName(),
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

    public getName(): string {
        return "Ruolos";
    }
}
