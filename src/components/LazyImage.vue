<template>
  <v-card-media :src="srcImage" height="150px"></v-card-media>
</template>

<script>
export default {
  props: ['src'],
  data: () => ({ observer: null, intersected: false }),
  computed: {
    srcImage() {
      return this.intersected ? this.src : ''
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      const image = entries[0]
      if (image.isIntersecting) {
        this.intersected = true
        this.observer.disconnect()
      }
    }, {
      rootMargin: '50px'
    })

    this.observer.observe(this.$el)
  },
  destroyed () {
    this.observer.disconnect()
  }
}
</script>

