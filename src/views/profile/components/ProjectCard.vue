<template>
  <div class="">
    <pan-thumb
      :image="$store.getters.userInfo.avatar"
      :height="'100px'"
      :width="'100px'"
      :hoverable="false"
    >
      <div>Hello</div>
      {{ $store.getters.userInfo.title }}
    </pan-thumb>
  </div>
</template>

<script setup>
import {} from 'vue'
import PanThumb from '@/components/PanThumb'
</script>

<style lang="scss" scoped></style>
