const { createApp, ref} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th/index.php/th/')
        const inStock = ref(true)
        const inventory = ref(100)
        return {
            product ,image ,link ,inStock ,inventory
        }
    }

}).mount('#app')