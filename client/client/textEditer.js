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
  <img class='pointer bgyellow hide-tests' src="./svg images/trash-svgrepo-com.svg" width="25px" alt="">
</div>
<div bold="text"><p>colors :-</p></div>
<div class="colors"><div class="addcolor" colorName="red"></div><div class="addcolor" colorName="black"></div></div>
    </div>`;
body.insertAdjacentHTML("afterbegin", html);

document.querySelector(`.basic-test-editar`).style.display='flex';   
document.querySelector(`.basic-test-editar`).style.transition='0.2s';   
document.querySelector(`.basic-test-editar`).style.transform= 'scale(1)';

document.querySelector(`.hide-tests`).addEventListener('click',function () {

try{
  if(element.parentElement.parentElement.previousElementSibling.classList[0]=='testname22'){
    element.parentElement.parentElement.remove()
    document.querySelector(`.basic-test-editar`).remove()
  }
  else if(element.parentElement.parentElement.previousElementSibling.classList[0]=='another-heading'){
  
    let jump= Number(element.parentElement.parentElement.nextElementSibling.children[1].children[1].classList[0].substring(1))-Number(element.parentElement.parentElement.previousElementSibling.previousElementSibling.children[1].children[1].classList[0].substring(1))

    element.parentElement.parentElement.previousElementSibling.previousElementSibling.children[1].children[1].setAttribute('jump',`${jump}`)
    element.parentElement.parentElement.remove()
    document.querySelector(`.basic-test-editar`).remove()
 
  }
  else if(element.parentElement.parentElement.nextElementSibling.classList[0]=='another-heading'){
    let jump= Number(element.parentElement.parentElement.nextElementSibling.nextElementSibling.children[1].children[1].classList[0].substring(1))-Number(element.parentElement.parentElement.previousElementSibling.children[1].children[1].classList[0].substring(1))

    element.parentElement.parentElement.previousElementSibling.children[1].children[1].setAttribute('jump',`${jump}`)
    element.parentElement.parentElement.remove()
    document.querySelector(`.basic-test-editar`).remove()
  }
  else{ let jump= Number(element.parentElement.parentElement.nextElementSibling.children[1].children[1].classList[0].substring(1))-Number(element.parentElement.parentElement.previousElementSibling.children[1].children[1].classList[0].substring(1))

    element.parentElement.parentElement.previousElementSibling.children[1].children[1].setAttribute('jump',`${jump}`)
   element.parentElement.parentElement.remove()
   document.querySelector(`.basic-test-editar`).remove()}
 
  }catch(err){element.parentElement.parentElement.remove()
    document.querySelector(`.basic-test-editar`).remove()}

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