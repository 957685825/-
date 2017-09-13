<template>
	<!--基本陈列-->
	<div id="jbclClassification" >
		<div class="contents">
			<div class="leftBox">
				<div class="tittle">
					<p>关于关博</p>
				</div>
			</div>
			<div class="rightBox">
				<router-link to="musemIntroduce?type=gbjj&tittle=关博简介">
					<div class="btnList">
						<img :src="imgUrl+'/img/abjj.png'" alt="" />
						<p>关博简介</p>
					</div>
				</router-link>
				<router-link to="musemIntroduce?type=jgsz&tittle=机构设置">
					<div class="btnList">
						<img :src="imgUrl+'/img/jgsz.png'" alt="" />
						<p>机构设置</p>
					</div>
				</router-link>
				<router-link to="musemIntroduce?type=bmzw&tittle=部门职位">
					<div class="btnList">
						<img :src="imgUrl+'/img/bmzz.png'" alt="" />
						<p>部门职位</p>
					</div>
				</router-link>
				<router-link to="musemIntroduce?type=gzzd&tittle=规章制度">
				<div class="btnList">
					<img :src="imgUrl+'/img/gzzd.png'" alt="" />
					<p>规章制度</p>
				</div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
import Api from '../../../../api.js'
	export default {
		data () {
	      return {
	     		imgUrl:Api.STATIC_SERVER_HOST,
	     		list:''
	      }	
	   	},
	   	 mounted(){
	    		

	    }
	}
</script>