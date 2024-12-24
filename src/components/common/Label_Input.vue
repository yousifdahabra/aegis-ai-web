<template>
    <div class="flex flex-direction-column form-input">
        <label :for="label" >{{ label }}</label>
        <input :type="type" :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" >
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