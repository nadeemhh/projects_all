document.querySelector(`.add-header`).addEventListener('click',function () {
    
    if(document.querySelector('.modalwindow-for-all')==null){
    showGlobalModalWindow(undefined,undefined)
    headerTextAddForm()
  }
  })
  
  
  function headerTextAddForm() {
      const div = document.querySelector(".modalwindow-for-all");
  let html = `<div class="header-text-form">
  <div>
    <p>pathology lab's name*</p>
    <input class="lab-name" type="text">
  </div>
  <div>
    <p>lab's slogan*</p>
    <input  class="lab-slogan" type="text">
  </div>
  <div>
    <p>lab's Adress*</p>
    <input class="lab-Adress" type="text">
  </div>
  <div>
  <p>lab's phone numbers*</p>
  <input class="lab-phone-numbers" type="text">
</div>
  <div class="client-submit"><button class="client-submit-button">Submit</button></div>
        </div>`;
  div.insertAdjacentHTML("beforeend", html);
  document.querySelector(`.lab-name`).focus();
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