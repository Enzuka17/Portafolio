// Inicializa el servicio EmailJS
emailjs.init("uBgmIOB9cH-XE1DvW");

// Obtener el formulario
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que se recargue la página al enviar

  // Obtener los datos del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;

  // Configurar el envío a EmailJS
  emailjs
    .send("service_gp14om8", "template_ta73j7o", {
      to_name: nombre,   // Cambié esto para que se envíen los valores correctos
      from_name: email,  // De igual forma, este valor es el email del remitente
      subject: asunto,   // Ahora se envía el asunto del formulario
      message: mensaje   // El contenido del mensaje
    })
    .then(
      function (response) {
        console.log("Éxito!", response.status, response.text);
        alert("¡Mensaje enviado correctamente!");
        contactForm.reset(); // Reinicia el formulario después de enviarlo
      },
      function (error) {
        console.error("Error al enviar", error);
        alert("Hubo un problema al enviar tu mensaje. Intenta nuevamente.");
      }
    );
});
