import { Entity } from "@bds/nt-angular-context/entity";
import { Evento } from "./evento";
import { Iter } from "./iter";
import { FaseIter } from "./fase-iter";
import { OdataForeignKey } from "@bds/nt-angular-context/server-object";
import {ENTITIES} from "../declarations";
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

  public static getOdataContextEntity(): any {
    return {
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        idEvento: new OdataForeignKey(ENTITIES.Evento, "id"),
        idIter: new OdataForeignKey(ENTITIES.Iter, "id"),
        idFaseIter: new OdataForeignKey(ENTITIES.FaseIter, "id"),
        idDocumentoIter: new OdataForeignKey(ENTITIES.DocumentoIter, "id"),
        dataOraEvento: "DateTime",
        autore: new OdataForeignKey(ENTITIES.Utente, "id"),
        note: "String"
      }
    };
  }
}
