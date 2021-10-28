<template>
    <v-container >
        <div>
            <v-btn color="success" class="mb-5" @click="add">Add <v-icon>mdi-plus</v-icon></v-btn>
            <v-row>
                <v-col class="pa-3" cols="12" xs="12" lg="4" sm="6"  v-for="(post) in getRemotePlus" :key="post.id">
                    <RemotePlusListItem :article="post" @delete="remove"></RemotePlusListItem>
                    <app-remote-plus-dialog v-if="getRemoteActivePlus" :article="getRemoteActivePlus"></app-remote-plus-dialog>
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
import RemotePlusListItem from '@/components/RemotePlus/RemotePlusListItem'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
        total: 0,
        page:1,
        itemPerPage:5,
        getRemotePlus:[],
        tempRemotePlus:[]
  }),
  components: {
    RemotePlusListItem
  },
  mounted () {
    
    this.page = 1;
    // const {data} = await this.$store.dispatch('getAll');
    const {data} = null;
    this.tempRemotePlus = data == null ? [] : data;
    this.getRemotePlus = this.tempRemotePlus.slice(0, this.itemPerPage);

    try {
        this.total = Math.floor((this.tempRemotePlus.length + this.itemPerPage - 1) / this.itemPerPage);
    } catch (error) {
        this.total = 1;        
    }    
  },
  methods:{
    add(){
        this.$router.push('/maintenance-remote-plus');
    },
    remove(item){
        const index = this.getRemotePlus.findIndex(x => x.id == item.id);
        this.getRemotePlus.splice(index,1);
        localStorage.removeItem('listComment');
        localStorage.setItem('listComment',JSON.stringify(this.getRemotePlus));
    },
    pagination(page){
        this.getRemotePlus = this.tempRemotePlus.slice(0, this.itemPerPage * page);
    }
  },
  computed: {
    ...mapGetters([
      'getRemoteActivePlus'
    ]),
  },
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | '+process.env.VUE_APP_TITLE
  }
}
</script>
