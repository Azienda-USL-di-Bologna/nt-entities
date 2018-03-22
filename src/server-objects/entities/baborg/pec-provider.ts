import {Entity, OdataForeignKey} from "@bds/nt-context";
import {Pec} from "./pec";

export class PecProvider extends Entity {
    public id: number;
    public descrizione: string;
    public pec: boolean;
    public host: string;
    public port: number;
    public protocol: string;
    public hostOut: string;
    public portOut: string;
    public protocolOut: string;
    public pecList: Pec[];

    public getOdataContextEntity(): any {
        return {
            name: this.getName(),
            key: "id",
            keyType: "Int32",
            fieldTypes: {
                id: "Int32",
                descrizione: "String",
                pec: "Boolean",
                host: "String",
                port: "Int32",
                protocol: "String",
                hostOut: "String",
                portOut: "String",
                protocolOut: "String",
            }
        };
    }

    public getName(): string {
        return "PecProviders";
    }
}
