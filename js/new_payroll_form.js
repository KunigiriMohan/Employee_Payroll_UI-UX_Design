
window.addEventListener('DOMContentLoaded',(event)=>{
const salary= document.querySelector('#salary');                        //Event Handler to update value when we scroll salary column
    const output =document.querySelector('.salary-output');

    output.textContent=salary.value;
    salary.addEventListener('input',function(){
        output.textContent=salary.value;
    });
});