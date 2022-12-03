
// DOMS ELEMENTS  ---------------------------------------------------------
const product_veiw = document.querySelector("#table");
let add_product_form = document.getElementById("product-dialog");
let product_container = document.getElementById("product-list");
let createEditButton =document.getElementById("createEditButton");
// add
let pic_detail = document.getElementById("pic-detail");

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

    let img =  document.createElement("img");
    img.src = pro.img;
    img.className = "img";
   
    let td1 = document.createElement("td");
    td1.textContent = pro.name;
  
    let description =  document.createElement("td");
    description.textContent = pro.description;
    description.className = "description";
    
    let td2 = document.createElement("td");
    td2.textContent = pro.price;
    
    let currency =  document.createElement("td");
    currency.textContent = pro.currency;
    

    let td3 = document.createElement("td");
    td3.className = "button";

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
    tr.appendChild(description);
    tr.appendChild(td2);
    tr.appendChild(currency);
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
  // console.log(index)
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
  // console.log(productToedit);

  let editpro = product[productToedit];

  document.getElementById("img").value = editpro.img;
  document.getElementById("proname").value = editpro.name;
  document.getElementById("description").value = editpro.description;
  document.getElementById("price").value = editpro.price;
  document.getElementById("currency").value = editpro.currency;

  show(add_product_form);
}

function Create() {
  
  hide(add_product_form);
 if (productToedit !== null) {
  let editproduct = product[productToedit];
  
  editproduct.img = document.getElementById("img").value;
  editproduct.name = document.getElementById("proname").value;
  editproduct.description = document.getElementById("description").value;
  editproduct.price = document.getElementById("price").value;
  editproduct.currency = document.getElementById("currency").value;

 } else{
  let newproduct = {};
  newproduct.img = document.getElementById("img").value;
  newproduct.name = document.getElementById("proname").value;
  newproduct.description = document.getElementById("description").value;
  newproduct.price = document.getElementById("price").value;
  newproduct.currency = document.getElementById("currency").value;
  
  product.push(newproduct);

 }

 let byname = product.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
})

let sort_name_btt = document.querySelector(".sort-name");
sort_name_btt.addEventListener("click", get);

function get() {
 byname();
}
  saveProduct();
  renderProduct();
}


saveProduct();
loadProduct();
renderProduct();

// console.log(product)





























