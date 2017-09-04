<template>
	<div id="customMuseumQiestopms">
		<div class="questionList">
			<div class="tittle">
				出境旅客需申报物品(多选)
			</div>
			<div class="questions">
				<div class="questionBox" v-for="(itme,index) in 4">
					<div class="questions">
						<div class="checkBox" @click="updataCheck(index)">
							<img v-show="isOk" :src="imgUrl+'/img/duigou.png'" alt="" />
						</div>
						<p>文物，濒危动植物及其制品，生物物种资源，金银等贵重物品</p>
					</div>	
				</div>
				
			</div>
			<div class="questions AllAnswer">
				<div class="questionBox">
					<div class="questions">
						<p>第三题回答正确</p>
						<p>答案为：bcd</p>
						<p>您本次的积分为：5分，总积分为：356</p>
					</div>	
				</div>
				<div class="questionBox">
					<div class="questions">
						<p>第三题回答正确</p>
						<p>答案为：bcd</p>
						<p>您本次的积分为：5分，总积分为：356</p>
					</div>		
				</div>
			</div>
			<div class="submitBtn">
				<div class="btns">
					查看答案
				</div>
				<div class="btns">
					下一题
				</div>
			</div>
			<div class="submitBtn">
				<div class="nextBTN">
					下一题
				</div>
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
	     		list:'',
	     		isOk: true
	      }
	   	},
	   	methods: {
	      	updataCheck(index) {
	      		this.isOk = !this.isOk
	      	}
	     },
	   	 mounted(){
	    		

	    }
	}
</script>