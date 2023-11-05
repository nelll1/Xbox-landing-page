const video = document.getElementById('video')
const videoContainer = document.getElementById('circle')
const play = document.getElementById('play')
const email = ["richoco@mail.com"];
const password = ["12345"]

play.addEventListener('click', function(){
    videoContainer.style.display = "block";
    video.play()
});
video.addEventListener('click', function(){
    videoContainer.style.display = "none";
    location.reload()
});


function directSignUpPage(){
    document.querySelector('.sign-up-form-container').style.display = "block";
    document.querySelector('.form-container').style.display = "none";
    console.log('clickkk')
}
function directLoginPage(){
    document.querySelector('.sign-up-form-container').style.display = "none";
    document.querySelector('.form-container').style.display = "block";
    console.log('clickkk')
}



function signIn(){
    const emailValue = document.querySelector('#username')
    const passValue = document.querySelector('#login-password')
    const checkValue = emailValue.value;
    const checkPass = passValue.value;
    if(email.includes(checkValue) && password.includes(checkPass)){
        alert("enter")
    }else{
        alert("Wrong Password or Email")
    }
}

//swiper js
Swal.fire({
    title: 'Notice!',
    text: 'This is not a responsive website',
    icon: 'info',
    confirmButtonText: 'Ok'
  })

