var xhr = new XMLHttpRequest();


xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {

    let countries = JSON.parse(xhr.responseText);

    for (i = 0; i < countries.length; i++) {

      console.log(countries[i].name);
      console.log(countries[i].subregion);
      console.log(countries[i].region);
      console.log(countries[i].population);
    }


  } else {

    console.log(xhr.responseText);
  }
};
request.onerror = function () {
  console.error("somthing error");
};


xhr.open("GET", "https://restcountries.eu/rest/v2/all ");// rest API URL

//we are sending a request
xhr.send();


























