<template>
  <div id="app">
    <!-- <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"> -->
    <title>
  Ayman
      </title>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href class="navbar-brand" @click.prevent>TYM  {{this.$store.state.machineName}}</a>
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

         <li v-if="showAdminBoard || showOpBoard || showManagerBoard " class="nav-item">
          <router-link to="/ppd" class="nav-link">Product & QF</router-link>
          </li>

          <li v-if="showAdminBoard || showOpBoard || showManagerBoard" class="nav-item">
          <router-link to="/messages" class="nav-link">Operator Failures</router-link>
          </li>



          <li v-if="showAdminBoard || showMaintBoard || showManagerBoard" class="nav-item">
          <router-link to="/maintmessages" class="nav-link">Maintenance Failures</router-link>
         </li>
<li v-if="showAdminBoard || showOpBoard || showManagerBoard" class="nav-item">
          <router-link to="/batch" class="nav-link">Batches</router-link>
          </li>
<div class="dropdown">
  <button  v-if="showAdminBoard " class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Reports
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
   <li v-if="showAdminBoard " class="nav-item">
          <router-link style="color:black" to="/managermessages" class="nav-link">Actual KPIs</router-link>
          </li>
          <li v-if="showAdminBoard " class="nav-item">
          <router-link style="color:black" to="/managermessages-manual" class="nav-link">Manual KPIs</router-link>
          </li>
          <li v-if="showAdminBoard " class="nav-item">
          <router-link style="color:black" to="/managermessages-tot" class="nav-link">Tot KPIs</router-link>
          </li>
         <li v-if="showAdminBoard " class="nav-item">
          <router-link style="color:black" to="/managermessages-rates" class="nav-link">Rates</router-link>
          </li> 
            
           <!-- <li v-if="showAdminBoard " class="nav-item">
          <router-link style="color:black" to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up  </router-link>
         
        </li> -->
  </div>
</div>
<p>-</p>

          <!-- <li v-if="showAdminBoard ||   showManagerBoard" class="nav-item">
          <router-link to="/managermessages" class="nav-link">Manager Report </router-link>
          </li> -->
          <!-- <li v-if="showAdminBoard || showOpBoard || showManagerBoard" class="nav-item">
          <h3 class="nav-link">4L Machine </h3> -->
          <!-- </li> -->
         <!-- //admin menue  -->
         
<div class="dropdown">
  <button  v-if="showAdminBoard " class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Configuration
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
   <li v-if="showAdminBoard " class="nav-item">
          <router-link style="color:black" to="/cats" class="nav-link">Category</router-link>
          </li>
          <li v-if="showAdminBoard " class="nav-item">
          <router-link style="color:black" to="/subcats" class="nav-link">Sub Category</router-link>
          </li>
          <li v-if="showAdminBoard " class="nav-item">
          <router-link style="color:black" to="/failures" class="nav-link">Failure</router-link>
          </li>
          <li v-if="showAdminBoard " class="nav-item">
              <router-link style="color:black" to="/product" class="nav-link">Products</router-link>
          </li>
           <!-- <li v-if="showAdminBoard " class="nav-item">
          <router-link style="color:black" to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up  </router-link>
         
        </li> -->
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
<div class="sidenav">
<button v-if= "(runmode==1)" class="btn btn-success" style='width:100%'>On</button>
<button v-if= "(runmode==0)" class="btn btn-danger" style='width:100%'>Off</button>
<br>
<br>

 <h6 class="mody"> Last_Rate : {{lastrate / 5 }} unit/minute </h6>

 <h6 class="mody" > ----------------> {{lastratebbl | formatNumber }} BBL/hr </h6>
<br>
   <h6 class="mody"> Online_Rate : {{onlinerate || 0}}  unit/minute </h6>

<h6 class="mody"> ----------------> {{(onlineratebbl || 0) | formatNumber }}  BBL/hr </h6>
<br>

 <h6 v-if=" typeof mybatch[0] != 'undefined' " class="mody"> Run ID : {{(mybatch[0].runid )||0 }}   </h6>
<br>

 <h6 v-if=" typeof mybatch[0] != 'undefined' " class="mody"> Start Time : {{(mybatch[0].startdate ||0) | formatDate }}   </h6>
<br>
<h6  v-if=" typeof mybatch[0] != 'undefined' "    class="mody"> Product : {{(mybatch[0].productcode ) ||0 }}   </h6>
<br>
<h6 class="mody">Run Period: {{(period ) | formatNumber  }} hr  </h6>
<br>
       </div>
    </div>  
         
</template>

<script>
import ReportService from "@/services/report.service";
export default {
data:function(){
return{
  connection:null,
  message:'',
  mode:'',
  lastrate:'',
  onlinerate:'',
   lastratebbl:'',
  onlineratebbl:'',
  period:'',
  runmode:'',
  mybatch:[],
   mybatch2:{id:'',runid:'',startdate:'',enddate:'',dayend:'',sapid:'',productcode:'',empno:''},
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
created(){
//this.swmode();
},
beforeMount() {
  this.swmode();
  this.getrates();
   this.timer = setInterval(this.swmode, 5000)
  //this.timer = setInterval(this.Getrunmode(5),2000)
  this.timer = setInterval(this.getrates, 60000)
},
mounted (){

  //this.getrates();
 
},
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
   
   swmode(){
  
  ReportService.getlastmode().then(result => {
     if ( result.data[0] !== undefined){
     this.mybatch = result.data;
     this.$store.state.sbatch=this.mybatch;
     }
           })
      .catch(error => {
        console.error(error);
      });  
 
 
    this.Getrunmode(this.$store.state.midDo4);

  ReportService.getlastmode().then(res => {
    if ( res.data[0]  !== undefined){
    this.mode = res.data[0].mode   ;
    let d1=new Date(res.data[0].startdate);
   let d2=  new Date(); 
   var diff = (Math.abs(d2 - d1))/60000/60;
   this.period=diff;
    }
      });
  },
chotime() {
     var today = new Date();
      var t1= new Date(this.currentmessage.insertdate);
      var sub=this.bsubcat;
      var diff = (Math.abs(today - t1))/60000;
      this.cholasttime=diff;
      //alert('ff'+diff)
      if (sub=='CHO') {
      var t2=today.getHours()-t1.getHours();
    // this.getlastbatch();
      }
     return diff;
    },    
  Getrunmode(mid){  //getlockmode
    ReportService.getlockmode(mid).then(res => {
    this.runmode = res.data[0].lockmode
    //console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });
     },
////////////
   getrates(){
  

  ReportService.getrates().then(res => {
    this.lastrate = res.data[0].lastrate   ;
    this.onlinerate = res.data[0].onlinerate   ;
     this.lastratebbl = (res.data[0].lastratebbl)  ;
    this.onlineratebbl = (res.data[0].onlineratebbl) ;
      });
  },
letmode(){
let data={};
if (this.mode==4 ) {
  data.mode=5
}
  else {
    data.mode=4
  }
ReportService.letmode(data)
     .then(resp => {
       
       })
      .catch(error => {
        console.log(error);
      }).then(()=>{
    this.swmode();
      }); 
    
}

  },
}

</script>
<style scoped>

body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 15%;
  position: fixed;
  z-index: 1;
  top: 100;
  left: 0;

  background-color:  rgb(4, 4, 94);
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #0044ff;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.container {
  margin-left: 0px; /* Same as the width of the sidenav */
  font-size: 16px; /* Increased text to enable scrolling */
  padding: 0px 10px;
  float:right;
  width:85%;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
.mody{
  color: #2bff00;
  text-indent: 5px;
}
</style>
