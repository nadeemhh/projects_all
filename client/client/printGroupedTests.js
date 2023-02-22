


function printGroupedTests(className,className2) {

    document.querySelector(className).addEventListener('click',function () {
        let text=document.querySelector(className).textContent;
      let element=document.querySelector(className);

        if(element.classList.contains('secleted')==false){
            testToPerform.push({testName:text,Partof:'group'})
            element.classList.add('secleted')
            }
            else{
              testToPerform = testToPerform.filter(object => {
            return object.testName !== element.textContent;
          });
         
          element.classList.remove('secleted')
            }

console.log(testToPerform,text)

    })

    document.querySelector(className2).addEventListener('click',function () {

let deleteTest=document.querySelector(className).textContent.replaceAll(' ','$')
console.log(deleteTest)

del(deleteTest,store)
    .then(() => {
      console.log('successfully deleted.');
      location.reload()
    })

    })

}



function printGTests(test,patientDeatels) {

    let removeColor=document.querySelector(`.available-tests66`).children;

    for (let i = 0; i < removeColor.length; i++) {
if(removeColor[i].classList.contains('secleted')==true){
        removeColor[i].classList.remove('secleted')
    }
      }


  console.log(test,patientDeatels)
get(test.testName.replaceAll(' ','$'),store)
    .then((data) => {
      console.log(data);
    


if(data.groupedTests !== undefined){
  let testNameToAdd=undefined;
for (let i = 0; i < data.groupedTests.length; i++) {

    switch (data.groupedTests[i][0].Partof) {
        case 'cbc':
          testNameToAdd = "Complete Blood Count (CBC)";
          break;
      }
    addReportTemplate(data.groupedTests[i],testNameToAdd,patientDeatels)
    testToPerform=[];
leftTest.count=0;
testnameaddonlyonetime=0;
}
    }
console.log(data.repo.sepratePageReport)

///////////////////////////////////

if(data.repo.sepratePageReport.length !== 0){

    let totaldepartment=[];
    for (let t = 0; t < data.repo.sepratePageReport.length; t++) {
    
     if(totaldepartment.includes(data.repo.sepratePageReport[t].Partof) === false){
      totaldepartment.push(data.repo.sepratePageReport[t].Partof)
    
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
           case 'Widal':
            testNameToAdd = "Widal Test ( Slide Method) *";
           break;
           case 'LipidProfile':
           testNameToAdd = "Lipid Profile";
           break;
      }
    
    
    for (let tt = 0; tt < data.repo.sepratePageReport.length; tt++) {
    
      if(totaldepartment[t]==data.repo.sepratePageReport[tt].Partof){
    
        totalTest.push(data.repo.sepratePageReport[tt])
    
      }
    }
    
    console.log(totalTest,testNameToAdd,patientDeatels)
    addReportTemplate(totalTest,testNameToAdd,patientDeatels)
    
    addIdOneTime=1;
    testnameaddonlyonetime=0;
    testNameToAdd=undefined;
    leftTest.count=0;
    totalTest=[];
    
    }
    console.log(totaldepartment)

}

if(data.createReport.length>0){
    addReportTemplate(data.createReport,undefined,patientDeatels)
    testToPerform=[];
leftTest.count=0;
}

////////////////////////////

})


 

}

