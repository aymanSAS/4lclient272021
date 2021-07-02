import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from './auth.module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    machineName:'4L Machine', //label of machine
    midDi0:1,          ///1:4l    3:1l
    midDo4:5,          ///5:4l    6:1l
    midMaintMode:100,  ///100:4l  102:1l
    midDo0:1,          ///1:4l    3:1l
    vardeleyMuliplier:4, /// 188:4l  45:1l
    vardelayCarton:11,   /// 11:4l   22:1l   ///the two machines is 1 
    midLockMode:501 ,    ///501:4l  503:4l   .........got to message to dispaly if loack signal is on
    mtimer:30,           ///timer after finish   4l:30   1l:15
    sbatch:[],//{id:'',runid:'',startdate:'',enddate:'',dayend:'',sapid:'',productcode:'',empno:''},
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  },
});


// export default new Vuex.Store({
//   modules: {
//     auth
//   }
// });