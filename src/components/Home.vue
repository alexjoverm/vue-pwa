<template>
  <div class="home">
    <div class="content">
      <v-flex class="message-list">
        <v-chip v-for="message in messages" :key="message">{{message}}</v-chip>
      </v-flex>
    </div>

    <v-footer class="my-foot" color="grey lighten-2">
      <v-layout row>
          <v-flex xs12>
            <v-form @submit.prevent="submitForm">
              <v-layout class="form-row" row>
                <v-flex xs12>
                  <v-text-field
                    class="input"
                    v-model="input"
                    label="Message"
                    single-line
                  ></v-text-field>
                </v-flex>
                <v-flex>
                  <v-btn type="submit" flat><v-icon>send</v-icon></v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      messages: ['lele', 'sl']
    }
  },
  methods: {
    submitForm() {
      this.messages.push(this.input)
      this.input = ''
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
  z-index: 5;
}

.form-row {
  align-items: center;
  padding: 7px 0 5px 18px;
}
.input {
  padding-top: 0;
}

.input /deep/ .input-group__details {
  min-height: 0;
}

.input /deep/ label {
  top: 0;
}
</style>

