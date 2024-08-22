function alerta(){
    alert("your cart is empty")
}
function desaparece(){
    let cookie =document.querySelector(".container_cookies");
    cookie.remove()
}
function cambia(){
    let imagen=document.querySelector(".succulents-1");
    imagen.src="assets/succulents-2.jpg";
}
function regresa(){
    let imagen=document.querySelector(".succulents-1");
    imagen.src="assets/succulents-1.jpg";

}