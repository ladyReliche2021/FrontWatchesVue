<template>
    <v-container >
        <div>
            <v-btn color="success" class="mb-5" @click="add">Add <v-icon>mdi-plus</v-icon></v-btn>
            <v-row>
                <v-col class="pa-3" cols="12" xs="12" lg="4" sm="6"  v-for="(post) in getPosts" :key="post.id">
                    <LocalPostListItem :article="post" @delete="remove"></LocalPostListItem>
                    <app-post-dialog v-if="getActivePost" :article="getActivePost"></app-post-dialog>
                </v-col>
            </v-row>
        </div>
        <v-pagination @input="pagination" class="mt-12"
        v-model="page"
        :length="total"
        color="green"
        :total-visible="5"
        ></v-pagination>
    </v-container>
</template>

<script>
import LocalPostListItem from '@/components/LocalPosts/LocalPostListItem'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
        total: 0,
        page:1,
        itemPerPage:5,
        getPosts:[],
        tempPost:[],
        currentLimitPage:0,
  }),
  components: {
    LocalPostListItem
  },
  mounted () {
    this.$store.commit('setActivePost', null) 
    const data = JSON.parse( localStorage.getItem('listComment'));
    this.page = 1;
    this.tempPost = data == null ? [] : data;
    this.getPosts = this.tempPost.slice(0, this.itemPerPage);
    try {
        this.total = Math.floor((this.tempPost.length + this.itemPerPage - 1) / this.itemPerPage);
    } catch (error) {
        this.total = 1;        
    }
  },
  methods:{
    add(){
        this.$router.push('/maintenance-local-post');
    },
    remove(item){
        const index = this.getPosts.findIndex(x => x.id == item.id);
        this.getPosts.splice(index,1);
        localStorage.removeItem('listComment');
        localStorage.setItem('listComment',JSON.stringify(this.getPosts));
    },
    pagination(page){
        this.getPosts = this.tempPost.slice(page == 1 ? 0 : this.itemPerPage, this.itemPerPage * page);
    }
  },
  computed: {
    ...mapGetters([
      'getActivePost'
    ]),
  },
  metaInfo: {
    title: 'Local',
    titleTemplate: '%s | '+process.env.VUE_APP_TITLE
  }
}
</script>
