document.getElementById('crt-resume').onclick = function(){
    document.getElementById('h1').style.display = "none";
    document.getElementById('container').style.display = "block";
    document.getElementById('container4').style.display = "none";
    document.getElementById('container2').style.display = "none";
    document.getElementById('container3').style.display = "none";
    document.getElementById('container5').style.display = 'none';
    document.getElementById('show-next').style.display = "block";
    document.getElementById('next').style.display = "block";
    document.getElementById('show-next1').style.background = "green";

var myBtns = document.querySelectorAll(".next");
var alldivContainer = document.querySelectorAll('.cont');
var allBtnShow = document.querySelectorAll('.show-next1');
var step = [0];
var show = [0]; 
for (i = 0; i < myBtns.length; i++){
    myBtns[i].addEventListener('click', function(){
        var allnextStep =  alldivContainer[step++];
        var allNextShow = allBtnShow[show++];
        
       for( var i = 0; i< alldivContainer.length; i++){
           alldivContainer[i].style.display = "none";
          allnextStep.style.display = "block";
       }
       for(var i = 0; i < allBtnShow.length; i++){
        
        console.log(allBtnShow[i].style.background = "darkgray");
        allNextShow.style.background = "green";
        let myInput1 = document.getElementById('input1');
let myInput2 = document.getElementById('input2');
let myInput3 = document.getElementById('input3');
let myInput4 = document.getElementById('input4');
let myInput5 = document.getElementById('input5');
let myInput6 = document.getElementById('input6');
// outPut info
let myH1 = document.getElementById('name');
let jobinfo = document.getElementById('job-info');
let phoneinfo = document.getElementById('phone-info');
let mailinfo = document.getElementById('mail-info');
let adressinfo = document.getElementById('adress-info');
// save name 
    localStorage.setItem('key', myInput1.value + " "+ myInput2.value);
    
    myH1.innerHTML = localStorage.getItem(`${'key'}`);
    
    // save job
    localStorage.setItem('key', myInput3.value);
    jobinfo.innerHTML = localStorage.getItem(`${'key'}`)
    // save phone
    localStorage.setItem('key', myInput5.value);
    phoneinfo.innerHTML = localStorage.getItem(`${'key'}`);
    // save mail
    localStorage.setItem('key', myInput4.value);
    mailinfo.innerHTML = localStorage.getItem(`${'key'}`);
    // save adress
    localStorage.setItem('key', myInput6.value);
    adressinfo.innerHTML = localStorage.getItem(`${'key'}`);
    // save personal information
    let myInput7 = document.getElementById('input7');
    let persoInfo = document.getElementById('perso-info');
    localStorage.setItem('key', myInput7.value);
    persoInfo.innerHTML = localStorage.getItem(`${'key'}`);
    // save educ info
    let myInput8 = document.getElementById('input8');
    let educInfo = document.getElementById('educ-info');
    localStorage.setItem('key', myInput8.value);
    educInfo.innerHTML = localStorage.getItem(`${'key'}`);
    // save skills
    let myInput9 = document.getElementById('input9');
    let skillsInfo = document.getElementById('skills-info');
    localStorage.setItem('key', myInput9.value);
    skillsInfo.innerHTML = localStorage.getItem(`${'key'}`);

        
       }
  });
}
};
