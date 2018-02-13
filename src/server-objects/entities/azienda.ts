import {Struttura} from "./struttura";
import {AziendaTipoProcedimento} from "./azienda-tipo-procedimento";
import {Entity} from "@bds/nt-angular-context/entity";

export class Azienda extends Entity {
  public id: number;
  public nome: string;
  public aoo: string;
  public codice: string;
  public descrizione: string;
  public idAziendaGru: number;
  public schemaGru: string;
  public parametri: string;
  public strutturaList: Struttura[];
  public aziendaTipoProcedimentoList: AziendaTipoProcedimento[];

  public static getOdataContextEntity(): any {
    return {
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        nome: "String",
        aoo: "String",
        codice: "String",
        descrizione: "String",
        idAziendaGru: "Int32",
        schemaGru: "String",
        parametri: "String"
      }
    };
  }
}
