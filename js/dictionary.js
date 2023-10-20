const elcard = document.querySelectorAll('.flower_dictionary_item > .item_card ')
console.log(elcard)

elcard.forEach(function(item){
  item.onclick=function(){
    this.classList.toggle('active')
  }
})