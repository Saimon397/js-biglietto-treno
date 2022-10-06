let km = prompt("Inserire km da percorrrere..");
let eta = prompt("Inserisci la tua età..");

console.log(km, eta);
console.log(isNaN(km), isNaN(eta));
if (isNaN(km) || isNaN(eta)) {
    alert('Puoi inserire solo numeri..');
    window.location.reload();
}

let CostoTicket = 0.21 * km;
console.log(CostoTicket);

let ScontoMin = (CostoTicket * 20) / 100;
console.log(ScontoMin);

let PrezzoMin = CostoTicket - ScontoMin;
console.log(PrezzoMin);

let ScontOld = (CostoTicket * 40) / 100;
console.log(ScontOld);

let PrezzOld = CostoTicket - ScontOld;
console.log(PrezzOld);

if (eta < 18) {
    CostoTicket = PrezzoMin;
    console.log("Sconto del 20%");
} else if (eta > 65) {
    CostoTicket = PrezzOld;
    console.log("Sconto del 40%");
} else {
    CostoTicket;
    console.log("Prezzo non scontato :(");
}

let Prezzo = CostoTicket.toFixed(2);

let TicketFin = document.getElementById("Ticket");
TicketFin.innerText = Prezzo + " " + "\u20AC";