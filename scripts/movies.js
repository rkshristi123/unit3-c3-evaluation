// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

var amount=JSON.parse(localStorage.getItem("amount"))
document.querySelector("#wallet").innerHTML=amount
localStorage.setItem("amount",JSON.stringify(amount))

var cartdata=JSON.parse(localStorage.getItem("cartdata"))||[]
async function main(){
    let data=await searchmovies()
    console.log(data)
    if (data==undefined){
        return false
    }
    append(data)
}


let movies_div=document.querySelector("#movies")
let id
async function searchmovies(){
try{
const query=document.querySelector("#search").value 
const res= await fetch (`https://www.omdbapi.com/?apikey=491e91e4&s=${query}`)
let data=await res.json()
const movies=data.Search
   return movies
}catch(err){
    console.log("err",err)
}
}

function append(data){
movies_div.innerHTML=null
data.forEach(function(el){
    let div1=document.createElement("div")
  let poster=document.createElement("img")
  poster.src=el.Poster
  poster.setAttribute("id","post") 
let title=document.createElement("p")
title.innerText=`Title: ${el.Title}`
let btn=document.createElement("button")
btn.setAttribute("class","book_now")
btn.innerText="BOOK NOW"
btn.addEventListener("click",function(){
    addtocart(el)
})
   
div1.append(poster,title,btn)
movies_div.append(div1)


})
}

function debounce(main,delay){
if(id){
    clearTimeout(id);
}
id= setTimeout(function(){
    main()
},delay );
}

function addtocart(el){
    cartdata.push(el)
    localStorage.setItem("movie",JSON.stringify(cartdata))
}