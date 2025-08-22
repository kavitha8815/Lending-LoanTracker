import { apiGetLendingDetails } from "../api/apiGetLendingDetails.js";
import { apiDeleteLending } from "../api/apiDeleteLending.js";

function getHash() {
  const hash = window.location.hash.replace("#", "");
  return Number(hash);
}

export default async function render() {
  const id = getHash();
  const { error, data } = await apiGetLendingDetails(id);
  console.log(data);

  function ErrorBanner() {
    return `<hgroup>
    <h2>Error Occured</h2>
    <p>${error.message}</p>
    </hgroup>`;
  }

  function LendingDetails(lending) {
    const whenValue = lending.when;
    // console.log("Original value", whenValue);

    // console.log("Only date", whenValue);

    const onlyDate = whenValue.split("T")[0];

    return `<article>
    <header>
    <h2>${lending.who}</h2>
    <p>${lending.type}</p>
     <p>${lending.details}</p>
     <p>${onlyDate}</p>
     <footer>
        <button id="remove-lending">Remove</button>
     </footer>
    </header>
    </article>`;
  }

  function LendingDeleteSuccess() {
    return `<hgroup>
    <h2>Lending Delete</h2>
    <a href="/">Back to Home</a>
    </hgroup>`;
  }
  async function deleteLending() {
    const id = getHash();
    const { error } = await apiDeleteLending(id);
    if (error) {
      document.getElementById("app").innerHTML = ErrorBanner(error);
      return;
    }
    document.getElementById("app").innerHTML = LendingDeleteSuccess(id);
  }

  function removeClickHandler() {
    const removeButton = document.getElementById("remove-lending");
    removeButton.addEventListener("click", deleteLending);
  }
  if (error) {
    document.getElementById("app").innerHTML = ErrorBanner(error);
    return;
  }

  document.getElementById("app").innerHTML = LendingDetails(data);

  removeClickHandler();
}
