import { Entity, OdataForeignKey } from "@bds/nt-context";
import { Iter } from "./iter";

export class DocumentoIter extends Entity {
  public id: number;
  public numeroRegistro: string;
  public anno: number;
  public registro: string;
  public idIter: Iter;
  public FK_id_iter: number;

  public getOdataContextEntity(): any {
    return {
      name: this.getName(),
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        numeroRegistro: "String",
        anno: "Int32",
        registro: "String",
        idIter: new OdataForeignKey(new Iter().getName(), "id")
      }
    };
  }

  public getName(): string {
    return "DocumentoIters";
  }
}
