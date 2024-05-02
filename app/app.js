// Creo mi instancia principal
const app = Vue.createApp({
    data(){
        return{
            // Acá va mi contenido estático
            titulo: "Hola, estoy andando",
        }
    }
});

// Creo mi componente
app.component('mi-componente', {
    data:function(){
        return {
            form_data:{
                nombre: "",
                edad: "",
                mail: "",
                chech: "",
                enviado: false,
                errores: [],
            }
        }
    },

    // Aca van mis templates
    template: `
    <div class = "form"> 
    
    <form v-on:submin.prevent="guardar" novalidate>

        <label>Nombre</label>
        <input type = "text" v-model.lazy.trim = "form_data.nombre"/>

        <label>Edad</label>
        <input type = "text" v-model.number.trim = "form_data.edad"/>

        <label>Mail</label>
        <input type = "text" v-model.lazy.trim = "form_data.mail"/>

        <label>¿Quieres participar?
        <input type = "checkbox" id = "checkbox" v-model = "form_data.check"/>
        </label>

    </form>
    
    </div>`,

    /* Acá van mis methods
    methods:{
        guardar:function(){

        }
    }*/
});

// Acá monto la instancia 
app.mount(".contenedor");