<template>
  <div id="app">
    <title>
  Ayman
      </title>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href class="navbar-brand" @click.prevent>TYM</a>
      <div class="navbar-nav mr-auto">
        <!-- <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" />Home
          </router-link>
        </li> -->
          <!-- <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/sites" class="nav-link">Sites</router-link>
        </li> -->

         <li v-if="showAdminBoard  || showManagerBoard" class="nav-item">
          <router-link to="/chart" class="nav-link">Chart</router-link>
          </li>

         <li v-if="showAdminBoard || showOpBoard" class="nav-item">
          <router-link to="/ppd" class="nav-link">PPD</router-link>
          </li>

          <li v-if="showAdminBoard || showOpBoard" class="nav-item">
          <router-link to="/messages" class="nav-link">Operator Failures</router-link>
          </li>



          <li v-if="showAdminBoard || showMaintBoard" class="nav-item">
          <router-link to="/maintmessages" class="nav-link">Maintenance Failures</router-link>
         </li>


          <li v-if="showAdminBoard ||   showManagerBoard" class="nav-item">
          <router-link to="/managermessages" class="nav-link">Manager Failures </router-link>
          </li>
         <!-- //admin menue  -->
<div class="dropdown">
  <button  v-if="showAdminBoard || showMaintBoard" class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Configuration
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
   <li v-if="showAdminBoard || showMaintBoard" class="nav-item">
          <router-link style="color:black" to="/cats" class="nav-link">Category</router-link>
          </li>
          <li v-if="showAdminBoard || showMaintBoard" class="nav-item">
          <router-link style="color:black" to="/subcats" class="nav-link">Sub Category</router-link>
          </li>
          <li v-if="showAdminBoard || showMaintBoard" class="nav-item">
          <router-link style="color:black" to="/failures" class="nav-link">Failure</router-link>
          </li>
  </div>
</div>

        <!-- <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li> -->
        <!-- <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/assets" class="nav-link">Assets</router-link>
        </li> -->
         <!-- <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/locations" class="nav-link">Locations</router-link>
        </li> -->

         <!-- <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/safety" class="nav-link">Safety</router-link>
        </li> -->
        <!-- <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/safetyinstructions" class="nav-link">Safety Instructions</router-link>
        </li> -->
        <!-- <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/failiurecodes" class="nav-link">Failiure Codes</router-link>
        </li> -->
        <!-- <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/suppliers" class="nav-link">Suppliers</router-link>
        </li> -->
         <!-- <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/emp" class="nav-link">Employees</router-link>
        </li> -->
         <!-- <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/departments" class="nav-link">Departments</router-link>
        </li> -->

         <!-- <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/mes2" class="nav-link">Messages2</router-link>
        </li> -->
        <!-- <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">Moderator Board</router-link>
        </li> -->
        <!-- <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
        </li> -->
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>

  </div>
</template>

<script>
export default {
  data:function(){
return{
  connection:null,
  message:''
}
  },

//   created:function(){
// console.log('start conn to websocket server');
// this.connection=new WebSocket("wss://echo.websocket.org")
// this.connection.onopen=function(event){
//   console.log(event);
//   console.log('succeffullt connected to the echo webosocket server');

// }
// this.connection.onmessage=function(event){
// console.log(event);

// }
//   },
//    methods:{
//   sendMessage:function(message){
//   console.log(this.connection);
//   this.connection.send(message);
// }
//   },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
     showHrBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_HR');
      }

      return false;
    },
    ///
   showOpBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_OP');
      }

      return false;
    },
showManagerBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MANAGER');
      }

      return false;
    },




    ////
    showMaintBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MAINT');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    },
  },

  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
  },
};
</script>




