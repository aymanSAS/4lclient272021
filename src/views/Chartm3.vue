


  <template>




  <div >

     <img class="sidenav" src="/images/LOGOTYMANDMOBIL.png" alt="LOGO" width="130" height="130"  align="left" float="left" > <h1>  {{ $store.state.machineName}} </h1>
           <h2 class='bluestyle'>  Current Product: {{ $store.state.sbatch[0].productcode}} </h2>
<!-- <svg xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect x="10" y="0" width="500" height="100" fill="red"></rect>
    <text x="50" y="50" font-family="Verdana" font-size="35" fill="blue">Hello</text>
  </g>
</svg> -->
         <!-- <h3 :class="'bluestyle'">     Target PEI : {{ myTargetPei*100}} %     </h3>
       <h3   :class="{'redstyle': (PEI < myTargetPei ),'greenstyle':(PEI >myTargetPei)}"  > PEI : {{ PEI *100 | formatNumber}} % </h3>

    <h3> Monthly Production : {{PPD| formatNumber}} BBL</h3>
     <h3> Monthly Max : {{max | formatNumber}} BBL</h3>
      <h3> Monthly Avaiable : {{available | formatNumber}} BBL</h3> -->

  <table  name='tbl1' id='tbl1' class="table">
    <thead class="thead-dark" >
      <th scope="col">Target PEI</th>
       <th scope="col" > Month PEI </th>
          <th scope="col"> Product in Batch </th>
           <th scope="col"> Current Rate </th>

      </thead>

  <td :class="'bluestyle'" >  {{myTargetPei*100  | formatNumber  }} % </td>
  <td  :class="{'redstyle': (PEI < myTargetPei ),'greenstyle':(PEI >myTargetPei)}"  >  {{PEI *100 | formatNumber}} %  </td>
   <td class="font-class">
       {{(currentbatch[0].ppdbatchcount/$store.state.unitperCarton || 0)| formatNumber}} carton

  </td>
 <td :class="{'redstyle': (onlinerateCarton < myTargetRate ),'greenstyle':(onlinerateCarton >myTargetRate)}" >  {{onlinerateCarton  | formatNumber  }} Carton/hr </td>

    </table>
<table  name='tbl1' id='tbl1' class="table">
    <thead class="thead-dark" >

      <th scope="col"> Month Production  </th>
      <th scope="col"> Month Max </th>
       <th scope="col"> Month Avaiable </th>

      </thead>


  <td class="font-class">  {{PPD | formatNumber}} BBL</td>
   <td class="font-class">  {{max | formatNumber}} BBL </td>
  <td class="font-class">  {{(available || 0)| formatNumber}} BBL</td>

    </table>

    <h3>Daily Rate Chart</h3>
        <h3> {{mydate | formatDateonly}} </h3>
    <bar-chart  :data1 ="mydata"  >  </bar-chart>
  </div>



</template>

<script>
import BarChart from '@/components/RateChart'
import DoughnutChart from '@/components/DoughnutChart'
import PieChart from '@/components/PieChart'
  import ReportService from "../services/report.service";

export default {
  data(){
  return {
  mydata:[14, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
  TotalTime:'',
  ftime:'',
  mtime:'',
  otime:'',
 PPDmanual:'',
      offtime:'',
      ontime:'',
      runtime:'',
      stoptime:'',

      ppdconverter:1,
      content: {},
      lastMonth:'',
      y:'',
      cats:{},
      subcats:{},
      failures:{},
      ftime:'',
      fsecond:'',
      tp1:'',
      tp2:'',
      tp3:'',
      MR:'',
      PCL:'',
      RCLTOTAL:'',
      PEI:'',
      RCL:'',
      PL:'',
      EF:'',
      RCLHF:'',
      CHO:'',
      OPL:'',
      PCLHF:'',
      HF3:'',
      PPD:'',
      BBL:'',
      PCLHF1:'',
      PCLHF2:'',
      RCLHF1:'',
      RCLHF2:'',
      RCLHF3:'',
      available:'',
      max:'',
      RCLHFO:'',
      CLOSED:'',
      qf:'',
      LTC1:'',
      LTC2:'',
      CHOcount:'',
      timer1:'',
        timer2:'',
         timer3:'',
         mydate:'',
         myTargetPei:'',
         currentbatch:'',
         onlinerate:'',
         onlinerateCarton:'',
         myTargetRate:'',
  }
  },
   mounted() {
      setTimeout( ()=>this.init1(),500);;
       this.timer1 = setInterval(this.init1, 150000)

    },
  methods:{
  //    getbybatch(){
  //      ReportService.getallinbatch(this.$store.state.sbatch[0].runid).then(res => {
  //   this.currentbatch = res.data
  //  // console.log(this.maintmode);
  //          })
  //     .catch(error => {
  //       console.error(error);
  //     });
  //    }
  //   },
getallinbatch(){
  ReportService.getallinbatch(this.$store.state.sbatch[0].runid).then(res => {
    this.currentbatch = res.data
   // console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });
},
    init1(){
      this.mydate=Date();
//
ReportService.getrates().then(res => {
  //  this.lastrate = res.data[0].lastrate   ;
    this.onlinerate = res.data[0].onlinerate   ;
  //  this.onlineratebbl = (res.data[0].onlineratebbl) ;
    this.onlinerateCarton=(res.data[0].onlinerate)/this.$store.state.unitperCarton;

      });
 ReportService.getallinbatch(this.$store.state.sbatch[0].runid).then(res => {
    this.currentbatch = res.data
   // console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });

//
 ReportService.getmaintmode(this.$store.state.midTagetPei).then(res => {
    this.myTargetPei = res.data[0].maintmode
    console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });

ReportService.getmaintmode(this.$store.state.midTagetRate).then(res => {
    this.myTargetRate = res.data[0].maintmode
    console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });

//


   ReportService.getmaintmode(this.$store.state.vardelayCarton).then(res => {
    this.ppdconverter = res.data[0].maintmode
    console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });

   ReportService.getmaintmode(this.$store.state.vardeleyMuliplier).then(res => {
    this.BBL = res.data[0].maintmode
    console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });

    var d1={mid:'',vid:''};
    d1.mid=1;
    d1.vid=0;
    ReportService.getmtime(d1.mid,d1.vid,0).then(res => {
    //this.chartData.datasets[0].data[0] = res.data[0].rsecond/3600;
    this.mtime = res.data[0].mtime   ///msecond/3600;
    this.ftime = res.data[0].ftime   ///msecond/3600;
    this.TotalTime= res.data[0].tottime  //res.data[0].mtime + res.data[0].ftime ;
    this.otime =  this.ftime- this.mtime ;
   // this.PEI=res.data[0].PEI;
/////////////////////

 this.PPDmanual=res.data[0].PPDmanual * 0.00629;
      this.offtime=res.data[0].offtime;
      this.ontime=res.data[0].ontime;
      this.runtime=res.data[0].runtime;
      this.stoptime=res.data[0].stoptime;
    this.tp1 = res.data[0].tp1   ///msecond/3600;
    this.tp2 = res.data[0].tp2   ///msecond/3600;
    this.tp3= res.data[0].tp3
     this.qf=res.data[0].qf;
    this.PCL=res.data[0].PCL *this.BBL  //fperiod fcatcode=PL
    this.RCL=(res.data[0].RCL * this.BBL )+ this.qf;
    this.HF3=this.tp3
    //this.BBL=this.g1;
    this.EF=res.data[0].EF   //fperiod when fsubcat=EF
    this.CHO=res.data[0].CHO //fperiod ..fsubcat=CHO
    this.PL=res.data[0].PL   // fperiod fsubcat=PL
    this.OPL=res.data[0].OPL // fperiod  fsubcaat=OPL
    this.CLOSED=res.data[0].CLOSED; // fperiod   fcatcode=CLOSED
    this.PCLHF1=res.data[0].PCLHF1  //'tp1 fcateode=PL'
    this.PCLHF2=res.data[0].PCLHF2  //'tp3 fcatcode=PL'
     this.PCLHF= this.PCLHF1+ this.PCLHF2;
    this.RCLHF1=res.data[0].RCLHF1  //'tp1 fcatcode=REG'
    this.RCLHF2=res.data[0].RCLHF2  //'tp3 fcatcode=REG'
    this.RCLHF3=res.data[0].RCLHF3  //tp2 fcatcode=REG' when rejected   ...mreject=1
    this.PPD=res.data[0].PPD *this.ppdconverter;
    this.CHOcount= res.data[0].CHOcount;
    this.LTC1= res.data[0].CHOcount * 25;  //no of cho in the month * 25BBL for 4/5L machine


    this.MR=res.data[0].MR +res.data[0].Jams////////////- res.data[0].RCLHF3  ;........tp2 when reject=1 (maint mode ok)
    //this.RCLHF=this.RCLHF1 + this.RCLHF2 +this.RCLHF3 ; //+this.PCLHF1 + this.PCLHF2;..



var m=0
  var today = new Date();
  var todaydate=today.getDate()-1;
  var todayH=today.getHours();
  var todayM=today.getMinutes();

  var daysinlastmonth=ReportService.getDaysInMonth(today.getMonth(),today.getFullYear());
if (m==0){
var max=((todaydate *24) +(todayH) + (todayM/60) )  *this.BBL;
}
if (m==1){

var max=daysinlastmonth *24*this.BBL;
}

var RCLX=this.RCL+(this.RCLHF)*this.BBL; //sum of RCL from api and caloculated RCLHF before available calc.
this.available= max- this.CLOSED*this.BBL;
this.max=max;
var RCL2 = this.available-RCLX-(this.PCL)-this.PPD;
 //this.RCLTOTAL=RCLX+RCL2;
var LTC=this.LTC1+this.LTC2;
this.RCLTOTAL=this.max-this.CLOSED*this.BBL-this.PPD-this.PCL-LTC;
this.RCLHF= (this.RCLTOTAL-this.MR*this.BBL-this.EF*this.BBL-this.qf)/this.BBL;
//this.RCLHFO=RCL2/this.BBL;
this.RCLHFO=this.RCLHF1+this.RCLHF2+this.RCLHF3;

this.PEI= this.PPD/(this.PPD+(this.RCLTOTAL));




//////////////////////////////////

           })
      .catch(error => {
        console.error(error);
      });


    },
    GetBBL(mid){
    ReportService.getmaintmode(mid).then(res => {
    this.BBL = res.data[0].maintmode
    console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });
     },
    GetPPD(mid){
    ReportService.getmaintmode(mid).then(res => {
    this.ppdconverter = res.data[0].maintmode
    console.log(this.maintmode);
           })
      .catch(error => {
        console.error(error);
      });
     },
   Getallmtime(m){
    var d1={mid:'',vid:''};
    d1.mid=1;
    d1.vid=0;
    ReportService.getmtime(d1.mid,d1.vid,m).then(res => {
    //this.chartData.datasets[0].data[0] = res.data[0].rsecond/3600;
    this.mtime = res.data[0].mtime   ///msecond/3600;
    this.ftime = res.data[0].ftime   ///msecond/3600;
    this.TotalTime= res.data[0].tottime  //res.data[0].mtime + res.data[0].ftime ;
    this.otime =  this.ftime- this.mtime ;
   // this.PEI=res.data[0].PEI;
/////////////////////

 this.PPDmanual=res.data[0].PPDmanual * 0.00629;
      this.offtime=res.data[0].offtime;
      this.ontime=res.data[0].ontime;
      this.runtime=res.data[0].runtime;
      this.stoptime=res.data[0].stoptime;
    this.tp1 = res.data[0].tp1   ///msecond/3600;
    this.tp2 = res.data[0].tp2   ///msecond/3600;
    this.tp3= res.data[0].tp3
     this.qf=res.data[0].qf;
    this.PCL=res.data[0].PCL *this.BBL  //fperiod fcatcode=PL
    this.RCL=(res.data[0].RCL * this.BBL )+ this.qf;
    this.HF3=this.tp3
    //this.BBL=this.g1;
    this.EF=res.data[0].EF   //fperiod when fsubcat=EF
    this.CHO=res.data[0].CHO //fperiod ..fsubcat=CHO
    this.PL=res.data[0].PL   // fperiod fsubcat=PL
    this.OPL=res.data[0].OPL // fperiod  fsubcaat=OPL
    this.CLOSED=res.data[0].CLOSED; // fperiod   fcatcode=CLOSED
    this.PCLHF1=res.data[0].PCLHF1  //'tp1 fcateode=PL'
    this.PCLHF2=res.data[0].PCLHF2  //'tp3 fcatcode=PL'
     this.PCLHF= this.PCLHF1+ this.PCLHF2;
    this.RCLHF1=res.data[0].RCLHF1  //'tp1 fcatcode=REG'
    this.RCLHF2=res.data[0].RCLHF2  //'tp3 fcatcode=REG'
    this.RCLHF3=res.data[0].RCLHF3  //tp2 fcatcode=REG' when rejected   ...mreject=1
    this.PPD=res.data[0].PPD *this.ppdconverter;
    this.CHOcount= res.data[0].CHOcount;
    this.LTC1= res.data[0].CHOcount * 25;  //no of cho in the month * 25BBL for 4/5L machine


    this.MR=res.data[0].MR +res.data[0].Jams////////////- res.data[0].RCLHF3  ;........tp2 when reject=1 (maint mode ok)
    //this.RCLHF=this.RCLHF1 + this.RCLHF2 +this.RCLHF3 ; //+this.PCLHF1 + this.PCLHF2;..




  var today = new Date();
  var todaydate=today.getDate()-1;
  var todayH=today.getHours();
  var todayM=today.getMinutes();

  var daysinlastmonth=ReportService.getDaysInMonth(today.getMonth(),today.getFullYear());
if (m==0){
var max=((todaydate *24) +(todayH) + (todayM/60) )  *this.BBL;
}
if (m==1){

var max=daysinlastmonth *24*this.BBL;
}

var RCLX=this.RCL+(this.RCLHF)*this.BBL; //sum of RCL from api and caloculated RCLHF before available calc.
this.available= max- this.CLOSED*this.BBL;
this.max=max;
var RCL2 = this.available-RCLX-(this.PCL)-this.PPD;
 //this.RCLTOTAL=RCLX+RCL2;
var LTC=this.LTC1+this.LTC2;
this.RCLTOTAL=this.max-this.CLOSED*this.BBL-this.PPD-this.PCL-LTC;
this.RCLHF= (this.RCLTOTAL-this.MR*this.BBL-this.EF*this.BBL-this.qf)/this.BBL;
//this.RCLHFO=RCL2/this.BBL;
this.RCLHFO=this.RCLHF1+this.RCLHF2+this.RCLHF3;

this.PEI= this.PPD/(this.PPD+(this.RCLTOTAL));




//////////////////////////////////

           })
      .catch(error => {
        console.error(error);
      });
     },
  },
  components: {
    BarChart,DoughnutChart,PieChart
  }
}
</script>
<style scoped>
.redstyle {
     color:rgb(255, 0, 0);
     font-size: 30px;
}

.bluestyle {
     color:rgb(47, 0, 255);
      font-size: 30px;
}
.greenstyle {
     color:rgb(5, 68, 26);
      font-size: 30px;
}
.font-class{
  font-size: 20px;
}
</style>
