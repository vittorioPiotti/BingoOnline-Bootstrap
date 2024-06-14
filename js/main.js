/*
  Bingo-Online-Bootstrap v1.0.0 (https://github.com/vittorioPiotti/Bingo-Online-Bootstrap/releases/tag/1.0.0)
  Copyright 2024 Vittorio Piotti
  Licensed under GPL-3.0 (https://github.com/vittorioPiotti/Bingo-Online-Bootstrap/blob/main/LICENSE.md)
*/

/*
  Bootstrap v4.0.0 (https://getbootstrap.com)
  Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/


const SVG_STORE_S =  "<svg  xmlns='http://www.w3.org/2000/svg'  width='20' height='20' fill='currentColor' class='bi bi-shop-window ' viewBox='0 0 16 16'><path d='M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z'/></svg>";
const SVG_STORE_L =  "<svg  xmlns='http://www.w3.org/2000/svg'  width='40' height='40' fill='currentColor' class='bi bi-shop-window ' viewBox='0 0 16 16'><path d='M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z'/></svg>";
const SVG_PLUS  = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-plus-lg' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'/></svg>";
const SVG_MINUS = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-dash-lg' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z'/></svg>";
const SVG_FACEBOOK =  "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-facebook' viewBox='0 0 16 16'><path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'/></svg>";
const SVG_INSTAGRAM =  "<svg xmlns='http://www.w3.org/2000/svg'width='25' height='25'  fill='currentColor'class='bi bi-instagram' viewBox='0 0 16 16'><path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z'/></svg>";
const SVG_TWITTER = "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-twitter' viewBox='0 0 16 16'><path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'/></svg>";
const SVG_TABELLA_S = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-table' viewBox='0 0 16 16'><path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z'/></svg>";
const SVG_TABELLA_L = "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='currentColor' class='bi bi-table' viewBox='0 0 16 16'><path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z'/></svg>";
const SVG_ARROW = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-arrow-clockwise' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z'/><path d='M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z'/></svg>";
const SVG_LOCK_S = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-lock-fill' viewBox='0 0 16 16'><path d='M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z'/></svg>";
const SVG_LOCK_L = "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='white' class='bi bi-lock-fill' viewBox='0 0 16 16'><path d='M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z'/></svg>";
const SVG_UNLOCK_S = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-unlock-fill' viewBox='0 0 16 16'><path d='M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z'/></svg>";
const SVG_UNLOCK_L = "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='white' class='bi bi-unlock-fill' viewBox='0 0 16 16'><path d='M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z'/></svg>";
const SVG_TROFEO_L = "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='currentColor' class='bi bi-trophy' viewBox='0 0 16 16'><path d='M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z'/></svg>";
const SVG_TROFEO_S = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-trophy' viewBox='0 0 16 16'><path d='M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z'/></svg>";
const SVG_TROFEO_FILL_S = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-trophy-fill' viewBox='0 0 16 16'><path d='M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z'/></svg>";
const SVG_TROFEO_FILL_L = "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='currentColor' class='bi bi-trophy-fill' viewBox='0 0 16 16'><path d='M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z'/></svg>";
const SVG_WARNING = `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-exclamation-triangle text-danger" viewBox="0 0 16 16"><path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/><path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/></svg>`
const SVG_ERRORE = `    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-x-circle text-danger" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>`

const modalError = new bootstrap.Modal(document.getElementById("modal-errore"));

const inputCodice = document.getElementById("inputCodice");
const btnPrimary = document.getElementById("btnPrimary");
const btnSecondary = document.getElementById("btnSecondary");
const titleLogin = document.getElementById("titleLogin");
const descLogin = document.getElementById("descLogin");
const infoPartita = document.getElementById("infoPartita");
const buttonsLogin = document.getElementById("buttonsLogin");
const inputSceltaCodice = document.getElementById("inputSceltaCodice")
const inputLabelUsername = document.getElementById("inputLabelUsername");
var username;
var codice;
var statoSceltaLogin = 0;

const caratteriPermessi = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
const lunghezzaCodice = 6;
const stateTitleLogin = [
    "Registrati per giocare",
    (username) => {return `Benvenuto <p class="fw-bold d-inline-block">${username}</p> `},
]
const stateDescLogin = [
    () => {return "Scegli il tuo nome utente e se entrare in partita o crearla aspettando i tuoi amici"},
    (statoSceltaLogin) => {return  `Hai effettuato l'accesso come ${((statoSceltaLogin == 1)?'creatore. Ora compra le cartelle e aspetta i tuoi amici per iniziare a giocare.':'partecipante. Ora compra le cartelle e aspetta che il creatore inizia la partita.')}`},
   
]
const btnLogin = (bg,id,func,text) =>{
    return `<button class="btn btn-${bg}  rounded me-1" id="${id}" onclick="${func}">${text}</button>`
}
const stateBtnLogin = [
    `${btnLogin("primary border-0","btnPrimary","accedi()","Accedi")}${btnLogin("secondary border-0","btnSecondary","crea()","Crea")}`,
    `${btnLogin("primary border-0","btnGioca","giocaPartita()","Gioca")}${btnLogin("danger border-0 ps-1 pe-1","btnAnnulla","annullaCrea()",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="width:23.5px;height:23.5px;"fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>`)}`,
`${btnLogin("danger border-0 ","btnAnnulla","annullaCrea()",`Annulla <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="width:23.5px;height:23.5px;"fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
<path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>`)}`
]
const btnInfoPartita = (id,func,text) =>{
    return `<button type='button' class='btn  btn-light me-2 ' id="btnInfo${id}" onclick='${func}'>${text}</button>`
}
const generaCodiceCasuale = () => {
           
    let codice = '';
       codice = '';
       for (let i = 0; i < lunghezzaCodice; i++) {
             const indiceCasuale = Math.floor(Math.random() * caratteriPermessi.length);
             codice += caratteriPermessi.charAt(indiceCasuale);
       }

    return codice;
 };
const modalState = [
 
    {
        svg: SVG_ERRORE,
        title: "Gioca Negato",
        content: "Tutti i partecipanti devono essere pronti al gioco"
    },
    {
        svg: SVG_WARNING,
        title: "Parita Annullata",
        content: "La partita è stata cancellata dal suo creatore"
    },
    {
        svg: SVG_ERRORE,
        title: "Accesso Negato",
        content: "Username attualmente in uso nella partita"
    },
    {
        svg: SVG_ERRORE,
        title: "Accesso Negato",
        content: "L'utilizzo di questo username non è consentito"
    }

]

const stateGiocaPartita = [
    (colore) => {
      return `
  

<div class="row " style="width:320px;margin:auto;">
<div class="col-5 position-relative">

    <div class="m-0  p-2 d-inline-block " style="width:90px;position:absolute;right:-13px;top:4px;">
    <div style="position:absolute;top:37%;">
    <div class="spinner-grow  text-${colore} my-spinner-grow "style="width:20px;height:20px;" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-${colore} my-spinner-grow " style="width:20px;height:20px;"role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow  text-${colore} my-spinner-grow "style="width:20px;height:20px;" role="status">
    <span class="visually-hidden">Loading...</span>
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


      `;
    },() => {
        return `

        <div class="row " style="width:320px;margin:auto;">
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
        
        `
},() => {
    return `

  
<div class="row " style="width:320px;margin:auto;">
<div class="col-5 position-relative">

    <div class="m-0  p-2 d-inline-block " style="width:90px;position:absolute;right:-13px;top:4px;">
    <div style="position:absolute;top:37%;">
    <div class="spinner-grow  text-primary my-spinner-grow "style="width:20px;height:20px;" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-primary my-spinner-grow " style="width:20px;height:20px;"role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow  text-primary my-spinner-grow "style="width:20px;height:20px;" role="status">
    <span class="visually-hidden">Loading...</span>
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
<div class="col-5 position-relative">

<button id="btn-estrai" onclick="estraiNumero()"class=" p-0 ms-4 btn  btn-light  d-inline-block  fw-light fs-4 " style="height:40.5px;width:65px;position:absolute;left:-17px;">
<p class="position-absolute  " style="top:2px;left:4px;">Estrai</p>
</button>   
</div>

</div>

`
},() => {
    return `

  
<div class="row " style="width:320px;margin:auto;">
<div class="col-5 position-relative">

    <div class="m-0  p-2 d-inline-block " style="width:90px;position:absolute;right:-13px;top:4px;">
    <div style="position:absolute;top:37%;">
    <div class="spinner-grow  text-secondary my-spinner-grow "style="width:20px;height:20px;" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-secondary my-spinner-grow " style="width:20px;height:20px;"role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow  text-secondary my-spinner-grow "style="width:20px;height:20px;" role="status">
    <span class="visually-hidden">Loading...</span>
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
<div class="col-5 position-relative">

<button id="btn-estrai" onclick="risultatiPartita()"class=" p-0 ms-4 btn  btn-outline-light  d-inline-block  fw-light fs-4 " style="height:40.5px;width:65px;position:absolute;left:-17px;">
<p class="position-absolute  " style="top:2px;left:8px;">Esito</p>
</button>   
</div>

</div>

`
}

  ];
const stateInfoPartita = [
    `<p class="fw-light">Non sei in nessuna partita. <br>Scegli il tuo username e crea o accedi ad una partita per giocare.</p>`,
    btnInfoPartita(0,"vediStorico()","Chat")
        +   btnInfoPartita(1,"lista()","Lista")
        +   btnInfoPartita(2,"numeriEstratti()","Numeri")
        +   btnInfoPartita(3,"premi()","Premi")
        +
        `
        <div class="row g-0  mt-3 overflow-auto" style="width:95%;" id="content-choice">
     
      </div>
        `
    
]
const stateInputCodice = [
    `   
    <select class="form-select" id="inputSceltaCodice" aria-label="Floating label select example">
        <option selected>Scegli partita</option>
        <option value="1" disabled>Non ci sono partite</option>
  
    </select>
    <label for="inputSceltaCodice">Codice Partita</label>

    `,
    (codice) => { return `
        <input
        type="text"
        class="form-control is-valid"
        id="inputCreaCodice"
        placeholder="CODICE"
        value="${codice}"
        />
        <label for="inputCreaCodice">Codice Partita</label>
 
    ` }
]


//intervalli 
var intervalAggiornaListaCodici;
var intervalAggiornaStorico;
var intervalAggiornaListaPartecipanti;
var intervalOttieniStatoPartitaPrima;
var intervalOttieniStatoPartitaDopo;
var intervalOttieniNumeriEstratti;
var intervalOttieniUltimoNumeroEstratto;
var intervalOttieniPremi;

//modal
var myModal = new bootstrap.Modal(document.getElementById("avvisoVincita"));
window.addEventListener("DOMContentLoaded", function () {
    const idElementoDaPosizionare = "bingo"; // Sostituisci con l'ID dell'elemento desiderato

    function scrollToElement() {
        const elementoDaPosizionare = document.getElementById(idElementoDaPosizionare);

        if (elementoDaPosizionare) {
            const offsetTop = elementoDaPosizionare.getBoundingClientRect().top -20; // Sottrai 50 pixel
            const startTime = performance.now();
            const duration = 50; // Durata dell'animazione in millisecondi

            function scrollStep() {
                const currentTime = performance.now();
                const elapsed = currentTime - startTime;

                if (elapsed < duration) {
                    const easedProgress = easeInOut(elapsed / duration);
                    window.scrollTo(0, window.scrollY + offsetTop * easedProgress);
                    window.requestAnimationFrame(scrollStep);
                } else {
                    window.scrollTo(0, window.scrollY + offsetTop);
                }
            }

            function easeInOut(t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            }

            window.requestAnimationFrame(scrollStep);
        }
    }

    // Aggiungi un ritardo di 500 millisecondi prima di eseguire lo scroll
    setTimeout(scrollToElement,50);
});



function setLoginForm(inx){
    
    if (typeof stateTitleLogin[inx] === 'function') {
        titleLogin.innerHTML = stateTitleLogin[inx](username)
        
    }else titleLogin.innerHTML = stateTitleLogin[inx];
   
    descLogin.innerHTML = stateDescLogin[inx](statoSceltaLogin);
  
        infoPartita.innerHTML = stateInfoPartita[inx];
       
        if (typeof stateInputCodice[inx] === 'function') {
       
            inputCodice.innerHTML = stateInputCodice[inx](codice);
        } else {
            inputCodice.innerHTML = stateInputCodice[inx];
        }

    buttonsLogin.innerHTML = stateBtnLogin[((inx == 1)?((statoSceltaLogin == 1)? 1 : 2) :inx)];
    if(inx == 1){
     
        vediStorico();
        document.getElementById(`btnInfo${0}`).classList.remove('btn-light');
        document.getElementById(`btnInfo${0}`).classList.add('btn-secondary');
    }
}
function accedi(){
    


    username = inputLabelUsername.value;
    codice = document.getElementById("inputSceltaCodice").value;

    var statoUsername = 0;
    var statoCodice = 0;
    var checkStato = false;
    if(username == "")statoUsername = 1;
    else if(username.toLowerCase() == "banco"){
        statoUsername = 1;
        showCustomErrorModal(3)
    }
    if(codice == "Scegli partita")statoCodice = 1;
    if(statoUsername != 0 || statoCodice != 0)checkStato = true;
    if(checkStato == true)erroreInput(statoUsername,statoCodice);
    else{
        statoLogin = true;
        const url = `server.php?event=13&id=${encodeURIComponent(codice)}&username=${encodeURIComponent(username)}`;
        myFetch(url, richiestaVerificaPresenzaUsername);

    }

}
function giocaPartita(){
   
    const url1 = `server.php?event=10&id=${encodeURIComponent(codice)}`;
    myFetch(url1, richiestaTuttiPronti);
  
}
function showCustomErrorModal(inx) {
    const customModal = modalState[inx];
    document.getElementById(`modal-svg`).innerHTML = customModal.svg;
    document.getElementById(`modal-title`).innerHTML = customModal.title;
    document.getElementById(`modal-content`).innerHTML = customModal.content;
    if(myModal._isShown) myModal.hide();
    modalError.show();
}



function goToTop(){
        window.scrollTo(0, 0);
  

}
function goToAccount(){
    if (document.getElementsByClassName("my-spinner-grow")[0].classList.contains("text-success")) {
        window.scrollTo(0, 0);
    } else {
        window.location.href = "#bingo";
    } 

}
function erroreInput(statoUsername,statoCodice,stato,statoBlock){
    statoLogin = false;
    if(statoUsername == 1){
        document.getElementById("inputLabelUsername").classList.add("is-invalid")
        
    }
    if(statoCodice == 1){
        document.getElementById("inputSceltaCodice").classList.add("is-invalid")
    }
    document.getElementById("inputLabelUsername").classList.add("disabilita")
    document.getElementById("inputSceltaCodice").classList.add("disabilita")

    if(stato == 1)document.getElementById("inputSceltaCodice").setAttribute("disabled",true);

    
        document.getElementsByClassName("btnScelta")[0].setAttribute("disabled",true);
        document.getElementsByClassName("btnScelta")[1].setAttribute("disabled",true);

    
    document.getElementById("btnPrimary").setAttribute("disabled", true);
    document.getElementById("btnSecondary").setAttribute("disabled", true);
    setTimeout(function() {
        if(statoUsername == 1){
            document.getElementById("inputLabelUsername").classList.remove("is-invalid")
          
        }
        if(statoCodice == 1){
            document.getElementById("inputSceltaCodice").classList.remove("is-invalid")
            
        }
            document.getElementsByClassName("btnScelta")[0].removeAttribute("disabled");
            document.getElementsByClassName("btnScelta")[1].removeAttribute("disabled");
    
        
        document.getElementById("inputLabelUsername").classList.remove("disabilita")
        document.getElementById("inputSceltaCodice").classList.remove("disabilita")
        document.getElementById("inputSceltaCodice").removeAttribute("disabled");
        document.getElementById("btnPrimary").removeAttribute("disabled");
        document.getElementById("btnSecondary").removeAttribute("disabled");
       

    }, 2000); 
}
function myFetch(url, callback) {
    fetch(url)
       .then(response => response.json())
       .then(data => {
             callback(data);
       })
       .catch(error => {
             console.error("Errore:", error);
       });
 }

 function richiestaVerificaPresenzaUsername(data){
    if(data == 0){
        clearInterval(intervalAggiornaListaCodici);
        ottieniStatoPartitaPrima();
        intervalOttieniStatoPartitaPrima = setInterval(() => {
            ottieniStatoPartitaPrima();
        }, 500); 

        const url1 = `server.php?event=6&id=${encodeURIComponent(codice)}&username=${encodeURIComponent(username)}&ruolo=1`;
        myFetch(url1, richiestaAccediPartita);      

        const append = encodeURIComponent(newStorico(`<font class="fw-normal">${username}</font> accede alla partita`))
        const url2 = `server.php?event=4&id=${encodeURIComponent(codice)}&str=${append}`;
        myFetch(url2, richiestaAggiornaStorico);      


        window.scrollTo(0, 0);
        setLoginForm(1)
        inputCodice.classList.add("disabilita");
        inputLabelUsername.classList.add("is-valid")
        inputLabelUsername.classList.add("disabilita")
        inputSceltaCodice.classList.add("is-valid")
  

        document.getElementsByClassName("iniziaPartita")[0].innerHTML = stateGiocaPartita[0]("secondary");
    }else{
        erroreInput(1,0,1,0)
        showCustomErrorModal(2);
    }
 }
 function bubbleSort(dataArray) {
    var n = dataArray.length;
    var swapped;
    do {
      swapped = false;
      for (var i = 0; i < n - 1; i++) {
        if (dataArray[i] > dataArray[i + 1]) {
          // Scambia gli elementi se sono fuori ordine
          var temp = dataArray[i];
          dataArray[i] = dataArray[i + 1];
          dataArray[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  }
 function richiestaOttieniUltimoNumeroEstratto(data){




        if(data != null){
            // se il dato estratto è diverso da quello presente
            const dataStr = data;
            const dataArray = dataStr.split('.');
            dataArray.shift();


            // Seleziona l'elemento div con l'ID "content-choice"
            const myTable = document.getElementById('my-tabe');

            // Seleziona tutti gli elementi con la classe "newNumero" all'interno di contentChoice
            const myNumber = myTable.querySelectorAll('.bg-warning');

            // Crea un array per memorizzare i textContent dei numeri
            const numeri = [];

            // Itera attraverso gli elementi e acquisisci il textContent
            myNumber.forEach(function(element) {
            numeri.push((parseInt(element.textContent) - 1).toString());

            });
          
            const length = dataArray.length;
            const appDataArray = new Array(length);
            for(let i = 0;i < appDataArray.length; i ++ ){
                appDataArray[i] = dataArray[i]
            }
            appDataArray.sort(function(a, b) {
                return a - b;
            });
            numeri.sort(function(a, b) {
                return a - b;
            });
            const appDataStr = appDataArray.join('.')
            const numeriStr = numeri.join('.')
           
          
            if(appDataStr != numeriStr)estraiNumero(parseInt(dataArray[dataArray.length - 1]));
        }
}
function richiestaAggiornaPremio(data){
   
}
function richiestaInitPremi(data){

}
function richiestaOttieniResocontoVittorie(data){
    var numeroPremiVinti = 0;
    const dataStr = data;
    const dataArray = dataStr.split('.');
    const dataMatrix = [];
   
    for(let i= 0; i < dataArray.length; i ++){
        dataMatrix[i] = dataArray[i].split(',')
    }
    for(let i = 0; i < dataMatrix.length; i ++){
        dataMatrix[i].shift();
    }
    const nomiPremi = ["Ambo","Terna","Quaterna","Cinquina","Tombola"];
    var avviso = ``;
    avviso += `<table class="table table-borderless align-middle fw-light">`;

    for(let i = 0; i < dataMatrix.length; i ++){
        avviso += `<tr>`;
        avviso += `<td style="width:30px;">${SVG_TROFEO_FILL_S}</td>`
        avviso += `<td scope="row" class="border-end fw-normal"style="width:80px;">${nomiPremi[i]}</td>`
        for(let j = 0; j < dataMatrix[i].length; j ++){
            if(dataMatrix[i][j] == username)numeroPremiVinti++;
            avviso += `<td style="width:140px;">${dataMatrix[i][j]}</td>`
        }
        avviso += `</tr>`;
    }
    avviso += `</table>`;


document.getElementById("modal-content-resoconto").innerHTML = avviso;
document.getElementById("numeroPremiVinti").innerHTML = ((numeroPremiVinti == 0)?"Nessun premio vinto":`Hai vinto ${numeroPremiVinti} prem${((numeroPremiVinti == 1)?'io':'i')}`)


}
function richiestaOttieniVincitori(data){


   
    const dataStr = data;
    const dataArray = dataStr.split('.');
    const dataMatrix = [];
   
    for(let i= 0; i < dataArray.length; i ++){
        dataMatrix[i] = dataArray[i].split(',')
    }
    for(let i = 0; i < dataMatrix.length; i ++){
        dataMatrix[i].shift();
    }
   
    var inxStato = 0;
 
    var statoVincitaPrimo = ["Perso","Vinto","Pareggio"]
    var statoVincitaSecondo = ["perso","vinto","pareggiato"]

    if(dataMatrix[premioAttuale].length != 0){
        inx = premioAttuale;
       
      
    for(let i = 0; i < dataMatrix[inx].length; i++){
        if(username == dataMatrix[inx][i] && dataMatrix[inx].length > 1){
            inxStato = 2;
            break;
        }
        else if(username == dataMatrix[inx][0] && dataMatrix[inx].length == 1){
            inxStato = 1;
            break;
        }
    }
 
       
  


       
            document.getElementById(`trofeo${inx}`).innerHTML = SVG_TROFEO_FILL_S;
            document.getElementById(`stato${inx}`).innerHTML = statoVincitaPrimo[inxStato].toLowerCase();



            document.getElementsByClassName('avvisoVincita')[0].innerHTML = inizializzaAvvisoVincita(inx);

                if(myModal._isShown) myModal.hide();
                setTimeout(function(){
                    myModal.show();

                    var generaAvviso = ''; 
                    generaAvviso += `<div class="mb-3 mt-3 " style="max-width:300px;margin:0 auto;">`
                    generaAvviso +=  "Hai <strong>" +statoVincitaSecondo[inxStato] + "</strong> questo premio<br>";
                    generaAvviso += "<small><em>Continua a giocare per vincere altri premi!</em></small>"
                    generaAvviso += "<hr style='margin:0 auto;width:30px;height:10px;background-color:black;'class='mt-4 mb-4'>"
                    generaAvviso += `<div class="mt-2  overflow-auto"style="max-height:200px;width:200px;margin: 0 auto;">`

                    generaAvviso += `<div class="m-0 mb-2 pb-1 text-center fs-5">Vincitori</div>`
                    for(let i = 0; i < dataMatrix[inx].length; i++){
                        generaAvviso += `<div class="m-0 mb-3 pb-1 ps-3 fw-light border-bottom">${dataMatrix[inx][i]}</div>`
                    }



                    generaAvviso += `</div>`
                
                    generaAvviso += `</div>`
                            
                        
                    
                    document.getElementById("statoPremio").innerHTML =statoVincitaPrimo[inxStato]
                    document.getElementById("listaPremio").innerHTML = generaAvviso;
                },200);

            
            
     
          
                premioAttuale++;
                if(premioAttuale == 5){
                    setTimeout(function(){
                    aggiornaStatoGiocatore(0)
                    document.getElementsByClassName("iniziaPartita")[0].innerHTML = stateGiocaPartita[3]();
                   
                    clearInterval(intervalOttieniUltimoNumeroEstratto)
                    document.getElementsByClassName("numeroEstratto")[0].innerHTML = "";
                    document.getElementsByClassName("corpo")[0].classList.remove("opacity-100");
                    document.getElementsByClassName("corpo")[0].classList.add("opacity-75");
                  
                    if(statoSceltaLogin == 1){
                     
                           
                                    const url1 = `server.php?event=11&id=${encodeURIComponent(codice)}`;
                                    myFetch(url1, richiestaAggiornaStatoPartita);  
                            
                               
                        //invio notifica chat termine partita
                     const append = encodeURIComponent(newStorico(`Partita terminata`))
                     const url2 = `server.php?event=4&id=${encodeURIComponent(codice)}&str=${append}`;
                     myFetch(url2, richiestaAggiornaStorico);
                    setTimeout(function(){
                        const url = `server.php?event=9&id=${encodeURIComponent(codice)}&username=${encodeURIComponent("Banco")}&stato=1`;
                        myFetch(url, richiestaAggiornaStatoGiocatore); 
                    },500)
                   

                 }
                },500)
                
                   
                 
                }
        
    }//o stesso con invio richiesta attesa vincita

}
function richiestaOttieniPremi(data){
    if(data != null){
    const dataStr = data;
    const dataArray = dataStr.split('.');
    const dataMatrix = [];
   
    for(let i= 0; i < dataArray.length; i ++){
        dataMatrix[i] = dataArray[i].split(',')
    }

    const table = document.getElementById("listaPremi");
    const contentMatrix = [];
    const rows = table.querySelectorAll("tr");
    rows.forEach((row) => {
    const rowData = [];
    const tds = row.querySelectorAll("td.premioUsername");
    tds.forEach((td) => {
        rowData.push(td.textContent);
    });
    contentMatrix.push(rowData);
    });
    for(let i = 0; i < contentMatrix.length; i ++){
        if(contentMatrix[i][0] == "Non riscattato")contentMatrix[i].shift();
    }
    for(let i = 0; i < dataMatrix.length; i ++){
        dataMatrix[i].shift();
    }
   
    const contentToString = contentMatrix.map((row) => row.toString());
    const contentString = contentToString.join('');

    const dataToString = dataMatrix.map((row) => row.toString());
    const dataString = dataToString.join('');
    const myPremi = ["Ambo","Terna","Quaterna","Cinquina","Tombola"]
    function newVincitore(inx){
        var users = ``
        if(dataMatrix[inx].length != 0){
            for(let i = 0; i < dataMatrix[inx].length; i ++){
                users+=`<td class="premioUsername" style="width:140px;">${dataMatrix[inx][i]}</td>`
            }
        }else{
            users+=`<td class="premioUsername" style="width:140px;">Non riscattato</td>`
        }
        return users;
   
    }
    function newRiga(inx){
        return `
        <tr>
            <td style="width:30px;">${((dataMatrix[inx].length == 0)?SVG_TROFEO_S :SVG_TROFEO_FILL_S)}</td>
            <td scope="row" class="border-end fw-normal" style="width:80px;">${myPremi[inx]}</td>
            ${newVincitore(inx)}
        </tr>
        `
    }
    if(contentString != dataString){
        var tableInner = ` `;
        for(let i = 0; i < dataMatrix.length; i ++){
                tableInner += newRiga(i);
        }

        table.innerHTML = tableInner;
    }
}

}
function richiestaRipristinaNumeri(data){
}
 function richiestaOttieniNumeriEstratti(data){
    if(data == ''){
        const contentChoice = document.getElementById("content-choice");
        if(contentChoice.innerHTML != "<p class='fw-light'>Ancora non sono stati estratti numeri</p>")contentChoice.innerHTML = "<p class='fw-light'>Ancora non sono stati estratti numeri</p>";

    }
    else if(data != null){
        const dataStr = data;
        const dataArray = dataStr.split('.');
        dataArray.shift();
        const dataHtml = [];
        for(let i = 0; i < dataArray.length; i ++){
            dataHtml.push(newNumeroEstratto(parseInt(dataArray[i]) + 1))
        }
        const dataResult = dataHtml.join('');
        const contentChoice = document.getElementById("content-choice");
        if(dataResult != contentChoice.innerHTML){
            contentChoice.innerHTML = dataResult;
        }
      
   
    }

 }
 
 function richiestaAggiornaNumeriEstratti(data){
 }
function richiestaCreaPartita(data){
}
function richiestaEliminaPartita(data){
}
function richiestaAggiornaStorico(data){
}
function richiestaUscitaPartita(data){
}
function richiestaAccediPartita(data){
}
function richiestaAggiornaStatoGiocatore(data){
}
function richiestaAggiornaStatoPartita(data){
}
function richiestaOttieniStatoPartitaDopo(data){
        if(data == -1){
        clearInterval(intervalOttieniStatoPartitaDopo)
        clearInterval(intervalOttieniStatoPartitaPrima)
        showCustomErrorModal(1);
        annullaCrea()
        ripristinaPartita()
    
    }

}
function richiestaOttieniStatoPartitaPrima(data){
    if(data == 1){
        
        clearInterval(intervalOttieniStatoPartitaPrima)
        inizializzaGiocaPartita();
        ottieniStatoPartitaDopo()
        intervalOttieniStatoPartitaDopo = setInterval(() => {
            ottieniStatoPartitaDopo();
        }, 500); 
        window.location.href = "#main-corpo";


    }else if(data == -1){
        clearInterval(intervalOttieniStatoPartitaPrima)
        clearInterval(intervalOttieniStatoPartitaDopo)
        showCustomErrorModal(1);
        annullaCrea()
        ripristinaPartita()
    
    }

}
function inizializzaGiocaPartita(){
    aggiornaStatoGiocatore(2);
    if(statoSceltaLogin == 0){
        intervalOttieniUltimoNumeroEstratto = setInterval(() => {
            const url = `server.php?event=15&id=${codice}`;
            myFetch(url,richiestaOttieniUltimoNumeroEstratto);  
        },500)
    }
  
    const append = encodeURIComponent(newStorico(`Partita avviata da <font class="fw-normal">${username}</font>`))
    const url2 = `server.php?event=4&id=${encodeURIComponent(codice)}&str=${append}`;
    myFetch(url2, richiestaAggiornaStorico);     
    if (document.getElementsByClassName("my-spinner-grow")[0].classList.contains("text-success")) {
        document.getElementsByClassName("my-spinner-grow")[0].classList.remove("text-success")
        document.getElementsByClassName("my-spinner-grow")[0].classList.add("text-primary")
        document.getElementsByClassName("my-spinner-grow")[1].classList.remove("text-success")
        document.getElementsByClassName("my-spinner-grow")[1].classList.add("text-primary")
        document.getElementsByClassName("my-spinner-grow")[2].classList.remove("text-success")
        document.getElementsByClassName("my-spinner-grow")[2].classList.add("text-primary")
    }

    iniziaPartita()

    const btnGiocaElement = document.getElementById("btnGioca");

    if (btnGiocaElement) {
    btnGiocaElement.setAttribute("disabled", true);
    } 
    setTimeout(function() {
        window.location.href = "#main-corpo";
    }, 600); 
}
function richiestaTuttiPronti(data){


    if(data == 1 || data == 2){
        if(data == 1){
            setTimeout(function(){
            const url1 = `server.php?event=11&id=${encodeURIComponent(codice)}`;
            myFetch(url1, richiestaAggiornaStatoPartita);  
        },300)
            setTimeout(function(){
            inizializzaGiocaPartita();
            
            const url2 = `server.php?event=16&id=${encodeURIComponent(codice)}`;
            myFetch(url2, richiestaInitPremi);

            const url3 = `server.php?event=9&id=${encodeURIComponent(codice)}&username=${encodeURIComponent("Banco")}&stato=2`;
            myFetch(url3, richiestaAggiornaStatoGiocatore);
        },300)
        }
    }else{
        showCustomErrorModal(0);
    }
}
function rimuoviBackslashN(inputString) {
    let outputString = '';

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === '\\' && inputString[i + 1] === 'n') {
            i++; // Salta il carattere 'n' dopo il backslash
        } else {
            outputString += inputString[i];
        }
    }

    return outputString;
}
function convertiStringa(stringaSpecifico) {
    // Rimuovi apici dall'inizio e dalla fine
    let strApp = rimuoviBackslashN(stringaSpecifico);
    let stringaGenerica = strApp.replace(/^"|"$/g, '');
  
    // Rimuovi tutti i caratteri di escape \
    stringaGenerica = stringaGenerica.replace(/\\/g, '');
    
    return stringaGenerica
  }

  function scrollToTop() {
    const contentChoice = document.getElementById("content-choice");
    contentChoice.scrollTop = 0; // Impostiamo scrollTop a 0 per far scorrere verso l'alto
}
  function scrollToBottom() {
    contentChoice = document.getElementById("content-choice");
    contentChoice.scrollTop = contentChoice.scrollHeight;
}
function inviaMessaggio(event,stato){
    var go = false;
    if(stato == 0){
        if (event.key === "Enter") go = true;
    }else go = true;
    if(go == true){
        const inputLabelMessaggio = document.getElementById("inputMessaggio");
        const msg = inputLabelMessaggio.value;
        inputLabelMessaggio.value = "";

       
        const append = encodeURIComponent(newStorico(`<font class="fw-normal">${username}:</font> ${msg}`))
        const url2 = `server.php?event=4&id=${encodeURIComponent(codice)}&str=${append}`;
        myFetch(url2, richiestaAggiornaStorico);




        
    }
}
const inputMessaggio = `     <input type="text" onkeydown="inviaMessaggio(event,0)" id="inputMessaggio" class="border border-1 rounded-start ps-2 fw-light" placeholder="Scrivi messaggio..." style="width:80%">
<button onclick="inviaMessaggio(event,1)" class="btn btn-outline-info" type="button" id="button-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill " viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
</svg></button>`
function richiestaOttieniStorico(data){
    var dataValue = convertiStringa(data);
    if(dataValue.length == 0 || dataValue == '[]')dataValue = "";
    const contentChoice = document.getElementById("divStorico");
    if (contentChoice) {
        const dataApp =  contentChoice.innerHTML;

        if(dataValue != dataApp){
            
            contentChoice.innerHTML = dataValue;
            scrollToBottom();
        }
    }

}
function richiestaAggiornaListaCodici(data) {
    const idList = JSON.parse(data);
    const selectElement = document.getElementById("inputSceltaCodice");

    // Verifica se selectElement.options esiste
    if (selectElement && selectElement.options) {
        const optionValues = [];

        for (let i = 0; i < selectElement.options.length; i++) {
            const optionValue = selectElement.options[i].text;
            optionValues.push(optionValue);
        }

        const idListJoin = `Scegli partita` + ((idList.length == 0) ? `Non ci sono partite` : `${idList.join('')}`);
        const optionValuesJoin = optionValues.join('');

        if (idListJoin !== optionValuesJoin) {
            const options = [];

            for (let i = 0; i < idList.length; i++) {
                options.push({ value: `${idList[i]}`, text: `${idList[i]}` });
            }
            
            // Rimuovi le opzioni esistenti
            while (selectElement.options.length > 0) {
                selectElement.options.remove(0);
            }

            const newOption = new Option("Scegli partita", "Scegli partita");
            selectElement.add(newOption);

            if (idList.length != 0) {
                for (const option of options) {
                    const newOption = new Option(option.text, option.value);
                    selectElement.add(newOption);
                }
            } else {
                const newOption = new Option("Non ci sono partite", "Non ci sono partite");
                newOption.disabled = true;
                selectElement.add(newOption);
            }
        } // else uguali
    }
}

function richiestaOttieniListaPartecipanti(data){
    const lateData = document.querySelectorAll('.usernameGiocatore'); // Select all elements with the class "usernameGiocatore"
    const lateDataStato = document.querySelectorAll('.statoGiocatore'); 
    var stato = 0;
    const lateDataArray = [];
    for(let i = 0; i < lateData.length; i ++){
            if(lateDataStato[i].classList.contains('pronto')) {
                stato = 1;
          } else {
           stato = 0
          }
        
        lateDataArray.push(lateData[i].textContent.trim()+ stato); // Save the text content in the array after trimming whitespace

    }
 

  
  
    const lateDataString = lateDataArray.join('');
  

    const dataArray = data.split('.');
    dataArray.shift();
    
    const dataArrayApp = [];
    dataArray.forEach(function(element) {
        var sottostringa = element.substring(0, element.length - 1);
      
        dataArrayApp.push(sottostringa);
      });
      const dataString = dataArrayApp.join('');
    if(dataString != lateDataString){
        const contentChoice = document.getElementById("content-choice");
        if(dataArray == []){
            contentChoice.innerHTML = 'Nessun giocatore in partita'
        }else{
            const initTable = () =>  {   

                function generaStato(stato){
                    return `<div style="width:20px;height:20px;border-style:solid;border-color:black;border-radius:50%;border-width:0px" class="${((stato ==0)?`bg-secondary`:(stato == 1)?`bg-success`:`bg-primary`)}"></div>`
                }
                function generaRiga(username, ruolo, stato) {
                    
                    return `
                        <tr>
                            <td class="fw-light usernameGiocatore">${username}</td>
                            <td class="fw-light">${(ruolo == 0)? `Creatore` :(ruolo == 1) ?`Partecipante`: 'Bot'}</td>
                            <td class="fw-light statoGiocatore ${(stato == 0)? `nonPronto` :  `pronto`}">
                            ${generaStato(stato)}
                            </td>
                        </tr>
                    `;
                }
                var genTable =  ` <table id="table-users"class="table table-borderless">
            <thead>
              <tr>
                <td class="fw-normal">Username</td>
                <td class="fw-normal">Ruolo</td>
        
                <td class="fw-normal">Pronto</td>
              </tr>
            </thead>
            <tbody>`
            for(let i = 0; i < dataArray.length; i ++){


                const dataUnsername =  dataArray[i].substring(0, dataArray[i].length - 2);
                const dataStato = parseInt(dataArray[i].charAt(dataArray[i].length - 2));
                const dataRuolo = parseInt(dataArray[i].charAt(dataArray[i].length - 1));
                genTable += generaRiga(dataUnsername,dataRuolo,dataStato)


            }
            
            
            genTable += `
            </tbody>
          </table>`

          return genTable;
        };

  
            if (contentChoice) {
                contentChoice.innerHTML = initTable();
            } 
      
         
        }
    }
    
    
    
   
}
function crea(){

 
    statoSceltaLogin = 1;
    username = inputLabelUsername.value;
    
    if(username == ""){
            erroreInput(1,0,1,0)
    }
    else if(username.toLowerCase() == "banco"){
        erroreInput(1,0,1,0)
        showCustomErrorModal(3)
    }
        else{
            document.getElementsByTagName("body")[0].classList.add("disabilita")
            clearInterval(intervalAggiornaListaCodici);
            setTimeout(function(){
            codice = generaCodiceCasuale();
            const url1 = `server.php?event=0&id=${encodeURIComponent(codice)}`;
            myFetch(url1, richiestaCreaPartita);
                     
            setTimeout(function(){
                const append = encodeURIComponent(newStorico(`Partita <font class="fw-normal">${codice}</font> creata da <font class="fw-normal">${username}</font>`))
                const url2 = `server.php?event=4&id=${encodeURIComponent(codice)}&str=${append}`;
                myFetch(url2, richiestaAggiornaStorico);
    
                const url3 = `server.php?event=6&id=${encodeURIComponent(codice)}&username=${encodeURIComponent(username)}&ruolo=0`;
                myFetch(url3, richiestaAccediPartita); 
                const url4 = `server.php?event=6&id=${encodeURIComponent(codice)}&username=${encodeURIComponent("Banco")}&ruolo=2`;
                myFetch(url4, richiestaAccediPartita); 
            },600)
     
        
          


            
            window.scrollTo(0, 0);
            statoLogin = true;
   
      
            setLoginForm(1);
        
                inputCodice.classList.add("disabilita");
 
                inputLabelUsername.classList.add("is-valid")
                inputLabelUsername.classList.add("disabilita")
            
    
                
                    document.getElementsByClassName("iniziaPartita")[0].innerHTML = stateGiocaPartita[0]("secondary");
                    document.getElementsByTagName("body")[0].classList.remove("disabilita")
            },600)

    }
  
}
function newStorico(text){
    return `<div class="col-4 mt-2 text-secondary">${getOrarioFormattato()}</div>
    <div class=" fw-light col-8 mt-2">${text}</div>`;
}
aggiornaListaCodici();
intervalAggiornaListaCodici = setInterval(() => {
    aggiornaListaCodici();
 }, 500); 
function aggiornaListaCodici(){
    const url = `server.php?event=3`;
    myFetch(url, richiestaAggiornaListaCodici);  
}

function ottieniStatoPartitaDopo(){
    const url1 = `server.php?event=12&id=${encodeURIComponent(codice)}`;
    myFetch(url1, richiestaOttieniStatoPartitaDopo);     

}
function ottieniStatoPartitaPrima(){
    const url1 = `server.php?event=12&id=${encodeURIComponent(codice)}`;
    myFetch(url1, richiestaOttieniStatoPartitaPrima);     

}



function annullaCrea(){
   
    premioAttuale = 0;
    aggiornaListaCodici();
    intervalAggiornaListaCodici = setInterval(() => {
        aggiornaListaCodici();
     }, 500); 
    clearAllInfoInterval()
    if(statoSceltaLogin == 1){
        const url = `server.php?event=1&id=${encodeURIComponent(codice)}`;
        myFetch(url, richiestaEliminaPartita);
    }else{
        const append = encodeURIComponent(newStorico(`<font class="fw-normal">${username}</font> esce dalla partita`))
        const url2 = `server.php?event=4&id=${encodeURIComponent(codice)}&str=${append}`;
        myFetch(url2, richiestaAggiornaStorico);      

        const url = `server.php?event=7&id=${encodeURIComponent(codice)}&username=${encodeURIComponent(username)}`;
        myFetch(url, richiestaUscitaPartita);

        clearInterval(intervalOttieniStatoPartitaPrima)
        clearInterval(intervalOttieniStatoPartitaDopo)
    }
    document.getElementsByClassName("iniziaPartita")[0].innerHTML = stateGiocaPartita[1]();
    statoSceltaLogin = 0;


    ripristinaPartita()


    statoLogin = false;
    setLoginForm(0);
    inputCodice.classList.remove("disabilita");
    inputLabelUsername.classList.remove("is-valid")
    document.getElementById("inputLabelUsername").classList.remove("disabilita")

}
function vediStorico(){
 
    changeBtnInfo(0)
    const contentChoice = document.getElementById('content-choice');
    contentChoice.style.maxHeight="300px";
    contentChoice.innerHTML = `<div id="divStorico"class="row "></div> <div class="mt-4 input-group sticky-bottom " id="divMessaggio" style="width:230px">
  
    </div>`
    document.getElementById("divMessaggio").innerHTML = inputMessaggio;
    const url = `server.php?event=5&id=${codice}`;
    myFetch(url, richiestaOttieniStorico);

    intervalAggiornaStorico = setInterval(() => {
        const url = `server.php?event=5&id=${codice}`;
        myFetch(url, richiestaOttieniStorico);
     }, 500); 
}

function clearAllInfoInterval(){
    const contentChoice = document.getElementById('content-choice');
    if (contentChoice !== null) contentChoice.style.maxHeight = "";
    clearInterval(intervalAggiornaStorico);
    clearInterval(intervalOttieniPremi);
    clearInterval(intervalAggiornaListaPartecipanti);
    clearInterval(intervalOttieniNumeriEstratti);
}



function changeBtnInfo(inx){
    clearAllInfoInterval()
    const contentChoice = document.getElementById("content-choice");

    contentChoice.innerHTML = '';

    for(let i = 0; i < 4; i ++){
        const btnInfo =  document.getElementById(`btnInfo${i}`);
        if (btnInfo.classList.contains('btn-secondary')) {
            document.getElementById(`btnInfo${i}`).classList.add('btn-light');
            document.getElementById(`btnInfo${i}`).classList.remove('btn-secondary');
        }
        
    }
    document.getElementById(`btnInfo${inx}`).classList.remove('btn-light');
    document.getElementById(`btnInfo${inx}`).classList.add('btn-secondary');
}
function lista(){

    changeBtnInfo(1)
    ottieniListaPartecipanti();
    

  scrollToTop();
}

function listaPartecipanti(){
    const url = `server.php?event=8&id=${encodeURIComponent(codice)}`;
    myFetch(url, richiestaOttieniListaPartecipanti);
}
function ottieniListaPartecipanti(){
    listaPartecipanti()
    intervalAggiornaListaPartecipanti = setInterval(() => {
        listaPartecipanti();
    
        
     }, 500); 
}

function ottieniNumeriEstratti(){
    const url = `server.php?event=15&id=${codice}`;
        myFetch(url,richiestaOttieniNumeriEstratti); 
    intervalOttieniNumeriEstratti = setInterval(() => {
        const url = `server.php?event=15&id=${codice}`;
        myFetch(url,richiestaOttieniNumeriEstratti); 
     }, 500); 
}
function newNumeroEstratto(num){
    return  `    <div
    class="bg-light border-warning me-2 mb-2 "
    style="
      width: 25px;
      height: 25px;
      position: relative;
      border-radius: 50px;
      border-style: solid;
      border-width: 2px;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
    "
  >
${num}
  </div>
  `
}
function numeriEstratti(){
    changeBtnInfo(2)
    const contentChoice = document.getElementById("content-choice");
    ottieniNumeriEstratti()
    //contentChoice.innerHTML += newNumeroEstratto(2)

    scrollToBottom();


}
function ottieniPremi(){
    const url = `server.php?event=18&id=${codice}`;
    myFetch(url,richiestaOttieniPremi); 
    intervalOttieniPremi = setInterval(() => {
        const url = `server.php?event=18&id=${codice}`;
        myFetch(url,richiestaOttieniPremi); 
    }, 500); 
}
function premi(){
    changeBtnInfo(3)

    const contentChoice = document.getElementById("content-choice");
    contentChoice.innerHTML = `
    
<table class="table table-borderless align-middle fw-light" id="listaPremi">


  <tr>
  <td style="width:30px;">${SVG_TROFEO_S}</td>
  <td scope="row" class="border-end fw-normal"style="width:80px;"> Ambo</td>
    <td class="premioUsername" style="width:140px;">Non riscattato</td>

  </tr>
  <tr>
  <td style="width:30px;">${SVG_TROFEO_S}</td>
  <td scope="row"  class="border-end fw-normal"style="width:80px;">Terna</td>
  <td class="premioUsername" style="width:140px;">Non riscattato</td>
  </tr>
  <tr>
  <td style="width:30px;">${SVG_TROFEO_S}</td>
  <td scope="row"  class="border-end fw-normal"style="width:80px;">Quaterna</td>
  <td class="premioUsername" style="width:140px;">Non riscattato</td>
  </tr>
  <td style="width:30px;">${SVG_TROFEO_S}</td>
  <td scope="row"  class="border-end fw-normal"style="width:80px;">Cinquina</td>
  <td class="premioUsername" style="width:140px;">Non riscattato</td>
</tr>
<td style="width:30px;">${SVG_TROFEO_S}</td>
<td scope="row"  class="border-end fw-normal"style="width:80px;">Tombola</td>
<td class="premioUsername" style="width:140px;">Non riscattato</td>
</tr>


</table>`
ottieniPremi();
}
function getSpaziFormattazione() {
    var orarioFormattato = getOrarioFormattato();
    var spaziFormattazione = "";
    for(let i = 0; i <= orarioFormattato.length*2 + 3 ; i ++){
        spaziFormattazione+= "&nbsp;";
    }
    return spaziFormattazione ;
}
function getOrarioFormattato() {
    var orarioCorrente = new Date();
    var ore = orarioCorrente.getHours();
    var minuti = orarioCorrente.getMinutes();
    var secondi = orarioCorrente.getSeconds();
    var orarioFormattato = ore + ":" + aggiungiZero(minuti) + ":" + aggiungiZero(secondi);
    return orarioFormattato ;
}
function aggiungiZero(numero) {
    if (numero < 10) {
        return "0" + numero;
    }
    return numero;
}
const CARTELLA = 0;
const TABELLONE = 1;
const NESSUNA = 2;
var statoSceltaTipoCartella = NESSUNA;
var statoLogin = false; //true se login ok false non login

const ATTESA = 0;
const PRONTO = 1;
var statoPartita = ATTESA;

const avvisoNessunaCartella = "<div class='container mt-3 mb-3 opacity-75' style='max-width:1000px'><h3 >Nessuna cartella acquistata</h3><p class='lead'><small><em>Prima di giocare compra subito delle cartelle e dai inizio al divertimento</em></small></p></div>";
const avvisoMassimoCartelle = "<p class='mt-3 lead opacity-75'><small><em>Numero massimo di cartelle raggiunto. Non puoi comprare altre cartelle.</em></small></p>";
const x = window.matchMedia("(max-height: 640px) and (min-width: 600px)");
const y = window.matchMedia("(max-height: 680px) and (max-width: 600px)");
const z =  window.matchMedia("(max-width: 780px)");
const s =  window.matchMedia("(max-width: 1000px)");

function sectionResponsive(x) {
    if (statoSceltaTipoCartella != NESSUNA) {
        const colLeftElements = document.getElementsByClassName("colLeft");
        const colRightElements = document.getElementsByClassName("colRight");

        if (colLeftElements.length > 0 && colRightElements.length > 0) {
            if (x.matches) {
                colLeftElements[0].classList.remove('col-sm-5');
                colRightElements[0].classList.remove('col-sm-7');
                colLeftElements[0].classList.remove('border-end');
                colLeftElements[0].classList.add('col-sm-12');
                colRightElements[0].classList.add('col-sm-12');
            } else {
                colLeftElements[0].classList.add('col-sm-5');
                colRightElements[0].classList.add('col-sm-7');
                colLeftElements[0].classList.add('border-end');
                colLeftElements[0].classList.remove('col-sm-12');
                colRightElements[0].classList.remove('col-sm-12');
            }
        }
    }
    return x.matches;
}

function sectionerResponsive(x) {
    if (statoPartita == PRONTO) {
        const colLefterElements = document.getElementsByClassName("colLefter");
        const colRighterElements = document.getElementsByClassName("colRighter");

        if (colLefterElements.length > 0 && colRighterElements.length > 0) {
            if (x.matches) {
                colLefterElements[0].classList.remove('col-sm-5');
                colRighterElements[0].classList.remove('col-sm-7');
                colLefterElements[0].classList.remove('border-end');
                colLefterElements[0].classList.add('col-sm-12');
                colRighterElements[0].classList.add('col-sm-12');
            } else {
                colLefterElements[0].classList.add('col-sm-5');
                colRighterElements[0].classList.add('col-sm-7');
                colLefterElements[0].classList.add('border-end');
                colLefterElements[0].classList.remove('col-sm-12');
                colRighterElements[0].classList.remove('col-sm-12');
            }
        }
    }
    return x.matches;
}

sectionResponsive(z);
sectionerResponsive(s);

z.addListener(sectionResponsive);
s.addListener(sectionerResponsive);

class Cartella {
    constructor(nomeCartella,tipoCartella,idCartella,quadrante) {
        this.nomeCartella = nomeCartella;   
        this.tipoCartella = inizializzaTipoCartella(tipoCartella,nomeCartella,idCartella,false);
        this.numeriCartella = new Array();
        for(let i = 0; i < 3; i ++) this.numeriCartella[i] = new Array();
        this.idCartella = idCartella;
        this.cartellaPronta = false;
        this.setCelleCartella(tipoCartella,quadrante)
    }
    setCartellaPronta(cartellaPronta){this.cartellaPronta = cartellaPronta;}
    getCartellaPronta(){return this.cartellaPronta;}
    getNomeCartella(){return this.nomeCartella;}
    getTipoCartella(){return this.tipoCartella;}
    getIdCartella(){return this.idCartella;}
    getNumeroCellaCartella(i,j){ return this.numeriCartella[i][j];}
    setNumeroCellaCartella(i,j,n){this.numeriCartella[i][j] = n;}
    setCelleCartella(tipoCartella,quadrante){
        if(tipoCartella == CARTELLA)this.setCelleCartellaStandard();
        else this.setCelleCartellaTabellone(quadrante);
    }
    setTipoCartella(tipoCartella,nomeCartella,idCartella,inizioPartita){this.tipoCartella = inizializzaTipoCartella(tipoCartella,nomeCartella,idCartella,inizioPartita);}
    setCelleCartellaTabellone(quadrante){
        let quadranti= 0;
        let colonne = 0;
        let f = 0;
        for(let  i = 0; i < 3; i ++){
            for(let  j = 0; j < 3; j++){
                colonne = 0;
                for(let  k = 0; k < 10; k ++){
                    f++;
                    if(k == 5){
                        colonne = 0;
                        quadranti++;          
                    }
                    if(quadranti == quadrante){      
                        this.setNumeroCellaCartella(j,colonne,f);
                        colonne++;
                    }     
                }
                    if(j != 2)quadranti--;  
            }
            quadranti++;
        }
    }
    setCelleCartellaStandard(){
        let celleVuote = [];
        let unicaCella = true;
        let unicoNumero = true;
        let app = 0;
        let c = 0;
        let numero = 0;
        for(let i = 0; i < 3; i ++){ 
            c = 0;
            celleVuote = [];
            for(let k = 0; k < 4; k ++){
                celleVuote[k] = Math.floor(Math.random() * 9)
                do{            
                    if(unicaCella == false){
                        unicaCella = true;
                        celleVuote[k] = Math.floor(Math.random() * 9);           
                    }
                    for(let f = 0; f <  celleVuote.length; f ++)
                        if(k != f && celleVuote[k] == celleVuote[f]){
                            unicaCella = false;
                            break;
                        }            
                }while(unicaCella != true);      
            }       
            for(let k = 0; k < 3; k ++){
                for(let f = 0; f < 3; f ++){
                    if(celleVuote[f] > celleVuote[f + 1]){
                        app = celleVuote[f];
                        celleVuote[f] = celleVuote[f + 1];
                        celleVuote[f + 1] = app;
                    }
                }
            }
            for(let j = 0; j < 9; j ++){
                if(j == celleVuote[c]){
                    c++;
                    this.setNumeroCellaCartella(i,j,0);
                }
                else {
                    numero = j * 10 + (1 + Math.floor(Math.random() * 10));
                        do{           
                            if(unicoNumero == false){
                                unicoNumero = true;
                                numero = j * 10 + (1 + Math.floor(Math.random() * 10));         
                            }
                            for(let k = 0; k <  i; k ++)
                                if(this.getNumeroCellaCartella(k,j) == numero){
                                    unicoNumero = false;
                                    break;
                                }         
                        }while(unicoNumero != true);
                        this.setNumeroCellaCartella(i,j,numero);
                }
            }
        }
    }
}

class Botteghino {
    constructor(tipo,max,regole,nome,descrizione,path) {
        this.tipo = tipo;
        this.min = 1;
        this.max = max;
        this.regole = regole;
        this.nome = nome;
        this.descrizione = descrizione;
        this.path = path;
        this.cartella = [];
        this.premi = new Array();
        for(let i = 0; i < 3; i ++)this.premi[i] = new Array();
        this.premi[0] = ["Ambo", "Terna","Quaterna","Cinquina","Tombola"];
        for(let i = 0; i < this.premi[0].length; i ++)this.premi[1][i] = "attesa";
        for(let i = 0; i < this.premi[0].length - 1; i ++)this.premi[2][i] = i + 2;
        this.premi[2][this.premi[0].length - 1] = 15;
        this.tabellone = [];
        for(let i = 0; i < 90; i ++)this.tabellone[i] = false;
    }
    getNumeriPerPremio(i){return this.premi[2][i];}
    getPremioAttuale(){
        let k = 0;
        for(let i = 0; i < this.premi[0].length; i ++){
            if(this.premi[1][i] == "attesa"){
                k = i;
                break;
            }
        }
        return k;
    }
    getNumeroTabellone(i){return this.tabellone[i];}
    setNumeroTabellone(i){this.tabellone[i] = true;}
    getNomePremio(i){return this.premi[0][i];}
    getVincita(i){return this.premi[1][i];}
    setVincita(i,vincita){this.premi[1][i] = vincita}
    getTipo() {return "Botteghino cartelle " + this.tipo +  "<br>" ;}
    getRegole() {return "Puoi acquistare minimo " + this.min + " cartella e massimo "+ this.max+" cartelle. " + this.regole;}
    getNome() {return this.nome;}
    getDescrizione() {return this.descrizione;}
    getPath() {return "./img/" + this.path;}
    eliminaUltimaCartella(){
        for(let i = this.cartella.length -1; i >= 0; i --){
            if(this.cartella[i].getCartellaPronta() == false){
                this.cartella.splice(i,1);
                break;
            }
        }
    }
    eliminaCartellaScelta(i){this.cartella.splice(i,1);}
    resetCartella(){this.cartella = []; for(let i = 0; i < this.premi[0].length; i ++)this.premi[1][i] = "attesa";for(let i = 0; i < 90; i ++)this.tabellone[i] = false;}
    getMaxCartelle(){return this.max;}
    getCartella(){
        let generaCartella ="";
        for(let i = 0; i < this.cartella.length; i ++)generaCartella+=this.getTipoCartella(i);
        return generaCartella;
    }
    getNumeroCartelle(){return this.cartella.length;}
    setCartella(nomeCartella,tipoCartella,idCartella,quadrante){this.cartella.push(new Cartella(nomeCartella,tipoCartella,idCartella,quadrante));}
    getNomeCartella(i){return this.cartella[i].getNomeCartella();}
    getTipoCartella(i){return this.cartella[i].getTipoCartella();}
    getIdCartella(i){ return  this.cartella[i].getIdCartella();}
    getNumeroCellaCartella(i,j,k){return this.cartella[i].getNumeroCellaCartella(j,k);}
    setNumeroCellaCartella(i,j,k,n){this.cartella[i].setNumeroCellaCartella(j,k,n);}
    scambiaCartelle(i,j){
        let appCartella = this.cartella[i];
        this.cartella[i] = this.cartella[j];
        this.cartella[j] = appCartella;
    }
    setTipoCartella(i,tipoCartella,nomeCartella,idCartella,inizioPartita){this.cartella[i].setTipoCartella(tipoCartella,nomeCartella,idCartella,inizioPartita);}
    setCartellaPronta(i,cartellaPronta){this.cartella[i].setCartellaPronta(cartellaPronta);}
    getCartellaPronta(i){return this.cartella[i].getCartellaPronta();}
    getInxById(idCartella){
        let k = 0;
        for( let i = 0; i < this.getNumeroCartelle(); i ++)if(idCartella == this.getIdCartella(i)){
            k = i;
            break;
        }
        return k;
    }
    getCartellePronte(){
        let c = 0;
        for( let i = 0; i < this.getNumeroCartelle(); i ++)if(this.getCartellaPronta(i) == false)c++;
        return c;
    }
}

const botteghino = [];
botteghino.push(new Botteghino("standard ",4,"Le cartelle sono generate casualmente","Cartelle","Acquista la cartella vincente con quei tuoi numeri più fortunati","cartelle.jpg" ));
botteghino.push(new Botteghino("tabellone ",3,"Seleziona i quadranti del tabellone per scegliere le cartelle","Tabellone","Compra le cartelle migliori del tabellone per vincere facilmente","tabellone.jpeg"  ));


function sceltaTipoCartella(tipoCartella){
    if(statoLogin == false){
        window.location.href = "#login"; 
        erroreInput(1,1,0,1)
        
    }else{
 
        aggiornaStatoGiocatore(0)
        if (document.getElementsByClassName("my-spinner-grow")[0].classList.contains("text-success")) {
        document.getElementsByClassName("my-spinner-grow")[0].classList.remove("text-success")
        document.getElementsByClassName("my-spinner-grow")[0].classList.add("text-secondary")
        document.getElementsByClassName("my-spinner-grow")[1].classList.remove("text-success")
        document.getElementsByClassName("my-spinner-grow")[1].classList.add("text-secondary")
        document.getElementsByClassName("my-spinner-grow")[2].classList.remove("text-success")
        document.getElementsByClassName("my-spinner-grow")[2].classList.add("text-secondary")
    }
        statoSceltaTipoCartella = tipoCartella;
        inizializzaPartita();
        window.location.href = "#main-corpo";


    }
}

function aggiornaStatoGiocatore(stato){
    const url = `server.php?event=9&id=${encodeURIComponent(codice)}&username=${encodeURIComponent(username)}&stato=${stato}`;
    myFetch(url, richiestaAggiornaStatoGiocatore); 
}
function ripristinaPartita(stato){
    document.getElementsByClassName("corpo")[0].innerHTML = "<h2 >Nessuna cartella acquistata</h2><p class='lead'>Prima di giocare compra subito delle cartelle e dai inizio al divertimento</p>"
    document.getElementsByClassName("btnScelta")[0].classList.remove('btn-secondary');
    document.getElementsByClassName("btnScelta")[0].classList.add('btn-light');
    document.getElementsByClassName("btnScelta")[1].classList.remove('btn-secondary');
    document.getElementsByClassName("btnScelta")[1].classList.add('btn-light');
    
    if(stato != 1)document.getElementsByClassName("iniziaPartita")[0].innerHTML = stateGiocaPartita[1]();
    document.getElementsByClassName("numeroEstratto")[0].innerHTML = "";
    statoSceltaTipoCartella = NESSUNA;
    inizializzaPartita();
}
function eliminaCartellaScelta(tipoCartella,idCartella,eliminazioneSecondaria){
    
    let aggiornaCartelle = avvisoNessunaCartella;
    
    let k = botteghino[tipoCartella].getInxById(idCartella);
    

    if(eliminazioneSecondaria == TABELLONE){
        sceltaQuadrante(idCartella - 1,eliminazioneSecondaria);
        document.getElementsByClassName('quadrante' +(idCartella - 1))[0].innerHTML = "";
    }
    botteghino[tipoCartella].eliminaCartellaScelta(k);
    if(botteghino[tipoCartella].getNumeroCartelle() != 0)aggiornaCartelle = botteghino[tipoCartella].getCartella()
    else{
        aggiornaStatoGiocatore(0)
        if (document.getElementsByClassName("my-spinner-grow")[0].classList.contains("text-success")) {

            document.getElementsByClassName("my-spinner-grow")[0].classList.remove("text-success")
            document.getElementsByClassName("my-spinner-grow")[0].classList.add("text-secondary")
            document.getElementsByClassName("my-spinner-grow")[1].classList.remove("text-success")
            document.getElementsByClassName("my-spinner-grow")[1].classList.add("text-secondary")
            document.getElementsByClassName("my-spinner-grow")[2].classList.remove("text-success")
            document.getElementsByClassName("my-spinner-grow")[2].classList.add("text-secondary")
        }
         
    
    
    }
    if(tipoCartella == CARTELLA ) document.getElementsByClassName("colLeft")[0].innerHTML =   inizializzaBotteghinoComune(CARTELLA,false);
    document.getElementsByClassName("colRight")[0].innerHTML = aggiornaCartelle;
    inizializzaNumeriCartelle(tipoCartella);
    inizializzaTastoInizio();
}

function cambiaStatoCartella(tipoCartella,idCartella){
    let k = botteghino[tipoCartella].getInxById(idCartella);
    cartellaPronta = true;
    if(botteghino[tipoCartella].getCartellaPronta(k) == true)cartellaPronta = false;
    botteghino[tipoCartella].setCartellaPronta(k,cartellaPronta);
    for( let i = 0; i < botteghino[tipoCartella].getNumeroCartelle(); i ++)botteghino[tipoCartella].setTipoCartella(i,tipoCartella,botteghino[tipoCartella].getNomeCartella(i),botteghino[tipoCartella].getIdCartella(i),botteghino[tipoCartella].getCartellaPronta(i));
    document.getElementsByClassName("colRight")[0].innerHTML = botteghino[tipoCartella].getCartella();
    inizializzaNumeriCartelle(tipoCartella);
    if(tipoCartella == CARTELLA) document.getElementsByClassName("colLeft")[0].innerHTML =   inizializzaBotteghinoComune(CARTELLA,false);
    if(tipoCartella == TABELLONE)aggiornaQuadrante();
    
}
function inizializzaTipoCartella(tipoCartella,nomeCartella,idCartella,cartellaPronta){
    let lT = 370;//470 telefono - 405 computer
    let hT = 200;//200 telefono - 220 computer
    let numXrg = 5;
    let svgLock = SVG_LOCK_S;
    if(cartellaPronta != true)svgLock = SVG_UNLOCK_S;
    if(tipoCartella == CARTELLA)numXrg = 9;
    let hQ = hT/3 - 10;
    let lQ = lT/(numXrg + 1);
    let generaCartella = "";
    generaCartella+="<div class=' row m-auto  mt-4 border border-dark rounded-top fw-bold' style=' height:30px; width:" + lT +"px;'>";
    generaCartella+="<div class='col-4 text-start'>"+ nomeCartella +"</div>";
    generaCartella+="<div class='col-4 text-center' ><button class='cartellaPronta"+ idCartella+" btn btn-outline-dark' style='width:25px;height:25px;position:relative;' onclick='cambiaStatoCartella("+ tipoCartella+","+idCartella+")' ><p style='position:absolute;left:2px;top:1px;'>"+ svgLock +"</p></button></div>";
    if(cartellaPronta != true){
        generaCartella+="<div class='col-4 text-end'>";
        generaCartella+="<button class='btn btn-outline-danger rounded-circle' style='width:25px;height:25px;position:relative;'><p style='position:absolute;left:2px;top:1px;'onclick='eliminaCartellaScelta(" + tipoCartella+","+ idCartella + ","+ tipoCartella +")'>"+ SVG_MINUS+"</p></button>";
        if(tipoCartella == CARTELLA)generaCartella+="<button class=' btn btn-outline-dark rounded-circle ms-2' onclick='cambiaCartella("+ idCartella+")' style='width:25px;height:25px;position:relative;'><p style='position:absolute;left:2px;top:1px;'>"+ SVG_ARROW+"</p></button>";
        generaCartella+="</div>";
    }
    generaCartella+="</div>";
    generaCartella += "<div class='row border border-dark  m-auto mb-4 text-center' style='width: " + lT +"px; height: "+ hT+"px;box-shadow: 0 20px 16px -16px grey'>";
    for(let i = 0; i < 3;i++){
        for(let j = 0; j < numXrg;j++){
            idCella = j + (i * 10) + (idCartella * 100);
            generaCartella += "<div  class=' cella"+ idCella +" m-auto mt-1 bg-light border border-dark rounded' style='height: "+hQ +"px;width: "+lQ +"px'><p class ='"+ idCella +" text-center  mt-3 fs-6 fw-bold '></p></div>";
        }
        if( i < 2) generaCartella += "<div class='w-100 '></div>";
    }
    generaCartella += "</div>";
    return generaCartella;

}
function inizializzaTastoInizio(){

 
    

}

function estraiNumero(num){
   
    var numero 
    if(num == undefined){
    numero = Math.floor(Math.random() * 90);
    
    let unicoNumero = true;
    
    do{
        if(unicoNumero == false){
            unicoNumero = true;
            numero = Math.floor(Math.random() * 90);
          
        }
        for(let i = 0; i <  90; i ++)
            if(botteghino[statoSceltaTipoCartella].getNumeroTabellone(i) == true && numero == i){
                unicoNumero = false;
                break;
            }
        
    }while(unicoNumero != true);
    const url = `server.php?event=14&id=${encodeURIComponent(codice)}&num=${encodeURIComponent(numero)}`;
    myFetch(url, richiestaAggiornaNumeriEstratti);
    const btnEstrai = document.getElementById("btn-estrai");
    btnEstrai.setAttribute("disabled",true);
    setTimeout(function(){
        btnEstrai.removeAttribute("disabled")
    },1500);
    }
    else numero = num;
   
    botteghino[statoSceltaTipoCartella].setNumeroTabellone(numero);
   
    numero++;
    document.getElementsByClassName("cella"+ numero)[0].classList.remove("bg-light");
    document.getElementsByClassName("cella"+ numero)[0].classList.remove("border");
    document.getElementsByClassName("cella"+ numero)[0].classList.add("borderd-light");
    document.getElementsByClassName("cella"+ numero)[0].classList.add("bg-warning");
    inizializzaNumeriCartelle(statoSceltaTipoCartella);
    document.getElementsByClassName("numeroEstratto")[0].innerHTML = "<button class='text-dark bg-warning float-end border-5 border-light rounded-circle fs-3 fw-bold' style='width:50px;height:50px;pointer-events:none;cursor:default;display:flex;justify-content:center;align-items:center;'>"+numero+"</button> ";
    controllaVincita();

  
 


    
}


function risultatiPartita(){

    document.getElementsByClassName('avvisoVincita')[0].innerHTML = inizializzaAvvisoResocontoVittorie();
    myModal.show();
    document.getElementsByClassName("iniziaPartita")[0].innerHTML = stateGiocaPartita[0]("secondary")
    document.getElementsByClassName("numeroEstratto")[0].innerHTML = "";
    statoSceltaTipoCartella = NESSUNA;
   
    const url = `server.php?event=18&id=${codice}`;
    myFetch(url,richiestaOttieniResocontoVittorie );


    inizializzaPartita();

    setTimeout(function(){
        if(statoSceltaLogin == 1){
        

         
            //invio richiesta ripristino premi
            const url3 = `server.php?event=16&id=${encodeURIComponent(codice)}`;
            myFetch(url3, richiestaInitPremi);

            //invio richiesta ripristino numeri
            const url4 = `server.php?event=19&id=${encodeURIComponent(codice)}`;
            myFetch(url4, richiestaRipristinaNumeri);

            
        }
       
        },600)
        const btnGiocaElement = document.getElementById("btnGioca");

        if (btnGiocaElement) {
            btnGiocaElement.removeAttribute("disabled");
        } 
        clearInterval(intervalOttieniStatoPartitaDopo)
        if(statoSceltaLogin == 0)intervalOttieniStatoPartitaPrima = setInterval(() => {
          
            ottieniStatoPartitaPrima();
       
        }, 500); 
        premioAttuale = 0;

        

}
var premioAttuale = 0;
function controllaVincita(){
    let vincitaTabellone = false;
    let vincitaCartelle = [];
    let numeroCartella = 0;
    let numXrg = 5;
    if(statoSceltaTipoCartella == CARTELLA)numXrg = 9;
   
    for(let i = 0; i < botteghino[statoSceltaTipoCartella].getNumeroCartelle(); i ++)vincitaCartelle[i] = false;

    


    let f = 0;//numero del tabellone (1 a 90)
    let p = 0;//se quadrante pari allora 0 senno allora 5 (0 o 5)
    let g = -4;//incrementa ad ogni riga e 
    //se quadrante dispari -3
    //se quadrante pari incrementa di 3
    let u = - 4;//memorizza g
    let q = 0;//incrementa ad ogni cella e resetta ad ogni riga (1 a 5)

    //f = p + g * 10 + q
    
    let c = 0;//conta numeri stessa riga e solo se tutti premi vinti controlla quadrante e azzera ad ogni quadrante
    
    for( let k = 0; k < 6; k ++){
       
            if( k % 2 == 0){
                p = 0;
                u = u  + 3;
                g = u ;
            }
            else  {
                p = 5;
                g = u;
            }

            c = 0;
            for( let i = 0; i < 3; i ++){
                if(premioAttuale != 4)c = 0;
                g++;
                q = 0;
                for( let j = 0; j < 5; j ++){
                    q++;
                    f = g * 10 + p + q;
                    if(botteghino[statoSceltaTipoCartella].getNumeroTabellone(f - 1) == true)c++;
                    if(c == botteghino[statoSceltaTipoCartella].getNumeriPerPremio(premioAttuale) &&  rilevaQuadranteAcquistato(k) == false)vincitaTabellone = true;
                    
                    
            
                }
            
            }
        

    }

    
    for(let i = 0; i < botteghino[statoSceltaTipoCartella].getNumeroCartelle();i++){
        c = 0;
        for(let j = 0; j < 3;j++){
            if(premioAttuale != 4)c = 0;
            for(let k = 0; k < numXrg;k++){
            
                numeroCartella = botteghino[statoSceltaTipoCartella].getNumeroCellaCartella(i,j,k);
                if(numeroCartella != 0 && botteghino[statoSceltaTipoCartella].getNumeroTabellone(numeroCartella - 1) == true)c++;
                if(c == botteghino[statoSceltaTipoCartella].getNumeriPerPremio(premioAttuale))vincitaCartelle = true;
                

            }
        }
    }




   
    if(vincitaCartelle == true){
        const url2 = `server.php?event=17&id=${encodeURIComponent(codice)}&username=${encodeURIComponent(username)}&premio=${encodeURIComponent(premioAttuale)}`;
        myFetch(url2,richiestaAggiornaPremio);  
    }
    setTimeout(function(){
        if(vincitaTabellone == true && statoSceltaLogin == 1){
            const url = `server.php?event=17&id=${encodeURIComponent(codice)}&username=${encodeURIComponent("Banco")}&premio=${encodeURIComponent(premioAttuale)}`;
            myFetch(url,richiestaAggiornaPremio);  
        }
    },500)
    
   
        
    setTimeout(function(){
        const url = `server.php?event=18&id=${codice}`;
        myFetch(url,richiestaOttieniVincitori );
    },600);
      

   
}


function iniziaPartita(){

    //estrai numero
    document.getElementsByClassName("header")[0].classList.remove("opacity-100");
    document.getElementById("my-row").classList.remove("opacity-100");
    document.getElementsByClassName("header")[0].classList.add("opacity-75");
    document.getElementById("my-row").classList.add("opacity-75");
  
    let generaPartita = ""
    
    for( let i = 0; i < botteghino[statoSceltaTipoCartella].getNumeroCartelle(); i ++)
    botteghino[statoSceltaTipoCartella].setTipoCartella(i,statoSceltaTipoCartella,botteghino[statoSceltaTipoCartella].getNomeCartella(i),botteghino[statoSceltaTipoCartella].getIdCartella(i),true);
    document.getElementsByClassName("colRight")[0].innerHTML = botteghino[statoSceltaTipoCartella].getCartella();
    inizializzaNumeriCartelle(statoSceltaTipoCartella);
    document.getElementsByClassName("btnScelta")[CARTELLA].disabled = true;
    document.getElementsByClassName("btnScelta")[TABELLONE].disabled = true;
    for( let i = 0; i < botteghino[statoSceltaTipoCartella].getNumeroCartelle(); i ++)document.getElementsByClassName("cartellaPronta"+botteghino[statoSceltaTipoCartella].getIdCartella(i))[0].disabled = true;
    
    statoPartita = PRONTO;
    generaPartita = inizializzaBotteghinoComune(statoSceltaTipoCartella,true);
    document.getElementsByClassName("colLefter")[0].innerHTML = generaPartita;
    sectionerResponsive(s); 
    if(statoSceltaLogin == 1){
        document.getElementsByClassName("iniziaPartita")[0].innerHTML = stateGiocaPartita[2]();

    }

}
function cambiaCartella(idCartella){
    let k = botteghino[CARTELLA].getInxById(idCartella);

    creaCartella(CARTELLA);
    botteghino[CARTELLA].scambiaCartelle(k,botteghino[CARTELLA].getNumeroCartelle() - 1);
    botteghino[CARTELLA].eliminaUltimaCartella();
    botteghino[CARTELLA].setTipoCartella(k,CARTELLA,botteghino[CARTELLA].getNomeCartella(k),botteghino[CARTELLA].getIdCartella(k),false);
    document.getElementsByClassName("colRight")[0].innerHTML =   botteghino[CARTELLA].getCartella();
    inizializzaNumeriCartelle(CARTELLA); 
}


function rilevaQuadranteAcquistato(quadrante){
    if(statoSceltaTipoCartella == TABELLONE){
        for(let i = 0; i < botteghino[TABELLONE].getNumeroCartelle(); i ++){
            if(quadrante ==  botteghino[TABELLONE].getIdCartella(i) - 1)return true;
        }
    }
    return false;
}
function inizializzaTabellonePartita(){
    document.getElementsByClassName("colRight")[0].classList.add('colRighter');
    document.getElementsByClassName("colRight")[0].classList.remove('colRight');
    document.getElementsByClassName("colLeft")[0].classList.add('colLefter');
    document.getElementsByClassName("colLefter")[0].classList.remove('colLeft');
  
    
    let generaTabellone = "";
    let h = 290;
    let l = 355; 
    let hQ = (h - 10) / 3;
    let lQ = (l - 10) / 2;
    let dC = 25;
    let f = 0;//numero del tabellone (1 a 90)
    let p = 0;//se quadrante pari allora 0 senno allora 5 (0 o 5)
    let g = -4;//incrementa ad ogni riga e 
    //se quadrante dispari -3
    //se quadrante pari incrementa di 3
    let u = - 4;//memorizza g
    let q = 0;//incrementa ad ogni cella e resetta ad ogni riga (1 a 5)

    //f = p + g * 10 + q
    
    
    generaTabellone+="<div class='text-center mb-2 mt-2' >"+ SVG_TABELLA_L+"</div>"
    generaTabellone+="<h2  class='text-center'>Numeri estratti</h2>";
    if(statoSceltaTipoCartella == TABELLONE)generaTabellone+="<p class='label  m-auto mb-3 text-center'style='max-width:300px;'><em>I quadranti del tabello che hai acquistato sono stati offuscati</em></p>"
    generaTabellone+="<div class='mt-4 text-center m-auto border border-secondary rounded-top fw-bold' style=' height:30px; width:" + l +"px;'>Tabellone "+SVG_TABELLA_S +"</div>";
    generaTabellone+="<div id='my-tabe' class='row row-cols-2  m-auto mb-3 border border-secondary '  style='height:"+ h + "px; width:" + l +"px;'>";
    for( let k = 0; k < 6; k ++){
        if(rilevaQuadranteAcquistato(k) == true)quadranteComprato = "opacity-50";     
        else quadranteComprato = "";
        
        generaTabellone+="<div class='row row-cols-5 " + quadranteComprato+" m-auto border border-secondary'style='height:"+ hQ + "px; width:" + lQ +"px;'>";
     
        if( k % 2 == 0){
            p = 0;
            u = u  + 3;
            g = u ;
        }
        else  {
            p = 5;
            g = u;
        }
        for( let i = 0; i < 3; i ++){
            g++;
            q = 0;
            for( let j = 0; j < 5; j ++){
                q++;
                f = g * 10 + p + q;  
                generaTabellone+= "<div class=' cella"+f+" border bg-light rounded-circle m-auto'style='height:"+ dC + "px; width:" + dC +"; position:relative;'><p style='position:absolute;right:3px;' class ='numero"+f+" text-center fs-11 fw-bold'>" + f+"</p></div>"
        
            }
        
        }
        
        generaTabellone+="</div>";
    }
    generaTabellone+="</div>";
    
    generaTabellone +="<div class='montePremi'>";

    generaTabellone+= inizializzaMontePremi();

    generaTabellone+="</div>";
    
    return generaTabellone;
}

function inizializzaMontePremi(){
    let generaMontePremi = "";
    let svgTrofeo = "";
    generaMontePremi+="<div class='text-center mb-2 mt-5'>"+ SVG_TROFEO_FILL_L+"</div>"
    generaMontePremi+="<h2  class='text-center mb-3'>Monte premi</h2>";
    generaMontePremi+="<p class='label  m-auto mb-3 text-center'style='max-width:300px;'><em>Si vincono i premi in base a quanti numeri sono stati estratti sulla stessa riga</em></p>"
    generaMontePremi+="<div class='row m-auto mb-5' style='width:300px;'>";
    for( let k = 0; k < 5; k ++){
        svgTrofeo = SVG_TROFEO_S;
        if(botteghino[statoSceltaTipoCartella].getVincita(k)  != "attesa")   svgTrofeo = SVG_TROFEO_FILL_S;
        generaMontePremi+="<div id='trofeo"+k+"' class='col-2 mb-1 p-1 border-secondary  border-bottom text-end trofeo"+k+"'>"+ svgTrofeo+"</div>";
        generaMontePremi+="<div class='col-6 mb-1 p-1 border-secondary  border-bottom text-start premio"+k+"'>"+botteghino[statoSceltaTipoCartella].getNomePremio(k)+"</div>";
        generaMontePremi+="<div id='stato"+k+"' class='col-4 mb-1 p-1 border-secondary border-bottom text-center stato"+k+"'>" + botteghino[statoSceltaTipoCartella].getVincita(k) +"</div>";
    }     
    generaMontePremi +="</div>";
    return generaMontePremi;
}
function inizializzaBotteghinoComune(tipoCartella,inizioPartita){
    let mW = "";
    if (statoPartita == PRONTO)mW = "max-width:600px;"
    generaBotteghinoComune = "";
    generaBotteghinoComune+="<div class='container sticky-top mb-5' style='"+mW+"'>"
    generaBotteghinoComune+="<div style='height:75px;width:100%;'id='main-corpo'></div>"
    if(inizioPartita != true){
        generaBotteghinoComune+="<div class='text-center mb-2 mt-1'>"+ SVG_STORE_L+"</div>"
        generaBotteghinoComune+="<h2  >" + botteghino[tipoCartella].getTipo() + "</h2>";
        generaBotteghinoComune+="<p  class='lead'>" + botteghino[tipoCartella].getRegole()+ "</p>";
        if(tipoCartella == CARTELLA)generaBotteghinoComune+= inizializzaBottteghinoCartelle();
        else generaBotteghinoComune += inizializzaBottteghinoTabellone();
        generaBotteghinoComune+="<div class='avvisoMassimoCartelle'></div>"
    }else{
        generaBotteghinoComune += inizializzaTabellonePartita();
    }
    generaBotteghinoComune+="</div>";  
    return generaBotteghinoComune;
}
function inizializzaBotteghino(tipoCartella){
    
    let colLeft = "col-sm-5 border-end";
    let colRight = "col-sm-7";
    if (z.matches){
         colLeft = "col-sm-12";
         colRight = "col-sm-12";
    }
    generaBotteghino = "";
    generaBotteghino+="<div class='container'>";
    generaBotteghino+="<div class='row'>";
    generaBotteghino+="<div class='"+ colLeft+" colLeft 'style='z-index:0;'>";
    
    generaBotteghino+= inizializzaBotteghinoComune(tipoCartella,false);
    generaBotteghino+="</div>";
    
    generaBotteghino+="<div class='"+ colRight +" colRight m-auto'>";
    generaBotteghino+= avvisoNessunaCartella;
    generaBotteghino+="</div>";
    generaBotteghino+="</div>";
    generaBotteghino+="</div>";
    return generaBotteghino;
}
function inizializzaBottteghinoCartelle(){
    let generaBotteghinoCartelle = "";
    generaBotteghinoCartelle+="<div class='btn-group mb-3'>";
    generaBotteghinoCartelle+="<button type='button' class='btn btn-secondary' disabled>";
    generaBotteghinoCartelle+=SVG_STORE_S;
    generaBotteghinoCartelle+="</button>";
    if(botteghino[CARTELLA].getNumeroCartelle() < botteghino[CARTELLA].getMaxCartelle() ){
        generaBotteghinoCartelle+="<button type='button' class='btn btn-outline-success ms-1 ' onclick='aggiungiCartella("+CARTELLA+")'>";
        generaBotteghinoCartelle+=SVG_PLUS;
        generaBotteghinoCartelle+="</button>";
    }
    if(botteghino[CARTELLA].getNumeroCartelle() != 0 && botteghino[CARTELLA].getCartellePronte() != 0){
        generaBotteghinoCartelle+="<button type='button' class=' ms-1 btn btn-outline-danger'onclick='eliminaUltimaCartella("+CARTELLA+")'>";
        generaBotteghinoCartelle+=SVG_MINUS;
        generaBotteghinoCartelle+="</button>";
    }
    generaBotteghinoCartelle+="</div>";
    return generaBotteghinoCartelle;
}
function eliminaUltimaCartella(tipoCartella){
    aggiornaCartelle = avvisoNessunaCartella;
    botteghino[tipoCartella].eliminaUltimaCartella(tipoCartella);
    if(botteghino[tipoCartella].getNumeroCartelle() != 0)aggiornaCartelle =  botteghino[tipoCartella].getCartella();
    else{
              aggiornaStatoGiocatore(0)
        document.getElementsByClassName("my-spinner-grow")[0].classList.remove("text-success")
        document.getElementsByClassName("my-spinner-grow")[0].classList.add("text-secondary")
        document.getElementsByClassName("my-spinner-grow")[1].classList.remove("text-success")
        document.getElementsByClassName("my-spinner-grow")[1].classList.add("text-secondary")
        document.getElementsByClassName("my-spinner-grow")[2].classList.remove("text-success")
        document.getElementsByClassName("my-spinner-grow")[2].classList.add("text-secondary")
     


}
    if(tipoCartella == CARTELLA) document.getElementsByClassName("colLeft")[0].innerHTML =   inizializzaBotteghinoComune(CARTELLA,false);
    document.getElementsByClassName("colRight")[0].innerHTML =  aggiornaCartelle;
    inizializzaNumeriCartelle(tipoCartella);
    inizializzaTastoInizio();
}


function creaCartella(tipoCartella,quadrante){
    let idCartella = (1 + Math.floor(Math.random() * 90));
    let nomeCartella = "Cartella." + idCartella;
    let unicoNome = true;
    if(tipoCartella == TABELLONE){
        nomeCartella = "Quadrante." + (quadrante + 1);
        idCartella = quadrante + 1;
    }
    else {
        do{
            if(unicoNome == false){
                unicoNome = true;
                idCartella = (1 + Math.floor(Math.random() * 90));
                nomeCartella = "Cartella." + idCartella;
            }
            for(let i = 0; i <  botteghino[tipoCartella].getNumeroCartelle(); i ++)
                if(nomeCartella == botteghino[tipoCartella].getNomeCartella(i)){
                    unicoNome = false;
                    break;
                }
            
        }while(unicoNome != true);
    }

    botteghino[tipoCartella].setCartella(nomeCartella,tipoCartella,idCartella,quadrante);
}
function aggiungiCartella(tipoCartella,quadrante){
 
    if(botteghino[tipoCartella].getNumeroCartelle() == 0){
        aggiornaStatoGiocatore(1)
    }

    creaCartella(tipoCartella,quadrante);
   


    if(tipoCartella == CARTELLA  ) document.getElementsByClassName("colLeft")[0].innerHTML =   inizializzaBotteghinoComune(CARTELLA,false);
    controlloLimiteCartelle(tipoCartella);
    document.getElementsByClassName("colRight")[0].innerHTML =   botteghino[tipoCartella].getCartella();
    inizializzaNumeriCartelle(tipoCartella);
 
    inizializzaTastoInizio();
}

function inizializzaNumeriCartelle(tipoCartella){
    let numXrg = 5;
    let numero =  "";
    if(tipoCartella == CARTELLA)numXrg = 9;
    for( let k = 0; k < botteghino[tipoCartella].getNumeroCartelle(); k ++){
        for( let i = 0; i < 3; i ++){
            for( let j = 0; j < numXrg; j ++){
                idCella = j + (i * 10) + (botteghino[tipoCartella].getIdCartella(k)* 100);
                if(botteghino[tipoCartella].getNumeroCellaCartella(k,i,j) != 0){
                    numero = botteghino[tipoCartella].getNumeroCellaCartella(k,i,j);
                    if(botteghino[tipoCartella].getNumeroTabellone(numero - 1) == true){
                        document.getElementsByClassName("cella"+idCella)[0].classList.remove('bg-white');
                        document.getElementsByClassName("cella"+idCella)[0].classList.remove('bg-light');
                        document.getElementsByClassName("cella"+idCella)[0].classList.add('bg-warning');
                    }
                    else{
                        document.getElementsByClassName("cella"+idCella)[0].classList.remove('bg-warning');
                        document.getElementsByClassName("cella"+idCella)[0].classList.remove('bg-white');
                        document.getElementsByClassName("cella"+idCella)[0].classList.add('bg-light');
                    }
                    document.getElementsByClassName("cella"+idCella)[0].classList.remove('border-secondary');
                    document.getElementsByClassName("cella"+idCella)[0].classList.add('border-dark');
                   
                }
                else {
                    document.getElementsByClassName("cella"+idCella)[0].classList.remove('bg-light');
                    document.getElementsByClassName("cella"+idCella)[0].classList.add('bg-white');
                    document.getElementsByClassName("cella"+idCella)[0].classList.remove('border-dark');
                    document.getElementsByClassName("cella"+idCella)[0].classList.add('border-secondary');
                    numero = ""
                }
             
                document.getElementsByClassName(idCella)[0].innerHTML = numero;
           
            }
        }
    }
}
function controlloLimiteCartelle(tipoCartella){

    let avvisoLimiteCartelle = "";
    if(botteghino[tipoCartella].getNumeroCartelle() != 0){
        document.getElementsByClassName("my-spinner-grow")[0].classList.add("text-success")
        document.getElementsByClassName("my-spinner-grow")[0].classList.remove("text-secondary")
        document.getElementsByClassName("my-spinner-grow")[1].classList.add("text-success")
        document.getElementsByClassName("my-spinner-grow")[1].classList.remove("text-secondary")
        document.getElementsByClassName("my-spinner-grow")[2].classList.add("text-success")
        document.getElementsByClassName("my-spinner-grow")[2].classList.remove("text-secondary")
 
    }


    if(botteghino[tipoCartella].getNumeroCartelle() == botteghino[tipoCartella].getMaxCartelle() )avvisoLimiteCartelle = avvisoMassimoCartelle;
    document.getElementsByClassName("avvisoMassimoCartelle")[0].innerHTML =  avvisoLimiteCartelle;
}
function inizializzaBottteghinoTabellone(){
    let h = 220;
    let l = 270; 
    let generaBotteghinoTabellone = "";
    generaBotteghinoTabellone+="<div class='mt-4 text-center m-auto border border-secondary rounded-top fw-bold' style=' height:30px; width:" + l +"px;'>Tabellone "+SVG_TABELLA_S +"</div>";
    generaBotteghinoTabellone+="<div class='row row-cols-2  m-auto mb-3 border border-secondary '  style='height:"+ h + "px; width:" + l +"px;'>";
    for( let j = 0; j < 6; j ++)generaBotteghinoTabellone+=" <button class='quadrante" + j+"  m-auto btn btn-light border-secondary '  onclick='sceltaQuadrante("+ j+")' style='height:"+ ((h - 10) / 3) + "px; width:" + ((l - 10) / 2) +"px;'></button>";
    generaBotteghinoTabellone+="</div>";
    return generaBotteghinoTabellone;
}

function inizializzaHeader(){
    let generaHeader = "";
    for(let i = 0; i < botteghino.length;i++){
        generaHeader += "<div class='col'>";
        generaHeader += "<div class='card mb-3' style='max-width: 540px;'>";
        generaHeader += "<div class='row g-0'>";
        generaHeader += "<div class='col-md-4 ' style='background: url("+ botteghino[i].getPath()+") no-repeat center left;background-size: cover;border-radius:5px 0px 0px 5px'>";
        generaHeader += "</div>";
        generaHeader += "<div class='col-md-8'>";
        generaHeader += "<div class='card-body'>";
        generaHeader += "<h5 class='card-title'>"+ botteghino[i].getNome() +"</h5>";
        generaHeader += "<p class='card-text'>"+ botteghino[i].getDescrizione()+"</p>";
        generaHeader += "<button type='button' class='btn btnScelta btn-light' onclick ='sceltaTipoCartella("+ i +")'>";
        generaHeader += "Vai al botteghino ";//se login non è stato fatto attiva href
        generaHeader += SVG_STORE_S;
        generaHeader += "</button>";
        generaHeader += "</div>";
        generaHeader += "</div>";
        generaHeader += "</div>";
        generaHeader += "</div>";
        generaHeader += "</div>";
    }
  
    document.getElementById("my-row").innerHTML = generaHeader;
}
function inizializzaPartita(){
    
    
  
    inizializzaHeader();
    switch(statoSceltaTipoCartella){
        case NESSUNA:
            document.getElementsByClassName("header")[0].classList.remove("opacity-75");
            document.getElementById("my-row").classList.remove("opacity-75");
            document.getElementsByClassName("corpo")[0].classList.remove("opacity-75");
            document.getElementsByClassName("header")[0].classList.add("opacity-100");
            document.getElementById("my-row").classList.add("opacity-100");
            document.getElementsByClassName("corpo")[0].classList.add("opacity-100");
            botteghino[CARTELLA].resetCartella();
            botteghino[TABELLONE].resetCartella();
            document.getElementsByClassName("corpo")[0].innerHTML = "<h2 >Nessuna cartella acquistata</h2><p class='lead'>Prima di giocare compra subito delle cartelle e dai inizio al divertimento</p>"
            break;
        default:
            let sceltaOpposta = CARTELLA;
            if(statoSceltaTipoCartella == CARTELLA){
                sceltaOpposta = TABELLONE;
              
            }
            botteghino[sceltaOpposta].resetCartella();
            aggiornaBottoneTipoCartella(statoSceltaTipoCartella);
            document.getElementsByClassName("container")[4].innerHTML = inizializzaBotteghino(statoSceltaTipoCartella);            
            break;
    }
}


function sceltaQuadrante(quadrante,eliminazioneSecondaria){
    let seleziona = true;
    
    for( let i = 0; i < botteghino[TABELLONE].getNumeroCartelle(); i ++)if(botteghino[TABELLONE].getIdCartella(i) == quadrante + 1){
        if(botteghino[TABELLONE].getCartellaPronta(i) == true)seleziona = false;
        else{
            document.getElementsByClassName('quadrante' + quadrante)[0].classList.add('active');
            document.getElementsByClassName('quadrante' + quadrante)[0].classList.remove('active');
            document.getElementsByClassName('quadrante' + quadrante)[0].innerHTML = "";
            seleziona = false;
            if(eliminazioneSecondaria != TABELLONE)eliminaCartellaScelta(TABELLONE,quadrante + 1);
        }
        break;
    }

    if(seleziona == true && botteghino[TABELLONE].getNumeroCartelle() < botteghino[TABELLONE].getMaxCartelle() ){
        document.getElementsByClassName('quadrante' + quadrante)[0].classList.remove('active');
        document.getElementsByClassName('quadrante' + quadrante)[0].classList.add('active');
        aggiungiCartella(TABELLONE,quadrante);

    }
    aggiornaQuadrante();
    controlloLimiteCartelle(TABELLONE);

}
function aggiornaQuadrante(){
    
    for(let i = 0; i < botteghino[TABELLONE].getNumeroCartelle(); i ++){
        let svgLock = SVG_UNLOCK_L;
        if(botteghino[TABELLONE].getCartellaPronta(i) == true)svgLock = SVG_LOCK_L;
        document.getElementsByClassName('quadrante' +(botteghino[TABELLONE].getIdCartella(i) - 1))[0].innerHTML = svgLock;
    }
}
function aggiornaBottoneTipoCartella(bottone){
    if(statoLogin ==false)inizializzaTastoInizio();
    document.getElementsByClassName("btnScelta")[bottone].classList.remove('btn-light');
    document.getElementsByClassName("btnScelta")[bottone].classList.add('btn-secondary');
    if(bottone == TABELLONE)bottone = CARTELLA;
    else bottone = TABELLONE;
    document.getElementsByClassName("btnScelta")[bottone].classList.remove('btn-secondary');
    document.getElementsByClassName("btnScelta")[bottone].classList.add('btn-light');
}




function inizializzaAvvisoVincita(premioAttuale){
    let generaAvviso = "";
    generaAvviso += "<div class='modal-content'>";
    generaAvviso += "<div class='modal-header bg-warning'>";
    generaAvviso += "<h5 class='modal-title' id='exampleModalLabel'>"+ botteghino[statoSceltaTipoCartella].getNomePremio(premioAttuale) +" riscosso</h5>";
    generaAvviso += "<button id='btnAvvisoVincita'type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>";
    generaAvviso += "</div>";
    generaAvviso += "<div class='modal-body' >";




    generaAvviso += `
    <div id='listaPremio'>
    <div class="text-center mt-5 mb-5" >
        <div class="spinner-border text-secondary" style="width:70px;height:70px;border-width:7px;"role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    </div>
`
    /*
        generaAvviso +=  "Hai <strong>" +botteghino[statoSceltaTipoCartella].getVincita(premioAttuale) + "</strong> questo premio<br>";
        generaAvviso += "<small><em>Continua a giocare per vincere altri premi!</em></small>"
    */

    generaAvviso += " <hr>"
    generaAvviso+="<div class='row m-auto ' style='width:200px;'>";
    generaAvviso+="<div class='col-2 mb-1 p-1  text-end trofeo"+premioAttuale+"'>"+ SVG_TROFEO_FILL_S+"</div>";
    generaAvviso+="<div class='col-6 mb-1 p-1  text-start premio"+premioAttuale+"'>"+botteghino[statoSceltaTipoCartella].getNomePremio(premioAttuale)+"</div>";
    generaAvviso+="<div id='statoPremio' class='col-4 mb-1 p-1 text-center stato"+premioAttuale+"'>" + botteghino[statoSceltaTipoCartella].getVincita(premioAttuale) +"</div>";
    generaAvviso +="</div>";
    generaAvviso += "</div>";
    generaAvviso += "</div>";
    return generaAvviso;
}


function inizializzaAvvisoResocontoVittorie(){
    let generaAvviso = "";
    generaAvviso += "<div class='modal-content'>";
    generaAvviso += "<div class='modal-header bg-warning'>";
    generaAvviso += "<h5 class='modal-title' >Resoconto vittorie</h5>";
    generaAvviso += "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>";
    generaAvviso += "</div>";
    generaAvviso += "<div class='modal-body mb-2'>";

    generaAvviso+="<div class='row m-auto mb-3 mt-3 overflow-auto' id='modal-content-resoconto'style='width:300px;'>";

    generaAvviso +="</div>";
    generaAvviso += "<hr><h5 id='numeroPremiVinti'></h5>Continua a giocare per vincere fantastici premi!"

    generaAvviso += "</div>";
    generaAvviso += "</div>";
    return generaAvviso;
}




function checkWindowSize() {
    if (window.innerWidth < 768) {
        const elementoDaModificare = document.querySelector('.bg-custom');

        // Modifica le proprietà CSS
        elementoDaModificare.style.backgroundImage = 'linear-gradient(0deg, #212529 58.78%, transparent 30%), linear-gradient(0deg, transparent 58.78%, #f8f9fa 100%)';
        elementoDaModificare.style.backgroundSize = 'cover';
        elementoDaModificare.style.backgroundRepeat = 'no-repeat';
    } else {
        const elementoDaModificare = document.querySelector('.bg-custom');

        // Modifica le proprietà CSS
        elementoDaModificare.style.backgroundImage = 'linear-gradient(0deg, #212529 40%, transparent 30%), linear-gradient(0deg, transparent 40%, #f8f9fa 100%)';
        elementoDaModificare.style.backgroundSize = 'cover';
        elementoDaModificare.style.backgroundRepeat = 'no-repeat';
    }
}


// Esegui la funzione iniziale quando la pagina si carica
checkWindowSize();

// Aggiungi un listener per l'evento di ridimensionamento della finestra
window.addEventListener('resize', checkWindowSize);



window.addEventListener('beforeunload', function(event) {
    if(statoSceltaLogin == 1){
        const url = `server.php?event=1&id=${encodeURIComponent(codice)}`;
        myFetch(url, richiestaEliminaPartita);
    }else{

        const url = `server.php?event=7&id=${encodeURIComponent(codice)}&username=${encodeURIComponent(username)}`;
        myFetch(url, richiestaUscitaPartita);

    }

 });
