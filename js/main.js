const btn = document.querySelector('.botao')
const videoContainer = document.querySelector('.video-container')
const fechar = document.querySelector('.close')
const item = document.querySelector('.detalhe');
const img = document.querySelector('.box-detalhe')
const botoesClasse = document.querySelector('.botoes')
const video = document.querySelector('.video')

btn.addEventListener('click', () => {
  console.log('clicou')
  videoContainer.classList.add('show');
})

fechar.addEventListener('click', ()=>{
  videoContainer.classList.remove('show')
  botoesClasse.classList.remove('visible')
  video.src= ""
});


function clicou() {
  console.log(arguments)
  img.src = arguments[0]
  video.src = `https://www.youtube.com/embed/${arguments[1]}`
  item.classList.add('visible')
  botoesClasse.classList.remove('botoes')
  botoesClasse.add('visible')
}