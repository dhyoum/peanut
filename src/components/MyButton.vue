<template>
  <!-- <slot></slot> -->
  <button @click="increaseBy2">
    {{ value }}
  </button>
  <p></p>
  <h2>{{ title }}</h2>
  <h3>{{ name }}</h3>
  <slot name="first"></slot>

  <p>여기는 컴포넌트 내에서 있는 곳</p>

  <slot name="second"></slot>
</template>

<script setup>
import { ref } from 'vue'
const item = ref(33)
// defineProps(['title', 'name'])
defineProps({ title: String, name: String })
// defineEmits(['increaseBy2'])
const emit = defineEmits(['increaseBy2', 'submit'])
function increaseBy2() {
  emit('increaseBy2', item.value)
}
const value = ref('버튼')
</script>

<style scoped>
.large {
  font-size: large;
  background: rgb(17, 51, 23);
  color: white;
}
</style>
