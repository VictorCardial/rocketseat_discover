function toggleMode(){
  /*transição de fundo*/
  const html = document.documentElement

  /*if(html.classList.contains('light')){
    html.classList.remove('light')
  }
  else{
    html.classList.add('light')
  }*/

  html.classList.toggle("light")

  /*alteração de imagem */

  /*O método abaixo serve para alteração da foto
  de perfil/ legenda quando a pagina está em light mode ou dark mode. No meu caso acabei não utilizando, só usei uma unica imagem de perfil sem fundo.
  A unica diferença foi que no style.css eu altero a cor
  da borda aproveitando o valor da variavel text-color que os modos/ classe light ou :root possuem 

  #profile img {
  width: 112px;
  border: solid var(--text-color) 1px;
  border-radius: 10px;
}

.light #profile img{
  border: solid var(--text-color) 1px;
}
  Para utilizar o método abaixo é só descomentar e alterar o src/legenda, colocando o onde está o caminho da foto que você quer que apareça para cada um dos modos e sua respectiva legenda.
*/

  
  /*const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute('alt','foto de perfil modelo verão')
  }else{
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "foto de perfil modelo inverno")
  }*/
}
