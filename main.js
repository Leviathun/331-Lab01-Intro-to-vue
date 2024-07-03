const { createApp, ref, computed} = Vue

const app = createApp({
    setup(){
        const cart = ref(0)
        const premium = ref(false)
        return {
            cart ,
            premium 
        }
    }

})
app.component('product-display',productDisplay)
app.mount('#app')