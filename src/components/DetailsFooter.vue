<template>
  <v-footer class="my-foot" color="grey lighten-3">
    <v-layout row>
        <v-flex xs12>
          <v-form @submit.prevent="send">
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
                <v-btn :disabled="!online" type="submit" icon flat><v-icon>send</v-icon></v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  props: ['id', 'online'],
  data: () => ({ input: '' }),
  methods: {
    send() {
      this.$emit('send', this.input)
      this.input = ''
    }
  }
}
</script>

<style>
.my-foot {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  box-shadow: 0 0px 5px -2px rgba(0, 0, 0, 0.23), 0 2px 5px rgba(0, 0, 0, 0.14),
    0 0px 10px rgba(0, 0, 0, 0.15);
}

.form-row {
  align-items: center;
  padding: 6px 0 2px 18px;
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
