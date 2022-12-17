let sec = document.getElementById('sec')
sec.innerText = '30'
let min = document.getElementById('min')
min.innerText = '00'
let hour = document.getElementById('hour')
hour.innerText = '00'
let timer = document.getElementById('timer')
let form = document.getElementById('form')
form.remove()
let center = document.getElementById('center')

function auth(){
  timer.remove();
  center.appendChild(form);
}

function run(){
  setTimeout(()=>{
    if(parseInt(sec.innerText)==0 && parseInt(min.innerText)==0 && parseInt(hour.innerText)==0){
      auth()
    }
    else if(parseInt(sec.innerText)==0 && parseInt(min.innerText)==0){
      let a = String(parseInt(hour.innerText)-1);
      hour.innerText = a.length==1?'0'+a:a;
      min.innerHTML = '59';
      sec.innerHTML = '59';
      run()
    }
    else if(parseInt(sec.innerText)==0){
      let a = String(parseInt(min.innerText)-1);
      min.innerText = a.length==1?'0'+a:a;
      sec.innerHTML = '59';
      run()
    }
    else{
      let a = String(parseInt(sec.innerText)-1);
      sec.innerText = a.length==1?'0'+a:a;
      run()
    }
  },1000)
}


const woo = "CICADA{Y0u_will_N3eD_Me_1@t3R}";
run();
