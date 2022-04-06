import { reqCategoryList } from '@/api/index'
const state = {
    baseCategoryList: {}
};
const mutations = {
    getBaseCatagoryList(state, data) {
        state.baseCategoryList = data.data;
    }
};
const actions = {
    async getBaseCatagoryList({ commit }) {
        //  commit.getreqCategoryList();
        let result = await reqCategoryList();
        commit('getBaseCatagoryList', result.data);
    }
};
const getters = {};

export default {
    state,
    actions,
    mutations,
    getters,
}