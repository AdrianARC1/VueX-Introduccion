<template>
  <section>
    <div id="asistentes">
        <h1>Asistentes a la sesión en directo</h1>
        <ul>
            <li v-for="asistente in $store.state.asistentes.slice().reverse()" :key="asistente">{{ asistente }}</li>
        </ul>
    </div>
    <div id="caja-form">
        <div id="add">
            <input type="text" placeholder="Nombre del asistente" v-model="$store.state.nombre_asistente">
            <button @click="addAsist">Añadir asistente</button>
            <button @click="delAsist">Eliminar asistente</button>
            <button @click="prueba">Alerta  </button>
        </div>
    </div>
    <cite v-if="$store.state.mostrar==true">{{ $store.state.mensaje }}</cite>
    <h1>{{ $store.state.texto }}</h1>
  </section>
</template>

<script>
export default {
    name: 'AsistentesDirecto',
    methods:{
        prueba(){
            this.$swal({
                title: 'How old are you?',
                icon: 'question',
                input: 'range',
                inputLabel: 'Your age',
                inputAttributes: {
                    min: 8,
                    max: 120,
                    step: 1
                },
                inputValue: 25
                })
        },
        addAsist(){
            this.$store.dispatch('accionAddAsist')
        },
        delAsist(){
            this.$store.dispatch('accionDelAsist')
        }
    },
    mounted(){
        let data = localStorage.getItem('Asistentes')
        if(data!=null){
            this.asistentes=JSON.parse(data)
        }
    }

}
</script>

<style lang="sass" scoped>
@mixin flex
    display: flex
    justify-content: center
    align-items: center

@mixin input_botones
    border-radius: 10px
    border: none
    font-style: italic
    font-weight: bold
    padding: .5rem 1rem
    color: gray

    // scroll personalizado
ul::-webkit-scrollbar
    width: 7px
    border-radius: 10px
ul::-webkit-scrollbar-thumb
    background: #1e2761
    border-radius: 10px


section
    @include flex
    padding: 1rem
    flex-direction: column
    height: 100vh
    background: #1e2761
    #asistentes
        width: 50%
        padding: 1rem
        border-radius: 10px
        background: white
        box-shadow: 1px 1px 3px black
        h1
            color: #7a2048
        ul
            list-style: none
            overflow: scroll
            overflow-x: hidden
            height: 100px
            li
                margin: 10px 0
                font-size: 18px
                color: #408ec6
                font-weight: bold
                border-bottom: 1px solid
                width: 95%
    #caja-form
        width: 50%
        #add
            width: 100%
            display: flex
            justify-content: space-between
            margin: 10px 0
            input
                @include input_botones
                width: 50%
                outline: none
            button
                @include input_botones
                cursor: pointer
                transition: .4s
                &:hover
                    background: #7a2048
                    color: white
    
        cite
            color: orange



    
</style>