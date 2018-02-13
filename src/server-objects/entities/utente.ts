import {Azienda} from "./azienda";
import {ENTITIES} from "../declarations";
import {Entity} from "@bds/nt-angular-context/entity";
import {OdataForeignKey} from "@bds/nt-angular-context/server-object";

export class Utente extends Entity {
  public id: number;
  public attivo: boolean;
  public codiceFiscale: string;
  public codiceStruttura: string;
  public cognome: string;
  public descrizione: string;
  public dominio: number;
  public email: string;
  public fax: string;
  public idInquadramento: number;
  public matricola: string;
  public nome: string;
  public omonimia: boolean;
  public passwordHash: string;
  public telefono: string;
  public username: string;
  public FK_id_azienda: number;
  public idAzienda: Azienda;
  public bitRuoli: number;

  public static getOdataContextEntity(): any {
    return {
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        username: "String",
        attivo: "Boolean",
        codiceStruttura: "String",
        descrizione: "String",
        dominio: "String",
        email: "String",
        fax: "String",
        idInquadramento: "Int32",
        omonimia: "Boolean",
        passwordHash: "String",
        telefono: "String",
        bitRuoli: "Int32",
        idAzienda: new OdataForeignKey(ENTITIES.Azienda, "id")
      }
    };
  }
}
