import {Entity} from "@bds/nt-context";

export class AfferenzaStruttura extends Entity {
  public id: number;
  public descrizione: string;
  public codice: string;

  public getOdataContextEntity(): any {
    return {
        name: this.getName(),
        key: "id",
        keyType: "Int32",
        fieldTypes: {
            id: "Int32",
            descrizione: "String",
            codice: "String"
        }
    };
  }

  public getName(): string {
    return "AfferenzaStrutturas";
  }
}
