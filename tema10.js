
//Sarcina 1

fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => { return response.json(); })
    .then((list) => { return console.log(list); })
    .catch(error => { return console.log(error); })


//Sarcina 2

const searchParameter = new URLSearchParams({ id: 7 });
fetch("https://jsonplaceholder.typicode.com/todos?" + searchParameter)
    .then(response => { return response.json(); })
    .then((list) => { return console.log(list); })
    .catch(error => { return console.log(error); })


//Sarcina 3

fetch("https://jsonplaceholder.typicode.com/todos/", {
    method: 'POST',
    body: JSON.stringify({
      title: 'Sarcina3',
      body: 'Tema',
      userId: 2,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

//Sarcina 4
fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'Sarcina4',
        body: 'tema',
        userId: 8,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
  