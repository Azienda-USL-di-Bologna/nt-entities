import { Entity } from "@bds/nt-angular-context/entity";
import {ENTITIES} from "../declarations";
import { OdataForeignKey } from "@bds/nt-angular-context/server-object";
import { FaseIter } from "./fase-iter";
import { Utente } from "./utente";
import { Fase } from "./fase";
import { ProcedimentoCache } from "./procedimento-cache";

export class Iter extends Entity {
  public id: number;
  public idResponsabileProcedimento: Utente;
  public FK_id_responsabile_procedimento: number;
  public numero: number;
  public anno: number;
  public oggetto: string;
  public stato: string;
  public dataCreazione: Date;
  public dataAvvio: Date;
  public dataChiusura: Date;
  public esito: string;
  public esitoMotivazione: string;
  public promotore: string;
  public presenzaControinteressati: string;
  public noteControinteressati: string;
  public modalitaCollegamentoPrecedente: string;
  public idFascicolo: string;
  public nomeFascicolo: string;
  public idTitolo: number;
  public nomeTitolo: string;
  public derogaDurata: number;
  public motivoDerogaDurata: string;
  public derogaSospensione: number;
  public motivoDerogaSospensione: string;
  public idResponsabileAdozioneProcedimentoFinale: Utente;
  public idFaseCorrente: Fase;
  public iterList: Iter[];
  public idIterPrecedente: Iter;
  public faseIterList: FaseIter[];
  public procedimentoCache: ProcedimentoCache;
  public dataChiusuraPrevista: Date;

  public static getOdataContextEntity(): any {
    return {
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        idResponsabileProcedimento: new OdataForeignKey(ENTITIES.Utente, "id"),
        numero: "Int32",
        anno: "Int32",
        oggetto: "String",
        stato: "String",
        dataCreazione: "DateTime",
        dataAvvio: "DateTime",
        dataChiusura: "DateTime",
        esito: "String",
        esitoMotivazione: "String",
        promotore: "String",
        presenzaControinteressati: "String",
        noteControinteressati: "String",
        modalitaCollegamentoPrecedente: "String",
        idFascicolo: "String",
        nomeFascicolo: "String",
        idTitolo: "Int32",
        nomeTitolo: "String",
        derogaDurata: "Int32",
        motivoDerogaDurata: "String",
        derogaSospensione: "Int32",
        motivoDerogaSospensione: "String",
        idResponsabileAdozioneProcedimentoFinale: new OdataForeignKey(ENTITIES.Utente, "id"),
        idFaseCorrente: new OdataForeignKey(ENTITIES.Fase, "id"),
        idIterPrecedente: new OdataForeignKey(ENTITIES.Iter, "id"),
        procedimentoCache: new OdataForeignKey(ENTITIES.ProcedimentoCache, "id")
      }
    };
  }
}
