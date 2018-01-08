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


<template>
  <div id="app">

    <md-card>

      <md-card-header>
        <div class="md-title">Painel de Oportunidades</div>
        <div class="md-subhead">by bidbay.org</div>
      </md-card-header>

      <md-card-content>
         <md-table>
          <md-table-header>
            <md-table-row>
              <md-table-head>modality</md-table-head>
              <md-table-head>number</md-table-head>
              <md-table-head>agency</md-table-head>
              <md-table-head>object_description</md-table-head>
              <md-table-head>starts_in_raw</md-table-head>
              <md-table-head>edital</md-table-head>
            </md-table-row>
          </md-table-header>
          <md-table-body>
            <md-table-row v-for="item in opportunities" :key="item._id">
              <md-table-cell>{{ item.modality }}</md-table-cell>
              <md-table-cell>{{ item.number }}</md-table-cell>
              <md-table-cell>{{ item.agency }}</md-table-cell>
              <md-table-cell>{{ item.object_description }}</md-table-cell>
              <md-table-cell>{{ item.starts_in_raw }}</md-table-cell>
              <md-table-cell>{{ item.edital }}</md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
      </md-card-content>

    </md-card>

  </div>
</template>
