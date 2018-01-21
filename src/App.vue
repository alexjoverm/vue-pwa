<template>
  <v-app>
    <Toolbar/>
    <main>
      <v-content>
          <router-view></router-view>
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
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
export default {
  props: ['message', 'show'],
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
