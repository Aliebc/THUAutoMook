// ==UserScript==
// @name         慕课自动跳转脚本
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  可以自动跳转慕课的脚本
// @author       Aliebc
// @match        https://tsinghua.yuketang.cn/pro/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.this_video_id=parseInt(window.location.href.replace(/^.*\//,"")); //获取当前视频的id
    window.next_video_id=window.this_video_id+1;//获取下个视频的id
    window.red=()=>{window.location.href=window.location.href.replace(window.this_video_id.toString(),window.next_video_id.toString())}; //跳转函数
    window.choose=()=>{
        if(window.this_video_id&&window.next_video_id){ //判断是否成功获取,否则不进行任何操作
            if(document.getElementsByTagName("video")[0]){ //判断是否存在视频
                document.getElementsByTagName("video")[0].muted=true;
                document.getElementsByTagName("video")[0].play();
                console.log("存在视频");
                document.getElementsByClassName("video")[0].append("慕课自动跳转脚本已经开启,如果需要做题等请及时关闭脚本");
                document.getElementsByTagName("video")[0].addEventListener("ended",()=>{window.red();},false); //监听视频事件,结束后跳转
            }else{
                console.log("未找到视频");
                window.red();//直接跳转
            }
        }
    }
    window.setTimeout(()=>{window.choose()},3000);//3秒后执行
})();
