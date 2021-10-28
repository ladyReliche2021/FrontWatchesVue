<template>
    <v-container >
        <div>
            <v-row v-if="render">
                <v-col class="pa-3" cols="12" xs="12" lg="4" sm="6"  v-for="(post,index) in getRemotePosts" :key="index">
                    <RemotePostListItem :article="post"></RemotePostListItem>
                </v-col>
            </v-row>
        </div>
        <v-pagination 
        @input="pagination" 
        class="mt-12"
        v-model="page"
        :length="total"
        color="green"
        :total-visible="5"
        ></v-pagination>
    </v-container>
</template>

<script>
import RemotePostListItem from '@/components/RemotePosts/RemotePostListItem'
export default {
  data: () => ({
        total: 0,
        page:1,
        itemPerPage:10,
        getRemotePosts:[],
        render:true,
  }),
  components: {
    RemotePostListItem
  },
  async created () {
    const {data} = await this.$store.dispatch('getNews',{page:this.page,items:this.itemPerPage});
    this.getRemotePosts = data.articles;
    try {
        this.total = Math.floor((data.totalArticles + this.itemPerPage - 1) / this.itemPerPage);
    } catch (error) {
        this.total = 1;        
    }    
    
  },
  methods:{
    async pagination(page){
        this.render = false;
        const {data} = await this.$store.dispatch('getNews',{page:page,items: this.itemPerPage});
        this.getRemotePosts = [];
        this.getRemotePosts = data.articles;
        this.render = true;
        try {
            this.total = Math.floor((data.totalArticles + this.itemPerPage - 1) / this.itemPerPage);
        } catch (error) {
            this.total = 1;        
        }    
    }
  },
  metaInfo: {
    title: 'Remote',
    titleTemplate: '%s | '+process.env.VUE_APP_TITLE
  }
}
</script>
