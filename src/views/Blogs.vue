<template>
  <div class="blogs">
    <div v-for="blog in blogs" :key="blog.id">
      <router-link :to="`/blog/${blog.id}`">{{ blog.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const blogs = [
      {
        id: 1,
        name: "blogs A",
        age: 18,
        address: "Hue",
      },
      {
        id: 2,
        name: "blogs B",
        age: 33,
        address: "SaiGon",
      },
      {
        id: 3,
        name: "blogs C",
        age: 67,
        address: "Hanoi",
      },
    ];

    return {
      blogs,
    };
  },
};
</script>
   
<style>
</style>