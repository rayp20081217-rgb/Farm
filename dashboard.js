// ===============================
// RAYP FARM MANAGEMENT DASHBOARD
// ===============================

// Load data
let income = JSON.parse(localStorage.getItem("income")) || [];
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let workers = JSON.parse(localStorage.getItem("workers")) || [];

// ===============================
// SUM FUNCTION
// ===============================
function sum(arr) {
    return arr.reduce((total, item) => {
        return total + Number(item.amount || 0);
    }, 0);
}

// ===============================
// CALCULATE TOTALS
// ===============================
function calculate() {

    const totalIncome = sum(income);
    const totalExpenses = sum(expenses);
    const profit = totalIncome - totalExpenses;

    return {
        totalIncome,
        totalExpenses,
        profit
    };
}

// ===============================
// UPDATE WORKERS
// ===============================
function updateWorkers() {

    const workerElement = document.getElementById("totalWorkers");

    if (workerElement) {
        workerElement.textContent = workers.length;
    }

}

// ===============================
// UPDATE DASHBOARD
// ===============================
function updateDashboard() {

    const data = calculate();

    const incomeElement = document.getElementById("totalIncome");
    const expenseElement = document.getElementById("totalExpenses");
    const profitElement = document.getElementById("totalProfit");

    if (incomeElement)
        incomeElement.textContent =
            "UGX " + data.totalIncome.toLocaleString();

    if (expenseElement)
        expenseElement.textContent =
            "UGX " + data.totalExpenses.toLocaleString();

    if (profitElement) {

        profitElement.textContent =
            "UGX " + data.profit.toLocaleString();

        if (data.profit > 0) {
            profitElement.style.color = "green";
        } else if (data.profit < 0) {
            profitElement.style.color = "red";
        } else {
            profitElement.style.color = "black";
        }

    }

    updateWorkers();

}

// ===============================
// LIVE DATE & TIME
// ===============================
function updateClock() {

    const clock = document.getElementById("currentDateTime");

    if (!clock) return;

    const now = new Date();

    clock.innerHTML = now.toLocaleString();

}

// ===============================
// AUTO WRITING
// ===============================
const messages = [

    "🌾 Welcome to RAYP Farm Management System",

    "👨‍🌾 Manage Your Farm Easily",

    "💰 Monitor Income and Expenses",

    "📦 Track Inventory Efficiently",

    "🌱 Smart Farming Starts Here",

    "📊 Generate Reports in Seconds",

    getGreeting()

];

let messageIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter() {

    const element = document.getElementById("typingText");

    if (!element) return;

    const current = messages[messageIndex];

    if (!deleting) {

        element.textContent =
            current.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === current.length) {

            deleting = true;

            setTimeout(typeWriter, 2000);

            return;

        }

    } else {

        element.textContent =
            current.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            messageIndex++;

            if (messageIndex >= messages.length) {
                messageIndex = 0;
            }

        }

    }

    setTimeout(typeWriter, deleting ? 40 : 80);

}

// ===============================
// GREETING
// ===============================
function getGreeting() {

    const hour = new Date().getHours();

    if (hour < 12)
        return "☀️ Good Morning!";

    if (hour < 17)
        return "🌞 Good Afternoon!";

    if (hour < 20)
        return "🌇 Good Evening!";

    return "🌙 Good Night!";

}

// ===============================
// REFRESH DASHBOARD
// ===============================
function refreshDashboard() {

    income = JSON.parse(localStorage.getItem("income")) || [];

    expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    workers = JSON.parse(localStorage.getItem("workers")) || [];

    updateDashboard();

    updateClock();

}

// ===============================
// LOGOUT
// ===============================
function logout() {

    localStorage.removeItem("loggedInUser");

    window.location.href = "index.html";

}

// ===============================
// START SYSTEM
// ===============================
updateDashboard();

updateClock();

typeWriter();

setInterval(refreshDashboard, 1000);
