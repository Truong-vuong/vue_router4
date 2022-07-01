<template>
  <div class="customers">
    <div v-for="customer in customers" :key="customer.id" class="box">
      <h3 class="custom">
        <router-link :to="`/customer/${customer.id}`">{{
          customer.name
        }}</router-link>
      </h3>
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
.box {
  display: flex;
  justify-content: center;
}
.custom {
  padding: 1rem;
  margin: 1rem 0;
  background-color: rgb(27, 198, 130);
  width: 300px;
  text-align: center;
  border-radius: 4px;
}
</style>