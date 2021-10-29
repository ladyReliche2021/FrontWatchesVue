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
        return Axios.get(process.env.VUE_APP_BASE_URL_API_BLOG + "/BlogModels");
	},

    async getById({commit},id){
        commit('SUCCESS')
        return Axios.get(process.env.VUE_APP_BASE_URL_API_BLOG + "/BlogModels/"+id);
    },

    async update({commit},model){
        commit('SUCCESS')
        return Axios.put(process.env.VUE_APP_BASE_URL_API_BLOG + "/BlogModels/"+model.id, JSON.stringify(model),{headers: { 'Content-Type': 'application/json' }});
    },

    async create({commit},model,){
        delete model.id;
        commit('SUCCESS')
        return Axios.post(process.env.VUE_APP_BASE_URL_API_BLOG + "/BlogModels", JSON.stringify(model),{headers: { 'Content-Type': 'application/json' }});
    },

    async delete({commit},model){
        commit('SUCCESS')
        return Axios.delete(process.env.VUE_APP_BASE_URL_API_BLOG + "/BlogModels/" +model.id,{headers: { 'Content-Type': 'application/json' }});
    }
}
