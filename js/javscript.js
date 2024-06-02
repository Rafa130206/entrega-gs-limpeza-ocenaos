let titulo = document.querySelector('#titulo')

titulo.addEventListener('mouseenter', entrarTitulo)
titulo.addEventListener('mouseout', sairTitulo)

function entrarTitulo(){
    titulo.style.color = 'aqua'
}

function sairTitulo(){
    titulo.style.color = ''
}

let home = document.querySelector('#home')

home.addEventListener('mouseenter', entrarHome)
home.addEventListener('mouseout', sairHome)

function entrarHome(){
    home.style.color = 'aqua'
}

function sairHome(){
    home.style.color = ''
}

let prob = document.querySelector('#prob')

prob.addEventListener('mouseenter', entrarProb)
prob.addEventListener('mouseout', sairProb)

function entrarProb(){
    prob.style.color = 'aqua'
}

function sairProb(){
    prob.style.color = ''
}

let serv = document.querySelector('#serv')

serv.addEventListener('mouseenter', entrarServ)
serv.addEventListener('mouseout', sairServ)

function entrarServ(){
    serv.style.color = 'aqua'
}

function sairServ(){
    serv.style.color = ''
}

let integrantes = document.querySelector('#integrantes')

integrantes.addEventListener('mouseenter', entrarInt)
integrantes.addEventListener('mouseout', sairInt)

function entrarInt(){
    integrantes.style.color = 'aqua'
}

function sairInt(){
    integrantes.style.color = ''
}

let contato = document.querySelector('#contato')

contato.addEventListener('mouseenter', entrarContato)
contato.addEventListener('mouseout', sairContato)

function entrarContato(){
    contato.style.color = 'aqua'
}

function sairContato(){
    contato.style.color = ''
}