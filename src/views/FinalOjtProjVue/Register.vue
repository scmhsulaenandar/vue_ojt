<template>
  <Header title="From OJT Final Project" />
  <Navigation />
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="signup-form">
          <form
            @submit.prevent="onSubmit"
            ref="form"
            class="mt-5 border p-4 bg-light shadow"
          >
            <!-- UserID Row -->
            <div class="row">
              <div class="mb-3 col-md-3">
                <label>User Id</label>
              </div>
              <div class="mb-3 col-md-9">
                <input
                  type="text"
                  name="userID"
                  class="form-control"
                  :disabled="true"
                  v-model="form.userID"
                />
              </div>
            </div>

            <!-- UserName Row -->
            <div class="row">
              <div class="mb-3 col-md-3">
                <label>User Name</label>
              </div>
              <div class="mb-3 col-md-9">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter User Name"
                  v-model="v$.form.userName.$model"
                  :disabled="isSubmitted"
                />
                <!-- Error Message -->
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.userName.$errors"
                  :key="index"
                >
                  <div class="error-msg text-danger">{{ error.$message }}</div>
                </div>
              </div>
            </div>

            <!-- Gender Row -->
            <div class="row">
              <div class="mb-3 col-md-3">
                <label>Gender</label>
              </div>
              <div class="mb-3 col-md-9">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="inlineRadio1"
                    value="male"
                    v-model="form.gender"
                    :disabled="isSubmitted"
                  />
                  <label class="form-check-label" for="inlineRadio1"
                    >Male</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    value="female"
                    id="inlineRadio2"
                    v-model="form.gender"
                    :disabled="isSubmitted"
                  />
                  <label class="form-check-label" for="inlineRadio2"
                    >Female</label
                  >
                </div>
              </div>
            </div>

            <!-- Email Row -->
            <div class="row">
              <div class="mb-3 col-md-3">
                <label>Email</label>
              </div>
              <div class="mb-3 col-md-9">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter Email"
                  v-model="v$.form.email.$model"
                  :disabled="isSubmitted"
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

            <!-- Address Row -->
            <div class="row">
              <div class="mb-3 col-md-3">
                <label>Address</label>
              </div>
              <div class="mb-3 col-md-9">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="form.address"
                  :disabled="isSubmitted"
                ></textarea>
              </div>
            </div>

            <!-- DOB Row -->
            <Birthday v-model="form.date" :isSubmitted="isSubmitted" />

            <!-- User Role Row -->
            <div class="row">
              <div class="mb-3 col-md-3">
                <label>User Role</label>
              </div>
              <div class="mb-3 col-md-9">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="form.userRole"
                  :disabled="isSubmitted"
                >
                  <option selected disabled value="">Choose Role</option>
                  <option>Administrator</option>
                  <option>User</option>
                  <option>Guest</option>
                </select>
              </div>
            </div>
            <div class="reg-btn" v-if="!isSubmitted">
              <button
                type="button"
                class="form-btn btn btn-secondary mb-3 col-md-3"
                @click="resetform"
              >
                Clear
              </button>
              <button
                type="submit"
                class="btn btn-success mb-3 col-md-3"
                :disabled="v$.form.$invalid"
              >
                Confirm
              </button>
            </div>
            <div class="reg-btn" v-if="isSubmitted">
              <button
                type="button"
                class="form-btn btn btn-secondary mb-3 col-md-3"
                @click="back"
              >
                Back
              </button>
              <button type="submit" class="btn btn-success mb-3 col-md-3">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
@import "../../assets/css/views/FinalOjtProjCSS/register.css";
</style>

<script src="../../services/views/FinalOjtProjJS/register.js">
</script>
