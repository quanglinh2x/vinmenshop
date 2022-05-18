const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


// click navbar
const navActive = $('.navbar--item.active')
const line = $('.navbar .line')
const navbarItems =$$('.navbar--item')

navbarItems.forEach(function(navbarItem){
    
    navbarItem.onclick = function() {
        $('.navbar--item.active').classList.remove('active')
        this.classList.add('active')
        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'
    }


})
// click to container-heading list
const selectProducts = $$('.container-heading .list .list--item')
const borderProduct = $('.container-heading .list .border')

borderProduct.style.width = selectProducts[0].offsetWidth + 'px'
selectProducts.forEach(function(product){
    product.onclick = function() {
        $('.container-heading .list .list--item.active').classList.remove('active');
        this.classList.add('active')
        borderProduct.style.left= this.offsetLeft+'px'
        borderProduct.style.width = this.offsetWidth+'px'
    }
})

// voting
const votelists = $$('.container-product .vote-list')
const votes = $$('.container-product i')


    votelists.forEach(function(vote){
        localStorage.getItem('vote')
        vote.onclick = function(e){
                showThank()
        
                const star = e.target.classList;
                if(!star.contains('active')){
                    votes.forEach(function(vote){
                        vote.classList.remove('active')
                    });
                    star.add('active')
                localStorage.setItem('vote',$('.star.active'))
            }
        }

    })
    

 
    //  scroll heading 
    const header = $('header .heading');
    isScrolling = false;
    
        
        document.onscroll= function(){
        if (!isScrolling){
            
                header.style.animation = 'slideBottom ease 1s'
                header.style.transform = 'translateY(-120%)'
            
            isScrolling=!isScrolling
        }else{
            setTimeout(function(){
                header.style.animation = 'slideTop ease 1s'
                header.style.transform = 'translateY(0%)'
            },1500)
            isScrolling=!isScrolling
        }
        
    }
    
//  