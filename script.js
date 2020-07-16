document.querySelector('#items')
.addEventListener('wheel', event => {
    if(event.deltaY > 0 ){
        event.target.scrollBy(490,0)
    }else{
        event.target.scrollBy(-490,0)
    }
})