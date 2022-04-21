// https://api.github.com/users/USERNAME

const Myform = document.querySelector("form");
Myform.addEventListener("submit", e => {
  e.preventDefault();
  const userName = document.getElementById("username").value;
  urlTarget =  "https://api.github.com/users/"+userName;

  fetch(urlTarget)
    .then(response.json())
    .then(users =>{
      const user = users[0];
      //add image
      const imgurl = user.avatar_url
      const imgElement = document.createElement("img");
      image.src = imgurl;
      console.log(image);
      document.getElementById("pic").appendChild(image);

      //table
      const tblElement = document.createElement("table");
      for(i = 0; i < 3; i++){
        const trElement = document.createElement("tr");
        for(r = 0; r < 2; r++){
          tdElement = document.createElement("td");
          if(i===0){
            if(r===0){
              tdElement.textContent = "Name";
            }else{tdElement.textContent = user.name}
          }else if(i===1){
            if(r===0){
              tdElement.textContent = "Blog";
            }else{tdElement.textContent = user.blog;}
          }else{if(r===0){
            tdElement.textContent = "Created";
          }else{tdElement.textContent = user.created_at;}
          }
        trElement.appendChild(tdElement);
      }
      tblElement.appendChild(trElement);
      }
    })
    .catch(err => {
      console.error("Error meaagae is:::", err.message);
    })
})