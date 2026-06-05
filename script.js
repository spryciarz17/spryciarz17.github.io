const qrContainer = document.getElementById("qrContainer");
const qrCanvas = document.getElementById("qrCanvas");

document.getElementById("showQR").addEventListener("click", () => {

    qrContainer.classList.toggle("hidden");

    const ctx = qrCanvas.getContext("2d");

    qrCanvas.width = 200;
    qrCanvas.height = 200;

    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0,200,200);

    ctx.fillStyle = "#000";

    for(let x=0;x<200;x+=20){
        for(let y=0;y<200;y+=20){

            if(Math.random() > 0.5){
                ctx.fillRect(x,y,20,20);
            }
        }
    }
});

if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js");
}
