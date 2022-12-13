var frases=["É muito bonito","Roda os melhores jogos da atualidade","Altamente customizavel"]
var i= 1
var imagem=["https://images.unsplash.com/photo-1598550463415-d397fdddc3e0?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzA5NTU1NjI&ixlib=rb-4.0.3&q=80","https://blog01.wordpress.cloud.carrefour.com.br/wp-content/uploads/sites/2/2020/08/como-jogar-no-computador.jpg","https://shopee.com.br/blog/wp-content/uploads/2022/01/como-montar-um-pc-gamer-barato.jpg"]
function proxima(){
  document.getElementById("img1").src=imagem[i]
  document.getElementById("texto").innerHTML=frases[i]
  i++
 if (i==3){
   i=0
 }
}
