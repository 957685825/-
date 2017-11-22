<template>
	<div id="everydayClearance">
		<div class="textContents">
			<h2>{{dataList.title}}</h2>
			<div class="question" v-show="registerBool">
				{{dataList.lore}}
			</div>
			<div class="submitBox">
				<div class="tsk">
					<div class="texts">
						<p>本月您已签到<span>{{everyRegisterData.signTime}}</span>天，</p>
						<p>您的总积分为<span>{{everyRegisterData.totalCredit}}分</span></p>
					</div>
				</div>
				<div class="qdBtn" @click="register">
					{{registerText}}
				</div>				
			</div>
			<div class="jfdhBtn"  @click="gotoRegisterTotal">
				积分兑换说明
			</div>
		</div>
	</div>
</template>
<script>
    import Api from '@/api.js'

    export default {
        data () {
            return {
                dataList: [],
                tittle: '',
                hostUrl: '',
				everyRegisterData:'',
				registerBool: false,
				registerText: '签到'
            }
        },
        components:{ //在再这里要注入我的组件

        },
        methods: {
            register(){
                if(this.registerBool === false){
                    Api.every.everyRegister().then(res=>{
                        this.everyRegisterData = res.data
                        console.log(res)
                        if(res.data.msg == ''){
                            this.registerBool = true
                            $('.tsk').fadeIn(2000)
                            $('.qdBtn').css({'background':'#a0a5ab'})
                            this.registerText ='已签到'

                            setTimeout(function(){
                                //$('.tsk').fadeOut(500)
                            },4000)
                        }
                    },err=>{alert('网络错误')})
				}else{
                    alert('您今天已经签到，请明天再来')
				}

			},
			gotoRegisterTotal(){
				this.$router.push( { path : '/totalUse', query : { 'totalCredit' : this.everyRegisterData.totalCredit }})
			}
        },
        created(){//只执行一次
        	      
        },
        mounted(){

            Api.every.everyClearance().then(res=>{
                //this.hostUrl = res.data.url
				this.dataList =  res.data
                console.log(res)
				if(res.data.remarks != ''){
                    $('.qdBtn').css({'background':'#a0a5ab'})
                    this.registerBool = true
					this.registerText ='已签到'
				}else{
                    this.registerBool = false
                    this.registerText ='签到'

                }
            },err=>{alert('网络错误')})
        }
    }
</script>