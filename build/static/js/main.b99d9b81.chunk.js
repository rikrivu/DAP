(this["webpackJsonpread-csv-file-react"]=this["webpackJsonpread-csv-file-react"]||[]).push([[0],{106:function(e,t){},107:function(e,t){},125:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),r=a(22),s=a.n(r),o=(a(80),a(17)),c=a(141),i=a(140),m=(a(47),a(14)),u={color:"white",fontSize:"22px",fontWeight:"bolder"};var d=function(){return l.a.createElement("div",null,l.a.createElement(c.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(c.a.Brand,{href:"#home"},l.a.createElement("img",{width:"70",height:"70",src:"https://upload.wikimedia.org/wikipedia/commons/6/65/Black-logo-ghd.jpg",alt:"logo"})),l.a.createElement(c.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(c.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(i.a,{className:"mr-auto"},l.a.createElement(i.a.Link,{href:"#",style:u},"Advanced Analytics")),l.a.createElement(i.a,null,l.a.createElement(i.a.Link,{as:m.b,to:"/"},"Home"),l.a.createElement(i.a.Link,{href:"https://nimbusdocs.azurewebsites.net",target:"_blank"},"Nimbus Documentation"),l.a.createElement(i.a.Link,{href:"https://ghdnet.sharepoint.com/teams/DT-NA-Digital-Intelligence/Shared%20Documents/General/Infrastructure/master.pdf?CT=1617159401822&OR=ItemsView",target:"_blank"},"Infra Blogs"),l.a.createElement(i.a.Link,{as:m.b,to:"/about"},"About"),l.a.createElement(i.a.Link,{as:m.b,to:"/othertools"},"Other Tools"),l.a.createElement(i.a.Link,{as:m.b,to:"/contactus"},"Contact Us")))))},h=(a(87),a(88),a(89),a(55)),p=function(){return l.a.createElement(h.d,{style:{position:"relative",bottom:"0",clear:"both",marginTop:"30vh",width:"100%"},color:"unique-color-dark",className:"page-footer font-small pt-0"},l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement(h.c,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright: GHD",l.a.createElement("a",{href:"#"},"  "))))},b=a(54),f=a(74),g=a(38),v=a(34),E=a(35),y=a(12),S=a(39),x=a(37),k=a(41),C=a.n(k),O=(a(125),a(42)),j=function(e){Object(S.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={value1:[],value2:[],value3:"",value4:"3",value5:"0.05",filename:"report",loading:!1,independent:"false",dependent:"false",max_depth:"false",min_samples:"false"},n.handleChange=n.handleChange.bind(Object(y.a)(n)),n.handleChange2=n.handleChange2.bind(Object(y.a)(n)),n.handleChange3=n.handleChange2.bind(Object(y.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(y.a)(n)),n.handleChange1=n.handleChange1.bind(Object(y.a)(n)),n.onSelect=n.onSelect.bind(Object(y.a)(n)),n.onSelect2=n.onSelect2.bind(Object(y.a)(n)),n.onSelect3=n.onSelect3.bind(Object(y.a)(n)),n.onRemove=n.onRemove.bind(Object(y.a)(n)),n}return Object(E.a)(a,[{key:"handleChange1",value:function(e){this.setState((function(t){return{value4:[].concat(Object(g.a)(t.value4),[e.target.value])}}))}},{key:"handleChange2",value:function(e){this.setState({value4:e.target.value})}},{key:"handleChange3",value:function(e){this.setState({value5:e.target.value})}},{key:"onRemove",value:function(e,t){if(this.state.value1.includes(t.name)){var a=e.map((function(e){return e.name}));this.setState({value1:a});var n=new FormData;n.append("Input1",a),C()({async:"true",crossDomain:"true",url:"https://nimbusrestapi.azurewebsites.net/analyses",method:"POST",headers:{"Content-Type":"multipart/form-data","cache-control":"no-cache","Content-Disposition":"attachment;filename=raw_summ.xlsx","Postman-Token":"f1e5e023-d3d7-4039-aed6-524887ee1629","Response-Type":"blob",responseType:"blob"},processData:!1,data:n}).then(function(e){console.log("Result :"+e),200==e.status?(this.setState({independent:"false"}),this.setState({dependent:"false"}),this.setState({max_depth:"false"}),this.setState({min_samples:"false"}),0==e.data.Parameters.length&&(this.setState({independent:"false"}),this.setState({dependent:"false"}),this.setState({max_depth:"false"}),this.setState({min_samples:"false"})),e.data.Parameters.includes("ycol")&&this.setState({independent:"true"}),e.data.Parameters.includes("xcols")&&this.setState({dependent:"true"}),e.data.Parameters.includes("max_depth")&&this.setState({max_depth:"true"}),e.data.Parameters.includes("min_samples_leaf")&&this.setState({min_samples:"true"})):alert("Error - Change input and try again")}.bind(this)).catch((function(e){alert("Error - Change input and try again"),console.log("Post Error : "+e)}))}else if(this.state.value2.includes(t.name)){var l=e.map((function(e){return e.name}));this.setState({value2:l})}}},{key:"onSelect",value:function(e,t){var a=e.map((function(e){return e.name}));this.setState({value2:a})}},{key:"onSelect3",value:function(e,t){var a=e.map((function(e){return e.name}));this.setState({value1:a});var n=new FormData;n.append("Input1",a),C()({async:"true",crossDomain:"true",url:"https://nimbusrestapi.azurewebsites.net/analyses",method:"POST",headers:{"Content-Type":"multipart/form-data","cache-control":"no-cache","Content-Disposition":"attachment;filename=raw_summ.xlsx","Postman-Token":"f1e5e023-d3d7-4039-aed6-524887ee1629","Response-Type":"blob",responseType:"blob"},processData:!1,data:n}).then(function(e){console.log("Result :"+e.data),200==e.status?(e.data.Parameters.includes("ycol")&&this.setState({independent:"true"}),e.data.Parameters.includes("xcols")&&this.setState({dependent:"true"}),e.data.Parameters.includes("max_depth")&&this.setState({max_depth:"true"}),e.data.Parameters.includes("min_samples_leaf")&&this.setState({min_samples:"true"})):alert("Error - Change the input and try again")}.bind(this)).catch((function(e){alert("Error - Change the input and try again"),console.log("Post Error : "+e)}))}},{key:"onSelect2",value:function(e,t){this.setState({value3:t.name})}},{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),""==this.state.value3&&"true"==this.state.dependent)alert("Please select one dependent variable");else if(0==this.state.value2.length&&"true"==this.state.independent)alert("Please select atleast one independent variable");else if(0==this.state.value1.length)alert("Please select atleast one type of analysis");else if(this.state.value2.includes(this.state.value3))alert("Dependant and Independant variables cannot be the same");else{this.state.loading=!0,this.props.callback(this.state.loading);var t=new FormData;t.append("Input1",this.state.value1),t.append("Input2",this.state.value2),t.append("Input3",this.state.value3),t.append("Input4",this.state.value4),t.append("Input5",this.state.value5),t.append("File",this.props.file),C()({async:"true",crossDomain:"true",url:"https://nimbusrestapi.azurewebsites.net/analyse",method:"POST",headers:{"Content-Type":"multipart/form-data","cache-control":"no-cache","Content-Disposition":"attachment;filename=raw_summ.xlsx","Postman-Token":"f1e5e023-d3d7-4039-aed6-524887ee1629","Response-Type":"blob",responseType:"blob"},processData:!1,data:t}).then(function(e){200==e.status&&(console.log(e),this.setState({loading:!1}),this.props.callback(this.state.loading),this.state.filename=e.data.filename,this.props.parentCallback(e.data))}.bind(this)).catch(function(e){this.state.loading=!1,this.props.callback(this.state.loading),alert("Error occured while processing data on the server. Please contact the administrator for more details."),console.log("Post Error : "+e)}.bind(this))}}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",{className:"spbt"},"Type of Analysis :  \xa0",l.a.createElement(O.Multiselect,{name:"value1",options:[{name:"Raw Summary",selector:"Raw Summary"},{name:"Raw Summary Categorical",selector:"Raw Summary Categorical"},{name:"Univariate",selector:"Univariate"},{name:"Y-Summary Numerical",selector:"Y-Summary Numerical"},{name:"Univariate Categorical",selector:"Univariate Categorical"},{name:"Correlation",selector:"Correlation"},{name:"Bivariate",selector:"Bivariate"},{name:"Decision Tree",selector:"Decision Tree"},{name:"Clustering Analysis",selector:"Clustering Analysis"}],displayValue:"name",onSelect:this.onSelect3,onRemove:this.onRemove,showCheckbox:!0})),"false"!=this.state.independent&&l.a.createElement("label",{className:"spbt"},"Independant Variables :",l.a.createElement(O.Multiselect,{onSelect:this.onSelect,onRemove:this.onRemove,options:this.props.columns,displayValue:"name",showCheckbox:!0})),l.a.createElement("br",null),"false"!=this.state.dependent&&l.a.createElement("label",{className:"spbt"},"Dependant Variable :  \xa0",l.a.createElement(O.Multiselect,{name:"value3",singleSelect:!0,onSelect:this.onSelect2,onRemove:this.onRemove,options:this.props.columns,displayValue:"name",showCheckbox:!0})),l.a.createElement("br",null),"false"!=this.state.max_depth&&l.a.createElement("label",{className:"spbt"},"Max Depth : \xa0 ",l.a.createElement("br",null),l.a.createElement("input",{className:"input",placeholder:"3",type:"text",onChange:this.handleChange2})),l.a.createElement("br",null),"false"!=this.state.min_samples&&l.a.createElement("label",{className:"spbt"},"Minimum Leaf Samples : \xa0 ",l.a.createElement("br",null),l.a.createElement("input",{className:"input",placeholder:"0.05",type:"text",onChange:this.handleChange3})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(l.a.Component);var w=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),m=i[0],u=i[1],d=Object(n.useState)(null),h=Object(o.a)(d,2),p=h[0],f=h[1];return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h3",null,"Select a CSV file"),l.a.createElement("br",null),l.a.createElement("input",{type:"file",accept:".csv,.xlsx,.xls",onChange:function(e){var t=e.target.files[0];f(t);var a=new FileReader;a.onload=function(e){var t=e.target.result,a=b.read(t,{type:"binary"}),n=a.SheetNames[0],l=a.Sheets[n];!function(e){var t=e.split(/\r\n|\n/)[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/).map((function(e){return{name:e,selector:e}}));u([]),s(t)}(b.utils.sheet_to_csv(l,{header:1}))},a.readAsBinaryString(t)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(j,{callback:function(t){e.callback(t)},parentCallback:function(t){e.parentCallback(t)},columns:r,data:m,file:p}))},D=a(26),T=a.n(D),N=a(29),R=(a(126),a(137)),A=a(138),P=(a(127),a(75)),_=a.n(P),I={backgroundColor:"rgb(99, 81, 206)",border:"none",color:"white",padding:"10px 28px",textDecoration:"none",margin:"10px 25px",cursor:"pointer",marginLeft:"40%",marginTop:"60px"},L={marginTop:"30px",marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"95%",height:"100px",border:"1px black solid",overFlow:"scroll",overflowX:"auto"},B=function(e){Object(S.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).handleClick=function(e){_.a.saveAs("https://nimbusrestapi.azurewebsites.net/results?name="+n.props.filename+"&type=xlsx")},n.state={rowdata:"",loading:!1},n.handleClick=n.handleClick.bind(Object(y.a)(n)),n.handleSelect=n.handleSelect.bind(Object(y.a)(n)),n}return Object(E.a)(a,[{key:"handleSelect",value:function(e,t){console.log("Selected tab: "+e+", Last tab: "+t)}},{key:"render",value:function(){this.state.rowdata=this.props.list;var e,t,a=Object.keys(this.props.tabledata);T()(this.props.tabledata[a[0]]);for(var n in a){var r="";for(e in Object.values(this.state.rowdata))e==n&&(t=Object.values(this.state.rowdata)[e],T.a.each(t,(function(e,t){console.log(e),0==e?(r+="<tr>",T.a.each(t,(function(e,t){r+="<th>"+t+"</th>"})),r+="</tr>"):(r+="<tr>",T.a.each(t,(function(e,t){r+="<td>"+t+"</td>"})),r+="</tr>")})));T()("#"+n).html(r)}return l.a.createElement("div",null,l.a.createElement(N.d,{onSelect:this.handleSelect,forceRenderTabPanel:!0},l.a.createElement(N.b,null,a.map((function(e,t){return l.a.createElement(N.a,{key:t+"tab"},e)}))),a.map((function(e,t){return l.a.createElement(N.c,{id:t+"tabpanel",key:e},l.a.createElement(R.a,{className:"table",style:{overflowY:"auto",overflowX:"auto",textAlign:"center",margin:"auto"}},l.a.createElement(A.a,null,l.a.createElement("table",{id:t,style:L}))))}))),l.a.createElement("button",{className:"center",onClick:this.handleClick,style:I},"Download"))}}]),a}(l.a.PureComponent),F=a(139);a(128);function H(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(null),c=Object(o.a)(s,2),i=c[0],m=c[1],u=Object(n.useState)({"":""}),h=Object(o.a)(u,2),b=h[0],f=h[1],g=Object(n.useState)(!1),v=Object(o.a)(g,2),E=v[0],y=v[1];return l.a.createElement("div",{style:{height:"100%"}},l.a.createElement(d,null),l.a.createElement(F.a,{fluid:!0},l.a.createElement(R.a,null,l.a.createElement(A.a,{sm:"4",md:"4",lg:"4",className:"column1"},l.a.createElement("div",{className:"card"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(w,{callback:function(e){y(e)},parentCallback:function(e){m(e.dataFrame),r(e.filename),f(e.list)}}))),l.a.createElement(A.a,{sm:"8",md:"8",lg:"8"},l.a.createElement("div",{className:"card1"},l.a.createElement("h3",{style:{textAlign:"center"}},"Results"),null==a&&0==E&&l.a.createElement("h6",{style:{textAlign:"center"}},"No Results to display"),1==E&&l.a.createElement("div",{className:"alertbox"},l.a.createElement("img",{style:{textAlign:"center",marginLeft:"auto",marginRight:"auto"},alt:"Loading",src:"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"})),null!=a&&l.a.createElement(B,{filename:a,tabledata:i,list:b}))))),l.a.createElement(p,{style:{marginTop:"20%"},className:"footer"}))}var M=H=l.a.memo(H),U=(a(129),{backgroundImage:"linear-gradient(20deg, rgb(84, 38, 191) 30%, rgba(84, 38, 191, 0) 130%)",color:"white",border:"none",height:"23rem",width:"20rem",cursor:"pointer",marginLeft:"0"});var V=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"card cardBorder",style:U},l.a.createElement("div",{className:"card-body"},l.a.createElement("h2",{style:{marginTop:"-20px",color:"black"},className:"center"},e.name),l.a.createElement("p",{style:{color:"black"},className:"card-text"},e.bodyText))))};a(130);var G=function(){console.log("Landing Page Rendered");var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){fetch("./dummyCardsData.json").then((function(e){return e.json()})).then((function(e){console.log(e),r(e)}))}),[]);var s=Object(n.useMemo)((function(){return console.log(a),(null===a||void 0===a?void 0:a.length)?function(e,t){console.log("Create Layout Called");for(var a=[],n=function(n){var r=l.a.createElement(R.a,{className:"justify-content-md-center",key:n},Object(g.a)(Array(t)).map((function(t,a){return n+a<e.length?l.a.createElement(A.a,{sm:"auto",md:"auto",key:"".concat(n,"-").concat(a)},l.a.createElement(m.b,{to:"/".concat(e[n+a].url)},l.a.createElement(V,{name:e[n+a].name,bodyText:e[n+a].bodyText}))):null})));a.push(r)},r=0;r<e.length;r+=t)n(r);return a}(a,3):null}),[a]);return console.log(s),l.a.createElement("div",{style:{height:"100%"}},l.a.createElement(d,null),l.a.createElement("br",null),l.a.createElement(F.a,{fluid:!0},l.a.createElement("h1",{style:{textAlign:"center"}},"Welcome to GHD Advanced Analytics"),l.a.createElement("h3",{className:"center"},"Explore all the tools on the Data Analytics Portal here"),l.a.createElement("br",null),s),l.a.createElement(p,{className:"footer"}))},Y=a(9);var K=function(){return l.a.createElement("div",null,l.a.createElement("h1",{style:{textAlign:"center"}},"About"))};var X=function(){return l.a.createElement("div",null,l.a.createElement("h1",{style:{textAlign:"center"}},"Contact Us"))};var q=function(){return l.a.createElement("div",null,l.a.createElement("h1",{style:{textAlign:"center"}},"Infra Blogs"))},z=a(43),J=a(44);var W=function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("br",null),l.a.createElement("h2",{style:{textAlign:"center"}},"Other Tools"),l.a.createElement(z.a,{defaultActiveKey:"0"},l.a.createElement(J.a,null,l.a.createElement(z.a.Toggle,{as:J.a.Header,eventKey:"0"},"GHD InSite"),l.a.createElement(z.a.Collapse,{eventKey:"0"},l.a.createElement(J.a.Body,null,"GHD InSite is a decision support tool with a map-based web interface to a data lake that stores multiple data for a given site or portfolio. Users will be able to explore all the data stored in this single integrated environment. Custom analyses can be performed, including running trend tests for concentrations, or fitting a single exponential decay function to a series of concentrations. Other products developed by GHD will be requestable and explorable through the tool, for example 3D models of the subsurface environment.")))),l.a.createElement(p,null))};var $=function(){return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(Y.c,null,l.a.createElement(Y.a,{path:"/",exact:!0,component:G}),l.a.createElement(Y.a,{path:"/datamining",component:M}),l.a.createElement(Y.a,{path:"/about",component:K}),l.a.createElement(Y.a,{path:"/contactus",component:X}),l.a.createElement(Y.a,{path:"/infrablogs",component:q}),l.a.createElement(Y.a,{path:"/othertools",component:W}))))};s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement($,null)),document.getElementById("root"))},59:function(e,t){},80:function(e,t,a){}},[[131,1,2]]]);
//# sourceMappingURL=main.b99d9b81.chunk.js.map