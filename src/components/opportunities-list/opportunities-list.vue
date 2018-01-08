<template>
  <table>
    <thead>
      <tr>
        <td>modality</td>
        <td>number</td>
        <td>agency</td>
        <td>object_description</td>
        <td>starts_in_raw</td>
        <td>edital</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in opportunities">
        <td>{{ item.modality }}</td>
        <td>{{ item.number }}</td>
        <td>{{ item.agency }}</td>
        <td>{{ item.object_description }}</td>
        <td>{{ item.starts_in_raw }}</td>
        <td>{{ item.edital }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Vue from 'vue'

import { list } from './opportunities-service'

export default {
  data () {
    return {
      opportunities: []
    }
  },
  mounted () {
    this.fetchUsers()
  },
  methods: {
    fetchUsers () {
      list()
        .then(response => response.data)
        .then(opportunities => {
          Vue.set(this, 'opportunities', opportunities)
        })
    }
  },
  computed: {
    list () {
      return this.users
    }
  }
}
</script>

<style scoped>

</style>
