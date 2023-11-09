// 1- Delete products
// 2- + - çöp
// 3- + - işlemi
// 4- 3000 büyükse dihipping 0
// 5 . kdv hesabı

const bin = document.querySelector(".fa-trash-can")
const main = document.querySelector("main")
const minus = document.querySelector(".fa-minus")
const plus = document.querySelector(".fa-plus")
const trash = document.querySelector(".fa-trash-can")
let quantity = document.querySelector(".quantity")
const products = document.querySelector(".products")
const product = document.querySelector(".product")
const discountedPrice = document.querySelector("#discounted-price")

const productPrice = document.querySelector("#product-price")
const selectedPrice = document.querySelector("#selected-price")


console.log(bin);

bin.addEventListener("click", () =>{
    console.log(bin);
    if(confirm("Are you sure you want to delete this")){
      main.textContent = "silindi"  
    }
    
})

// kural: üstekini bul çağır bubling yap.

products.addEventListener("click", (e) =>{
  console.log(e.target);
  if(e.target.classList.contains("fa-plus")){
    e.target.previousElementSibling.innerText++;
    calculateProduct(e.target)
  }


  else if(e.target.classList.contains("fa-minus")){
    if(e.target.nextElementSibling.innerText > 1){
      e.target.nextElementSibling.innerText--;
      calculateProduct(e.target)
    }
    
  }
  else if(e.target.classList.contains("fa-trash-can")){
    e.target.closest(".product").remove()
  }

})


let totalProPri = 1.750;

const calculateProduct = (e) =>{
  // product-price = quantity * discounted-price
let disPri 
 disPri  = e.closest(".product").querySelector("#discounted-price")

 console.log(disPri);

let qua = e.closest(".product").querySelector(".quantity")

let proPri = e.closest(".product").querySelector("#product-price")




  proPri.innerText = qua.innerText * disPri.innerText;

  

  console.log(totalProPri);
  console.log(proPri);
  
  calculateSelectedProduct(totalProPri);
  return totalProPri;
}

let SHIPPING = 30;
let TAX = 1.18;

const calculateSelectedProduct = (totalProPri) =>{
  // product-price, shipping, tax, total, product-toplam, total toplam

  let SHIPPING = 30;
  let TAX = 1.18;
  let FREE_SHIPPING_LIMIT = 3000;

 let total = document.querySelectorAll("#product-price")
 console.log(total);
 let newTotal = [...total].reduce((sum, item) =>sum +Number(item.textContent),0)
 console.log(newTotal);

 console.log(newTotal);
  
}






