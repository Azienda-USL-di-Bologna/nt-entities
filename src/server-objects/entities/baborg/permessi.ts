import {Entity, OdataForeignKey} from "@bds/nt-context";
import {PecUtenti} from "./pec-utenti";
import {UtenteStruttura} from "./utente-struttura";
import {TipiPermesso} from "./tipi-permesso";

export class Permessi extends Entity {
    public id: number;
    public provenienza: string;
    public FK_id_pec_utenti: number;
    public idPecUtenti: PecUtenti;
    public FK_id_tipo_permesso: number;
    public idTipoPermesso: TipiPermesso;
    public FK_id_utente_struttura: number;
    public idUtenteStruttura: UtenteStruttura;

    public getOdataContextEntity(): any {
        return {
            name: this.getName(),
            key: "id",
            keyType: "Int32",
            fieldTypes: {
                id: "Int32",
                provenienza: "String",
                FK_id_pec_utenti: "Int32",
                idPecUtenti: new OdataForeignKey(new PecUtenti().getName(), "id"),
                idTipoPermesso: new OdataForeignKey(new TipiPermesso().getName(), "id"),
                idUtenteStruttura: new OdataForeignKey(new UtenteStruttura().getName(), "id")
            }
        };
    }

    public getName(): string {
        return "Permessis";
    }
}
