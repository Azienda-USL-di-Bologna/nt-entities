import { Entity, OdataForeignKey } from "@bds/nt-angular-context";
import { Utente } from "./utente";
import { AziendaTipoProcedimento } from "./azienda-tipo-procedimento";
import { Struttura } from "./struttura";

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

  public getOdataContextEntity(): any {
    return {
      name: this.getName(),
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        idTitolarePotereSostitutivo: new OdataForeignKey(new Utente().getName(), "id"),
        idAziendaTipoProcedimento: new OdataForeignKey(new AziendaTipoProcedimento().getName(), "id"),
        idStruttura: new OdataForeignKey(new Struttura().getName(), "id"),
        dataInizio: "DateTime",
        dataFine: "DateTime",
        ufficio: "String",
        modalitaInfo: "String",
        descrizioneAtti: "String"
      }
    };
  }

  public getName(): string {
    return "Procedimentos";
  }
}
