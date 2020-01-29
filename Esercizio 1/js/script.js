// alert('Ciao');
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var studente = {
  'nome' : 'Mario',
  'cognome' : 'Neri',
  'eta' : 25
};
for (var chiave in studente) {
   console.log(studente[chiave]);
}

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var studenti = [
  {
    'nome' : 'Marco',
    'cognome' : 'Rossi',
    'eta' : 21
  },
  {
    'nome' : 'Gabriele',
    'cognome' : 'Verdi',
    'eta' : 23
  },
  {
    'nome' : 'Mattia',
    'cognome' : 'Neri',
    'eta' : 22
  },
];
console.log(studenti);
for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i]);
  var primo = studenti[0];
  console.log(primo.nome, primo.cognome);
  var secondo = studenti[1];
  console.log(secondo.nome, secondo.cognome);
  var terzo = studenti[2];
  console.log(terzo.nome, terzo.cognome);
}


// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
