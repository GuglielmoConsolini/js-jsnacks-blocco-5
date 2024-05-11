
// SNACK 1

const zucchine = [
    { varietà: "Nera di Milano", peso: 0.5, lunghezza: 15 },
    { varietà: "Romanesca", peso: 0.3, lunghezza: 12 },
    { varietà: "Siciliana", peso: 0.6, lunghezza: 18 },
    { varietà: "Rampicante", peso: 0.4, lunghezza: 14 },
    { varietà: "Tonda di Nizza", peso: 0.7, lunghezza: 20 },
    { varietà: "Lunghe", peso: 0.45, lunghezza: 16 },
    { varietà: "Verde chiaro", peso: 0.35, lunghezza: 13 },
    { varietà: "Rigata", peso: 0.55, lunghezza: 17 },
    { varietà: "Trombetta", peso: 0.65, lunghezza: 19 },
    { varietà: "Gialla", peso: 0.5, lunghezza: 15 }
];

let pesoTotale = 0;

for (let zucchina of zucchine) {
    pesoTotale += zucchina.peso;
}

console.log("Il peso totale di tutte le zucchine è:", pesoTotale, "kg");

// SNACK 2

