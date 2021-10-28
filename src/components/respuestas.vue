<template>

  <section class="src-components-respuestas">
    <h1>respuestas</h1>
    <table class="table table-dark">
              <tr>
                  <th>Pregunta</th>
                  <th>respuestas</th>
              </tr>
              <tr v-for="(preguntas,index) in preguntas" :key="index">
                  <td>{{ preguntas.numero }}</td>
                  <td>{{ preguntas.respuestas }}</td>
              </tr>
          </table>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
preguntas : [
{ numero: 1, respuestas: [‘a’,’c’] },
{ numero: 2, respuestas: [‘d’] },
{ numero: 3, respuestas: []}
]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-respuestas {

  }
</style>
