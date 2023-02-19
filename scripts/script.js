/*     ============== DEFINIÇÃO DAS CORES DO SITE ============ */

const colorOptions = ["#00CCFF",
                      "#FFDA47",
                      "#50C878",
                      "#FF2E82",
                      "#CC99FF",
                      "#FF5252"];

const primaryFontColor = "#FFFFFF";
const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
const inviteButton = document.getElementById("inviteButton");
const talkingButtons = document.querySelectorAll(".talkingButton");
const botNamePaths = document.querySelectorAll(".botNameColor");
const botColorSVGs = document.querySelectorAll(".botColorSVG");

/*     ============== DESIGNANDO CORES AOS ELEMENTOS =============== */

inviteButton.style.backgroundColor = randomColor;

talkingButtons.forEach(function(talkingButton){

    talkingButton.addEventListener("mouseover", function(){
        talkingButton.style.color = randomColor;
    })
    
    talkingButton.addEventListener("mouseout", function(){
        talkingButton.style.color = primaryFontColor;
    })
    
}); 

/* ----- Cores dos SVGs ----- */

botColorSVGs.forEach(function(botColorSVG){
    botColorSVG.style.fill = randomColor;
});