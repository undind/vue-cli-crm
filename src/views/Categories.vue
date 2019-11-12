<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="isLoading"/>
      <div class="row" v-else>
        <CategoryCreate @created="addNewCategory"/>

        <CategoryEdit v-if="categories.length" :categories="categories" @updated="updateCurCategory" :key="categories.length + updateCount"/>
        <p class="center" v-else>Категории пока нет</p>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from '@/components/CategoryCreate.vue';
import CategoryEdit from '@/components/CategoryEdit.vue'

export default {
  name: 'categories',
  data() {
    return {
      categories: [],
      isLoading: true,
      updateCount: 0
    }
  },
  components: {
    CategoryCreate,
    CategoryEdit
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
    },
    updateCurCategory(category) {
      const idx = this.categories.findIndex(c => c.id === category.id);
      this.categories[idx].title = category.title;
      this.categories[idx].limit = category.limit;
      this.updateCount++;
    }
  },
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories');
    this.isLoading = false;
  },
}
</script>