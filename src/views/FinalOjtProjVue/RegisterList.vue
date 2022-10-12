<template>
  <Header title="From Final OJT Project" />
  <Navigation />
  <div class="container">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col" class="reg-list-ttl">UserID</th>
          <th scope="col" class="reg-list-ttl">User Name</th>
          <th scope="col" class="reg-list-ttl">Gender</th>
          <th scope="col" class="reg-list-ttl">Email</th>
          <th scope="col" class="reg-list-ttl">Address</th>
          <th scope="col" class="reg-list-ttl">DateOfBirth</th>
          <th scope="col" class="reg-list-ttl">UserRole</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userList" :key="user">
          <th scope="row">{{ user.userID }}</th>
          <td>{{ user.userName }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address }}</td>
          <td>{{ user.date }}</td>
          <td>{{ user.userRole }}</td>
        </tr>
      </tbody>
    </table>
    <div class="reg-list-btn">
      <button class="btn-register">
        <a href="/register">Register New User</a>
      </button>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
@import "../../assets/css/views/FinalOjtProjCSS/register-list.css";
</style>

<script src="../../services/views/FinalOjtProjJS/register-list.js">
</script>
