function sendMail() {
  var params = {
    name: document.getElementById("name").value,
     email: document.getElementById("email").value,
     number: document.getElementById("number").value,
     text: document.getElementById("text").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_xax9tfv";
  const templateID = "template_t85bij8";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
         document.getElementById("number").value = "";
        document.getElementById("text").value = "";         
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}
