function saveProduct() {
  localStorage.setItem("product", JSON.stringify(product));
}

function loadProduct() {
  let itemStorage = JSON.parse(localStorage.getItem("product"));
  if (itemStorage !== null) {
    product = itemStorage;
  }
}
function hide(element) {
  element.style.display = "none";
}
function show(element) {
  element.style.display = "block";
}

let picView = document.getElementById("pic-view");
let picDetail = document.getElementById("pic-detail");

let product = [
  {
  img: "https://ibighit.com/txt/images/txt/discography/minisode-2/tmp-cover.png",
  name: "CHILD",
  price: 23,
  },
  {
    img: "https://i.scdn.co/image/ab67616d0000b2731c1ea5bfa5680ac877acdd55",
    name: "DIMENSION",
    price: 55,
  },
  {
    img: "https://purplekosmos.gumlet.io/wp-content/uploads/2022/01/txt_the_chaos_chapter_fight_or_escape_official_kpop_album.png?compress=true&quality=90&w=376&dpr=2.6",
    name: "DIMENSION",
    price: 80,
  },
  {
    img: "https://ibighit.com/txt/images/txt/discography/the_dream_chapter-s",
    name: "DIMENSION",
    price: 55,
  },
]

function render_product(){
  loadProduct()
  saveProduct()

  for (let index = 0; index < product.length; index++) {
    p = product[index];
    console.log(p)

    card_container = document.getElementById("allcard");

    let card = document.createElement("div");
    card .className = "card";
  
    let img = document.createElement("img");
    img.dataset.index = index;
    img.addEventListener("click", getPicIndex);

    img.className = "img";
    img.src = p.img;

    let container = document.createElement("div");
    container .className = "container";
  
    let name_pro = document.createElement("h2");
    name_pro.className = "name";
    name_pro.textContent = p.name;

    let price = document.createElement("p");
    price.textContent = p.price + p.currency;

    let div_btt = document.createElement("div");
    div_btt.className = "divbtt";

    let buy_button = document.createElement("button");
    buy_button.textContent = "Buy Now";
    buy_button.className = "buybutton";
    
    card.appendChild(img);
    container.appendChild(name_pro);
    container.appendChild(price);
    div_btt.appendChild(buy_button);
    container.appendChild(div_btt);
   
    card.appendChild(container);
    
    card_container.appendChild(card);
    
  }  
}

function getPicIndex(event) {
  
  let index = event.target.dataset.index;
  show(picDetail);
  hide(card_container);

  picDetail = document.getElementById("pic-detail");
  picDetail.remove();
  picDetail = document.createElement("div");
  picDetail.id = "pic-detail";
  picView.appendChild(picDetail);
  console.log(picDetail);

  let pic = product[index];

  let div1 = document.createElement("div");
  div1 .className = "div1";

  let picget = document.createElement("img");
  picget .id = "setimg";
  picget.src = product[index].img;
  div1.appendChild(picget);

  // new one
  let backbtt = document.createElement("button");
  backbtt.textContent = "Back";
  backbtt .id = "backbtt";
  backbtt.addEventListener("click", backbt)
  div1.appendChild(backbtt);

  // add-more
  let div = document.createElement("div");
  div .className = "textcontainer";

  let namedet = document.createElement("p");
  namedet .id = "titledt";
  namedet.textContent = product[index].name;
  div.appendChild(namedet);

  let info = document.createElement("p");
  info .id = "info";
  info.textContent = product[index].description;
  div.appendChild(info);

  let pridet = document.createElement("p");
  pridet .id = "pridet";
  pridet.textContent = "Price: "+product[index].price + product[index].currency;
  div.appendChild(pridet);

  picDetail.appendChild(div1);
  picDetail.appendChild(div);
}

function backbt() {
  hide(picDetail);
  show(card_container);
}

function search_product(event) {

  let product_input = search_product_input.value.toLowerCase();
  let all_products = document.querySelectorAll('.name');

  for (let i in all_products){
    all_products[i].parentNode.parentNode.style.display="none";

  if (all_products[i].textContent.toLowerCase() === product_input|| all_products[i].textContent.toLowerCase().includes(product_input)) {
    all_products[i].parentNode.parentNode.style.display="block"
  }
}
}

let search_product_input = document
  .getElementById("search-product")
  .querySelector("input");
  search_product_input.addEventListener("keyup", search_product);

loadProduct();
render_product();

