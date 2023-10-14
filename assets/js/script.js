
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        //this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_k6m6d3n', 'template_dg2m3cm', this)
            .then(function() {
                console.log('SUCCESS!');
                alert("Messaggio inviato correttamente")
            }, function(error) {
                console.log('FAILED...', error);
            });       
    });
   
}



/*
function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };
    
      const serviceID = "service_k6m6d3n";
      const templateID = "template_dg2m3cm";
    
        emailjs.send(serviceID, templateID, params)
        .then(res=>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Messaggio inviato correttamente")
        })
        .catch(err=>console.log(err)); 
  }
*/
  