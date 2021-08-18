let table = document.getElementById("table-body");

//Data Global

const getDataGlobal = () => {
  fetch("https://covid19.mathdro.id/api/confirmed")
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      // console.log(data);
      data.forEach((countries, index) => {
        let row = table.insertRow(index);
        row.insertCell(0).innerHTML = countries.countryRegion;
        row.insertCell(1).innerHTML =
          countries.confirmed.toLocaleString("id-ID");
        row.insertCell(2).innerHTML = countries.recovered;
        row.insertCell(3).innerHTML = countries.deaths.toLocaleString("id-ID");
      });
    });
};

getDataGlobal();

//Search Data

let search = document
  .getElementById("btn-search")
  .addEventListener("click", () =>
    searchCountry(document.getElementById("search-bar").value)
  );

const searchCountry = (search) => {
  fetch(`https://covid19.mathdro.id/api/countries/${search}`)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data);

      // let row = table.insertRow()
      // row.insertCell(0).innerHTML = `${search}`
      // row.insertCell(1).innerHTML = data.confirmed
      // row.insertCell(2).innerHTML = data.recovered
      // row.insertCell(3).innerHTML = data.deaths
    })

    .catch((error) => console.log(error));
};

searchCountry();
