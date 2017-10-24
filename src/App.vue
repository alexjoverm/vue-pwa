<template>
  <v-app>
    <Toolbar/>
    <main>
      <v-content>
          <router-view></router-view>
      </v-content>
    </main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
export default {
  components: {
    Toolbar
  }
}
</script>
