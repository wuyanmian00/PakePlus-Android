window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>抖音支付充值演示模板</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:system-ui,-apple-system,"PingFang SC",sans-serif;}
body{background:#f5f5f5;padding:20px;display:flex;justify-content:center;}
.wrap{width:420px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px #00000015;}
.header{text-align:center;padding:20px;font-size:24px;font-weight:bold;position:relative;}
.close{position:absolute;right:20px;top:20px;font-size:28px;cursor:default;}
.title-small{text-align:center;color:#999;font-size:18px;margin:10px 0;}
.amount-show{text-align:center;font-size:28px;font-weight:bold;margin:10px 0;}
.row-box{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;padding:0 24px;}
.item{border:1px solid #ddd;border-radius:12px;text-align:center;padding:16px;font-size:26px;cursor:pointer;}
.item.active{border-color:#ff77aa;background:#ffeef4;color:#ff4477;}
.other{text-align:center;color:#ff4477;font-size:20px;margin:20px 0;}
.input-area{padding:0 24px;margin-top:20px;}
.input-line{margin:18px 0;}
.label{color:#666;font-size:18px;margin-bottom:8px;display:block;}
.input-box{width:100%;border:1px solid #ddd;border-radius:10px;padding:14px;font-size:24px;}
.tip-text{text-align:center;color:#999;font-size:14px;margin:24px 0 30px;}
.btn-pay{width:calc(100% - 48px);margin:0 24px;background:#ff77aa;color:#fff;border:none;border-radius:99px;padding:18px;font-size:26px;font-weight:bold;cursor:pointer;}
.bottom-tip{text-align:center;color:#ff4477;font-size:18px;margin:12px 0 30px;}
/* 充值成功弹窗 */
.popup{
    display:none;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    justify-content:center;
    align-items:center;
}
.pop-box{
    background:#fff;
    padding:40px 30px;
    border-radius:16px;
    text-align:center;
    width:320px;
}
.pop-box h2{
    color:#27ae60;
    font-size:28px;
    margin-bottom:20px;
}
.pop-box p{
    font-size:18px;color:#333;margin-bottom:30px;
}
.pop-close{
    padding:10px 30px;background:#ff77aa;color:#fff;border:none;border-radius:8px;font-size:18px;cursor:pointer;
}
/* =====密码输入弹窗===== */
.pwdPopup{
    display:none;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    justify-content:center;
    align-items:center;
    z-index:1000;
}
.pwdBox{
    background:#fff;
    width:340px;
    border-radius:16px;
    padding:30px 24px;
}
.pwdTitle{
    text-align:center;
    font-size:20px;
    font-weight:bold;
    margin-bottom:8px;
}
.pwdTip{
    text-align:center;
    font-size:13px;
    color:#888;
    margin-bottom:24px;
}
.pwdWrap{
    display:flex;
    gap:8px;
    justify-content:center;
}
.pwdCell{
    width:46px;
    height:48px;
    border:1px solid #ddd;
    border-radius:8px;
    text-align:center;
    font-size:24px;
    line-height:48px;
}
#realPwdInput{
    position:absolute;
    left:-9999px;
    top:0;
    width:1px;
    height:1px;
}
.pwdBtnWrap{
    display:flex;
    margin-top:24px;
    gap:12px;
}
.pwdBtn{
    flex:1;
    padding:14px;
    border-radius:10px;
    border:none;
    font-size:18px;
    cursor:pointer;
}
.pwdCancel{
    background:#eee;
    color:#333;
}
.pwdConfirm{
    background:#ff77aa;
    color:#fff;
}
/* =====抖音APP内消息弹窗样式===== */
.appMsg{
    display:none;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:340px;
    background:#ffffff;
    border-radius:16px;
    box-shadow:0 0 20px rgba(0,0,0,0.25);
    overflow:hidden;
    z-index:999;
}
.appMsgHead{
    background:#ff4d79;color:#fff;text-align:center;padding:14px;font-size:19px;font-weight:bold;
}
.appMsgBody{
    padding:24px 20px;
}
.appMsgRow{
    display:flex;justify-content:space-between;font-size:16px;color:#333;margin:12px 0;
}
.appMsgTip{
    display:none;
}
.appMsgBtnWrap{
    display:flex;border-top:1px solid #eee;
}
.appMsgBtn{
    flex:1;text-align:center;padding:14px;font-size:18px;border:none;background:#fff;cursor:pointer;
}
.appMsgBtn.primary{
    color:#ff4d79;font-weight:bold;
}
.top-notice{
    position:fixed;
    top:20px;
    left:50%;
    transform:translateX(-50%);
    width:340px;
    height:34px;
    background:rgba(0,0,0,0.75);
    border-radius:4px;
    padding:0 10px;
    color:#fff;
    display:flex;
    align-items:center;
    gap:6px;
    z-index:99999;
    opacity:0;
    pointer-events:none;
}
.top-icon{
    font-size:12px;color:#39ff7b;
}
.top-text{
    font-size:11px;white-space:nowrap;
}
.top-money{
    font-weight:bold;color:#39ff7b;
    font-size:11px;
}
@keyframes slideIn{
    from{top:-60px;opacity:0;}
    to{top:20px;opacity:1;}
}
@keyframes slideOut{
    from{top:20px;opacity:1;}
    to{top:-60px;opacity:0;}
}
.show-top{
    animation: slideIn 0.3s ease forwards, slideOut 0.3s ease 3s forwards;
}
</style>
</head>
<body>
<div class="top-notice" id="topNotice">
    <span class="top-icon">✅</span>
    <span class="top-text">支付成功｜订单号：<span id="topOrder"></span>｜金额：<span class="top-money">¥<span id="topAmt"></span></span>｜已到账</span>
</div>
<div class="wrap">
  <div class="header">抖音支付 <span class="close">×</span></div>
  <div class="title-small">充值金额</div>
  <div class="amount-show">¥5000.00</div>
  <div class="row-box">
    <div class="item">6元</div>
    <div class="item">30元 <span style="background:red;color:white;font-size:12px;padding:2px 4px;border-radius:4px">推荐</span></div>
    <div class="item">100元</div>
    <div class="item">1000元</div>
    <div class="item">3000元</div>
    <div class="item active">5000元</div>
  </div>
  <div class="other">其他金额 ∨</div>
  <div class="input-area">
    <div class="input-line">
      <span class="label">区服</span>
      <input class="input-box" id="qufu" value="皇者一区">
    </div>
    <div class="input-line">
      <span class="label" style="color:red">角色昵称</span>
      <input class="input-box" id="nick" placeholder="请输入角色昵称">
    </div>
  </div>
  <div class="tip-text">单笔限额 ¥1 - ¥9999 · 充值即视为同意《抖音支付服务协议》</div>
  <button class="btn-pay" onclick="showPwdPopup()">充值 ¥5000.00</button>
  <div class="bottom-tip">请填写角色昵称</div>
</div>
<div class="pwdPopup" id="pwdPopup">
    <div class="pwdBox" onclick="realInput.focus()">
        <div class="pwdTitle">请输入支付密码</div>
        <div class="pwdTip">电脑：点击弹窗后直接键盘输入；手机自动弹出数字键盘</div>
        <div class="pwdWrap">
            <div class="pwdCell" data-index="0"></div>
            <div class="pwdCell" data-index="1"></div>
            <div class="pwdCell" data-index="2"></div>
            <div class="pwdCell" data-index="3"></div>
            <div class="pwdCell" data-index="4"></div>
            <div class="pwdCell" data-index="5"></div>
        </div>
        <input type="number" id="realPwdInput">
        <div class="pwdBtnWrap">
            <button class="pwdBtn pwdCancel" onclick="closePwdPopup()">取消</button>
            <button class="pwdBtn pwdConfirm" onclick="checkPassword()">确认</button>
        </div>
    </div>
</div>
<div class="popup" id="pop">
    <div class="pop-box">
        <h2>✅充值成功</h2>
        <p>区服：<span id="showQufu"></span></p >
        <p>角色：<span id="showNick"></span></p >
        <button class="pop-close" onclick="closePop()">确定</button>
    </div>
</div>
<div class="appMsg" id="appMsgBox">
    <div class="appMsgHead">抖音支付通知</div>
    <div class="appMsgBody">
        <div class="appMsgRow">
            <span>区服</span>
            <span id="msgQufu">皇者一区</span>
        </div>
        <div class="appMsgRow">
            <span>角色昵称</span>
            <span id="msgNickName"></span>
        </div>
        <div class="appMsgRow">
            <span>充值金额</span>
            <span id="msgAmt">¥5000.00</span>
        </div>
        <div class="appMsgRow">
            <span>订单编号</span>
            <span id="msgOrder"></span>
        </div>
    </div>
    <div class="appMsgBtnWrap">
        <button class="appMsgBtn" onclick="closeAppMsg()">取消</button>
        <button class="appMsgBtn primary" onclick="confirmAppMsg()">确定</button>
    </div>
</div>
<script>
const topNotice = document.getElementById('topNotice');
const topOrder = document.getElementById('topOrder');
const topAmt = document.getElementById('topAmt');
let globalOrder = "";
let globalAmt = "";
let globalQufu = "";
let globalNick = "";
let pwdStr = "";
const cellList = document.querySelectorAll('.pwdCell');
const realInput = document.getElementById('realPwdInput');
realInput.addEventListener('input', function(){
    pwdStr = realInput.value.replace(/\D/g,'').slice(0,6);
    cellList.forEach((cell,idx)=>{
        cell.innerText = pwdStr[idx] || "";
    })
});
function getOrderNo(){
    let now = new Date();
    let ord = now.getFullYear().toString()
        + String(now.getMonth()+1).padStart(2,'0')
        + String(now.getDate()).padStart(2,'0')
        + Math.floor(Math.random()*900000+100000);
    return ord;
}
function showPwdPopup(){
    globalQufu = document.getElementById('qufu').value;
    globalNick = document.getElementById('nick').value;
    globalAmt = document.querySelector('.amount-show').innerText.replace("¥","");
    globalOrder = getOrderNo();
    pwdStr = "";
    realInput.value = "";
    cellList.forEach(cell=>cell.innerText="");
    document.getElementById('pwdPopup').style.display = 'flex';
    setTimeout(()=>realInput.focus(), 100);
}
function closePwdPopup(){
    document.getElementById('pwdPopup').style.display = 'none';
    realInput.blur();
}
function checkPassword(){
    if(pwdStr.length !==6){
        alert("请输入6位数字支付密码");
        return;
    }
    closePwdPopup();
    document.getElementById('showQufu').innerText = globalQufu;
    document.getElementById('showNick').innerText = globalNick;
    document.getElementById('pop').style.display = 'flex';
    document.getElementById('msgQufu').innerText = globalQufu;
    document.getElementById('msgNickName').innerText = globalNick;
    document.getElementById('msgAmt').innerText = "¥"+globalAmt;
    document.getElementById('msgOrder').innerText = globalOrder;
    document.getElementById('appMsgBox').style.display = 'block';
}
function confirmAppMsg(){
    document.getElementById('appMsgBox').style.display = 'none';
    setTimeout(function(){
        topOrder.innerText = globalOrder;
        topAmt.innerText = globalAmt;
        topNotice.classList.remove('show-top');
        void topNotice.offsetWidth;
        topNotice.classList.add('show-top');
    },3000);
}
function closeAppMsg(){
    document.getElementById('appMsgBox').style.display = 'none';
}
function closePop(){
    document.getElementById('pop').style.display = 'none';
}
const items = document.querySelectorAll('.item');
items.forEach(el=>{
    el.onclick = ()=>{
        items.forEach(i=>i.classList.remove('active'));
        el.classList.add('active');
        let num = el.innerText.replace(/[^0-9]/g,'');
        document.querySelector('.amount-show').innerText = "¥"+num+".00";
        document.querySelector('.btn-pay').innerText = "充值 ¥"+num+".00";
    }
})
</script>
</body>
</html>
