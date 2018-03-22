import { Azienda } from "./azienda";
import { Entity, OdataForeignKey } from "@bds/nt-context";
import { Persona } from "./persona";

export class Utente extends Entity {
  public id: number;
  public attivo: boolean;
  /* public codiceFiscale: string; */
  /* public codiceStruttura: string; */
  /* public cognome: string;
  public descrizione: string; */
  public dominio: number;
  public email: string;
  public fax: string;
  public idInquadramento: number;
  /* public matricola: string;
  public nome: string; */
  public omonimia: boolean;
  public passwordHash: string;
  public telefono: string;
  public username: string;
  public FK_id_azienda: number;
  public idAzienda: Azienda;
  public bitRuoli: number;
  public idPersona: Persona;
  public FK_id_persona: number;

  public getOdataContextEntity(): any {
    return {
      name: this.getName(),
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        username: "String",
        attivo: "Boolean",
        /* codiceStruttura: "String", */
        /* descrizione: "String", */
        dominio: "String",
        email: "String",
        fax: "String",
        idInquadramento: "Int32",
        omonimia: "Boolean",
        passwordHash: "String",
        telefono: "String",
        bitRuoli: "Int32",
        idAzienda: new OdataForeignKey(new Azienda().getName(), "id"),
        idPersona: new OdataForeignKey(new Persona().getName(), "id")
      }
    };
  }

  public getName(): string {
    return "Utentes";
  }
}
