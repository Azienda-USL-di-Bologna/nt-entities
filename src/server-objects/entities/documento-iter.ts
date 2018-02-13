import { Entity } from "@bds/nt-angular-context/entity";
import { Iter } from "./iter";
import { OdataForeignKey } from "@bds/nt-angular-context/server-object";
import {ENTITIES} from "../declarations";

export class DocumentoIter extends Entity {
  public id: number;
  public numeroRegistro: string;
  public anno: number;
  public registro: string;
  public idIter: Iter;
  public FK_id_iter: number;

  public static getOdataContextEntity(): any {
    return {
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        numeroRegistro: "String",
        anno: "Int32",
        registro: "String",
        idIter: new OdataForeignKey(ENTITIES.Iter, "id")
      }
    };
  }
}
