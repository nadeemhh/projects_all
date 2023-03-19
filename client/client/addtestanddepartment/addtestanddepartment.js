document.querySelector(`.add-department`).addEventListener('click',function () {
    
    if(document.querySelector('.modalwindow-for-all')==null){
    showGlobalModalWindow(undefined,undefined)
    addDepartment()
  }
})


document.querySelector(`.add-new-test`).addEventListener('click',function () {
    
    if(document.querySelector('.modalwindow-for-all')==null){
    showGlobalModalWindow(undefined,undefined)
    addNewTest()
  }
})



function addDepartment() {

  
      const div = document.querySelector(".modalwindow-for-all");
  let html = `<div class="header-text-form">
  <div>
    <p>Department's Name*</p>
    <input class="Department-Name-to-add" type="text">
  </div>
  <div class="client-submit"><button class="client-submit-button">Submit</button></div>
        </div>`;
  div.insertAdjacentHTML("beforeend", html);

  document.querySelector(`.Department-Name-to-add`).focus();

  document.querySelector(`.client-submit-button`).addEventListener('click',function () {
  
  let departmentName=document.querySelector(`.Department-Name-to-add`).value;
console.log(departmentName)

     if(departmentName!=''){
        availableTest.departments[departmentName.replaceAll(' ','-')]=[];

        set('availableTest', availableTest,store2)
        .then(() => {
          console.log('saved tests');
        location.reload()
        })
  
      
     }else{alert("Enter Department's Name")}
  })
  
  }


  function addNewTest() {

  let allDepartment=Object.keys(availableTest.departments);
    const div = document.querySelector(".modalwindow-for-all");
let html = ` <div class="add-test-form">
<div><h2>Add New Test</h2></div>
<div>
    <select id="select-Department">
        <option>select Department</option>
    </select>
  </div>

  <div>
   <p>New Page</p>
  <input class="new-test-page" type="checkbox" checked>
  </div>

  <div class="testdeatelparent">
<div class="testdeatel1"> <div>
    <p>Test Name*</p>
    <input class="new-test-name" type="text">
  </div>
  <div>
      <p>Value*</p>
      <input class="new-test-value" type="text">
    </div>
    <div>
      <p>Unit*</p>
      <input class="new-test-unit" type="text">
    </div></div>

<div class="testdeatel2"> <div>
    <p>Normal Range*</p>
    <input class="new-test-NormalRange" type="text">
  </div>
  <div>
    <p>Specimen*</p>
    <input class="new-test-Specimen" type="text">
  </div></div>
</div>
  <div>
    <p>Comment*</p>
   <textarea id="test-Comment" cols="40" rows="10"></textarea>
  </div>
<div class="client-submit-new-test"><button class="client-submit-button">Submit</button></div>
      </div>`;
div.insertAdjacentHTML("beforeend", html);

document.querySelector(`.new-test-name`).focus();



let div2 = document.querySelector("#select-Department");

for (let i = 0; i < allDepartment.length; i++) {

    html = `<option>${allDepartment[i]}</option>`;
    div2.insertAdjacentHTML("beforeend", html); 
}


document.querySelector(`.client-submit-button`).addEventListener('click',function () {
let newtestobject;
let testName=document.querySelector(`.new-test-name`).value;
let value=document.querySelector(`.new-test-value`).value;
let unit=document.querySelector(`.new-test-unit`).value;
let normalRange=document.querySelector(`.new-test-NormalRange`).value;
let Specimen=document.querySelector(`.new-test-Specimen`).value;
let comment=document.querySelector(`#test-Comment`).value;
let newPage=document.querySelector(".new-test-page").checked;

if(document.querySelector(`#select-Department`).selectedIndex!==0){
if(testName != '' && value != '' && unit != '' && normalRange != '' && Specimen != ''){
   
    let departmentName=document.querySelector(`#select-Department`).options[document.querySelector(`#select-Department`).selectedIndex].text;
     newtestobject={testName,value,unit,normalRange:[normalRange],Specimen,Partof:'none',department:departmentName};
     console.log(newtestobject)

     if(newPage){
        newtestobject.newPage=newPage;
        console.log(newtestobject)
   }
   if(comment != ''){
       let commenttoadd=[`comment:`,comment]
        newtestobject.comment=commenttoadd;
        console.log(newtestobject)
   }

  
availableTest.departments[departmentName].push(newtestobject)

      set('availableTest', availableTest,store2)
      .then(() => {
        console.log('saved tests');
      location.reload()
      })

}
else{alert('fill all inputs')}
}
else{alert('select department')}


//    if(departmentName!=''){
//       availableTest.departments[departmentName.replaceAll(' ','-')]=[];

//       set('availableTest', availableTest,store2)
//       .then(() => {
//         console.log('saved tests');
//       location.reload()
//       })

    
//    }else{alert("Enter Department's Name")}
})

}
