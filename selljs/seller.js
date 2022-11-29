
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
const product_veiw = document.querySelector("#product-view");
const add_product_form = document.querySelector("#product-dialog");
let product_container = document.getElementById('product-list');

let product = [
  {
    name: "hoodie",
    price: 85,
  },
  {
    name: "hoodie",
    price: 5,
  },
  {
    name: "hoodie",
    price: 85,
  },
  {
    name: "T-shirt",
    price: 85,
  }
];
let storePro = JSON.stringify(product);
localStorage.setItem("product",storePro);
storePro = JSON.parse(localStorage.getItem("product"));

function show(element) {
  element.style.display = "block";
}

function saveProduct() {
  localStorage.setItem("product", JSON.stringify(product));
}

function loadProduct() {
  let itemStorage = JSON.parse(localStorage.getItem("product"));
  if (itemStorage !== null) {
    product = itemStorage;
  }
  console.log(itemStorage)
}

function renderProduct(){
  for (let pro of product){
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = pro.name;
    let td2 = document.createElement("td");
    td2.textContent = pro.price;
    
    let td3 = document.createElement("td");
    let deletebtt = document.createElement("button");
    deletebtt.textContent = "Delete";
    let editbtt = document.createElement("button");
    editbtt.textContent = "Edit";
    
    td3.appendChild(deletebtt);
    td3.appendChild(editbtt);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    product_container.appendChild(tr)
  }
}

function Addproduct() {
  let name = doc.value-from-input;
  let price = doc.value-from-input;
  let item =  {
    name: name,
    price: price,
  }

  product.append(item);
  saveProduct();
}
saveProduct();
loadProduct();
renderProduct();
























// let rIndex = document.getElementById("table");
// // // saveProduct();
// // loadProduct();
// // renderProduct();
// function addTableRow(){
//   //get the table by id
//   //create a new row and cellls
//   //get value from input text
//   //set the values into row cell
//   // let table = document.getElementById("table");
//   Product_name = document.getElementById("name").value;
//   Product_price = document.getElementById("price").value;
//   id_number = document.getElementById("id").value;

//   selectRowToInput();
  
// }
// function selectRowToInput(){
//   // let rIndex = document.getElementById("table");
//   // for (let i = 0; i<table.rows.length; i++){
//   //   table.rows[i].onclick = function(){
//   //     //get the selected row index
//   //     rIndex = this.rowIndex;
//   //     // console.log(rIndex);
//   //   };
//   // }
// }
// selectRowToInput();
// function edit(){
//   let Product_name = document.getElementById("name").value;
//   Product_price = document.getElementById("price").value;
//   id_number = document.getElementById("id").value;

//   table.rows[rIndex].cells[0].innerHTML = Product_name;
//   table.rows[rIndex].cells[1].innerHTML = Product_price;
//   table.rows[rIndex].cells[2].innerHTML = id_number;

// }

// function remove(){
//   table.deleteRow(rIndex);
//   //clear input text
//   document.getElementById("name").value = "";
//   document.getElementById("price").value = "";
//   document.getElementById("id").value = "";
// }

// saveProduct();
// loadProduct();