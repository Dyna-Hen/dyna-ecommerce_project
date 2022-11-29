// const dom_item_dialog = document.getElementById("item-dialog");
// function showitem(element){
//     element.style.display = "block";
// }
// function hideitem(element){
//     element.style.display = "none";
// }
// function addQuestion(){
//     showitem(dom_item_dialog);
// }
// function Cancel(){
//     hideitem(dom_item_dialog);
// }
// function Create(){
//     var itemname = document.getElementById("name").value;
//     localStorage.setItem("textvalues",itemname);
//     return false;
// }

// pppp
// DOMS ELEMENTS  ---------------------------------------------------------
// const product_veiw = document.querySelector("#product-view");
// const product_dialog = document.querySelector("#product-dialog");
// let product = [
//   {
//     name: "hoodie",
//     price: 85,
//   },
//   {
//     name: "hoodie",
//     price: 5,
//   },
//   {
//     name: "hoodie",
//     price: 85,
//   },
//   {
//     name: "T-shirt",
//     price: 85,
//   }
// ];
// // let storePro = JSON.stringify(product);
// // localStorage.setItem("product",storePro);
// // storePro = JSON.parse(localStorage.getItem("product"));

// function show(element) {
//   element.style.display = "block";
// }

// function saveProduct() {
//   localStorage.setItem("product", JSON.stringify(product));
// }

// function loadProduct() {
//   let itemStorage = JSON.parse(localStorage.getItem("product"));
//   if (itemStorage !== null) {
//     product = itemStorage;
//   }
// }

// function renderProduct(){
//   let product_container = document.querySelector("#product-container")
//   product_container.remove()

//   product_container = document.createElement("div")
//   product_container .id = "product-container"

//   product_veiw.appendChild(product_container)

//   for (let pro of product){
//     let div = document.createElement("div")

//     let span = document.createElement('h3')
//     span.className = "card"
//     span.textContent = pro.name

//     let spant = document.createElement('span')
//     spant.className = "card"
//     spant.textContent = pro.price
    

//     // let price = document.createElement('span')
//     // price.className = "pri"
//     // price.textContent = pro.price

//     div.appendChild(span)
//     product_container.appendChild(div)

//   }
// }

// function Addproduct() {
//   let pro = null;
//   show(product_dialog);
// }



// // saveProduct();
// loadProduct();
// renderProduct();
function addTableRow(){
  //get the table by id
  //create a new row and cellls
  //get value from input text
  //set the values into row cell
  let table = document.getElementById("table");
  newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell2 = newRow.insertCell(1);
  cell3 = newRow.insertCell(2);
  Product_name = document.getElementById("name").value;
  Product_price = document.getElementById("price").value;

  cell1.innerHTML = Product_name;
  cell2.innerHTML = Product_price;

}
function selectRowToInput(){
  let rIndex = document.getElementById("table");
  for (let i = 0; i<table.rows.length; i++){
    table.rows[i].onclick = function(){
      //get the selected row index
      rIndex = this.rowIndex;
      console.log(rIndex);
    };
  }
}
selectRowToInput();