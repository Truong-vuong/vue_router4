<template>
  <div class="blogs">
    <div v-for="blog in blogs" :key="blog.id" class="box">
      <h3 class="blog">
        <router-link :to="`/blog/${blog.id}`">{{ blog.name }}</router-link>
      </h3>
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
a {
  text-decoration: none;
  color: #2c3e50;
}
.box {
  display: flex;
  justify-content: center;
}
.blog {
  padding: 1rem;
  margin: 1rem 0;
  background-color: rgb(27, 198, 130);
  width: 300px;
  text-align: center;
  border-radius: 4px;
}
</style>