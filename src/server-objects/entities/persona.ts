import {Azienda} from "./azienda";
import {Ruolo} from "./ruolo";
import {ENTITIES} from "../declarations";
import {Entity} from "@bds/nt-angular-context/entity";
import {OdataForeignKey} from "@bds/nt-angular-context/server-object";

export class Persona extends Entity {
  public id: number;
  public attiva: boolean;
  public codiceFiscale: string;
  public codiceStruttura: string;
  public cognome: string;
  public nome: string;
  public descrizione: string;
  public bitRuoli: number;

  public static getOdataContextEntity(): any {
    return {
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        cognome: "String",
        nome: "String",
        attiva: "Boolean",
        codiceFiscale: "String",
        descrizione: "String",
        bitRuoli: "Int32"
      }
    };
  }
}
