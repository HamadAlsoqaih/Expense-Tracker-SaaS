
const expenses = [
  {
    date: "2024-02-01",
    category: "Grocery",
    description: "Costco Shopping",
    amount: 152.75,
  },
  {
    date: "2024-02-02",
    category: "Bills",
    description: "Water Bill",
    amount: 45.1,
  },
  {
    date: "2024-02-03",
    category: "Gas",
    description: "BP Gas Station",
    amount: 60.0,
  },
  {
    date: "2024-02-04",
    category: "Entertainment",
    description: "Netflix",
    amount: 15.99,
  },
  {
    date: "2024-02-05",
    category: "Investment",
    description: "Crypto Purchase",
    amount: 300.0,
  },
  {
    date: "2024-02-06",
    category: "Grocery",
    description: "Whole Foods",
    amount: 98.3,
  },
  {
    date: "2024-02-07",
    category: "Bills",
    description: "Mobile Plan",
    amount: 55.0,
  },
  {
    date: "2024-02-08",
    category: "Gas",
    description: "Shell Gas Station",
    amount: 42.15,
  },
  {
    date: "2024-02-09",
    category: "Dining",
    description: "Pizza Hut",
    amount: 27.5,
  },
  {
    date: "2024-02-10",
    category: "Travel",
    description: "Uber Ride",
    amount: 12.75,
  },
  {
    date: "2024-02-11",
    category: "Bills",
    description: "Electric Bill",
    amount: 120.4,
  },
  {
    date: "2024-02-12",
    category: "Entertainment",
    description: "Spotify",
    amount: 9.99,
  },
  {
    date: "2024-02-13",
    category: "Grocery",
    description: "Trader Joe's",
    amount: 87.6,
  },
  {
    date: "2024-02-14",
    category: "Gas",
    description: "Chevron Station",
    amount: 39.85,
  },
  {
    date: "2024-02-15",
    category: "Dining",
    description: "McDonald's",
    amount: 11.2,
  },
  {
    date: "2024-02-16",
    category: "Investment",
    description: "Mutual Fund",
    amount: 250.0,
  },
  {
    date: "2024-02-17",
    category: "Travel",
    description: "Train Ticket",
    amount: 45.0,
  },
  {
    date: "2024-02-18",
    category: "Bills",
    description: "Internet Bill",
    amount: 75.0,
  },
  {
    date: "2024-02-19",
    category: "Dining",
    description: "Starbucks",
    amount: 6.5,
  },
  {
    date: "2024-02-20",
    category: "Grocery",
    description: "Walmart Shopping",
    amount: 134.25,
  },
];


function $(id) {
  return document.getElementById(id);
}
function money(n) {
  return "$" + n.toFixed(2);
}
function pillClass(cat) {
  const c = cat.toLowerCase();
  if (c === "gas") return "gas";
  if (c === "grocery") return "grocery";
  if (c === "bills") return "bills";
  if (c === "investment") return "investment";
  if (c === "dining") return "dining";
  if (c === "travel") return "travel";
  if (c === "entertainment") return "entertainment";
  return "";
}


function fillSummary(list) {
  let total = 0;
  const catSet = {};
  for (let i = 0; i < list.length; i++) {
    total += list[i].amount;
    catSet[list[i].category] = true;
  }
  const avg = list.length ? total / list.length : 0;
  $("sumTotal").textContent = money(total);
  $("sumCount").textContent = String(list.length);
  $("sumAvg").textContent = money(avg);
  $("sumCats").textContent = String(Object.keys(catSet).length);
}


function fillTable(list) {
  const tbody = $("rows");
  tbody.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const e = list[i];
    const tr = document.createElement("tr");

    const tdDate = document.createElement("td");
    tdDate.textContent = e.date;
    tr.appendChild(tdDate);

    const tdCat = document.createElement("td");
    const span = document.createElement("span");
    span.className = "pill " + pillClass(e.category);
    span.textContent = e.category;
    tdCat.appendChild(span);
    tr.appendChild(tdCat);

    const tdDesc = document.createElement("td");
    tdDesc.textContent = e.description;
    tr.appendChild(tdDesc);

    const tdAmt = document.createElement("td");
    tdAmt.className = "right";
    tdAmt.textContent = money(e.amount);
    tr.appendChild(tdAmt);

    tbody.appendChild(tr);
  }

  $("shown").textContent = String(list.length);
  $("totalRows").textContent = String(expenses.length);
}


function applySearch() {
  const q = $("searchInput").value.toLowerCase().trim();
  if (q === "") {
    fillSummary(expenses);
    fillTable(expenses);
    return;
  }
  const out = [];
  for (let i = 0; i < expenses.length; i++) {
    const e = expenses[i];
    const text = (e.description + " " + e.category).toLowerCase();
    if (text.indexOf(q) !== -1) out.push(e);
  }
  fillSummary(out);
  fillTable(out);
}


window.addEventListener("DOMContentLoaded", function () {
  fillSummary(expenses);
  fillTable(expenses);
  $("searchInput").addEventListener("input", applySearch);
  $("clearBtn").addEventListener("click", function () {
    $("searchInput").value = "";
    applySearch();
  });
});
