<template>
  <v-row>
      <v-flex xs12 md8 offset-md2 lg6 offset-lg3>
      <v-card class="mt-10" >
       <v-form ref="commentForm" v-model="validComment" @submit.prevent="postComment()" validation>
        <v-toolbar dark fixed color="green">
          <v-btn icon dark @click.stop="handleCloseDialog()">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>New Item</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn type="submit" outlined rounded  >Save</v-btn>
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <!-- <v-divider></v-divider> -->
       
         <v-container fluid class="py-5 px-5 mt-8 mb-12" >
           <v-row>
            <v-col cols="12" xs="12" md="12">
                <v-text-field
                    filled
                    prepend-icon="mdi-format-title"
                    v-model="newComment.title"
                    :rules="titleRules"
                    label="Title"
                    required
                ></v-text-field>
             </v-col>
            <v-col cols="12" xs="12" md="12">
                <v-text-field
                filled
                prepend-icon="mdi-account"
                v-model="newComment.author"
                label="Author"
                :rules="authorRules"
                required
                ></v-text-field>
           </v-col>

           <v-col cols="12" xs="12" md="12">
                <v-text-field
                filled
                v-model="newComment.imagen"
                prepend-icon="mdi-file-image"
                label="Imagen"
                :rules="imagenRules"
                required
                ></v-text-field>
           </v-col>

           <v-col cols="12" xs="12">
                <v-textarea
                filled
                prepend-icon="mdi-comment-text"
                v-model="newComment.content"
                :rules="contentRules"
                label="Content"
                required
                ></v-textarea>
           </v-col>
           </v-row>
         </v-container>
       </v-form>
      </v-card>
      </v-flex>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    newComment: {
      id: '',
      title: '',
      author: '',
      content: '',
      imagen: '',
      publishAt: '',
    },
    posts:[],
    validComment: false,
    titleRules: [
      v => !!v || 'Title is required',
    ],
    authorRules: [
      v => !!v || 'Author is required',
    ],
    contentRules: [
      v => !!v || 'Content is required',
    ],
    imagenRules: [
      v => !!v || 'Imagen is required',
    ],
  }),
  async created(){
        const id = this.$route.params && this.$route.params.id;
        const data = JSON.parse( localStorage.getItem('listComment'));
        this.posts = data == null ? []: data;  
         if(id > 0){
            this.newComment = this.posts.find(x => x.id == id);
         }
  },
  methods: {
    postComment () {
      if (this.$refs.commentForm.validate()) {
        if(this.newComment.id > 0){
            const index = this.posts.findIndex(x => x.id == this.newComment.id);
            this.posts.splice(index,1,this.newComment);
            localStorage.removeItem('listComment');
            localStorage.setItem('listComment',JSON.stringify(this.posts));
        }else{
            const max = this.getMaxIdentificacion(this.posts);
            this.newComment.id = max + 1;
            const today  = new Date();
            this.newComment.publishAt = today.toLocaleDateString("en-US");
            this.posts.push(this.newComment);
            localStorage.removeItem('listComment');
            localStorage.setItem('listComment',JSON.stringify(this.posts));
        }
        this.$router.go(-1)
      } else { return }
    },
    getMaxIdentificacion(array){
        if(array.length > 0){
            let arrayId = [];
            arrayId = array.map(x => x.id);
            return Math.max.apply(null, arrayId);
        }
        return 0;
    },
    handleCloseDialog () {
      this.$router.go(-1)
    }
  },
  metaInfo () {
    return {
      title: "New Item",
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
