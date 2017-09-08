<template>
	<div id="customMuseumQiestopms">
		<div class="questionList">
			<div class="tittle">
				出境旅客需申报物品(多选)
			</div>
			<div class="questions">
				<div class="questionBox" v-for="(itme,index) in list">
					<div class="questions">
						<div class="checkBox" @click="updataCheck(index,false)">
							<img v-show="itme.isOk" :src="imgUrl+'/img/duigou.png'" alt="" />
						</div>
						<p>{{itme.content}}</p>
					</div>	
				</div>
				
			</div>
			<!--查看单道题的答案-->
			<div class="questions" v-show="answerBoole">
				<div class="questionBox">
					<div class="questions">
						<p>本题题回答正确</p>
						<p>答案为：{bcd}</p>
						<p>您本次的积分为：{5}分，总积分为：{356}</p>
					</div>
				</div>
			</div>
			<!--查看全部的答案-->
			<div class="questions AllAnswer" v-show="AllAnswerBoole">
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
				<div class="btns" v-show="!lastQuestionBoole" @click="shwoAnswer">
					查看答案
				</div>
				<div class="btns" v-show="lastQuestionBoole" @click="AllShwoAnswer">
					查看全部答案
				</div>
				<div class="btns">
					下一题
				</div>
			</div>
			<div class="submitBtn" style="display: none">
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
              list:[
					{"isOk":false,content:'dfjsdfsdfjsdkf'},
					{"isOk":false,content:'aaaaaaaaaa'},
					{"isOk":false,content:'bbbbbbbbbbbbb0'}
					],
	     		isOk: true,
              AllAnswerBoole:false,
              answerBoole:false,
			  lastQuestionBoole:false
	      }
	   	},
	   	methods: {
	      	updataCheck(index,bool) {
                if(!bool){
                    this.list.forEach(itme=>{
                        itme.isOk = false
                    })
                    this.list[index].isOk = !this.list[index].isOk

                }else{
                    this.list[index].isOk = !this.list[index].isOk
                }
	      	},
            AllShwoAnswer() {
                this.AllAnswerBoole = true
			},
            shwoAnswer(){
	      	    this.answerBoole = true
			}
	     },
	   	 mounted(){
//			this.lastQuestionBoole = true

	    }
	}
</script>