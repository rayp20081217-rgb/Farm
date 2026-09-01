let inventory =
JSON.parse(localStorage.getItem("inventory")) || [];

function addItem(){

    inventory.push({

        item:
        document.getElementById("item").value,

        quantity:
        document.getElementById("quantity").value,

        category:
        document.getElementById("category").value
    });

    localStorage.setItem(
        "inventory",
        JSON.stringify(inventory)
    );

    loadInventory();
}

function loadInventory(){

    let table =
    document.getElementById("inventoryTable");

    table.innerHTML="";

    inventory.forEach((item,index)=>{

        table.innerHTML += `
        <tr>
            <td>${item.item}</td>
            <td>${item.quantity}</td>
            <td>${item.category}</td>
            <td>
            <button onclick="deleteItem(${index})">
            Delete
            </button>
            </td>
        </tr>
        `;
    });
}

function deleteItem(index){

    inventory.splice(index,1);

    localStorage.setItem(
        "inventory",
        JSON.stringify(inventory)
    );

    loadInventory();
}

loadInventory();