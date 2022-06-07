// Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// GENERATE BUTTON'S FUNCTION
let generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click',
    function () {
        // RACCOLTA DATI di: NOME E COGNOME, KM DA PERCORRERE, FASCIA D'ETA'
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

        // OUTPUT - STAMPA SU HTML: NOME DEL PASSEGGERO, OFFERTA, CARROZZA, CODICE CP, COSTO BIGLIETTO
        document.getElementById('ticket-name').innerHTML = userName;
        document.getElementById('ticket-type').innerHTML = ticketType;
            // Numero carrozza random tra 1 e 20
            const carriage = Math.floor(Math.random() * 20) + 1;
        document.getElementById('carriage').innerHTML = carriage;
            // Numero Codice CP random tra 1 e 99999
            const cpCode = Math.floor(Math.random() * 99999) + 1;
        document.getElementById('cp-code').innerHTML = cpCode;        
        document.getElementById('ticket-price').innerHTML = `${price.toFixed(2)}€`;

        // Attribuzione classe 'active' agli elementi html per visualizzare i dati del biglietto
        document.getElementById('your-ticket').classList.add('active');
        document.querySelector('h2').classList.add('active');
    }
);

// CANCEL BUTTON'S FUNCTION
let cancBtn = document.getElementById('cancel-btn');

cancBtn.addEventListener('click',
    function(){
        // RESET INPUTS VALUES
        document.getElementById('user-name').value = '';
        document.getElementById('user-km').value = '';
        document.getElementById('user-age').value = 'maggiorenne';
        document.getElementById('ticket-name').value = '';
        document.getElementById('ticket-type').value = '';
        document.getElementById('carriage').value = '';
        document.getElementById('cp-code').value = '';
        document.getElementById('ticket-price').value = '';

        // OUTPUT TICKET REMOVAL
        document.getElementById('your-ticket').classList.remove('active');
        document.querySelector('h2').classList.remove('active');
    }
);


