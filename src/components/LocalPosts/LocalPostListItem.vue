<template >
    <div>
        <v-card hover text >
            <v-img
                class="white--text"
                height="200px"
                :src="article.imagen"
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
                <h6 class="grey--text h3" v-if="article.author">{{ article.publishAt | date }} 
                    by {{ article.author }}</h6>
                <h6 class="grey--text h3" v-else>{{ article.publishAt | date }}</h6>
                <h5>
                    {{ article.content | truncate(200) | tailing('...') }}
                </h5>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn color="success" text dark @click="viewPost">More ...</v-btn>
                <v-spacer/>
                <v-btn @click="remove(article)" color="success" text small class="mx-n2" dark><v-icon dark>mdi-delete</v-icon></v-btn>
                <v-btn @click="edit(article.id)" color="success" text small class="mx-n2" dark><v-icon dark>mdi-pencil</v-icon></v-btn>

            </v-card-actions>
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
  computed: {
    postDialog: {
      get () {
        return this.$store.state.postDialog
      },
      set (val) {
        this.$store.commit('setPostDialog', val)
      }
    }
  },
  methods: {
    viewPost () {
      this.$router.push('/post/'+this.article.id)
      this.$store.commit('setActivePost', this.article)
      this.$store.commit('setPostDialog', true)
    },
    remove(item){
        this.$emit('delete',item);
    },
    edit(id){
        this.$router.push('/maintenance-local-post/'+id);
    }
  },
  created () {
    if (this.$route.params.id == this.article.id) {
      this.$store.commit('setActivePost', this.article)
      this.$store.commit('setPostDialog', true)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
