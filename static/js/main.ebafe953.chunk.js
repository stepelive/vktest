(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,a){e.exports=a(205)},205:function(e,t,a){"use strict";a.r(t);a(147),a(172);var n=a(0),r=a.n(n),s=a(22),i=a.n(s),c=a(37),o=a.n(c),l=a(30),d=a(31),u=a(33),h=a(32),f=a(34),g=a(7),b=a(87),m=a.n(b),v=a(58),k=a.n(v),p=a(88),E=a.n(p),I=a(89),y=a.n(I),S=a(35),O=a.n(S),j=a(4),w=(a(56),a(19)),C={backgroundColor:"rgba(248, 247, 216, 0.1)",position:"absolute",top:0,left:0,width:"100%",height:"100%"},x={backgroundColor:"#29b6f6",borderRadius:10,padding:5,margin:5,whiteSpace:"nowrap"},M={padding:0,backgroundColor:"#f8f8f8"},_={position:"absolute",backgroundColor:"#f8f8f8",backgroundPosition:"center",backgroundSize:"90%",boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"},A={backgroundSize:"contain",backgroundRepeat:"no-repeat",overflow:"hidden",backgroundPosition:"center",margin:0,padding:0},z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={id:e.id,debugServerInfo:e.debugServerInfo,users:e.userCards,myInterests:["\u041f\u0438\u0441\u0438\u0442\u044c","\u041a\u0443\u0448\u043e\u0442\u044c","\u041e\u0440\u0430\u0442\u044c"],rot:0,moveBack:.1,shiftX:0,shiftY:0,debugInfo:"",limitOffset:3,userPicBackgroundColor:"",sizeX:390,sizeY:900,halfX:39,minchange:2},a.startX=0,a.startY=0,a.renderInterests=a.renderInterests.bind(Object(g.a)(Object(g.a)(a))),a.onMove=a.onMove.bind(Object(g.a)(Object(g.a)(a))),a.refreshUsers=a.refreshUsers.bind(Object(g.a)(Object(g.a)(a))),a.onEnd=a.onEnd.bind(Object(g.a)(Object(g.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.setState({sizeX:window.innerWidth,sizeY:window.innerHeight})}},{key:"onMove",value:function(e){var t=this.startX+e.shiftX,a=t/this.state.halfX;this.setState({rot:a,moveBack:.1,shiftX:t})}},{key:"onEnd",value:function(e){var t=this,a=this.state.debugInfo,n=this.state.users;if(Math.abs(this.state.rot)<this.state.limitOffset)this.setState({rot:0,moveBack:.5,shiftX:0,shiftY:0});else{(this.agree||this.disAgree)&&(this.agree?a+="+".concat(this.state.users[0].first_name):a+="-".concat(this.state.users[0].first_name));var r=this.state.rot>0?15:-15;this.setState({userPicBackgroundColor:"",rot:r,debugInfo:a,moveBack:.1,shiftX:0,shiftY:0}),setTimeout(function(){n.splice(0,1),t.setState({rot:0,users:n,moveBack:0})},100)}}},{key:"refreshUsers",value:function(e){this.setState({users:[{id:1,avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCCqxQ--DqnBS4npIj956y0KQZP2H1-ZdHmsEb4pH9CiVsATBUhg",first_name:"\u041a\u043e\u0442\u044d\u043a",last_name:"\u041a\u043e\u0442\u044d\u043a\u043e\u0432",ages:15,interests:["\u041b\u0435\u0436\u0430\u0442\u044c","\u041c\u0443\u0440\u043a\u0430\u0442\u044c","\u041e\u0431\u043b\u0438\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f","\u041a\u0443\u0448\u043e\u0442\u044c","\u041e\u0440\u0430\u0442\u044c"]},{id:2,avatar:"https://xn-----6kckiwadblcgjxwwirci4z.xn--p1ai/image/cache/catalog/vse-kartinki/sobaka/sobaka-068-800x800.jpg",first_name:"\u041f\u0451\u0441\u0438\u043a",last_name:"\u041f\u0451\u0441\u0438\u043a\u043e\u0432",ages:3,interests:["\u0413\u0430\u0432\u043a\u0430\u0442\u044c","\u0411\u0443\u0434\u0438\u0442\u044c \u0440\u0430\u043d\u043e","\u041f\u0438\u0441\u0438\u0442\u044c","\u0411\u0435\u0433\u0430\u0442\u044c","\u0411\u0435\u0433\u0430\u0442\u044c"]},{id:3,avatar:"https://xn-----6kckiwadblcgjxwwirci4z.xn--p1ai/image/cache/catalog/vse-kartinki/sobaka/sobaka-068-800x800.jpg",first_name:"\u0412\u0442\u043e\u0440\u043e\u0439 \u043f\u0451\u0441\u0438\u043a",last_name:"\u041f\u0451\u0441\u0438\u043a\u043e\u0432",ages:3,interests:["\u0413\u0430\u0432\u043a\u0430\u0442\u044c","\u0411\u0443\u0434\u0438\u0442\u044c \u0440\u0430\u043d\u043e","\u041f\u0438\u0441\u0438\u0442\u044c","\u0411\u0435\u0433\u0430\u0442\u044c","\u0411\u0435\u0433\u0430\u0442\u044c"]},{id:4,avatar:"https://xn-----6kckiwadblcgjxwwirci4z.xn--p1ai/image/cache/catalog/vse-kartinki/sobaka/sobaka-068-800x800.jpg",first_name:"\u0415\u0449\u0451 \u043e\u0434\u0438\u043d \u043f\u0451\u0441\u0438\u043a",last_name:"\u041f\u0451\u0441\u0438\u043a\u043e\u0432",ages:3,interests:["\u0413\u0430\u0432\u043a\u0430\u0442\u044c","\u0411\u0443\u0434\u0438\u0442\u044c \u0440\u0430\u043d\u043e","\u041f\u0438\u0441\u0438\u0442\u044c","\u0411\u0435\u0433\u0430\u0442\u044c","\u0411\u0435\u0433\u0430\u0442\u044c"]}]})}},{key:"getCircleRef",value:function(e){this.circleRef=e}},{key:"renderInterests",value:function(e){var t;t=[];var a=this.state.myInterests;return e.forEach(function(e){var n=x.backgroundColor;-1!==a.indexOf(e)&&(n="#0000ff"),t.push(r.a.createElement("span",{style:Object(w.a)({},x,{backgroundColor:n})},e))}),r.a.createElement(j.d,{style:{lineHeight:"2.5",textAlign:"center"}},t)}},{key:"render",value:function(){var e=this.state,t=e.id,a=(e.debugServerInfo,e.refreshUsers,e.users),n=e.sizeX,s=e.sizeY,i=e.moveBack,c=(e.debugInfo,e.userPicBackgroundColor),o=e.rot;return r.a.createElement(j.o,{id:t,style:{overflow:"hidden"}},r.a.createElement(j.p,null,o),r.a.createElement(j.h,null,0!==a.length&&void 0!==a[0]&&r.a.createElement(j.t,{onMove:this.onMove,onEnd:this.onEnd,style:Object(w.a)({},_,{transformOrigin:"center ".concat(3*s,"px"),width:n,height:s,transition:"transform ".concat(i,"s ease-out"),transform:"rotate(".concat(o,"deg)")})},r.a.createElement(j.d,{style:{height:"100%",padding:0}},r.a.createElement("div",{style:Object(w.a)({},C,{backgroundColor:c})}),r.a.createElement(j.d,{style:Object(w.a)({},A,{width:n,height:s/2,backgroundImage:"url(".concat(a[0].avatar,")")})}),r.a.createElement("h1",{style:{textAlign:"center"}},r.a.createElement("strong",null,a[0].first_name," ",a[0].last_name)),this.renderInterests(a[0].interests))),0!==a.length&&void 0!==a[1]&&r.a.createElement(j.d,{style:Object(w.a)({},M,{height:s})},r.a.createElement(j.d,{style:Object(w.a)({},A,{width:n,height:s/2,backgroundImage:"url(".concat(a[1].avatar,")")})}),r.a.createElement("h1",{style:{textAlign:"center"}},r.a.createElement("strong",null,a[1].first_name," ",a[1].last_name)),this.renderInterests(a[1].interests)),0===a.length&&r.a.createElement(j.h,null,r.a.createElement("h1",null,"\u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u0442\u0443. \u041c\u043e\u0436\u0435\u0448\u044c \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c "),r.a.createElement(j.b,{onClick:this.refreshUsers},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"))))}},{key:"agree",get:function(){var e=this.state,t=e.shiftX,a=e.limitOffset;return Math.abs(t)>a&&t>0}},{key:"disAgree",get:function(){var e=this.state,t=e.shiftX,a=e.limitOffset;return Math.abs(t)>a&&t<0}}]),t}(r.a.Component),U=a(44),B=a.n(U),D=a(45),X=a.n(D),P=a(42),N=a(99),R=a.n(N),H={backgroundColor:"#29b6f6",borderRadius:10,padding:5,margin:5,whiteSpace:"nowrap"},J={backgroundColor:"#f6b629",borderRadius:10,padding:5,margin:5,whiteSpace:"nowrap"},T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={userInterests:e.userInterests,activeModal:null,openInterestsModal:e.openInterestsModal,id:e.id,user:e.user,interests:[],debugInfo:"\u0422\u0443\u0442 \u0434\u0435\u0431\u0430\u0433",deNorm:"\u041d\u0443 \u0442\u0435\u0441\u0442\u044b"},a.renderUserInterests=a.renderUserInterests.bind(Object(g.a)(Object(g.a)(a))),a.setActiveModal=a.setActiveModal.bind(Object(g.a)(Object(g.a)(a))),a.getInterests=a.getInterests.bind(Object(g.a)(Object(g.a)(a))),a.renderModalInterests=a.renderModalInterests.bind(Object(g.a)(Object(g.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"renderUserInterests",value:function(){var e=this,t=[];return this.state.userInterests.forEach(function(a){t.push(r.a.createElement(j.b,{style:Object(w.a)({},J),onClick:function(){return e.deleteInterestFromCurrentUser(a.id)},after:r.a.createElement(X.a,null)},a.title))}),r.a.createElement(j.d,null,r.a.createElement(j.k,{style:{lineHeight:"2.5"}}," ",t))}},{key:"setActiveModal",value:function(e){this.setState({activeModal:e})}},{key:"addInterestToCurrentUser",value:function(e){var t=this,a={userId:this.state.user.id,interestId:e};O.a.post("https://salert.info/interests/AddInterest",a).then(function(e){t.setState({debugInfo:"done-".concat(JSON.stringify(e.data)),userInterests:e.data})}).catch(function(e){t.setState({debugInfo:"\u041e\u0448\u0438\u0431\u043a\u0430 "+JSON.stringify(e)})})}},{key:"deleteInterestFromCurrentUser",value:function(e){var t=this,a={userId:this.state.user.id,interestId:e};O.a.post("https://salert.info/interests/DeleteInterest",a).then(function(e){t.setState({debugInfo:"done-".concat(JSON.stringify(e.data)),userInterests:e.data})}).catch(function(e){t.setState({debugInfo:"\u041e\u0448\u0438\u0431\u043a\u0430 "+JSON.stringify(e)})})}},{key:"renderModalInterests",value:function(){var e=this;if(null==this.state.interests)return"\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432";var t=[];return this.state.interests.forEach(function(a){e.state.userInterests&&void 0!=e.state.userInterests.find(function(e){return e.id==a.id})?t.push(r.a.createElement(j.b,{style:Object(w.a)({},J),onClick:function(){return e.deleteInterestFromCurrentUser(a.id)},after:r.a.createElement(X.a,null)},a.title)):t.push(r.a.createElement(j.b,{style:Object(w.a)({},H),onClick:function(){return e.addInterestToCurrentUser(a.id)},after:r.a.createElement(B.a,null)},a.title))}),r.a.createElement(j.d,null,t)}},{key:"getInterests",value:function(e){if(e.target.value.length<2)this.setState({interests:null});else{var t=this;O.a.get("https://salert.info/interests/SearchFromQuery?str=".concat(e.target.value)).then(function(e){t.setState({debugInfo:JSON.stringify(e.data),interests:e.data})}).catch(function(e){t.setState({debugInfo:"\u041e\u0448\u0438\u0431\u043a\u0430 "+JSON.stringify(e)})})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.id,n=t.user,s=(t.activeModal,t.debugInfo),i=t.userInterests,c=(t.interests,t.deNorm),o=r.a.createElement(j.n,{activeModal:this.state.activeModal},r.a.createElement(j.l,{id:"user_interests",header:r.a.createElement(j.m,{left:P.IS_PLATFORM_ANDROID&&r.a.createElement(j.i,{onClick:function(){e.setActiveModal(null)}},r.a.createElement(X.a,null)),right:r.a.createElement(j.i,{onClick:function(){e.setActiveModal(null)}},P.IS_PLATFORM_IOS?"\u0413\u043e\u0442\u043e\u0432\u043e":r.a.createElement(R.a,null))},"\u0424\u0438\u043b\u044c\u0442\u0440\u044b")},r.a.createElement(j.f,null,r.a.createElement(this.renderModalInterests,null),r.a.createElement(j.g,{top:"\u041f\u043e\u0438\u0441\u043a",onInput:function(t){e.getInterests(t)}},r.a.createElement(j.j,{placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c"})),r.a.createElement(j.c,null,s))));return r.a.createElement(j.u,{id:a,modal:o,activePanel:a},r.a.createElement(j.o,{id:a},r.a.createElement(j.p,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),n&&r.a.createElement(j.h,{title:"\u041e\u0431\u0449\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"},r.a.createElement(j.c,{size:"m",before:r.a.createElement(j.a,{src:n.photo_max_orig,size:80})},n.first_name," ",n.last_name)),n&&r.a.createElement(j.h,{title:"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u044b (".concat(i?i.length:0,"\\20)")},i&&r.a.createElement(this.renderUserInterests,null),r.a.createElement(j.c,null,r.a.createElement(j.b,{before:r.a.createElement(B.a,null),onClick:function(){e.setActiveModal("user_interests")},size:"l"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),r.a.createElement(j.c,null,c),r.a.createElement(j.c,null,s),r.a.createElement(j.c,null,r.a.createElement(j.b,{level:"secondary",before:r.a.createElement(B.a,null),size:"l"},"Shuffle")))))}}]),t}(r.a.Component),q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={debug:!0,activeStory:{view:"loader",panel:"loader"},activeModal:null,history:[{view:"loader",panel:"loader"}],user:void 0,userInterests:[],debugServerInfo:"default",userCards:[{id:1,avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCCqxQ--DqnBS4npIj956y0KQZP2H1-ZdHmsEb4pH9CiVsATBUhg",first_name:"\u041a\u043e\u0442\u044d\u043a",last_name:"\u041a\u043e\u0442\u044d\u043a\u043e\u0432",ages:15,interests:["\u041b\u0435\u0436\u0430\u0442\u044c","\u041c\u0443\u0440\u043a\u0430\u0442\u044c","\u041e\u0431\u043b\u0438\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f","\u041a\u0443\u0448\u043e\u0442\u044c","\u041e\u0440\u0430\u0442\u044c"]},{id:2,avatar:"https://xn-----6kckiwadblcgjxwwirci4z.xn--p1ai/image/cache/catalog/vse-kartinki/sobaka/sobaka-068-800x800.jpg",first_name:"\u041f\u0451\u0441\u0438\u043a",last_name:"\u041f\u0451\u0441\u0438\u043a\u043e\u0432",ages:3,interests:["\u0413\u0430\u0432\u043a\u0430\u0442\u044c","\u0411\u0443\u0434\u0438\u0442\u044c \u0440\u0430\u043d\u043e","\u041f\u0438\u0441\u0438\u0442\u044c","\u0411\u0435\u0433\u0430\u0442\u044c","\u0411\u0435\u0433\u0430\u0442\u044c"]},{id:3,avatar:"https://xn-----6kckiwadblcgjxwwirci4z.xn--p1ai/image/cache/catalog/vse-kartinki/sobaka/sobaka-068-800x800.jpg",first_name:"\u0412\u0442\u043e\u0440\u043e\u0439 \u043f\u0451\u0441\u0438\u043a",last_name:"\u041f\u0451\u0441\u0438\u043a\u043e\u0432",ages:3,interests:["\u0413\u0430\u0432\u043a\u0430\u0442\u044c","\u0411\u0443\u0434\u0438\u0442\u044c \u0440\u0430\u043d\u043e","\u041f\u0438\u0441\u0438\u0442\u044c","\u0411\u0435\u0433\u0430\u0442\u044c","\u0411\u0435\u0433\u0430\u0442\u044c"]},{id:4,avatar:"https://xn-----6kckiwadblcgjxwwirci4z.xn--p1ai/image/cache/catalog/vse-kartinki/sobaka/sobaka-068-800x800.jpg",first_name:"\u0415\u0449\u0451 \u043e\u0434\u0438\u043d \u043f\u0451\u0441\u0438\u043a",last_name:"\u041f\u0451\u0441\u0438\u043a\u043e\u0432",ages:3,interests:["\u0413\u0430\u0432\u043a\u0430\u0442\u044c","\u0411\u0443\u0434\u0438\u0442\u044c \u0440\u0430\u043d\u043e","\u041f\u0438\u0441\u0438\u0442\u044c","\u0411\u0435\u0433\u0430\u0442\u044c","\u0411\u0435\u0433\u0430\u0442\u044c"]}]},a.onStoryChange=a.onStoryChange.bind(Object(g.a)(Object(g.a)(a))),a.renderDebug=a.renderDebug.bind(Object(g.a)(Object(g.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({user:t.detail.data});var a=e;O.a.get("https://salert.info/interests/GetInterests/".concat(t.detail.data.id)).then(function(e){a.renderDebug(e.data,!1)}).catch(function(e){a.renderDebug(e,!0)});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"renderDebug",value:function(e,t){var a=t?"\u041e\u0448\u0438\u0431\u043a\u0430 ":"\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 ";t||this.setState({userInterests:e}),this.setState({debugServerInfo:a+JSON.stringify(e),activeStory:{view:"info",panel:"info"}})}},{key:"onStoryChange",value:function(e){var t=this.state.activeStory;t.view=e.currentTarget.dataset.view,this.setState({activeStory:t})}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.activeModal,n=e.userCards,s=e.userInterests;return r.a.createElement(j.e,{activeStory:this.state.activeStory.view,tabbar:r.a.createElement(j.r,null,r.a.createElement(j.s,{onClick:this.onStoryChange,selected:"info"===this.state.activeStory.view,"data-view":"info",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},r.a.createElement(m.a,null)),r.a.createElement(j.s,{onClick:this.onStoryChange,selected:"cards"===this.state.activeStory.view,"data-view":"cards",text:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"},r.a.createElement(y.a,null)),r.a.createElement(j.s,{onClick:this.onStoryChange,selected:"base"===this.state.activeStory.view,"data-view":"base",text:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"},r.a.createElement(E.a,null)),r.a.createElement(j.s,{onClick:this.onStoryChange,selected:"settings"===this.state.activeStory.view,"data-view":"settings",text:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},r.a.createElement(k.a,null)),r.a.createElement(j.s,{onClick:this.onStoryChange,selected:"debug"===this.state.activeStory.view,"data-view":"debug",text:"\u0414\u0435\u0431\u0430\u0433"},r.a.createElement(k.a,null)))},r.a.createElement(j.u,{id:"loader",popout:r.a.createElement(j.q,null),activePanel:"loader"},r.a.createElement(j.o,{id:"loader"},r.a.createElement(j.p,null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."))),r.a.createElement(T,{activeModal:a,userInterests:s,id:"info",user:t}),r.a.createElement(j.u,{id:"cards",activePanel:"cards"},r.a.createElement(z,{id:"cards",userCards:n,debugServerInfo:this.state.debugServerInfo})),r.a.createElement(j.u,{id:"debug",activePanel:"debug"},r.a.createElement(j.o,{id:"debug"},r.a.createElement(j.p,null,"Debug"),r.a.createElement(j.d,null,a,this.state.debugServerInfo))))}}]),t}(r.a.Component);o.a.send("VKWebAppInit",{}),i.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.ebafe953.chunk.js.map