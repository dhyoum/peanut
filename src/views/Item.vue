<template>
  <v-container fluid>
    <!-- <v-dialog activator="parent" max-width="1000">
      <template v-slot:default="{ isActive }">
        <v-card rounded="lg">
          <v-card-title class="d-flex justify-space-between align-center">
            <div class="text-h5 text-medium-emphasis ps-2">AAA</div>

            <v-btn icon="mdi-close" variant="text" @click="isActive.value = false"></v-btn>
          </v-card-title>

          <v-divider class="mb-4"></v-divider>
          <v-card-text>
            <v-textarea
              :counter="50"
              class="mb-5"
              rows="1"
              variant="text"
              persistent-counter
              v-model="editedItem.Desc"
            ></v-textarea>
            <span v-html="mdview"></span>

          </v-card-text>

          <v-divider class="mt-2"></v-divider>

          <v-card-actions class="my-2 d-flex justify-end">
            <v-btn
              class="text-none"
              rounded="xl"
              text="Cancel"
              @click="isActive.value = false"
            ></v-btn>

            <v-btn
              class="text-none"
              color="primary"
              rounded="xl"
              text="Send"
              variant="flat"
              @click="isActive.value = false"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog> -->

    <v-card variant="text" title="시험 항목 관리">
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="datas"
        density="compact"
        item-key="Name"
        item-value="Title"
        show-select
        @click:row="detail"
      >
        <template v-slot:[`item.Name`]="{ item }">
          <strong>{{ item.Name }}</strong>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted, watch, nextTick, computed } from 'vue'
import rest from '@/api/rest.js'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
const selected = ref([])
const datas = ref([])
const dialog = ref(false)
const editedItem = ref({
  Name: '',
  Title: '',
  Desc: ''
})

const defaultItem = ref({
  Name: '',
  Title: '',
  Desc: ''
})

const getInfo = async () => {
  const { data } = await rest.getInfo()
  datas.value = data
  console.dir(data)
}

function detail(e, row) {
  editedItem.value = Object.assign({}, row.item)
  dialog.value = true
}

function close() {
  dialog.value = false
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value)
  })
}

const mdview = computed(() => {
  const result = md.render(editedItem.value.Desc)
  return result
})

watch(dialog, (val) => {
  val || close()
})

onMounted(() => {
  getInfo()
})

const headers = [
  { title: '항목', align: 'start', key: 'Name' },
  { title: '내용', align: 'start', key: 'Title' }
]
</script>

<script>
export default {
  data() {
    return {
      selected: [],
      dialog: false
    }
  }
}
</script>
