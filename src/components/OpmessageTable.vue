<template>


 <div clas="messagetable">






<!-- <hr> -->
 <div >
<!-- <h1>   {{currentmessage.subcat}}</h1> -->
<!-- <img  style="margin-top: -60px;margin-left: 0px;" v-if="(propmessages.length > 0 & maintmode==0)" src="images/unlock-icon-s8.png" alt="Lock" width="50" height="60"  >
<img  style="margin-top: -60px;margin-left: 0px;"  v-else-if="propmessages.length ==0 " src="images/unlock-icon-8.png" alt="UNLock" width="50" height="60"  >  -->
<img  style="margin-top: -60px;margin-left: 0px;" v-if="(lockmode==1)" src="images/unlock-icon-s8.png" alt="Lock" width="50" height="60"  >
<img  style="margin-top: -60px;margin-left: 0px;"  v-else-if="lockmode ==0" src="images/unlock-icon-8.png" alt="UNLock" width="50" height="60"  >
<!-- <h1>batch date :  {{$store.state.sbatch[0].startdate}}</h1> -->
<h1> {{ countDown }} </h1>
<!-- <h1> fff{{ lockmode }} </h1>
<h1> mmm{{ maintmode }} </h1> -->
 </div>

 <div class="col-sm-10">
      <ul id="l1" ref="l1" >
       <li  type="button" style=" left;margin-bottom:20px; margin-right:20px" class="btn btn-success"   v-for ="cat in cats" v-bind:key ="cat.catcode" :value="cat.catcode"   @click="loadsubcat(cat.catcode)"  >  {{cat.catname}}   </li>
      </ul>
      </div>
<!-- <h1> aa:{{onlinerate}}</h1> -->
<hr >
 <div class="col-sm-10">
      <ul id="l2" ref="l2" >
       <li  type="button" style=" left;margin-bottom:20px; margin-right:20px" class="btn btn-primary" v-for ="subcat in mysubcats" v-bind:key ="subcat.subcatcode"    @click="loadfailure(subcat.subcatcode)"  >  {{subcat.subcatname}}   </li>
      </ul>
      </div>
<hr >

 <div class="col-sm-10">
      <ul id="l3" ref="l3" >
       <li  type="button" style=" left;margin-bottom:20px; margin-right:20px" class="btn btn-warning" v-for ="failure in myfailures" v-bind:key ="failure.failurecode"     @click="changefcode(failure.failurecode,failure.failurename)" >  {{failure.failurename}}   </li>
      </ul>
      </div>
<hr>

 <div class="row">
    <div class="col-sm">
      <label for="id" class="col-sm-2 col-form-label" >ID   :</label>
    <div class="col-sm-1">
    <input style="width:400px" type="text" class="form-control" name ="id" ref="id" v-model="currentmessage.id"  readonly >
    </div>
    </div>

    <div class="col-sm">
     <label for="text" class="col-sm-5 col-form-label" >Failure Code    :</label>
     <div class="col-sm-1">
      <input v-if=(currentmessage.fcode)  name="infcode"  id="infcode" ref='refid' style= "width:400px; background:red;" type="text" class="form-control"  v-model="currentmessage.fcode" readonly  >
    </div>
    </div>

 </div>

    <label for="text" class="col-sm-2 col-form-label" >Comment    :</label>
     <div class="col-sm-11">
      <input type="text" class="form-control" v-model="currentmessage.comment"  >
    </div>
    <br>

<div >

  <p  v-if="maintmode > 0" style="margin-left:420px; margin-bottom:4px;" class="blink-bg"> *                 Maintenance Mode                     *</p>
</div>
       <button style="float: left;margin-bottom:20px; margin-right:20px" type="button" class="btn btn-success" @click.prevent= "updateit">Save</button>
       <button style="float: left;mif argin-bottom:20px; margin-right:20px" type="button" class="btn btn-primary" @click.prevent= "Getmessages">Refresh</button>
       <button style="float: right;margin-bottom:20px; margin-right:20px" type="button" class="btn btn-success" @click.prevent= "Finishme">Finish</button>


   <div>
   <table  ref='table1' class="table">
    <thead class="thead-dark" >
      <th scope="col">id</th>
      <th scope="col">Message</th>
      <th scope="col">Date</th>
      <th scope="col">Fcode</th>
      <th scope="col">OP Comment</th>
      <th scope="col">Maintenance </th>
</thead>
<tr v-for ="message in propmessages" v-bind:key ="message.id"  @click="selectRow(message.id,message.fcode,message.Comment,message.mtime,message.fsubcat,message.fcatcode,message.mreject,message.insertdate)" :class="{'highlight': (message.id == currentmessage.id )} ||{'ay':(!currentmessage.id)}" >
<td>
    {{message.id}}
    </td>
    <td>
     Machine Stop
    </td>
    <td>
     {{message.date | formatDate }}
    </td>
    <td>
    {{message.fcode}} .. {{message.fdesc}}
    </td>
    <td >
    {{message.Comment}}
    </td>
     <td style="color:blue" v-if="message.mreject==2">
     Finished
    </td>
    <td style="color:red" v-if="message.mreject==1">
     Rejected
    </td>
</tr>
</table>


   </div>
 </div>

</template>

<script>
import moment from 'moment';
import UserService from "../services/user.service";
import ReportService from "../services/report.service";
import User from "../models/user";
import authHeader from '../services/auth-header';
export default {
  name: 'OpmessageTable',
  props:["ays","user1","cats","subcats","failures"] ,

  data(){
  return {
  mybatch:{id:'',runid:'',startdate:'',enddate:'',dayend:'',runid:''},
  user: new User('', ''),
  messages:[],
  countDown : '',
  bsubcat:'',
  maintmode:'',
  lockmode:0,
  currentmessage:{id:'',fcode:'',comment:'',fdesc:'',mtime:'',subcat:'',catcode:'',mreject:'',insertdate:''},
  mycat:'',
  fcode:'',
  mysubcats:'',
  content:'',
  myfailures:'',
   currentIndex: -1,
   cat:'',
   mycats:'',
   // persondata: {dates: {}},
   propmessages:[],
   timer:'',
   timer2:'',
  connection:null,
interval:'',
runmode:'',
  lastppd:'',
   ay1:'',
   ay2:'',
   ay3:'',
   onlinerate:0,
   }
   },
   created(){
  //this.getlastppd();
  //this.Getrunmode();
  // this.Getmessages();
  //  ReportService.getlastmode().then(result => {
  //    this.mybatch = result.data;
  //          })
  //     .catch(error => {
  //       console.error(error);
  //     });



   },
    mounted (){

  setTimeout(this.getlastppd(),500);
  setTimeout(this.checkbatch(),700);
  setTimeout(this.swmode(),200);
  //this.rotateprop;
  // this.interval = setInterval(() => this.getBitcoins(), 1000);
  setTimeout(this.Getmessages(),1000);
  this.timer = setInterval(()=>this.getinterval(), 10000)
  this.timer2 = setInterval(()=>this.getrates(), 200000)
    },
beforDestroyed(){
clearInterval(this.timer);

},

  computed:{
   rotateprop:function(){
    this.propmessages=this.ays;
    return this.propmessages;
   },
    currentUser() {
      return this.$store.state.auth.user;
    },
// lockmodeme(){
//   if (this.maintmode==0 & this.propmessages.length>0){
// this.lockmode=1;

//   }
// if ( this.propmessages.length==0){
// this.lockmode=0;

//   }
//   return this.lockmode;
// }
  },
   methods:{
 sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} ,
getrates(){
 if(this.countDown != 0) {
   return;
 }
ReportService.getrates().then(res => {
this.onlinerate = (res.data[0].onlinerate)
this.sleep(1000);
 if (((this.currentmessage.subcat=='rdown'  &  (this.onlinerate > 2000 || this.onlinerate==0)   ) & this.countDown == 0 ) ||(this.currentmessage.subcat=='CHO' & (this.onlinerate > 200))) {
   var d1={mid:'',val:''};
   d1.mid=this.$store.state.midDo0;
   d1.val='true';
  ReportService.sendonoff(d1)
     .then(resp => {
    console.log('send off ok');
      setTimeout(this.Getlockmode(this.$store.state.midLockMode),1000);
           })
      .catch(error => {
        console.log(error);
      });
     setTimeout(this.Getmessages(),1000) ;
        }
    }) ;


  },

     checkbatch(){
     ReportService.getlastmode().then(result => {
     this.mybatch = result.data;
           })
      .catch(error => {
        console.error(error);
      }).then

        (()=>{
// if (this.mybatch[0].startdate!=null & this.mybatch[0].enddate!=null){
//    alert('you must insert new run.....')
//   }
         })

     },
      Getit(){
    UserService.getMessages().then(res => {
    this.content = res.data;
           })
      .catch(error => {
        console.error(error);
      });
      },

       changefcode(code,codedesc){
       this.currentmessage.fcode=code;
       this.currentmessage.fdesc=codedesc;


      },
//
 countDownTimer() {
     if(this.countDown > 0) {
           setTimeout(() => {
                 this.countDown -= 1
                   this.countDownTimer()
                    }, 1000)
                }

        },
startcountDown(v){
  if (this.countDown >0 ){
    return;
  }

this.countDown=v;
this.countDownTimer();
},
Resetme(){
this.currentmessage='';
},
      loadsubcat(id){
  this.bsubcat='';
 if (this.propmessages.length){
 this.interval=1;
}
      if (id == 'CLOSED'){
       this.changefcode('CLOSED','Machine is closed');
          return
        }
     this.$refs.l2.hidden=0;
      this.$refs.l3.hidden=1;
     UserService.getmysubcat(id).then(result => {
     this.mysubcats = result.data;
           })
      .catch(error => {
        console.error(error);
      });
 },
loadfailure(id){
if (this.propmessages.length){
 this.interval=1;
}

  this.$refs.l3.hidden=0;
  this.bsubcat=id;
     UserService.getmyfailure(id).then(result => {
     this.myfailures = result.data;
           })
      .catch(error => {
        console.subcaterror(error);
      });
 },
//

//
Getmessages(){
  var self = this;
   UserService.getMessages().then(result => {
     this.rotateprop;
     this.propmessages = result.data;
     self.watchdata=this.propmessages;
      this.Getmaintmode(this.$store.state.midMaintMode);
      setTimeout( ()=> {
    this.Getlockmode(this.$store.state.midLockMode);
   }, 100)  //this time must be small to refresh mode immediately
  //     setTimeout( ()=> {
  //      this.relock();
  //  }, 900)
  if (this.propmessages.length ){
         setTimeout( ()=> {
           this.selectRow(this.propmessages[0].id,this.propmessages[0].fcode,this.propmessages[0].Comment,this.propmessages[0].mtime,this.propmessages[0].fsubcat,this.propmessages[0].fcatcode,this.propmessages[0].mreject,this.propmessages[0].insertdate)
   }, 1000)
      }
           })
      .catch(error => {
        this.$router.go(0);
        console.error(error);
      });
  setTimeout( ()=> {
    this.Getlockmode(this.$store.state.midLockMode);
   }, 4000)
 },
 Getlockmode(mid){
    ReportService.getlockmode(mid).then(res => {
    this.lockmode = res.data[0].lockmode
    console.log('ayLockmode : '+this.lockmode);
           })
      .catch(error => {
        this.$router.go(0);
        console.error(error);
      });
     },
relock(){
  if ((this.currentmessage.subcat=='CHO' & this.currentmessage.insertdate !='') || (this.propmessages.length==0) || (this.countDown>0) || (this.maintmode == 100) || (!this.currentmessage.ftime) & (this.lockmode == 1) ){
    return;
  }
  else if (this.propmessages.length!=0) {
this.offon('true',this.$store.state.midDo0);
  }

},

 Finishme(){
if (!this.currentmessage.insertdate){
return;
}
if (this.currentmessage.subcat !='CHO' & this.$store.state.sbatch[0].enddate!=null  & this.$store.state.sbatch[0].startdate !=null){
alert('لابد من إدخال تشغيله جديده ');
this.$router.push('/batch');
return
}
  if ( (this.currentmessage.subcat=='CLOSED'  ))  {
 if (this.$store.state.sbatch[0].startdate!=null  & this.$store.state.sbatch[0].enddate !=null){
       alert(('أدخل تشغيله جديده لبدايه العمل'))
        this.getbatches();
        this.$router.push('/batch');
        return;
        }
  }
 if ( (this.currentmessage.subcat=='CHO'  ))  {
 var dayend= this.$store.state.sbatch[0].dayend;
   if (dayend==1  & this.$store.state.sbatch[0].enddate !=null){

   alert(('أدخل تشغيله جديده'))


     this.getbatches();
    this.offon('true',this.$store.state.midDo0);
    this.Getmessages();
    this.$router.push('/batch');
   return;
    }
 }

//// end of check
   if  (this.runmode== 0  ) {
    alert('Machine is OFF')
   return;
       }
   setTimeout( ()=> {    this.Getmessages();   }, 1000)
if  (!this.propmessages.length || this.countDown > 0  ) {
   return;
       }
if(this.currentmessage.fcode=='CLOSED')  {
  this.getlastppd();
var today = new Date();//date1.getTime();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
var d1= moment(String(this.lastppd)).format('YYYY-MM-DD');
var d2= moment(String(dateTime)).format('YYYY-MM-DD')
if (d1 !==d2){
//  alert(' must enter PPD !  ');
//  return
}
}
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
var data={
    id:this.currentmessage.id,
    ftime:dateTime,
    empno:this.currentUser.username,
 }
;
  if  (!this.currentmessage.id   ) {
   alert('يجب اختيار الرسالة من اسفل');
   return;
       }
     if  (!this.currentmessage.insertdate ) {     /// || (this.lockmode==1  & this.currentmessage.subcat=='MR')
   alert('  يجب اختيار نوع التوقف');
   return;
       }
  if  ((!this.currentmessage.mtime  && this.currentmessage.subcat=='MR' )){ //(this.lockmode==0  && this.currentmessage.subcat=='MR' )){
   alert('يجب تأكيد اصلاح العطل من الصيانة ');
   return;
       }


if(confirm(' هل انت متاكد من انتهاء سبب التوقف '   +  data.id   +'  واستمرار العمل؟' ) ){
 this.offon('false',this.$store.state.midDo0);
 let mytimer=this.$store.state.mtimer;;
 this.startcountDown(mytimer) ;
 setTimeout( ()=> {
      UserService.updateMessagesftime(data)
     .then(resp => {  }).catch(error => {console.log(error);});},mytimer*900)



setTimeout( ()=> {
    this.offon('true',this.$store.state.midDo4);
   }, mytimer*1000)
if (this.bsubcat =='CHO'){
 ;
  setTimeout( ()=> {
    this.offon('true',this.$store.state.midDo4);

   }, mytimer*1000)
}
 setTimeout( ()=> {
      // this.Getmessages();
     this.$router.go(0);
    //  this.$refs.l3.hidden=1;
    // this.$refs.l2.hidden=1;
    //  this.$refs.refid.hidden=1;
       }, mytimer*1050)


      }
  //this.createmessageRUN()
 },

 sendMessage:function(message){
  console.log(this.connection);
  this.connection.send(message);
},
//
Getrunmode(mid){  //getlockmode
    ReportService.getlockmode(mid).then(res => {
    this.runmode = res.data[0].lockmode
    //console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });
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


    //this.Getrunmode(this.$store.state.midDo4);
   // Getrunmode(mid){  //getlockmode
    ReportService.getlockmode(this.$store.state.midDo4).then(res => {
    this.runmode = res.data[0].lockmode
           })
      .catch(error => {
        console.error(error);
      });
     //},

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
///
offon(k,m){
  var d1={mid:'',val:''};
 d1.mid=m;
 d1.val=k;
 ReportService.sendonoff(d1)
     .then(resp => {
    console.log('send off ok');
           })
      .catch(error => {
        console.log(error);
      });

},
getinterval(){ //this.$refs
//this.getrates();
this.Getrunmode(this.$store.state.midDo4);
   let interval= this.interval;
  if ( interval==1){
   // alert(interval)
    return;
  }
  if (((!this.propmessages.length ||  this.maintmode > 0) || (this.propmessages.length & !this.currentmessage.insertdate)) ){
    this.Getmessages();
  }
}
,
Getmaintmode(mid){
    ReportService.getmaintmode(mid).then(res => {
    this.maintmode = res.data[0].maintmode
    console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });
     },
//
Getrunmode(mid){
    ReportService.getlockmode(mid).then(res => {
    this.runmode = res.data[0].lockmode
    //console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });
     },
////////////
/////////////
getbatches(){
    //  this.rotateprop;
     ReportService.getlastmode().then(result => {
     this.mybatch = result.data;
           })
      .catch(error => {
        console.error(error);
      });
      },

getlastppd(){
UserService.getlastppd().then(res=>{
 this.lastppd = res.data[0].insertdate;
   console.log(this.lastppd);
           })
      .catch(error => {
        console.error(error);
      });
},
createmessageRUN(){
 var new1 =  {};   ///object to represent message
    var today = new Date();  //current date
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getUTCHours() +2 +":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    new1.date=dateTime;
    new1.mid=this.$store.state.midDi0;
    new1.vid=1;
    new1.payload='Machine 1000  Run '  ;
      UserService.createmessage(new1)
},
update(d){
 UserService.updateMessages(d)
     .then(res => {
       console.log(res);
       this.Getmessages();
           })
           .catch(error => {
        console.log(error);
      });
       this.$refs.l3.hidden=1;
   this.$refs.l2.hidden=1;
   this.$refs.refid.hidden=1;
},
////
updateit(){
  if  (!this.propmessages.length   ) {
   return;
       }
 if ( (this.currentmessage.subcat=='CHO' || this.currentmessage.subcat=='CLOSED') && (this.currentmessage.insertdate))  {
   alert('لا يمكن تغيير الكود :  '+this.currentmessage.subcat);
return;
 }
 if (this.bsubcat =='OPL' && this.currentmessage.comment==null){
  alert ('insert comment  أدخل تعليق' );
return;
}
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 var selectedindex= this.$refs.l3.hidden;
  if (!this.currentmessage.fcode){
alert ('you must select failure code');
return;
}
if (this.currentmessage.mreject ==2 ){
alert ('No permession..  ' );
return;
}
if (this.currentmessage.mreject ==1 && this.currentmessage.comment==null){
  alert ('insert comment  أدخل تعليق' );
return;
}


if (!this.currentmessage.insertdate ) {

var data={
    id:this.currentmessage.id,
    fcode:this.currentmessage.fcode,
     comment:this.currentmessage.comment,
     fdesc:this.currentmessage.fdesc,
     insertdate:dateTime,
     empno:this.currentUser.username ,
}
}
else{
var data={
    id:this.currentmessage.id,
    fcode:this.currentmessage.fcode,
     comment:this.currentmessage.comment,
     fdesc:this.currentmessage.fdesc,
     empno:this.currentUser.username ,
}
}
if (this.bsubcat=='CHO'){
   if (this.$store.state.sbatch[0].enddate==null  & this.$store.state.sbatch[0].startdate !=null){
   alert( this.mybatch[0].runid +'لابد من إنهاء التشغيله رقم  ');
   // window.location.replace('/batch');
    // router.push({ path: '/batch' })
     this.$router.push('/batch');
   return
   }

    alert('CHO');
   this.update(data);
   this.offon('false',this.$store.state.midDo0);
   this.offon('false',this.$store.state.midDo4);
        this.Getmessages();
       this.$refs.l3.hidden=1;
       this.$refs.l2.hidden=1;
      this.$refs.refid.hidden=1;
 this.interval=0;  // enable Getmessages if interval=0

return;
}
/////////ramp down mode
if ( (this.bsubcat=='rdown'  ))  {

   this.update(data);
   this.offon('false',this.$store.state.midDo0);
   this.offon('false',this.$store.state.midDo4);
        this.Getmessages();
       this.$refs.l3.hidden=1;
       this.$refs.l2.hidden=1;
      this.$refs.refid.hidden=1;
 this.interval=0;  // enable Getmessages if interval=0
clearInterval(this.timer2);
this.timer2 = setInterval(()=>this.getrates(), 300000)
return;
    }
//////////////////////////////////////

  if (this.bsubcat=='MR'){
    alert('عطل صيانه');
  this.update(data);
    this.offon('false',this.$store.state.midDo4);
       this.Getmessages();
       this.$refs.l3.hidden=1;
       this.$refs.l2.hidden=1;
      this.$refs.refid.hidden=1;
      this.interval=0;  // enable Getmessages if interval=0

      return;
  }
  this.offon('false',this.$store.state.midDo4);
  this.update(data);
   this.Getmessages();
   this.$refs.l3.hidden=1;
   this.$refs.l2.hidden=1;
   this.$refs.refid.hidden=1;
     this.interval=0;  // enable Getmessages if interval=0

 },
//
  selectRow(id,fcode,comment,mtime,subcat,catcode,mreject,insertdate){
   // console.log("ff" + this.selectedsite);
this.currentmessage.id = id;
this.currentmessage.fcode=fcode;
this.currentmessage.comment=comment;
this.currentmessage.mtime=mtime;
this.currentmessage.subcat=subcat;
this.currentmessage.catcode=catcode;
this.currentmessage.mreject=mreject;
this.currentmessage.insertdate=insertdate;
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
   }

}

</script>

<style scoped>
.highlight {
     background-color: Tomato;
}
.ay {
     background-color: white;
}
tr:hover{
     cursor: pointer;
}

.blink-bg{
		color: rgb(6, 31, 51);
		padding: 10px;
		display: inline-block;
		border-radius: 40px;

		animation: blinkingBackground 5s infinite;
	}
	@keyframes blinkingBackground{
		0%		{ background-color: #23a77f;}
		25%		{ background-color: #d6d6c8;}
		50%		{ background-color: #ef0a1a;}
		75%		{ background-color: #d6d6c8;}
		100%	        { background-color: #d6d6c8;}
	}

.blink-run{
		color: rgb(94, 199, 45);
		padding: 10px;
		display: inline-block;
		border-radius: 40px;

		animation: blinkingBackground 20s infinite;
	}
	@keyframes blinkingBackground{
		0%		{ background-color: #23a77f;}
		25%		{ background-color: #d6d6c8;}
		50%		{ background-color: hsl(138, 92%, 49%);}
		75%		{ background-color: #d6d6c8;}
		100%	        { background-color: #d6d6c8;}
	}


</style>

