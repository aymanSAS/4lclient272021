<script>
import moment from 'moment'
  import { Bar } from 'vue-chartjs'
  //import UserService from "../services/user.service";
  import ReportService from "../services/report.service";

  export default {
    extends: Bar,

    data() {
        var  rtime=12;
        var  ftime=10;
       var   mtime=8;
        var  othertime=0;

      return {
         data1:[],
         xx:[],
         yy:[],

          props:["data1"] ,

        chartData: {
          // // labels: ["Tot Time123456789123y456789123456789y", "Available Time123456789123y456789123456789y", "Mech Failure Time123456789123y456789123456789y", "Closed123456789123y456789123456789y"
          // ],
  //        labels:['1','2','3','4','56','7','8','9','12','3','45','6','7','8','9','7','8','8','1','2','3','4','5','6','7','8','9'],
 labels:[],

          datasets: [{
            label: 'Rate Chart',
            borderWidth: 1,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            pointBorderColor: '#2554FF',
            // data: [rtime,ftime,mtime,othertime]
data:[],
            // data:this.y,
            // data: data1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false


     }
      }
    },
    mounted() {
      //this.init1();
     // this.Getallftime() ; //.then(res => {
      //  this.Getallmtime();
       // this.getarrays();
         setTimeout(()=>this.Getit(0),500);
    },
    methods:{
      init1(){
       this.chartData.datasets[0].data[0]=55;
      },
 Getit(m){
  var today = new Date();
 if ((today.getMonth()+1-m) <= 0){
this.y=today.getFullYear()-1;
this.lastMonth=today.getMonth()+1-m+12;
}
else {
this.y=today.getFullYear();
this.lastMonth=today.getMonth()+1-m;
}

    ReportService.getmonthrates(m).then(res => {
    this.content = res.data;
           })
      .catch(error => {
        console.error(error);
      }).then(res=>{

    this.yy=  this.content.map(function(hobby) {
    return {
        ppmrate: hobby.ppmcount,
           }
        });  
     
        this.ydata=this.yy.map(el=>Object.values(el));   
var a1=[],
  a1=this.ydata.ppmcount;
alert(a1);
alert(a11);
a11=this.ydata;
this.chartData.datasets[0].data=[a1[0],a11[9]] ;
   this.xx=  this.content.map(function(hobby1) {
    return {
        time:moment(String(hobby1.date)).format('hh:mm:ss'),
           }
        });
   this.xdata=this.xx.map(el=>Object.values(el)); 
   this.chartData.labels=this.xdata;
  this.renderChart(this.chartData, this.options)
           })
      .catch(error => {
        console.error(error);
   });
   

   },

      getarrays(){
var i;
var ar=[];
var y1=[];
for (i = 0; i < 1000; i++) {
   this.x.push('ddddddd');

}

for (i = 0; i < 1000; i++) {
  //this.chartData.datasets[0].data[i].push(i+2+400)
  this.x.push(i);
  this.chartData.labels.push(i);
   this.chartData.datasets[0].data[i]=5*i+700;
  this.y.push(i+4);
}
 this.renderChart(this.chartData, this.options);
// this.x=ar;
// this.y=y1;

      },
       //
     Getallftime(){
    var d1={mid:'',vid:''};
    d1.mid=1;
    d1.vid=1;
    ReportService.getftime(d1.mid,d1.vid).then(res => {
   // this.chartData.datasets[0].data[1] = res.data[0].ftime    //fsecond/3600;
    console.log(res.data[0].ftime);
     this.renderChart(this.chartData, this.options)
           })
      .catch(error => {
        console.error(error);
      });
     },
     //
  Getallmtime(){
    var d1={mid:'',vid:''};
    d1.mid=1;
    d1.vid=0;
    ReportService.getmtime(d1.mid,d1.vid,5).then(res => {
    //this.chartData.datasets[0].data[0] = res.data[0].rsecond/3600;
    this.chartData.datasets[0].data[2] = res.data[0].MR   ///msecond/3600;
    this.chartData.datasets[0].data[1] = 720-res.data[0].CLOSED   ///msecond/3600;
    this.chartData.datasets[0].data[0]= 720 //res.data[0].mtime + res.data[0].ftime ;
    this.chartData.datasets[0].data[3] =  res.data[0].CLOSED//this.chartData.datasets[0].data[1]- this.chartData.datasets[0].data[2] ;
    console.log(res.data[0].mtime);
     this.renderChart(this.chartData, this.options)
           })
      .catch(error => {
        console.error(error);
      });
     },
/////
//        Getmessages(){
//   var self = this;
//    UserService.getMessages().then(result => {
//      this.rotateprop;
//      this.propmessages = result.data;
//      self.watchdata=this.propmessages;
//            })
//       .catch(error => {
//         console.error(error);
//       });
//  },
    }
  }


</script>

JavaScript