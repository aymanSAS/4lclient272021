	


  <template>
  <div class="jumbotron">
    <h3>Daily Rate Chart</h3>
    <h3> {{Date() | formatDateonly}} </h3>
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