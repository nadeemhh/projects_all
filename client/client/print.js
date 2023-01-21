console.log('hello')




let leftTest={count:0};



function randomNumBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
function addReportTemplate() {
    

for (let i = 0; i < arr.length; i++) {
    
       
    let className = randomNumBetween(1, 9000);
    let className2 = 'template'+randomNumBetween(1, 6000);
    let div = document.querySelector("#root");
let ReportTemplate =`<div  style="height:29.7cm;width:21cm; margin-bottom: 15px;margin-left: auto;margin-right: auto;page-break-before: always;display: flex;flex-direction: column;justify-content: space-between;background-color: rgb(255, 255, 255);" class='${className2} reporttemplate'>
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
<div class="all-test-container all-test-container${className}"></div>
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
<img style="height: 100%; width: 100%;transform: translateY(20%);" src="./ins.png" alt="">
</div>
</div>
</div>`;

div.insertAdjacentHTML('beforeend', ReportTemplate);

for (let ii = leftTest.count; ii < arr.length; ii++) {
    console.log(leftTest.count,'arr',arr[ii])
    let testdiv = document.querySelector(`.all-test-container${className}`);  
    let tests =`<div class='Patienttest'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam reiciendis quas id inventore fugiat doloremque consequatur assumenda, recusandae magni hic vitae aperiam nobis cumque similique necessitatibus adipisci iste ad possimus! ${arr[ii]}</p></div>`;
    testdiv.insertAdjacentHTML('beforeend', tests);

    leftTest.count=ii
  
    let spaceLeft=  sapceCheacker(); 


    console.log(arr,spaceLeft)
    if(leftTest.count == arr.length-1){break;}
    if(spaceLeft>-1){
      document.querySelector(`.all-test-container${className}`).children[document.querySelector(`.all-test-container${className}`).children.length-1].remove()

        
        console.log(document.querySelector(`.${className2}`))
        console.log(`no space is left for footer .${className2}`)
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


  // window.print()
  // setTimeout(() => {
  //   window.location.href = "http://127.0.0.1:5500/report/index.html";
  // }, 1000);
   
  console.log(location.pathname)


