<template>
  <div class="q-pa-md row justify-center">

    <div
      v-ripple
      class="relative-position container flex text-white"
    >
    <div class="hoverText">
      Click/tap me
    </div>

    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const colors = [
  'primary', 'amber', 'secondary', 'orange', 'accent',
  'lime', 'cyan', 'purple', 'brown', 'blue'
]

export default {
  setup () {
    const color = ref(colors[ 0 ])
    const index = ref(0)

    let timer

    // onMounted(() => {
    //   timer = setInterval(() => {
    //     index.value = (index.value + 1) % colors.length
    //     color.value = colors[ index.value ]
    //   }, 3000)
    // })

    // onBeforeUnmount(() => {
    //   clearTimeout(timer)
    // })

    return {
      color,
      index,
      classes: computed(() => `bg-${color.value}`)
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  background-image: url("https://cdn.quasar.dev/img/parallax2.jpg")
  background-repeat: no-repeat
  background-position:  center
  background-size: cover
  border-radius: 3px
  cursor: pointer
  transition: background 1.5s
  height: 120px
  width: 100%
  max-width: 500px


.hoverText
  background-color: black
  margin-top:30px
  left:-20px
  position: absolute
</style>
