window.onload = init;

function init(){
    var button = document.getElementById("klik")
    button.onclick=handleSubmitClick;
}

function handleSubmitClick(){
         alert("Deskripsi Telah Disimpan")
}