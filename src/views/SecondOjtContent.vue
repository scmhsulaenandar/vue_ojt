<template>
  <div class="container">
    <Header title="From OJT Project2"/>
    <div>
      <h2 class="sec-h2">Welcome from Movies List...</h2>
    </div>
    <ul>
      <SecondContent
        v-for="(movie, index) in movies.length"
        :key="movie.name"
        :index="index"
        :names-array="movies.map(a => a.name)"
    />
    </ul>
    <Footer/>
  </div>
</template>

<style scoped>
@import "../assets/css/views/second-ojt-content.css";
</style>

<script src="../services/views/second-ojt-content.js">
</script>
