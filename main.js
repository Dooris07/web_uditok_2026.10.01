let drinksList = [
  {name: "Coca-Cola", price: 500},
  {name: "Coca-Cola Zero", price: 550},
  {name: "Fanta", price: 500},
  {name: "Sprite", price: 500},
  {name: "Jeges tea", price: 600},
];


const tbody = document.getElementById("tbody");

drinksList.forEach(element => {
    tbody.appendChild(AddRow(element))
});




function AddRow(element){
    const row = document.createElement("tr")
    const colName = document.createElement("td")
    const colPrice = document.createElement("td")

    colName.textContent = element.name
    colPrice.textContent = element.price

    row.appendChild(colName)
    row.appendChild(colPrice)
    return row;
}


function NewRow(){
    name = document.getElementById("drinkName").value
    price = document.getElementById("drinkPrice").value
    const element = {
        name:name,
        price:price
    }
    drinksList.push(element)
    tbody.appendChild(AddRow(element))

    /** @type HTMLFormElement */
    const form = document.getElementById("form")
    form.reset()

    //document.getElementById("drinkName").value = ""
    //document.getElementById("drinkPrice").value = ""
    
}