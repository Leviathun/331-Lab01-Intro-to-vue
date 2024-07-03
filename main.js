const { createApp, ref, computed} = Vue

createApp({
    setup(){
        const cart = ref(0)
        return {
            cart 
        }
    }

}).mount('#app')