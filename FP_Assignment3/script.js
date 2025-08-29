const expenses = [
  { id: 1, name: "Groceries", amount: 150 },

  { id: 2, name: "Utilities", amount: 80 },

  { id: 3, name: "Dining Out", amount: 120 },

  { id: 4, name: "Transportation", amount: 50 },
];

const expensesListContainer = document.getElementById("expenselist");
const filterListContainer = document.getElementById("expensefilter");
const totalListContainer = document.getElementById("check")
const renderList = (check)=> {``
    const filterExp = expenses.filter((exp) => check ? exp.amount > 100 : exp)
    const expenseList = filterExp.map((exp) => `<li>
    <strong>Name:</strong>${exp.name}<br>
    <strong>Amount:</strong>${exp.amount}<br>
    </li>
    <hr>`);
    expensesListContainer.innerHTML = expenseList.join("");
    const total = filterExp.reduce((acc,curr) => acc + curr.amount,0)
    totalListContainer.textContent = `${total}`
}
renderList(false)
filterListContainer.addEventListener("change", function (){
    renderList(expensefilter.checked)
    console.log(expensefilter.checked);
})
