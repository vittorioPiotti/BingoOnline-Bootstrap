CREATE TABLE partita (
    id VARCHAR(6) PRIMARY KEY,
    numeriEstratti TEXT,
    partecipanti VARCHAR(200) DEFAULT '',
    premi TEXT,
    storico TEXT ,
    stato ENUM('valido', 'scaduto') DEFAULT 'valido'
);
