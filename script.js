const resp = document.querySelectorAll("h1")[0]
do {
    const nomeInicial = prompt("Deguite o seu nome: ")
    const nome = (nomeInicial.toUpperCase()).trim()
    if (nome == "MARTA") {
        alert("Nunca te chamo de Marta, tens que notar isso")
     } else if (nome == "SUBMISSA") {
        alert("Acertou na resposta, minha Marilia Favorita")
        resp.innerText = "Te amo"
        break
    } else if (nome == "PALHACO" || nome == "PALHAÇO") {
        alert("Comediante mesmo, mas não é esse")
    } else {
        alert("Falhaste no teste, ate parece que não me coneheçes")
    }
} while (true)
