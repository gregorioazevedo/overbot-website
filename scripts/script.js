function themeColorGenerate() {

/*     ============== DEFINIÇÃO DAS CORES ============ */

    /* ----- Opções das cores ----- */
    const themeOptions = ["#00CCFF",
                        "#FFDA47",
                        "#50C878",
                        "#FF2E82",
                        "#CC99FF",
                        "#FF5252"];

    const primaryFontColor = "#FFFFFF";

    const colorTheme = themeOptions[Math.floor(Math.random() * themeOptions.length)];

/*     ============== DESIGNANDO CORES AOS ELEMENTOS =============== */

    /* ----- Cores dos botões na Talking Area ----- */

    const inviteButton = document.getElementById("inviteButton");
    inviteButton.style.backgroundColor = colorTheme;

    const aboutButton = document.getElementsByClassName("talkingButton")[0];
    aboutButton.addEventListener("mouseover", function () {
        aboutButton.style.color = colorTheme;
    });
    aboutButton.addEventListener("mouseout", function () {
        aboutButton.style.color = primaryFontColor;
    });

    const commandButton = document.getElementsByClassName("talkingButton")[1];
    commandButton.addEventListener("mouseover", function () {
        commandButton.style.color = colorTheme;
    });
    commandButton.addEventListener("mouseout", function () {
        commandButton.style.color = primaryFontColor;
    });
    
    const contactButton = document.getElementsByClassName("talkingButton")[2];
    contactButton.addEventListener("mouseover", function () {
        contactButton.style.color = colorTheme;
    });
    contactButton.addEventListener("mouseout", function () {
        contactButton.style.color = primaryFontColor;
    });


    /* ----- Cores dos SVGs ----- */

    let botName = document.getElementsByClassName("botNameColor")[0];
    botName.style.fill = colorTheme;
    
    botName = document.getElementsByClassName("botNameColor")[1];
    botName.style.fill = colorTheme;
    
    botName = document.getElementsByClassName("botNameColor")[2];
    botName.style.fill = colorTheme;

    let botFace = document.getElementsByClassName("botFaceColor")[0];
    botFace.style.fill = colorTheme;
    
    botFace = document.getElementsByClassName("botFaceColor")[1];
    botFace.style.fill = colorTheme;
    
    botFace = document.getElementsByClassName("botFaceColor")[2];
    botFace.style.fill = colorTheme;

    botFace = document.getElementsByClassName("botFaceColor")[3];
    botFace.style.fill = colorTheme;
}

themeColorGenerate();


/* function eyesAnimation {

} */