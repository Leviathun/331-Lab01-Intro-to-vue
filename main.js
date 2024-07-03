const { createApp, ref, computed} = Vue

const app = createApp({
    setup(){
        const cart = ref([])
        const premium = ref(false)
        const details = ref([     ])
        
        function updateCart(theId) {
            for (var i = 0; i < cart.value.length; i++) {
                if(cart.value[i].id === theId){
                    cart.value[i].amount++;
                    return;
                }
            }
            cart.value.push({id:theId , amount: 1})
            return;
        }
        return {
            cart ,
            premium ,
            details ,
            updateCart
        }
    }

})
app.component('product-display',productDisplay)
app.component('product-details',productDetails)
app.mount('#app')