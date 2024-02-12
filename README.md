# Documentazione Tombola Online

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

Il progetto Tombola Online si propone di rendere l'esperienza di gioco della Tombola in un'applicazione web multi player offrendo un'esperienza utente con le seguenti features.


### Indice

1. [Accesso alla Partita](#Accesso-alla-Partita)
2. [Preparazione al Gioco](#Preparazione-al-Gioco)
3. [Fase di Gioco](#Fase-di-Gioco)

---

### Accesso alla Partita

![Form di inizio della partita](images/Inizio-della-Partita.png)

L'utente sceglie il proprio username e  crea la partita generando il codice alla partita o vi accede selezionando uno dei codici delle partite in corso

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


#### Acquisto Cartelle Botteghino Tabellone

![Form di registrazione del cliente](images/acquisto-cartelle-tabellone.png)


### Features Multiplayer

#### Indice

2. [Lista partecipanti](#Lista-partecipanti)
3. [Chat di gruppo](#Chat-di-gruppo)
4. [Classifica giocatori](#Classifica-giocatori)
5. [Numeri estratti](#Numeri-estratti)

---


#### Lista partecipanti

![Form di inizio della partita](images/Lista-partecipanti.png)

Stati dei partecipanti:
- ![Stato](https://img.shields.io/badge/Stato-Rosso-red) se l'utente non ha comprato nessuna cartella
- ![Stato](https://img.shields.io/badge/Stato-Verde-green) se l'utente ha comprato almeno una cartella
- ![Stato](https://img.shields.io/badge/Stato-Blu-blue) se l'utente è pronto al gioco e ha acquistato almeno una cartella


#### Chat di gruppo

![Form di inizio della partita](images/Chat-di-gruppo.png)

Chat di gioco per interagire con gli altri utenti

>[!WARNING]
>Nessuna censura delle parole inappropriate

>[!TIP]
>In future implementazioni la censura delle parole inappropriate

#### Classifica giocatori

![Form di inizio della partita](images/Classifica-giocatori.png)

Classifica dei giocatori e dei premi riscattati

#### Numeri estratti

![Form di inizio della partita](images/Numeri-estratti.png)

Visualzizazione di tutti i numeri estratti

## 2. Tecnologie Utilizzate


### Indice

1. [Teconologie Backend](#Teconologie-Backend)
2. [Teconologie Frontend](#Teconologie-Frontend)

---


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
Elenco e descrizione dei componenti principali utilizzati nel frontend, con eventuali screenshot e descrizione.

| Nome Form            | Descrizione Form                                                                                                                    | Immagine Form    |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------|------------------|
| Menu Interattivo     | Utilizzato per interagire tra i partecipanti e per visualizzare i dati della partita multigiocatore.                                 | ![menu-interattivo](images/.png)|
| Botteghio Cartelle   | Per comprare cartelle al botteghino.                                                                                                 | ![botteghino-cartelle](images/botteghino-cartelle.png)|
| Botteghino Tabellone | Per comprare cartelle al tabellone del botteghino.                                                                                    | ![botteghino-tabellone](images/botteghino-tabellone.png)|

## 5. Routing

Il sito è progettato in modo **one-page** quindi è privo di un sistema di routing in quanto le richieste vengono gestite direttamente senza reindirizzamenti di pagina.

### Motivazione:

- **Gestione Dinamica dei Componenti Grafici**
- **Esperienza Utente Fluida e Interattiva**
- **Semplificazione della Logica di Navigazione**
- **Ridotta Compelessità dell'Applicazione Web**

## 6. Gestione dello Stato

Per la gestione degli stati dei componenti non è stato necessario utilizzate librerie esterne come [`vis.js`](https://visjs.org/)

- **Variabili JavaScript**
- **Gestione Stati JavaScript**


## 7. Chiamate API

### Indice

1. [Chiamate API Frontend](#Chiamate-API-Frontend)
2. [Chiamate API Backend](#Chiamate-API-Backend)
3. [Lista Chiamate API](#Lista-Chiamate-API)

### Chiamate API Frontend

**Utilizzo** della funzione `fetch()` integrata in JavaScript.

**Migliore** rispetto ad un `Ajax per codice semplice e compressione delle richieste`

### Chiamate API Backend

**Utilizzo** di `php`

### Lista Chiamate API

Nel frontend sono state utilizzate le seguenti API per consentire al client di interagire con le risorse del sistema:

| API                  | Tipo    | Descrizione                                                 |
|----------------------|---------|-------------------------------------------------------------|
| **`/autenticaUtente`**       | **POST**                  | Gestisce il processo di **autenticazione dell'utente** con opportuni controlli per [gestire le eccezioni](#autenticazione-utente). |
| **`/registraCliente`**      |**POST**                       | Gestisce la **registrazione di un cliente** con opportuni controlli per [gestire le eccezioni](#registrazione-cliente). |
| **`/visualizzaClienti`**           | **GET**      | Restituisce la **visualizzazione dei clienti** memorizzati nel database con opportuni controlli per [gestire le eccezioni](#visualizzazione-clienti). |


> [!NOTE]  
> Per informazioni dettagliate sulla gestione degli errori per le singole API consultare il paragrafo di [Gestione delle Eccezioni](#8-gestione-delle-eccezioni).

## 8. Gestione delle Eccezioni

### Indice 

1. [Globale](#Globale)
2. [Autenticazione Utente](#autenticazione-utente)
3. [Registrazione Cliente](#registrazione-cliente)
4. [Visualizzazione Clienti](#visualizzazione-clienti)

---

### Codici di stato HTTP 

Il [backend](../Server/README.md#8-gestione-delle-eccezioni) gestisce le eccezioni in modo appropriato, restituendo codici di stato HTTP appropriati e fornendo informazioni dettagliate sugli errori al client. Ciò aiuta a garantire una gestione sicura e robusta delle richieste, fornendo al client tutte le informazioni necessarie per comprendere e gestire correttamente gli errori durante le interazioni con il backend.

#### Globale

- **`200` (OK):** Operazione completata con successo e le modifiche sono state salvate nel database.
- **`404` (Not Found):** Impossibile accedere al server. La risorsa richiesta non è stata trovata.
- **`500` (Internal Server Error):** Si è verificato un errore interno.

#### Autenticazione Utente

- **`405` (Method Not Allowed):** Risposta in caso la password fornita non è corretta.
- **`409` (Conflict):** Risposta in caso l'utente non esista nel sistema.
  
#### Registrazione Cliente

- **`409` (Conflict):** Il codice fiscale fornito è già presente nel sistema.
- **`400` (Bad Request):** I dati forniti per la registrazione non sono validi.

#### Visualizzazione Clienti

- **`500` (Internal Server Error):** Si è verificato un errore interno durante il recupero dell'elenco dei clienti.

> [!WARNING]  
> La gestione delle eccezioni è contestualizzata all'API di riferimento quindi a stessi codici di stato HTTP in diverse API corrispondono errori diversi



## 9. Stili


`CSS v3`&ensp;&ensp;&ensp;[`Bootstrap v5.3`](https://getbootstrap.com/docs/versions/)


> [!IMPORTANT]
> Le personalizzazioni degli stili sono state apportate solo nei sorgente mantenendo le classi predefinite di Bootstrap.



## 10. Testing

Breve panoramica dei test unitari e di integrazione effettuati sul frontend 

### Indice

1. [Test Effettuati](#test-effettuati)
2. [Benefici dei Test](#benefici-dei-test)
3. [Esito dei Test](#esito-dei-test)

---


### Test Effettuati

- **Test Unitari**: Sono stati sviluppati test unitari per verificare il corretto funzionamento dei singoli componenti e delle funzioni utilizzate nell'applicazione. Questi test hanno consentito di individuare eventuali bug e garantire che ogni componente si comporti come previsto in condizioni specifiche.

- **Test di Integrazione**: Sono stati eseguiti test di integrazione per verificare l'interazione tra diversi componenti e le varie parti dell'applicazione. Questi test sono stati utili per assicurare che le varie parti dell'applicazione funzionino correttamente insieme e che non vi siano problemi di compatibilità o conflitti tra di esse.

> [!NOTE]
> - La complessità del progetto non ha richiesto l'utilizzo di framework esterni per il testing come Jest.
> 
> - La [struttura del progetto](#3-struttura-del-progetto) in termini di organizzazione del codice ha facilitato la manutenibilità a livello di test, consentendo di scrivere e mantenere i test in modo efficiente.
   


### Benefici dei Test

- **Miglioramento della Qualità**: I test hanno contribuito a migliorare la qualità complessiva dell'applicazione, individuando e risolvendo bug e problemi prima che possano influenzare gli utenti finali.

- **Riduzione dei Rischi**: Effettuando test regolari, si è ridotto il rischio di errori e malfunzionamenti nell'applicazione, garantendo un'esperienza utente più fluida e priva di problemi.

- **Aumento della Fiducia**: L'utilizzo di test ha aumentato la fiducia nello sviluppo e nel rilascio dell'applicazione, fornendo una valida garanzia che ogni cambiamento o aggiornamento non provochi regressioni o problemi imprevisti.



### Esito dei Test

Tutti i test finali hanno dato esito positivo, confermando la stabilità della build.

<a id="WARNING"></a>
> [!WARNING]
> In [`FloatButtonGroup`](#FloatButtonGroup) messaggio di avvertimento per `findDOMNode` che è deprecato in StrictMode. È stato suggerito di aggiungere un ref direttamente all'elemento di riferimento anziché utilizzare `findDOMNode`

> [!WARNING]
> In [`FloatButtonGroup`](#FloatButtonGroup) `findDOMNode` è deprecato in StrictMode quindi aggiungere un ref all'elemento di riferimento anziché utilizzare `findDOMNode`

> [!WARNING]
> In [`VisualizzaClientiView`](#VisualizzaClientiView) per il componente `Dropdown` `findDOMNode` l'uso di `visible` è deprecato quindi è stato consigliato di utilizzare `open`

> [!WARNING]
> In [`VisualizzaClientiView`](#VisualizzaClientiView) l'uso di funzioni ref nei componenti funzionali è stato sconsigliato.

> [!WARNING]
> In [`VisualizzaClientiView`](#VisualizzaClientiView) è stata segnalata la mancanza di chiavi univoche per i figli nella lista.


<a id="TIP"></a>
> [!TIP]
> Tra gli sviluppi futuri un'opportuna **migrazione e aggiornamento** di questi componenti deprecati per garantire la compatibilità e le prestazioni ottimali del sistema.


![Stato del Progetto](https://img.shields.io/badge/Stato-Stabile-brightgreen)

![Versione](https://img.shields.io/badge/Versione-1.0-blue)

![Manutenzione](https://img.shields.io/badge/Manutenzione-Attiva-green)


## 11. Avvio e Sviluppo Locale

Istruzioni su come avviare il frontend in modalità di sviluppo locale, con eventuali prerequisiti e comandi necessari.

### Indice

1. [Prerequisiti](#prerequisiti)
2. [Istruzioni](#istruzioni)

---

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
Breve guida su come distribuire il frontend in un ambiente di produzione.

### Indice

1. [Prerequisiti per la Distribuzione](#prerequisiti-per-la-distribuzione)
2. [Istruzioni per la Distribuzione](#istruzioni-per-la-distribuzione)

---

Le configurazioni necessarie per la distribuzione sono sviluppate nei seguenti passaggi:

### Prerequisiti per la Distribuzione:
`Server Web`&ensp;&ensp;&ensp;[`Servizio di Hosting Web`](https://www.000webhost.com/)
   
### Istruzioni per la Distribuzione:
2. **Caricamento dei file** 
3. **Configurazione del Databse:**
4. **Verifica del Funzionamento** 
5. **Aggiornamenti e Manutenzione:** 
![Compatibilità Web](https://img.shields.io/badge/Compatibilit%C3%A0%20Web-Chrome%20%7C%20Firefox%20%7C%20Safari-green)

![Compatibilità Client](https://img.shields.io/badge/Compatibilit%C3%A0%20Client-Windows%20%7C%20MacOS%20%7C%20Linux-orange)




## 13. Conclusione

### Indice

1. [Ringraziamenti](#ringraziamenti)
2. [Riferimenti aggiuntivi](#riferimenti-aggiuntivi)

---

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
