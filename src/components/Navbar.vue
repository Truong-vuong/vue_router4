<template>
  <nav>
    <ul>
      <li><router-link to="/">Admin</router-link></li>
      <li><router-link to="/customer">Customers</router-link></li>
      <li><router-link to="/blog">Blogs</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  padding: 30px;
  background: #2c3e50;
}

nav a {
  font-weight: bold;
}

ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

ul li a {
  color: #fff;
  text-decoration: none;
}
ul li aa.router-link-exact-active {
  color: #42b983;
}
</style>