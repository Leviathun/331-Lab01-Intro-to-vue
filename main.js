const { createApp, ref, computed} = Vue

const app = createApp({
    setup(){
        const cart = ref(0)
        const premium = ref(false)
        const details = ref([     ])
        
        function updateCart() {
            cart.value += 1
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