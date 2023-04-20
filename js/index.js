document.addEventListener("DOMContentLoaded", function() {
    const parallax = document.querySelector(".parallax");
  
    window.addEventListener("mousemove", function(e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      let rotX = 15 * y;
      let rotY = 15 * x;
      parallax.style.transform = `translate(-50%, -50%) translateZ(-50px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
  });

  function mostrar(){
    document.getElementById("menu").style.display='block';
  }

  function ocultar(){
    document.getElementById("menu").style.display='none';
  }

  const toggleMenu = () => {
  document.getElementById("menu-mob").classList.toggle("menu-open");
  document.getElementById("burger").classList.toggle("is-active");
  
};

function cambiarTexto(nombre, descripcion) {
  document.getElementById("nombrePersonaje").innerHTML = nombre;
  document.getElementById("descripcion").innerHTML = descripcion;
}

function resetearTexto() {
  document.getElementById("nombrePersonaje").innerHTML = "Super Héroe:";
  document.getElementById("descripcion").innerHTML = "Clic en las imagenes para conocer más de tus super héroes favoritos";
}
