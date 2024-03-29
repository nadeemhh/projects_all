let store = createStore('myDB', 'groupedtests');
let store2 = createStore('availableTestDB', 'availableTest');
let store3 = createStore('clientsDB', 'clients');
let store4 = createStore('groupTestsDB', 'groupTests');
let store5 = createStore('testpriceDB', 'testprice');
let store6 = createStore('allpatientsDB', 'allpatients');
let store7 = createStore('headertextdb', 'headertext');



async function prisit() {

  if (navigator.storage && navigator.storage.persist) {
    const isPersisted = await navigator.storage.persisted();
    console.log(`Persisted storage: ${isPersisted}`);
  }
}
prisit()
let originUrl=location.origin;

console.log('hello')
let testInfo=testInfo2;
let availableTest=availableTest2;
console.log(availableTest)


get('groupTests',store4)
.then((data) => {
  console.log(data);

  if(data==undefined){
    set('groupTests', testInfo2,store4)
.then(() => {
  console.log('saved group tests');

})
  }
  else{testInfo=data;}
})




let alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let leftTest={count:0};
let openPrintPopup=0;
let testnameaddonlyonetime=0;
let Patientreportcount=0;
let patientReportToSave=[];
let classNameForInputAndValue=0;
let notRun=0;
let uniqueIdForPage={count:0};
let usersGroupTestCreater=undefined;
let testsToMerge=[];
let grouping=[];
let groupedTests=undefined;
let change=0;
let anotherHeading=[];
let testToPerform=[];
let choosetest=[];
let x = document.getElementById("optionList");
const select = document.getElementById("genderList");
const input = document.querySelector(".name");
let groupTestButtonElements=[];
let totalTestPerformed=[];


function randomNumBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function addReportTemplate(arr,testNameForFew=undefined,patientInfo,grouptestcomment) {
console.log(arr,patientInfo)



  if(Patientreportcount == 0){
    let select = document.querySelector(".main");
let totalReportCounter = ` <div class="Patientreportcount">
<div>
<img class='printreport' src="./svg images/printer-print-svgrepo-com.svg" width="25px" alt="">
<a target="_blank" href="https://web.whatsapp.com/">
<img class='printreport' src="./svg images/whatsapp-svgrepo-com.svg" width="25px" alt="">
</a>
<img class='pointer hide-and-show' src="./svg images/hide-svgrepo-com (1).svg" width="25px" alt="">
<button class="Savebuttonfornormalrange">Save</button>
</div>

<div class="patient-button-contenier"></div>
</div>`;
select.insertAdjacentHTML("afterbegin", totalReportCounter);
Patientreportcount=1;

document.querySelector('.hide-and-show').addEventListener('click',function () {
  document.querySelector('.hide-and-show').classList.toggle("hideheaderfooter");

  let allhideelement=  document.querySelectorAll('.hide-header-footer-images');

for (let i = 0; i < allhideelement.length; i++) {
  const myElement =allhideelement[i];
  const computedStyle = window.getComputedStyle(myElement);
  const displayValue = computedStyle.getPropertyValue('display');


  if(displayValue=='inline'){
  allhideelement[i].style.display='none';
  }
  else{allhideelement[i].style.display='inline';}
}
})
}




if(openPrintPopup==0){
document.querySelector('.printreport').addEventListener('click',function () {

  window.print()
 
})

document.querySelector('.Savebuttonfornormalrange').addEventListener('click',function () {
  saveNormalRange() 
})
}
openPrintPopup=1;
for (let i = 0; i < arr.length; i++) { 

let className = randomNumBetween(1, 9000);

let className2 = 'template'+randomNumBetween(1, 6000);

let div = document.querySelector(".main");

let ReportTemplate =`<div  style="height:29.7cm;width:21cm; margin-bottom: 15px;margin-left: auto;margin-right: auto;page-break-before: always;display: flex;flex-direction: column;justify-content: space-between; background-color: rgb(255, 255, 255);" class='${className2} reporttemplate' id=${'id'+uniqueIdForPage.count}>
<div class='Reportheader'>
<div class="headerlogo-container">

<img class='hide-header-footer-images' style="width: 320px;height: 200px;transform: translateX(-4%);margin-top: -10px;" src="./fq.png" alt="logo">

</div>
<div class="patient-details-container">
<div class="patient-details">
<div class="patient-details1">

<div class="patient-details1-1">
<p class="p-patient-details1 mp">Patient Name</p>
<p class="p-patient-details2 mp">Age/Sex</p>
<p class="p-patient-details3 mp">Ref:Lab</p>
<p class="p-patient-details5 mp">Specimen</p>
</div>
<div class="patient-details1-2">
<p style="z-index: 1;" class="pp-patient-details1 mp">${patientInfo.Patientname !== ''?patientInfo.Patientname:'dummyName'}</p>
<p class="pp-patient-details2 mp"><span>${patientInfo.Patientage !== ''?patientInfo.Patientage:'55'} </span><span>YRS </span><span>${patientInfo.gender}</span></p>
<p class="pp-patient-details3 mp">none</p>
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
<p class="pp-patient-details1 mp">${patientInfo.refby}</p>
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
<p class="normalRange fw500">Normal Range&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
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
<div class="Reportfotter-last-child">

<img class="translatepoaitive hide-header-footer-images" style="height: 100%; width: 100%;transform: translateY(-18%);" src="./ins.png" alt="">

</div>
</div>
</div>`;

div.insertAdjacentHTML('beforeend', ReportTemplate);

let deparmentarray = [];



document.querySelectorAll('.pp-patient-details5')[document.querySelectorAll('.pp-patient-details5').length-1].textContent=arr[0].Specimen;

for (let ii = leftTest.count; ii < arr.length; ii++) {

  
  if(deparmentarray.includes(arr[ii].department)==false){
    
  deparmentarray.push(arr[ii].department)
  testAddToTemplate(arr,className,ii,0,testNameForFew,grouptestcomment)
  if(deparmentarray.length>1){deparmentarray.shift()}

  }
  else{ 
    
    testAddToTemplate(arr,className,ii,1,testNameForFew,grouptestcomment)
  }
 

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
    console.log(spaceLeft)
    if(spaceLeft>-10){
console.log('triigerd1')

        document.querySelector(`.all-test-container${className}`).children[document.querySelector(`.all-test-container${className}`).children.length-1].remove()

        break;
        
  }
}

if(leftTest.count == arr.length-1){break;}
}
}



function sapceCheacker(className) {
  console.log('triigerd2')
  console.log(className,document.querySelectorAll(className)[document.querySelectorAll(className).length-1])

    let spaceLeft=document.querySelectorAll(className)[document.querySelectorAll(className).length-1].getBoundingClientRect().bottom-document.querySelectorAll('.Reportfotter')[document.querySelectorAll('.Reportfotter').length-1].getBoundingClientRect().top;


return spaceLeft;
    
  }





function alignMaker(fclassname,sclassname) {


  let minus=document.querySelector(`.${fclassname}`).getBoundingClientRect().x-document.querySelector(`.${sclassname}`).getBoundingClientRect().x;


  document.querySelector(`.${fclassname}`).style.transform=`translateX(${minus<0?Math.abs(minus):'-'+minus}px)`;

}







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


function performTest(out=false) {

  console.log('vvvv')
  uniqueIdForPage.count++
  let addIdOneTime=0;
  if(testToPerform.length==0){
    alert('apne koi test select nahi kiya hai')
    return;
  }


let x = document.getElementById("optionList");
let x2 = document.getElementById("RefByList");
let x3 = document.getElementById("set-payment-status");
let Patientname=document.querySelector(".name").value.toUpperCase();
let Patientage=document.querySelector(".age").value;
let gender = x.options[x.selectedIndex].text.toUpperCase(); 
let refby = x2.options[x2.selectedIndex].text.toUpperCase(); 
let paymentstatus = x3.options[x3.selectedIndex].text; 
let registrationDate =document.querySelector(".date").value;
let patientID =document.querySelector(".patientID").value;
let mobileNo =document.querySelector(".MobileNo").value;
const select = document.getElementById("genderList");
select.selectedIndex = 0;
/////empty value of input tag
document.querySelector(".name").value='';
document.querySelector(".age").value='';
document.querySelector(".date").value='';
document.querySelector(".patientID").value='';
//////

console.log(Patientname,Patientage,registrationDate,patientID)

let patientDeatels={Patientname:Patientname,Patientage:Patientage,registrationDate:registrationDate,gender:gender,patientId:patientID,refby:refby,mobileNo:mobileNo,paymentstatus:paymentstatus};

document.querySelector(".add-patient-container").style.display='flex';
document.querySelector(".form").style.display='none';
document.querySelector(".makereport").style.display='none';
  for (let i = 0; i < choosetest.length; i++) {

    choosetest[i].classList.remove('secleted')
    
  }
  for (let i = 0; i < groupTestButtonElements.length; i++) {

    groupTestButtonElements[i].classList.remove('secleted')
    
  }

  console.log('testToPerform',testToPerform.length)

  
  // console.log(availableTest.departments[testToPerform[0].departments])
let createReport=[];
let sepratePageReport=[];


  for (let i = 0; i < testToPerform.length; i++) {

    console.log(testToPerform[i])
    
    if(testToPerform[i].Partof=="group"){
      console.log(testToPerform[i])
      printGTests(testToPerform[i],patientDeatels)
      continue;
    }
    console.log(testToPerform[i])
    let department = availableTest.departments[testToPerform[i].departments.replace('-','')];
console.log(department)
for (let ii = 0; ii < department.length; ii++) {

  console.log('kk', department[ii].testName ,'ll' ,testToPerform[i].testName)
if(testToPerform[i].Partof === undefined ? department[ii].testName == testToPerform[i].testName : department[ii].Partof == testToPerform[i].Partof){
  
  console.log('kk')
 if(testToPerform[i].Partof !== undefined){

  sepratePageReport.push(department[ii])
}
else{

  createReport.push(department[ii])}

}

}
    
  }

  let repo={sepratePageReport:sepratePageReport}

  console.log(sepratePageReport,createReport,patientDeatels)

patientReportToSave.push({repo,createReport,patientDeatels})


let user = {repo,createReport,patientDeatels,totalTestPerformed};
console.log(user)

if(patientDeatels.Patientname!=''){
  set(`${patientDeatels.patientId}`, {patientDeatels,totalTestPerformed},store6)
.then(() => {
  console.log('saved patient Deatels');

})

}


sessionStorage.setItem(patientDeatels.patientId, JSON.stringify(user));

const newArray = [];

///////////////create new page where newpage:true
for (let i = 0; i < createReport.length; i++) {

  if(createReport[i].newPage!=undefined && createReport[i].newPage == true){
newArray.push(createReport[i]);
createReport.splice(i, 1);
i--;
  }
 

}

if(newArray.length>0){
  user = {repo,createReport,patientDeatels,totalTestPerformed,newPageReport:newArray};
console.log(user)

if(patientDeatels.Patientname!=''){
set(`${patientDeatels.patientId}`, {patientDeatels,totalTestPerformed},store6)
.then(() => {
  console.log('saved patient Deatels');

})
}
sessionStorage.setItem(patientDeatels.patientId, JSON.stringify(user));
}

if(out==true){

  usersGroupTestCreater=user;

  return;}

console.log(newArray)
for (let i = 0; i < newArray.length; i++) {

console.log(newArray[i],patientDeatels)

addReportTemplate([newArray[i]],newArray[i].testName[0]=='!'?newArray[i].testName:undefined,patientDeatels)

testnameaddonlyonetime=0;
anotherHeading=[];
}

totalTestPerformed=[];
//////////////////////////


  



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
console.log(totaldepartment)
testNameToAdd=testInfo[totaldepartment[t]].heading;

  //add-Group-Tests
for (let tt = 0; tt < repo.sepratePageReport.length; tt++) {

  if(totaldepartment[t]==repo.sepratePageReport[tt].Partof){

    totalTest.push(repo.sepratePageReport[tt])

  }
}


addReportTemplate(totalTest,testNameToAdd,patientDeatels,testInfo[totaldepartment[t]].comment[1]!='null'?testInfo[totaldepartment[t]].comment:undefined)

anotherHeading=[];
if(addIdOneTime==0){
  
  let select = document.querySelector(".patient-button-contenier");
  let anchortag = `<div class="patient-button">
    <button class="user-link"><a class="linkclass${uniqueIdForPage.count}" href="#id${uniqueIdForPage.count}">${patientDeatels.Patientname}</a></button>
  <img width="20px" class="deleteicon" src="./svg images/trash-can-svgrepo-com (1).svg" alt="">
  <img width="20px" class="printicon printicon${uniqueIdForPage.count}" src="./svg images/printer-print-svgrepo-com.svg" alt="">
</div>`;
  select.insertAdjacentHTML("beforeend", anchortag);

  let counterForClassName=uniqueIdForPage.count;

document.querySelector(`.printicon${counterForClassName}`).addEventListener('click',function () {

  console.log(document.querySelector(`.linkclass${counterForClassName}`),document.querySelector(`.printicon${counterForClassName}`),counterForClassName)

let elementsToSave=document.querySelector(`.linkclass${counterForClassName}`).getAttribute('href').replace('#','');
console.log(elementsToSave)

let elementsToHide=document.querySelectorAll('.reporttemplate');

for (let i = 0; i < elementsToHide.length; i++) {
 
  
  if(elementsToHide[i].getAttribute('id')!=elementsToSave){
    elementsToHide[i].style.display='none';
  }
  

}

document.title=`${patientDeatels.Patientname} - ${patientDeatels.patientId}`;
window.print()
document.title='Document';

for (let i = 0; i < elementsToHide.length; i++) {

  if(elementsToHide[i].getAttribute('id')!=elementsToSave){
    elementsToHide[i].style.display='flex';
  }
}

})

}

addIdOneTime=1;
testnameaddonlyonetime=0;
testNameToAdd=undefined;
leftTest.count=0;
totalTest=[];

}
console.log(totaldepartment)

// repo.sepratePageReport.length !== 0 end
}

console.log(createReport)


addReportTemplate(createReport,undefined,patientDeatels)
anotherHeading=[];
testToPerform=[];
leftTest.count=0;

if(addIdOneTime==0){

  let select = document.querySelector(".patient-button-contenier");
  let anchortag = `<div class="patient-button">
    <button class="user-link"><a class="linkclass${uniqueIdForPage.count}" href="#id${uniqueIdForPage.count}">${patientDeatels.Patientname}</a></button>
  <img width="20px" class="deleteicon" src="./svg images/trash-can-svgrepo-com (1).svg" alt="">
  <img width="20px" class="printicon printicon${uniqueIdForPage.count}" src="./svg images/printer-print-svgrepo-com.svg" alt="">
</div>`;
  select.insertAdjacentHTML("beforeend", anchortag);

  let counterForClassName=uniqueIdForPage.count;
  console.log(counterForClassName)
document.querySelector(`.printicon${counterForClassName}`).addEventListener('click',function () {

  console.log(document.querySelector(`.linkclass${counterForClassName}`),document.querySelector(`.printicon${counterForClassName}`),counterForClassName)

let elementsToSave=document.querySelector(`.linkclass${counterForClassName}`).getAttribute('href').replace('#','');
console.log(elementsToSave)

let elementsToHide=document.querySelectorAll('.reporttemplate');

for (let i = 0; i < elementsToHide.length; i++) {
 
  console.log(elementsToHide[i].getAttribute('id'),elementsToSave)
  if(elementsToHide[i].getAttribute('id')!=elementsToSave){
    elementsToHide[i].style.display='none';
  }
  

}

document.title=`${patientDeatels.Patientname} - ${patientDeatels.patientId}`;
window.print()
document.title='Document';

console.log('excecuted')
for (let i = 0; i < elementsToHide.length; i++) {

  if(elementsToHide[i].getAttribute('id')!=elementsToSave){
    elementsToHide[i].style.display='flex';
  }
}

})

}

console.log(patientReportToSave)
//patientReportToSave.pop()
console.log(patientReportToSave)

}


function hasAlphabets(str) {

  let regex = /[a-zA-Z]/;
  return regex.test(str);
}

function removeMatchingStrings(str) {
  const regex = /(M|F)\s-\s/g; 
  return str.replace(regex, '');
}

function testAddToTemplate(arr,className,ii,deparmentPrintValue,testNameForFew,grouptestcomment) {


////////add department
console.log(deparmentPrintValue)
if(deparmentPrintValue == 0){
let divdep = document.querySelector(`.all-test-container${className}`);  
let deparment =`<div class="deparment"><p contenteditable="true">${arr[ii].department}</p></div>`;
divdep.insertAdjacentHTML('beforeend', deparment);}
////////////////

////////add test name

if(testNameForFew !== undefined){

  if(testnameaddonlyonetime==0){
    
let divtestname = document.querySelector(`.all-test-container${className}`);  
let testname =`<div class="testname22"><p contenteditable="true">${testNameForFew}</p></div>`;
divtestname.insertAdjacentHTML('beforeend', testname);
testnameaddonlyonetime=1;
}
}
console.log(arr[ii],arr[ii].heading)
if(arr[ii].heading!=undefined && anotherHeading.includes(arr[ii].heading)==false){
  let testdiv = document.querySelector(`.all-test-container${className}`);  
  console.log(arr[ii],arr[ii].heading)
let html =`<div class="another-heading">
<p contenteditable="true">${arr[ii].heading}</p>
</div>`
  testdiv.insertAdjacentHTML('beforeend', html);
  anotherHeading.push(arr[ii].heading)
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

console.log(arr[ii])
let patientRefferance=patientReportToSave[patientReportToSave.length-1].patientDeatels.patientId;

  let testdiv = document.querySelector(`.all-test-container${className}`);  

  let tests;

  let indexx=0;
if(arr[ii].testName != 'Widal'){
  tests =`<div class='Patienttest Patienttest${classPatienttest}'>
<p class="testNamevalue testNamevalue${classtestNamevalue}">${arr[ii].testName}</p>
<div class="resultvalue resultvalue${classresultvalue}">
<p class="b${classNameForInputAndValue} para">${arr[ii].value}</p>
  <input class="a${classNameForInputAndValue} textarea hide input" type="text">
</div>
<p contenteditable="true" class="unitvalue unitvalue${classunitvalue}">${arr[ii].unit}</p>
${`<p class="normalRangevalue normalRangevalue${classnormalRangevalue}">${arr[ii].normalRange.length==1?`<span contenteditable="true" department=${arr[ii].department} index=${indexx++}>${arr[ii].normalRange[0]}</span>`:arr[ii].normalRange.map(function(value) {
  if(value!=''){return `<span contenteditable="true" department=${arr[ii].department} index=${indexx++}>${value}</span><br>`;}
})}</p>`.replaceAll(',','')}</div>`;
}
else{
newStructureReport(arr[ii],`${alphabet[randomNumBetween(0,24)]}${randomNumBetween(100,100000)}`,className,classPatienttest,patientRefferance)
  return;}

  testdiv.insertAdjacentHTML('beforeend', tests);

let tn=arr[ii].testName;





if(arr[ii].comment!=undefined){
  console.log(arr[ii],arr[ii].comment)
let html =`<div class="comment-for-test">
<p class="comment-heading">${arr[ii].comment[0]}</p>
<p class="comment-paragraph">${arr[ii].comment[1]}</p>
</div>`
  testdiv.insertAdjacentHTML('beforeend', html);
}

///////////////////

  alignMaker(`testNamevalue${classtestNamevalue}`,`testName`)
  alignMaker(`resultvalue${classresultvalue}`,`result`)
  alignMaker(`unitvalue${classunitvalue}`,`unit`)
  alignMaker(`normalRangevalue${classnormalRangevalue}`,`normalRange`)

if(ii==arr.length-1){
  if(grouptestcomment != undefined){
    console.log(grouptestcomment)
  let html =`<div class="comment-for-test">
  <p class="comment-heading">${grouptestcomment[0]}</p>
  <p class="comment-paragraph">${grouptestcomment[1]}</p>
  </div>`
    testdiv.insertAdjacentHTML('beforeend', html);
  }}

 


let normalRangeClassName=`.normalRangevalue${classnormalRangevalue}`;
console.log(document.querySelector(normalRangeClassName).children)

for (let y = 0; y < document.querySelector(normalRangeClassName).children.length; y++) {
  document.querySelector(normalRangeClassName).children[y].addEventListener('input', function() {
    let indexForNormalRange=document.querySelector(normalRangeClassName).children[y].getAttribute('index')
    let departmentForNormalRange=document.querySelector(normalRangeClassName).children[y].getAttribute('department')
    let updetedNormalRange=document.querySelector(normalRangeClassName).children[y].textContent;
let testNameUpdateNormalRange=document.querySelector(normalRangeClassName).parentElement.children[0].textContent
    
console.log(indexForNormalRange,updetedNormalRange,departmentForNormalRange)

if(updetedNormalRange.includes('-')){
  arr[ii].normalRange[indexForNormalRange]=updetedNormalRange;
console.log(availableTest)

}
else{alert('Add Hyphen - Between Two Numbers')}

  })
  
}




  let clasToAddStle=`.b${classNameForInputAndValue}`;
  document.querySelector(clasToAddStle).addEventListener('contextmenu', function(event) {

    // Prevent the default right-click menu from appearing
    event.preventDefault();
    // Do something when the right-click event occurs
    textEditer(document.querySelector(clasToAddStle))

    
});


  document.querySelector(`.Patienttest${classPatienttest}`).addEventListener('click',function (e) {

    let target= document.querySelector(`.Patienttest${classPatienttest}`);
  
    let clasexistornot=document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[1].classList.contains('hide');

if(e.target==target){
    if(clasexistornot == false){

      let text=document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[1].value.replaceAll(' ','');
     

      document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[1].classList.add('hide')

      document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.remove('hide')

      document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].textContent=text;

     
///////////save report in database in future
console.log(patientReportToSave)
let patientReportDataToSave = JSON.parse(sessionStorage[patientRefferance]);

////////////////////////////////////


console.log(hasAlphabets(text));
console.log(arr[ii].testName)

if(arr[ii].normalRange.length == 1){
  if(hasAlphabets(text)==false){

let normalRangeForTest=arr[ii].normalRange[0].replaceAll(' ','').split('-');
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

if(arr[ii].testName=='Haemoglobin'){

console.log(patientReportDataToSave.patientDeatels.gender)
if(patientReportDataToSave.patientDeatels.gender=='MALE'){

const originalString = arr[ii].normalRange[0];
const newString = removeMatchingStrings(originalString);

console.log(newString);

let normalRangeForTest=newString.replaceAll(' ','').split('-');
let checkNormalRangeOfValue=checkNormalRange(text,normalRangeForTest);
if(checkNormalRangeOfValue=='abnomalValue'){
document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.add(checkNormalRangeOfValue)
}
else{
document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.remove('abnomalValue')
}

}

if(patientReportDataToSave.patientDeatels.gender=='FEMALE'){

const originalString = arr[ii].normalRange[1];
const newString = removeMatchingStrings(originalString);

console.log(newString);

  let normalRangeForTest=newString.replaceAll(' ','').split('-');
  let checkNormalRangeOfValue=checkNormalRange(text,normalRangeForTest);
if(checkNormalRangeOfValue=='abnomalValue'){
  document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.add(checkNormalRangeOfValue)
}
else{
  document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.remove('abnomalValue')
}

}

}


if(arr[ii].testName=='Triglycerides (TG)'){
console.log(text)
if(parseFloat(text)>150){
  document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.add('abnomalValue')
}
else{
  document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.remove('abnomalValue')
}

}

if(arr[ii].testName=='Cholesterol HDL'){
console.log(text)
  if(parseFloat(text) < 66){
    document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.add('abnomalValue')
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

    console.log(document.querySelector(`.resultvalue${classresultvalue}`).children[1])

    let nextclasssecondcher;

    let nextclassfirstcher=document.querySelector(`.resultvalue${classresultvalue}`).children[1].classList[0][0];
    
    if(document.querySelector(`.resultvalue${classresultvalue}`).children[1].hasAttribute('jump')==false){
     nextclasssecondcher=parseFloat(document.querySelector(`.resultvalue${classresultvalue}`).children[1].classList[0].substring(1))+1;
    }else{
      let jump =Number(document.querySelector(`.resultvalue${classresultvalue}`).children[1].getAttribute('jump'))
      nextclasssecondcher=parseFloat(document.querySelector(`.resultvalue${classresultvalue}`).children[1].classList[0].substring(1))+jump;
    }

    let nextclass=nextclassfirstcher+nextclasssecondcher
  
    
    
    console.log(nextclassfirstcher,'  ',nextclasssecondcher,'  ',nextclass,'  ')
   
try{
    document.querySelector(`.b${nextclasssecondcher}`).classList.add('hide')
    document.querySelector(`.a${nextclasssecondcher}`).classList.remove('hide')
    document.querySelector(`.${nextclass}`).focus()

    }catch(err){
      console.log('last input')
    }
   

///////////save report in database in future
console.log(patientReportToSave)
let patientReportDataToSave = JSON.parse(sessionStorage[patientRefferance]);

////////////////////////////////////



  
  console.log(hasAlphabets(text));
  console.log(arr[ii].testName)

  if(arr[ii].normalRange.length == 1){
    if(hasAlphabets(text)==false){

  let normalRangeForTest=arr[ii].normalRange[0].replaceAll(' ','').split('-');
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

if(arr[ii].testName=='Haemoglobin'){

  console.log(patientReportDataToSave.patientDeatels.gender)
if(patientReportDataToSave.patientDeatels.gender=='MALE'){

  const originalString = arr[ii].normalRange[0];
const newString = removeMatchingStrings(originalString);

console.log(newString);

  let normalRangeForTest=newString.replaceAll(' ','').split('-');
  let checkNormalRangeOfValue=checkNormalRange(text,normalRangeForTest);
if(checkNormalRangeOfValue=='abnomalValue'){
  document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.add(checkNormalRangeOfValue)
}
else{
  document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.remove('abnomalValue')
}

}

if(patientReportDataToSave.patientDeatels.gender=='FEMALE'){

  const originalString = arr[ii].normalRange[1];
  const newString = removeMatchingStrings(originalString);
  
  console.log(newString);
  
    let normalRangeForTest=newString.replaceAll(' ','').split('-');
    let checkNormalRangeOfValue=checkNormalRange(text,normalRangeForTest);
  if(checkNormalRangeOfValue=='abnomalValue'){
    document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.add(checkNormalRangeOfValue)
  }
  else{
    document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.remove('abnomalValue')
  }

}

}


if(arr[ii].testName=='Triglycerides (TG)'){
console.log(text)
  if(parseFloat(text)>150){
    document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.add('abnomalValue')
  }
  else{
    document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.remove('abnomalValue')
  }

}

if(arr[ii].testName=='Cholesterol HDL'){
  console.log(text)
    if(parseFloat(text) < 66){
      document.querySelector(`.Patienttest${classPatienttest}`).children[1].children[0].classList.add('abnomalValue')
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
  if(document.querySelector(`#RefByList`).children.length>0){
document.querySelector(".form").style.display='flex';
document.querySelector(".makereport").style.display='block';
document.querySelector(".add-patient-container").style.display='none';

let sampleCollectionDate=new Date().toLocaleString();

document.querySelector(".date").value=sampleCollectionDate;

let alphabetId=alphabet[randomNumBetween(0,25)];
document.querySelector(".patientID").value=`${alphabetId}${randomNumBetween(1000,10000)}${randomNumBetween(1000,10000)}`;
}
else{alert('add client')}
})


select.addEventListener("change", function() {
  
  const selectedOption = select.options[select.selectedIndex].textContent;
  console.log(selectedOption)
  input.value = selectedOption.replace('female','').replace('male','');
  input.focus()
  if(selectedOption=='Mrs.'||selectedOption=='Ms.'||selectedOption=='baby female'){
  
    x.options.selectedIndex=1;
  }
  
  if(selectedOption=='Mr.'||selectedOption=='baby male'){ 
  
    x.options.selectedIndex=0;
  
  }

});


for (let i = 0; i < document.querySelector(`.input-container`).children.length; i++) {

  let nextinput=i+1;

  if(i < document.querySelector(`.input-container`).children.length-1){
  document.querySelector(`.input-container`).children[i].addEventListener("keypress", function(event) {
    let key = event.key;
    if (key == "Enter") {

      document.querySelector(`.input-container`).children[nextinput].focus()
  
    }
  })
}
}




function visible(i){
document.querySelector(`.available-tests${i}`).style.display='flex';
document.querySelector(`.hidden66${i}`).style.transition='1s';
document.querySelector(`.hidden66${i}`).style.display= 'flex';
document.querySelector(`.department-name${i}>img`).style.transition='0.2s';
document.querySelector(`.department-name${i}>img`).style.transform='rotate(180deg)';

}

function visiblityHide(i){
  document.querySelector(`.available-tests${i}`).style.display='none';
  document.querySelector(`.hidden66${i}`).style.display='none';
  document.querySelector(`.department-name${i}>img`).style.transition='0.2s';
  document.querySelector(`.department-name${i}>img`).style.transform='rotate(0deg)';
  }


function pritnDepartmentAndtests(){

  get('availableTest',store2)
  .then((data) => {
 
    let departments;

console.log(data)
if(data==undefined){

  set('availableTest', availableTest2,store2)
  .then(() => {
    console.log('saved tests');
  
  })

  departments=Object.keys(availableTest.departments);
}else{

  availableTest=data;
  departments=Object.keys(availableTest.departments);
}
 

for(let i = 0; i <departments.length; i++) {


  let div = document.querySelector(`.available-department-container`);
  let html = `<div class="available-department">
  <div class="hidden66  hidden66${i}">

  </div>
  <div class="department-name department-name${i}">
    <p>${departments[i]}</p>
    <img src="./svg images/up-arrow-svgrepo-com.svg" width="20px" alt="">
  </div>
  
  <div class="available-tests  available-tests${i}">
  </div>
</div>`;
  div.insertAdjacentHTML("beforeend", html);
  
 
document.querySelector(`.hidden66${i}`).addEventListener('click',function () {
  visiblityHide(i)
})
document.querySelector(`.department-name${i}`).addEventListener('click',function () {
  visible(i)
})



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


console.log(Partof)

Partof.sort((a, b) => {

  let nameA = a.toUpperCase();
  let nameB = b.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

for(let ii = 0; ii <Partof.length; ii++){

  let div = document.querySelector(`.available-tests${i}`);
  let html = `<button class="but group-test-different-color" departments=${testToPrint[ii].department}  Partof=${Partof[ii]}>${Partof[ii]}</button>`;
  div.insertAdjacentHTML("beforeend", html);
  choosetest.push(document.querySelector(`.available-tests${i}`).children[ii])
}

console.log(testToPrint)

const testToPrint2 = [...testToPrint].sort((a, b) => {
  const nameA = a.testName.toUpperCase();
  const nameB = b.testName.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});


console.log(testToPrint2)

for(let ii = 0; ii < testToPrint2.length; ii++){

  if (testToPrint2[ii].show === false) {
    testToPrint2.splice(ii, 1);
    ii--; 
    continue;
  }
  let div = document.querySelector(`.available-tests${i}`);

  let html = `<button class="but" departments=${testToPrint2[ii].department}>${testToPrint2[ii].testName}</button>`;

  div.insertAdjacentHTML("beforeend", html);
  
  choosetest.push(document.querySelector(`.available-tests${i}`).children[ii+Partof.length])

} 


}


groupTest(66)
addGroupedTests()
alltests()
document.querySelector(`.makereport`).addEventListener('click',function () {

  for (let i = 0; i < testToPerform.length; i++) {
    get(testToPerform[i].testName,store5)
    .then((data) => {

      console.log(data,testToPerform);
      if(data!==undefined){
    totalTestPerformed.push({testName:testToPerform[i].testName,testPrice:data.price})
    }
    else{totalTestPerformed.push({testName:testToPerform[i].testName,testPrice:'0'})}

    if(i == testToPerform.length-1){
      if(document.querySelector(`.patient-database-container`) !== null){
        document.querySelector(`.patient-database-container`).remove()
      }
      performTest()
    }

    })
    
    
  }

  

})
})


}

///
pritnDepartmentAndtests()




function groupTest(i) {
  let div = document.querySelector(`.available-department-container`);
  let html = `<div class="available-department">
  <div class="hidden66  hidden66${i}">

  </div>
  <div class="department-name department-name${i}">
    <p>GROUP TESTS</p>
    <img src="./svg images/up-arrow-svgrepo-com.svg" width="20px" alt="">
  </div>
  
  <div class="available-tests  available-tests${i}"></div>
</div>`;
  div.insertAdjacentHTML("beforeend", html);

  document.querySelector(`.hidden66${i}`).addEventListener('click',function () {
    visiblityHide(i)
  })
  document.querySelector(`.department-name${i}`).addEventListener('click',function () {
    visible(i)
  })
}





function displayGroupTestModalWindow() {


  document.querySelector(`.add-Group-Tests`).addEventListener('click',function () {

    addHtmlInModalWindow(testToPerform)
    chaining()
    document.querySelector(`.modalwindow-for-group-test`).style.display='flex';   
    document.querySelector(`.modalwindow-for-group-test`).style.transition='0.2s';   
    document.querySelector(`.modalwindow-for-group-test`).style.transform= 'scale(1)';
  })
}

displayGroupTestModalWindow()

function addHtmlInModalWindow(testToPerform) {
  console.log('vvvv')
  performTest(true)
  console.log(testToPerform,usersGroupTestCreater)
  
  let repo1=usersGroupTestCreater.createReport;
  let repo2=usersGroupTestCreater.repo.sepratePageReport;
  console.log(repo1,repo2)

  let div = document.querySelector(`.modalwindow-for-group-test`);
  let html = `<div>
  <div>
  <p>Group's Name</p>
  <input placeholder="Add Group Name" type="text">
</div>
<div>
  <button class="createGroup">create</button>
</div>
</div>

      <div class="selected-test-container">
        <div><p>linked!</p>
        </div>
        <div>
          <p>Selected-Tests</p>

          <div class="img-cont"> 
        <img class="chain" src="./svg images/link-chain-svgrepo-com.svg" width="21px" alt=""> 
            <img class="mark" src="./svg images/check-small-svgrepo-com.svg" width="21px"  alt="">
          </div>
        </div>
      <div class="selected-test">

      </div>
    </div>`;
  div.insertAdjacentHTML("beforeend", html);

  createGroup()
  for (let i = 0; i < testToPerform.length; i++) {

    let div = document.querySelector(`.selected-test`);
  let html = `<button class="but">${testToPerform[i].testName}</button>`;
  div.insertAdjacentHTML("beforeend", html);

  document.querySelector(`.selected-test`).children[i].style.backgroundColor='white'; 
  document.querySelector(`.selected-test`).children[i].addEventListener('click',function () {
 
    
  
      document.querySelector(`.selected-test`).children[i].style.backgroundColor='lightgreen'; 
      
      testsToMerge.push(document.querySelector(`.selected-test`).children[i])
     
   

    })
    
  }

}




function chaining() {
  console.log('vvvv')
  document.querySelector(`.chain`).addEventListener('click',function () {
 
   
     
let addin=testsToMerge[0].textContent;
let addinto=[];


for (let i = 0; i < testsToMerge.length; i++) {

  for (let ii = 0; ii < testToPerform.length; ii++) {

  if(testsToMerge[i].textContent==testToPerform[ii]['testName']){

    addinto.push(testToPerform[ii])
    break;
  }

}
}
console.log(testsToMerge,addin,testToPerform,addinto)
let repo2=usersGroupTestCreater.repo.sepratePageReport;
let createRepo=[];

let color1 =randomNumBetween(100, 250);
let color2 =randomNumBetween(100, 250);
let color3 =randomNumBetween(100, 250);

      for (let i = 0; i < addinto.length; i++){
        testsToMerge[i].style.backgroundColor=`rgb(${color1},${color2},${color3})`;
        //console.log(testsToMerge[i].textContent)
 
       
        if(addinto[i].Partof!=undefined){

          console.log(addinto[i]['testName'])
        for(let ii = 0; ii < usersGroupTestCreater.repo.sepratePageReport.length; ii++){
           
          if(usersGroupTestCreater.repo.sepratePageReport[ii].Partof==addinto[i].testName){
            createRepo.push(usersGroupTestCreater.repo.sepratePageReport[ii])


          }
            
         
          }

        }
       else{ 

        console.log(addinto[i]['testName'])

        for (let ii = 0; ii < usersGroupTestCreater.createReport.length; ii++){

          if(usersGroupTestCreater.createReport[ii].testName==addinto[i].testName){

            createRepo.push(usersGroupTestCreater.createReport[ii])
            let index = usersGroupTestCreater.createReport.findIndex(obj => obj.testName === addinto[i].testName);

                if (index > -1) {
                  usersGroupTestCreater.createReport.splice(index, 1);
                          }

          }
          
        }

      }
      }

for (let i = 0; i < createRepo.length; i++) {

  let index = repo2.findIndex(obj => obj.testName === createRepo[i].testName);

  if (index > -1) {
    repo2.splice(index, 1);
            }

}

      // for (let i = 1; i < testsToMerge.length; i++) {
      //   testsToMerge[i].style.backgroundColor='white';
      //   console.log(testsToMerge[i].textContent)
      // }
      change=1;
      let repo={sepratePageReport:usersGroupTestCreater.repo.sepratePageReport}

      grouping.push(createRepo)
       groupedTests = {repo,createReport:usersGroupTestCreater.createReport,groupedTests:grouping,newPageReport:usersGroupTestCreater.newPageReport};
    
      console.log(createRepo,groupedTests,usersGroupTestCreater)

      testsToMerge=[];
      
      document.querySelector(`.selected-test-container>div:nth-child(1)>p`).style.transition='0.2s'; 
      document.querySelector(`.selected-test-container>div:nth-child(1)>p`).style.visibility='visible'; 
     
      document.querySelector(`.selected-test-container>div:nth-child(1)>p`).style.transform= 'scale(2.5)';
      
      setTimeout(() => {
      
        document.querySelector(`.selected-test-container>div:nth-child(1)>p`).style.visibility='hidden';
        document.querySelector(`.selected-test-container>div:nth-child(1)>p`).style.transform= 'scale(0)';
      
      }, 1000); 
  })

}

function createGroup() {
  document.querySelector('.createGroup').addEventListener('click',function () {

    console.log(usersGroupTestCreater,change)
    let groupName=document.querySelector('.modalwindow-for-group-test>div:nth-child(1)>div:nth-child(1)>input').value.replaceAll(' ','$');
console.log(groupName)
if(groupName!=''){

  if(change==0){
    set(`${groupName}`, usersGroupTestCreater,store)
    .then(() => {
      console.log('saved the user_id');
    })
    }

  if(change==1){
set(`${groupName}`, groupedTests,store)
.then(() => {
  console.log('saved the user_id');
  change=0;
})
}

document.querySelector('.modalwindow-for-group-test>div:nth-child(1)>div:nth-child(1)>input').value='';


for (let i = document.querySelector('.modalwindow-for-group-test').children.length-1; i >= 0; i--) {
  
  document.querySelector('.modalwindow-for-group-test').children[i].remove()
}

document.querySelector('.modalwindow-for-group-test').style.display='none';


 testToPerform=[]
 usersGroupTestCreater=undefined;
 groupedTests=undefined;
 grouping=[];

location.reload()

  }
  else{alert("enter group's name")}

  })
}


function addGroupedTests() {

  console.log(document.querySelector('.available-tests66'))



  keys(store).then((keys) => {
    console.log('keys');
    console.log(keys);

    let div = document.querySelector(`.available-tests66`);

    for (let i = 0; i < keys.length; i++) {
      let html = `<div style="display: inline-block;margin: 2px;">
      <div style="display: flex;align-items: center;background-color: rgb(241, 238, 238);gap: 2px;padding: 2.5px;border-radius: 5px;"><button class="fromgroupdatabase fromgroupdatabase${i}" style="border: none;padding: 5px;cursor: pointer;">${keys[i].replaceAll('$',' ')}</button>
      <img class="deletefromdatabase${i}" width="15px" style="cursor: pointer;" src="./svg images/trash-can-svgrepo-com (1).svg" alt="">
      </div>
      </div>`;
      div.insertAdjacentHTML("beforeend", html);
      printGroupedTests(`.fromgroupdatabase${i}`,`.deletefromdatabase${i}`)

      groupTestButtonElements.push(document.querySelector(`.fromgroupdatabase${i}`))
    }

    console.log(groupTestButtonElements);

  });


}




function saveNormalRange() {

  set('availableTest', availableTest,store2)
.then(() => {
  console.log('saved tests');

})
  console.log('inside')
}

