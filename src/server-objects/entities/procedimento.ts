import { Entity, OdataForeignKey } from "@bds/nt-angular-context";
import { Utente } from "./utente";
import { AziendaTipoProcedimento } from "./azienda-tipo-procedimento";
import { Struttura } from "./struttura";

export class Procedimento extends Entity {
  public id: number;
  public idTitolarePotereSostitutivo: Utente;
  public FK_id_titolare_potere_sostitutivo: number;
  public idStrutturaTitolarePotereSostitutivo: Struttura;
  public FK_id_struttura_titolare_potere_sostitutivo: number;
  public idAziendaTipoProcedimento: AziendaTipoProcedimento;
  public FK_id_azienda_tipo_procedimento: number;
  public idStruttura: Struttura;
  public FK_id_struttura: number;
  public dataInizio: Date;
  public dataFine: Date;
  public ufficio: string;
  public modalitaInfo: string;
  public descrizioneAtti: string;
  public idResponsabileAdozioneAttoFinale: Utente;
  public FK_id_responsabile_adozione_atto_finale: number;
  public idStrutturaResponsabileAdozioneAttoFinale: Struttura;

  public getOdataContextEntity(): any {
    return {
      name: this.getName(),
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        idTitolarePotereSostitutivo: new OdataForeignKey(new Utente().getName(), "id"),
        idStrutturaTitolarePotereSostitutivo: new OdataForeignKey(new Struttura().getName(), "id"),
        idAziendaTipoProcedimento: new OdataForeignKey(new AziendaTipoProcedimento().getName(), "id"),
        idStruttura: new OdataForeignKey(new Struttura().getName(), "id"),
        dataInizio: "DateTime",
        dataFine: "DateTime",
        ufficio: "String",
        modalitaInfo: "String",
        descrizioneAtti: "String",
        idResponsabileAdozioneAttoFinale: new OdataForeignKey(new Utente().getName(), "id"),
        idStrutturaResponsabileAdozioneAttoFinale: new OdataForeignKey(new Struttura().getName(), "id")
      }
    };
  }

  public getName(): string {
    return "Procedimentos";
  }
}
