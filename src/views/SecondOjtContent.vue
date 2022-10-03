<template>
  <div class="container">
    <Header title="From OJT Project2"/>
    <div>
      <h1 class="sec-h1">Welcome from Movies List...</h1>
    </div>
    <ul>
      <SecondContent
        v-for="(movie, index) in movies.length"
        :key="movie.name"
        :index="index"
        :names-array="movies.map(a => a.name)"
    />
    <!-- <li v-for="movie in movies" :key="movie.id">{{movie.name}}</li> -->
    </ul>
    <Footer/>
  </div>
</template>

<style scoped>
@import "../assets/css/views/second-ojt-content.css";
</style>

<script src="../services/views/second-ojt-content.js">
</script>
