
let time = 2000, 
    currentImageIndex = 0, //qual imagem q 'esta' aparecendo
    images = document.querySelectorAll(".instagram-phone img"),
    max = images.length; //variavel para o total de imagens

function slideImage() { //funcao para troca de imagens
    
    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max) {
        currentImageIndex = 0 //qndo chegar na ultima imagem voltar p 0
    }

    images[currentImageIndex].classList.add("selected")
}

function slide() {
    setInterval(() => { //troca das imagens
        slideImage()
    }, time)
}

//executar o 'slide' td vez q a window for executada
window.addEventListener("load", slide);

const salesPlans = {
    "motos": {
        "show": true,
        "title": "Para motos",
        "icon":[
            {
                "show": true,
                "title": "Para motos"
            }, 
            {
                "show": true,
                "title": "Para motos"
            },
        ]
    },
    "carros": {
        "show": true,
        "title": "Para motos",
        "icon":[
            {
                "show": true,
                "title": "Para motos"
            }, 
            {
                "show": true,
                "title": "Para motos"
            },
        ]
    }
}
console.log(salesPlans.motos[icon])

const obj = {
    "column01": "Coluna 01",
    "column02": "Coluna 02"
  };
  
  for (const [key, value] of Object.entries(obj)) {
    console.log(key + ' ' + value);
  }