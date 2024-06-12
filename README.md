## API

### creaPartita
Crea una nuova partita con l'id del giocatore specificato.

- **URL:** `/event=0&param=${id}`
- **Parametri:** `id`

### eliminaPartita
Elimina la partita associata all'id del giocatore specificato.

- **URL:** `/event=1&param=${id}`
- **Parametri:** `id`

### aggiornaListaCodici
Aggiorna la lista dei codici disponibili.

- **URL:** `/event=3&`
- **Parametri:** Nessuno

### aggiornaStorico
Aggiorna lo storico della partita con una stringa specificata.

- **URL:** `/event=4&param=${id}&param2=${str}`
- **Parametri:** `id`, `str`

### ottieniStorico
Ottiene lo storico della partita per un giocatore specificato.

- **URL:** `/event=5&param=${id}`
- **Parametri:** `id`

### accediPartita
Permette a un giocatore di accedere a una partita con il suo username e ruolo.

- **URL:** `/event=6&param=${id}&param2=${username}&param3=${ruolo}`
- **Parametri:** `id`, `username`, `ruolo`

### uscitaPartita
Permette a un giocatore di uscire dalla partita specificata.

- **URL:** `/event=7&param=${id}&param2=${username}`
- **Parametri:** `id`, `username`

### ottieniListaPartecipanti
Ottiene la lista dei partecipanti per una partita specificata.

- **URL:** `/event=8&param=${id}`
- **Parametri:** `id`

### aggiornaStatoGiocatore
Aggiorna lo stato di un giocatore nella partita specificata.

- **URL:** `/event=9&param=${id}&param2=${username}&param3=${stato}`
- **Parametri:** `id`, `username`, `stato`

### verificaTuttiPronti
Verifica se tutti i giocatori sono pronti nella partita specificata.

- **URL:** `/event=10&param=${id}`
- **Parametri:** `id`

### aggiornaStatoPartita
Aggiorna lo stato della partita specificata.

- **URL:** `/event=11&param=${id}`
- **Parametri:** `id`

### ottieniStatoPartita
Ottiene lo stato della partita specificata.

- **URL:** `/event=12&param=${id}`
- **Parametri:** `id`

### verificaPresenzaUsername
Verifica se l'username è presente nella partita specificata.

- **URL:** `/event=13&param=${id}&param2=${username}`
- **Parametri:** `id`, `username`

### aggiornaNumeriEstratti
Aggiorna i numeri estratti per la partita specificata.

- **URL:** `/event=14&param=${id}&param2=${num}`
- **Parametri:** `id`, `num`

### ottieniNumeriEstratti
Ottiene i numeri estratti per la partita specificata.

- **URL:** `/event=15&param=${id}`
- **Parametri:** `id`

### initPremi
Inizializza i premi per la partita specificata.

- **URL:** `/event=16&param=${id}`
- **Parametri:** `id`

### aggiornaPremio
Aggiorna il premio per un giocatore specificato nella partita.

- **URL:** `/event=17&param=${id}&param2=${username}&param3=${premio}`
- **Parametri:** `id`, `username`, `premio`

### ottieniPremi
Ottiene i premi per la partita specificata.

- **URL:** `/event=18&param=${id}`
- **Parametri:** `id`

### ripristinaNumeri
Ripristina i numeri per la partita specificata.

- **URL:** `/event=19&param=${id}`
- **Parametri:** `id`
