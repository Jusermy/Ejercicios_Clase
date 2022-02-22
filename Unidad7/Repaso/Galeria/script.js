var zFondos150 = ["./img/150x150/coche-1.jpg","./img/150x150/coche-2.jpg","./img/150x150/coche-3.jpg","./img/150x150/coche-4.jpg"];
var zFondos600 = ["./img/600x400/coche-1.jpg","./img/600x400/coche-2.jpg","./img/600x400/coche-3.jpg","./img/600x400/coche-4.jpg"];

var imagenPrincipal = document.querySelector(".imagen-principal");
var subImagenes = document.querySelectorAll('[class *= "subImagen-"]');

imagenPrincipal.style.backgroundImage=`url(${zFondos600[0]})`;
subImagenes.forEach((img, pos)=>{
  img.style.backgroundImage=`url(${zFondos150[pos]})`;
  img.addEventListener("mouseover", ()=>{
    imagenPrincipal.style.backgroundImage=`url(${zFondos600[pos]})`;
  });
});

/*subImagenes.forEach((img, pos)=>{
  img.style.backgroundImage=zFondos150[pos];
  img.addEventListener("mouseover",accion);
});

function accion(){
  imagenPrincipal.style.backgroundImage=zFondos600[this.id];
}*/
/**
  URL CÓDIGO FUENTE: https://francescricart.com/como-generar-una-galeria-de-imagenes-de-producto-con-javascript/
*/