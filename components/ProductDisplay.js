const productDisplay = {

    template:
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image" :class="{ outofstockimg: !inStock }">
            </div>
        </div>
    </div>
    <div class="product-info">
        <h1><a :href="link"> {{title}} </a></h1>
        <p v-if="inventory > 10 && onSale">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0 && onSale">Almost out of Stock</p>
        <p v-else>Out of Stock</p>
        <ul>
            <li v-for="detail in details">{{detail}}</li>
        </ul>
        <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}">
            {{variant.color}}
        </div>
        <div v-for="size in sizes" :key="size.id">
            {{size.size}}
        </div>

        <button class="button" :disabled="!inStock" @click="addToCart" :class="{disabledButton: !inStock}">Add To Cart</button>

        <button class="button" @click="updateStock">Out of Stock</button>
        </div>
    </div>
    `,
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
}