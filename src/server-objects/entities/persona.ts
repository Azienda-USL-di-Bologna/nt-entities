import {Entity} from "@bds/nt-angular-context";

export class Persona extends Entity {
  public id: number;
  public attiva: boolean;
  public codiceFiscale: string;
  public codiceStruttura: string;
  public cognome: string;
  public nome: string;
  public descrizione: string;
  public bitRuoli: number;

  public getOdataContextEntity(): any {
    return {
      name: this.getName(),
      key: "id",
      keyType: "Int32",
      fieldTypes: {
        id: "Int32",
        cognome: "String",
        nome: "String",
        attiva: "Boolean",
        codiceFiscale: "String",
        descrizione: "String",
        bitRuoli: "Int32"
      }
    };
  }

  public getName(): string {
    return "Personas";
  }
}
