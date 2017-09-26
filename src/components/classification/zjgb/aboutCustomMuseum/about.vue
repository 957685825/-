<template>
	<div id="exhibition">
		<div class="swipeDiv">
			<mt-swipe  :auto="4000" :show-indicators="false">
				<mt-swipe-item v-for='itme in list'>
					<img :src="hostUrl+itme.filePath" style="width: 100%;height: 100%;"/>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<!--<div style="width: 100%;height: 5.47rem; background-color: rgba(0,0,0,0.5); position: absolute;top: 0;">-->

		<!--</div>-->
		<div class="exhibitList">
			<router-link to="musemIntroduce?type=gbjj&tittle=关博简介">
				<div class="exhibitBtn">
					<div class="gyabBtnBox">
						关博简介
					</div>
					<div class="imgBox">
						<img :src="imgUrl+'/img/abjj.png'" alt="" />
					</div>
				</div>
			</router-link>
			<router-link to="musemIntroduce?type=jgsz&tittle=机构设置">
				<div class="exhibitBtn">
					<div class="gyabBtnBox">
						机构设置
					</div>
					<div class="imgBox">
						<img :src="imgUrl+'/img/jgsz.png'" alt="" />
					</div>
				</div>
			</router-link>
			<router-link to="musemIntroduce?type=bmzw&tittle=部门职位">
				<div class="exhibitBtn">
					<div class="gyabBtnBox">
						部门职位
					</div>
					<div class="imgBox">
						<img :src="imgUrl+'/img/bmzz.png'" alt="" />
					</div>
				</div>
			</router-link>
			<router-link to="musemIntroduce?type=gzzd&tittle=规章制度">
				<div class="exhibitBtn">
					<div class="gyabBtnBox">
						规章制度
					</div>
					<div class="imgBox">
						<img :src="imgUrl+'/img/gzzd.png'" alt="" />
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
import Api from '../../../../api.js'
	export default {
		data () {
	      return {
	     		imgUrl:Api.STATIC_SERVER_HOST,
	     		list:'',
			  	hostUrl:''
	      }	
	   	},
	   	 mounted(){
             var jsons = {
                 'type':this.$route.query.type
             }
             Api.lunbo.list(jsons).then(res=>{
                 this.hostUrl = res.data.url
                 this.list = res.data.List
                 console.log(res)
             },err=>{})

	    }
	}
</script>