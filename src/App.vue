<template>
  <v-app>
    <Toolbar/>
    <main>
      <v-content>
          <router-view :online="online"></router-view>
      </v-content>
    </main>
    <v-footer app></v-footer>
    <v-snackbar
      :absolute="true"
      :timeout="4000"
      v-model="show"
    >
      {{message}}
      <v-btn flat dark color="purple" @click="reload">Install</v-btn>
    </v-snackbar>

    <v-snackbar
      :absolute="true"
      :timeout="4000"
      v-model="showOnlineMsg"
    >
      The app is offline, some features might be disabled.
    </v-snackbar>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
export default {
  props: ['message', 'show'],
  data: () => ({ online: false, showOnlineMsg: false }),
  mounted() {
    this.online = navigator.onLine
    window.addEventListener('online', () => (this.online = true))
    window.addEventListener('offline', () => {
      this.online = false
      this.showOnlineMsg = true
    })
  },
  components: {
    Toolbar
  },
  methods: {
    reload() {
      window.location.reload()
    }
  }
}
</script>

<style>
.notification {
  position: absolute;
}
</style>
