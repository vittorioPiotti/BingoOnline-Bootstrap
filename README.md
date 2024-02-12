# Documentazione Tombola MultiPlayer

## Indice

1. [Introduzione](#1-introduzione)
2. [Tecnologie Utilizzate](#2-tecnologie-utilizzate)
3. [Struttura del Progetto](#3-struttura-del-progetto)
4. [Componenti Principali](#4-componenti-principali)
5. [Routing](#5-routing)
6. [Gestione dello Stato](#6-gestione-dello-stato)
7. [Chiamate API](#7-chiamate-api)
8. [Gestione delle Eccezioni](#8-gestione-delle-eccezioni)
9. [Stili](#9-stili)
10. [Testing](#10-testing)
11. [Avvio e Sviluppo Locale](#11-avvio-e-sviluppo-locale)
12. [Distribuzione](#12-distribuzione)
13. [Conclusione](#13-conclusione)


## 1. Introduzione

Il progetto Tombola Online si propone di rendere l'esperienza di gioco della Tombola in un'applicazione web MultiPlayer offrendo un'esperienza utente con le seguenti features.


### Indice

1. [Accesso alla Partita](#Accesso-alla-Partita)
2. [Preparazione al Gioco](#Preparazione-al-Gioco)
3. [Fase di Gioco](#Fase-di-Gioco)

---

### Accesso alla Partita

![Accesso alla Partita](images/Accesso-alla-Partita.png)

L'utente inserisce lo username e può o creare una partita o accedere ad un altra esistente

### Preparazione al Gioco

![Form di registrazione del cliente](images/accesso-alla-partita.png)

>[!IMPORTANT]
>Solo se l'utente ha effettuato l'[accesso alla partita](#Accesso-alla-Partita) può accede alle funzionalità  del gioco


>[!IMPORTANT]
>La partita inizia solo se il creatore la avvia quando  tutti i giocatori sono pronti al gioco [![Stato](https://img.shields.io/badge/Stato-Blu-blue)](#Lista-partecipanti)


### Fase di Gioco

1. [Features del gioco](#Features-del-gioco)
2. [Features Multiplayer](#Features-Multiplayer)

---

### Features del gioco

#### Indice

1. [Acquisto Cartelle Botteghino](#acquisto-cartelle-botteghino)
2. [Acquisto Cartelle Botteghino Tabellone](#acquisto-cartelle-botteghino-tabellone)

---

#### Acquisto Cartelle Botteghino

![Form di registrazione del cliente](images/acquisto-cartelle-botteghino.png)

L'utente acquista le cartelle del botteghino



#### Acquisto Cartelle Botteghino Tabellone

![Form di registrazione del cliente](images/acquisto-cartelle-tabellone.png)

L'utente acquista le cartelle del tabellone


### Features Multiplayer

#### Indice

2. [Lista partecipanti](#Lista-partecipanti)
3. [Chat di gioco](#Chat-di-gioco)
4. [Classifica giocatori](#Classifica-giocatori)
5. [Numeri estratti](#Numeri-estratti)

---


#### Lista partecipanti

![Form di inizio della partita](images/Lista-partecipanti.png)

Stati dei partecipanti:
- ![Stato](https://img.shields.io/badge/Stato-Rosso-red) se l'utente non ha comprato nessuna cartella
- ![Stato](https://img.shields.io/badge/Stato-Verde-green) se l'utente ha comprato almeno una cartella
- ![Stato](https://img.shields.io/badge/Stato-Blu-blue) se l'utente sta giocando 


#### Chat di gioco

Chat di gioco per interagire con gli altri utenti

>[!WARNING]
>Nessuna censura delle parole inappropriate

>[!TIP]
>In future implementazioni la censura delle parole inappropriate

#### Classifica giocatori

Classifica dei giocatori e dei premi riscattati

#### Numeri estratti

Visualzizazione di tutti i numeri estratti

## 2. Tecnologie Utilizzate

### Teconologie Backend


[`SQL 2022`](https://sqlserverbuilds.blogspot.com/)&ensp;&ensp;&ensp;[`PHP v8.3.2`](https://www.php.net/supported-versions.php)

### Teconologie Frontend

`Javascript ES6 v18.5`&ensp;&ensp;&ensp;`HTML v5.3`&ensp;&ensp;&ensp;`CSS v3`&ensp;&ensp;&ensp;[`Bootstrap v5.3`](https://getbootstrap.com/docs/versions/)&ensp;&ensp;&ensp;


![Tecnologia](https://img.shields.io/badge/Tecnologia-React-yellow)

![Compatibilità](https://img.shields.io/badge/Compatibilit%C3%A0%20Web-Chrome%20%7C%20Firefox%20%7C%20Safari-green)

![Linguaggio](https://img.shields.io/badge/Linguaggio-JavaScript-orange)




## 3. Struttura del Progetto

### Indice

1. [Organizzazione dei Componenti Grafici](#organizzazione-dei-componenti-grafici)
2. [Vantaggi Strutturali](#vantaggi-strutturali)
3. [Struttura dei File in un Albero di Path](#struttura-dei-file-in-un-albero-di-path)

---

### Organizzazione dei Componenti Grafici

L'organizzazione dei componenti grafici è dinamica e sviluppata in funzione degli oggetti in `JavaScript ES6` quindi l'architettura risulta suddivisa in classi che definiscono i vari componenti grafici

### Vantaggi Strutturali

- **Modularità e Riutilizzo del Codice** 

- **Organizzazione e Chiarezza Strutturale** 

- **Incapsulamento e Separazione delle Responsabilità**

- **Estensibilità e Scalabilità**

- **Maggiore Manutentibilità** 

### Struttura dei File in un Albero di Path

- **index**

   _Directory principale del progetto con tutti gli stili e gli script js e php ._
  - <a id="index"></a>`index.php`: _Contiene il codice per la pagina principale del sito web ._
  - <a id="server"></a>`server.php`: _Contiene il codice per gestire le richieste provenienti dal client e le operazioni sul lato server ._

  - **src/**
    
     _Directory principale del codice sorgente._
    - <a id="style"></a>**style/**

       _Contiene tutti i fogli di stile css sviluppati e di bootstrap._
       - `stile.css`: _Foglio di stile con gli stili globali per tutto il progetto._
     
    - <a id="script"></a>**script/**

       _Contiene tutti gli script sviluppati e di bootstrap._
       - `script.js`: _Script che sviluppa tutta la logica del progetto e la grafica._
     

      


## 4. Componenti Principali

| Nome Form            | Descrizione Form                                                                                                                    | Immagine Form    |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------|------------------|
| Accesso Partita   | Form di accesso alla partita                        | ![botteghino-cartelle](images/botteghino-cartelle.png)|
| Lista Giocatori   | Visualizza la lista dei giocatori e dei loro stati                        | ![botteghino-cartelle](images/botteghino-cartelle.png)|
| Chat di Gioco   | Gli utenti interagiscono nella chat di gioco                                | ![botteghino-cartelle](images/botteghino-cartelle.png)|
| Classifica    | Visualizza la classifica dei giocatori e dei premi vinti                                | ![botteghino-cartelle](images/botteghino-cartelle.png)|
| Numeri Estratti    | Visualizza tutti i numeri estratti                                | ![botteghino-cartelle](images/botteghino-cartelle.png)|
| Botteghio Cartelle   | Per comprare cartelle al botteghino.                                   | ![botteghino-cartelle](images/botteghino-cartelle.png)|
| Botteghino Tabellone | Per comprare cartelle al tabellone del botteghino.                                   | ![botteghino-tabellone](images/botteghino-tabellone.png)|
| Partita avviata | Form di gioco della partita                                   | ![botteghino-tabellone](images/botteghino-tabellone.png)|

## 5. Routing

Il sito è **one-page** e non ha un sistema di routing 

Le richieste sono gestite con **nessun reindirizzamento** di pagina.

**Motivazione:**
- Gestione Dinamica dei Componenti Grafici
- Esperienza Utente Fluida e Interattiva
- Semplificazione della Logica di Navigazione
- Ridotta Compelessità dell'Applicazione Web

## 6. Gestione dello Stato

- **Variabili JavaScript**
- **Gestione Stati JavaScript**

> [!NOTE]  
> Per la gestione degli stati dei componenti non è stato necessario utilizzate librerie esterne come [`vis.js`](https://visjs.org/)


## 7. Chiamate API

### Indice

1. [Chiamate API Frontend](#Chiamate-API-Frontend)
2. [Chiamate API Backend](#Chiamate-API-Backend)
3. [Lista Chiamate API](#Lista-Chiamate-API)

---

### Chiamate API Frontend

**Utilizzo** della funzione `fetch()` integrata in JavaScript.

**Migliore** rispetto ad un `Ajax` per codice semplice e compressione delle richieste

### Chiamate API Backend

**Utilizzo** di `php`

### Lista Chiamate API




| Nome API                  | URL API `server.php?` | Tipo    | Descrizione                                              |
|---------------------------|---------|---------|----------------------------------------------------------|
| ripristinaNumeri          |server.php?event=19&id=${codice}         | POST    | Ripristina i numeri estratti per una partita specifica   |
| ottieniPremi              |event=18&id=${codice}         | GET     | Ottiene l'elenco dei premi per una partita specifica     |
| aggiornaPremio            |event=17&id=${codice}&username=${username}&premio=${premioAttuale}   | POST    | Aggiorna lo stato di un premio per una partita specifica |
| initPremi                 |event=16&id=${codice}         | POST    | Inizializza l'elenco dei premi per una nuova partita     |
| aggiornaNumeriEstratti    |event=14&id=${codice}&num=${numero}         | POST    | Aggiorna i numeri estratti per una partita specifica     |
| ottieniNumeriEstratti     |event=15&id=${codice}         | GET     | Ottiene l'elenco dei numeri estratti per una partita     |
| verificaPresenzaUsername  |event=13&id=${codice}&username=${username}  | GET   | Verifica se un username è presente come partecipante   |
| ottieniStatoPartita       |event=12&id=${codice}         | GET     | Ottiene lo stato corrente di una partita                 |
| aggiornaStatoPartita      |event=11&id=${codice}         | POST    | Aggiorna lo stato di una partita                         |
| verificaTuttiPronti       |event=10&id=${codice}         | GET     | Verifica se tutti i partecipanti sono pronti             |
| aggiornaStatoGiocatore|event=9&id=${codice}&username=${"Banco")}&stato=1 | POST    | Aggiorna lo stato di un giocatore per una partita |
| ottieniListaPartecipanti  |event=8&id=${codice}         | GET     | Ottiene l'elenco dei partecipanti per una partita       |
| accediPartita   |event=6&id=${codice}&username=${username}&ruolo=1  | POST    | Accede a una partita con un nuovo username   |
| uscitaPartita  |event=7&id=${codice}&username=${username}  | POST    | Esce da una partita con un username specifico           |
| ottieniStorico            |server.php?event=5&id=${codice}         | GET     | Ottiene lo storico delle azioni per una partita         |
| aggiornaStorico           |event=4&id=${codice}&str=${append}         | POST    | Aggiorna lo storico delle azioni per una partita        |
| creaPartita               |event=0&id=${codice}         | POST    | Crea una nuova partita                                   |
| eliminaPartita            |event=12&id=${codice}         | POST    | Elimina una partita esistente                           |
| aggiornaListaCodici       |event=3         | GET     | Ottiene l'elenco degli ID delle partite attive          |


> [!NOTE]  
> Per informazioni dettagliate sulla gestione degli errori per le singole API consultare il paragrafo di [Gestione delle Eccezioni](#8-gestione-delle-eccezioni).

## 8. Gestione delle Eccezioni


> [!CAUTION]
> Nelle API, la gestione delle eccezioni non fa **nessun uso** dei `codici di stato HTTP`

> [!WARNING]
> Il **Frontend** adotta un sistema di `try-catch` nell'utilizzo di `fetch` per gestire le eccezioni

> [!WARNING]
> Nel **Backend** nono sono stati implementati controlli specifici sulle eccezioni

> [!TIP]
> Possibilità di implementare un sistema di gestione delle eccezzioni più avanzato

## 9. Stili


`CSS v3`&ensp;&ensp;&ensp;[`Bootstrap v5.3`](https://getbootstrap.com/docs/versions/)


> [!IMPORTANT]
> Le personalizzazioni degli stili sono state apportate solo nei sorgente mantenendo le classi predefinite di Bootstrap.



## 10. Testing

`Test Unitari`&ensp;&ensp;&ensp;`Test di Integrazione`

**Esito** Tutti i test finali hanno dato esito positivo, confermando la stabilità della build.

**Migliore** affidabilità di utilizzo

> [!NOTE]
> La complessità del progetto non ha richiesto l'utilizzo di framework esterni per il testing.

> [!NOTE]
> La [struttura del progetto](#3-struttura-del-progetto) ha facilitato il testing e la manutenzione




![Stato del Progetto](https://img.shields.io/badge/Stato-Stabile-brightgreen)

![Versione](https://img.shields.io/badge/Versione-1.0-blue)

![Manutenzione](https://img.shields.io/badge/Manutenzione-Attiva-green)


## 11. Avvio e Sviluppo Locale

### Prerequisiti:

[`Bootstrap v5.3`](https://getbootstrap.com/docs/versions/)&ensp;&ensp;&ensp;[`XAMP v5.3`](https://getbootstrap.com/docs/versions/)&ensp;&ensp;&ensp;[`MAMP`](https://getbootstrap.com/docs/versions/)&ensp;&ensp;&ensp;[`SQL 2022`](https://sqlserverbuilds.blogspot.com/)&ensp;&ensp;&ensp;[`PHP v8.3.2`](https://www.php.net/supported-versions.php)



### Istruzioni:

1. **Clonare la Repository**
   
   ```
   git clone https://github.com/vittorioPiotti/BingoOnline
   ```
   
2. **Configurare MAMP o XAMP per avvio locale**
3. **Configurazione Database**
4. **Accesso all'Applicazione dall'URL**.
   
![Compatibilità Web](https://img.shields.io/badge/Compatibilit%C3%A0%20Web-Chrome%20%7C%20Firefox%20%7C%20Safari-green)

![Compatibilità Client](https://img.shields.io/badge/Compatibilit%C3%A0%20Client-Windows%20%7C%20MacOS%20%7C%20Linux-orange)

![Compatibilità Server](https://img.shields.io/badge/Compatibilit%C3%A0%20Client-Windows%20%7C%20MacOS%20%7C%20Linux-orange)



## 12. Distribuzione

### Prerequisiti per la Distribuzione:
`Server Web`&ensp;&ensp;&ensp;[`Servizio di Hosting Web`](https://www.000webhost.com/)
   
### Istruzioni per la Distribuzione:

1. Caricamento dei file
2. Configurazione del Databse
3. Verifica del Funzionamento
4. Aggiornamenti e Manutenzione
   
![Compatibilità Web](https://img.shields.io/badge/Compatibilit%C3%A0%20Web-Chrome%20%7C%20Firefox%20%7C%20Safari-green)

![Compatibilità Client](https://img.shields.io/badge/Compatibilit%C3%A0%20Client-Windows%20%7C%20MacOS%20%7C%20Linux-orange)




## 13. Conclusione

### Ringraziamenti


| Ruolo          | Nome             | GitHub                                           |
|----------------|-----------------|-----------------------------------------------|
| Gestore Frontend  & Frontend| Vittorio Piotti| [vittoriopiotti](https://github.com/vittoriopiotti) |


### Riferimenti aggiuntivi

Per contribuire al progetto, ricevere informazioni o segnalare bug fare riferimento ai seguenti link:


| Issues Repository GitHub                        | 
|------------------------------------------|
| [Repository](https://github.com/vittorioPiotti/Gestionale/issues) |
  



![Contatto](https://img.shields.io/badge/Contatto-GitHub-blue)

![Download](https://img.shields.io/badge/Download-0%2B-blue)

![Popolarità](https://img.shields.io/badge/Popolarit%C3%A0-Bassa-yellow)

![Ultima modifica](https://img.shields.io/badge/Ultima%20Modifica-Febbraio%202024-blue)
