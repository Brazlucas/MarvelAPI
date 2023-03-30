<template>
  <v-app class="v-application">
    <PageLoader v-if="showLoader"></PageLoader>
    <v-main>
      <div class="context">
        <v-toolbar color="#e23636" dark>

          <router-link class="link" :to="`/`">
            <v-toolbar-title class="white--text align-end">
              <h1>Marvel CARDS &copy;</h1>
            </v-toolbar-title>
          </router-link>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">

import Vue from 'vue';
import PageLoader from './components/PageLoader.vue';

export default Vue.extend({
  name: 'App',
  components: {
    PageLoader
  },
  data: () => ({
    showLoader: false
  }),

  created() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.showLoader = true
        setTimeout(() => {
          this.showLoader = false;
        }, 700); // 5000 milliseconds = 5 seconds    
      }
    }
  },

  watch: {
    '$route.params': function () {
      this.showLoader = true
      setTimeout(() => {
        this.showLoader = false
      }, 600);
    }
  }
});

</script>

<style lang="scss">
h1 {
  text-align: center;
}

.v-application {
  text-align: center;
}

.link {
  text-decoration: none;
  color: inherit
}
</style>
