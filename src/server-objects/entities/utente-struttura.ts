import {Entity} from "@bds/nt-angular-context/entity";
import {AfferenzaStruttura} from "./afferenza-struttura";
import {Struttura} from "./struttura";
import {Utente} from "./utente";
import {ENTITIES} from "../declarations";
import {OdataForeignKey} from "@bds/nt-angular-context/server-object";

export class UtenteStruttura extends Entity {
  public id: number;
  public idAfferenzaStruttura: AfferenzaStruttura;
  public idStruttura: Struttura;
  public idUtente: Utente;

  public static getOdataContextEntity(): any {
    return {
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        idAfferenzaStruttura: new OdataForeignKey(ENTITIES.AfferenzaStruttura, "id"),
        idStruttura: new OdataForeignKey(ENTITIES.Struttura, "id"),
        idUtente: new OdataForeignKey(ENTITIES.Utente, "id")
      }
    };
  }
}
