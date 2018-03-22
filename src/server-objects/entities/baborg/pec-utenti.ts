import {Entity, OdataForeignKey} from "@bds/nt-context";
import {Pec} from "./pec";
import {Utente} from "./utente";
import {UtenteAfferenzaDiretta} from "../../view/baborg/utente_afferenza_diretta";

export class PecUtenti extends Entity {
    public id: number;
    public FK_id_pec: number;
    public idPec: Pec;
    public FK_id_utente: number;
    public idUtente: Utente;
    public FK_id_utente_afferenza: number;
    public idUtenteAfferenza: UtenteAfferenzaDiretta;

    public getOdataContextEntity(): any {
        return {
            name: this.getName(),
            key: "id",
            keyType: "Int32",
            fieldTypes: {
                id: "Int32",
                idPec: new OdataForeignKey(new Pec().getName(), "id"),
                idUtente: new OdataForeignKey(new Utente().getName(), "id"),
                idUtenteAfferenza: new OdataForeignKey(new UtenteAfferenzaDiretta().getName(), "id")
            }
        };
    }

    public getName(): string {
        return "PecUtentis";
    }
}
