<template>
  <div>
    <Loader v-if="loading"/>
    <div class="app-main-layout" v-else>

      <Navbar @click="isOpen = !isOpen" />

      <Sidebar v-model="isOpen" :key="locale"/>

      <main class="app-content" :class="{full: !isOpen}">
        <div class="app-page">
          <router-view />
        </div>
      </main>

      <AddRecordsButton />

    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import AddRecordsButton from '@/components/AddRecordsButton.vue';
import messages from '@/utils/messages';

export default {
  name: 'main-layout',
  data() {
    return {
      isOpen: true,
      loading: true
    }
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    locale() {
      return this.$store.getters.info.locale;
    }
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || 'Что-то пошло не так!');
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