console.log('hello')

console.log(availableTest)

let alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let leftTest={count:0};
let openPrintPopup=0;
let testnameaddonlyonetime=0;
let Patientreportcount=0;
let patientReportToSave=[];
let classNameForInputAndValue=0;
let notRun=0;
let uniqueIdForPage={count:0};
function randomNumBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function addReportTemplate(arr,testNameForFew=undefined,patientInfo) {
console.log(arr,patientInfo,location.pathname)



  if(Patientreportcount == 0){
    let select = document.querySelector(".main");
let totalReportCounter = ` <div class="Patientreportcount">
<img class='printreport' src="./printer-print-svgrepo-com.svg" width="25px" alt="">
</div>`;
select.insertAdjacentHTML("afterbegin", totalReportCounter);
Patientreportcount=1;
}




if(openPrintPopup==0){
document.querySelector('.printreport').addEventListener('click',function () {

  window.print()

})
}
openPrintPopup=1;
for (let i = 0; i < arr.length; i++) { 
  

 

    let className = randomNumBetween(1, 9000);

    let className2 = 'template'+randomNumBetween(1, 6000);

    let div = document.querySelector(".main");

let ReportTemplate =`<div  style="height:29.7cm;width:21cm; margin-bottom: 15px;margin-left: auto;margin-right: auto;page-break-before: always;display: flex;flex-direction: column;justify-content: space-between; background-color: rgb(255, 255, 255);" class='${className2} reporttemplate' id=${uniqueIdForPage.count}>
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
<p class="pp-patient-details1 mp">${patientInfo.Patientname}</p>
<p class="pp-patient-details2 mp"><span>${patientInfo.Patientage} </span><span>YRS </span><span>${patientInfo.gender}</span></p>
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
<p class="pp-patient-details1 mp">${patientInfo.patientId}</p>
<p class="pp-patient-details2 mp">${patientInfo.registrationDate}</p>

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


for (let ii = leftTest.count; ii < arr.length; ii++) {


  if(deparmentarray.includes(arr[ii].department)==false){
  
  deparmentarray.push(arr[ii].department)
  testAddToTemplate(arr,className,ii,0,testNameForFew)
  if(deparmentarray.length>1){deparmentarray.shift()}

  }
  else{ 
   
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



let choosetest=[];

console.log(choosetest)

function alltests() {
  
for (let i = 0; i < choosetest.length; i++) {
  choosetest[i].addEventListener('click',function() {
  console.log(choosetest[i].textContent)
  console.log( choosetest[i].classList.contains('secleted'))
 

  if(choosetest[i].classList.contains('secleted')==false){

  choosetest[i].getAttribute('Partof') === null ? testToPerform.push({testName:choosetest[i].textContent,departments:choosetest[i].getAttribute('departments')}):testToPerform.push({testName:choosetest[i].textContent,departments:choosetest[i].getAttribute('departments'),Partof:choosetest[i].getAttribute('Partof')})
  choosetest[i].classList.add('secleted')
  }
  else{
    testToPerform = testToPerform.filter(object => {
  return object.testName !== choosetest[i].textContent;
});
console.log(choosetest[i])
 choosetest[i].classList.remove('secleted')
  }
 
  console.log(testToPerform)
  //console.log(choosetest[i].getAttribute('departments'),choosetest[i].getAttribute('Partof'))
  })
  
}
}


function performTest() {
  uniqueIdForPage.count++
  let addIdOneTime=0;
  if(testToPerform.length==0){
    alert('apne koi test select nahi kiya hai')
    return;
  }


let x = document.getElementById("optionList");
let Patientname=document.querySelector(".name").value.toUpperCase();
let Patientage=document.querySelector(".age").value;
let gender = x.options[x.selectedIndex].text.toUpperCase(); 
let registrationDate =document.querySelector(".date").value;
let patientID =document.querySelector(".patientID").value;

/////empty value of input tag
document.querySelector(".name").value='';
document.querySelector(".age").value='';
document.querySelector(".date").value='';
document.querySelector(".patientID").value='';
//////

console.log(Patientname,Patientage,registrationDate,patientID)

document.querySelector(".add-patient-container").style.display='flex';
document.querySelector(".form").style.display='none';
document.querySelector(".makereport").style.display='none';
  for (let i = 0; i < choosetest.length; i++) {

    choosetest[i].classList.remove('secleted')
    
  }

  console.log('testToPerform',testToPerform.length)

  
  // console.log(availableTest.departments[testToPerform[0].departments])
  let createReport=[];
let sepratePageReport=[];
  for (let i = 0; i < testToPerform.length; i++) {

   // console.log(availableTest.departments[testToPerform[i].departments])
    let department = availableTest.departments[testToPerform[i].departments.replace('-','')];

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
console.log(repo)


 let patientDeatels={Patientname:Patientname,Patientage:Patientage,registrationDate:registrationDate,gender:gender,patientId:patientID};
console.log(patientDeatels)

patientReportToSave.push({repo,createReport,patientDeatels})

let user = {repo,createReport,patientDeatels};

sessionStorage.setItem(patientDeatels.patientId, JSON.stringify(user));


if(repo.sepratePageReport.length !== 0){
  let totaldepartment=[];
for (let t = 0; t < repo.sepratePageReport.length; t++) {

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
      case 'thyroidprofile':
        testNameToAdd = "thyroid profile";
       break;
  }


for (let tt = 0; tt < repo.sepratePageReport.length; tt++) {

  if(totaldepartment[t]==repo.sepratePageReport[tt].Partof){

    totalTest.push(repo.sepratePageReport[tt])

  }
}


addReportTemplate(totalTest,testNameToAdd,patientDeatels)

if(addIdOneTime==0){
  
  let select = document.querySelector(".Patientreportcount");
  let anchortag = `<button class="user-link"><a href="#${uniqueIdForPage.count}">${patientDeatels.Patientname}</a></button>`;
  select.insertAdjacentHTML("beforeend", anchortag);

}

addIdOneTime=1;
testnameaddonlyonetime=0;
testNameToAdd=undefined;
leftTest.count=0;
totalTest=[];

}
console.log(totaldepartment)
}

console.log(createReport)


addReportTemplate(createReport,undefined,patientDeatels)

testToPerform=[];
leftTest.count=0;

if(addIdOneTime==0){

  let select = document.querySelector(".Patientreportcount");
  let anchortag = `<button class="user-link"><a href="#${uniqueIdForPage.count}">${patientDeatels.Patientname}</a></button>`;
  select.insertAdjacentHTML("beforeend", anchortag);

}

console.log(patientReportToSave)
//patientReportToSave.pop()
console.log(patientReportToSave)

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

  if(testnameaddonlyonetime==0){

let divtestname = document.querySelector(`.all-test-container${className}`);  
let testname =`<div class="testname22"><p>${testNameForFew}</p></div>`;
divtestname.insertAdjacentHTML('beforeend', testname);
testnameaddonlyonetime=1;
}
}

////////////////////////////


////////////////////////////
let classPatienttest=ii+alphabet[randomNumBetween(0,25)]+randomNumBetween(1, 100000)+alphabet[randomNumBetween(0,25)];
let classtestNamevalue=ii+alphabet[randomNumBetween(0,25)]+randomNumBetween(1, 100000)+alphabet[randomNumBetween(0,25)];
let classresultvalue=ii+alphabet[randomNumBetween(0,25)]+randomNumBetween(1, 100000)+alphabet[randomNumBetween(0,25)];
let classunitvalue=ii+alphabet[randomNumBetween(0,25)]+randomNumBetween(1, 100000)+alphabet[randomNumBetween(0,25)];
let classnormalRangevalue=ii+alphabet[randomNumBetween(0,25)]+randomNumBetween(1, 100000)+alphabet[randomNumBetween(0,25)];

////////////////////////////
classNameForInputAndValue++

console.log(patientReportToSave[patientReportToSave.length-1].patientDeatels.patientId)
let patientRefferance=patientReportToSave[patientReportToSave.length-1].patientDeatels.patientId;

  let testdiv = document.querySelector(`.all-test-container${className}`);  
  let tests =`<div class='Patienttest Patienttest${classPatienttest}'>
<p class="testNamevalue testNamevalue${classtestNamevalue}">${arr[ii].testName}</p>
<div class="resultvalue resultvalue${classresultvalue}">
<p class="b${classNameForInputAndValue} para">${arr[ii].value}</p>
  <input class="a${classNameForInputAndValue} textarea hide input" type="text">
</div>
<p class="unitvalue unitvalue${classunitvalue}">${arr[ii].unit}</p>
<p class="normalRangevalue normalRangevalue${classnormalRangevalue}">${arr[ii].normalRange.replace('$','')}</p></div>`;
  testdiv.insertAdjacentHTML('beforeend', tests);

let tn=arr[ii].testName;

///////////////////
  alignMaker(`testNamevalue${classtestNamevalue}`,`testName`)
  alignMaker(`resultvalue${classresultvalue}`,`result`)
  alignMaker(`unitvalue${classunitvalue}`,`unit`)
  alignMaker(`normalRangevalue${classnormalRangevalue}`,`normalRange`)

  //console.log(document.querySelector(`.resultvalue${classresultvalue}`).children)

  document.querySelector(`.Patienttest${classPatienttest}`).addEventListener('click',function (e) {

    let target= document.querySelector(`.Patienttest${classPatienttest}`);
  
    let clasexistornot=document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[1].classList.contains('hide');

if(e.target==target){
    if(clasexistornot == false){

      let text=document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[1].value.replaceAll(' ','');
     

      document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[1].classList.add('hide')

      document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.remove('hide')

      document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].textContent=text;

     
///////////save report in database
console.log(patientReportToSave)
let patientReportDataToSave = JSON.parse(sessionStorage[patientRefferance]);
console.log(patientReportDataToSave)



console.log(tn)

for (let i = 0; i < 1; i++) {
let found=0;

  for (let ii = 0; ii < patientReportDataToSave.createReport.length; ii++){

    if(patientReportDataToSave.createReport[ii].testName==tn){
      console.log('it is')
      patientReportDataToSave.createReport[ii].value=text;
      found=1;
      break;
    }
  } 

  if(found==0){
  for (let ii = 0; ii < patientReportDataToSave.repo.sepratePageReport.length; ii++){

    if(patientReportDataToSave.repo.sepratePageReport[ii].testName==tn){
      console.log('it is')
      patientReportDataToSave.repo.sepratePageReport[ii].value=text;
      break;
    }
  }
}
// console.log(patientReportToSave)

}
sessionStorage.setItem(patientRefferance, JSON.stringify(patientReportDataToSave));
////////////////////////////////////


if(arr[ii].normalRange[0] != '$'){
  let normalRangeForTest=arr[ii].normalRange.replaceAll(' ','').split('-');

  let checkNormalRangeOfValue=checkNormalRange(text,normalRangeForTest);
console.log(text,normalRangeForTest,checkNormalRangeOfValue)


if(checkNormalRangeOfValue=='abnomalValue'){
  document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.add(checkNormalRangeOfValue)
}
else{
  document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.remove('abnomalValue')
}
}


    }
  }
  })

  document.querySelector(`.resultvalue${classresultvalue}`).addEventListener('click',function () {
    
    
   let allinput= document.querySelectorAll(`.input`); 
 
   for (let i = 0; i < allinput.length; i++) {
    document.querySelectorAll(`.input`)[i].classList.add('hide')
    
   }
   let text=document.querySelector(`.resultvalue${classresultvalue}`).children[0].textContent;
    document.querySelector(`.resultvalue${classresultvalue}`).children[1].classList.remove('hide')
    document.querySelector(`.resultvalue${classresultvalue}`).children[1].value=text;
    document.querySelector(`.resultvalue${classresultvalue}`).children[1].select()
    document.querySelector(`.resultvalue${classresultvalue}`).children[0].classList.add('hide')
    document.querySelector(`.resultvalue${classresultvalue}`).children[1].focus()
    

  })

  document.querySelector(`.resultvalue${classresultvalue}`).addEventListener('keypress',function (event) {
    let key = event.key;
   
    //console.log(document.querySelector(`.resultvalue${classresultvalue}`).children)
    if (key == "Enter") {
   

    document.querySelector(`.resultvalue${classresultvalue}`).children[1].classList.add('hide')
    document.querySelector(`.resultvalue${classresultvalue}`).children[0].classList.remove('hide')

    let text=document.querySelector(`.resultvalue${classresultvalue}`).children[1].value;
    document.querySelector(`.resultvalue${classresultvalue}`).children[0].textContent=text;

    
    let nextclassfirstcher=document.querySelector(`.resultvalue${classresultvalue}`).children[1].classList[0][0];

    let nextclasssecondcher=parseFloat(document.querySelector(`.resultvalue${classresultvalue}`).children[1].classList[0].substring(1))+1;

    let nextclass=nextclassfirstcher+nextclasssecondcher
    
    
    console.log(nextclassfirstcher,'  ',nextclasssecondcher,'  ',nextclass,'  ')
   
try{
    document.querySelector(`.b${nextclasssecondcher}`).classList.add('hide')
    document.querySelector(`.a${nextclasssecondcher}`).classList.remove('hide')
    document.querySelector(`.${nextclass}`).focus()

    }catch(err){
      console.log('last input')
    }
   

///////////save report in database
console.log(patientReportToSave)
let patientReportDataToSave = JSON.parse(sessionStorage[patientRefferance]);
console.log(patientReportDataToSave)



console.log(tn)

for (let i = 0; i < 1; i++) {
let found=0;

  for (let ii = 0; ii < patientReportDataToSave.createReport.length; ii++){

    if(patientReportDataToSave.createReport[ii].testName==tn){
      console.log('it is')
      patientReportDataToSave.createReport[ii].value=text;
      found=1;
      break;
    }
  } 

  if(found==0){
  for (let ii = 0; ii < patientReportDataToSave.repo.sepratePageReport.length; ii++){

    if(patientReportDataToSave.repo.sepratePageReport[ii].testName==tn){
      console.log('it is')
      patientReportDataToSave.repo.sepratePageReport[ii].value=text;
      break;
    }
  }
}
// console.log(patientReportToSave)

}
sessionStorage.setItem(patientRefferance, JSON.stringify(patientReportDataToSave));
////////////////////////////////////

if(arr[ii].normalRange[0] != '$'){
  let normalRangeForTest=arr[ii].normalRange.replaceAll(' ','').split('-');

  let checkNormalRangeOfValue=checkNormalRange(text,normalRangeForTest);
console.log(text,normalRangeForTest,checkNormalRangeOfValue)


if(checkNormalRangeOfValue=='abnomalValue'){
  document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.add(checkNormalRangeOfValue)
}
else{
  document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.remove('abnomalValue')
}
}
  }
    
   
  })

}

function checkNormalRange(value,normalRangeForTest) {
  if(parseFloat(value) >= parseFloat(normalRangeForTest[0]) && parseFloat(value) <= parseFloat(normalRangeForTest[1])){
    return 'normalValue';
  }
  return 'abnomalValue';
}


//////////////patient form programming








document.querySelector(".add-patient-container").addEventListener('click',function () {
document.querySelector(".form").style.display='flex';
document.querySelector(".makereport").style.display='block';
document.querySelector(".add-patient-container").style.display='none';

let x = document.getElementById("optionList");



let sampleCollectionDate=new Date().toLocaleString();

document.querySelector(".date").value=sampleCollectionDate;

let alphabetId=alphabet[randomNumBetween(0,25)];
document.querySelector(".patientID").value=`${alphabetId}${randomNumBetween(1000,10000)}${randomNumBetween(1000,10000)}`;


document.querySelector(".name").addEventListener('input',function () {

  let value=document.querySelector(".name").value;
  
  console.log(value)
  
  if(value=='Mrs.'||value=='mrs.'||value=='MRS.'||value=='MS.'||value=='Ms.'||value=='ms.'){
  
    x.options.selectedIndex=1;
  }
  
  if(value=='Mr.'||value=='mr.'||value=='MR.'){ 
  
    x.options.selectedIndex=0;
  
  }
  
  
  })

})


function visible(i){
document.querySelector(`.available-tests${i}`).style.display='block';
document.querySelector(`.hidden66${i}`).style.display= 'flex';
document.querySelector(`.department-name${i}>img`).style.transition='0.5s';
document.querySelector(`.department-name${i}>img`).style.transform='rotate(180deg)';

}

function visiblityHide(i){
  document.querySelector(`.available-tests${i}`).style.display='none';
  document.querySelector(`.hidden66${i}`).style.display='none';
  document.querySelector(`.department-name${i}>img`).style.transition='0.5s';
  document.querySelector(`.department-name${i}>img`).style.transform='rotate(0deg)';
  }


function pritnDepartmentAndtests(){

let departments=Object.keys(availableTest.departments);

for(let i = 0; i <departments.length; i++) {


  let div = document.querySelector(`.available-department-container`);
  let html = `<div class="available-department">
  <div class="hidden66  hidden66${i}" onclick="visiblityHide(${i})">

  </div>
  <div class="department-name department-name${i}" onclick="visible(${i})">
    <p>${departments[i]}</p>
    <img src="./up-arrow-svgrepo-com.svg" width="20px" alt="">
  </div>
  
  <div class="available-tests  available-tests${i}">
  </div>
</div>`;
  div.insertAdjacentHTML("beforeend", html);
  
let testToPrint=availableTest.departments[departments[i]];


let Partof=[];

for(let ii = 0; ii <testToPrint.length; ii++){
if(testToPrint[ii].Partof != 'none'){
  Partof.push(testToPrint[ii].Partof.replaceAll(' ',''))
}
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
Partof=removeDuplicates(Partof);



for(let ii = 0; ii <Partof.length; ii++){

  let div = document.querySelector(`.available-tests${i}`);
  let html = ` <button class="but" departments=${testToPrint[ii].department}  Partof=${Partof[ii]}>${Partof[ii]}</button>`;
  div.insertAdjacentHTML("beforeend", html);
  choosetest.push(document.querySelector(`.available-tests${i}`).children[ii])
}

for(let ii = 0; ii < testToPrint.length; ii++){

  let div = document.querySelector(`.available-tests${i}`);

  let html = ` <button class="but" departments=${testToPrint[ii].department}>${testToPrint[ii].testName}</button>`;

  div.insertAdjacentHTML("beforeend", html);

  choosetest.push(document.querySelector(`.available-tests${i}`).children[ii+Partof.length])

}


}
}

pritnDepartmentAndtests()
alltests()
