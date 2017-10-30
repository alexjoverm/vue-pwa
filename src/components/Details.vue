<template>
  <v-container class="details" fluid text-xs-center>
    <v-layout row wrap>
      <v-flex class="message-list">
        <v-chip v-for="message in messages" :key="message">{{message}}</v-chip>
      </v-flex>
    </v-layout>

    <DetailsFooter @send="sendMessage" />
  </v-container>
</template>


<script>
import DetailsFooter from './DetailsFooter'

export default {
  props: ['id'],
  data: () => ({ messages: ['lele', 'sl'] }),
  methods: {
    sendMessage(input) {
      this.messages.push(input)
    }
  },
  components: {
    DetailsFooter
  }
}
</script>


<style scoped>
.details {
  padding: 0 18px;
}
.message-list {
  padding: 20px 0;
  height: calc(100vh - 120px);
  overflow-y: scroll;
}

.message-list > * {
  display: flex;
}
</style>

