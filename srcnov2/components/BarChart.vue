<script>
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
          props:["data1"] ,

        chartData: {
          labels: ["Tot Time", "Failure Time", "Mech Failure Time", "Other Failure Time"
          ],


          datasets: [{
            label: 'Failure Time Chart',
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
            data: [rtime,ftime,mtime,othertime]
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
        this.Getallmtime();
    },
    methods:{
      init1(){
       this.chartData.datasets[0].data[0]=55;
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
    ReportService.getmtime(d1.mid,d1.vid).then(res => {
    //this.chartData.datasets[0].data[0] = res.data[0].rsecond/3600;
    this.chartData.datasets[0].data[2] = res.data[0].mtime   ///msecond/3600;
    this.chartData.datasets[0].data[1] = res.data[0].ftime   ///msecond/3600;
    this.chartData.datasets[0].data[0]= res.data[0].tottime  //res.data[0].mtime + res.data[0].ftime ;
    this.chartData.datasets[0].data[3] =  this.chartData.datasets[0].data[1]- this.chartData.datasets[0].data[2] ;
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
