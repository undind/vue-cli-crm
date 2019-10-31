<template>
  <div>
    <Loader v-if="loading"/>
    <div class="app-main-layout" v-else>

      <Navbar @click="isOpen = !isOpen" />

      <Sidebar v-model="isOpen" />

      <main class="app-content" :class="{full: !isOpen}">
        <div class="app-page">
          <router-view />
        </div>
      </main>

      <AddRecordsButton />

      <!-- <div class="fixed-action-btn">
        <a class="btn-floating btn-large blue" href="#">
          <i class="large material-icons">add</i>
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import AddRecordsButton from '@/components/AddRecordsButton.vue';

export default {
  name: 'main-layout',
  data() {
    return {
      isOpen: true,
      loading: true
    }
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo');
    }

    this.loading = false;
  },
  components: {
    Sidebar,
    Navbar,
    AddRecordsButton
  }
}
</script>