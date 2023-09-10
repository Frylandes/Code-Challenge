document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector("form");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const url = "https://jsonplaceholder.typicode.com/users"; // URL para la solicitud POST

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fecha_nacimiento").value;

    const data = {
      nombre: nombre,
      apellido: apellido,
      fecha_nacimiento: fechaNacimiento,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // respuesta JSON
      })
      .then((data) => {
        //respuesta del servidor aquí (creo)
        console.log("Nuevo recurso creado:", data);
      })
      .catch((error) => {
        // Maneja los errores
        console.error("Fetch error:", error);
      });
  });
});