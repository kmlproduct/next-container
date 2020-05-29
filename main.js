document.getElementById('crt-resume').addEventListener("click", function(){
    document.getElementById('h1').style.display = "none";
    document.getElementById('parent').style.display = "block";
        })
    

var myBtn = document.getElementById("next");
var alldivContainer = document.querySelectorAll('.cont');
var allBtnShow = document.querySelectorAll('.show-next1');

var step = 0;
var show = 0.
    myBtn.addEventListener('click', function(){
        step++;
       for( var i = 0; i< alldivContainer.length; i++){
           alldivContainer[i].style.display = "none";
       }
       alldivContainer[step].style.display = "block"; 
       if(step== 4){
        document.getElementById("next").style.display = "none"
        document.getElementById("show-next").style.display = "none"
       }
      show++;
       for(var i = 0; i < allBtnShow.length; i++){
        allBtnShow[i].style.background = "darkgray";
       }
       allBtnShow[show].style.background = "green";

let InputFirstName = document.getElementById('InputFirstName');
let InputLastName = document.getElementById('InputLastName');
let InputJob = document.getElementById('InputJob');
let InputEmail = document.getElementById('InputEmail');
let InputPhone = document.getElementById('InputPhone');
let InputAdress = document.getElementById('InputAdress');
let InputExp = document.getElementById('InputExp');
let InputEducation = document.getElementById('InputEducation');
let InputSkills = document.getElementById('InputSkills');


var user = {
    firstName: InputFirstName.value,
    lastName: InputLastName.value,
    job: InputJob.value,
    email: InputEmail.value,
    phone: InputPhone.value,
    adress: InputAdress.value,
    experience: InputExp.value,
    education: InputEducation.value,
    skills: InputSkills.value,

}

 myJSON = JSON.stringify(user);
localStorage.setItem("userData", myJSON);

// Retrieving data:
text = localStorage.getItem("userData");
object = JSON.parse(text);
document.getElementById("name").innerHTML = object.firstName +" "+ object.lastName;
document.getElementById("job-info").innerHTML = object.firstName +" "+ object.lastName;
document.getElementById("phone-info").innerHTML = object.firstName +" "+ object.job;
document.getElementById("mail-info").innerHTML = object.firstName +" "+ object.email;
document.getElementById("adress-info").innerHTML = object.firstName +" "+ object.phone;
document.getElementById("perso-info").innerHTML = object.firstName +" "+ object.adress;
document.getElementById("educ-info").innerHTML = object.firstName +" "+ object.experience;
document.getElementById("skills-info").innerHTML = object.firstName +" "+ object.education;
document.getElementById("skills-info").innerHTML = object.firstName +" "+ object.skills;
})

    






    
    
    // // save job
    // localStorage.setItem('key', myInput3.value);
    // jobinfo.innerHTML = localStorage.getItem(`${'key'}`)
    // // save phone
    // localStorage.setItem('key', myInput5.value);
    // phoneinfo.innerHTML = localStorage.getItem(`${'key'}`);
    // // save mail
    // localStorage.setItem('key', myInput4.value);
    // mailinfo.innerHTML = localStorage.getItem(`${'key'}`);
    // // save adress
    // localStorage.setItem('key', myInput6.value);
    // adressinfo.innerHTML = localStorage.getItem(`${'key'}`);
    // // save personal information
    // let myInput7 = document.getElementById('input7');
    // let persoInfo = document.getElementById('perso-info');
    // localStorage.setItem('key', myInput7.value);
    // persoInfo.innerHTML = localStorage.getItem(`${'key'}`);
    // // save educ info
    // let myInput8 = document.getElementById('input8');
    // let educInfo = document.getElementById('educ-info');
    // localStorage.setItem('key', myInput8.value);
    // educInfo.innerHTML = localStorage.getItem(`${'key'}`);
    // // save skills
    // let myInput9 = document.getElementById('input9');
    // let skillsInfo = document.getElementById('skills-info');
    // localStorage.setItem('key', myInput9.value);
    // skillsInfo.innerHTML = localStorage.getItem(`${'key'}`);

      
