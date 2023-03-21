let dailypatientarray=[];
let allpatients=[];
let clients=[];
document.querySelector(`.show-database`).addEventListener('click',function () {


if(document.querySelector(`.reporttemplate`) == null){
  values(store6).then((allpatientsdata) => {
    values(store3).then((clientsdata) => {
      if(document.querySelector('.patient-database-container')==null){
        allpatients=allpatientsdata;
        clients=clientsdata;
        clientCommisionSetup()
      patientdatabase(clients)
      }
       });
  
    });
  }
  else{window.open(`${originUrl}/client/client/index.html`, '_blank');}
})

document.querySelector(`.show-database`).click();

function patientdatabase(clients) {
  allpatients.sort((a, b) => new Date(b.patientDeatels.registrationDate) - new Date(a.patientDeatels.registrationDate));

  


  const div = document.querySelector(".main");
  let html = ` <div class="patient-database-container">
  <div class="Patientreportcount">
    <div>
    <a target="_blank" href="https://web.whatsapp.com/">
    <img class='printreport' src="./svg images/whatsapp-svgrepo-com.svg" width="25px" alt="">
    </a>

    <img class='receipt-prefenance' src="./svg images/receipt-text-svgrepo-com (2).svg" width="25px" alt="">
    
    <img src="./svg images/trash-svgrepo-com.svg" alt="" class='delete-patient-record'>

    <select id="clientList">
      <option value="">daily patients</option>
    </select>

    <select id="change-payment-status">
      <option>change-status</option>
      <option>paid</option>
      <option>unpaid</option>
    </select>

    <select id="requested-payment-container">
      <option>requested-payment</option>
    </select>

    <select id="select-payment-status">
      <option>select-status</option>
      <option>paid</option>
      <option>unpaid</option>
    </select>
    </div>
    
    </div>
  <div class="patient-table-and-other-data">
    <div class="data-referance">
    <p>Today's Patient Data</p>
  </div>
    <table id="patient-table">
      <tr>
        <th><input id="select-all-patient-table" type="checkbox"></th>
        <th>date</th>
        <th>Patient Name</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Mobile No.</th>
        <th>Ref By</th>
        <th>Total Tests</th>
        <th>status</th>
        <th>Discount</th>
        <th>Amount</th>
      </tr>
      
      <tfoot>
        <tr>
          <th id="total" colspan="10">Total :</th>
          <td></td>
        </tr>
       </tfoot>
    </table>

    <div id="other-calculations">

      <div>
        <p>Total Paid Amount</p>
        <p>0</p>
      </div>

      <div>
        <p>Total Unpaid Amount</p>
        <p>0</p>
      </div>

    </div>
  </div>
</div>
`;
  div.insertAdjacentHTML("beforeend", html);

  document.querySelector(`.receipt-prefenance`).addEventListener('click',function () {
    if(document.querySelector('.modalwindow-for-all')==null){
      showGlobalModalWindow('220px','220px')
      receiptpreferances()
    }
    
      })

      function receiptpreferances() {

        let insertPatient=[];
        for (let i = 0; i < document.querySelectorAll(`#select-patient`).length; i++) {
        let checkbox=document.querySelectorAll(`#select-patient`)[i];
          

          if(checkbox.checked){

            let checkboxid=document.querySelectorAll(`#select-patient`)[i].getAttribute('patientid')
            for (let ii = 0; ii < allpatients.length; ii++) {
            
              if(allpatients[ii].patientDeatels.patientId==checkboxid){
          
                insertPatient.push(allpatients[ii])
                checkbox.checked=false;

              }

            }
          
        }
      }

      let discount=`${insertPatient[0].patientDeatels.commission}%`;
        /////////////////////////////////////////////////////////////////////
        const div = document.querySelector(".modalwindow-for-all");
      let html = `<div class="select-recepit-preferances">
      
      <div class="clientnameforrecipt">
        <p>${insertPatient[0].patientDeatels.refby}</p>
      </div>
      
      <div class="discountbypersentage">
      <input class="bypersentage" type="checkbox">
      <p>discount</p>
      <input value=${discount.replace('%','')} type="text">
      <p>%</p>
      </div>
      
      <div class="discountbyrupee">
      <input class="bybyrupee" type="checkbox">
      <p>rupee</p>
      <input type="text">
      <p>₹</p>
      </div>
      
      <div class="generate-receipt"><button>generate receipt</button></div>
      </div>`;
      div.insertAdjacentHTML("beforeend", html);
      
      
      
        let value;
      
      const checkbox1 = document.querySelector('.bypersentage');
      const checkbox2 = document.querySelector('.bybyrupee');
      checkbox1.checked = true;
      value=`${document.querySelector('.discountbypersentage>input[type="text"]').value}%`;
      
      document.querySelector('.discountbypersentage>input[type="text"]').addEventListener('input', function() {
        
        document.querySelector('.discountbyrupee>input[type="checkbox"]').checked = false;
        document.querySelector('.discountbyrupee>input[type="text"]').value='';

        document.querySelector('.discountbypersentage>input[type="checkbox"]').checked = true;
         value=`${document.querySelector('.discountbypersentage>input[type="text"]').value}%`;
         discount=value;
      });
      
      document.querySelector('.discountbyrupee>input[type="text"]').addEventListener('input', function() {
        
        document.querySelector('.discountbypersentage>input[type="checkbox"]').checked = false;
        document.querySelector('.discountbypersentage>input[type="text"]').value='';

        document.querySelector('.discountbyrupee>input[type="checkbox"]').checked = true;
         value=`${document.querySelector('.discountbyrupee>input[type="text"]').value}₹`;
         discount=value;
      });
      
      document.querySelector('.generate-receipt>button').addEventListener('click', function() {
        
        if (checkbox1.checked || checkbox2.checked) {
        sessionStorage.setItem('patientReceipt', JSON.stringify({discount,patients:insertPatient}));
        document.querySelector(".close-modalwindow").click()
        document.querySelector(`#select-all-patient-table`).checked=false;
        window.open(`${originUrl}/client/client/receipt/receipt.html`, '_blank');
        }
      
      
      
      });
      
      //////

      
      }
  




//////////////adding tables/////////////////////
let select=document.querySelector(`#clientList`);
if(select.options.selectedIndex==0){
  
  dailydata()
}

function dailydata() {

let todayDate=new Date().toLocaleString().split(',')[0];


for (let i = 0; i < allpatients.length; i++) {

  if(allpatients[i].patientDeatels.registrationDate.split(',')[0]==todayDate){
    dailypatientarray.push(allpatients[i])
  }
  
}

  let tbody = document.querySelector("#patient-table").children[0];

for (let i = 0; i <dailypatientarray.length; i++) {

let totalamountfortest=0;
  let html = ` <tr>
  <td><input id="select-patient" type="checkbox" patientId=${dailypatientarray[i].patientDeatels.patientId}></td>
    <td id="select-patient-date">${dailypatientarray[i].patientDeatels.registrationDate.split(',')[0]}</td>
    <td id="select-patient-name">${dailypatientarray[i].patientDeatels.Patientname}</td>
    <td id="select-patient-geder">${dailypatientarray[i].patientDeatels.gender}</td>
    <td id="select-patient-age">${dailypatientarray[i].patientDeatels.Patientage}</td>
    <td id="select-patient-mobileNo">${dailypatientarray[i].patientDeatels.mobileNo}</td>
    <td id="select-patient-RefBy">${dailypatientarray[i].patientDeatels.refby}</td>
    <td id="select-patient-TotalTests">${dailypatientarray[i].totalTestPerformed.map(function(obj) {
      totalamountfortest+=Number(obj.testPrice);
      return `<span class="whitesp">${obj.testName}</span><br>`;
    })}</td>
    <td id="select-patient-status"  paidorunpaid=${dailypatientarray[i].patientDeatels.patientId}>${dailypatientarray[i].patientDeatels.paymentstatus}</td>
    <td id="select-patient-Discount">${dailypatientarray[i].patientDeatels.commission}%</td>
    <td id="select-patient-Amount">${totalamountfortest-(Number(dailypatientarray[i].patientDeatels.commission)/100) *totalamountfortest.toFixed(2)}₹</td>
  </tr>`.replaceAll(',','');
  tbody.insertAdjacentHTML("beforeend", html);
}
}

//////////////////////////////////////////

//////////////// others /////////////////
 

  values(store3).then((client) => {

    for (let i = 0; i < client.length; i++) {
       
        const div = document.querySelector("#clientList");
let html = `<option value="">${client[i].clientName}</option>`;
div.insertAdjacentHTML("beforeend", html);
    }
  });




 document.querySelector(`#clientList`).addEventListener('change',function () {
    let select=document.querySelector(`#clientList`);
    console.log(select.options[select.options.selectedIndex].textContent,select.options.selectedIndex)


let clientPatient=[];

      let text=select.options[select.options.selectedIndex].textContent;

      if(select.options.selectedIndex!=0){
        console.log('allpatients array ?')
        console.log(allpatients)
      for (let i = 0; i < allpatients.length; i++) {
    
        if(allpatients[i].patientDeatels.refby==text.toUpperCase()){
          clientPatient.push(allpatients[i])
          console.log(allpatients[i].patientDeatels.Patientname)
        }
      }
    }
    else{
      clientPatient=dailypatientarray;
      text='Today'
    }

      console.log(clientPatient)


        document.querySelector(`.data-referance`).remove()
        document.querySelector(`#patient-table`).remove()

      let div = document.querySelector(".patient-table-and-other-data");

      let html = `<div class="data-referance">
      <p>${text}'s Patient Data</p>
    </div>
    <table id="patient-table">
    <tr>
      <th><input id="select-all-patient-table" type="checkbox"></th>
      <th>date</th>
      <th>Patient Name</th>
      <th>Gender</th>
      <th>Age</th>
      <th>Mobile No.</th>
      <th>Ref By</th>
      <th>Total Tests</th>
      <th>status</th>
      <th>Discount</th>
      <th>Amount</th>
    </tr>
    
    <tfoot>
      <tr>
        <th id="total" colspan="10">Total :</th>
        <td></td>
      </tr>
     </tfoot>
  </table>`;

      div.insertAdjacentHTML("afterbegin", html);

//////////////////
let tbody = document.querySelector("#patient-table").children[0];

for (let i = 0; i <clientPatient.length; i++) {

let totalamountfortest=0;
  let html = ` <tr>
  <td><input id="select-patient" type="checkbox" patientId=${clientPatient[i].patientDeatels.patientId}></td>
    <td id="select-patient-date">${clientPatient[i].patientDeatels.registrationDate.split(',')[0]}</td>
    <td id="select-patient-name">${clientPatient[i].patientDeatels.Patientname}</td>
    <td id="select-patient-geder">${clientPatient[i].patientDeatels.gender}</td>
    <td id="select-patient-age">${clientPatient[i].patientDeatels.Patientage}</td>
    <td id="select-patient-mobileNo">${clientPatient[i].patientDeatels.mobileNo}</td>
    <td id="select-patient-RefBy">${clientPatient[i].patientDeatels.refby}</td>
    <td id="select-patient-TotalTests">${clientPatient[i].totalTestPerformed.map(function(obj) {
      totalamountfortest+=Number(obj.testPrice);
      return `<span class="whitesp">${obj.testName}</span><br>`;
    })}</td>
    <td id="select-patient-status" paidorunpaid=${clientPatient[i].patientDeatels.patientId}>${clientPatient[i].patientDeatels.paymentstatus}</td>
    <td id="select-patient-Discount">${clientPatient[i].patientDeatels.commission}%</td>
    <td id="select-patient-Amount">${totalamountfortest-(Number(clientPatient[i].patientDeatels.commission)/100) *totalamountfortest.toFixed(2)}₹</td>
  </tr>`.replaceAll(',','');
  tbody.insertAdjacentHTML("beforeend", html);
}

calcTotal()
PaidAndUnpaidCalc()
selectallpatienttable()
/////////////////
    


  })

function selectallpatienttable() {
  
  document.querySelector(`#select-all-patient-table`).addEventListener('change',function () {
    let checked=document.querySelector(`#select-all-patient-table`).checked;
    
      
        for (let i = 0; i < document.querySelectorAll(`#select-patient`).length; i++) {
            
            document.querySelectorAll(`#select-patient`)[i].checked=checked;
        }
    
      })
}
selectallpatienttable()

  document.querySelector(`#change-payment-status`).addEventListener('change',function () {

      if(document.querySelector('.modalwindow-for-all')==null){
        showGlobalModalWindow('120px',undefined)
        reconfirmContant()
      }
    
    
      function reconfirmContant() {
        let select=document.querySelector(`#change-payment-status`);
        let text=select.options[select.options.selectedIndex].textContent;
        const div = document.querySelector(".modalwindow-for-all");
        let html = `<div class="reconfirm">
        <div>
      <p>are you sure you want to change payment status to ${text}?</p>
      </div>
      <div>
        <button class="terminate-program">No</button>
        <button class="execute-program">Yes</button>
      </div>
      </div>`;
        div.insertAdjacentHTML("beforeend", html);
       
        document.querySelector(`.close-modalwindow`).style.display='none';
        document.querySelector(`.execute-program`).addEventListener('click',function () {

          changePaymentStatus()
          document.querySelector(`.close-modalwindow`).click()
          select.options.selectedIndex=0;

        })
    
        document.querySelector(`.terminate-program`).addEventListener('click',function () {
          document.querySelector(`.close-modalwindow`).click()
          select.options.selectedIndex=0;
         return;
        })
      }
    
    
  

  })

function changePaymentStatus() {
  let select=document.querySelector(`#change-payment-status`);
  let text=select.options[select.options.selectedIndex].textContent;
  console.log(text,select.options.selectedIndex)
  //select.selectedIndex = 0;
  if(select.options.selectedIndex!=0){
      for (let i = 0; i < document.querySelectorAll(`#select-patient`).length; i++) {
      
          let checked=document.querySelectorAll(`#select-patient`)[i].checked;
          if(checked){ 
         
            let statuselement=document.querySelectorAll(`#select-patient`)[i].parentElement.parentElement.children[8].getAttribute('paidorunpaid')
            console.log(statuselement)

for (let ii = 0; ii < allpatients.length; ii++) {

if(allpatients[ii].patientDeatels.patientId==statuselement){
allpatients[ii].patientDeatels.paymentstatus=text;
set(`${statuselement}`, allpatients[ii],store6)
.then(() => {
console.log('saved patient Deatels');

})
}

}
              document.querySelectorAll(`#select-patient`)[i].parentElement.parentElement.children[8].textContent=text;
              document.querySelectorAll(`#select-patient`)[i].checked=false;                         


          }
         
          if(i==document.querySelectorAll(`#select-patient`).length-1){document.querySelector(`#select-all-patient-table`).checked=false;}
      }
  }

  PaidAndUnpaidCalc()
  select.options.selectedIndex=0;
}


  document.querySelector(`#select-payment-status`).addEventListener('change',function () {
    let select=document.querySelector(`#select-payment-status`);
    let text=select.options[select.options.selectedIndex].textContent;
    console.log(text,select.options.selectedIndex,select)

    if(select.options.selectedIndex!=0){
        for (let i = 0; i < document.querySelectorAll(`#select-patient`).length; i++) {
          let texttocheck=document.querySelectorAll(`#select-patient`)[i].parentElement.parentElement.children[8].textContent;
       console.log(texttocheck,text)

          if(texttocheck==text){
          document.querySelectorAll(`#select-patient`)[i].parentElement.parentElement.children[0].children[0].checked=true;
        }else{document.querySelectorAll(`#select-patient`)[i].parentElement.parentElement.children[0].children[0].checked=false;}

        }
    }

    select.options.selectedIndex=0;
  })


function calcTotal() {
  console.log('calcTotal')
let addOn=0;
  for (let i = 0; i < document.querySelectorAll(`#select-patient-Amount`).length; i++) {

    addOn+=Number(document.querySelectorAll(`#select-patient-Amount`)[i].textContent.replace('₹',''));
   
   
}
console.log(addOn)
document.querySelector(`#total+td`).textContent=`${addOn.toFixed(2)}₹`;

}
calcTotal()




function PaidAndUnpaidCalc() {
  console.log('PaidAndUnpaidCalc')
  let all= document.querySelectorAll(`#select-patient-status`);
  let allamounnt= document.querySelectorAll(`#select-patient-Amount`);
 
let totalpaid=0;
let totalunpaid=0;

  for (let i = 0; i < all.length; i++) {
  
    if(all[i].textContent=='paid'){
    
       totalpaid+=Number(allamounnt[i].textContent.replace('₹',''))
      }

    if(all[i].textContent=='unpaid'){
      totalunpaid+=Number(allamounnt[i].textContent.replace('₹',''))
    }
  }


  document.querySelector(`#other-calculations div:nth-child(1) p:nth-child(2)`).textContent=`${totalpaid.toFixed(2)}₹`;
  document.querySelector(`#other-calculations div:nth-child(2) p:nth-child(2)`).textContent=`${totalunpaid.toFixed(2)}₹`;
}

PaidAndUnpaidCalc()


document.querySelector(`.delete-patient-record`).addEventListener('click',function () {
  if(document.querySelector('.modalwindow-for-all')==null){
    showGlobalModalWindow('120px',undefined)
    reconfirmContant()
  }


  function reconfirmContant() {
 
    const div = document.querySelector(".modalwindow-for-all");
    let html = `<div class="reconfirm">
    <div>
  <p>are you sure you want to delete these patients?</p>
  </div>
  <div>
    <button class="terminate-program">No</button>
    <button class="execute-program">Yes</button>
  </div>
  </div>`;
    div.insertAdjacentHTML("beforeend", html);
   
    document.querySelector(`.close-modalwindow`).style.display='none';

    document.querySelector(`.execute-program`).addEventListener('click',function () {

      document.querySelector(`.close-modalwindow`).click()

      deletePatients(allpatients,calcTotal,PaidAndUnpaidCalc)

    })

    document.querySelector(`.terminate-program`).addEventListener('click',function () {
      document.querySelector(`.close-modalwindow`).click()

     return;
    })
  }

})
  //////////////////////////////////


}


function deletePatients(allpatients,calcTotal,PaidAndUnpaidCalc) {
let removeTheseElement=[];
  for (let i = 0; i < document.querySelectorAll(`#select-patient`).length; i++) {
    console.log(document.querySelectorAll(`#select-patient`).length)
    
    let checked=document.querySelectorAll(`#select-patient`)[i].checked;
    if(checked){ 
   
      let statuselement=document.querySelectorAll(`#select-patient`)[i].parentElement.parentElement.children[8].getAttribute('paidorunpaid')
      console.log(statuselement)

for (let ii = 0; ii < allpatients.length; ii++) {

if(allpatients[ii].patientDeatels.patientId==statuselement){

  

  removeTheseElement.push(document.querySelectorAll(`#select-patient`)[i].parentElement.parentElement)
del(`${statuselement}`,store6)
.then(() => {

console.log('deleted')

})


}

}
        document.querySelectorAll(`#select-patient`)[i].checked=false;                         


    }
   
    if(i==document.querySelectorAll(`#select-patient`).length-1){
      document.querySelector(`#select-all-patient-table`).checked=false;
      for (let o = 0; o < removeTheseElement.length; o++) {
        console.log('l')
        removeTheseElement[o].remove()
       
        
      }
      calcTotal()
      PaidAndUnpaidCalc()
      updatePatientsData()
    }
}
}

function updatePatientsData() {
  console.log('updated array ?')
  console.log(allpatients)
  values(store6).then((allpatientsdata) => {
        allpatients=allpatientsdata;
        dailypatientarray=[];
        let todayDate=new Date().toLocaleString().split(',')[0];
for (let i = 0; i < allpatients.length; i++) {

  if(allpatients[i].patientDeatels.registrationDate.split(',')[0]==todayDate){
    dailypatientarray.push(allpatients[i])
  }
  
}
clientCommisionSetup()
console.log(allpatients)
    });
}



function clientCommisionSetup() {
  for (let i = 0; i < allpatients.length; i++) {
    allpatients[i].patientDeatels.refby

    for (let ii = 0; ii < clients.length; ii++) {

      if(allpatients[i].patientDeatels.refby == clients[ii].clientName.toUpperCase()){
  
        allpatients[i].patientDeatels.commission=clients[ii].commission;
      }

    }
  }
  console.log(allpatients,clients)
}
