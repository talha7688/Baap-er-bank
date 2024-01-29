// step-1
document.getElementById('btn-submit').addEventListener('click', function(){
  const emailField = document.getElementById('user-email');
  const email= emailField.value;
  

  const passField = document.getElementById('user-pass');
  const password = passField.value;
  if(email == '0000' && password == '0000'){
    window.location.href = 'bank.html'
  }
  else{
    alert('user input invalid')
  }
})