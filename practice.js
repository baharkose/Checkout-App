// 1- Delete products
// 2- + - çöp
// 3- + - işlemi
// 4- 3000 büyükse dihipping 0
// 5 . kdv hesabı

const bin = document.querySelector(".fa-trash-can")
const main = document.querySelector("main")
console.log(bin);

bin.addEventListener("click", () =>{
    console.log(bin);
    if(confirm("Are you sure you want to delete this")){
      main.textContent = "silindi"  
    }
    
})



