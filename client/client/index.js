console.log('hello')

//console.log(location.pathname)
arr=availableTest;
console.log(arr)
let leftTest={count:0};


function randomNumBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
function addReportTemplate() {


if(location.pathname == '/client/index.html'){

    let select = document.querySelector(".main");
let totalReportCounter = ` <div class="Patientreportcount">
<button><a class='printreport' href="./print.html">print</a></button>
</div>`;
select.insertAdjacentHTML("afterbegin", totalReportCounter);


}

for (let i = 0; i < arr.length; i++) {   
       

    let className = randomNumBetween(1, 9000);

    let className2 = 'template'+randomNumBetween(1, 6000);

    let div = location.pathname == '/client/index.html'? document.querySelector(".main"):document.querySelector("#root")

let ReportTemplate =`<div  style="height:29.7cm;width:21cm; margin-bottom: 15px;margin-left: auto;margin-right: auto;page-break-before: always;display: flex;flex-direction: column;justify-content: space-between; ${location.pathname == '/client/index.html'?'box-shadow: 5px 5px #41404054;':''}background-color: rgb(255, 255, 255);" class='${className2} reporttemplate'>
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
<div class="deparment"><p>HAEMATOLOGY</p></div>
<div class='Patienttest0'>
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
${location.pathname == '/client/index.html'?'<img style="height: 100%; width: 100%;transform: translateY(-18%);" src="./ins.png" alt="">':'<img style="height: 100%; width: 100%;transform: translateY(20%);" src="./ins.png" alt="">'}
</div>
</div>
</div>`;

div.insertAdjacentHTML('beforeend', ReportTemplate);

for (let ii = leftTest.count; ii < arr.length; ii++) {




    let testdiv = document.querySelector(`.all-test-container${className}`);  
    let tests =` <div class='Patienttest'>
<p class="testNamevalue testNamevalue${ii}">Urea (Blood)</p>
<p class="resultvalue resultvalue${ii}">42.29</p>
<p class="unitvalue unitvalue${ii}">mg/dl</p>
<p class="normalRangevalue normalRangevalue${ii}">16.6 - 48.5</p>`;
    testdiv.insertAdjacentHTML('beforeend', tests);

    alignMaker(`testNamevalue${ii}`,`testName`)
    alignMaker(`resultvalue${ii}`,`result`)
    alignMaker(`unitvalue${ii}`,`unit`)
    alignMaker(`normalRangevalue${ii}`,`normalRange`)
    leftTest.count=ii
  
    let spaceLeft=  sapceCheacker(); 


    //console.log(arr,spaceLeft)
    if(leftTest.count == arr.length-1){break;}
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

addReportTemplate() 

function sapceCheacker() {
    
    let spaceLeft=document.querySelectorAll('.Patienttest')[document.querySelectorAll('.Patienttest').length-1].getBoundingClientRect().bottom-document.querySelectorAll('.Reportfotter')[document.querySelectorAll('.Reportfotter').length-1].getBoundingClientRect().top;

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

  document.querySelector(`.${fclassname}`).style.transform=`translateX(-${minus}px)`;
}







