import {Entity} from "@bds/nt-angular-context/entity";

export class AfferenzaStruttura extends Entity {
  public id: number;
  public descrizione: string;

  public static getOdataContextEntity(): any {
    return {
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        descrizione: "String"
      }
    };
  }
}
