
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
let productToedit = null;

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
  // console.log(itemStorage)
}

function renderProduct(){
  newcontainer = document.getElementById("product-list");
  newcontainer.remove();
  newcontainer = document.createElement("tbody");
  newcontainer.id = "product-list";
  product_veiw.appendChild(newcontainer);


  for (let index = 0; index < product.length; index++){
    let pro = product[index];

    let tr = document.createElement("tr");
    tr.dataset.index = index;

    let td1 = document.createElement("td");
    td1.textContent = pro.name;

    let tdN = document.createElement("td");
    tdN.textContent = pro.nblist;
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
    editbtt.addEventListener("click", editButton)
    editbtt.textContent = "Edit";
    
    td3.appendChild(deletebtt);
    td3.appendChild(editbtt);

    tr.appendChild(tdN);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    newcontainer.appendChild(tr)
  }
}


function Addproduct() {
  let pro = null;
  show(add_product_form);
}

function removebtt(event) {
  let index = event.target.parentElement.parentElement.dataset.index;
  console.log(index)
  product.splice(index, 1);
  saveProduct();
  renderProduct();
}
renderProduct()
function Cancel(e) {
  hide(add_product_form);
}

function editButton(event) {
  productToedit = event.target.parentElement.parentElement.dataset.index;
  // productToedit.parseInt(productToedit);
  // console.log(productToedit)
  let editpro = product[productToedit];

  document.getElementById("proname").value = editpro.name;
  document.getElementById("price").value = editpro.price;

  show(add_product_form);
}

function Create() {
  hide(add_product_form);
 if (productToedit !== null) {
  let editproduct = product[productToedit];
  editproduct.name = document.getElementById("proname").value;
  editproduct.price = document.getElementById("price").value;

 } else{
  let newproduct = {};
  newproduct.name = document.getElementById("proname").value;
  newproduct.price = document.getElementById("price").value;
  newproduct.nblist = document.getElementById("nblist").value;
  product.push(newproduct);

 }
  
  saveProduct();
  renderProduct();
}



// saveProduct();
loadProduct();
renderProduct();























