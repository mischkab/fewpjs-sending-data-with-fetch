// Add your code here
const userEndpoint = "http://localhost:3000/users";

function submitData(fullname, emailAddress) {
  return fetch(userEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: fullname,
      email: emailAddress
    })
  })
    .then(resp => resp.json())
    .then(json => {
      let id = document.createElement("p");
      id.innerText = json.id;
      document.body.appendChild(id);
      console.log(json.id)
    })
    .catch(function (error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });
};

submitData("Bodine", "bthompson93@outlook.com.au");