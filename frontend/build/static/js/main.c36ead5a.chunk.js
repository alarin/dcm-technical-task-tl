(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(15),l=a.n(s),i=(a(23),a(17)),c=a(2),o=a(3),u=a(5),m=a(4),h=function(e){return e.children},p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e="failed";return"SUCCESS"===this.props.status?e="succeed":"RUNNING"!==this.props.status&&"CREATED"!==this.props.status||(e="running"),n.a.createElement("tr",{className:e},n.a.createElement("td",null,this.props.ID),n.a.createElement("td",null,this.props.requestedBy),n.a.createElement("td",null,this.props.createdAt),n.a.createElement("td",null,this.props.env_name),n.a.createElement("td",null,this.props.path),n.a.createElement("td",null,this.props.status),n.a.createElement("td",null,n.a.createElement("a",{href:"#",onClick:this.props.click},"View Details")))}}]),a}(r.Component),d=function(e){return e.items.map((function(t){return n.a.createElement(p,{key:t.id,ID:t.id,createdAt:t.created_at,env_name:t.env_name,requestedBy:t.requested_by,status:t.status,path:t.displayPath,click:e.clicked.bind(void 0,t.id)})}))},E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=n.a.createElement(d,{items:this.props.items,clicked:this.props.viewItemDetails});return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Test execution requests"),n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table table-striped"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Request ID"),n.a.createElement("th",null,"Requested By"),n.a.createElement("th",null,"Created At"),n.a.createElement("th",null,"Test Env"),n.a.createElement("th",null,"Test Path"),n.a.createElement("th",null,"Status"),n.a.createElement("th",null,"Details"))),n.a.createElement("tbody",null,e))))))}}]),a}(r.Component),v=a(16),f=a.n(v).a.create({baseURL:"http://127.0.0.1:8081/api/v1/"}),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e="failed";return"SUCCESS"===this.props.currentItem.status?e="succeed":"RUNNING"!==this.props.currentItem.status&&"CREATED"!==this.props.currentItem.status||(e="running"),n.a.createElement(h,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("a",{className:"btn btn-primary float-right",href:"#",onClick:this.props.backClicked.bind(this)},"Back"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Test details"),n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table table-striped"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{className:"title"},"ID"),n.a.createElement("td",null,this.props.currentItem.id)),n.a.createElement("tr",null,n.a.createElement("td",{className:"title"},"Requested by"),n.a.createElement("td",null,this.props.currentItem.requested_by)),n.a.createElement("tr",null,n.a.createElement("td",{className:"title"},"Env"),n.a.createElement("td",null,this.props.currentItem.env_name)),n.a.createElement("tr",null,n.a.createElement("td",{className:"title"},"Path"),n.a.createElement("td",null,this.props.currentItem.displayPath)),n.a.createElement("tr",{className:e},n.a.createElement("td",{className:"title"},"Status"),n.a.createElement("td",null,this.props.currentItem.status)),n.a.createElement("tr",null,n.a.createElement("td",{className:"title"},"Logs"),n.a.createElement("td",null,n.a.createElement("pre",null,n.a.createElement("code",{className:"python"},this.props.currentItem.logs)))))))))))}}]),a}(r.Component),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"New request"),n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-3 form-group"},n.a.createElement("input",{type:"text",className:"form-control",name:"requester",id:"requester",placeholder:"Requester",value:this.props.requester,onChange:this.props.requesterChanged.bind(this)}),n.a.createElement("p",{className:"error-message"},this.props.requesterError)),n.a.createElement("div",{className:"col-md-3 form-group"},n.a.createElement("select",{className:"form-control",name:"env_id",id:"env_id",placeholder:"Environment ID",value:this.props.env,onChange:this.props.envChanged.bind(this)},n.a.createElement("option",{value:"",defaultValue:!0}),this.props.assets.test_envs.map((function(e){return n.a.createElement("option",{value:e.id,key:e.id},e.name)}))),n.a.createElement("p",{className:"error-message"},this.props.envError)),n.a.createElement("div",{className:"col-md-4 form-group"},n.a.createElement("select",{className:"form-control",name:"test_path",id:"test_path",multiple:!0,placeholder:"Test Path",value:this.props.testPath,onChange:this.props.testPathChanged.bind(this)},n.a.createElement("option",{value:"",defaultValue:!0}),this.props.assets.available_paths.map((function(e){return n.a.createElement("option",{value:e.id,key:e.id},e.path)}))),n.a.createElement("p",{className:"error-message"},this.props.testPathError)),n.a.createElement("div",{className:"col-md-2"},n.a.createElement("input",{type:"button",className:"btn btn-primary",value:"Submit",disabled:""===this.props.testPath||""===this.props.requester||""===this.props.env,onClick:this.props.submitTest})))))))}}]),a}(r.Component),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={assets:{test_envs:[],available_paths:[]},error:!1,items:[],detailsView:!1,itemID:null,currentItem:{},requesterError:"",envError:"",testPathError:"",requester:"",env:"",testPath:[]},e.interval=null,e.getDisplayPath=function(t){var a="";return e.state.assets.available_paths.map((function(e){t.some((function(t){return t===e.id}))&&(a+=e.path+" ")})),a},e.refreshList=function(){f.get("test-run").then((function(t){var a=t.data;e.setState({items:a.map((function(t){return Object(i.a)({displayPath:e.getDisplayPath(t.path)},t)}))})})).catch((function(t){e.setState({error:!0})})),null!==e.state.itemID&&e.viewItemDetails(e.state.itemID)},e.submitTest=function(){f.post("test-run",{requested_by:e.state.requester,env:e.state.env,path:e.state.testPath}).then((function(t){e.setState({requester:"",env:"",testPath:""}),e.refreshList()})).catch((function(t){e.setState({requesterError:t.data.requested_by,envError:t.data.env,testPathError:t.data.path})}))},e.viewItemDetails=function(t){f.get("test-run/"+t).then((function(t){var a=t.data;a.displayPath=e.getDisplayPath(t.data.path),e.setState({currentItem:a})})).catch((function(t){e.setState({error:!0})})),e.setState({detailsView:!0,itemID:t})},e.backToListItems=function(){e.setState({detailsView:!1,itemID:null})},e.handleTestPathChanged=function(t){for(var a=t.target.options,r=[],n=0,s=a.length;n<s;n++)a[n].selected&&r.push(a[n].value);e.setState({testPath:r})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.get("assets").then((function(t){e.setState({assets:t.data})})).catch((function(t){e.setState({error:!0})})),this.interval=setInterval(this.refreshList,1e3),this.refreshList()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this;return this.state.detailsView?n.a.createElement(b,{currentItem:this.state.currentItem,backClicked:this.backToListItems}):n.a.createElement(h,null,n.a.createElement(g,{requester:this.state.requester,requesterError:this.state.requesterError,env:this.state.env,envError:this.state.envError,testPath:this.state.testPath,testPathError:this.state.testPathError,assets:this.state.assets,requesterChanged:function(t){var a;return e.setState({requester:null===(a=t.target.value)||void 0===a?void 0:a.toString()})},envChanged:function(t){var a;return e.setState({env:null===(a=t.target.value)||void 0===a?void 0:a.toString()})},testPathChanged:this.handleTestPathChanged,submitTest:this.submitTest}),n.a.createElement(E,{items:this.state.items,viewItemDetails:this.viewItemDetails}))}}]),a}(r.Component);var y=function(){return n.a.createElement("div",null,n.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.c36ead5a.chunk.js.map