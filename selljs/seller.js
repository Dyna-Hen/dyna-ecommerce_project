
// DOMS ELEMENTS  ---------------------------------------------------------
const product_veiw = document.querySelector("#table");
let add_product_form = document.getElementById("product-dialog");
let product_container = document.getElementById('product-list');
let createEditButton =document.getElementById("createEditButton");

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
}

function renderProduct(){
  loadProduct()
  saveProduct()

  newcontainer = document.getElementById("product-list");
  newcontainer.remove();
  newcontainer = document.createElement("tbody");
  newcontainer.id = "product-list";
  product_veiw.appendChild(newcontainer);


  for (let index = 0; index < product.length; index++){
    let pro = product[index];

    let tr = document.createElement("tr");
    tr.dataset.index = index;

    // add
    let img =  document.createElement("img");
    img.src = pro.img;
    img.className = "img";

    let td1 = document.createElement("td");
    td1.textContent = pro.name;

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

    tr.appendChild(img);
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

  let editpro = product[productToedit];

  document.getElementById("img").value = editpro.img;
  document.getElementById("proname").value = editpro.name;
  document.getElementById("price").value = editpro.price;
 
  show(add_product_form);
}

function Create() {
  hide(add_product_form);
 if (productToedit !== null) {
  let editproduct = product[productToedit];
  
  editproduct.img = document.getElementById("img").value;
  editproduct.name = document.getElementById("proname").value;
  editproduct.price = document.getElementById("price").value;


 } else{
  let newproduct = {};
  newproduct.img = document.getElementById("img").value;
  newproduct.name = document.getElementById("proname").value;
  newproduct.price = document.getElementById("price").value;
 
  product.push(newproduct);

 }
  
  saveProduct();
  renderProduct();
}

saveProduct();
loadProduct();
renderProduct();























