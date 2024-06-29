<template>
  <v-navigation-drawer v-bind="$attrs">
    <!-- <template
      #img="props"
    >
      <v-img
        :gradient="gradient"
        v-bind="props"
      />
    </template> -->
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
        rounded="shaped"
        class="py-1"
        active-class="primary white--text"
        link
        :to="item.to"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useAttrs } from 'vue'
const attrs = useAttrs()
const items = [
  { text: 'Test Result', icon: 'mdi-playlist-check', to: '/' },
  { text: 'Item manage', icon: 'mdi-credit-card', to: '/item' },
  { text: 'Test Page', icon: 'mdi-credit-card', to: '/test' },
  { text: 'Test2 Page', icon: 'mdi-credit-card', to: '/test2' },
  { text: 'About', icon: 'mdi-comment-alert-outline', to: '/about' }
]

console.log(attrs)
</script>
<style scoped lang="sass"></style>
