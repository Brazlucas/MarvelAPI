<template>
  <div>
    <v-card class="mx-auto my-12" max-width="800">
      <div class="grey--text ms-4">
        Current ID: {{ $route.params.id ? $route.params.id : 'No id provided' }}
      </div>
      <template slot="progress">
        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
      </template>
      <v-img width="1200" height="500" v-bind:src="path"></v-img>
      <v-card-title>
        <card>{{ name? name: 'No name provided' }}</card>
      </v-card-title>

      <v-expansion-panels eager accordion>
        <v-expansion-panel v-for="character in 1" :key="character.description">
          <v-expansion-panel-header> ABOUT CHARACTER: 🙍</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ description? description: 'No description provided' }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-expansion-panels>
        <v-expansion-panel v-if="comics.available >= 1">
          <v-expansion-panel-header>
            COMICS: {{ comics.available }}
          </v-expansion-panel-header>
          <v-expansion-panel-content v-for="comicsitem in comicsitems" :key="comicsitem.name" column eager accordion>
            <v-card-text class="comicsavailable">{{ comicsitem.name }}</v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panels v-else v-model="panel" :disabled="disabled" multiple>
          <v-expansion-panel-header>
            COMICS: No items available
          </v-expansion-panel-header>
        </v-expansion-panels>
      </v-expansion-panels>

      <v-expansion-panels>
        <v-expansion-panel v-if="series.available >= 1">
          <v-expansion-panel-header>
            SERIES: {{ series.available }}
          </v-expansion-panel-header>
          <v-expansion-panel-content v-for="seriesitem in seriesitems" :key="seriesitem.name" column eager accordion>
            <v-card-text class="comicsavailable">{{ seriesitem.name }}</v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panels v-else v-model="panel" :disabled="disabled" multiple>
          <v-expansion-panel-header>
            SERIES: No items available
          </v-expansion-panel-header>
        </v-expansion-panels>
      </v-expansion-panels>

      <v-expansion-panels>
        <v-expansion-panel v-if="events.available >= 1">
          <v-expansion-panel-header>
            EVENTS: {{ events.available }}
          </v-expansion-panel-header>
          <v-expansion-panel-content v-for="eventsitem in eventsitems" :key="eventsitem.name" column eager accordion>
            <v-card-text class="comicsavailable">{{ eventsitem.name }}</v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panels v-else v-model="panel" :disabled="disabled" multiple>
          <v-expansion-panel-header>
            EVENTS: No items available
          </v-expansion-panel-header>
        </v-expansion-panels>
      </v-expansion-panels>

      <v-card-actions>
        <router-link class="router" :to="`/`">
          <v-btn class="ma-2" color="red darken-2" dark>
            <v-icon color="white">
              mdi-arrow-left
            </v-icon>
          </v-btn>
        </router-link>

      </v-card-actions>
    </v-card>

    <div class="grey--text ms-4">
      LAST MODIFIED: {{ modified? modified: 'No modified provided' }}
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MarvelService from '../services/marvel.service';
import Character from '../models/character.model';
import Comic from '@/models/comic.model'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);
let toastloading = Vue.$toast.open;

Vue.$toast.open({
    message: 'For more about this character, access marvel.com',
    type: 'info',
    // all of other options may go here
});

@Component
export default class CharacterRoute extends Vue {
  $route!: Vue['$route'] & { params: { id: string } };
  characters: Character[] = [];
  comics: Comic[] = [];
  name: any;
  description: any;
  modified: any;
  url: any;
  path: any;
  extension: any;
  available: any;
  events: any;
  series: any;
  comicsitems: any;
  eventsitems: any;
  seriesitems: any;

  data() {
    return {
      name: "",
      description: "",
      modified: "",
      extension: "jpg",
      path: "",
      available: 0,
      comicsitems: 0,
      eventsitems: 0,
      seriesitems: 0,
      events: 0,
      series: 0,
      disabled: false
    }
  }

  created(): void {
    this.getCharacters()
    toastloading
  }
  
  public getCharacters() {
    MarvelService.getCharacters().then((response) => {
      const { data } = response;
      const selectedCharacter = data.results.find(item => item.id === parseInt(this.$route.params.id));

      this.characters = data.results
      this.comics = selectedCharacter.comics
      this.comicsitems = selectedCharacter.comics.items
      this.events = selectedCharacter.events
      this.eventsitems = selectedCharacter.events.items
      this.series = selectedCharacter.series
      this.seriesitems = selectedCharacter.series.items
      console.log(this.events)
      this.name = selectedCharacter.name
      this.description = selectedCharacter.description
      this.modified = selectedCharacter.modified
      this.url = selectedCharacter.thumbnail
      this.path = `${this.url.path}.${this.extension}`

      if (this.characters.length == 0) {
        console.log("Não foi possível encontrar o personagem")
      }

    }).catch((err: any) => {
      if (err === 404) {
        console.log(err)
      }
    })
    return;
  }

}

</script>

<style scoped lang="scss">
$small: 300px;
$medium: 900px;



.info_container {
  margin: 0 auto;
  margin-top: 15px;
  display: table;
  justify-content: center;
  text-align: center;
}

.router {
  text-decoration: none;
}

p {
  font-size: 12px;
  margin-top: 10px;
  color: rgb(0, 0, 0);
}

.comicsavailable {
  text-align: left;
}

.container {
  background-color: #e23636;
  width: 50%;
  border-radius: 8px;
  box-shadow: black 2px 2px 5px;
  display: table;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  text-align: justify;

  h1 {
    color: aliceblue;
    margin-bottom: 20px;
    text-align: center;
  }

  ul {
    display: table;
    justify-content: center;
    list-style: none;
    margin: 0 auto;
    line-height: 1.7rem;
    text-align: justify;
    font-size: 2.5vh;
  }

  router-link {
    color: aliceblue;
  }

  span {
    color: rgb(211, 211, 211);
  }

}
</style>