<template>
  <div class="home">
    <div class="content">
      <v-flex class="message-list">
        <v-chip v-for="message in messages" :key="message">{{message}}</v-chip>
      </v-flex>
    </div>

    <v-footer class="my-foot" color="grey lighten-2">
      hey
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        'lele',
        'sl',
        'sl',
        'sl',
        'sl',
        'sl',
        'sl',
        'sl',
        'sl',
        'sl',
        'sl',
        'sl',
        'sl',
        'sl',
        'sl',
        'sl',
        'sl'
      ]
    }
  }
}
</script>

<style scoped>
.home {
  padding: 0 20px;
}
.message-list {
  padding: 20px 0;
  height: calc(100vh - 120px);
  overflow-y: scroll;
}

.message-list > * {
  display: flex;
}

.my-foot {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 5;
}
</style>

