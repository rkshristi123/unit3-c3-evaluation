// Store the wallet amount to your local storage with key "amount"
var arr=[]
var bag=0

function myfun(){
    let amount=document.querySelector("#amount").value
   
     arr.push(amount)
     for(var i=0;i<arr.length;i++){
         bag+= +(arr[i])
          
     }
     document.querySelector("#wallet").innerHTML=bag
    
    localStorage.setItem("amount",JSON.stringify(bag))
    bag=0
}
