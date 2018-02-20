export enum RUOLI {UG, MOS, OS, CA, CI, AS, SD}

export const BIT_RUOLI = {US: 1, MOBS: 2, OBS: 4, ADM: 8, SUPERADM: 16};

export enum CODICE_AFFERENZA_STRUTTURA {DIRETTA, FUNZIONALE}

export interface BusinessObjectKeyNames {
    [key: string]: string;
}

export const bUtente: BusinessObjectKeyNames = {
    aziende: "AZIENDE",
    bitRuoliPersona: "BIT_RUOLI_PERSONA",
    idUtente: "IDUTENTE",
    aziendaLogin: "AZIENDA_LOGIN",
    username: "USERNAME",
    struttureAfferenzaFunzionale: "STRUTTURE_AFFERENZA_FUNZIONALE",
    bitRuoliUtente: "BIT_RUOLI_UTENTE",
    struttureAfferenzaDiretta: "STRUTTURE_AFFERENZA_DIRETTA",
    ruoli: "RUOLI"
};

export const bAzienda: BusinessObjectKeyNames = {
    schema: "SCHEMA_GRU",
    id: "ID",
    codiceRegione: "CODICE_REGIONE",
    nome: "NOME",
    aoo: "AOO",
    parametri: "PARAMETRI",
    codice: "CODICE",
    idAziendaGru: "ID_AZIENDA_GRU",
    descrizione: "DESCRIZIONE"
};

export const bStruttura: BusinessObjectKeyNames = {
    id: "ID",
    dataCessazione: "DATA_CESSAZIONE",
    attiva: "ATTIVA",
    dislocazione: "DISLOCAZIONE",
    dataAttivazione: "DATA_ATTIVAZIONE",
    strutturaSegreteria: "STRUTTURA_SEGRETERIA",
    codice: "CODICE",
    azienda: "AZIENDA",
    spettrale: "SPETTRALE",
    strutturaPadre: "STRUTTURA_PADRE",
    nome: "NOME",
    codiceDislocazione: "CODICE_DISLOCAZIONE"
};

export const bRuolo: BusinessObjectKeyNames = {
    id: "ID",
    mascheraBit: "MASCHERA_BIT",
    nome: "NOME",
    nomeBreve: "NOME_BREVE",
    superAzienda: "SUPER_AZIENDALE"
};
