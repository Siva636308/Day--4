var xhr = new XMLHttpRequest();


xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {

    var t = JSON.parse(this.response);
    for (i = 0; i < 250; i++) {


      console.log(t[i].flag);

    }
  } else {

    console.log(xhr.responseText);
  }
};
request.onerror = function () {
  console.error("somthing error");
};


xhr.open("GET", "https://restcountries.eu/rest/v2/all");// rest API URL

//we are sending a request
xhr.send();
