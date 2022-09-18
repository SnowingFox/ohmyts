<script setup lang="ts">
import axios from 'axios'
import { reactive, watchEffect } from 'vue'
import { useDebounceFn } from '@vueuse/core'

const musicName = $ref('MELANCHOLY')

let musicDetailData = $ref<IGETSearchResponseType>()
let musicCommentData = $ref<IGETCommentMusicResponseType>()

let index = 0

const fetchMusicList = useDebounceFn(() => {
  axios.get('/api/banner').then((res) => {
    musicDetailData = res.data.result
  })

  axios.get(`/music/comment/music?id=186016&limit=${index}`).then((res) => {
    musicCommentData = res.data.result
  })
}, 200)

watchEffect(() => {
  index++
  fetchMusicList()
})
</script>

<template>
  <input v-model="musicName">
  <div text-center>
    {{ musicCommentData }}
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
