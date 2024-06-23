const studenti = [
    { name: "Marius", height: 176 },
    { name: "Andrei", height: 186 },
    { name: "Robert", height: 173 },
    { name: "Ionut", height: 195 },
    
];
const justName = studenti.map((nume) => nume.name);
console.log(justName);
console.log("-------------");
console.log(studenti)