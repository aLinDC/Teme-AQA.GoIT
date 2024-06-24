// 1. Intelegerea conceptului

// // Cuvantul cheie "this" in JavaScript are rolul de a apela contextul obiectului din functia in care se afla.
// Acesta nu functioneaza corect in cadrul unuei arrow function deoarece nu va mai face referire la contextul obiectului vizat
// ci la contextul global al programului.


// Ex 1:
const player = {
    name: "Bob",
    number: 37 ,
showPlayer: function () {
    console.log(this.name);
    },
showNumber: function () {
    console.log(this.number);
},
};
console.log("Exemplu_1:------")
player.showPlayer();
player.showNumber()
// Prin folosirea cuvantului "this" in exemplul de mai sus specificam functiilor "showPlayer" si "showNumber" ca variabilele "name" si "number"
// se afla in interiorul obiectului "player".


// Ex 2:
class Player{
    constructor(nume, nr) {
        this.nume = nume;
        this.nr = nr;
}
}
const player1 = new Player("Marius", 34);
console.log("Exemplu_2:-------")
console.log(player1.nume);
console.log(player1.nr)

// In acest exemplu prin folosirea cuvantului "this" specificam ca "nume" si "nr" sunt egale cu parametrii din constructorul clasei "player".



// 2.Aplicatii practice:

//definirea obiectului folosind keyword-ul "const"
const elev = {
 //adaugam variabila in interiorul obiectului
    username: "Matei",
//atribuire functia dorita
    showName() {
//pentru afisarea corecta in consola a variabilei obiectului folosim "this. + nume variabila"
        console.log(this.username);
    },
}
// specificam obiectul si functia penttru rularea programului
console.log("Exercitiu_1:-------")
elev.showName()

//3 Exemplu extins:

//definirea obiectului folosind keyword-ul "const"
const raftCarti = {
//adaugam variabila obiectului reprezentata de un string 
    authors: ["Mihai Eminescu", "Ion Creanga"],
//atribuim functia dorita
    getAuthors() {
//pentru a putea folosi functia de adaugare a unui autor la lista existenta folosim "return"(pentru a reveni la lista inainte de adaugare) 
//inainte de a specifica lista respectiva prin "this." + nume variabila
    return this.authors;
    },
//atribuim functia de adaugare si ii dam si o valoare
    addAuthor(Autor) {
//facem call la stringul initial folosind "this" + metoda "push" pentru a adauga autorul nou in lista initiala
    this.authors.push(Autor);
  },
};
console.log("Exercitiu_2:-------")
//afisam lista initiala de autori in consola
console.log(raftCarti.getAuthors());
//pentru o diferentiere mai clara a celor 2 liste creeam in consola o delimitare
console.log("Lista revizuita-------")
//chemam functia de adaugare autor la lista existenta 
raftCarti.addAuthor("Camil Petrescu")
//afisam noua lista 
console.log(raftCarti.getAuthors())

