
const items = document.querySelectorAll('.menu-item')
  
for (let item of items) {
  item.addEventListener("mouseenter", function(event) {
    if( event.target.previousSibling.previousElementSibling){
      event.target.previousSibling.previousElementSibling.classList.add('menu-item-before')
      
      if(event.target.previousSibling.previousElementSibling.previousSibling.previousElementSibling) {
        event.target.previousSibling.previousElementSibling.previousSibling.previousElementSibling.classList.add('menu-item-beforebefore')
      }
    }
  } , false
  )


  item.addEventListener("mouseleave", function(event) {
    
    if( event.target.previousSibling.previousElementSibling){
      event.target.previousSibling.previousElementSibling.classList.remove('menu-item-before')
      
    if(event.target.previousSibling.previousElementSibling.previousSibling.previousElementSibling) {
      event.target.previousSibling.previousElementSibling.previousSibling.previousElementSibling.classList.remove('menu-item-beforebefore')
    }
    


        }
        
  } , false
  )
}
