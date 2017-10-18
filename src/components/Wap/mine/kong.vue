<template>
    <div class="kong">
    </div>
</template>

<script>
  import {tokenMethods} from '../../../vuex/util'
  import {Toast,Indicator} from 'mint-ui'
export default {
    name: 'kong',
    data() {
        return {
        }
    },
    created: function() {
        var that = this
        var code = this.queryToArgs()['code']
        if (code) {
            var wxData = JSON.parse(window.sessionStorage.getItem('wxCoin'))
            that.moneyCoins = wxData.moneyCoins;
            var obj = {
                token: tokenMethods.getWapToken(),
                qbType: wxData.qbType,
                code: code,
                money: parseInt(wxData.money),
            }
            that.$store.dispatch('WX_COIN_PAY', obj).then((res) => {
                alert(JSON.stringify(res.data))
                if (res.data.callStatus == 'SUCCEED') {
                    WeixinJSBridge.invoke(
                        'getBrandWCPayRequest', {
                            "appId": res.data.data.appid,     //公众号名称，由商户传入
                            "timeStamp": String(res.data.data.timestamp),     //时间戳，自1970年以来的秒数
                            "nonceStr": res.data.data.noncestr,     //随机串
                            "package": 'prepay_id=' + res.data.data.prepayid,
                            "signType": "MD5",         //微信签名方式：
                            "paySign": res.data.data.sign,   //微信签名
                        },
                        function(res) {
                             alert(JSON.stringify(res))
                            if (res.err_msg == "get_brand_wcpay_request:ok") {
                                Indicator.open()
                                that.kk = 1
                                var timer = setInterval(function() {
                                    if (that.kk == 600) {
                                        clearInterval(timer)
                                        return false
                                    }
                                    that.$store.dispatch('WX_COIN_SEARCH').then((res) => {
                                        if (res.num == 2) {
                                            clearInterval(timer)
                                            Indicator.close()
                                            that.$router.push({ name: 'payResult', params: { moneyCoins: wxData.money, amount: wxData.amount } })
                                            window.sessionStorage.removeItem('wxCoin')
                                        } else {
                                            Indicator.close()
                                            console.log("充值失败")
                                        }
                                    })
                                }, 2000)
                                //Toast({message: '充值成功', duration: 1500})
                            } else {
                                //取消支付？
                                window.sessionStorage.removeItem('wxCoin')
                                that.$router.push({ name: 'coinDetail' })
                                alert("!!")
                            }
                            // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                        }
                    )
                } else {
                    console.log("充值失败")
                }
            })
        }
    },
    components: {
    },
    watch: {
    },
    methods: {
        queryToArgs() {
            let query = window.location.search.substr(1),
                args = {}
            if (!query) return {}
            query.split('&').forEach(item => {
                let temp = item.split('=')
                args[temp[0]] = temp[1]
            })
            return args
        },
    }
}
</script>

