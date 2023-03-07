document.querySelector(`.add-test-price`).addEventListener('click',function () {
    
    if(document.querySelector('.modalwindow-for-all')==null){
    showGlobalModalWindow('300px',undefined)
    showListOfTestPrice()
  }
})

function showListOfTestPrice() {

    console.log(testToPerform)
    const div = document.querySelector(".modalwindow-for-all");
    let html = `<div class="save-and-copy">
    <div class="copy-parent">
	<input class="copy-price" type="number">
<button>paste</button>
</div>
<div><button class="Savebutton">Save</button></div>
</div>
    <table class="price-list-table">
    <thead class="price-thead">
      <tr>
      <th>Checkbox</th>
      <th  class="Tname">Test Name</th>
      <th>Price ₹</th>
      </tr>
    </thead>
    <tbody class="insert-price-list">
  
    </tbody>
    </table>`;
    div.insertAdjacentHTML("beforeend", html);


  
      for (let i = 0; i < testToPerform.length; i++) {
         
        const div = document.querySelector(".insert-price-list");
  let html = `<tr>
    <td><input id="myCheckbox" type="checkbox"></td>
    <td class="Tname">${testToPerform[i].testName}</td>
    <td><input id=priceinput${i} Partof=${testToPerform[i].Partof?testToPerform[i].Partof.replaceAll(' ','$'):testToPerform[i].Partof} department=${testToPerform[i].departments} testname=${testToPerform[i].testName.replaceAll(' ','$')} type="number"  value=${setAndGetPrice(undefined,undefined,testToPerform[i])}></td>
    </tr>`;
  div.insertAdjacentHTML("beforeend", html);

  let inputprice=`#priceinput${i}`
  document.querySelector(inputprice).addEventListener('input',function () {

    let value= document.querySelector(inputprice).value;

        setAndGetPrice(document.querySelector(inputprice),value,undefined)


  })
 
    }

  

    document.querySelector(`.Savebutton`).addEventListener('click',function () {
        set('availableTest', availableTest,store2)
.then(() => {
  console.log('saved test price');

})

set('groupTests', testInfo,store4)
.then(() => {
  console.log('saved group tests');

})
    })

    document.querySelector(`.copy-parent>button`).addEventListener('click',function () {
    
  
       console.log(  document.querySelectorAll(`#myCheckbox`))

       for (let i = 0; i < document.querySelectorAll(`#myCheckbox`).length; i++) {

     if(document.querySelectorAll(`#myCheckbox`)[i].checked){
        let value=document.querySelector(`.copy-price`).value;
        console.log(document.querySelectorAll(`#myCheckbox`)[i].parentElement.parentElement.children[2].children[0])
        document.querySelectorAll(`#myCheckbox`)[i].parentElement.parentElement.children[2].children[0].value=value;
        document.querySelectorAll(`#myCheckbox`)[i].checked=false;
        

        setAndGetPrice(document.querySelectorAll(`#myCheckbox`)[i].parentElement.parentElement.children[2].children[0],value,undefined)


     }else{ console.log( 'not checked')}
        
       }
      
    })
    
  }

  function setAndGetPrice(myElement,value,obj) {

    if(myElement!==undefined){
        console.log('myElement')
    let departmentAtribute=myElement.getAttribute('department').replaceAll('-','');

    let PartofAtribute=myElement.getAttribute('Partof').replaceAll('$',' ');

    let testnameAtribute=myElement.getAttribute('testname').replaceAll('$',' ');

    console.log(testnameAtribute,departmentAtribute,PartofAtribute,availableTest.departments[departmentAtribute])

if(PartofAtribute=='undefined'){
for (let ii = 0; ii < availableTest.departments[departmentAtribute].length; ii++) {

if(availableTest.departments[departmentAtribute][ii].testName == testnameAtribute){
    availableTest.departments[departmentAtribute][ii].testPrice=value;
}

}
}else{

testInfo[testnameAtribute].testPrice=value;
}
  }

  if(obj!==undefined){
console.log('obj')

let department=obj.departments.replaceAll('-','');

let Partof=obj.Partof;

let testname=obj.testName;

console.log(testname,department,Partof,availableTest.departments[department])

if(Partof==undefined){
for (let ii = 0; ii < availableTest.departments[department].length; ii++) {

if(availableTest.departments[department][ii].testName == testname){
    return availableTest.departments[department][ii].testPrice ?availableTest.departments[department][ii].testPrice :0;
}

}
}else{
console.log(testInfo[testname])
return testInfo[testname].testPrice ? testInfo[testname].testPrice:0;

}


  }
  }