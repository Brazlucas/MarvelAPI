<template>
    <div>
        <v-card align="center" class="card" flat tile>
            <v-card class="card_children" v-for="character in characters" :key="character.id" mx-auto my-12>
                <router-link class="zoom-image" :to="`/character/${character.id}`">
                    <v-img class="zoom-image" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        :src="character.thumbnail.path + '.' + character.thumbnail.extension" width="450" height="250">
                        <v-card-title class="white--text align-end">{{ character.name }}</v-card-title>
                    </v-img>
                </router-link>
            </v-card>
        </v-card>
        <v-footer dark padless>
            <v-card flat tile class=" lighten-1 white--text text-center">
                <v-card-text>
                    <a href="https://github.com/Brazlucas" target="_blank">
                        <v-btn class="ma-2 outlined" fab color="inherit">
                            <font-awesome-icon icon="fa-brands fa-github" />
                        </v-btn>
                    </a>
                    <a href="https://www.instagram.com/lucas__txt/" target="_blank">
                        <v-btn class="ma-2 outlined" fab color="inherit">
                            <font-awesome-icon icon="fa-brands fa-instagram" />
                        </v-btn>
                    </a>
                    <a href="https://www.linkedin.com/in/lucas-braz-597118230/">
                        <v-btn class="ma-2 outlined" fab color="inherit">
                            <font-awesome-icon icon="fa-brands fa-linkedin" />
                        </v-btn>
                    </a>
                    <v-dialog v-model="dialog" width="600px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn class="ma-2 outlined" fab color="inherit" v-bind="attrs" v-on="on">
                                <font-awesome-icon icon="fa-brands fa-stack-exchange" />
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">PROVIDED BY MARVEL</span>
                            </v-card-title>
                            <v-card-text>
                                attributionHTML
                                :
                                http://marvel.com\">Data provided by Marvel. © 2023 MARVEL
                                attributionText
                                :
                                "Data provided by Marvel. © 2023 MARVEL"
                                code
                                :
                                200
                                copyright
                                :
                                "© 2023 MARVEL"
                                data
                                :
                                {offset: 0, limit: 20, total: 1562, count: 20,…}
                                count
                                :
                                20
                                limit
                                :
                                20
                                offset
                                :
                                0
                                results
                                :
                                [{id: 1011334, name: "3-D Man", description: "", modified:
                                "2014-04-29T14:18:17-0400",…},…]
                                total
                                :
                                1562
                                etag
                                :
                                "6ee97763cfee3aba8ef3d6b261e5595d56e9f83f"
                                status
                                :
                                "Ok"
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="green darken-1" text @click="dialog = false">
                                    Close
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-card-text>

                <v-card-text class="white--text pt-0">
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
                    Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur
                    dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada.
                    Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
                    diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Lucas Braz</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import MarvelService from '../services/marvel.service';
import Character from '../models/character.model'

@Component
export default class HelloWorld extends Vue {
    characters: Character[] = []
    cards: any;
    types: any;
    $store: any;
    dialog: any;
    // isloading: any;

    created() {
        this.getCharacters()
    }

    data() {
        return {
            dialog: false
        }
    }

    public getCharacters() {
        MarvelService.getCharacters().then((response) => {
            const { data } = response
            this.characters = data.results

        }).catch((err: any) => {
            if (err === 404) {
                console.log(err)
            }
        })
    }
}

</script>

<style lang="sass">
    .card 
        display: flex
        flex-wrap: wrap
        margin: 20px
        justify-content: center
        gap: 20px

    .card_children
        max-width: 450px
        max-height: 300px
        overflow: hidden

    .zoom-image 
        transition: transform 0.5s
        text-decoration: none

    .zoom-image:hover 
        transform: scale(1.2)

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

