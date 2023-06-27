import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getAuth,sendPasswordResetEmail  } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBBu5GoFaooAnpXbJv_JB5DkpECJEt_5rw",
  authDomain: "auth-based-login-form-fa215.firebaseapp.com",
  projectId: "auth-based-login-form-fa215",
  storageBucket: "auth-based-login-form-fa215.appspot.com",
  messagingSenderId: "205348139902",
  appId: "1:205348139902:web:6035a8e54f1f3fa73d392f",
  measurementId: "G-QCLG9H37GN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


let forsignupinput = document.querySelector('.forsignupinput')
let forget = document.querySelector('.forget')
let forgetbtn = document.querySelector('.forgetbtn')
let msgbarsignup = document.querySelector('.msgbarsignup')
let msgcontainer = document.querySelector('.msgcontainer')
let backbtn = document.querySelector('.backbtn')


forgetbtn.addEventListener('click',(e)=>{
  e.preventDefault
  validationforget()
  let email = forsignupinput.value
  sendPasswordResetEmail(auth, email)
  .then(() => {
    msganima()
    msgcontainer.innerHTML="Link Is Sended To Your Email-id Please Check And Change Your Password"
    // msgcontainer.style.height = '65px'
    msgcontainer.hidden = false
    // setInterval(() => {
    //   window.open('./index.html','_self')
    // }, 5000);
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    if(errorCode === 'auth/invalid-email'){
      seterror(forsignupinput,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > Please enter valid eamil-id')
      animation(forsignupinput)
    }
    else if(errorCode === 'auth/user-not-found'){
      seterror(forsignupinput,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > No user is found please create an account')
      animation(forsignupinput)
    }
    else{
      setsuccess(forsignupinput,'<img src="./images/pngegg (2).png" alt="" class="successlogo" > Success')
    }

    if(errorCode === 'auth/network-request-failed'){
      msganima()
      msgcontainer.innerHTML="Something Went Worng Please Check Your Inernet Connection..."
      // msgcontainer.style.height = '65px'
      msgcontainer.style.background ='linear-gradient(90deg, rgb(136, 7, 7) 0%, rgba(0,212,255,0) 100%)'
      msgcontainer.hidden = false
    }
    else{
      msgcontainer.hidden = true
    }

  });
})



forsignupinput.addEventListener('input',(e)=>{
    if(e.target.value){
      e.target.classList.add('has-value')
    }
    else{
      e.target.classList.remove('has-value')
    }
})




function loaded(){
  gsap.from(forget, { duration: 1.5,
    // ease: "elastic.out(1, 0.3)",
    ease: "bounce.out",
    y: -300
  });
}
loaded()



function validationforget(){
  let emailinput = forsignupinput.value.trim()
  if(emailinput===''){
    seterror(forsignupinput,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > The Email-id field is empty')
    animation(forsignupinput)
  }
  else{
      setsuccess(forsignupinput,'<img src="./images/pngegg (2).png" alt="" class="successlogo" > Success')
  }

}




function seterror(element,message){
  let parentEl = element.parentElement;
  let errorEl = parentEl.querySelector('.msgbarsignup')
  errorEl.style.color='red'
  errorEl.innerHTML=message
  parentEl.classList.add('error')
  parentEl.classList.remove('success')
  
}
function setsuccess(element,message){
  let parentEl = element.parentElement;
  let errorEl = parentEl.querySelector('.msgbarsignup')
  errorEl.style.color='green'
  errorEl.innerHTML=message
  parentEl.classList.add('success')
  parentEl.classList.remove('error')
}

function animation(animationelement){
  gsap.from(animationelement, { duration: 1.5,
    ease: "elastic.out(1, 0.2)",
    x: 100
  }); 
}


function msganima(){
  gsap.from(msgcontainer, { duration: 2,
    ease: "elastic.out(1, 0.3)",
    x: 300
  }); 
}

backbtn.addEventListener('click',()=>{
  window.open('./index.html','_self')
})