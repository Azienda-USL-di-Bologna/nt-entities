import { Entity } from "@bds/nt-context";

export class Evento extends Entity {
  public id: number;
  public nome: string;
  public codice: string;

  public getOdataContextEntity(): any {
    return {
      name: this.getName(),
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        nome: "String",
        codice: "String"
      }
    };
  }

  public getName(): string {
    return "Eventos";
  }
}
