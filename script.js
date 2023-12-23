let modebtn=document.querySelector("#mode");
let currtmode="light";
modebtn.addEventListener("click",()=>{
    // console.log("mode buttn kam kr ra hi")
    if(currtmode==="light")
    {
        currtmode="dark"
        document.querySelector("body").classList.add("dark")
        document.querySelector("body").classList.remove("light"); 
    }
    else{
        currtmode="light"
        document.querySelector("body").classList.add("light")
        document.querySelector("body").classList.remove("dark"); 
        }
    console.log(currtmode)
}
)