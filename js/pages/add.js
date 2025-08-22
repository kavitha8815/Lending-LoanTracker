import { apiAddLending } from "../api/apiAddLending.js";

function AddForm() {
  return `<h2>What did you lend recently?</h2>
  <hr/>
  <form id="add-loan-form">
  <input type="text" id="loan-who" placeholder="Who"/>
  
  <select id="loan-what">
  <option value="" disabled selected>What</option>
  <option value="Book">Book</option>
  <option value="Money">Money</option>
  <option value="Tool">Tool</option>
  <option value="Other">Other</option>
  </select>

  <input type="datetime-local" id="loan-date"/>
  <input type="text" placeholder="Additional Details" id="loan-details"/>
  <button type="submit">Add Lending</button>
  </form>

  <div id="result"></div>
    `;
}

async function handleSubmit(event) {
  const payload = {
    who: document.getElementById("loan-who").value,
    type: document.getElementById("loan-what").value,
    when: document.getElementById("loan-date").value,
    details: document.getElementById("loan-details").value,
    action: "View",
  };

  const result = document.getElementById("result");

  const { error, data } = await apiAddLending(payload);

  if (!error) {
    result.innerText = "Lending add successfully.";
    result.style.color = "green";
  }
}
export default function render() {
  document.getElementById("app").innerHTML = AddForm();

  const form = document.getElementById("add-loan-form");

  form.addEventListener("submit", handleSubmit);
}
