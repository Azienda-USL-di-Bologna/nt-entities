import {View} from "@bds/nt-context";

export class UtenteAfferenzaDiretta extends View {
    public id: number;
    public username: string;
    public matricola: string;
    public nome: string;
    public cognome: string;
    public codiceFiscale: string;
    public descrizione: string;
    public idRuolo: number;
    public email: string;
    public idInquadramento: string;
    public telefono: string;
    public fax: string;
    public omonimia: boolean;
    public passwordHash: string;
    public dominio: number;
    public attivo: boolean;
    public idAzienda: number;
    public idStruttura: number;
    public nomeStruttura: string;

    public getOdataContextEntity(): any {
        return {
            name: this.getName(),
            key: "id",
            keyType: "Int32",
            fieldTypes: {
                id: "Int32",
                username: "String",
                matricola: "String",
                nome: "String",
                cognome: "String",
                codiceFiscale: "String",
                descrizione: "String",
                idRuolo: "Int32",
                email: "String",
                idInquadramento: "String",
                telefono: "String",
                fax: "String",
                omonimia: "Boolean",
                passwordHash: "String",
                dominio: "Int32",
                attivo: "Boolean",
                idAzienda: "Int32",
                idStruttura: "Int32",
                nomeStruttura: "String"
            }
        };
    }

    public getName(): string {
        return "UtentiAfferenzaDirettas";
    }
}