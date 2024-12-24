<template>
    <div class="flex flex-direction-column form-input">
        <label for="Email">Email</label>
        <input type="text" placeholder="Email" name="" id="">
    </div>
</template>

<script>
export default {
    props: {
    label: String,
    placeholder: String,
    type: String,
    modelValue: String,
  } 
}
</script>

<style></style>