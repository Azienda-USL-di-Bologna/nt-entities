import {Azienda} from "./azienda";
import {Entity} from "@bds/nt-angular-context/entity";
import {ENTITIES} from "../declarations";
import {OdataForeignKey} from "@bds/nt-angular-context/server-object";

export class Struttura extends Entity {
  public id: number;
  public attiva: boolean;
  public codice: number;
  public codiceDislocazione: string;
  public dataAttivazione: Date;
  public dataCessazione: Date;
  public dislocazione: string;
  public nome: string;
  public spettrale: boolean;
  public usaSegreteriaBucataPadre: boolean;
  public FK_id_azienda: number;
  public idAzienda: Azienda;
  public FK_id_struttura_padre: number;
  public idStrutturaPadre: Struttura;
  public FK_id_struttura_segreteria: number;
  public idStrutturaSegreteria: Struttura;

  public static getOdataContextEntity(): any {
    return {
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        attiva: "Boolean",
        codice: "Int32",
        codiceDislocazione: "String",
        dataAttivazione: "DateTime",
        dataCessazione: "DateTime",
        dislocazione: "String",
        nome: "String",
        spettrale: "Boolean",
        usaSegreteriaBucataPadre: "Boolean",
        idAzienda: new OdataForeignKey(ENTITIES.Azienda, "id"),
        idStrutturaPadre: new OdataForeignKey(ENTITIES.Struttura, "id"),
        idStrutturaSegreteria: new OdataForeignKey(ENTITIES.Struttura, "id"),
      }
    };
  }
}
