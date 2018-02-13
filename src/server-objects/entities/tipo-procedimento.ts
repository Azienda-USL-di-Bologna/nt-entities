import {Entity} from "@bds/nt-angular-context/entity";

export class TipoProcedimento extends Entity {
    public id: number;
    public nome: string;
    public descrizioneDefault: string;
    public modoApertura: string;
    public normaRiferimento: string;
    public dataInizioValidita: Date;
    public dataFineValidita: Date;
    public durataMassimaSospensione: number;
    public durataMassimaIter: number;
    public codice: number;
    public obbligoEsitoConclusivo: boolean;
    public pubblicazioneRegistroAccessi: boolean;

    public static getOdataContextEntity(): any {
        return {
            key: "id",
            keyType: "Int32",
            fieldTypes: {
                id: "Int32",
                nome: "String",
                descrizioneDefault: "String",
                modoApertura: "String",
                normaRiferimento: "String",
                dataInizioValidita: "DateTime",
                dataFineValidita: "DateTime",
                durataMassimaSospensione: "Int32",
                durataMassimaIter: "Int32",
                codice: "Int32",
                obbligoEsitoConclusivo: "Boolean",
                pubblicazioneRegistroAccessi: "Boolean"
            }
        };
    }
}
