(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);a(69),a(94);var r=a(0),n=a.n(r),s=a(34),l=a.n(s),i=a(17),o=a.n(i),u=a(58),c=a(59),v=a(66),d=a(60),y=a(67),m=a(18),b=a(61),h=a.n(b),f=a(62),E=a.n(f),p=a(63),g=a.n(p),w=a(64),S=a.n(w),C=a(1),k=(a(116),a(57),a(33),a(23)),P=a.n(k),A=a(65),_=a.n(A);Object(C.platform)();function T(e){var t=e.userSurveys,a=e.go_survey,r=t.map(function(e){return n.a.createElement(C.Cell,{onClick:a,"data-id":e.id,expandable:!0,key:e.id,before:n.a.createElement(P.a,null)},e.title)});return n.a.createElement(C.List,null,r)}var j=function(e){var t=e.id,a=e.surveyHistory,r=(e.goToPanel,e.user),s=e.onRefresh,l=e.ballance,i=e.go_userSurvey,o=e.userSurveys,u=e.refreshAwaiter;return n.a.createElement(C.Panel,{id:t},n.a.createElement(C.PanelHeader,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),n.a.createElement(C.Group,{title:"\u041e\u0431\u0449\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"},r&&n.a.createElement(C.Cell,{size:"m",before:n.a.createElement(C.Avatar,{src:r.photo_max_orig,size:80})},r.first_name," ",r.last_name)),n.a.createElement(C.Group,{title:"\u0411\u0430\u043b\u0430\u043d\u0441"},n.a.createElement(C.Cell,{size:"l",asideContent:l>0&&n.a.createElement(C.Button,{before:n.a.createElement(_.a,null),level:"sell"},"\u0432\u044b\u0432\u0435\u0441\u0442\u0438")},l," \u0431\u0430\u043b\u043b\u043e\u0432")),n.a.createElement(C.Group,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"},a&&n.a.createElement(C.Cell,{size:"l"},a.sponsoredDone," \u043e\u043f\u043b\u0430\u0447\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043e"),a&&n.a.createElement(C.Cell,{size:"l"},a.profileDone," \u043f\u0440\u043e\u0444\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043e"),a&&n.a.createElement(C.Cell,{size:"l"},a.earnedBallance," \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e \u0431\u0430\u043b\u043b\u043e\u0432 \u043d\u0430 \u043e\u043f\u0440\u043e\u0441\u0430\u0445")),n.a.createElement(C.PullToRefresh,{onRefresh:s,isFetching:u},o&&n.a.createElement(T,{userSurveys:o,go_survey:i})))};Object(C.platform)();function x(e){var t=e.surveys,a=e.go_survey;return t.map(function(e){return n.a.createElement(C.Cell,{onClick:a,"data-survey":e.title,expandable:!0,key:e.id,before:n.a.createElement(P.a,null)},e.title)})}var B=function(e){var t=e.id,a=e.go,r=(e.user,e.onRefresh),s=e.surveys,l=e.refreshAwaiter,i=e.requestAwaiter,o=e.go_survey;return n.a.createElement(C.Panel,{id:t},n.a.createElement(C.PanelHeader,null,"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u0442\u043f\u0440\u043e\u0441\u043e\u0432"),n.a.createElement(C.Group,{title:"\u041e\u043f\u043b\u0430\u0447\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043e\u043f\u0440\u043e\u0441\u044b"},s&&n.a.createElement(x,{go_survey:o,requestAwaiter:i,surveys:s,go:a}),n.a.createElement(C.PullToRefresh,{onRefresh:r,isFetching:l})))},H=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(v.a)(this,Object(d.a)(t).call(this,e))).state={debug:!0,activeStory:{view:"profile",panel:"base"},history:[{view:"profile",panel:"base"}],user:void 0,userBallance:15,surveyHistory:{sponsoredDone:0,profileDone:0,earnedBallance:0},surveys:[],userSurveys:[]},a.onStoryChange=a.onStoryChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(y.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({user:t.detail.data}),e.loadSurveys();break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"loadSurveys",value:function(){if(this.state.debug){this.setState({surveys:[{title:"\u041e\u043f\u0440\u043e\u0441 \u0441 radioButton",id:"0",questions:[{id:"-1",title:"\u0421\u043b\u0430\u0439\u0434\u043d\u0438!",type:"slider",avilableAnswers:[]}]},{title:"\u041e\u043f\u0440\u043e\u0441 \u0441 \u0447\u0435\u043a\u0431\u043e\u043a\u0441\u043e\u043c",id:"1",questions:[{id:"0",title:"\u0427\u043e \u043a\u0430\u0432\u043e?",type:"checkbox",avilableAnswers:[{id:"0",title:"\u0434\u0430"},{id:"1",title:"\u043d\u0435\u0442"}]}]},{title:"\u041e\u043f\u0440\u043e\u0441 \u0441\u043e \u0441\u043b\u0430\u0439\u0434\u0435\u0440\u043e\u043c",id:"2",questions:[{id:"2",title:"\u0421\u043b\u0430\u0439\u0434\u043d\u0438!",type:"slider",avilableAnswers:[]}]},{title:"\u041e\u043f\u0440\u043e\u0441 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u043e\u0439",id:"3",questions:[{id:"3",title:"\u041f\u0435\u0448\u044b!",type:"string",avilableAnswers:[]}]},{title:"\u041e\u043f\u0440\u043e\u0441 \u0441 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435\u043c \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0430",id:"4",questions:[{id:"4",title:"\u0421\u043b\u0430\u0439\u0434\u043d\u0438!",type:"move",avilableAnswers:[]}]}],surveyHistory:{sponsoredDone:12,profileDone:5,earnedBallance:15}})}}},{key:"activePanel",value:function(e){this.state.history.find(function(t){return t.view==e.currentTarget.dataset.view})}},{key:"onStoryChange",value:function(e){var t=this.state.activeStory;t.view=e.currentTarget.dataset.view,this.setState({activeStory:t})}},{key:"render",value:function(){return n.a.createElement(C.Epic,{activeStory:this.state.activeStory.view,tabbar:n.a.createElement(C.Tabbar,null,n.a.createElement(C.TabbarItem,{onClick:this.onStoryChange,selected:"info"===this.state.activeStory.view,"data-view":"info",text:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"},n.a.createElement(g.a,null)),n.a.createElement(C.TabbarItem,{onClick:this.onStoryChange,selected:"profile"===this.state.activeStory.view,"data-view":"profile",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",label:"".concat(this.state.userBallance.toString())},n.a.createElement(E.a,null)),n.a.createElement(C.TabbarItem,{onClick:this.onStoryChange,selected:"surveys"===this.state.activeStory.view,"data-view":"surveys",label:this.state.surveys.length.toString(),text:"\u041e\u043f\u0440\u043e\u0441\u044b"},n.a.createElement(h.a,null)),n.a.createElement(C.TabbarItem,{onClick:this.onStoryChange,selected:"settings"===this.state.activeStory.view,"data-view":"settings",text:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},n.a.createElement(S.a,null)))},n.a.createElement(C.View,{id:"info",activePanel:"base"},n.a.createElement(C.Panel,{id:"base"},n.a.createElement(C.PanelHeader,null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0432\u0441\u044f\u043a\u0430\u044f"))),n.a.createElement(C.View,{id:"profile",activePanel:"base"},n.a.createElement(j,{id:"base",surveyHistory:this.state.surveyHistory,ballance:this.state.userBallance,go:this.go,go_userSurvey:this.userSurvey,user:this.state.user,userSurveys:this.state.userSurveys})),n.a.createElement(C.View,{id:"surveys",activePanel:"base"},n.a.createElement(B,{id:"base",onRefresh:this.loadSurveys,surveys:this.state.surveys,user:this.state.user})),n.a.createElement(C.View,{id:"settings",activePanel:"base"},n.a.createElement(C.Panel,{id:"base"},n.a.createElement(C.PanelHeader,null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"))))}}]),t}(n.a.Component);o.a.send("VKWebAppInit",{}),l.a.render(n.a.createElement(H,null),document.getElementById("root"))},68:function(e,t,a){e.exports=a(117)}},[[68,1,2]]]);
//# sourceMappingURL=main.affeaaf3.chunk.js.map