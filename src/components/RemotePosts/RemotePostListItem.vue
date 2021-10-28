<template >
    <div>
        <v-card hover text >
            <v-img
                class="white--text"
                height="200px"
                :src="article.image"
            >
                <v-container fill-height fluid>
                <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                    <h2 class="headline font-weight-bold" style="text-shadow: 0px 2px 5px #222;">{{ article.title }}</h2>
                    </v-flex>
                </v-layout>
                </v-container>

                <v-container>
                    <div>
                        <v-row>
                        </v-row>
                    </div>
                </v-container>
            </v-img>
            <v-card-title>
                <div>
                <h6 class="grey--text h3" v-if="article.source.name">{{ article.publishedAt | date }} 
                    by {{ article.author }}</h6>
                <h6 class="grey--text h3" v-else>{{ article.publishedAt | date }}</h6>
                <h5>
                    {{ article.content | truncate(200) | tailing('...') }}
                </h5>
                </div>
            </v-card-title>
        </v-card>
    </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="css" scoped>
</style>
