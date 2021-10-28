<template>
  <v-row>
    <v-dialog v-model="postDialog" fullscreen transition="dialog-bottom-transition">
      <v-flex xs12 md8 offset-md2 lg6 offset-lg3>
      <v-card v-if="this.article">
        <v-toolbar dark fixed color="primary">
          <v-btn icon dark @click.stop="handleCloseDialog()">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ article.title }}</v-toolbar-title>
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader class="mt-5">
          <h1 class="hidden-md-and-up px-3 font-weight-light display-1">{{ article.title }}</h1>
          <v-layout
          row justify-center py-2
          class="text-xs-center">
            <v-responsive max-width="400px">
              <v-img  :src="article.imagen"></v-img>
            </v-responsive>
          </v-layout>
          <v-subheader class="pl-7" v-if="article.author">Posted on 
              {{ article.publishAt | date }} by 
              {{ article.author }}</v-subheader>
          <v-list-item-content class="px-7" v-html="article.content">
          </v-list-item-content>
        </v-list>
      </v-card>
      </v-flex>
    </v-dialog>
 
  </v-row>
</template>

<script>
export default {
  data: () => ({
    newComment: {
      name: '',
      email: '',
      content: ''
    },
    validComment: false,
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 25 || 'Name must be less than 25 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    commentRules: [
      v => !!v || 'Comment is required',
      v => v.length <= 200 || 'Comment must be less than 200 characters'
    ],
    dialog: false,
    shareSheet: false
  }),
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
    handleCloseDialog () {
      this.postDialog = false
      this.$router.push('/');
      this.$store.commit('setActivePost', null)
    }
  },
  props: {
    article: {
      type: Object,
      required: true,
      default: null
    }
  },
  metaInfo () {
    return {
      title: this.article.title,
      titleTemplate: '%s | '+process.env.VUE_APP_TITLE
    }
  }
}
</script>

<style lang="css">
div.v-dialog {
  backgrounded: rgba(0,0,0,0.5);
}
</style>
