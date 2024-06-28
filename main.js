const { createApp, ref, computed} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        const link = ref('https://www.camt.cmu.ac.th/index.php/th/')
        const inventory = ref(100)

        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green' ,image: './assets/images/socks_green.jpg' ,quantity:50 ,sale: true },
            { id: 2235, color: 'blue',image: './assets/images/socks_blue.jpg' ,quantity:0 ,sale: false}
        ])
        const selectedVariant = ref(0)
        
        const sizes = ref([
            { id: 2234, size:'S' },
            { id: 2235, size:'M' },
            { id: 2236, size:'L' }
        ])

        const cart = ref(0)

        function addToCart() {
            cart.value +=1
        }

        function updateImage(variantImage){
            image.value = variantImage
        }

        function updateStock() {
            inStock.value =!inStock.value
        }

        const title = computed(() =>{
            const saleStatus = variants.value[selectedVariant.value].sale
            return brand.value + '' + product.value + (saleStatus ? 'is on sale' : 'is not on sale')
        })
        
        function updateVariant(index) {
            selectedVariant.value = index
        }
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })

        return {
            title ,
            image ,
            link ,
            inStock ,
            inventory ,
            onSale ,
            details ,
            variants ,
            sizes ,
            cart ,
            addToCart ,
            updateImage ,
            updateStock ,
            updateVariant
        }
    }

}).mount('#app')