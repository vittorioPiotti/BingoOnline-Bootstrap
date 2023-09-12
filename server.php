<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "tombola";
$port = '8889';
$conn = new mysqli($servername, $username, $password, $dbname, $port);


if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}




$event = $_GET['event'];
$response;

switch ($event) {
    case 0:
        $id = $_GET['id'];
        $response = creaPartita($conn,$id);
        //crea nuova partita
        break;
    case 1:
        $id = $_GET['id'];
        $response = eliminaPartita($conn,$id);         
        //elimina partita
        break;
    case 3:
        $response = aggiornaListaCodici($conn);
        if (empty($response)) {
            $response = json_encode([]); // Se la risposta è vuota, restituisci un array JSON vuoto
        } else {
            $response = json_encode($response); // Altrimenti, converte la risposta in JSON
        }
        //aggiorna lista codici
        break;
    case 4:
        $id = $_GET['id'];
        $str = $_GET['str'];
        $response = aggiornaStorico($conn,$id,$str);
        if (empty($response)) {
            $response = json_encode([]); 
        } else {
            $response = json_encode($response); 
        }
        //aggiorna storico
        break;
    case 5:
        $id = $_GET['id'];
        $response = ottieniStorico($conn,$id);
        if (empty($response)) {
            $response = json_encode([]); 
        } else {
            $response = json_encode($response); 
        }
        //ottieni storico
        break;
    case 6:
        $id = $_GET['id'];
        $username = $_GET['username'];
        $ruolo = $_GET['ruolo'];
        $response = accediPartita($conn,$id,$username,$ruolo);
        //accedi  partita
        break;
    case 7:
        $id = $_GET['id'];
        $username = $_GET['username'];
        $response = uscitaPartita($conn,$id,$username);
        //uscita partita
        break;
    case 8:
        $id = $_GET['id'];
        $response = ottieniListaPartecipanti($conn, $id); 
        // ottieni lista partecipanti
        break;
     case 9:
        $id = $_GET['id'];
        $username = $_GET['username'];
        $stato = $_GET['stato'];
        $response = aggiornaStatoGiocatore($conn,$id,$username,$stato); 
        //aggiorna stato giocatore
        break;
    case 10:
        $id = $_GET['id'];
        $response = verificaTuttiPronti($conn,$id); 
        //verifica se tutti i giocatori sono pronti
        break;
    case 11:
        $id = $_GET['id'];
        $response = aggiornaStatoPartita($conn,$id); 
        //verifica se tutti i giocatori sono pronti
        break;
    case 12:
        $id = $_GET['id'];
        $response = ottieniStatoPartita($conn,$id); 
        //verifica se tutti i giocatori sono pronti
        break;
    case 13:
        $id = $_GET['id'];
        $username = $_GET['username'];
        $response = verificaPresenzaUsername($conn,$id,$username); 
        //verifica se username presente
        break;
    case 14:
        $id = $_GET['id'];
        $num = $_GET['num'];
        $response = aggiornaNumeriEstratti($conn,$id,$num); 
        //aggiorna numeri estratti
        break;
    case 15:
        $id = $_GET['id'];
        $response = ottieniNumeriEstratti($conn,$id); 
        //ottieni numeri estratti
        break;
    case 16:
        $id = $_GET['id'];
        $response = initPremi($conn,$id);
        //inizializza premi
        break;
    case 17:
        $id = $_GET['id'];
        $username = $_GET['username'];
        $premio = $_GET['premio'];
        $response = aggiornaPremio($conn,$id,$username,$premio);
        //aggiorna premio
        break;
    case 18:
        $id = $_GET['id'];
        $response = ottieniPremi($conn,$id);
        //ottieni Premi
        break;
    case 19:
        $id = $_GET['id'];
        $response = ripristinaNumeri($conn,$id);
        //ripristina Premi
        break;
    default:
        break;
    }
        
$conn->close();
        
echo json_encode($response);
function ripristinaNumeri($conn, $id){
    $updateQuery = "UPDATE partita SET numeriEstratti = '' WHERE id = '$id'";
    if ($conn->query($updateQuery) === TRUE) {
        return "Eseguito ripristina numeri";
    } else {
        return "Errore ripristina numeri: " . $conn->error;
    }
        
}


function ottieniPremi($conn, $id){
    $query = "SELECT premi FROM partita WHERE id = '$id'";
    $result = $conn->query($query);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $premi = $row['premi'];
        return $premi;
        }else {
            return "Errore riscuoti premio: " . $conn->error;
        }
}
function aggiornaPremio($conn, $id,$username,$premio){
    $query = "SELECT premi FROM partita WHERE id = '$id'";
    $result = $conn->query($query);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $premi = $row['premi'];
        $premiArray = explode('.', $premi);
        $premiArray[$premio] .= ",$username"; 

        $stringaPremi = implode(".", $premiArray);
        $query = "UPDATE partita SET premi =  '$stringaPremi' WHERE id = '$id'";
        if ($conn->query($query) === TRUE) {
            return "Riscuoti premio successo!";
        } else {
            return "Errore durante riscuoti premio: " . $conn->error;
        }
        }else {
            return "Errore riscuoti premio: " . $conn->error;
        }
}

function initPremi($conn, $id){
    $initValue = "0.1.2.3.4";
    $query = "UPDATE partita SET premi =  '$initValue' WHERE id = '$id'";
    $result = $conn->query($query);

}

function aggiornaNumeriEstratti($conn,$id,$num){
    $query = "SELECT numeriEstratti FROM partita WHERE id = '$id'";
    $result = $conn->query($query);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $numeri = $row['numeriEstratti'];
        $query = "UPDATE partita SET numeriEstratti = CONCAT(IFNULL(numeriEstratti, ''), '.$num') WHERE id = '$id'";
    
    if ($conn->query($query) === TRUE) {
        return "Ottieni numeri estratti successo!";
    } else {
        return "Errore durante ottieni numeri estratti: " . $conn->error;
    }
    }else {
        return "Errore ottieni numeri estratti: " . $conn->error;
    }
    
}
function ottieniNumeriEstratti($conn,$id){
    $query = "SELECT numeriEstratti FROM partita WHERE id = '$id'";
    $result = $conn->query($query);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        return $row['numeriEstratti'];
    } else {
        return 0;
    }
}
function verificaPresenzaUsername($conn,$id,$username){
    $query = "SELECT partecipanti FROM partita WHERE id = '$id'";
    $result = $conn->query($query);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $partecipanti = $row['partecipanti'];
        $partecipantiArray = explode('.', $partecipanti);
        array_shift($partecipantiArray);
        $count = count($partecipantiArray);

        for ($i = 0; $i < $count; $i++) {
            $sottostringa = substr($partecipantiArray[$i], 0, -2);
            if($sottostringa == $username)return 1;
        }

    }
    return 0;
}
function ottieniStatoPartita($conn,$id){

    $query = "SELECT stato FROM partita WHERE id = '$id'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $stato = $row['stato'];

        if ($stato == 'valido') {
            return 0; // Stato valido
        } else {
            return 1; // Stato scaduto
        }
    } else {
        // Nessun risultato trovato
        return -1;
    }
}

function aggiornaStatoPartita($conn, $id) {
    // Query per verificare lo stato attuale
    $selectQuery = "SELECT stato FROM partita WHERE id = '$id'";
    $result = $conn->query($selectQuery);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $statoAttuale = $row['stato'];

        // Calcola il nuovo stato in base a quello attuale
        $newStato = ($statoAttuale === 'valido') ? 'scaduto' : 'valido';

        // Esegui l'aggiornamento dello stato
        $updateQuery = "UPDATE partita SET stato = '$newStato' WHERE id = '$id'";
        if ($conn->query($updateQuery) === TRUE) {
            return "Stato aggiornato a '$newStato'";
        } else {
            return "Errore nell'aggiornamento dello stato: " . $conn->error;
        }
    } else {
        return "Partita non trovata.";
    }
}

function verificaTuttiPronti($conn, $id){
    $query = "SELECT partecipanti FROM partita WHERE id = '$id'";
    $result = $conn->query($query);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $partecipanti = $row['partecipanti'];
        $partecipantiArray = explode('.', $partecipanti);
        array_shift($partecipantiArray);
        $count = count($partecipantiArray);
        $countPronti = 0;
        for ($i = 0; $i < $count; $i++) {
            $indiceCarattere = strlen($partecipantiArray[$i]) - 2;
            $carattere = $partecipantiArray[$i][$indiceCarattere];
            if($carattere == 1 || $carattere == 2)$countPronti++;
        }
        if($countPronti == $count && $countPronti != 0)return 1;//tutti pronti
        else return 0;//non tutti
    }
}

function aggiornaStatoGiocatore($conn, $id, $username,$stato) {
    $query = "SELECT partecipanti FROM partita WHERE id = '$id'";
    $result = $conn->query($query);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $partecipanti = $row['partecipanti'];

        $partecipantiArray = explode('.', $partecipanti);
        array_shift($partecipantiArray);

        $count = count($partecipantiArray);

        for ($i = 0; $i < $count; $i++) {
            $getUsername = substr($partecipantiArray[$i], 0, -2);

            if ($getUsername == $username) {
                $indiceCarattere = strlen($partecipantiArray[$i]) - 2;
                $partecipantiArray[$i][$indiceCarattere] = $stato;
              
                $partecipantiString = implode(".", $partecipantiArray);
                $partecipantiString = '.' . $partecipantiString;

                $updateQuery = "UPDATE partita SET partecipanti = '$partecipantiString' WHERE id = '$id'";
                if ($conn->query($updateQuery) === TRUE) {
                    return "Eseguito aggiorna stato partecipante";
                } else {
                    return "Errore aggiorna stato partecipante: " . $conn->error;
                }
                break;
            }
        }
    }
}

function ottieniListaPartecipanti($conn, $id) { // Corrected function name
    $query = "SELECT partecipanti FROM partita WHERE id = '$id'";
    $result = $conn->query($query);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        return $row['partecipanti'];
    } else {
        return "Nessun risultato trovato o errore nella query: " . $conn->error;
    }
}
function accediPartita($conn, $id, $username,$ruolo) {
        // Verifica se la connessione al database è riuscita
        if ($conn->connect_error) {
            die("Connessione al database fallita: " . $conn->connect_error);
        }
    
        // Query per selezionare la riga specifica in base all'ID
        $query = "SELECT partecipanti FROM partita WHERE id = '$id'";
        $result = $conn->query($query);
    
        if ($result && $result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $colonnaUsername = $row['partecipanti'];
    
            // Concatena il nuovo username all'originale
            $stato = 0;
            $nuovoUsername = $colonnaUsername . $username;
            if ($ruolo == 2) {
                $stato = 1;
            }
            $newUsername = $username . $stato . $ruolo;//primo zero: se 0 non pronto se 1 pronto - secondo zero: 0 creatore 1 partecipante
            // Esegui l'aggiornamento della colonna 'username' nel database
            $updateQuery = "UPDATE partita SET partecipanti = CONCAT(IFNULL(partecipanti, ''), '.$newUsername') WHERE id = '$id'";
            if ($conn->query($updateQuery)) {
                return 1; // Aggiornamento eseguito con successo
            } else {
                return "Errore nell'aggiornamento della colonna 'username': " . $conn->error;
            }
        } else {
            return "Nessun risultato trovato o errore nella query: " . $conn->error;
        }
    
}



function uscitaPartita($conn, $id, $username) {
    $query = "SELECT partecipanti FROM partita WHERE id = '$id'";
    $result = $conn->query($query);

    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $partecipanti = $row['partecipanti'];

        $partecipantiArray = explode('.', $partecipanti);
        array_shift($partecipantiArray);
        $count = count($partecipantiArray);
        
        for ($i = 0; $i < $count; $i++) {
      
            $getUsername = substr($partecipantiArray[$i], 0, -2);
            
            if ($getUsername == $username) {
                unset($partecipantiArray[$i]);
                break;
            }
        }

        $partecipantiString = implode(".", $partecipantiArray);
        $partecipantiString = '.' . $partecipantiString;

        $updateQuery = "UPDATE partita SET partecipanti = '$partecipantiString' WHERE id = '$id'";
        if ($conn->query($updateQuery) === TRUE) {
            return "Eseguito elimina partecipante";
        } else {
            return "Errore elimina partecipante: " . $conn->error;
        }
    
    }
}


function ottieniStorico($conn, $id) {
    $query = "SELECT storico FROM partita WHERE id = '$id'";
    $result = $conn->query($query);

    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        return $row['storico'];
    } else {
        return "Nessun risultato trovato o errore nella query: " . $conn->error;
    }
}
function aggiornaStorico($conn,$id,$str){
    $query = "UPDATE partita SET storico = CONCAT(IFNULL(storico, ''), '$str') WHERE id = '$id'";
    
    if ($conn->query($query) === TRUE) {
        return "Storico aggiornato con successo!";
    } else {
        return "Errore durante l'aggiornamento dello storico: " . $conn->error;
    }

}

function creaPartita($conn, $id) {

    $query = "INSERT INTO partita (id) VALUES ('$id')";

    if ($conn->query($query) === TRUE) {
        return "Nuova partita creata con successo";
    } else {
        return "Errore durante la creazione della partita: " . $conn->error;
    }

}
function eliminaPartita($conn,$id){
    
    $query = "DELETE FROM partita WHERE id = '$id'";

    if ($conn->query($query) === TRUE) {
        return "Partita eliminata con successo";
    } else {
        return "Errore durante eliminazione partita: " . $conn->error;
    }

}
function aggiornaListaCodici($conn) {
    $querySelect = "SELECT id FROM partita WHERE stato = 'valido'";
    $resultSelect = $conn->query($querySelect);

    if ($resultSelect) {
        $id = [];

        while ($row = $resultSelect->fetch_assoc()) {
            $id[] = $row['id'];
        }
        
        return $id; // Restituisci l'array di ID in formato JSON
    } else {
        return []; // Restituisci un array vuoto in caso di errore
    }
}

