
export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data() {
    return {
      formData: this.getDatosIniciales(),
      formState: {},
      nombreMinLength: 3,
      nombreMaxLength: 15,
      datos: []
    }
  },
  computed: {
    now() {
      return (new Date()).toISOString()
    },
    total() {
      let total = 0
      if (this.datos) {
        this.datos.forEach(e => {
          total += e.importe
        });
      }
      return total
    }
  },
  mounted() {

  },
  methods: {
    getDatosIniciales() {
      return {
        nombre: '',
        descripcion: '',
        importe: '',
        presupuesto: '',
        gastoTotal: '',
        fecha: '',
      }
    },
    calcularTotal() {
      
      
      
    },
    enviar() {
      let datos = { ...this.formData }
      datos.fecha = this.now
      datos.gastoTotal = this.total
      this.datos.push(datos)
      this.formData = this.getDatosIniciales()
      this.formState._reset()
    }
  }
}


