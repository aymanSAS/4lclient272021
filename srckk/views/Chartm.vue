	


  <template>
  <div class="jumbotron">
    <h3>Failure Time Chart</h3>
    <bar-chart  :data1 ="mydata"  >  </bar-chart>

<!-- <div>
    <h3>Doughnut Chart Example in Vue</h3>
    <doughnut-chart></doughnut-chart>
  </div>

<div>
    <h3>Pie Chart Example in Vue</h3>
    <pie-chart></pie-chart>
  </div> -->

<hr>
<span style="color:blue"> Total Time      : {{TotalTime | formatNumber}}  Hours</span>
<hr>
<span style="color:red"> Failure Time     : {{ftime | formatNumber}} Hours   </span>
<!-- <span style="color:red">  {{ftime}}/{{TotalTime}} %   </span> -->

<hr>
<span style="color:blue"> Maintenance Time : {{mtime | formatNumber}} Hours</span>
<hr>
<span style="color:red">  Other Time       :{{otime | formatNumber}}  Hours</span>



  </div>



</template>

<script>
import BarChart from '@/components/BarChart'
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
  otime:''
  }
  },
   mounted() {
  
        this.Getallmtime();
    },
  methods:{
   Getallmtime(){
    var d1={mid:'',vid:''};
    d1.mid=1;
    d1.vid=0;
    ReportService.getmtime(d1.mid,d1.vid).then(res => {
    //this.chartData.datasets[0].data[0] = res.data[0].rsecond/3600;
    this.mtime = res.data[0].mtime   ///msecond/3600;
    this.ftime = res.data[0].ftime   ///msecond/3600;
    this.TotalTime= res.data[0].tottime  //res.data[0].mtime + res.data[0].ftime ;
    this.otime =  this.ftime- this.mtime ;
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