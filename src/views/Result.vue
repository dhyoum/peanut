<template>
  <v-container fluid>
    <v-card variant="text" title="시험 결과">
      <v-data-table :headers="headers" :items="datas" density="compact" item-key="Id">
        <template v-slot:[`item.Name`]="{ item }">
          <strong>{{ item.Name }}</strong>
        </template>
        <template v-slot:[`item.Title`]="{ item }">
          {{ item.Title }}
        </template>
        <template v-slot:[`item.Result`]="{ item }">
          <span :class="getColor(item.Result)">
            {{ item.Result ? 'success' : 'failure' }}
          </span>
        </template>
        <template v-slot:[`item.Data`]="{ item }">
          <a :href="item.Data.Url" target="_blank">JobURL</a>
          <span> </span>
          <a :href="item.Data.LogUrl" target="_blank">LogUrl</a>
          {{ item.Data.Reason }}
          {{ item.Data.SubSucc }}
          {{ item.Data.SubTotal }}
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import rest from '@/api/rest.js'

const datas = ref([])

const getResults = async () => {
  const { data } = await rest.getResults(0, 100)
  datas.value = data
  datas.value.forEach((d) => {
    if (d.Data) {
      d.Data = JSON.parse(d.Data)
      console.log(d.Data)
    }
  })
}

function getColor(result) {
  return result ? 'text-blue' : 'text-red'
}

// function getUrl(json) {
//   const obj = JSON.parse(json)
//   return obj.Url
// }

onMounted(() => {
  getResults()
})

const headers = [
  { title: 'Id', align: 'start', key: 'Id' },
  { title: 'Item', align: 'start', key: 'Name' },
  { title: 'Title', align: 'start', key: 'Title' },
  { title: 'Start', align: 'start', key: 'Start' },
  { title: 'Duration', align: 'start', key: 'Duration' },
  { title: 'Result', align: 'start', key: 'Result' },
  { title: 'Data', align: 'start', key: 'Data' }
]
</script>
