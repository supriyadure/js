let btn=document.querySelectorAll(".btn")
let storeitem=document.querySelector(".store-item img")
btn.addEventListner("click",(e)=>{
    if(e.target.classList.Contains("data-filter")){
        btn.querySelector(".active").classList.remove("active")
      console.log(e.target.classList.add("active"))
    }
})



















































// const btns=document.querySelectorAll(".btn");
// const storeitem=document.querySelectorAll(".store-item")
// for(let i=0;i<btns.length;i++){
//     btns[i].addEventListener("click",(e)=>{
//         e.preventDefault();
//         const filter=e.target.dataset.filter;
//         storeitem.forEach((item)=>{
//             if(filter==all){
//                 item.style.display="block"
//             }
//             else{
//                 if(item.classlist.contains("dou")){
//                 item.style.display="block"
//                 }
//                 else{
//                     item.style.display="none"
//                 }
//             }
//         })
//     })
// }






