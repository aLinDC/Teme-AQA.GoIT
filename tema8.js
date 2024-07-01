//1.Analiare fisier JSON "user.json"

// {
// //     "name": "Josh",                    //numele este un string
// //     "weight": 175,                     //greutatea este un numar
// //     "age": 30,                         //varsta este un numar  
// //     "eyecolor": "brown",               // culoarea ochilor este un string
// //     "isHappy": true,                   // este fericit reprezinta un boolean
// //     "cars": ["Chevy", "Honda"],        // masinile sunt reprezentate printr-un array
// //     "favoriteBook": {                  // cartea favorita este un obiect
// //      "title": "The Last Kingdom",      //titlul este o proprietate a obiectului reprezentata de un string
// //      "author": "Bernard Cornwell",     //autorul este o proprietate a obiectului reprezentata de  un string
// //      "rating": 8.38                    //nota este o proprietate a obiectului reprezentata de un numar
// //     }
// // }
   

//2.Utilizare metoda JSON.stringtify()

import assert from "assert"; 
import { json } from "stream/consumers";
describe("json operation", () => {
    it("Convert javascript object to json", () => {

        const animal = {
            name: "Leu",
            weight: 187,
            length: 235,
            color: "white"
        };
       
        const json = JSON.stringify(animal);
        console.log(animal);
        assert.strictEqual(json, '{"name":"Leu","weight":187,"length":235,"color":"white"}');
    });
});


// // //3.Analizare metoda JSON.parse()

describe("json operation", () => {
    it("convert JSON to javascript object", () => {
        const json = '{"name": "Mango", "age":3, "isHappy":true}'
        const dog = JSON.parse(json);
        assert.strictEqual(dog.name, "Mango");
        assert.strictEqual(dog.age, 3);
        assert.strictEqual(dog.isHappy, true);
        console.log(dog)

    });
})

//4.Gestionarea erorilor
let jsonString = '{"name": "Andrei", "age": 22}';
try {
    let parsedData = JSON.parsee(jsonString);
    console.log(parsedData);
} catch (error) {
    console.log(error + " catched" );
}
