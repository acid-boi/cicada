let text = document.createElement('h3')


function validate(){
  password = document.getElementById('password');
  audio = document.getElementById('clue')
  if(password.value ===woo){
    form.remove()
    text.innerText = 'Congrats'
    text.remove()
    center.appendChild(text);
    audio.play()
    audio.loop = true;
    console.log("haa")
  }
  else{
    password.value = ''
    password.placeholder = 'try again'
  }
}