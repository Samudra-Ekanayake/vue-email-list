



const { createApp } = Vue

createApp({
    data() {
        return {
            result: null
        }
    },
    methods: {

    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log("response", response);
                console.log("response.data", response.data);
                this.result = response.data.response;
            });
    }
}).mount('#app');
