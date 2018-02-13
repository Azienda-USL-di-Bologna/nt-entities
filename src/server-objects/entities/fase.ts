import { Entity } from "@bds/nt-angular-context/entity";
import {ENTITIES} from "../declarations";
import { OdataForeignKey } from "@bds/nt-angular-context/server-object";
import { FaseIter } from "./fase-iter";

export class Fase extends Entity {
  public id: number;
  public nome: string;
  public ordinale: number;
  public faseDiChiusura: boolean;
//   iterList: Iter[];
  public fasiIter: FaseIter[];

  public static getOdataContextEntity(): any {
    return {
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        nome: "String",
        ordinale: "Int32",
        faseDiChiusura: "Boolean"
      }
    };
  }
}
