import {Entity, OdataForeignKey} from "@bds/nt-context";
import {PecStruttura} from "./pec-struttura";
import {PecProvider} from "./pec-provider";
import {PecUtenti} from "./pec-utenti";
import {Azienda} from "./azienda";

export class Pec extends Entity {
    public id: number;
    public indirizzo: string;
    public username: string;
    public password: string;
    public attiva: boolean;
    public messagePolicy: number;
    public perRiservato: boolean;
    public pecStrutturaList: PecStruttura[];
    public FK_pec_provider: number;
    public idPecProvider: PecProvider;
    public FK_id_azienda: number;
    public idAzienda: Azienda;
    public pecUtentiList: PecUtenti[];

    public getOdataContextEntity(): any {
        return {
            name: this.getName(),
            key: "id",
            keyType: "Int32",
            fieldTypes: {
                id: "Int32",
                indirizzo: "String",
                username: "String",
                password: "String",
                attiva: "Boolean",
                messagePolicy: "Int32",
                perRiservato: "Boolean",
                idPecProvider: new OdataForeignKey(new PecProvider().getName(), "id"),
                idAzienda: new OdataForeignKey(new Azienda().getName(), "id")
            }
        };
    }

    public getName(): string {
        return "Pecs";
    }
}
