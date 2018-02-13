import { Entity } from "@bds/nt-angular-context/entity";
import { Utente } from "./utente";
import { AziendaTipoProcedimento } from "./azienda-tipo-procedimento";
import { Struttura } from "./struttura";
import { OdataForeignKey } from "@bds/nt-angular-context/server-object";
import {ENTITIES} from "../declarations";

export class Procedimento extends Entity {
  public id: number;
  public idTitolarePotereSostitutivo: Utente;
  public FK_id_titolare_potere_sostitutivo: number;
  public idAziendaTipoProcedimento: AziendaTipoProcedimento;
  public FK_id_azienda_tipo_procedimento: number;
  public idStruttura: Struttura;
  public FK_id_struttura: number;
  public dataInizio: Date;
  public dataFine: Date;
  public ufficio: string;
  public modalitaInfo: string;
  public descrizioneAtti: string;

  public static getOdataContextEntity(): any {
    return {
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        idTitolarePotereSostitutivo: new OdataForeignKey(ENTITIES.Utente, "id"),
        idAziendaTipoProcedimento: new OdataForeignKey(ENTITIES.AziendaTipoProcedimento, "id"),
        idStruttura: new OdataForeignKey(ENTITIES.Struttura, "id"),
        dataInizio: "DateTime",
        dataFine: "DateTime",
        ufficio: "String",
        modalitaInfo: "String",
        descrizioneAtti: "String"
      }
    };
  }
}
