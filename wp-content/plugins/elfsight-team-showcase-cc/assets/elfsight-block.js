/*
    Team Showcase
    Version: 1.3.1
    Release date: Fri Dec 25 2020

    https://elfsight.com

    Copyright (c) 2020 Elfsight, LLC. ALL RIGHTS RESERVED
*/

!function(wp,$){"use strict";let IconBlock=function(e){return wp.element.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"dashicon"},[wp.element.createElement("path",{d:"M3.333 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM.957 11.09c-.542 0-.957-.44-.957-.98V5.87c0-.54.43-.981.957-.981h4.308c.526 0 .957.442.957.982v.392a2.451 2.451 0 0 0-1.436 2.242v5.139c0 .409.112.801.288 1.145v.23c0 .54-.431.981-.958.981h-2.01a.973.973 0 0 1-.957-.982v-3.927H.957zM16.667 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-2.89 1.428c0-.541.432-.984.958-.984h4.308c.526 0 .957.443.957.984v4.228c0 .54-.43.983-.957.983h-.192v3.933c0 .541-.43.984-.957.984h-2.01c-.527 0-.957-.443-.957-.984v-.23c.19-.343.287-.737.287-1.146v-5.13c0-1-.59-1.868-1.436-2.245v-.393zM6.283 8.106c0-.547.414-.995.955-.995h5.586c.525 0 .955.448.955.995v5.192c0 .548-.43.996-.955.996h-.366v4.71c0 .548-.43.996-.954.996H8.557c-.525 0-.955-.448-.955-.995V14.31h-.365c-.525 0-.955-.448-.955-.995V8.106zm3.748-1.44a2.415 2.415 0 1 1 0-4.828 2.415 2.415 0 0 1 0 4.829z",id:"a"})])};if(void 0===wp.components||void 0===wp.blocks||void 0===wp.element||void 0===wp.i18n)return!1;const{Component:Component}=window.React,{__:__}=wp.i18n,el=wp.element.createElement,registerBlockType=wp.blocks.registerBlockType,ServerSideRender=wp.components.ServerSideRender,restApiUrl=window.wpApiSettings.root+"/elfsight-team-showcase/admin",restApiNonce=window.wpApiSettings.nonce;let initTimeout;function initWidget(){clearTimeout(initTimeout),initTimeout=setTimeout(function(){const widgets=document.querySelectorAll("[data-elfsight-team-showcase-options]");Array.prototype.slice.call(widgets).forEach(function(widget){const options=widget.getAttribute("data-elfsight-team-showcase-options"),data=JSON.parse(decodeURIComponent(options));eval("eappsTeamShowcase(widget, data)"),widget.removeAttribute("data-elfsight-team-showcase-options"),widget.removeAttribute("data-elfsight-team-showcase-version"),widget.closest(".elfsight-block-widget-container").classList.add("elfsight-block-widget-initialized")})},1500)}async function getWidgets(){const e=await $.ajax({type:"GET",url:restApiUrl+"/widgets/list/",beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",restApiNonce)}});return e.status?[e.data,e.data.reduce(function(e,t){return e[t.id]=t,e},{})]:[]}function getWidgetId(e){let t;return e.some(function(e){return"1"===e.active&&(t=parseInt(e.id),!0)}),t}class Widget extends Component{componentDidMount(){initWidget()}componentDidUpdate(){initWidget()}render(){const{id:e}=this.props;return e?el("div",{className:"elfsight-block-widget-container"},el(ServerSideRender,{block:"elfsight-team-showcase/block",attributes:{id:e}}),el("div",{className:"elfsight-block-widget-placeholder"},el(IconBlock,{}),el("span",{},"Team Showcase"))):null}}class Button extends Component{render(){const{href:e,className:t,text:s}=this.props,i=document.location.origin+document.location.pathname.replace("post.php","admin.php")+"?page=elfsight-team-showcase#";return el("a",{href:i+e,target:"_blank",className:t},s)}}class WidgetSelect extends Component{constructor(){super(),this.state={widgets:[]}}setWidget(e){e.preventDefault();const{setAttributes:t}=this.props,s=e.target.querySelector("option:checked");t({id:parseInt(s.value)})}componentDidMount(){const{id:e,setAttributes:t}=this.props;getWidgets().then(s=>{const[i,o]=s;this.setState({widgets:i});const n=!(!o[e]||"1"!==o[e].active);t(!n&&o?{id:getWidgetId(i),exist:!0}:{id:e,exist:n})})}render(){const{widgets:e}=this.state,{id:t}=this.props;return e.length>0?el("div",{className:"components-base-control"},el("div",{className:"components-base-control__field"},el("select",{className:"components-select-control__input",id:"elfsight-team-showcase-block-control-id",value:t,onChange:this.setWidget.bind(this)},e.map(({id:e,name:t})=>el("option",{value:e},t))))):null}}registerBlockType("elfsight-team-showcase/block",{title:"Team Showcase",description:"Show your team to the best advantage through a customizable gallery.",icon:{src:IconBlock},category:"widgets",keywords:["Team Showcase","Elfsight"],supports:{html:!1},attributes:{id:{type:"number"},exist:{type:"bool",default:!1}},edit:function(e){const{attributes:{id:t,exist:s},setAttributes:i}=e;return getWidgets().then(e=>{const[o,n]=e;i(!s&&o?{id:getWidgetId(o),exist:!0}:{id:t,exist:s})}),el(wp.element.Fragment,{},el(wp.editor.InspectorControls,{},el(wp.components.PanelBody,{className:"elfsight-block-panel",title:"Select widget"},el(WidgetSelect,{id:t,setAttributes:function(t){e.setAttributes(t)}}),s?el("div",{className:"elfsight-block-panel-group"},el(Button,{href:"/edit-widget/"+t,className:"components-button is-button is-default is-large elfsight-block-panel-button",text:__("Edit Widget")}),el(Button,{href:"/add-widget/",className:"elfsight-block-panel-link",text:__("Create new widget")})):el("div",{className:"elfsight-block-panel-group"},el("span",{},__("No widgets yet")),el(Button,{href:"/add-widget/",className:"components-button is-button is-default is-primary is-large elfsight-block-panel-button",text:__("Create Widget")})))),s?el(Widget,{id:t,exist:s}):null,s?null:el("div",{className:"elfsight-block-form"},el("div",{className:"elfsight-block-form-header"},el(IconBlock,{}),el("span",{},"Team Showcase")),el("div",{className:"elfsight-block-form-text"},__("Show your team to the best advantage through a customizable gallery."),el("br"),el("strong",{},__("Let's create your first widget!"))),el(Button,{href:"/add-widget/",className:"components-button is-button is-default is-primary is-large elfsight-block-form-button",text:__("Create Widget")})))},save:function(){return null}})}(wp,jQuery);