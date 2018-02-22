/**
 * classe che espone cosa deve essere visibile al di fuori del modulo.
 * Per rendere visibile fuori dal modulo un component/service occorre inserirlo in questo file
 */
export { EntitiesModule } from "./entities.module";
export { AfferenzaStruttura } from "./server-objects/entities/afferenza-struttura";
export { Azienda } from "./server-objects/entities/azienda";
export { AziendaTipoProcedimento } from "./server-objects/entities/azienda-tipo-procedimento";
export { DocumentoIter } from "./server-objects/entities/documento-iter";
export { Evento } from "./server-objects/entities/evento";
export { EventoIter } from "./server-objects/entities/evento-iter";
export { Fase } from "./server-objects/entities/fase";
export { FaseIter } from "./server-objects/entities/fase-iter";
export { Iter } from "./server-objects/entities/iter";
export { Persona } from "./server-objects/entities/persona";
export { Procedimento } from "./server-objects/entities/procedimento";
export { ProcedimentoCache } from "./server-objects/entities/procedimento-cache";
export { Ruolo } from "./server-objects/entities/ruolo";
export { Struttura } from "./server-objects/entities/struttura";
export { TipoProcedimento } from "./server-objects/entities/tipo-procedimento";
export { Titolo } from "./server-objects/entities/titolo";
export { Utente } from "./server-objects/entities/utente";
export { UtenteStruttura } from "./server-objects/entities/utente-struttura";

export { GetStruttureByTipoProcedimento } from "./server-objects/functions-import/get-strutture-by-tipo-procedimento";
export { GetIterUtente } from "./server-objects/functions-import/get-iter-utente";
export { GetUtentiGerarchiaStruttura } from "./server-objects/functions-import/get-utenti-gerarchia-struttura"

export { RUOLI, CODICE_AFFERENZA_STRUTTURA, bUtente, bStruttura, bAzienda, bRuolo, BusinessObjectKeyNames } from "./server-objects/declarations";
