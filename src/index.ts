/**
 * classe che espone cosa deve essere visibile al di fuori del modulo.
 * Per rendere visibile fuori dal modulo un component/service occorre inserirlo in questo file
 */
export { EntitiesModule } from "./entities.module";
export { Stato } from "./server-objects/entities/gipi/stato"

/**
 * ENTITIES BABORG
 */
export { AfferenzaStruttura } from "./server-objects/entities/baborg/afferenza-struttura";
export { Azienda } from "./server-objects/entities/baborg/azienda";
export { Pec } from "./server-objects/entities/baborg/pec";
export { PecProvider } from "./server-objects/entities/baborg/pec-provider";
export { PecStruttura } from "./server-objects/entities/baborg/pec-struttura";
export { PecUtenti } from "./server-objects/entities/baborg/pec-utenti";
export { Permessi } from "./server-objects/entities/baborg/permessi";
export { Persona } from "./server-objects/entities/baborg/persona";
export { Ruolo } from "./server-objects/entities/baborg/ruolo";
export { Struttura } from "./server-objects/entities/baborg/struttura";
export { TipiPermesso } from "./server-objects/entities/baborg/tipi-permesso";
export { Utente } from "./server-objects/entities/baborg/utente";
export { UtenteStruttura } from "./server-objects/entities/baborg/utente-struttura";

/**
 * ENTITIES GIPI
 */
export { AziendaTipoProcedimento } from "./server-objects/entities/gipi/azienda-tipo-procedimento";
export { DocumentoIter } from "./server-objects/entities/gipi/documento-iter";
export { Evento } from "./server-objects/entities/gipi/evento";
export { EventoIter } from "./server-objects/entities/gipi/evento-iter";
export { Fase } from "./server-objects/entities/gipi/fase";
export { FaseIter } from "./server-objects/entities/gipi/fase-iter";
export { Iter } from "./server-objects/entities/gipi/iter";
export { Procedimento } from "./server-objects/entities/gipi/procedimento";
export { ProcedimentoCache } from "./server-objects/entities/gipi/procedimento-cache";
export { TipoProcedimento } from "./server-objects/entities/gipi/tipo-procedimento";
export { Titolo } from "./server-objects/entities/gipi/titolo";

/**
 * FUNCTION IMPORT GIPI
 */
export { GetUtentiGerarchiaStruttura } from "./server-objects/functions-import/gipi/get-utenti-gerarchia-struttura";
export { GetIterUtente } from "./server-objects/functions-import/gipi/get-iter-utente";
export { GetStruttureByTipoProcedimento } from "./server-objects/functions-import/gipi/get-strutture-by-tipo-procedimento";

/**
 * FUNCTION IMPORT BABORG
 */

/**
 * VIEW GIPI
 */

/**
 * VIEW BABORG
 */
export { UtenteAfferenzaDiretta } from "./server-objects/view/baborg/utente_afferenza_diretta";

export { RUOLI, CODICE_AFFERENZA_STRUTTURA, bUtente, bStruttura, bAzienda, bRuolo, BusinessObjectKeyNames } from "./server-objects/declarations";
