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

//  css img
products =$$('.container-product')

products.forEach(function(product,index){
    product.tabIndex=index
    product.querySelector('.container-product .product-icon').onclick=function(){
        product.querySelector('.container-product img').style.opacity=0.4
    }
})
//  add in cart
carts = $$('.cart')
cartNumber =$('.cart-number')
number=0
const getCartNumber =localStorage.getItem('cartnumber')
if(getCartNumber){
    
    localStorage.setItem('cartnumber',getCartNumber)
}else{
    
    localStorage.setItem('cartnumber',0)
    cartNumber.innerHTML= getCartNumber
  
    
}
carts.forEach(function(cart,index){
    cart.tabIndex=index; 
    cart.onclick=function(){
        
        totalCost(clothes[index])
       
        
        number=JSON.parse(localStorage.getItem('cartnumber'))
        
        header.style.animation = 'slideTop ease 1s'
        header.style.transform = 'translateY(0%)'
        number++;
        
        cartNumber.innerHTML = number
        localStorage.setItem('cartnumber',number)
        setItems(clothes[index])
    }
    
})
    
// get data when click
    
    function setItems(cloth){
        let ItemsInCart =JSON.parse(localStorage.getItem('clothesinCart'))
        

        if (ItemsInCart != null) {
            
            if(ItemsInCart[cloth.tag] == undefined){
                
                ItemsInCart={...ItemsInCart,
                    [cloth.tag] : cloth
                }
            }
            ItemsInCart[cloth.tag].inCart +=1;
        }
        else{
           
            cloth.inCart =1;
             ItemsInCart ={
            [cloth.tag] : cloth
        }
        }
        localStorage.setItem('clothesinCart',JSON.stringify(ItemsInCart))
    }
    function totalCost(cloth){
        let cartCost = localStorage.getItem('totalCost');
        if (cartCost !=null){
            cartCost =parseInt(cartCost)
            localStorage.setItem('totalCost',
            cartCost+cloth.price)
        }else{
        localStorage.setItem('totalCost',cloth.price)}
    }
    