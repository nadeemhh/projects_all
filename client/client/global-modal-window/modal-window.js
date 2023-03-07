function showGlobalModalWindow(height,width) {
    const body = document.querySelector("body");
let html = `<div class="modalwindow-for-all">

<div class="close-modalwindow-parent">
  <img class="close-modalwindow" width="25px" src="./svg images/close-square-svgrepo-com.svg" alt="">
</div>

</div>`;
body.insertAdjacentHTML("afterbegin", html);

if(width !== undefined){
document.querySelector(`.modalwindow-for-all`).style.width=width;
}
document.querySelector(`.modalwindow-for-all`).style.height=height;
document.querySelector(`.close-modalwindow`).addEventListener('click',function () {
    document.querySelector(`.modalwindow-for-all`).remove()
    
})

}



document.querySelector(`.add-client`).addEventListener('click',function () {
    
    if(document.querySelector('.modalwindow-for-all')==null){
    showGlobalModalWindow('300px','350px')
    clientAddForm()
  }
})

document.querySelector(`.client-list`).addEventListener('click',function () {
    
  if(document.querySelector('.modalwindow-for-all')==null){
  showGlobalModalWindow('300px','500px')
  showListOfClients()
}
})


function clientAddForm() {
    const div = document.querySelector(".modalwindow-for-all");
let html = `<div class="add-client-form">
<div>
  <p>Client's Name*</p>
  <input class="Client-Name" type="text">
</div>
<div>
  <p>Commission %</p>
  <input  class="Commission" type="number">
</div>
<div>
  <p>Adress*</p>
  <input class="Client-Adress" type="text">
</div>
<div class="client-submit"><button class="client-submit-button">Submit</button></div>
      </div>`;
div.insertAdjacentHTML("beforeend", html);
document.querySelector(`.Client-Name`).focus();
document.querySelector(`.client-submit-button`).addEventListener('click',function () {

let clientName=document.querySelector(`.Client-Name`).value;
let commission=document.querySelector(`.Commission`).value;
let clientAdress=document.querySelector(`.Client-Adress`).value;
console.log(clientName,commission,clientAdress)
   if(clientName!=''){

let cliId=alphabet[randomNumBetween(0, 24)]+alphabet[randomNumBetween(0, 24)]+alphabet[randomNumBetween(0, 24)];
    set(cliId+randomNumBetween(10, 100),{clientName,commission,clientAdress},store3)
    .then(() => {
      console.log('saved tests');
    
    })

location.reload()
   }else{alert("Enter Client's Name")}
})

}

///////////////////////////////////////////////////////
function showListOfClients() {
  
  const div = document.querySelector(".modalwindow-for-all");
  let html = `<table class="client-list-table">
  <thead class="client-thead">
    <tr>
    <th>client's Name</th>
    <th>commission</th>
    <th>client's Adress</th>
    <th>delete</th>
    </tr>
  </thead>
  <tbody class="insert-client-list">

  </tbody>
  </table>`;
  div.insertAdjacentHTML("beforeend", html);

  keys(store3).then((keys) => {

    console.log(keys);


 
  values(store3).then((client) => {

    console.log(client);

    for (let i = 0; i < client.length; i++) {
       
      const div = document.querySelector(".insert-client-list");
let html = `<tr>
  <td>${client[i].clientName}</td>
  <td>${client[i].commission} %</td>
  <td>${client[i].clientAdress}</td>
  <td><img width="30px" src="./svg images/trash-svgrepo-com.svg" key=${keys[i]} class="delete-client delete-client${i}" alt=""></td>
  </tr>`;
div.insertAdjacentHTML("beforeend", html);

let delc=document.querySelector(`.delete-client${i}`);
delc.addEventListener('click',function () {
 let cliDelKey=delc.getAttribute('key');
 console.log(cliDelKey)

 del(cliDelKey,store3)
    .then(() => {
      console.log('successfully deleted.');
      location.reload()
    })

})
  }



  });
});
}


/////////////////////////////////////////

values(store3).then((client) => {

    for (let i = 0; i < client.length; i++) {
       
        const div = document.querySelector("#RefByList");
let html = `<option value="">${client[i].clientName}</option>`;
div.insertAdjacentHTML("beforeend", html);
    }
  });