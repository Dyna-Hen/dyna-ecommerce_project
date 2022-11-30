
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
const product_veiw = document.querySelector("#table");
let add_product_form = document.getElementById("product-dialog");
let product_container = document.getElementById('product-list');
let createEditButton =document.getElementById("createEditButton");

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
// let storePro = JSON.stringify(product);
// localStorage.setItem("product",storePro);
// storePro = JSON.parse(localStorage.getItem("product"));

function show(element) {
  element.style.display = "block";
}

function hide(element) {
  element.style.display = "none";
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
  newcontainer = document.getElementById("product-list");
  newcontainer.remove();
  newcontainer = document.createElement("div");
  newcontainer.id = "product-list";
  product_veiw.appendChild(newcontainer);

  for (let pro of product){

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = pro.name;
    
    // add
    // productContainer.appendChild()
    let td2 = document.createElement("td");
    td2.textContent = pro.price;
    
    let td3 = document.createElement("td");

    let deletebtt = document.createElement("button");
    deletebtt.id = "deletebtt";
    deletebtt.addEventListener("click", removebtt)
    deletebtt.textContent = "Delete";
    

    let editbtt = document.createElement("button");
    editbtt.id = "editbtt";
    editbtt.addEventListener("click", editbtt)
    editbtt.textContent = "Edit";
    
    td3.appendChild(deletebtt);
    td3.appendChild(editbtt);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    newcontainer.appendChild(tr)
  }
}

function Addproduct() {
  let pro = null;
  show(add_product_form);
  // let name = document.getElementById("proname").value;
  // let price = doc.value-from-input;
  // let item =  {
  //   name: name,
  //   price: price,
  // }

  // product.append(item);
  // saveProduct();
}
function removebtt(event) {
  let index = event.target.parentElement.parentElement.dataset.index;
  product.splice(index, 1);
  saveProduct();
  renderProduct();
}

function Cancel(e) {
  hide(add_product_form);
}

function editbtt(event) {
  productToedit = event.target.parentElement.parentElement.dataset.index;
  console.log(productToedit);
}
function Create() {
  hide(add_product_form);

  let newproduct = {};
  newproduct.name = document.getElementById("proname").value;
  newproduct.price = document.getElementById("price").value;
  product.push(newproduct);


  saveProduct();
  renderProduct();
}



// saveProduct();
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