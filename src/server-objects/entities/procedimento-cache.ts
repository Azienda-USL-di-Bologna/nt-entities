import { Entity } from "@bds/nt-angular-context/entity";
import {ENTITIES} from "../declarations";
import { OdataForeignKey } from "@bds/nt-angular-context/server-object";
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

  public static getOdataContextEntity(): any {
    return {
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        nomeTipoProcedimento: "String",
        descrizioneTipoProcedimento: "String",
        idStruttura: new OdataForeignKey(ENTITIES.Struttura, "id"),
        idTitolarePotereSostitutivo: new OdataForeignKey(ENTITIES.Utente, "id"),
        durataMassimaProcedimento: "Int32",
        durataMassimaSospensione: "Int32"
      }
    };
  }
}
