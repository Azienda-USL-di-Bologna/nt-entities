import { Entity, OdataForeignKey } from "@bds/nt-context";
import { Evento } from "./evento";
import { Iter } from "./iter";
import { FaseIter } from "./fase-iter";
import { DocumentoIter } from "./documento-iter";
import { Utente } from "./utente";

export class EventoIter extends Entity {
  public id: number;
  public idEvento: Evento;
  public FK_id_evento: number;
  public idIter: Iter;
  public FK_id_iter: number;
  public idFaseIter: FaseIter;
  public FK_id_fase_iter: number;
  public idDocumentoIter: DocumentoIter;
  public FK_id_documento_iter: number;
  public dataOraEvento: Date;
  public autore: Utente;
  public FK_autore: number;
  public note: string;

  public getOdataContextEntity(): any {
    return {
      name: this.getName(),
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        idEvento: new OdataForeignKey(new Evento().getName(), "id"),
        idIter: new OdataForeignKey(new Iter().getName(), "id"),
        idFaseIter: new OdataForeignKey(new FaseIter().getName(), "id"),
        idDocumentoIter: new OdataForeignKey(new DocumentoIter().getName(), "id"),
        dataOraEvento: "DateTime",
        autore: new OdataForeignKey(new Utente().getName(), "id"),
        note: "String"
      }
    };
  }

  public getName(): string {
    return "EventoIters";
  }
}
