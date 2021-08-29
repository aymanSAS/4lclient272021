
 <script>
  import moment from 'moment';

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
        var xdata1=[];
        var ydata1=[];
        
      return {
        content:'',
        timerchart:'',
         data1:[],
          props:["data1"] ,
          xdata:[],
          ydata:[],
   mydate:'',
        chartData: {
                 //    labels: ["Tot Time", "Failure Time", "Mech Failure Time", "Other Failure Time"
                  //  ],
          labels:[],


          datasets: [{
            label: 'Rate Chart',
            borderWidth: 1,
            // backgroundColor: [
            //   'rgba(255, 99, 132, 0.2)',
            //   'rgba(54, 162, 235, 0.2)',
            //   'rgba(255, 206, 86, 0.2)',
            //   'rgba(75, 192, 192, 0.2)',
            //   'rgba(153, 102, 255, 0.2)',
            //   'rgba(255, 159, 64, 0.2)',
            //   'rgba(255, 99, 132, 0.2)',
            //   'rgba(54, 162, 235, 0.2)',
            //   'rgba(255, 206, 86, 0.2)',
            //   'rgba(75, 192, 192, 0.2)',
            //   'rgba(153, 102, 255, 0.2)',
            //   'rgba(255, 159, 64, 0.2)'
            // ],
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
            //data: [rtime,ftime,mtime,othertime]
            data:[],
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
                display: true
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
    //

// try {
//       const { userlist } = await ReportService.getmonthrates(0)
//       this.chartData = userlist
//       this.loaded = true
//     } catch (e) {
//       console.error(e)
//     }
 beforDestroyed(){
clearInterval(this.timerchart);
},   
    mounted() {
      
        //this.Getit(0);
       setTimeout(()=>this.Getit(0),500);
      this.timerchart= setInterval(()=>this.Getit(0),50000) ;
    },
    methods:{
      

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

    ReportService.getdayrates(m).then(res => {
    this.content = res.data;
           })
      .catch(error => {
        console.error(error);
      }).then(res=>{
   var x1=  this.content.map(function(hobby1) {
    return {
        time:moment(String(hobby1.date)).format('HH:mm'),
           }
        });
   this.xdata=x1.map(el=>Object.values(el));  
 
   var y1=  this.content.map(function(hobby11) {
    return {
        id:0,
        ppmrate:hobby11.ppmrate
           }
        });
   this.ydata=y1.map(el=>Object.values(el));  
   
 console.log(this.ydata)
    
   this.chartData.datasets[0].data=this.ydata ;
    this.chartData.labels=this.xdata;
 this.chartData.datasets[0].backgroundColor = 'blue'
   this.renderChart(this.chartData, this.options)
           })
      .catch(error => {
        console.error(error);
   });
   
//this.mydate=Date();
   },
    }
  }


</script>

JavaScript
