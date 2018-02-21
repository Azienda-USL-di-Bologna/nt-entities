import {Entity, OdataForeignKey} from "@bds/nt-context";
import {AfferenzaStruttura} from "./afferenza-struttura";
import {Struttura} from "./struttura";
import {Utente} from "./utente";

export class UtenteStruttura extends Entity {
  public id: number;
  public idAfferenzaStruttura: AfferenzaStruttura;
  public idStruttura: Struttura;
  public idUtente: Utente;

  public getOdataContextEntity(): any {
    return {
      name: this.getName(),
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        idAfferenzaStruttura: new OdataForeignKey(new AfferenzaStruttura().getName(), "id"),
        idStruttura: new OdataForeignKey(new Struttura().getName(), "id"),
        idUtente: new OdataForeignKey(new Utente().getName(), "id")
      }
    };
  }

  public getName(): string {
    return "UtenteStrutturas";
  }
}
