const productDetails = {

    template:
    /*html*/
    `
        <ul>
            <li v-for="detail in details">{{detail}}</li>
        </ul>
        
    `,
    props: {
        details: String
    },
    setup(props) {
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        return {
            details 
        }
    }
}