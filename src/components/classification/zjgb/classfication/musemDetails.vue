<template>
	<div id="musemIntroduce">
		<!--<div class="imgBox">
			<img src="../../../../assets/img/anjj0.png"/>
		</div>-->
		<div class="textBox" v-html="dataList.info.data.content">
			<!--<p>中国海关博物馆是中华人民共和国海关总署直属的国家级行业博物馆，位于北京市东城区建国门内大街六号，东接古观象台、西依海关总署机关大楼、北邻东长安街、南近柳罐胡同，为古典园林式建筑。博物馆内设办公室、人事保卫部、藏品管理部、陈列展览部等部门，具有海关文物收藏保护、海关文化展示交流、海关历史研究、爱国主义暨海关职业素质教育等功能</p>
			<p>2002年4月，海关总署党组作出筹建中国海关博物馆的重大决策，2010年3月28日正式在京动工兴建，2013年9月29日面向海关系统内部开放，2014年3月30日正式面向社会开放。博物馆主展区建筑面积约8,000平方米，基本陈列位于主展区一层、二层，包括千秋古关、近代海关、现代海关三个部分。专题展厅和临时展厅位于地下一层。此外还有“海关902”艇专题展厅。</p>
			<p>中国海关博物馆现有藏品18,000余件，其中实物13,000多件、照片5,000多张，涵盖了从战国时期至当代各个历史时期的海关重要文物。其中既有“关”字瓦当、粤海关十两银锭、1894年“中国灯塔图”、大龙邮票、总税务司赫德使用过的邮袋、李鸿章题写的“津海新关”木匾等海关历史文物，也有新中国首任海关总署署长任命书、见证小平南巡讲话的“海关902”艇等当代海关文物，还有海关查获的11世纪观音立像、战国时期青铜剑、雪豹标本、东北虎皮等走私物品。</p>-->
		</div>
	</div>
</template>


<script>
  	import Api from '../../../../api.js'
	
	export default {
	    data () {
	      return {
	     		dataList: [],
	     		tittle: ''
	      }	
	   	},
	    components:{ //在再这里要注入我的组件
	      
	    },
	    methods: {
		   gotoDetails (){
		   		//location.href = '#MusemPulpitDetails?id='+id
		   }
	    },
	    created(){//只执行一次
	    },
	    mounted(){
	    	
	    		this.tittle = this.$route.query.tittle
	    		var jsons = {
	    			'id':this.$route.query.id
	    		}
	    		Api.pulpit.pulpitDetails(jsons).then(res=>{
	    			this.dataList = res.data
	    			setTimeout(function(){
	    				$('.textBox').children().attr('style','');
	    				//$('.textBox').children().children().attr('style','');
	    			})
	    			console.log(res)
	    		},err=>{})
	    }
  }
</script>