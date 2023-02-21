function newStructureReport(obj,randomclassName,className,classPatienttest,patientRefferance)  {
    let patientReportDataToSave = JSON.parse(sessionStorage[patientRefferance]);
      console.log(obj.values,patientReportDataToSave)
      //let testdiv = document.querySelector(`.all-test-container${className}`);  
      let testdiv = document.querySelector(`.all-test-container${className}`);

      let tests =`<div class="widal Patienttest Patienttest${classPatienttest}">
      <div class="widal-test-container">
        
        <div>
      <table class="widal-values">
          <td>S Typhi 'O'</td>
      </table>
      <table class="widal-values">
         <td>S Typhi 'H'</td>
    </table>
    <table class="widal-values">
      <td>S ParaTyphi 'AH'</td>
  </table>
  <table class="widal-values">
    <td>S ParaTyphi 'BH'</td> 
  </table>
  </div>
  <div>
  <table class="widal-row${randomclassName}">
  <tr>
    <td class="td2"  class="td2" contenteditable="true">1/20</td>
    <td  class="td2" contenteditable="true">1/40</td>
    <td  class="td2" contenteditable="true">1/80</td>
    <td  class="td2" contenteditable="true">1/160</td>
    <td  class="td2" contenteditable="true">1/320</td>
  </tr>
  <tr value="O">
    <td  class="td2" contenteditable="true">+</td>
    <td  class="td2" contenteditable="true">+</td>
    <td  class="td2" contenteditable="true">-</td>
    <td  class="td2" contenteditable="true">-</td>
    <td  class="td2" contenteditable="true">-</td>
  </tr>
  <tr value="H">
    <td  class="td2" contenteditable="true">+</td>
    <td  class="td2" contenteditable="true">+</td>
    <td  class="td2" contenteditable="true">-</td>
    <td  class="td2" contenteditable="true">-</td>
    <td  class="td2" contenteditable="true">-</td>
  </tr>
  <tr value="AH">
    <td  class="td2" contenteditable="true">-</td>
    <td  class="td2" contenteditable="true">-</td>
    <td  class="td2" contenteditable="true">-</td>
    <td  class="td2" contenteditable="true">-</td>
    <td  class="td2" contenteditable="true">-</td>
  </tr>
  <tr value="BH">
    <td  class="td2" contenteditable="true">-</td>
    <td  class="td2" contenteditable="true">-</td>
    <td  class="td2" contenteditable="true">-</td>
    <td  class="td2" contenteditable="true">-</td>
    <td  class="td2" contenteditable="true">-</td>
  </tr>
</table>
    </div>
  
    </div>
  
    <div class="widal-result-container">
      <p>RESULT</p>
      <p>:</p>
      <p contenteditable="true" class="widal-result widal-result${randomclassName}">${obj.RESULT} </p>
    </div>
  
    <div contenteditable="true" class="widal-comment-container">
  
      <p>RESULT INTERPRETATION :</p>
      <p>${obj.comment}</p>
    </div>
  
  </div>`;

  testdiv.insertAdjacentHTML('beforeend', tests);

console.log(document.querySelector(`.widal-result${randomclassName}`))

let widalResult;
document.querySelector(`.widal-result${randomclassName}`).addEventListener('input',function () {

widalResult=document.querySelector(`.widal-result${randomclassName}`).textContent;

let patientReportDataToSave = JSON.parse(sessionStorage[patientRefferance]);
for (let i = 0; i < patientReportDataToSave.repo.sepratePageReport.length; i++) {
if(patientReportDataToSave.repo.sepratePageReport[i].testName=='Widal'){

patientReportDataToSave.repo.sepratePageReport[i].RESULT=widalResult;

}

}

sessionStorage.setItem(patientRefferance, JSON.stringify(patientReportDataToSave));
})

  let arrayofvalue=document.querySelector(`.widal-row${randomclassName}`).children[0].children;
  

  for (let i = 1; i < arrayofvalue.length; i++) {
let widalValue=arrayofvalue[i].children;

    for (let ii = 0; ii < widalValue.length; ii++) {
     
      widalValue[ii].addEventListener('input',function(e){

        
        let prop=e.target.parentNode.getAttribute('value');

let value=[];
for (let iii = 0; iii < e.target.parentNode.children.length; iii++) {
value.push(e.target.parentNode.children[iii].textContent)

if(iii==e.target.parentNode.children.length-1){saveTestDate(prop,value.toString())}
}

      })
    }
  }

  function saveTestDate(prop,value) {
    let patientReportDataToSave = JSON.parse(sessionStorage[patientRefferance]);
    console.log(prop,' = ',value,patientReportDataToSave.repo.sepratePageReport)
   for (let i = 0; i < patientReportDataToSave.repo.sepratePageReport.length; i++) {
   if(patientReportDataToSave.repo.sepratePageReport[i].testName=='Widal'){

    patientReportDataToSave.repo.sepratePageReport[i].values[prop]=value;
    patientReportDataToSave.repo.sepratePageReport[i].RESULT=widalResult;
    
   }
     
   }
   
   sessionStorage.setItem(patientRefferance, JSON.stringify(patientReportDataToSave));
  }


  }