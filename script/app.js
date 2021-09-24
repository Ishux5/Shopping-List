// Item Class: Represents an Item

class Item {
    constructor(name, amount, notes) {
        this.position = 2;
        this.name = name;
        this.amount = amount;
        this.notes = notes;
    }
}

// UI Class: UI Tasks

class UI {
    static displayItems() {
        const storedItems = [
            {
                Position: "2",
                name: "Apple",
                amount: "5",
                notes: "For apple Pie",
            },
        ];
        const items = storedItems;

        items.forEach((item) => UI.addItemToList(item));
    }

    static addItemToList(Item) {
        const list = document.getElementById("#shoppingList");

        const row = document.createElement("div");

        row.innerHTML = `
            <p class="shoppingListPosition textAlignCenter">${Item.position}</p>
            <p class="sLItemName">${Item.name}</p>
            <p class="sLItemAmount textAlignCenter"></p>
            <svg
            class="deleteItem deleteItemHover"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#df2020"
            >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"
            />
            </svg>
        `;

        list.appendChild(row);
    }
}

// Store Class: Stores Item
// Event: Display Item

document.addEventListener("DOMContentLoaded", UI.displayItems);

// Event: Add Item
// Event: Delete Item
