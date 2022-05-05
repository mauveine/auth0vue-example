<template>
  <div>
    <button class="btn btn-primary" @click="login">Login</button>
    <router-view />
  </div>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue'

const { isAuthenticated, isLoading, user, loginWithRedirect } = useAuth0()
console.log(isAuthenticated, isLoading, user)

function login() {
  loginWithRedirect()
}
</script>

<style>
@import '~@stjudecloud/theme/dist/css/stjude-cloud-theme.min.css';
</style>
