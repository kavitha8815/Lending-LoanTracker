import { apiGetLendings } from "../api/apiGetLendings.js";

function renderLendingRow(lending) {
  return `
    <tr>
    <td>${lending.who}</td>
    <td>${lending.type}</td>
    <td>${lending.details}</td>
    <td><a href="details#${lending.id}">View</a></td>
    </tr>
    `;
}
function LendingTable(lendings) {
  // console.log(lendings);
  const lendingRows = lendings.map(renderLendingRow);
  //   console.log(lendingRows);
  const lendingRowHtml = lendingRows.join("");
  return `
    <table>
        <thead>
         <tr>
            <th>Who</th>
            <th>Type</th>
            <th>Details</th>
            <th>Action</th>
         </tr>
        </thead>
        <tbody>
        ${lendingRowHtml}
        </tbody>
    </table>`;
}

function ErrorBanner(error) {
  return `<hgroup>
    <h2>Error</h2>
    <p>${error.message}</p>
    </hgroup>`;
}

export default async function render() {
  const { error, data } = await apiGetLendings();

  if (error) {
    document.getElementById("app").innerHTML = ErrorBanner(error);
    return;
  }
  document.getElementById("app").innerHTML = LendingTable(data);
}
