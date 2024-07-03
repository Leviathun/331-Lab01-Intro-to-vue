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
            'very good',
        ])
        return {
            details 
        }
    }
}