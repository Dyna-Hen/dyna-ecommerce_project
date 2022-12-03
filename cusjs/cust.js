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
  img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10b22412-a661-4e0e-8e62-848943016144/dbuj26x-c853f5f0-5fbd-4a78-b008-996fdcc2785a.jpg/v1/fill/w_1024,h_1024,q_75,strp/tata___bt21__by_the_jamless_one_dbuj26x-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzEwYjIyNDEyLWE2NjEtNGUwZS04ZTYyLTg0ODk0MzAxNjE0NFwvZGJ1ajI2eC1jODUzZjVmMC01ZmJkLTRhNzgtYjAwOC05OTZmZGNjMjc4NWEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6WRgTsJi9Isu94Au1HocYT54Dj134B-LM-GbrK3kShg",
  name: "hoodie",
  price: 23,
  },
  {
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/185649e8-2d8f-4232-8911-5d0cc2a913ed-one_one.png?VersionId=FwlVvGfWTQMoM5FA9jdBkbnFKk2ab.wS",
    name: "nono",
    price: 500,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-aLYcDmb0Juce-6zFOaA5Ifbx452F6clh7K6xmGPXNil12c5VhrOLgtZy8Rj68VnaBw&usqp=CAU",
    name: "lop",
    price: 780,
  }
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

