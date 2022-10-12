<template>
  <!-- DOB Row -->
  <div class="row">
    <div class="mb-3 col-md-3">
      <label>DateOfBirth</label>
    </div>
    <div class="mb-3 col-md-4">
      <input
        type="date"
        class="form-control"
        v-model="date"
        :disabled="isSubmitted"
        @input="$emit('update:modelValue', $event.target.value)"
        :min="minYear"
        :max="maxYear"
      />
    </div>

    <div class="mb-3 col-md-1">
      <label>Age</label>
    </div>

    <div class="mb-3 col-md-3">
      <input
        type="number"
        class="form-control"
        :disabled="true"
        v-model="calculateAge"
      />
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/css/views/FinalOjtProjCSS/register.css";
</style>

<script src="../../services/views/FinalOjtProjJS/birthday.js">
</script>
