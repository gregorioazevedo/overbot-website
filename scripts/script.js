/*     ============== DEFINIÇÃO DAS CORES DO SITE ============ */

const colorOptions = ['#00CCFF',
'#FFDA47',
'#50C878',
'#FF2E82',
'#CC99FF',
'#FF5252'];

const primaryFontColor = '#FFFFFF';
const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];

const inviteButton = document.getElementById('inviteButton');
const closeButton = document.getElementById('closeButton');
const buttonWrapper = document.getElementById('buttonWrapper');
const botMessage = document.getElementById('botMessage');

const talkingButtons = document.querySelectorAll('.talkingButton');
const botNamePaths = document.querySelectorAll('.botNameColor');
const botColorSVGs = document.querySelectorAll('.botColorSVG');
const talkingAreaElements = document.querySelectorAll('.talkingButton');

let interval;

/*     ============== DESIGNANDO CORES AOS ELEMENTOS =============== */

inviteButton.style.backgroundColor = randomColor;

talkingButtons.forEach(function(talkingButton){

    talkingButton.addEventListener('mouseover', function(){
        talkingButton.style.color = randomColor;
    })
    
    talkingButton.addEventListener('mouseout', function(){
        talkingButton.style.color = primaryFontColor;
    })
    
}); 

/* ----- Cores dos SVGs ----- */

botColorSVGs.forEach(function(botColorSVG){
    botColorSVG.style.fill = randomColor;
});

/* ============= MANIPULAÇÃO DOS TEXTOS =============== */

function displayMessage(eventMessage){
    
    const talkingAreaElements = document.querySelectorAll('.talkingButton');

    buttonWrapper.style.display = 'none';

    talkingAreaElements.forEach(function(talkingAreaElement){
        talkingAreaElement.style.display = 'none';
    });

    botMessage.style.display = 'block';
    
    const typingMessage = eventMessage.split('')
    
    messageInterval(typingMessage,botMessage);
}

function messageInterval(typingMessage,typedMessage){
    interval = setInterval(function() {
        if (typingMessage.length){
            typedMessage.innerHTML += typingMessage.shift()
        }
        else{
            clearInterval(interval);
        }
    }, 65);
}

/* =============== EVENTOS DE ESCRITA DOS BOTÕES ========= */

talkingButtons.forEach(function(talkingButton){
    talkingButton.addEventListener('click', function(event){
        const aboutButtonIsClicked = event.target.innerHTML == talkingButtons[0].innerHTML;
        const commandsButtonIsClicked = event.target.innerHTML == talkingButtons[1].innerHTML;
        const contactButtonIsClicked = event.target.innerHTML == talkingButtons[2].innerHTML;

        if (aboutButtonIsClicked){
            displayMessage('I can help you track your MD5 progress in this game we all love called Overwatch! I send an interactable message on the chat and with each interaction you will be able to track your wins and losses.');
        }

        if (commandsButtonIsClicked){
            displayMessage('/md5 - Track your MD5. You will be asked for your Overwatch battletag and role tracked.')
        }

        if (contactButtonIsClicked){
            displayMessage('gregorioazevedo.dev@gmail.com');
        }
    })
});

closeButton.addEventListener('click', function(){
    talkingAreaElements.forEach(function(talkingAreaElement){
        talkingAreaElement.style.display = 'block';
        botMessage.style.display = 'none';
    })
    botMessage.innerText = '';
    buttonWrapper.style.display = 'block';
    clearInterval(interval);
})
