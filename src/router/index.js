import Vue from 'vue'
import Router from 'vue-router'
const Tab = resolve => require(['@/components/Wap/tab'], resolve)
const Index = resolve => require(['@/components/Wap/index/index'], resolve)
const classifyIndex = resolve => require(['@/components/Wap/classify/classifyIndex'], resolve)
const shoppingCar = resolve => require(['@/components/Wap/shoppingCar/shoppingCar'], resolve)
const shoppingCarEntry = resolve => require(['@/components/Wap/shoppingCar/shoppingCarEntry'], resolve)
const suborder = resolve => require(['@/components/Wap/shoppingCar/suborder'], resolve)
const pay = resolve => require(['@/components/Wap/shoppingCar/pay'], resolve)
const mine = resolve => require(['@/components/Wap/mine/mine'], resolve)
const details = resolve => require(['@/components/Wap/brandDes/brandDes'], resolve)
const logIn = resolve => require(['@/components/Wap/logIn/logIn'], resolve)
const wxlogIn = resolve => require(['@/components/Wap/index/wxlogIn'], resolve)
const wxBind = resolve => require(['@/components/Wap/index/wxBind'], resolve)
const register = resolve => require(['@/components/Wap/register/register'], resolve)
const logInMsg = resolve => require(['@/components/Wap/logIn/logInMsg'], resolve)
const forgetPwd = resolve => require(['@/components/Wap/logIn/forgetPwd'], resolve)
const personalData = resolve => require(['@/components/Wap/mine/personalData'], resolve)
const collect = resolve => require(['@/components/Wap/mine/collect'], resolve)
const searchWord = resolve => require(['@/components/Wap/index/searchWord'], resolve)
const confirmAddress = resolve => require(['@/components/Wap/shoppingCar/confirmAddress'], resolve)
const myCoin = resolve => require(['@/components/Wap/mine/myCoin'], resolve)
const invoice = resolve => require(['@/components/Wap/shoppingCar/invoice'], resolve)
const customerService = resolve => require(['@/components/Wap/mine/customerService'], resolve)
const paySucced = resolve => require(['@/components/Wap/shoppingCar/paySucced'], resolve)
const exchange = resolve => require(['@/components/Wap/mine/exchange'], resolve)
const exchangeDetail = resolve => require(['@/components/Wap/mine/exchangeDetail'], resolve)
const appSetting = resolve => require(['@/components/Wap/mine/appSetting'], resolve)
const aboutApp = resolve => require(['@/components/Wap/mine/aboutApp'], resolve)
const comIntro = resolve => require(['@/components/Wap/mine/comIntro'], resolve)
const feedback = resolve => require(['@/components/Wap/mine/feedback'], resolve)


const coinDetail = resolve => require(['@/components/Wap/mine/coinDetail'], resolve)
const payResult = resolve => require(['@/components/Wap/mine/payResult'], resolve)
const coinCash = resolve => require(['@/components/Wap/mine/coinCash'], resolve)
const coinCashDetail = resolve => require(['@/components/Wap/mine/coinCashDetail'], resolve)
const cashSetting = resolve => require(['@/components/Wap/mine/cashSetting'], resolve)
const yyMP = resolve => require(['@/components/Wap/register/yyMP'], resolve)
/*order页面组件*/
const Order = resolve => require(['@/components/Wap/order/order'], resolve)
const OrderDetail = resolve => require(['@/components/Wap/order/children/orderDetail'], resolve)
const OrderSubpage = resolve => require(['@/components/Wap/order/children/orderSubpage'], resolve)
const Logistics = resolve => require(['@/components/Wap/order/children/logistics'], resolve)
const Comment = resolve => require(['@/components/Wap/order/children/comment'], resolve)

const address = resolve => require(['@/components/Wap/mine/adress'], resolve)
const addAddress = resolve => require(['@/components/Wap/mine/addAddress'], resolve)

/*wx_user组件*/
const User = resolve => require(['@/components/wx_user/user'], resolve)
const UserBindWx = resolve => require(['@/components/wx_user/children/userBindWx'], resolve)
const Bindinfo = resolve => require(['@/components/wx_user/children/bindinfo'], resolve)
const UserRegisterWx = resolve => require(['@/components/wx_user/children/userRegisterWx'], resolve)
const QrCode = resolve => require(['@/components/wx_user/qrcode'], resolve)

//创客组件
const salesIndex = resolve => require(['@/components/salesWap/index/index'], resolve)
const indexDetail = resolve => require(['@/components/salesWap/index/indexDetail'], resolve)
const salesCustomer = resolve => require(['@/components/salesWap/customer/salesCustomer'], resolve)
const salesLogin = resolve => require(['@/components/salesWap/login/login'], resolve)
const salesForgetPwd = resolve => require(['@/components/salesWap/login/forgetPwd'], resolve)
const salesRegister = resolve => require(['@/components/salesWap/register/saleRegister'], resolve)
const salesRange = resolve => require(['@/components/salesWap/saleCharts/saleCharts'], resolve)
const SalePersonal = resolve => require(['@/components/salesWap/personal/salePersonal'], resolve)
const SaleWallet = resolve => require(['@/components/salesWap/personal/subpage/saleWallet'], resolve)
const WalletDetail = resolve => require(['@/components/salesWap/personal/subpage/walletDetail'], resolve)
const WithdrawSetting = resolve => require(['@/components/salesWap/personal/subpage/withdrawSetting'], resolve)
const SaleWithdraw = resolve => require(['@/components/salesWap/personal/subpage/saleWithdraw'], resolve)
const SalePersonalData = resolve => require(['@/components/salesWap/personal/subpage/personalData'], resolve)
const myCustomer = resolve => require(['@/components/salesWap/customer/myCustomer'], resolve)
const customerDetails = resolve => require(['@/components/salesWap/customer/customerDetails'], resolve)
const billDetails = resolve => require(['@/components/salesWap/personal/subpage/billingDetails'], resolve)
const wxLogBindPhone = resolve => require(['@/components/salesWap/login/wxLogBindPhone'], resolve)
const wxBindCount = resolve => require(['@/components/salesWap/login/wxBindCount'], resolve)
const ckMP = resolve => require(['@/components/salesWap/ckMP'], resolve)
const Standard = resolve => require(['@/components/salesWap/index/standard'], resolve)

/*ProductList组件*/
const ProductList = resolve => require(['@/components/Wap/ProductList/ProductList.vue'], resolve)


Vue.use(Router)

let router = new Router({
  // mode: 'history',
  // scrollBehavior () {
  //   return { x: 0, y: 0 }
  // },
  routes: [
    {path: '/', redirect: {name: 'index'}},
    {
      path: '/yayi',
      component: Tab,
      name: 'tab',
      children: [
        {path: '/yayi/index', component: Index, name: 'index'},
        {path: '/yayi/classify', component: classifyIndex, name: 'classifyIndex'},
        {path: '/yayi/shoppingCar', component: shoppingCar, name: 'shoppingCar'},
        {path: '/yayi/mine', component: mine, name: 'mine'},
      ]
    },
    {
      path: '/logIn',
      name: 'logIn',
      component: logIn,
    },
    {
      path: '/wxlogIn',
      name: 'wxlogIn',
      component: wxlogIn
    },
    {
      path: '/wxBind',
      name: 'wxBind',
      component: wxBind
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      mate: {keepAlive: true}
    },
    {
      path: '/customerService',
      name: 'customerService',
      component: customerService,
    },
    {
      path: '/logInMsg',
      name: 'logInMsg',
      component: logInMsg,
    },
    {
      path: '/suborder',
      name: 'suborder',
      component: suborder,
    },
    {
      path: '/shoppingCarEntry',
      name: 'shoppingCarEntry',
      component: shoppingCarEntry,
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay,
    },
    {
      path: '/forgetPwd',
      name: 'forgetPwd',
      component: forgetPwd,
    },
    {
      path: '/details/:goodId',
      name: 'details',
      component: details,
    },
    {
      name: 'wx_user',
      path: '/wx_user',
      component: User,
      children: [
        {path: '/wx_user/userBindWx', component: UserBindWx, name: 'userBindWx'},
        {path: '/wx_user/bindinfo', component: Bindinfo, name: 'bindinfo'},
        {path: '/wx_user/userRegisterWx', component: UserRegisterWx, name: 'userRegisterWx'}
      ]
    },
    {
      name: 'qrcode',
      path: '/qrcode',
      component: QrCode
    },
    {
      name: 'personalData',
      path: '/personalData',
      component: personalData
    },
    {
      name: 'collect',
      path: '/collect',
      component: collect
    },
    {
      name: 'searchWord',
      path: '/searchWord',
      component: searchWord
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        {path: '/order/orderSubpage/:order_state', component: OrderSubpage, name: 'orderSubpage'}
      ]
    },
    {
      name: 'orderDetail',
      path: '/orderDetail',
      component: OrderDetail
    },
    {
      name: 'address',
      path: '/address',
      component: address
    },
    {
      name: 'addAddress',
      path: '/addAddress',
      component: addAddress
    },
    {
      name: 'payResult',
      path: '/payResult',
      component: payResult
    },
    {
      name: 'confirmAddress',
      path: '/confirmAddress',
      component: confirmAddress
    },
    {
      name: 'myCoin', redirect: {name: 'coinDetail'},
      path: '/myCoin',
      component: myCoin,
      children: [
        {
          name: 'coinDetail',
          path: '/coinDetail',
          component: coinDetail
        },
        {
          name: 'exchange',
          path: '/exchange',
          component: exchange
        },
        {
          name: 'exchangeDetail',
          path: '/exchangeDetail',
          component: exchangeDetail
        }
      ]
    },
    {
      name: 'productList',
      path: '/productList',
      component: ProductList
    },
    {
      name: 'logistics',
      path: '/logistics',
      component: Logistics
    },
    {
      name: 'comment',
      path: '/comment',
      component: Comment
    },
    {
      name: 'invoice',
      path: '/invoice',
      component: invoice
    },
    {
      name: 'salesIndex',
      path: '/salesIndex',
      component: salesIndex
    },
    {
      name: 'salesCustomer',
      path: '/salesCustomer',
      component: salesCustomer
    },
    {
      name: 'paySucced',
      path: '/paySucced',
      component: paySucced
    },
    {
      name: 'salesLogin',
      path: '/salesLogin',
      component: salesLogin
    },
    {
      name: 'salesForgetPwd',
      path: '/salesForgetPwd',
      component: salesForgetPwd
    },
    {
      name: 'salesRegister',
      path: '/salesRegister',
      component: salesRegister
    },
    {
      name: 'salesRange',
      path: '/salesRange',
      component: salesRange
    },
    {
      name: 'salePersonal',
      path: '/salePersonal',
      component: SalePersonal
    },
    {
      name: 'saleWallet',
      path: '/salePersonal/saleWallet',
      component: SaleWallet
    },
    {
      name: 'withdrawSetting',
      path: '/salePersonal/withdrawSetting',
      component: WithdrawSetting
    },
    //todo
    {
      name: 'walletDetail',
      path: '/salePersonal/walletDetail',
      component: WalletDetail
    },
    {
      name: 'saleWithdraw',
      path: '/salePersonal/saleWithdraw',
      component: SaleWithdraw
    },
    {
      name: 'salePersonalData',
      path: '/salePersonal/personalData',
      component: SalePersonalData
    },
    {
      name: 'myCustomer',
      path: '/myCustomer',
      component: myCustomer
    },
    {
      name: 'customerDetails',
      path: '/customerDetails',
      component: customerDetails
    },
    {
      name: 'coinCash',
      path: '/coinCash',
      component: coinCash
    },
    {
      name: 'coinCashDetail',
      path: '/coinCashDetail',
      component: coinCashDetail
    },
    {
      name: 'cashSetting',
      path: '/cashSetting',
      component: cashSetting
    },
    {
      name: 'standard',
      path: '/standard',
      component: Standard
    },
    {
      name: 'indexDetail',
      path: '/indexDetail',
      component: indexDetail
    }, {
      name: 'billDetails',
      path: '/salePersonal/billDetails',
      component: billDetails
    }, {
      name: 'wxLogBindPhone',
      path: '/wxLogBindPhone',
      component: wxLogBindPhone
    }, {
      name: 'ckMP',
      path: '/ckMP',
      component: ckMP
    }, {
      name: 'wxBindCount',
      path: '/wxBindCount',
      component: wxBindCount
    }, {
      name: 'yyMP',
      path: '/yyMP',
      component: yyMP,
      mate: {keepAlive: true}
    },
    {
      name: 'appSetting',
      path: '/appSetting',
      component: appSetting
    },
    {
      name: 'aboutApp',
      path: '/aboutApp',
      component: aboutApp
    },
    {
      name: 'comIntro',
      path: '/comIntro',
      component: comIntro
    },
    {
      name: 'feedback',
      path: '/feedback',
      component: feedback
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (window.navigator.onLine == true) {
    next()
  } else {
    // plus.nativeUI.alert("网络连接错误,请检查网络！")
  }
})

export default router
