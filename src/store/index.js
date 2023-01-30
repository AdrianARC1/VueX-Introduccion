import { createStore } from 'vuex'

export default createStore({
  state: {
    nombre_asistente: '',
    mensaje: '',
    mostrar: false,
    encontrado: false,
    asistentes: ['Luis','Fortu']
  },
  getters: {
  },
  mutations: {
    modificar(state){
      state.texto="MODIFO9CACIONA O OAO OAOFOAOFOAFOPGAOPAEGIOGAEI"
    },
    addAsistVuex(state){
        state.mostrar=false
        if(state.nombre_asistente===''){
            state.mostrar=true
            state.mensaje='Debes introducir un nombre permitido'
        }else{
            state.asistentes.push(state.nombre_asistente)
            state.nombre_asistente = ''
            localStorage.setItem('Asistentes', JSON.stringify(state.asistentes))
        }
    },
    delAsistVuex(state){
      if(state.nombre_asistente===''){
        state.mostrar=true
        state.mensaje='Debes introducir el nombre del asistente que quieres eliminar'
    }else{
        for(let i=0; i<state.asistentes.length; i++){
            if(state.nombre_asistente===state.asistentes[i]){ //si he introducido un nombre
                state.encontrado=true
                state.mostrar=false
                //eliminamos el elemento del array
                let indice= state.asistentes.indexOf(state.nombre_asistente)
                state.asistentes.splice(indice,1)

                // actualizamos el local storage

                localStorage.setItem('Asistentes', JSON.stringify(state.asistentes))

            }
        }
        if(state.encontrado===true){
            state.mostrar=false
        }else{
            state.mostrar=true
            state.mensaje="El asistente introducido no está en la lista"
        }
    }
    }
  },
  actions: {
    accionModificar(context){
      context.commit('modificar')
    },
    accionAddAsist(context){
      context.commit('addAsistVuex')
    },
    accionDelAsist(context){
      context.commit('delAsistVuex')
    }
  },
  modules: {
  }
})
