

fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
  .then(response => response.json())
  .then(paintings =>{
    paintings.forEach(painting =>{

      const trPaint = document.createElement("tr");
      const tdName = document.createElement("td");
      tdName.textContent = painting.name;

      const tdYear = document.createElement("td");
      tdYear.textContent = painting.year;

      const tdArtist = document.createElement("td");
      tdArtist.textContent = painting.artist

      trPaint.appendChild(tdName);
      trPaint.appendChild(tdYear);
      trPaint.appendChild(tdArtist);
      document.getElementById("paintings").appendChild(trPaint);
    })
  })
  .catch(err => {
    console.error(err.message);
  })