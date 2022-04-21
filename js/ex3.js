


const myData = {
  name: "Lala",
  countries:[{country:"China", year:2011 }, {country:"Japan", year:2015}, {country:"Taiwan", year:2012}]
};

// Send this data as JSON to the server
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(myData)
})
  .then(response => response.text())
  .then(message => {
    console.log(message);
  })