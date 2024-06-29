<template>
  <span v-html="aa"></span>
  <!-- <v-container fluid>
    <p>반지름: {{ radius }}</p>
    <p>원의 넓이: {{ area }}</p>
    <p>원의 둘레: {{ circumference }}</p>

    <v-btn size="x-large" @click="increaseRadius">increaseRadius</v-btn>
  </v-container> -->
</template>

<script setup>
import rest from '@/api/rest.js'
import MarkdownIt from 'markdown-it'
import { ref, computed } from 'vue'
const post = async (value) => {
  await rest.postInfo(value)
}

const markdown = '# Markdown-it Example2222\n```test```'
// 반지름 데이터
const radius = ref(5)
const md = new MarkdownIt()
// 계산된 속성들
const area = computed(() => Math.PI * radius.value ** 2)
const circumference = computed(() => 2 * Math.PI * radius.value)

const aa = computed(() => {
  const result = md.render(markdown)
  return result
})

// const aa = ref("<h2>hello</h2>")

// 메서드
const increaseRadius = () => {
  radius.value++
}

function update() {
  const v = {
    Name: 'TestTAS1900101',
    Title: 'LGU+ VoLTE TAS 시스템의 가입자 등록,변경,삭제,조회 기능을 조회한다',
    Desc: '```\nOnly for test purpose\n```'
  }
  post(v)
}
</script>

<script>
export default {
  data() {
    return {
      htmlContent: '<strong>Hello, <em>Vue.js!</em></strong>'
    }
  }
}
</script>
