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
    </v-snackbar>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
export default {
  props: ['message', 'show'],
  components: {
    Toolbar
  }
}
</script>

<style>
.notification {
  position: absolute;
}
</style>
