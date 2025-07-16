<template>
  <table class="">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :keys="item.id">
        <td v-for="key in keys" :key="key">{{ ítem[key] }}</td>
        <td><slot name="actions" :item="item"></slot></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  headers: Array,
  keys: Array,
  items: Array,
});
</script>
