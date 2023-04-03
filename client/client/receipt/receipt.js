let store7 = createStore('headertextdb', 'headertext');

function randomNumBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function printReceipt(data) {
  let checkIvalue=0;
    let receiptData = JSON.parse(sessionStorage.patientReceipt);
    console.log(receiptData)
    let patientTable=receiptData.patients;
    for (let i = 0; i < patientTable.length; i++) {
        
        const div = document.querySelector(".paper-container");
        let html = `<div class="a4Sizepaper">
        <div class="header">
        <div class="lab-name-slogan"><p>${data.labname}</p><p>${data.slogan}</p></div>

<div class="lab-adress">${data.adress}</div>
<div class="lab-phone-number">
    <img width="25px" src="../svg images/phone-call-svgrepo-com.svg" alt="">${data.phonenumbers}</div>
        </div>
        <div class="cash-memo"><p>Cash Memo</p></div>
        <div  class="patient-table-container">
        <table id="patient-table">
      <tr>
        <th>date</th>
        <th>Patient Name</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Mobile No.</th>
        <th>Ref By</th>
        <th>Total Tests</th>
        <th>status</th>
        <th>Amount</th>
      </tr>
      
      <tfoot>

       </tfoot>
    </table></div>
        </div>`;
        div.insertAdjacentHTML("beforeend", html);

      
  
  //////////////////

  let tbody = document.querySelectorAll("#patient-table")[document.querySelectorAll("#patient-table").length-1].children[0];
  checkIvalue==0?checkIvalue:checkIvalue=checkIvalue+1;
  console.log(checkIvalue)
  for (let ii =checkIvalue; ii <patientTable.length; ii++) {
  
  let totalamountfortest=0;
    let html = ` <tr class=tr${ii}>
      <td id="select-patient-date">${patientTable[ii].patientDeatels.registrationDate.split(',')[0]}</td>
      <td id="select-patient-name">${patientTable[ii].patientDeatels.Patientname}</td>
      <td id="select-patient-geder">${patientTable[ii].patientDeatels.gender}</td>
      <td id="select-patient-age">${patientTable[ii].patientDeatels.Patientage}</td>
      <td id="select-patient-mobileNo">${patientTable[ii].patientDeatels.mobileNo}</td>
      <td id="select-patient-RefBy">${patientTable[ii].patientDeatels.refby}</td>
      <td id="select-patient-TotalTests">${patientTable[ii].totalTestPerformed.map(function(obj) {
        totalamountfortest+=Number(obj.testPrice);
        return `<span class="whitesp">${obj.testName}</span><br>`;
      })}</td>
      <td id="select-patient-status">${patientTable[ii].patientDeatels.paymentstatus}</td>
      <td id="select-patient-Amount">${totalamountfortest}₹</td>
    </tr>`.replaceAll(',','');
    tbody.insertAdjacentHTML("beforeend", html);

    checkIvalue=ii;
let sapceCheack =sapceCheacker(`.tr${ii}`);
console.log(sapceCheack)

    ////// get out from loop if printed all 

  if(ii==patientTable.length-1){
    
    const tfoot = document.querySelectorAll("tfoot")[document.querySelectorAll("tfoot").length-1];
    let html = `<tr>
    <th id="table-Sub-Total" colspan="8">Sub Total :</th>
    <td></td>
  </tr>
  <tr>
    <th id="table-Discount" colspan="8">Discount :</th>
    <td></td>
  </tr>
  <tr>
    <th id="table-Total" colspan="8">Total :</th>
    <td></td>
  </tr>`;
    tfoot.insertAdjacentHTML("beforeend", html);
    calcTotal(receiptData)
    break;
  }

  if(sapceCheack > -202){
    console.log(ii,checkIvalue)
      console.log('overflow')
      break;
    }
  }


  if(checkIvalue==patientTable.length-1){break;}
    }
  

}


get('headerdeatels',store7)
.then((data) => {
  printReceipt(data)
})

function calcTotal(receiptData) {
  
  let addOn=0;
    for (let i = 0; i < document.querySelectorAll(`#select-patient-Amount`).length; i++) {
  
      addOn+=Number(document.querySelectorAll(`#select-patient-Amount`)[i].textContent.replace('₹',''));
     
     
  }
  console.log(addOn)
  document.querySelector(`#table-Sub-Total+td`).textContent=`${addOn.toFixed(2)}₹`;
  document.querySelector(`#table-Discount+td`).textContent=`${receiptData.discount}`;

  if(receiptData.discount.includes('%')){
    let discount=receiptData.discount.replace('%','');

  document.querySelector(`#table-Total+td`).textContent=`${Number(addOn-(Number(discount)/100) *addOn).toFixed(2)}₹`;
}
else if(receiptData.discount.includes('₹')){
  let discount=receiptData.discount.replace('₹','');
  console.log(addOn,Number(discount))
document.querySelector(`#table-Total+td`).textContent=`${addOn-Number(discount).toFixed(2)}₹`;
}
  }



  document.querySelector(`.printreport`).addEventListener('click',function () {
    document.title=`Receipt-${randomNumBetween(1, 1000)}${randomNumBetween(1, 1000)}`;
window.print()
document.title='Receipt';

      })


      function sapceCheacker(className) {
        console.log('triigerd2')
        console.log(className,document.querySelectorAll(className)[document.querySelectorAll(className).length-1])
      
          let spaceLeft=document.querySelectorAll(className)[document.querySelectorAll(className).length-1].getBoundingClientRect().bottom-document.querySelectorAll('.a4Sizepaper')[document.querySelectorAll('.a4Sizepaper').length-1].getBoundingClientRect().bottom;
      
      
      return spaceLeft;
          
        }