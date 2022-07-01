import { Entity, OdataForeignKey } from "@bds/nt-context";
import { FaseIter } from "./fase-iter";

export class Fase extends Entity {
  public id: number;
  public nome: string;
  public ordinale: number;
  public faseDiChiusura: boolean;
//   iterList: Iter[];
  public fasiIter: FaseIter[];

  public getOdataContextEntity(): any {
    return {
      name: this.getName(),
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

  public getName(): string {
    return "Fases";
  }
}
