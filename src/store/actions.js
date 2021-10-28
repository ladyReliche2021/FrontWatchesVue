// https://vuex.vuejs.org/en/actions.html
import Axios from 'axios';

export default {
    async getNews({commit},data){  
        commit('SUCCESS')
        return  Axios.get(process.env.VUE_APP_BASE_URL_API_GNEWS + 
            "/v4/search?"+"q=watches&max="+data.items+"&page="+data.page+"&token="+process.env.VUE_APP_BASE_URL_TOKEN);
    },

    async getAll({commit}) {
		commit('SUCCESS')
        return Axios.get(process.env.VUE_APP_BASE_URL_API_BLOG + "/PostModels");
	},

    async getById({commit},id){
        commit('SUCCESS')
        return Axios.get(process.env.VUE_APP_BASE_URL_API_BLOG + "/PostModels/"+id);
    },

    async update({commit},model){
        commit('SUCCESS')
        return Axios.put(process.env.VUE_APP_BASE_URL_API_BLOG + "/PostModels/"+model.id, JSON.stringify(model));
    },

    async create({commit},model){
        commit('SUCCESS')
        return Axios.post(process.env.VUE_APP_BASE_URL_API_BLOG + "/PostModels", JSON.stringify(model));
    },

    async delete({commit},model){
        commit('SUCCESS')
        return Axios.delete(process.env.VUE_APP_BASE_URL_API_BLOG + "/PostModels/" +model.id);
    }
}
