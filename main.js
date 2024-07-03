const { createApp, ref, computed, reactive} = Vue

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
        function removeFromCart(theId) {
            for (var i = 0; i < cart.value.length; i++) {
                if (cart.value[i].id === theId) {
                    cart.value[i].amount--;
                    if (cart.value[i].amount === 0) {
                        cart.value.splice(i, 1);
                    }
                    return;
                }
            }
        }
        return {
            cart ,
            premium ,
            details ,
            updateCart ,
            removeFromCart
        }
    }

})
app.component('product-display',productDisplay)
app.component('product-details',productDetails)
app.component('review-form', reviewForm)
app.mount('#app')