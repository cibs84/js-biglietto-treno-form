// Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// RACCOLTA DATI - Chiedo all'utente di inserire NOME E COGNOME, KM DA PERCORRERE, FASCIA D'ETA'
let genBtn = document.getElementById('generate-btn');

genBtn.addEventListener('click',
    function () {
        const userName = document.getElementById('user-name').value;
        const userKm = parseInt( document.getElementById('user-km').value );
        const userAge = document.getElementById('user-age').value;
        
        // LOGICA - CREAZIONE PREZZI STANDARD, MINORENNI, OVER_65
        let price = userKm * 0.21;
        let ticketType = 'Biglietto Standard';

        if (userAge === 'minorenne') {
            price *= 0.8;
            ticketType = 'Biglietto Minorenne';
        } else if (userAge === 'over') {
            price *= 0.6;
            ticketType = 'Biglietto Over 65';
        }

        document.getElementById('ticket-name').innerHTML = userName;
        document.getElementById('ticket-type').innerHTML = ticketType;

        const carriage = Math.floor(Math.random() * 20) + 1;
        document.getElementById('carriage').innerHTML = carriage;

        const cpCode = Math.floor(Math.random() * 99000) + 1;
        document.getElementById('cp-code').innerHTML = cpCode;
        
        document.getElementById('ticket-price').innerHTML = `${price.toFixed(2)}€`;
        document.getElementById('your-ticket').classList.toggle('active');
        document.querySelector('h2').classList.toggle('active');
    }
);



// STAMPA SU HTML IL NOME DEL PASSEGGERO, OFFERTA, CARROZZA, CODICE CP, COSTO BIGLIETTO