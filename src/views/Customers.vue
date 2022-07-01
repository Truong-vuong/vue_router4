<template>
  <div class="customers">
    <div v-for="customer in customers" :key="customer.id">
      <router-link :to="`/customer/${customer.id}`">{{
        customer.name
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const customers = [
      {
        id: 1,
        name: "Nguyễn Văn A",
        age: 18,
        address: "Hue",
      },
      {
        id: 2,
        name: "Nguyễn Văn B",
        age: 33,
        address: "SaiGon",
      },
      {
        id: 3,
        name: "Nguyễn Văn C",
        age: 67,
        address: "Hanoi",
      },
    ];

    return {
      customers,
    };
  },
};
</script>
   
<style>
a {
  text-decoration: none;
  color: #2c3e50;
}
</style>