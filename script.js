movies.map((movie) => {
  let imageSource = movie.poster; // pak de url uit de array

  let posterImage = document.createElement("img"); // creeer een image element in de DOM
  posterImage.src = imageSource; // plak de source (url) in het image element

  let listItem = document.createElement("li"); // creeer een list element in de DOM
  const pakUl = document.querySelector("#mijnUl"); // Selecteer de ul waarin alles moet gebeuren

  listItem.appendChild(posterImage); // Hier komt  de img . posterImage  is tenslotte een img  element.
  pakUl.appendChild(listItem); // in de ul komt het listItem
  return movie;
});

//

const pakAlleFilms = document.getElementsByName("films");
console.log("Voorbeeld van een type film pakken:", pakAlleFilms[3]);

//     *********************************** NEW MOVIES  *******************************

// list leeg maken bij *klik* NewMovies

pakAlleFilms[0].addEventListener("click", function () {
  for (x = 0; x < movies.length; x) {
    pakParent = document.getElementById("mijnUl");
    pakKind = document.getElementsByTagName("li")[x];
    console.log(x);
    pakParent.removeChild(pakKind);
  }
});

// De nieuwe films pakken uit array en nieuwe array maken, deze vervolgens inplakken:

pakAlleFilms[0].addEventListener("click", function () {
  const zoekNewMovies = movies.filter((x) => {
    return x.year >= 2014;
  });
  console.log(zoekNewMovies);

  zoekNewMovies.map((movie) => {
    let imageSource = movie.poster; // pak de url uit de array

    let posterImage = document.createElement("img"); // creeer een image element in de DOM
    posterImage.src = imageSource; // plak de source (url) in het image element

    let listItem = document.createElement("li"); // creeer een list element in de DOM
    const pakUl = document.querySelector("#mijnUl"); // Selecteer de ul waarin alles moet gebeuren

    listItem.appendChild(posterImage); // Hier komt  de img . posterImage  is tenslotte een img  element.
    pakUl.appendChild(listItem); // in de ul komt het listItem
    return movie;
  });
});

//

//

//
//     ************************************* AVENGERS  *********************************
// list leeg maken bij *klik* Avengers
pakAlleFilms[1].addEventListener("click", function () {
  for (x = 0; x < movies.length; x) {
    pakParent = document.getElementById("mijnUl");
    pakKind = document.getElementsByTagName("li")[x];

    pakParent.removeChild(pakKind);
  }
});
//

// De avenger films pakken uit array en nieuwe array maken:
let arrayAvengers = [];
//
pakAlleFilms[1].addEventListener("click", function () {
  for (x = 0; x < movies.length; x++) {
    let zoekAvengers = movies[x].title.toLowerCase().includes("avengers");
    if (zoekAvengers === true) {
      //console.log("Avenger films:", movies[x], zoekAvengers);
      // nieuwe array maken:

      arrayAvengers.push(movies[x]);
    }
  }
  console.log(arrayAvengers);
});

// Avenger films inplakken in list
pakAlleFilms[1].addEventListener("click", function () {
  arrayAvengers.map((movie) => {
    let imageSource = movie.poster; // pak de url uit de array

    let posterImage = document.createElement("img"); // creeer een image element in de DOM
    posterImage.src = imageSource; // plak de source (url) in het image element

    let listItem = document.createElement("li"); // creeer een list element in de DOM
    const pakUl = document.querySelector("#mijnUl"); // Selecteer de ul waarin alles moet gebeuren

    listItem.appendChild(posterImage); // Hier komt  de img . posterImage  is tenslotte een img  element.
    pakUl.appendChild(listItem); // in de ul komt het listItem
    return movie;
  });
});
//

//     ************************************* X-Men  *********************************
// list leeg maken bij *klik* x-men
pakAlleFilms[2].addEventListener("click", function () {
  for (x = 0; x < movies.length; x) {
    pakParent = document.getElementById("mijnUl");
    pakKind = document.getElementsByTagName("li")[x];

    pakParent.removeChild(pakKind);
  }
});
//

// De X-men films pakken uit array en nieuwe array maken:
let arrayXmen = [];
//
pakAlleFilms[2].addEventListener("click", function () {
  for (x = 0; x < movies.length; x++) {
    let zoekXmen = movies[x].title.toLowerCase().includes("x-men");
    if (zoekXmen === true) {
      //console.log("X-men films:", movies[x], zoekXmen);
      // nieuwe array maken:

      arrayXmen.push(movies[x]);
    }
  }
  console.log(arrayXmen);
});

// X-men films inplakken in list
pakAlleFilms[2].addEventListener("click", function () {
  arrayXmen.map((movie) => {
    let imageSource = movie.poster; // pak de url uit de array

    let posterImage = document.createElement("img"); // creeer een image element in de DOM
    posterImage.src = imageSource; // plak de source (url) in het image element

    let listItem = document.createElement("li"); // creeer een list element in de DOM
    const pakUl = document.querySelector("#mijnUl"); // Selecteer de ul waarin alles moet gebeuren

    listItem.appendChild(posterImage); // Hier komt  de img . posterImage  is tenslotte een img  element.
    pakUl.appendChild(listItem); // in de ul komt het listItem
    return movie;
  });
});
//

//     ************************************* Princess  *********************************
// list leeg maken bij *klik* princess
pakAlleFilms[3].addEventListener("click", function () {
  for (x = 0; x < movies.length; x) {
    pakParent = document.getElementById("mijnUl");
    pakKind = document.getElementsByTagName("li")[x];

    pakParent.removeChild(pakKind);
  }
});
//

// De Princess films pakken uit array en nieuwe array maken:
let arrayPrincess = [];
//
pakAlleFilms[3].addEventListener("click", function () {
  for (x = 0; x < movies.length; x++) {
    let zoekPrincess = movies[x].title.toLowerCase().includes("princess");
    if (zoekPrincess === true) {
      //console.log("Princess films:", movies[x], zoekPrincess);
      // nieuwe array maken:

      arrayPrincess.push(movies[x]);
    }
  }
  console.log(arrayPrincess);
});

// X-men films inplakken in list
pakAlleFilms[3].addEventListener("click", function () {
  arrayPrincess.map((movie) => {
    let imageSource = movie.poster; // pak de url uit de array

    let posterImage = document.createElement("img"); // creeer een image element in de DOM
    posterImage.src = imageSource; // plak de source (url) in het image element

    let listItem = document.createElement("li"); // creeer een list element in de DOM
    const pakUl = document.querySelector("#mijnUl"); // Selecteer de ul waarin alles moet gebeuren

    listItem.appendChild(posterImage); // Hier komt  de img . posterImage  is tenslotte een img  element.
    pakUl.appendChild(listItem); // in de ul komt het listItem
    return movie;
  });
});
//

//     ************************************* Batman  *********************************
// list leeg maken bij *klik* Batman
pakAlleFilms[4].addEventListener("click", function () {
  for (x = 0; x < movies.length; x) {
    pakParent = document.getElementById("mijnUl");
    pakKind = document.getElementsByTagName("li")[x];

    pakParent.removeChild(pakKind);
  }
});
//

// De Batman films pakken uit array en nieuwe array maken:
let arrayBatman = [];
//
pakAlleFilms[4].addEventListener("click", function () {
  for (x = 0; x < movies.length; x++) {
    let zoekBatman = movies[x].title.toLowerCase().includes("batman");
    if (zoekBatman === true) {
      //console.log("Batman films:", movies[x], zoekBatman);
      // nieuwe array maken:

      arrayBatman.push(movies[x]);
    }
  }
  console.log(arrayBatman);
});

// Batman films inplakken in list
pakAlleFilms[4].addEventListener("click", function () {
  arrayBatman.map((movie) => {
    let imageSource = movie.poster; // pak de url uit de array

    let posterImage = document.createElement("img"); // creeer een image element in de DOM
    posterImage.src = imageSource; // plak de source (url) in het image element

    let listItem = document.createElement("li"); // creeer een list element in de DOM
    const pakUl = document.querySelector("#mijnUl"); // Selecteer de ul waarin alles moet gebeuren

    listItem.appendChild(posterImage); // Hier komt  de img . posterImage  is tenslotte een img  element.
    pakUl.appendChild(listItem); // in de ul komt het listItem
    return movie;
  });
});
//
