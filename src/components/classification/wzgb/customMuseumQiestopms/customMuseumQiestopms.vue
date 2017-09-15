<template>
	<div id="customMuseumQiestopms">
		<div class="questionList">
			<div class="tittle">
				{{dataList.question}}？
			</div>
			<div class="questions">
				<div class="questionBox" v-for="(itme,index) in dataList.hgBranchs">
					<div class="questions">
						<div class="checkBox" @click="updataCheck(index,true)">
							<img v-show="itme.isOk" :src="imgUrl+'/img/duigou.png'" alt="" />
						</div>
						<p>{{itme.branchNo}}&nbsp;:&nbsp;{{itme.id}}</p>
					</div>	
				</div>
			</div>
			<!--查看单道题的答案-->
			<div class="questions" v-show="answerBoole">
				<div class="questionBox">
					<div class="questions">
						<p>本题题回答{{isDadui}}</p>
						<p>答案为：{{isAnswers}}</p>
						<p>您本次的积分为：{{answerData.increaseCredit}}分，总积分为：{{answerData.totalCredit}}</p>
					</div>
				</div>
			</div>
			<!--查看全部的答案-->
			<div class="questions AllAnswer" v-show="AllAnswerBoole">
				<div class="questionBox">
					<div class="questions">
						<p>您总积分为：{{totalCreditedNumber}}</p>
					</div>
				</div>
				<div class="questionBox" v-for="itme in answerListData">
					<div class="questions">
						<p>第{{itme.questionNo}}题回答{{itme.isDadui}}</p>
						<p>答案为：{{itme.answers}}</p>
						<p>您本次的积分为：{{itme.increaseCredit}}分</p>
					</div>
				</div>

			</div>
			<div class="submitBtn" v-show="!isShowAnswer">
				<div class="btns" id="showAnswers" v-show="!lastQuestionBoole" @click="shwoAnswer">
					查看答案
				</div>
				<div class="btns btnsqb" v-show="lastQuestionBoole" @click="AllShwoAnswer">
					查看全部答案
				</div>
				<div class="btns" v-show="!lastQuestionBoole" @click="nextQuestions">
					下一题
				</div>
			</div>
			<div class="submitBtn" v-show="isShowAnswer" @click="nextQuestions">
				<div class="nextBTN">
					下一题
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
import Api from '../../../../api.js'
import { Indicator } from 'mint-ui';
	export default {
		data () {
	      return {
			  imgUrl:Api.STATIC_SERVER_HOST,
			  dataList:'',
              list:[
					{"isOk":false,content:'dfjsdfsdfjsdkf'},
					{"isOk":false,content:'aaaaaaaaaa'},
					{"isOk":false,content:'bbbbbbbbbbbbb0'}
					],
			  isOk: true,
              AllAnswerBoole:false,
              answerBoole:false,
			  lastQuestionBoole:false,
              questionId:'',
			  answers:[],
              pageNo:'',
              totalCredit:'',//总积分
			  answerData:'',//查看答案的数据
			  isAnswers:[],
              isDadui:'',
			  isShowAnswer:false,
			  noClick:false,
			  answerListData:'',
              totalCreditedNumber:''
	      }
	   	},
	   	methods: {
	      	updataCheck(index,bool) {
	      	    if(this.noClick == false){
                    if(!bool){
                        this.dataList.hgBranchs.forEach(itme=>{
                            itme.isOk = false
                        })
                        this.dataList.hgBranchs[index].isOk = !this.dataList.hgBranchs[index].isOk

                    }else{
                        this.dataList.hgBranchs[index].isOk = !this.dataList.hgBranchs[index].isOk
                        this.$forceUpdate()
						if(this.dataList.hgBranchs[index].isOk == true){
                            var itmeId = this.dataList.hgBranchs[index].id
                            this.answers.push(itmeId)

						}else{
                            this.answers.splice(index,1)
						}
                    }



				}else{
	      	        return
				}

	      	},
            nextQuestions() {
                //Indicator.open('加载中...');
                    if(this.answers != '') {
                           var jsons = {
                               questionid: this.questionId,
                               answers: this.answers + '',
                               pageNo: this.pageNo
                           }

                           $('.checkBox').css({"background-color": '#fff'})
                           this.answerBoole = false
                           this.noClick = false
                           Api.every.everyQuestionAnswerNext(jsons).then(res => {
                               Indicator.close();
                               this.isShowAnswer = false
                               this.dataList = res.data.bean
                               this.questionId = res.data.bean.id
                               this.pageNo = res.data.bean.pageNo
                               if (res.data.isLast == true) {
                                   this.lastQuestionBoole = true
                               }
                               for (var i = 0; i < this.dataList.hgBranchs.length; i++) {
                                   this.dataList.hgBranchs[i].isOk = false
                               }
                               this.answers = []
                           }, err => {
                               alert('网络错误')
                               Indicator.close()
                           })

                    }else{
                        alert('请选择答案')
                        Indicator.close()
                    }

			},
            AllShwoAnswer() {

                if(this.answers != '') {
                    var jsons = {
                        questionid: this.questionId,
                        answers: this.answers + ''
                    }
                    this.answers = []
                    Api.every.everyQuestionAllAnswer(jsons).then(res => {
                        if (res) {
                            this.AllAnswerBoole = true
                            this.noClick = true
                            $('.btnsqb').hide()
                            $('.checkBox').css({"background-color": 'inherit'})
                            this.answerListData = res.data
                            this.totalCreditedNumber= this.answerListData[0].totalCredit
							for(var i = 0; i<this.answerListData.length;i++){

                                if(this.answerListData[i].isDadui == false){
                                    this.answerListData[i].isDadui = '错误'
                                }else{
                                    this.answerListData[i].isDadui = '正确'
                                }
							}


                        }
                        console.log(res)
                    })
                }else{
                    alert('请先选择问题的答案')
				}

			},
            shwoAnswer(){
	      	    let _this = this
                if(this.answers != ''){
                    this.answerBoole = true
					this.isShowAnswer = true
                    this.noClick = true
					$('.checkBox').css({"background-color":'inherit'})
                    var jsons={
                        questionid: this.questionId,
                        answers: this.answers+'',
                        pageNo: this.pageNo
                    }
                    Api.every.everyQuestionAnswer(jsons).then(res=>{
                        if(res){
                            console.log(res)
                            this.isDadui = res.data.isDadui
							if(this.isDadui == true){
                                this.isDadui = '正确'
							}else{
                                this.isDadui = '错误'
							}
                            this.answerData = res.data
                            this.answerData.bean.hgBranchs.forEach((itme,index)=>{
                                if(itme.isAnswer == '1' || itme.isAnswer == 1){
                                    this.isAnswers.push(itme.branchNo)

                                }
                                if((index+1) == this.answerData.bean.hgBranchs.length){
                                    this.isAnswers.forEach(itmes=>{
                                        this.isAnswers = ''
                                        this.isAnswers += itmes
                                    })
                                }
                            })
						}

                    },err=>{
							alert('网络错误')
                    })
				}else{
                    alert('请选择答案')
				}

			}
	     },
	   	 mounted(){
			 Api.every.everyQuestion().then(res=>{
			     this.dataList = res.data
				 this.questionId = res.data.id
				 this.pageNo = res.data.pageNo
				 for(var i = 0; i<this.dataList.hgBranchs.length;i++){
                     this.dataList.hgBranchs[i].isOk = false
				 }
			 },err=>{})
	    }
	}
</script>