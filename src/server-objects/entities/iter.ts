import { Entity, OdataForeignKey } from "@bds/nt-context";
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

  public getOdataContextEntity(): any {
    return {
        name: this.getName(),
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        idResponsabileProcedimento: new OdataForeignKey(new Utente().getName(), "id"),
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
        idResponsabileAdozioneProcedimentoFinale: new OdataForeignKey(new Utente().getName(), "id"),
        idFaseCorrente: new OdataForeignKey(new Fase().getName(), "id"),
        idIterPrecedente: new OdataForeignKey(this.getName(), "id"),
        procedimentoCache: new OdataForeignKey(new ProcedimentoCache().getName(), "id")
      }
    };
  }

  public getName(): string {
    return "Iters";
  }
}
