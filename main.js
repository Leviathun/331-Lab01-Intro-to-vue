const { createApp, ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('This is a very GOOD boots.')
        return {
            product ,description
        }
    }

}).mount('#app')