clothes =[
    {
        name:"Button Tweez",
        tag:'buttontweez', 
        img:'./assets/img/product/product1.jpg',
        price: 99,
        inCart:0
    },
    {
        name:"Perfection Stretch T-Shirt",
        tag:'perdection', 
        img:'./assets/img/product/product2.jpg',
        price: 79,
        inCart:0
    },
    {
        name:"Bombe Jean",
        tag:'bombe', 
        img:'./assets/img/product/product3.jpg',
        price: 69,
        inCart:0
    },
    {
        name:"Tropical Kimono",
        tag:'tropical', 
        img:'./assets/img/product/product4.jpg',
        price: 129,
        inCart:0
    },
    {
        name:"Coduroy Comle",
        tag:'coduroy', 
        img:'./assets/img/product/product10.jpg',
        price: 299,
        inCart:0
    },
    {
        name:"Flowy Coat",
        tag:'flowy', 
        img:'./assets/img/product/product13.jpg',
        price: 79,
        inCart:0
    },
    {
        name:"Beauty Mangto",
        tag:'mangto', 
        img:'./assets/img/product/mangto.jpg',
        price: 69,
        inCart:0
    },
    {
        name:"Resistant sunglasses",
        tag:'sunglass', 
        img:'./assets/img/product/productbig1.jpg',
        price: 129,
        inCart:0
    }
]

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const cartItem =JSON.parse(localStorage.getItem('cartnumber'))
localStorage.setItem('cartitem', cartItem)

 
    function displayCart(){
        
        // inner số lượng vào cart
    if (cartItem){
        $('.cart-number').innerHTML =JSON.parse(localStorage.getItem('cartitem'))
    }else{
        $('.cart-number').innerHTML =`0`
    }
           //  display product va calculate
        let ItemsInCart =JSON.parse(localStorage.getItem('clothesinCart'))
        
        let cartCost = localStorage.getItem('totalCost');
        let container =$('.content-container')
        if (ItemsInCart &&container){
            container.innerHTML ='';
            
            Object.values(ItemsInCart).map((item)=>{
                
                container.innerHTML+=`
                <div class="cart-item">
                    <div class="product-info item">
                        <img src=${item.img}   />
                        
                    </div>
                    <h5 id="price" class="item">$${item.price}</h5>
                    <div id="quanlity" class="item">
                        
                        <span>${item.inCart}</span>
                        
                    </div>
                    <h5 id="total" class="item">$${item.inCart*item.price} <i class="fa-solid fa-circle-xmark item"></i></h5>
                    
                </div>
                `
                
            });
            container.innerHTML += `<div class="totalCost">Total Cost:$${cartCost}</div>`
            
        }
        // close product
        closes =$$('.fa-circle-xmark')
        closes.forEach(function(close,index){
            close.onclick= function(){
                console.log(JSON.parse(localStorage.getItem('clothesinCart')))
                console.log(cartCost)
                deleteItem = Object.keys(ItemsInCart)[index]
                

                
                if(ItemsInCart[deleteItem]){
                    
                    cartCost =localStorage.getItem('totalCost')
                    ItemsInCart=JSON.parse(localStorage.getItem('clothesinCart'))
                    deletePrice=JSON.parse(ItemsInCart[deleteItem]['price'])
                    cartCost =cartCost-(ItemsInCart[deleteItem]['price']*(ItemsInCart[deleteItem]['inCart']))
                    cartitem= JSON.parse(localStorage.getItem('cartitem'))-JSON.parse(ItemsInCart[deleteItem]['inCart'])
                    
                    $('.totalCost').innerHTML=`Total Cost:$${cartCost}`,
                    delete ItemsInCart[deleteItem]
                    
                    
                    localStorage.setItem('cartitem',cartitem)
                    localStorage.setItem('totalCost',cartCost),

                    localStorage.setItem('clothesinCart',JSON.stringify(ItemsInCart))
                    

                
                }
                
                const parent =this.parentElement.parentElement
                parent.parentNode.removeChild(parent)
                $('.cart-number').innerHTML=cartitem
                localStorage.setItem('cartnumber',cartitem)
                window.location.reload(true)
            }
            
            
        })
    }
        displayCart()
        

        
      
        
            
        
        