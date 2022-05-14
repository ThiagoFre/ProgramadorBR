var nota1 = 10;
var nota2 = 1.5;
var media = (nota1 + nota2)/2;
var conceito = media;

if(media >= 8){
    console.log("Você foi bem")
} else if (media >= 6.5){
    console.log("Você precisa melhorar")
} else{
    console.log("Recuperação")
}

// -x-

if(media >= 8){
    conceito = "Otimo desempenho"
} else if (media >= 6.5){
    conceito = "Está na média"
} else{
    conceito = "Reprovado"
}

console.log(media)
console.log(conceito)

switch(conceito){
    case "Otimo desempenho":
    console.log("Você foi bem") 
    break;
        case "Está na média":
        console.log("Você precisa melhorar")
        break;    
            case "Reprovado":
            console.log("Recuperação")
            break;    
                default:
                console.log("Error")
                break;
}