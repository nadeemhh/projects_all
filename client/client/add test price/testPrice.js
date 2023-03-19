document.querySelector(`.add-test-price`).addEventListener('click',function () {
    
    if(document.querySelector('.modalwindow-for-all')==null){
    showGlobalModalWindow('300px',undefined)
    showListOfTestPrice()
  }
})

function showListOfTestPrice() {

    console.log(testToPerform,choosetest)
    const div = document.querySelector(".modalwindow-for-all");
    let html = `<div class="save-and-copy">
    <div class="copy-parent">
	<input class="copy-price" type="number">
<button>Paste</button>
</div>
<div><button class="Savebutton">Save</button></div>
</div>
    <table class="price-list-table">
    <thead class="price-thead">
      <tr>
      <th>#</th>
      <th  class="Tname">Test Name</th>
      <th>Price ₹</th>
      </tr>
    </thead>
    <tbody class="insert-price-list">
  
    </tbody>
    </table>`;
    div.insertAdjacentHTML("beforeend", html);


  
      for (let i = 0; i < testToPerform.length; i++) {
        console.log(testToPerform[i].testName)
        get(testToPerform[i].testName,store5)
        .then((data) => {
          console.log(data);
          
        const div = document.querySelector(".insert-price-list");
  let html = `<tr>
    <td><input id="myCheckbox" type="checkbox"></td>
    <td class="Tname">${testToPerform[i].testName}</td>
    <td><input id=priceinput${i} Partof=${testToPerform[i].Partof?testToPerform[i].Partof.replaceAll(' ','$'):testToPerform[i].Partof} department=${testToPerform[i].departments} testname=${testToPerform[i].testName.replaceAll(' ','$')} type="number"  value=${data!==undefined?data.price:'0'}></td>
    </tr>`;
  div.insertAdjacentHTML("beforeend", html);

        
})
    }

  

    document.querySelector(`.Savebutton`).addEventListener('click',function () {

let parentofallprice=document.querySelector(`.insert-price-list`).children;
for (let o = 0; o < parentofallprice.length; o++) {

  let testName=document.querySelectorAll(`.insert-price-list`)[0].children[o].children[1].textContent;
  let testPrice=document.querySelectorAll(`.insert-price-list`)[0].children[o].children[2].children[0].value;
  console.log(parentofallprice.length,testName,testPrice)
        set(`${testName}`, {price:testPrice},store5)
.then(() => {
  console.log('saved test price');

})

if(o == parentofallprice.length-1){ 
   for (let i = 0; i < choosetest.length; i++) {

  choosetest[i].classList.remove('secleted')
  
}

for (let i = 0; i < groupTestButtonElements.length; i++) {

  groupTestButtonElements[i].classList.remove('secleted')
  
}

testToPerform=[];
alert('price has been saved!')
}
}







    })

    document.querySelector(`.copy-parent>button`).addEventListener('click',function () {
    
  
       console.log(  document.querySelectorAll(`#myCheckbox`))

       for (let i = 0; i < document.querySelectorAll(`#myCheckbox`).length; i++) {

     if(document.querySelectorAll(`#myCheckbox`)[i].checked){
        let value=document.querySelector(`.copy-price`).value;
        console.log(document.querySelectorAll(`#myCheckbox`)[i].parentElement.parentElement.children[2].children[0])
        document.querySelectorAll(`#myCheckbox`)[i].parentElement.parentElement.children[2].children[0].value=value;
        document.querySelectorAll(`#myCheckbox`)[i].checked=false;
        

        //setAndGetPrice(document.querySelectorAll(`#myCheckbox`)[i].parentElement.parentElement.children[2].children[0],value,undefined)


     }else{ console.log( 'not checked')}
        
       }
      
    })
    
  }

  function setAndGetPrice(testname) {

    console.log(testname)

    get(testname,store5)
    .then((data) => {
      console.log(data.price);
      return Number(data.price);
    
    })
    console.log('end')
  }


