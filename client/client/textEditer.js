function textEditer(element) {
console.log(element)
if(document.querySelector(`.basic-test-editar`)==null){
    const body = document.querySelector("body");
let html = `<div class="basic-test-editar">
<div class="close-image-container">
  <img src="./svg images/cross-circle-svgrepo-com.svg" alt="">
</div>
<div class="bold-and-others">
  <img bold="900" width="20px" src="./svg images/bold-strong-bold-format-editor-tool-toolbar-svgrepo-com.svg" alt="">
  <img class='pointer bgyellow hide-tests' src="./svg images/hide-svgrepo-com (1).svg" width="25px" alt="">
</div>
<div bold="text"><p>colors :-</p></div>
<div class="colors"><div class="addcolor" colorName="red"></div><div class="addcolor" colorName="black"></div></div>
    </div>`;
body.insertAdjacentHTML("afterbegin", html);

document.querySelector(`.basic-test-editar`).style.display='flex';   
document.querySelector(`.basic-test-editar`).style.transition='0.2s';   
document.querySelector(`.basic-test-editar`).style.transform= 'scale(1)';

document.querySelector(`.hide-tests`).addEventListener('click',function () {
   console.log(element.parentElement.parentElement)
   element.parentElement.parentElement.classList.toggle("hide-display");
})

document.querySelector(`.close-image-container>img`).addEventListener('click',function () {
  document.querySelector(`.basic-test-editar`).remove()
  
})

document.querySelector("[colorName='red']").addEventListener('click',function () {

    
    element.style.color='red';
})

document.querySelector("[colorName='black']").addEventListener('click',function () {
  
    element.style.color='black';
})

document.querySelector("[bold='900']").addEventListener('click',function () {
    let myElement =element;
  let computedStyle = window.getComputedStyle(myElement);
  let displayValue = computedStyle.getPropertyValue('font-weight');
    console.log(displayValue)

    if(displayValue=='500'){element.style.fontWeight='900';}
    else{element.style.fontWeight='500';}
    
})

}
}