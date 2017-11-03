<template>
  <v-container class="details" fluid text-xs-center>
    <v-layout row wrap>
      <v-flex class="message-list">
        <v-chip v-for="message in messages" :key="message['.key']">{{message['.value']}}</v-chip>
      </v-flex>
    </v-layout>

    <DetailsFooter @send="sendMessage" />
  </v-container>
</template>


<script>
import DetailsFooter from './DetailsFooter'
import { imagesRef } from '../db'
import { save, get } from '../store'

export default {
  props: ['id'],
  data: () => ({ cachedMessages: [] }),
  firebase: function() {
    return { fireMessages: imagesRef.child(this.id).limitToLast(60) }
  },
  methods: {
    sendMessage(input) {
      this.$firebaseRefs.fireMessages.push(input)
    }
  },
  computed: {
    messages() {
      return this.fireMessages.length ? this.fireMessages : this.cachedMessages
    }
  },
  created() {
    get(this.id).then(messages => (this.cachedMessages = messages))
    this.$watch('messages', messages => save(this.id, messages), { deep: true })
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

