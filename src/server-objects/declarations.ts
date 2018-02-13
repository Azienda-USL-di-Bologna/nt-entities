import {ServerObjectsDescriptor} from "@bds/nt-angular-context/context-module-config";
import {Azienda} from "./entities/azienda";
import {Utente} from "./entities/utente";
import {Struttura} from "./entities/struttura";
import {UtenteStruttura} from "./entities/utente-struttura";
import {AfferenzaStruttura} from "./entities/afferenza-struttura";
import {TipoProcedimento} from "./entities/tipo-procedimento";
import {Ruolo} from "./entities/ruolo";
import {AziendaTipoProcedimento} from "./entities/azienda-tipo-procedimento";
import {Titolo} from "./entities/titolo";
import {Procedimento} from "./entities/procedimento";
import {Iter} from "./entities/iter";
import {Fase} from "./entities/fase";
import {FaseIter} from "./entities/fase-iter";
import {Evento} from "./entities/evento";
import {EventoIter} from "./entities/evento-iter";
import {ProcedimentoCache} from "./entities/procedimento-cache";
import {DocumentoIter} from "./entities/documento-iter";
import {GetStruttureByTipoProcedimento} from "./functions-import/get-strutture-by-tipo-procedimento";
/**
 * qui vanno le definizioni di entità, function import e view
 */
export const ENTITIES: ServerObjectsDescriptor = {
    Azienda: {name: "Aziendas", class: Azienda},
    Utente: {name: "Utentes", class: Utente},
    Struttura: {name: "Strutturas", class: Struttura},
    UtenteStruttura: {name: "UtenteStrutturas", class: UtenteStruttura},
    AfferenzaStruttura: {name: "AfferenzaStrutturas", class: AfferenzaStruttura},
    TipoProcedimento: {name: "TipoProcedimentos", class: TipoProcedimento},
    Ruolo: {name: "Ruolos", class: Ruolo},
    AziendaTipoProcedimento: {name: "AziendaTipoProcedimentos", class: AziendaTipoProcedimento},
    Titolo: {name: "Titolos", class: Titolo},
    Procedimento: {name: "Procedimentos", class: Procedimento},
    Iter: {name: "Iters", class: Iter},
    Fase: {name: "Fases", class: Fase},
    FaseIter: {name: "FaseIters", class: FaseIter},
    Evento: {name: "Eventos", class: Evento},
    EventoIter: {name: "EventoIters", class: EventoIter},
    ProcedimentoCache: {name: "ProcedimentoCaches", class: ProcedimentoCache},
    DocumentoIter: {name: "DocumentoIters", class: DocumentoIter}
};

export const FUNCTIONS_IMPORT: ServerObjectsDescriptor = {
    GetStruttureByTipoProcedimento: {name: "GetStruttureByTipoProcedimento", class: GetStruttureByTipoProcedimento},
};

export const VIEWS: ServerObjectsDescriptor = {};
