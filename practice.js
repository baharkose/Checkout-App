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



const calculateProduct = (e) =>{
  // product-price = quantity * discounted-price
let disPri 
 disPri  = e.closest(".product").querySelector("#discounted-price")

 console.log(disPri);

let qua = e.closest(".product").querySelector(".quantity")

let proPri = e.closest(".product").querySelector("#product-price")



  proPri.innerText = qua.innerText * disPri.innerText
  console.log(proPri);
  return proPri


}




