<template>
  <form @submit.prevent.stop="test">
    <input type="text" name="username" id="username" placeholder="username" v-model="login">
    <input type="password" name="password" id="password" placeholder="password" v-model="passwd">
    <input type="submit" value="Send">
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import AuthService from '@/services/api/auth-service';

@Component({
  name: 'login-page',
  components: {},
})
export default class LoginPage extends Vue {
  login: string = '';

  passwd: string = '';

  test() {
    AuthService.login(this.login, this.passwd);
  }
}
</script>
