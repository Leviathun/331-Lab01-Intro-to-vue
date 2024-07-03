const { createApp, ref, computed} = Vue

const app = createApp({
    setup(){
        const cart = ref([])
        const premium = ref(false)
        const details = ref([     ])
        
        function updateCart(id) {
            cart.value.push(id)
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