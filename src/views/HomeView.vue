<template>
  <div class="home">
    <asistentes-directo></asistentes-directo>
  </div>
</template>

<script>
// @ is an alias to /src
import AsistentesDirecto from '@/components/AsistentesDirecto.vue'

export default {
  name: 'HomeView',
  components: {
    AsistentesDirecto
  }
}
</script>
