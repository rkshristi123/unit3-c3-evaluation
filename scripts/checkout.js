// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var amount1=JSON.parse(localStorage.getItem("amount"))
document.querySelector("#wallet").innerHTML=amount1
var arr2=JSON.parse(localStorage.getItem("movie"))||[]
movies=document.querySelector("#movie")

arr2.forEach(function(el){
    
  let poster=document.createElement("img")
  poster.src=el.Poster
  poster.setAttribute("id","post") 
let title=document.createElement("p")
title.innerText=`Title: ${el.Title}`

   movies.append(poster,title)


})


function myfun(){
    var seat=document.querySelector("#number_of_seats").value
    console.log(seat)
    if((+(seat)*100)>(+(amount1))){
        alert("Insufficient Balance")
    }
    else{
        var total=+(amount1)-(+(seat)*100)
        alert("Booking Successfull")
        document.querySelector("#wallet").innerHTML=total
        localStorage.setItem("amount",JSON.stringify(total))
    }
}