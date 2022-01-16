async function fetchApi() {
  let url = 'https://jsonplaceholder.typicode.com/comments';
  return await fetch(url)
    .then((response) => {
      return response.json()
    })
    .then(data => {
      displayData(data);
      deleteRow();
    });
}

function createTable() {
  const wrapper = document.querySelector(".wrapper");
  const searchInput = document.createElement("input");
  searchInput.className = "searchBar";
  const button = document.createElement("button");
  const buttonText = document.createElement("span");
  buttonText.innerText = "search";
  wrapper.appendChild(searchInput);
  wrapper.appendChild(button);
  button.appendChild(buttonText);

  button.addEventListener("click", searchForUnpropriateWords());

  let headers = ["Name", "Email", "Body", "Action"];

  const table = document.createElement("table");
  table.className = "table";
  wrapper.appendChild(table);

  const tHead = document.createElement("thead");
  tHead.className = "topHead";
  table.appendChild(tHead);

  const tr = document.createElement("tr");
  tr.className = "tr";
  tHead.appendChild(tr);

  headers.forEach(header => {
    const mainTh = document.createElement('th');
    mainTh.className = "mainTh";
    mainTh.innerText = header;
    tr.appendChild(mainTh);
  })
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

    var checkbox = document.createElement('input');
    checkbox.name = "check";
    checkbox.type = "checkbox";
    checkbox.value = "value";
    checkbox.className = "checkbox";

    var label = document.createElement('label');
    label.htmlFor = "id";
    label.appendChild(document.createTextNode(''));

    nextLine.appendChild(checkbox);
    checkbox.appendChild(label);

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
  })
}

function searchForUnpropriateWords(data) {
  let input = document.querySelector(".searchBar");
  input.addEventListener('change', updateValue = (e) => {
    input = e.target.value;
    const tr = document.getElementsByClassName("trBody");

    for (let i = 0; i < tr.length; i++) {
      const td1 = tr[i].getElementsByClassName("tdBody")[0].textContent;
      const td2 = tr[i].getElementsByClassName("tdBody")[1].textContent;
      const td3 = tr[i].getElementsByClassName("tdBody")[2].textContent;

      if (td1.includes(input)) {
        tr[i].style.display = "";
        tr[i].style.backgroundColor = "rgb(247, 247, 247)";
      } else {
        tr[i].style.display = "none";
      }

      if (td2.includes(input)) {
        tr[i].style.display = "";
        tr[i].style.backgroundColor = "rgb(247, 247, 247)";
      } else {
        tr[i].style.display = "none";
      }

      if (td3.includes(input)) {
        tr[i].style.display = "";
        tr[i].style.backgroundColor = "rgb(247, 247, 247)";
      } else {
        tr[i].style.display = "none";
      }
    }
  })
}

function deleteRow() {
  const catchInput = document.getElementsByClassName("checkbox");
  const button = document.getElementsByClassName("button1");
  for (let i = 0; i < catchInput.length; i++) {
    const checkbox = catchInput[i];

    checkbox.addEventListener("change", function () {
      checkbox.parentElement.style.backgroundColor = "rgb(247, 247, 247)";
      for (let i = 0; i < button.length; i++) {
          const btn = button[i];
          btn.addEventListener("click", function () {
            btn.parentElement.parentElement.remove();
          })
        }
      }
    )}
}






/*
 
  function deleteAllRows() {
    const rows = document.getElementsByClassName("trBody");
 
  }
 
  function deleteMultipleRows() {
    const selectedCheckboxes = document.querySelectorAll('input[type=checkbox][name=check]:checked');
    console.log(selectedCheckboxes);
    for (let i = 0; i < selectedCheckboxes.length; i++) {
      const check = selectedCheckboxes[i];
      check.addEventListener("click", function () {
        check.parentElement.parentElement.remove();
      })
    }
  }
*/

fetchApi();
createTable();