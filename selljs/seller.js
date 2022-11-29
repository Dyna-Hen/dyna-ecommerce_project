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
  let product_container = document.querySelector("#product-container")
  product_container.remove()

  product_container = document.createElement("div")
  product_container .id = "product-container"

  product_veiw.appendChild(product_container)

  for (let pro of product){
    let div = document.createElement("div")

    let span = document.createElement('span')
    span.className = "card"
    span.textContent = pro.name

    div.appendChild(span)
    product_container.appendChild(div)


  }
}
// saveProduct();
loadProduct();
renderProduct();