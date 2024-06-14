<!--
  Bingo-Online-Bootstrap v1.0.0 (https://github.com/vittorioPiotti/Bingo-Online-Bootstrap/releases/tag/1.0.0)
  Copyright 2024 Vittorio Piotti
  Licensed under GPL-3.0 (https://github.com/vittorioPiotti/Bingo-Online-Bootstrap/blob/main/LICENSE.md)
-->

<!--
  Bootstrap v4.0.0 (https://getbootstrap.com)
  Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
-->

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bingo</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="icon" type="image/x-icon" href="./img/icona.png">
    <link rel="stylesheet" href="./css/main.css"> 
</head>
    <body onload="inizializzaPartita()" >
<div class="bg-custom" id="login">


    <div class="container  " style="max-width:1000px">
    <div class="ms-1 pt-5">
    <h1 class="mb-3 text-dark fw-semibold" id="titleLogin">Registrati per giocare</h1>
    <p class="mb-5 lead   "style="width:90%;max-width:550px" id="descLogin">Scegli il tuo nome utente e se entrare in partita o crearla aspettando i tuoi amici </p>
</div>

<div class="row opacity-100 border border-3 border-dark rounded m-auto" style="background-color:white;width:100%">
    <div class="col-sm-12 col-md-6">
       <div class="card mb-3 border-0  " >
         <div class="row g-0 ">
            <div class="col-md-8">
                <div class="card-body ">
                    <h5 class="card-title">Accesso</h5>
                    <div class="form-floating mb-3" id="inputUsername">
                    <input
                        type="text"
                        class="form-control"
                        id="inputLabelUsername"
                        placeholder="Username"
                    />
                    <label for="inputLabelUsername">Username</label>
                    </div>
                    <div class="form-floating mb-3 position-relative" id="inputCodice">
                        <select class="form-select" id="inputSceltaCodice" aria-label="Floating label select example">
                            <option selected>Scegli partita</option>
                            <option value="Non ci sono partite" disabled>Non ci sono partite</option>
                      
                        </select>
                        <label for="inputSceltaCodice">Codice Partita</label>
                    </div>
                    <div id="buttonsLogin">
                    <button class="btn btn-primary border-0 rounded" id="btnPrimary" onclick="accedi()">Accedi</button>
                    <button class="btn btn-secondary border-0 rounded" id="btnSecondary" onclick="crea()">Crea</button>
                 </div>
             
                </div>
            </div>
         </div>
       </div>
     </div>
     <div class="col-sm-12 col-md-6 " >
       <div class="card mb-3 border-0 "  style="min-height:254px" >
         <div class="row g-0">
            <div class="col-12">
                <div class="card-body">
                    <h5 class="card-title mb-3">Infografica Partita</h5>
                    <div id="infoPartita">
                    <p class="fw-light">Non sei in nessuna partita. <br>Scegli il tuo username e crea o accedi ad una partita per giocare.</p>
                    </div>
                   
                </div>
           </div>
         </div>
       </div>
     </div>
   </div>            
</div>
<div style="height:50px;"></div>
</div>
            <nav class="navbar my-navbar navbar-dark bg-dark "style="height:75px;width:100%;">
                <div class="container">
                    <div class="col-1 text-start  ">
                        <a href="#bingo" class="text-decoration-none text-light fs-5 fw-bold"><img src="./img/logo.png" alt="logo" width="55" height="55"href="#" ></a>
                    </div>
                    <div class="col-10 iniziaPartita">

<div class="row "style="width:320px;margin:auto;">
<div class="col-5 position-relative">

    <div class="m-0  p-2 d-inline-block " style="width:90px;position:absolute;right:-13px;top:4px;">
    <div style="position:absolute;top:37%;">
        <div class="bg-secondary d-inline-block" style="width:20px;height:20px;border-radius:50%;" role="status">
        </div>
        <div class="bg-secondary  d-inline-block" style=" width:20px;height:20px;border-radius:50%;" role="status">
    </div>
    <div class="bg-secondary  d-inline-block" style="width:20px;height:20px;border-radius:50%;" role="status">
    </div>
    </div>
    </div>
</div>
<div class="col-2 text-center ">
<button class="btn btn-light p-0 d-inline-block " style="width:35px;height:40.5px;" onclick="goToTop()">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style="height:30px;width:30px;" class="text-secondary bi bi-gear-wide-connected" viewBox="0 0 16 16">
<path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"></path>
</svg>

</button>

</div>


</div>





</div>
                    
                    <div class="col-1 text-end numeroEstratto "></div>
                </div>
                
            </nav>
        <header class="bg-light " id="bingo">
        
            
            <div style="height:75px;width:100%;" ></div>
            <div class="container my-3  text-center header" style="max-width:620px;" >
                <h1>Bingo</h1>
                <p class="lead">Dai inizio al divertimento! Gioca a bingo e schierati dalla parte del banco o aggiudicati le cartelle migliori. Grandi vincite aspettano proprio te! </p>
            </div>
      
            <div class="container " style="max-width:1000px">
                <div class="row mt-5" id="my-row">
                    
          
                </div> 
            </div>
            <hr class="border border-dark border-1 opacity-100">
        </header>


        <div class="container mt-3 mb-5 corpo" id='tabella-partita'style="max-width:1000px">
          
        </div>

      
        
        <footer class="navbar mt-5 bg-light border-top">
           
           
                <a href="#bingo" class=" fs-5 fw-bold d-flex align-items-center justify-content-center link-dark text-decoration-none" style="width:50%;">
                    <img src="./img/fullLogo.png" alt="logo" width="55px" height="55px" class="me-2"> Bingo
                </a>
                <a href="https://github.com/vittorioPiotti/BingoOnline" id = "linkGitHub" class=" d-flex align-items-center justify-content-center link-dark text-decoration-none " style="float:end;width:50%;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
            
                </a>
          
            
        </footer>



<div class="modal " id="avvisoVincita" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered  avvisoVincita modal">

  </div>
</div>


<div class="modal fade" id="modal-errore" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1" style="z-index:10000;">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                    <div class="modal-body text-center m-1 pt-4">
                       <div id="modal-svg">
                       <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-x-circle text-danger" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                          </svg>
                       </div>
                        <p class="fw-bold fs-3 mt-4" id="modal-title">             
                            Accesso Negato
                        </p>
                        <p class="fs-6 m-auto text-muted" style="width:60%;"id="modal-content">
                            Username non valido <br>Nessuna partita disponibile
                        </p>
                   
                        <button class="btn btn-info text-white pe-3 ps-3 p-1 fw-ligh float-end" data-bs-target="#modal-errore" data-bs-toggle="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>


        <script src="./js/bootstrap.min.js"></script>
        
      <script type="text/javascript" src="./js/main.js"></script> 
    </body>
</html>
