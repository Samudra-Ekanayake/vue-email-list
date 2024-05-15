



const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    },
    methods: {

    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response) {
                const result = response.data;
            });

    },
}).mount('#app')
