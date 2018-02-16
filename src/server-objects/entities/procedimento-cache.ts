import { Entity, OdataForeignKey } from "@bds/nt-angular-context";
import { Utente } from "./utente";
import { Struttura } from "./struttura";
import { Iter } from "./iter";

export class ProcedimentoCache extends Entity {
  public id: number;
  public nomeTipoProcedimento: string;
  public descrizioneTipoProcedimento: string;
  public idStruttura: Struttura;
  public idTitolarePotereSostitutivo: Utente;
  public durataMassimaProcedimento: number;
  public durataMasiimaSospensione: number;
  public iter: Iter;

  public getOdataContextEntity(): any {
    return {
      name: this.getName(),
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        nomeTipoProcedimento: "String",
        descrizioneTipoProcedimento: "String",
        idStruttura: new OdataForeignKey(new Struttura().getName(), "id"),
        idTitolarePotereSostitutivo: new OdataForeignKey(new Utente().getName(), "id"),
        durataMassimaProcedimento: "Int32",
        durataMassimaSospensione: "Int32"
      }
    };
  }

  public getName(): string {
    return "ProcedimentoCaches";
  }
}
