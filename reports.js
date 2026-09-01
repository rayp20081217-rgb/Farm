function generateReport(){

    const income =
    JSON.parse(localStorage.getItem("income")) || [];

    const expenses =
    JSON.parse(localStorage.getItem("expenses")) || [];

    let totalIncome = 0;
    let totalExpense = 0;

    income.forEach(item=>{
        totalIncome += Number(item.amount);
    });

    expenses.forEach(item=>{
        totalExpense += Number(item.amount);
    });

    document.getElementById("report").innerHTML = `

    <h3>Total Income: ${totalIncome}</h3>

    <h3>Total Expenses: ${totalExpense}</h3>

    <h2>Profit: ${totalIncome-totalExpense}</h2>

    `;
}