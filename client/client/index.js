console.log('hello')

console.log(availableTest)


let leftTest={count:0};
let openPrintPopup=0;
let testnameaddonlyonetime=0;
let Patientreportcount=0;
function randomNumBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
function addReportTemplate(arr,testNameForFew=undefined) {
console.log(arr)

if(location.pathname == '/client/index.html'){

  if(Patientreportcount ==0){
    let select = document.querySelector(".main");
let totalReportCounter = ` <div class="Patientreportcount">
<button class='printreport'>print</button>
</div>`;
select.insertAdjacentHTML("afterbegin", totalReportCounter);
Patientreportcount=1;
}

}

console.log(openPrintPopup)
if(openPrintPopup==0){
document.querySelector('.printreport').addEventListener('click',function () {

  window.print()

})
}
openPrintPopup=1;
for (let i = 0; i < arr.length; i++) {   
       

    let className = randomNumBetween(1, 9000);

    let className2 = 'template'+randomNumBetween(1, 6000);

    let div = location.pathname == '/client/index.html'? document.querySelector(".main"):document.querySelector("#root")

let ReportTemplate =`<div  style="height:29.7cm;width:21cm; margin-bottom: 15px;margin-left: auto;margin-right: auto;page-break-before: always;display: flex;flex-direction: column;justify-content: space-between; background-color: rgb(255, 255, 255);" class='${className2} reporttemplate'>
<div class='Reportheader'>
<div class="headerlogo-container">

<img style="width: 320px;height: 200px;transform: translateX(-4%);margin-top: -10px;" src="./fq.png" alt="logo">

</div>
<div class="patient-details-container">
<div class="patient-details">
<div class="patient-details1">

<div class="patient-details1-1">
<p class="p-patient-details1 mp">Patient Name</p>
<p class="p-patient-details2 mp">Age/Sex</p>
<p class="p-patient-details3 mp">Ref: Lab</p>
<p class="p-patient-details5 mp">Specimen</p>
</div>
<div class="patient-details1-2">
<p class="pp-patient-details1 mp">MRS.GEETA</p>
<p class="pp-patient-details2 mp"><span>22 </span><span>YRS </span><span>FEMALE </span></p>
<p class="pp-patient-details3 mp">mat labs</p>
<p class="pp-patient-details5 mp">WB-EDTA</p>
</div>

</div>
<div class="patient-details2">

<div class="patient-details2-1">
<p class="p-patient-details1 mp">Ref. By</p>
<p class="p-patient-details1 mp">Registration ID</p>
<p class="p-patient-details2 mp">Registration Date </p>

</div>
<div class="patient-details2-2">
<p class="pp-patient-details1 mp">dr.roy</p>
<p class="pp-patient-details1 mp">46574453</p>
<p class="pp-patient-details2 mp">17/10/2022 13:19:52</p>

</div>

</div>
</div>

</div>
</div>
<div class='PatienttestPatienttestprovider'>
<div class="all-test-container all-test-container${className}">

<div style="margin-top: 10px;"  class='Patienttest0'>
<p class="testName fw500">Test Name</p>
<p class="result fw500">Value</p>
<p class="unit fw500">Unit</p>
<p class="normalRange fw500">Biological Ref. Interval</p>
</div>
</div>
</div>
<div class='Reportfotter'>

  <div class="doctor-name-container">
    <div style="height: 100%; width: 250px;float: right;">
      <div style="height: 50%; width: 250px;display: flex;flex-direction: column; justify-content: flex-end;">
      <img src="./doctorSign.jpg" style="height: 40px;width: 80px;" alt=""></div>
      <div style="height: 50%; width: 250px;">
      <p style="font-size: 12px;">DR.A.S JAIN<br>
        Consultant Pathologist
        </p>
      </div>
    </div>
  </div>
<div>

<img class="translatepoaitive" style="height: 100%; width: 100%;transform: translateY(-18%);" src="./ins.png" alt="">

</div>
</div>
</div>`;

div.insertAdjacentHTML('beforeend', ReportTemplate);

let deparmentarray = [];

console.log('jj',arr)
for (let ii = leftTest.count; ii < arr.length; ii++) {
  console.log('aa',arr[ii])

  if(deparmentarray.includes(arr[ii].department)==false){
    console.log('bb',arr[ii])
  deparmentarray.push(arr[ii].department)
  testAddToTemplate(arr,className,ii,0,testNameForFew)
  if(deparmentarray.length>1){deparmentarray.shift()}

  }
  else{ 
    console.log('cc',arr[ii])
    testAddToTemplate(arr,className,ii,1,testNameForFew)}
 

    leftTest.count=ii

    ///// department and test goes at once, check for avelable space after department has inserted also
    let departmentspaceLeft=  sapceCheacker('.deparment'); 
    let spaceLeft=  sapceCheacker('.Patienttest'); 


    //console.log(arr,spaceLeft)
    if(leftTest.count == arr.length-1){break;}

    if(departmentspaceLeft>-1){
      document.querySelectorAll(`.deparment`)[document.querySelectorAll('.deparment').length-1].remove()
      break;
    }
    if(spaceLeft>-1){

        document.querySelector(`.all-test-container${className}`).children[document.querySelector(`.all-test-container${className}`).children.length-1].remove()

        
        //console.log(document.querySelector(`.${className2}`))
        //console.log(`no space is left for footer .${className2}`)
        // leftTest.count++
        break;
        
  }
}
console.log(deparmentarray)
if(leftTest.count == arr.length-1){break;}
}
}



function sapceCheacker(className) {
    
    let spaceLeft=document.querySelectorAll(className)[document.querySelectorAll(className).length-1].getBoundingClientRect().bottom-document.querySelectorAll('.Reportfotter')[document.querySelectorAll('.Reportfotter').length-1].getBoundingClientRect().top;

return spaceLeft;
    
  }


if(location.pathname == '/client/print.html'){

    window.print()
  setTimeout(() => {
    window.location.href = location.origin+'/client/index.html';
  }, 1000);

   }


function alignMaker(fclassname,sclassname) {

 
  let minus=document.querySelector(`.${fclassname}`).getBoundingClientRect().x-document.querySelector(`.${sclassname}`).getBoundingClientRect().x;


  document.querySelector(`.${fclassname}`).style.transform=`translateX(${minus<0?Math.abs(minus):'-'+minus}px)`;

}




let testToPerform=[];
console.log(testToPerform)
// for (let i = 0; i < array.length; i++) {

  
// }

let choosetest=document.querySelector('.avltest').children;
console.log(choosetest)


for (let i = 0; i < choosetest.length; i++) {
  choosetest[i].addEventListener('click',function() {
  console.log(choosetest[i].textContent)
  


  choosetest[i].getAttribute('Partof') === null ? testToPerform.push({testName:choosetest[i].textContent,departments:choosetest[i].getAttribute('departments')}):testToPerform.push({testName:choosetest[i].textContent,departments:choosetest[i].getAttribute('departments'),Partof:choosetest[i].getAttribute('Partof')})

  //console.log(testToPerform)
  //console.log(choosetest[i].getAttribute('departments'),choosetest[i].getAttribute('Partof'))
  })
  
}


function performTest() {
  console.log('testToPerform',testToPerform)
  // console.log(availableTest.departments[testToPerform[0].departments])
  let createReport=[];
let sepratePageReport=[];
  for (let i = 0; i < testToPerform.length; i++) {

   // console.log(availableTest.departments[testToPerform[i].departments])
    let department = availableTest.departments[testToPerform[i].departments];

for (let ii = 0; ii < department.length; ii++) {


if(testToPerform[i].Partof === undefined ? department[ii].testName == testToPerform[i].testName : department[ii].Partof == testToPerform[i].Partof){

 // console.log(department[ii])
 if(testToPerform[i].Partof !== undefined){

  sepratePageReport.push(department[ii])
}
else{

  createReport.push(department[ii])}




}


  
}
    
  }

  let repo={sepratePageReport:sepratePageReport}

 
console.log(repo.sepratePageReport,'createReport => ',createReport)
if(repo.sepratePageReport.length !== 0){
  let totaldepartment=[];
for (let t = 0; t < repo.sepratePageReport.length; t++) {
console.log(repo.sepratePageReport[t].department)
 if(totaldepartment.includes(repo.sepratePageReport[t].Partof) === false){
  totaldepartment.push(repo.sepratePageReport[t].Partof)

 }
}

let totalTest=[];
let testNameToAdd=undefined;
for (let t = 0; t < totaldepartment.length; t++) {

  switch (totaldepartment[t]) {
    case 'cbc':
      testNameToAdd = "Complete Blood Count (CBC)";
      break;
    case 'kft':
      testNameToAdd = "Kidney Function Test (KFT)";
      break;
    case 'lft':
       testNameToAdd = "Liver Function Test (LFT)";
      break;

  }


for (let tt = 0; tt < repo.sepratePageReport.length; tt++) {

  if(totaldepartment[t]==repo.sepratePageReport[tt].Partof){

    totalTest.push(repo.sepratePageReport[tt])

  }
}

console.log(totalTest)
addReportTemplate(totalTest,testNameToAdd)
testnameaddonlyonetime=0;
testNameToAdd=undefined;
leftTest.count=0;
totalTest=[];
}
console.log(totaldepartment)
}


addReportTemplate(createReport)

testToPerform=[];
leftTest.count=0;

console.log('testnameaddonlyonetime',testnameaddonlyonetime)
//addReportTemplate(createReport[0].sepratePageReport)
}




function testAddToTemplate(arr,className,ii,deparmentPrintValue,testNameForFew) {

////////add department
if(deparmentPrintValue == 0){
let divdep = document.querySelector(`.all-test-container${className}`);  
let deparment =`<div class="deparment"><p>${arr[ii].department}</p></div>`;
divdep.insertAdjacentHTML('beforeend', deparment);}
////////////////

////////add test name

if(testNameForFew !== undefined){
  console.log(testnameaddonlyonetime,testNameForFew)
  if(testnameaddonlyonetime==0){

let divtestname = document.querySelector(`.all-test-container${className}`);  
let testname =`<div class="testname22"><p>${testNameForFew}</p></div>`;
divtestname.insertAdjacentHTML('beforeend', testname);
}
}
testnameaddonlyonetime=1;
////////////////////////////
let alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let classtestNamevalue=ii+alphabet[randomNumBetween(0,25)]+randomNumBetween(1, 100000)+alphabet[randomNumBetween(0,25)];
let classresultvalue=ii+alphabet[randomNumBetween(0,25)]+randomNumBetween(1, 100000)+alphabet[randomNumBetween(0,25)];
let classunitvalue=ii+alphabet[randomNumBetween(0,25)]+randomNumBetween(1, 100000)+alphabet[randomNumBetween(0,25)];
let classnormalRangevalue=ii+alphabet[randomNumBetween(0,25)]+randomNumBetween(1, 100000)+alphabet[randomNumBetween(0,25)];

  let testdiv = document.querySelector(`.all-test-container${className}`);  
  let tests =` <div class='Patienttest'>
<p class="testNamevalue testNamevalue${classtestNamevalue}">${arr[ii].testName}</p>
<p class="resultvalue resultvalue${classresultvalue}">${arr[ii].value}</p>
<p class="unitvalue unitvalue${classunitvalue}">${arr[ii].unit}</p>
<p class="normalRangevalue normalRangevalue${classnormalRangevalue}">${arr[ii].normalRange}</p>`;
  testdiv.insertAdjacentHTML('beforeend', tests);

  alignMaker(`testNamevalue${classtestNamevalue}`,`testName`)
  alignMaker(`resultvalue${classresultvalue}`,`result`)
  alignMaker(`unitvalue${classunitvalue}`,`unit`)
  alignMaker(`normalRangevalue${classnormalRangevalue}`,`normalRange`)
}

// let are =[{jk:'kk',score:9},{jk:'kk',score:4},{jk:'kk',score:3},{jk:'kk',score:1},{jk:'kk',score:5},{jk:'kk',score:10},];
// are.sort(function(a, b) { 
//   console.log(a,'----',b)
//   return a.score - b.score;
//  });
// console.log(are)