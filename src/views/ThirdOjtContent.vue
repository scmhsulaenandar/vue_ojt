<template>
  <div class="container">
    <Header title="From OJT Project3" />
    <form @submit.prevent="onSubmit" class="third-form" ref="form">
      <!-- First and Last Name Row -->
      <div class="row">
        <div class="col-sm-2">
          <label for=""> Name</label>
        </div>
        <div class="col-sm-10">
          <div class="form-group">
            <input
              class="form-control"
              placeholder="Enter name"
              type="text"
              v-model="v$.form.name.$model"
            />
            <!-- Error Message -->
            <div
              class="input-errors"
              v-for="(error, index) of v$.form.name.$errors"
              :key="index"
            >
              <div class="error-msg text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Email Row -->
      <div class="row">
        <div class="col-sm-2">
          <label for=""> Email</label>
        </div>
        <div class="col-sm-10">
          <div class="form-group">
            <input
              class="form-control"
              placeholder="Enter email"
              type="email"
              v-model="v$.form.email.$model"
            />
            <!-- Error Message -->
            <div
              class="input-errors"
              v-for="(error, index) of v$.form.email.$errors"
              :key="index"
            >
              <div class="error-msg text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- URL Row -->
      <div class="row">
        <div class="col-sm-2">
          <label for="url"> URL</label>
        </div>
        <div class="col-sm-10">
          <div class="form-group">
            <input
              class="form-control"
              placeholder="Enter URL"
              type="url"
              v-model="v$.form.url.$model"
            />
            <!-- Error Message -->
            <div
              class="input-errors"
              v-for="(error, index) of v$.form.url.$errors"
              :key="index"
            >
              <div class="error-msg text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- PhoneNumber Row -->
      <div class="row">
        <div class="col-sm-2">
          <label for="phoneNo"> Phone Number</label>
        </div>
        <div class="col-sm-10">
          <div class="form-group">
            <input
              class="form-control"
              placeholder="Enter phone number"
              type="number"
              v-model="v$.form.phoneNo.$model"
            />
            <!-- Error Message -->
            <div
              class="input-errors"
              v-for="(error, index) of v$.form.phoneNo.$errors"
              :key="index"
            >
              <div class="error-msg text-danger">{{ error.$message }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="buttons-w">
        <button type="button" class="btn btn-secondary btn-cancel" style="margin-left: 250px" @click="resetform">
          Cancel
        </button>
        <button 
          type="submit"
          class="btn btn-success btn-confirm"
          style="margin-left: 70px"
          :disabled="v$.form.$invalid"
        >
          Comfirm
        </button>
      </div>
    </form>
    <Footer />
  </div>
</template>

<style scoped>
@import "../assets/css/views/third-ojt-content.css";
</style>

<script src="../services/views/third-ojt-content.js">
</script>
