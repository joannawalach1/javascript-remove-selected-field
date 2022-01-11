async function fetchApi() {
  let url = 'https://jsonplaceholder.typicode.com/comments';
  return await fetch(url)
    .then((response) => {
      return response.json()
    })
    .then(data => {
      displayData(data)
    });
}

function createTable() {
  let headers = ["Name", "Email", "Body", "Action"];

  const wrapper = document.querySelector(".wrapper");
  const table = document.createElement("table");
  table.className = "table";

  const tHead = document.createElement("thead");
  tHead.className = "topHead";

  const tr = document.createElement("tr");
  tr.className = "tr";

  headers.forEach(header => {
    const mainTh = document.createElement('th');
    mainTh.className = "mainTh";
    mainTh.innerText = header;
    tr.appendChild(mainTh);
  })

  wrapper.appendChild(table);
  table.appendChild(tHead);
  tHead.appendChild(tr);
}

function displayData(data) {
  const mainWrapper = document.querySelector(".table");
  const wrapperForData = document.createElement("tBody");
  wrapperForData.className = "tBody";
  mainWrapper.appendChild(wrapperForData);

  data.forEach(user => {
    const nextLine = document.createElement("tr");
    nextLine.className = "trBody";
    wrapperForData.appendChild(nextLine);

    const name = document.createElement("td");
    name.innerText = user.name;
    name.className = "tdBody";
    nextLine.appendChild(name);
    const email = document.createElement("td");
    email.innerText = user.email;
    email.className = "tdBody";
    nextLine.appendChild(email);
    const body = document.createElement("td");
    body.innerText = user.body;
    body.className = "tdBody";
    nextLine.appendChild(body);

    const action = document.createElement("td");
    action.className = "tdBody";
    nextLine.appendChild(action);

    const removeButton = document.createElement("button");
    removeButton.innerText = "usuń";
    removeButton.className = "button1";
    action.appendChild(removeButton);
   

    const logInButton = document.createElement("button");
    logInButton.innerText = "zaloguj się";
    logInButton.className = "button2";
    action.appendChild(logInButton);

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
    checkbox.className = "checkbox";

    var label = document.createElement('label');
    label.htmlFor = "id";
    label.appendChild(document.createTextNode(''));

    name.appendChild(checkbox);
    name.appendChild(label);

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
    checkbox.className = "checkbox";

    var label = document.createElement('label');
    label.htmlFor = "id";
    label.appendChild(document.createTextNode(''));

    email.appendChild(checkbox);

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
    checkbox.className = "checkbox";

    var label = document.createElement('label');
    label.htmlFor = "id";
    label.appendChild(document.createTextNode(''));
    body.appendChild(checkbox);
  });

  
 //const button = document.querySelector(".button1");
  //button.addEventListener("click", removeField);

  //function removeField(id) {
   // const selectedfield = document.querySelector(id);
    //const selectBodyField = document.querySelector(".tBody")
    //   selectedfield.remove(selectBodyField);
    
  //}
  




}

fetchApi();
createTable();