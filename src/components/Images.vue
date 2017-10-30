<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 class="message-list" v-for="image in images" :key="image.id">
        <v-card flat tile :to="`/images/${image.id}`">
          <v-card-media
            :src="imageUrl(image)"
            height="150px"
          >
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data: () => ({ images: [], limit: 20 }),
  created() {
    fetch('https://picsum.photos/list')
      .then(data => data.json())
      .then(images => (this.images = images.slice(0, this.limit)))
  },
  methods: {
    imageUrl(image) {
      const imageId = image.post_url.split('/').pop()
      return `https://source.unsplash.com/${imageId}`
    }
  }
}
</script>
