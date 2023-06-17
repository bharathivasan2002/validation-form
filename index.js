  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithRedirect,getRedirectResult,signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
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
  const provider = new GoogleAuthProvider(app);


  let signupcontainer=document.querySelector('.signup')
  let signupform=document.querySelector('.signupform')
  
  let signupuserbox=document.querySelector('.userbox')
  let signupnameEl=document.querySelector('.signupnameEl')
  let signupemailEl=document.querySelector('.signupemailEl')
  let signuppasswordEl=document.querySelector('.signuppasswordEl')
  let signupconformpasswordEl=document.querySelector('.signupconformpasswordEl')
  
  let msgbarsignup=document.querySelector('.msgbarsignup')
  
  let atagsignup=document.querySelector('.atagsignup')
  let signupbtn=document.querySelector('.signupbtn')
  let googlebtn=document.querySelector('.googlebtn')
  
  
  let containerforloader=document.querySelector('.containerforloader')
  let anima=document.querySelector('.anima')
  let loadheading=document.querySelector('.loadheading')
  let refbtn=document.querySelector('.refbtn')

  
  signupbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(validation()){
      e.preventDefault()
      const emailauth=document.querySelector('.signupemailEl').value
      const passwordauth=document.querySelector('.signuppasswordEl').value
      createUserWithEmailAndPassword(auth, emailauth, passwordauth)
      .then((userCredential) => {
        const user = userCredential.user;
        window.open('./mainpage.html','_self')
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode)
          if(errorCode=== "auth/email-already-in-use"){
            seterror(signupemailEl,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > This email-id is already in use')
            animation(signupemailEl)
          }
          else if(errorCode === 'auth/invalid-email'){
            seterror(signupemailEl,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > Please enter valid eamil-id')
            animation(signupemailEl)
          }
          else{
            setsuccess(signupemailEl,'<img src="./images/pngegg (2).png" alt="" class="successlogo" > Success')
          }

          if(errorCode === 'auth/network-request-failed'){
            loading()
          }
          else{
            unload()
          }
        });
      }
      else{s
        e.preventDefault()
      }
    })
    

    googlebtn.addEventListener('click',()=>{
      // signInWithPopup(auth, provider)
      // .then((result) => {
         
      //     // const credential = GoogleAuthProvider.credentialFromResult(result);
      //     // const token = credential.accessToken;        
      //             // alert(user.displayName)
      //             // alert(user.email)
      //             // alert(user.photoURL)
  
      //     const user = result.user;
       
      //     window.open('./mainpage.html','_self')

      //   }).catch((error) => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     const email = error.customData.email;
      //     const credential = GoogleAuthProvider.credentialFromError(error);
      //     console.log(errorCode);

      //     if(errorCode === 'auth/internal-error'){
      //       loading()
      //     }
      //     else{
      //       unload()
      //     }

      //   });

  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
  .then((result) => {  
    const user = result.user;
    window.open('./mainpage.html','_self')

  }).catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    if(errorCode === 'auth/internal-error'){
            loading()
      }
    else{
            unload()
        }
  });
    })




    refbtn.addEventListener('click',()=>{
      window.location.reload()
    })

  function loading(){
    containerforloader.hidden=false
    anima.hidden=false
    loadheading.hidden=false
    refbtn.hidden=false
    signupcontainer.hidden=true
    logincontainer.hidden=true
  }
  function unload(){
    containerforloader.hidden=true
    anima.hidden=true
    loadheading.hidden=true
    refbtn.hidden=true
  }

    function validation(){
      let signupnameval=signupnameEl.value.trim()
      let signupemailval=signupemailEl.value.trim()
      let signuppasswordval=signuppasswordEl.value.trim()
      let signupconformpasswordval=signupconformpasswordEl.value.trim()
      let success =true
      
      if(signupnameval===''){
        success=false
        seterror(signupnameEl, '<img src="./images/pngegg (3).png" alt="" class="errorlogo" > The username field is empty')
        animation(signupnameEl)

      }
      else{
        setsuccess(signupnameEl,'<img src="./images/pngegg (2).png" alt="" class="successlogo" > Success')
      
      }
      
      if(signupemailval===''){
        success=false
        seterror(signupemailEl,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > The Email-id field is empty')
        animation(signupemailEl)
     
      }
      else if(!validateEmail(signupemailval)){
          success=false
          seterror(signupemailEl,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > Please enter valid eamil-id')
          animation(signupemailEl)
         
        }
        else{
          setsuccess(signupemailEl,'<img src="./images/pngegg (2).png" alt="" class="successlogo" > Success')
        
        }
        
        
        if(signuppasswordval===''){
          success=false
          seterror(signuppasswordEl,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > The Password field is empty')
          animation(signuppasswordEl)
        }
        else if(signuppasswordval.length<6){
          success=false
          seterror(signuppasswordEl,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > Password is too short')
          animation(signuppasswordEl)
        }
        else{
          setsuccess(signuppasswordEl,'<img src="./images/pngegg (2).png" alt="" class="successlogo" > Success')
        }
        
        
      if(signupconformpasswordval===''){
        success=false
        seterror(signupconformpasswordEl,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > The Confirm Password field is empty')
        animation(signupconformpasswordEl)
      }
      else if(signupconformpasswordval!== signuppasswordval){
        success=false
        seterror(signupconformpasswordEl,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > Password is not match')
        animation(signupconformpasswordEl)
      }
      else{
        setsuccess(signupconformpasswordEl,'<img src="./images/pngegg (2).png" alt="" class="successlogo" > Success')
      }
      
      return success
    }






let logincontainer=document.querySelector('.login')
let loginform=document.querySelector('.loginform')
let loginemailEl=document.querySelector('.loginemailEl')
let loginpasswordEl=document.querySelector('.loginpasswordEl')
let forgetpasswordlogin=document.querySelector('.forgetpasswordlogin')
let ataglogin=document.querySelector('.ataglogin')
let loginbtn=document.querySelector('.loginbtn')
let googlebtnlog=document.querySelector('.googlebtnlog')
let msgbarlogin=document.querySelector('.msgbarlogin')
let forgetcontainer = document.querySelector('.forget')

loginbtn.addEventListener('click',(e)=>{ 
  e.preventDefault()
 validationforlogin()
   const emaillog = document.querySelector('.loginemailEl').value
   const passwordlog = document.querySelector('.loginpasswordEl').value
    signInWithEmailAndPassword(auth, emaillog, passwordlog)
    .then((userCredential) => {
      const user = userCredential.user;
       window.open('./mainpage.html','_self')   
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        if(errorCode === 'auth/user-not-found'){
          seterror(loginemailEl,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > No user is found please create an account')
          animation(loginemailEl)
        }
        else if(errorCode === 'auth/invalid-email'){
          seterror(loginemailEl,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > Please enter valid eamil-id')
          animation(loginemailEl)
        }
        

        if(errorCode === 'auth/wrong-password'){
          seterror(loginpasswordEl,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > Password is Wrong')
          animation(loginpasswordEl)
        }
        if(errorCode === 'auth/too-many-requests'){
          seterror(loginpasswordEl,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > You enter wrong password too many times')
          animation(loginpasswordEl)
        }

        if(errorCode === 'auth/network-request-failed'){
          loading()
        }
        else{
          unload()
        }
       
      });
})



googlebtnlog.addEventListener('click',()=>{
  // signInWithPopup(auth, provider)
  // .then((result) => {
     
  //     // const credential = GoogleAuthProvider.credentialFromResult(result);
  //     // const token = credential.accessToken;        
  //             // alert(user.displayName)
  //             // alert(user.email)
  //             // alert(user.photoURL)

  //     const user = result.user;
   
  //     window.open('./mainpage.html','_self')

  //   }).catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     const email = error.customData.email;
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     console.log(errorCode);
  //     if(errorCode === 'auth/internal-error'){
  //       loading()
  //     }
  //     else{
  //       unload()
  //     }
  //   });

  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
  .then((result) => {  
    const user = result.user;
    window.open('./mainpage.html','_self')

  }).catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    if(errorCode === 'auth/internal-error'){
            loading()
      }
    else{
            unload()
        }
  });

})


forgetpasswordlogin.addEventListener('click',()=>{
  window.open('./forgetpassword.html','_self')
})







function validationforlogin(){
  let loginemailval=loginemailEl.value.trim()
  let loginpasswordval=loginpasswordEl.value.trim()

  if(loginemailval===''){
    seterror(loginemailEl,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > The Email-id field is empty')
    animation(loginemailEl)
  }
  else{
      setsuccess(loginemailEl,'<img src="./images/pngegg (2).png" alt="" class="successlogo" > Success')
  }


  if(loginpasswordval===''){
    seterror(loginpasswordEl,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > The Password field is empty')
    animation(loginpasswordEl)
  }
  else if(loginpasswordval.length<6){
    seterror(loginpasswordEl,'<img src="./images/pngegg (3).png" alt="" class="errorlogo" > password is too short')
    animation(loginpasswordEl)
  }
  else{
    setsuccess(loginpasswordEl,'<img src="./images/pngegg (2).png" alt="" class="successlogo" > Success')
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

const validateEmail = (email)=>{
  return String(email)
  .toLowerCase()
  .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
}





// ---------------------------------------------------------------------------------
    atagsignup.addEventListener('click',()=>{
      gsap.from(logincontainer, { duration: 1.5,
        ease: "elastic.out(1, 0.3)",
        y: -300
      });
      logincontainer.hidden=false
      signupcontainer.hidden=true
    })
    
    ataglogin.addEventListener('click',()=>{
      gsap.from(signupcontainer, { duration: 1.5,
        ease: "elastic.out(1, 0.3)",
        y: -300
      });
      logincontainer.hidden=true
      signupcontainer.hidden=false
    })
 


  signupnameEl.addEventListener('input',(e)=>{
    if(e.target.value){
      e.target.classList.add('has-value')
    }
    else{
      e.target.classList.remove('has-value')
    }
})
signupemailEl.addEventListener('input',(e)=>{
  if(e.target.value){
    e.target.classList.add('has-value')
  }
  else{
    e.target.classList.remove('has-value')
  }
})
signuppasswordEl.addEventListener('input',(e)=>{
  if(e.target.value){
    e.target.classList.add('has-value')
  }
  else{
    e.target.classList.remove('has-value')
  }
})
signupconformpasswordEl.addEventListener('input',(e)=>{
  if(e.target.value){
    e.target.classList.add('has-value')
  }
  else{
    e.target.classList.remove('has-value')
  }
})
loginemailEl.addEventListener('input',(e)=>{
  if(e.target.value){
    e.target.classList.add('has-value')
  }
  else{
    e.target.classList.remove('has-value')
  }
})
loginpasswordEl.addEventListener('input',(e)=>{
  if(e.target.value){
    e.target.classList.add('has-value')
  }
      else{
        e.target.classList.remove('has-value')
      }
})



















