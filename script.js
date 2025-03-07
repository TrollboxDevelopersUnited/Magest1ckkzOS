document.addEventListener('contextmenu', event => event.preventDefault());

$(document).ready(function() {
    $("#draggable").draggable();
  });
  $(document).ready(function() {
    $("#draggable2").draggable();
  });

  let save = document.querySelector("#save")
  let text = document.querySelector("#text-area")

  save.addEventListener("click", () => {
    let valueinput = text.value

    let blobdtMIME =
        new Blob([valueinput], { type: "text/plain" })
    let url = URL.createObjectURL(blobdtMIME)
    let anele = document.createElement("a")
    anele.setAttribute("download", "Untitled.txt");
    anele.href = url;
    anele.click();
    console.log(blobdtMIME)
})

function img1() {
  document.body.style.background = 'url("https://get.wallhere.com/photo/illustration-digital-art-neon-abstract-circle-waveforms-light-wave-shape-line-number-computer-wallpaper-font-207352.jpg") no-repeat';
  document.body.style.backgroundSize = 'cover'
}

function img2() {
  document.body.style.background = 'url("https://getwallpapers.com/wallpaper/full/3/d/5/1096427-vertical-windows-xp-pro-wallpaper-1920x1200-for-mac.jpg") no-repeat';
  document.body.style.backgroundSize = 'cover'
}

function img3() {
  document.body.style.background = 'url("https://www.fonstola.ru/images/201309/fonstola.ru_113745.jpg") no-repeat';
  document.body.style.backgroundSize = 'cover'
}