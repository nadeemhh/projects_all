document.querySelector(`.add-header`).addEventListener('click',function () {
    
    if(document.querySelector('.modalwindow-for-all')==null){
    showGlobalModalWindow(undefined,undefined)
    get('headerdeatels',store7)
    .then((data) => {
      headerTextAddForm(data)
    })


  }
  })
  
  
  function headerTextAddForm(data) {

    let datatoadd={adress:"",
      isocirtificate:"",
      labname:"",
      phonenumbers:"",
      slogan:""}
if(data!==undefined){datatoadd=data;}
console.log(datatoadd)
      const div = document.querySelector(".modalwindow-for-all");
  let html = `<div class="header-text-form">
  <div>
    <p>pathology lab's name*</p>
    <input value="${datatoadd.labname}" class="lab-name" type="text">
  </div>
  <div>
    <p>lab's slogan*</p>
    <input value="${datatoadd.slogan==''?'Commited To Accurate Error Free':datatoadd.slogan}"  class="lab-slogan" type="text">
  </div>
  <div>
    <p>lab's Adress*</p>
    <input value="${datatoadd.adress}" class="lab-Adress" type="text">
  </div>
  <div>
  <p>lab's phone numbers*</p>
  <input value="${datatoadd.phonenumbers}" class="lab-phone-numbers" type="text">
</div>
<div>
  <p>ISO Certificate*</p>
  <input value="${datatoadd.isocirtificate}" class="ISO-Certificate" type="text">
</div>
  <div class="client-submit"><button class="client-submit-button">Submit</button></div>
        </div>`;
  div.insertAdjacentHTML("beforeend", html);
  document.querySelector(`.lab-name`).focus();
  document.querySelector(`.client-submit-button`).addEventListener('click',function () {
  
  let labname=document.querySelector(`.lab-name`).value;
  let adress=document.querySelector(`.lab-Adress`).value;
  let phonenumbers=document.querySelector(`.lab-phone-numbers`).value;
  let slogan=document.querySelector(`.lab-slogan`).value;
  let isocirtificate=document.querySelector(`.ISO-Certificate`).value;

     if(labname!=''){

      set('headerdeatels',{labname,adress,phonenumbers,slogan,isocirtificate},store7)
      .then(() => {
        console.log('saved lab deatels');
      
      })
  
      document.querySelector(`.close-modalwindow`).click()
     }else{alert("Enter Lab's Name")}
  })
  
  }