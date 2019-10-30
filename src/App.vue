<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import authLayout from '@/layouts/authLayout.vue';
import mainLayout from '@/layouts/mainLayout.vue';

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'auth') + '-layout';
    }
  },
  components: {
    authLayout,
    mainLayout
  }
}
</script>

<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";
  @import "./assets/index.css";
</style>