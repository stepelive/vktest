(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,n){e.exports=n(208)},195:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);n(145),n(170);var a=n(0),s=n.n(a),r=n(27),i=n.n(r),o=n(29),l=n.n(o),c=n(22),u=n(23),d=n(26),h=n(24),f=n(25),g=n(8),v=n(90),p=n.n(v),m=n(60),b=n.n(m),S=n(46),E=n.n(S),y=n(91),I=n.n(y),k=n(17),O=n.n(k),j=(n(195),n(4)),w=(n(45),n(40)),P="https://www.big-ben.ru/sites/default/files/reviews/mo.png",C="https://lh3.googleusercontent.com/XtyURW0mKNnKu_6TzQ5_WpuKF4A7M1oFV6p828eVEWIvTZPtZz2gq5sNM78jpNPMMRmZ",M={backgroundColor:"rgba(248, 247, 216, 0.1)",position:"absolute",top:0,left:0,width:"100%",height:"100%"},U={position:"absolute",backgroundColor:"#f8f8f8",backgroundPosition:"center",backgroundSize:"90%",boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"},A={backgroundSize:"contain",backgroundRepeat:"no-repeat",overflow:"hidden",backgroundPosition:"center",margin:0,padding:0},x={display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignContent:"right"},N=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={id:e.id,userInterests:e.userInterests,addPair:e.addPair,user:e.user,users:[],rot:0,loading:!1,moveBack:.1,shiftX:0,shiftY:0,debugInfo:"",limitOffset:3,userPicBackgroundColor:"",sizeX:390,sizeY:900,halfX:39,minchange:2,popout:null},n.startX=0,n.startY=0,n.renderInterests=n.renderInterests.bind(Object(g.a)(Object(g.a)(n))),n.onMove=n.onMove.bind(Object(g.a)(Object(g.a)(n))),n.refreshUsers=n.refreshUsers.bind(Object(g.a)(Object(g.a)(n))),n.onEnd=n.onEnd.bind(Object(g.a)(Object(g.a)(n))),n.getUsers=n.getUsers.bind(Object(g.a)(Object(g.a)(n))),n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({sizeX:window.innerWidth,sizeY:window.innerHeight}),this.getUsers()}},{key:"onMove",value:function(e){var t=this.startX+e.shiftX,n=t/this.state.halfX;this.setState({rot:n,moveBack:.1,shiftX:t})}},{key:"getUsers",value:function(e){var t=this;t.setState({popout:s.a.createElement(j.t,null)}),O.a.get("https://salert.info/user/GetUsers/".concat(this.state.user.id)).then(function(e){t.setState({popout:null,debugInfo:"done-".concat(JSON.stringify(e.data)),users:e.data})}).catch(function(e){t.setState({popout:null,debugInfo:"\u041e\u0448\u0438\u0431\u043a\u0430 "+JSON.stringify(e)})})}},{key:"onEnd",value:function(e){var t=this,n=this.state.debugInfo,a=this.state.users;if(Math.abs(this.state.rot)<this.state.limitOffset)this.setState({rot:0,moveBack:.5,shiftX:0,shiftY:0});else if(this.agree||this.disAgree){this.agree?n+="+".concat(this.state.users[0].first_name):n+="-".concat(this.state.users[0].first_name);var s={currentUserId:this.state.user.id,choicedUserId:a[0].id,choiced:this.agree},r=this,i=r.state.rot>0?15:-15;this.setState({userPicBackgroundColor:"",rot:i,debugInfo:n,moveBack:.1,shiftX:0,shiftY:0}),O.a.post("https://salert.info/user/SetChoice",s).then(function(e){if(!0===e.data){var t=a[0];r.state.addPair(t)}a.splice(0,1),r.setState({rot:0,users:a,moveBack:0}),0===a.length&&r.getUsers()}).catch(function(e){r.showAlert("\u041e\u0448\u0438\u0431\u043a\u0430",JSON.stringify(e),"")})}else{i=this.state.rot>0?15:-15;setTimeout(function(){a=a.splice(0,1),t.setState({rot:0,users:a,moveBack:0})},100)}}},{key:"refreshUsers",value:function(e){this.getUsers()}},{key:"getCircleRef",value:function(e){this.circleRef=e}},{key:"showAlert",value:function(e,t,n){var a=this;this.setState({popout:s.a.createElement(j.a,{actions:[{title:n,autoclose:!0}],onClose:function(e){a.setState({popout:null})}},s.a.createElement("h2",null,e),s.a.createElement("p",null,t))})}},{key:"getSexPreference",value:function(e){var t=e.ageFromPreference?" \u043e\u0442 ".concat(e.ageFromPreference):"";return t+=e.ageToPreference?" \u0434\u043e ".concat(e.ageToPreference):"",0==e.sexPreference?"\u0445\u043e\u0442\u044c \u043a\u043e\u0433\u043e ".concat(t):1==e.sexPreference?"\u0436\u0435\u043d\u0449\u0438\u0443 ".concat(t):"\u043c\u0443\u0436\u0447\u0438\u043d\u0443 ".concat(t)}},{key:"getSex",value:function(e){return 0==e.sex?"\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d":1==e.sex?"\u0436\u0435\u043d\u0441\u043a\u0438\u0439":"\u043c\u0443\u0436\u0441\u043a\u043e\u0439"}},{key:"getReason",value:function(e){var t;if(void 0==e.searchReason)return"\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e \u0432\u043e\u043e\u0431\u0449\u0435 \u0447\u0435\u0433\u043e";switch(e.searchReason){case 0:t="\u043e\u0431\u0449\u0435\u043d\u0438\u044f";break;case 1:t="\u0434\u0440\u0443\u0436\u0431\u044b";break;case 2:t="\u043b\u044e\u0431\u0432\u0438";break;case 3:t="\u0441\u0435\u043a\u0441\u0430";break;default:t="\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e \u0432\u043e\u043e\u0431\u0449\u0435 \u0447\u0435\u0433\u043e"}return t}},{key:"birthDateToAge",value:function(e){e=new Date(e);var t=new Date,n=t.getFullYear()-e.getFullYear();return t.setFullYear(1972)<e.setFullYear(1972)?n-1:n}},{key:"getYo",value:function(e){var t=new Date(e.bdate+"Z"),n=this.birthDateToAge(t);return"".concat(t.getFullYear(),", ").concat(n," \u043b\u0435\u0442")}},{key:"renderInterests",value:function(e){var t;t=[];var n=this.state.userInterests;return void 0!=e?e.forEach(function(e){var a=n.find(function(t){return t.id===e.id});t.push(s.a.createElement(j.c,{level:a?"primary":"secondary",component:"span",style:{marginTop:5,marginRight:3,pointerEvents:"none"}},e.title))}):t=s.a.createElement("b",null,"\u041d\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432"),s.a.createElement(j.f,{style:Object(w.a)({lineHeight:"2.5"},x,{pointerEvents:"none"})}," ",t)}},{key:"render",value:function(){var e=this.state,t=e.id,n=e.popout,a=e.users,r=e.sizeX,i=e.sizeY,o=e.moveBack,l=(e.debugInfo,e.userPicBackgroundColor),c=e.rot,u=a[0];return s.a.createElement(j.z,{id:t,activePanel:t,popout:n},s.a.createElement(j.q,{id:t,style:{overflow:"hidden"}},s.a.createElement(j.r,null,null==n?"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),s.a.createElement(j.j,null,0!==a.length&&void 0!==a[0]&&s.a.createElement(j.y,{onMove:this.onMove,onEnd:this.onEnd,style:Object(w.a)({},U,{transformOrigin:"center ".concat(3*i,"px"),width:r,height:i,transition:"transform ".concat(o,"s ease-out"),transform:"rotate(".concat(c,"deg)")})},s.a.createElement(j.f,{style:{height:"100%",padding:0}},s.a.createElement("div",{style:Object(w.a)({},M,{backgroundColor:l})}),s.a.createElement(j.f,null,s.a.createElement("h1",{style:{textAlign:"center"}},s.a.createElement("strong",null,u.first_name," ",u.last_name)),s.a.createElement("h5",null,this.getYo(u)),s.a.createElement("h5",null,"\u041f\u043e\u043b ",this.getSex(u),", \u0438\u0449\u0435\u0442 ",this.getSexPreference(u)," \u0434\u043b\u044f ",this.getReason(u))),s.a.createElement(j.f,{style:Object(w.a)({},A,{width:r,height:i/4,backgroundImage:"url(".concat(1==u.sex?P:C,")")})}),this.renderInterests(u.interests))),0===a.length&&!n&&s.a.createElement(j.j,null,"\u0412 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043f\u043e \u0412\u0430\u0448\u0438\u043c \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f\u043c \u043f\u043e\u0438\u0441\u043a\u0430"))))}},{key:"agree",get:function(){var e=this.state,t=e.shiftX,n=e.limitOffset;return Math.abs(t)>n&&t>0}},{key:"disAgree",get:function(){var e=this.state,t=e.shiftX,n=e.limitOffset;return Math.abs(t)>n&&t<0}}]),t}(s.a.Component),R=n(47),F=n.n(R),z=n(39),T=n.n(z),J=n(38),_=n(59),D=n.n(_),X=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={syncInterests:e.syncInterests,userInterests:e.userInterests,activeModal:null,openInterestsModal:e.openInterestsModal,saveUserSettings:e.saveUserSettings,id:e.id,user:e.user,interests:[],debugInfo:"\u0422\u0443\u0442 \u0434\u0435\u0431\u0430\u0433",deNorm:"\u041d\u0443 \u0442\u0435\u0441\u0442\u044b",popout:null,userSettings:e.userSettings},n.renderUserInterests=n.renderUserInterests.bind(Object(g.a)(Object(g.a)(n))),n.setActiveModal=n.setActiveModal.bind(Object(g.a)(Object(g.a)(n))),n.getInterests=n.getInterests.bind(Object(g.a)(Object(g.a)(n))),n.renderModalInterests=n.renderModalInterests.bind(Object(g.a)(Object(g.a)(n))),n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.initInterests()}},{key:"renderUserInterests",value:function(){var e=this,t=[];return void 0!==this.state.userInterests&&this.state.userInterests.length>0?this.state.userInterests.forEach(function(n){t.push(s.a.createElement(j.c,{style:{marginRight:5},onClick:function(){return e.deleteInterestFromCurrentUser(n.id)},after:s.a.createElement(T.a,null)},n.title))}):t=s.a.createElement("b",null,"\u041d\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432"),s.a.createElement(j.f,{style:{padding:10,lineHeight:"2.5"}}," ",t)}},{key:"showAlert",value:function(e,t,n){var a=this;this.setState({popout:s.a.createElement(j.a,{actions:[{title:n,autoclose:!0}],onClose:function(e){a.setState({popout:null})}},s.a.createElement("h2",null,e),s.a.createElement("p",null,t))})}},{key:"showAddInterestsModal",value:function(){this.state.userInterests.length<10?this.setActiveModal("user_interests"):this.showAlert("\u041e\u0448\u0438\u0431\u043a\u0430","\u041d\u0435\u043b\u044c\u0437\u044f \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0431\u043e\u043b\u0435\u0435 ".concat(10," \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432"),"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")}},{key:"setActiveModal",value:function(e){this.setState({activeModal:e})}},{key:"addInterestToCurrentUser",value:function(e){if(this.state.userInterests.length<10){var t=this;this.setState({popout:s.a.createElement(j.t,null)});var n={userId:this.state.user.id,interestId:e};O.a.post("https://salert.info/interests/AddInterest",n).then(function(e){t.setState({popout:null,userInterests:e.data}),t.state.syncInterests(e.data)}).catch(function(e){t.setState({popout:null,debugInfo:"\u041e\u0448\u0438\u0431\u043a\u0430 "+JSON.stringify(e)})})}else this.setActiveModal(null),this.showAlert("\u041e\u0448\u0438\u0431\u043a\u0430","\u041d\u0435\u043b\u044c\u0437\u044f \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0431\u043e\u043b\u0435\u0435 10 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432","\u0417\u0430\u043a\u0440\u044b\u0442\u044c")}},{key:"deleteInterestFromCurrentUser",value:function(e){var t=this,n={userId:this.state.user.id,interestId:e};this.setState({popout:s.a.createElement(j.t,null)}),O.a.post("https://salert.info/interests/DeleteInterest",n).then(function(e){t.setState({popout:null,userInterests:e.data}),t.state.syncInterests(e.data)}).catch(function(e){t.setState({popout:null,debugInfo:"\u041e\u0448\u0438\u0431\u043a\u0430 "+JSON.stringify(e)})})}},{key:"renderModalInterests",value:function(){var e=this;if(null==this.state.interests)return"\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432";var t=[];return this.state.interests.forEach(function(n){e.state.userInterests&&void 0!==e.state.userInterests.find(function(e){return e.id===n.id})?t.push(s.a.createElement(j.c,{style:{marginRight:5},onClick:function(){return e.deleteInterestFromCurrentUser(n.id)},after:s.a.createElement(T.a,null)},n.title)):t.push(s.a.createElement(j.c,{level:"outline",style:{marginRight:5},onClick:function(){return e.addInterestToCurrentUser(n.id)},after:s.a.createElement(F.a,null)},n.title))}),s.a.createElement(j.f,{style:{padding:15,lineHeight:"2.5"}},t)}},{key:"initInterests",value:function(e){var t=this;O.a.get("https://salert.info/interests/GetTopInterests").then(function(e){t.setState({debugInfo:JSON.stringify(e.data),interests:e.data})}).catch(function(e){t.setState({debugInfo:"\u041e\u0448\u0438\u0431\u043a\u0430 "+JSON.stringify(e)})})}},{key:"getInterests",value:function(e){if(e.target.value.length<2)this.setState({interests:null});else{var t=this;O.a.get("https://salert.info/interests/SearchFromQuery?str=".concat(e.target.value)).then(function(e){t.setState({debugInfo:JSON.stringify(e.data),interests:e.data})}).catch(function(e){t.setState({debugInfo:"\u041e\u0448\u0438\u0431\u043a\u0430 "+JSON.stringify(e)})})}}},{key:"render",value:function(){var e=this,t=this.state,n=t.id,a=t.user,r=t.popout,i=t.saveUserSettings,o=t.activeModal,l=t.originalUserSettings,c=t.userSettings,u=t.userInterests,d=(t.interests,t.deNorm,s.a.createElement(j.p,{activeModal:o},s.a.createElement(j.n,{popout:r,id:"user_interests",settlingHeight:100,header:s.a.createElement(j.o,{left:J.IS_PLATFORM_ANDROID&&s.a.createElement(j.k,{onClick:function(){e.setActiveModal(null)}},s.a.createElement(T.a,null)),right:s.a.createElement(j.k,{onClick:function(){e.setActiveModal(null)}},J.IS_PLATFORM_IOS?"\u0413\u043e\u0442\u043e\u0432\u043e":s.a.createElement(D.a,null))},"\u0424\u0438\u043b\u044c\u0442\u0440\u044b")},s.a.createElement(this.renderModalInterests,null),s.a.createElement(j.h,null,s.a.createElement(j.i,{top:"\u041f\u043e\u0438\u0441\u043a",onInput:function(t){e.getInterests(t)}},s.a.createElement(j.l,{placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c"}))))));return s.a.createElement(j.z,{id:n,popout:r,modal:d,activePanel:n},s.a.createElement(j.q,{id:n},s.a.createElement(j.r,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),a&&s.a.createElement(j.j,{title:"\u041e\u0431\u0449\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"},s.a.createElement(j.d,{size:"m",before:s.a.createElement(j.b,{src:a.photo_max_orig,size:80})},a.first_name," ",a.last_name)),a&&s.a.createElement(j.j,{title:"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u044b (".concat(u?u.length:0,"\\").concat(10,")")},u&&s.a.createElement(this.renderUserInterests,null),s.a.createElement(j.v,{style:{margin:"12px 0"}}),s.a.createElement(j.e,{onClick:function(){e.showAddInterestsModal()},style:{paddingBottom:10},before:s.a.createElement(F.a,null)}," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u044b")),a&&s.a.createElement(j.j,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e\u0438\u0441\u043a\u0430"},s.a.createElement(j.h,null,s.a.createElement(j.s,{top:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442 (\u043e\u0442 ".concat(null==c.ageFromPreference?"\u043b\u044e\u0431\u043e\u0433\u043e":c.ageFromPreference.toString()," \u0434\u043e ").concat(null==c.ageToPreference?"\u043b\u044e\u0431\u043e\u0433\u043e":c.ageToPreference.toString(),")"),min:12,max:115,step:1,defaultValue:[null==c.ageFromPreference?0:c.ageFromPreference,null==c.ageToPreference?115:c.ageToPreference],onChange:function(t){c.ageFromPreference=12==t[0]?null:t[0],c.ageToPreference=115==t[1]?null:t[1],e.setState({userSettings:c})}})),s.a.createElement(j.h,null,s.a.createElement(j.u,{top:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043c\u043d\u0435...",onChange:function(t){c.sexPreference=t.target.value,e.setState({userSettings:c})},value:c.sexPreference,name:"sexPreference"},s.a.createElement("option",{value:0},"\u0412\u0441\u0435\u0445"),s.a.createElement("option",{value:1},"\u0416\u0435\u043d\u0449\u0438\u043d"),s.a.createElement("option",{value:2},"\u041c\u0443\u0436\u0447\u0438\u043d"))),s.a.createElement(j.h,null,s.a.createElement(j.u,{top:"\u0414\u043b\u044f...",onChange:function(t){c.searchReason=t.target.value,e.setState({userSettings:c})},value:c.searchReason,name:"searchReason"},s.a.createElement("option",{value:0},"\u041e\u0431\u0449\u0435\u043d\u0438\u044f"),s.a.createElement("option",{value:1},"\u0414\u0440\u0443\u0436\u0431\u044b"),s.a.createElement("option",{value:2},"\u041b\u044e\u0431\u0432\u0438")),s.a.createElement(j.f,{style:{display:"flex"}},s.a.createElement(j.c,{size:"l",onClick:function(t){e.setState({userSettings:l})},stretched:!0,level:"destructive"},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"),s.a.createElement(j.c,{size:"l",onClick:function(){i(c)},stretched:!0,style:{marginRight:8}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))))}}]),t}(s.a.Component),Y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={popout:null,user:e.user,id:e.id,pairs:void 0},n.renderPairs=n.renderPairs.bind(Object(g.a)(Object(g.a)(n))),n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getPairs()}},{key:"getPairs",value:function(){var e=this,t=this;t.setState({popout:s.a.createElement(j.t,null)}),O.a.get("https://salert.info/user/getPairs/".concat(this.state.user.id)).then(function(e){t.setState({pairs:e.data,popout:null})}).catch(function(t){e.showAlert("\u041e\u0448\u0438\u0431\u043a\u0430",JSON.stringify(t),"\u041e\u043a")})}},{key:"renderPairs",value:function(){if(void 0===this.state.pairs)return"";if(this.state.pairs===[])return"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u043f\u0430\u0440";var e=this.state.pairs.map(function(e){return s.a.createElement(j.e,{before:s.a.createElement(E.a,null)},e.first_name," ",e.last_name)});return s.a.createElement(j.m,null,e)}},{key:"showAlert",value:function(e,t,n){var a=this;this.setState({popout:s.a.createElement(j.a,{actions:[{title:n,autoclose:!0}],onClose:function(e){a.setState({popout:null})}},s.a.createElement("h2",null,e),s.a.createElement("p",null,t))})}},{key:"render",value:function(){var e=this.state,t=e.id,n=e.popout,a=e.user;e.pairs;return s.a.createElement(j.z,{id:t,popout:n,activePanel:"users"},s.a.createElement(j.q,{id:t},s.a.createElement(j.r,null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"),a&&s.a.createElement(j.j,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0430\u0440"},s.a.createElement(this.renderPairs,null))))}}]),t}(s.a.Component),G=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={debug:!0,activeStory:{view:"loader",panel:"loader"},activeModal:null,pairs:[],history:[{view:"loader",panel:"loader"}],user:void 0,userInterests:void 0,debugServerInfo:"default",userSettings:void 0},n.onStoryChange=n.onStoryChange.bind(Object(g.a)(Object(g.a)(n))),n.inited=n.inited.bind(Object(g.a)(Object(g.a)(n))),n.saveUserSettings=n.saveUserSettings.bind(Object(g.a)(Object(g.a)(n))),n.syncInterests=n.syncInterests.bind(Object(g.a)(Object(g.a)(n))),n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":l.a.send("VKWebAppAllowNotifications",{}),l.a.send("VKWebAppGetGeodata",{}),e.setState({user:t.detail.data});var n=e;O.a.post("https://salert.info/user/GetUserData",t.detail.data).then(function(e){var a=n.state.debugServerInfo;a+="GetUserData  ".concat(JSON.stringify(e)),n.setState({debugServerInfo:a}),n.inited(),O.a.get("https://salert.info/user/GetUserSettings/".concat(t.detail.data.id)).then(function(e){n.setState({userSettings:e.data}),n.inited()}).catch(function(e){return n.setState({userSettings:e})}),O.a.get("https://salert.info/interests/GetInterests/".concat(t.detail.data.id)).then(function(e){n.setState({userInterests:e.data}),n.inited()}).catch(function(e){})}).catch(function(e){var t=n.detail.data;t+=JSON.stringify(e),n.setState({debugServerInfo:t})});break;case"VKWebAppGetUserInfoFailed":var a=JSON.stringify(t.detail);n.setState({debugServerInfo:a});break;case"VKWebAppGeodataResult":var s=t.detail.data;if(1==s.available){var r={lat:s.lat,long:s.long,userId:e.state.user.id};O.a.post("https://salert.info/user/setGeoData",r).then(function(e){}).catch(function(e){})}break;case"VKWebAppAllowNotificationsResult":var i={userId:e.state.user.id,isAvilable:t.detail.data.result};O.a.post("https://salert.info/user/SetNotifications",i).then(function(e){}).catch(function(e){});default:console.log(t.detail.type)}}),l.a.send("VKWebAppGetUserInfo",{})}},{key:"saveUserSettings",value:function(e){var t=this;O.a.post("https://salert.info/user/SaveUserSettings",e).then(function(e){t.setState({debugServerInfo:JSON.stringify(e),userSettings:e.data,activeStory:{view:"info",panel:"info"}})}).catch(function(e){t.setState({debugServerInfo:JSON.stringify(e)})})}},{key:"syncInterests",value:function(e){this.setState({userInterests:e,debugServerInfo:JSON.stringify(e)})}},{key:"inited",value:function(){void 0!=this.state.userInterests&&void 0!=this.state.userSettings&&this.setState({activeStory:{view:"info",panel:"info"}})}},{key:"onStoryChange",value:function(e){var t=this.state.activeStory;t.view=e.currentTarget.dataset.view,this.setState({activeStory:t})}},{key:"addPair",value:function(e){var t=this.state.pairs;t.push(e),this.setState({pairs:t})}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.pairs,a=(e.debugServerInfo,e.userSettings),r=e.userInterests;return s.a.createElement(j.g,{activeStory:this.state.activeStory.view,tabbar:s.a.createElement(j.w,null,s.a.createElement(j.x,{onClick:this.onStoryChange,selected:"info"===this.state.activeStory.view,"data-view":"info",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},s.a.createElement(p.a,null)),s.a.createElement(j.x,{onClick:this.onStoryChange,selected:"cards"===this.state.activeStory.view,"data-view":"cards",text:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"},s.a.createElement(I.a,null)),s.a.createElement(j.x,{onClick:this.onStoryChange,selected:"users"===this.state.activeStory.view,"data-view":"users",label:n.length.toString(),text:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"},s.a.createElement(E.a,null)),s.a.createElement(j.x,{onClick:this.onStoryChange,selected:"settings"===this.state.activeStory.view,"data-view":"settings",text:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},s.a.createElement(b.a,null)),s.a.createElement(j.x,{onClick:this.onStoryChange,selected:"debug"===this.state.activeStory.view,"data-view":"debug",text:"\u0414\u0435\u0431\u0430\u0433"},s.a.createElement(b.a,null)))},s.a.createElement(j.z,{id:"loader",popout:s.a.createElement(j.t,null),activePanel:"loader"},s.a.createElement(j.q,{id:"loader"},s.a.createElement(j.r,null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."))),s.a.createElement(X,{syncInterests:this.syncInterests,userInterests:r,saveUserSettings:this.saveUserSettings,userSettings:a,id:"info",user:t}),s.a.createElement(N,{id:"cards",addPair:this.addPair,user:t,userInterests:r}),s.a.createElement(Y,{id:"users",user:t}),s.a.createElement(j.z,{id:"debug",activePanel:"debug"},s.a.createElement(j.q,{id:"debug"},s.a.createElement(j.r,null,"Debug"),s.a.createElement(j.f,null,this.state.debugServerInfo))))}}]),t}(s.a.Component);l.a.send("VKWebAppInit",{}),i.a.render(s.a.createElement(G,null),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.cd1486a9.chunk.js.map