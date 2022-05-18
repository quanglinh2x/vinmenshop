
emailBtn = $('.footer-body__input button')
emailInput=$('.footer-body__input input')

function alert({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = $("#alert");
    if (main) {
      const alert = document.createElement("div");
  
      // Auto remove toast
      setTimeout(function () {
        main.removeChild(alert);
      }, duration + 1000);
      
      // Remove toast when clicked
      
      
      alert.classList.add("alert", `alert-${type}`);
      const delay = (duration / 1000).toFixed(2);
  
      
      alert.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
  
      alert.innerHTML = `
                
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                <strong>${title} :</strong> ${message}
                
                  `;
      main.appendChild(alert);
    }
  }
  function showSuccess() {
    alert({
      title: "Success",
      message: "We have received your email",
      type: "success",
      duration: 2000
    });
  }

  function showError() {
    alert({
      title: "Error",
      message: "Please enter your email",
      type: "error",
      duration: 2000
    });
  

  }
  function showThank() {
    alert({
      title: "Thank you",
      message: "Thank you voting",
      type: "thank",
      duration: 2000
    });
  

  }
  function showWarning() {
    alert({
      title: "Warning",
      message: "Please enter your correct email",
      type: "warning",
      duration: 2000
    });}
  regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  emailBtn.onclick = function () {
    
    if( !emailInput.value){
        showError()
        
    }else if(regex.test(emailInput.value)){
      
        showSuccess()
      emailInput.value=''
    }else if( !(regex.test(emailInput.value))){
        showWarning()
        emailInput.value=''
    }
  
}