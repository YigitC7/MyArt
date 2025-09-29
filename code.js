// Yazan Yiğit ÇıtakS

function Main(){
    var ImlecTop = 150;
    var ImlecLeft = 200;

    var speed = 10;
    var colorIndex = 0;

    document.addEventListener("keydown", function(event){
        var ImlecEntity = document.getElementById("Imlec");

        colorIndex += 1;

        function ColorOlustur(color){
            let colorEntity = document.createElement("div");
            colorEntity.className = "kutu";
            colorEntity.id = "color"+colorIndex;
            colorEntity.style.background = color;
            document.getElementById("BodyTag").appendChild(colorEntity);

            colorEntity.style.top = ImlecTop + "px";
            colorEntity.style.left = ImlecLeft + "px";
        }

        console.log(event.key);
        if(event.key == "ArrowUp"){
            ImlecTop -= speed;
        }
        else if(event.key == "ArrowDown"){
            ImlecTop += speed;
        }
        else if(event.key == "ArrowRight"){
            ImlecLeft += speed;
        }
        else if(event.key == "ArrowLeft"){
            ImlecLeft -= speed;
        }
        else if(event.key == "Enter"){
            ColorOlustur("blue");
        }

        ImlecEntity.style.top = ImlecTop + "px";
        ImlecEntity.style.left = ImlecLeft + "px";
    });
}



Main();