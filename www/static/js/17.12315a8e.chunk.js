(this.webpackJsonpjarvis=this.webpackJsonpjarvis||[]).push([[17,32,45,51,52,53],{2040:function(e,t,n){"use strict";n.r(t);var a=n(61),i=n(10),l=n(0),r=n.n(l),o=n(6),c=n(11),d=n(55),s=n(661),u=n(77),f=n(117),g=n(662),m=n(40),b=n(168),v=n(758),p=n(31),y=r.a.memo((function(e){c.default._("WidgetPage","RENDER ComponentConfig","development");var t=e._onClose,n=e._onChange,y=e.id,E=e.config,h=e.attributes,O=Object(l.useState)(!1),j=Object(i.a)(O,2),x=j[0],C=j[1];if(Object(l.useEffect)((function(){C(null!==E)}),[E]),null===y||null===E||void 0===E)return null;var w=Object.keys(E).map((function(t){var i=E[t],l=i="object"===typeof i?i:{label:t,val:void 0!==i.val?i.val:i},c=l._translate,s=l.info,b=Object(a.a)(l,["_translate","info"]);b.label=i.label||t,b.label=c?o.default.t(i.label):i.label,b.val=c?o.default.t(i.val):i.val,b.selection="function"===typeof b.selection?b.selection(e):b.selection;var O=p.default[i.type||"Text"];return r.a.createElement(u.a,{key:"Config-"+t,divider:!0},r.a.createElement(f.a,{disableTypography:!0},r.a.createElement(d.a,{container:!0,spacing:1},r.a.createElement(d.a,{item:!0},r.a.createElement(v.default,{info:s})),r.a.createElement(d.a,{item:!0},r.a.createElement(m.a,null,o.default.t(b.label))))),r.a.createElement(g.a,null,r.a.createElement(O,Object.assign({key:"componentConfig."+y+"."+t,id:"componentConfig."+y+"."+t},b,{label:"",width:180,inputProps:{style:{textAlign:"right"}},onChange:function(e,t){return n(e,t,h)}}))))}));return r.a.createElement(b.default,{header:o.default.t("Component configuration"),actions:r.a.createElement(p.default.Button,{key:"action-save",variant:"text",onClick:function(){C(!1),t()},color:"primary",label:"Apply"}),dense:!0,maxWidth:"xs",fullWidth:!0,open:x},r.a.createElement(s.a,{dense:!0,disablePadding:!0},w))}));t.default=y},2047:function(e,t,n){"use strict";n.r(t),t.default={"config#Layout#tabsHideLabels#label":"Tab Labels nicht anzeigen (nur Icons)","config#Layout#tabsHideLabels#info":"Zeigt nur die Icons im Tab und nicht die Labels","config#Layout#tabIcon#label":"Tab Icon","config#Layout#tabTitle#label":"Tab Titel","config#Layout#tabFullscreen#label":"Tab als Vollbild","config#Layout#tabFullscreen#info":"Vollbild kann nur bei einem Tab mit nur einer Spalte und nur einem eingestellten Widget aktiviert werden","config#Layout#tabsWidgetsEdges#label":"Widget Ecken (rund oder eckig)","config#Layout#tabsWidgetsEdges#info":"Die Ecke des Widgets rund (false) oder eckig (true)","config#Layout#widgetModule#label":"Modul zur Anzeige der Ger\xe4te","config#Layout#widgetFullscreen#label":"Inhalte als Vollbild","config#Layout#widgetFullscreen#info":"Die Inhalte nehmen die komplette gr\xf6\xdfe des Widgets ein (Titel und Icon wird ausgeblendet)","config#Layout#widgetTitle#label":"Titel der Widget-Box","config#Layout#widgetJustification#label":"Ausrichtung des Inhalts","config#Layout#widgetJustification#info":"Legt fest wie der Inhalt ausgerichtet ist. Entweder linksb\xfcndig, mittig oder rechtsb\xfcndig.","config#Layout#widgetJustification#select#left":"linksb\xfcndig","config#Layout#widgetJustification#select#center":"mittig / zentriert","config#Layout#widgetJustification#select#right":"rechtsb\xfcndig","config#Layout#widgetMinHeight#label":"Mindest-H\xf6he","config#Layout#widgetMaxHeight#label":"Maximal-H\xf6he","config#Layout#height#info":"Es kann ein beliebiges absolutes (z. B. px), oder relatives (z. B. vh) L\xe4ngenma\xdf genutzt werden. Ein relatives L\xe4ngenma\xdf ist f\xfcr ein responsive Design zu empfehlen, welches sowohl auf Desktop als auch mobil genutzt wird.","config#Layout#widgetScaleContents#label":"Skaliere Inhalte","config#Layout#widgetScaleContents#info":"Skaliere die Inhalte, um der H\xf6he zu entsprechen (an) oder zeige Scrollbalken (aus)","config#Layout#widgetIcon#label":"Icon der Widget-Box","config#Layout#widgetIcon#info":"Material Icon (klick zur Ansicht aller Icons)","config#Layout#widgetIconStyle#label":"Icon style der Widget-Box","Component configuration":"Komponenten Konfiguration","Module Configuration":"Modul Konfiguration","No configuration available for this module":"Keine Konfiguration f\xfcr dieses Modul vorhanden","Assigned Devices":"zugeordnete Ger\xe4te","add device":"Ger\xe4t hinzuf\xfcgen","add group":"Gruppe hinzuf\xfcgen","add divider":"Trennstreifen","add tab":"Tab hinzuf\xfcgen","add column":"Spalte hinzuf\xfcgen","move column":"Spalte schieben","delete column":"Spalte l\xf6schen","add widget":"Widget hinzuf\xfcgen","Widget configuration":"Widget Konfiguration","Delete Widget":"Widget l\xf6schen","Widget-Box":"Widget-Box",Module:"Modul",Devices:"Ger\xe4te","Primary State Key":"prim\xe4rer Datenpunkt","Secondary State Key":"sekund\xe4rer Datenpunkt","Show State":"zeige Wert",or:"oder",none:"keine",divider:"Trennstreifen","No component selected":"keine Komponente ausgew\xe4hlt","No option selected":"keine Komponente ausgew\xe4hlt","Device needs one of the following states":"Das Ger\xe4t ben\xf6tigt einen der folgenden Datenpunkte"}},2048:function(e,t,n){"use strict";n.r(t),t.default={"config#Layout#tabsHideLabels#label":"Hide tab labels (only show icons)","config#Layout#tabsHideLabels#info":"Show only icons within a tab, not the label","config#Layout#tabIcon#label":"Tab Icon","config#Layout#tabTitle#label":"Tab Title","config#Layout#tabFullscreen#label":"Tab Fullscreen","config#Layout#tabFullscreen#info":"Fullscreen can only be enabled on a tab setup with only a single column and only a single widget","config#Layout#tabsWidgetsEdges#label":"Widgets edges (round or angled)","config#Layout#tabsWidgetsEdges#info":"The edge of the widget box either round (false) or angled (true)","config#Layout#widgetModule#label":"Modul to display the devices","config#Layout#widgetFullscreen#label":"Widget fullscreen","config#Layout#widgetFullscreen#info":"The content will fill the whole size of the widget (title and icon will be hidden)","config#Layout#widgetTitle#label":"Title of the widget-box","config#Layout#widgetJustification#label":"Content Alignment","config#Layout#widgetJustification#info":"Specify how the content of the widget is aligned. Either left, centered or right.","config#Layout#widgetJustification#select#left":"Left","config#Layout#widgetJustification#select#center":"Centered","config#Layout#widgetJustification#select#right":"Right","config#Layout#widgetMinHeight#label":"Minimum height","config#Layout#widgetMaxHeight#label":"Maximum height","config#Layout#height#info":"You may use any absolute (e.g. px) or relative (e.g. vh) unit. A relative unit is recommended for a responsive design, which shall fit both desktop and mobile resolutions.","config#Layout#widgetScaleContents#label":"Scale contents","config#Layout#widgetScaleContents#info":"Scale contents to fit height (true) or display scroll bars (false)","config#Layout#widgetIcon#label":"Icon of the widget-box","config#Layout#widgetIcon#info":"Material Icon (click to view all icons)","config#Layout#widgetIconStyle#label":"Icon style of the widget-box"}},2066:function(e,t,n){"use strict";n.r(t),t.default={tabsHideLabels:{label:"config#Layout#tabsHideLabels#label",info:"config#Layout#tabsHideLabels#info",type:"Switch",val:!1},tabIcon:{label:"config#Layout#tabIcon#label",type:"Text"},tabTitle:{label:"config#Layout#tabTitle#label",type:"Text"},tabFullscreen:{width:150,label:"config#Layout#tabFullscreen#label",info:"config#Layout#tabFullscreen#info",type:"Switch",val:!1},tabsWidgetsEdges:{label:"config#Layout#tabsWidgetsEdges#label",info:"config#Layout#tabsWidgetsEdges#info",type:"Switch",val:!1}}},2067:function(e,t,n){"use strict";n.r(t);var a=n(28),i=n(25),l=n(5),r=n(10),o=n(0),c=n.n(o),d=n(2),s=n(2143),u=n(108),f=n(35),g=n(939),m=n(759),b=n(21),v=n(6),p=n(11),y=n(131),E=n(41),h=n(1577),O=n(130),j=n(55),x=n(66),C=n(661),w=n(77),S=n(40),L=n(928),k=n.n(L),_=n(2155),I=n.n(_),D=n(2157),T=n.n(D),M=n(2156),W=n.n(M),z=n(2040),F=n(168),H=n(29),P=n(31),R=n(940),A=n(53),B=Object(A.a)((function(e){return{iconContainer:{display:"flex",alignItems:"center"},iconCentered:{verticalAlign:"middle",marginRight:e.spacing(2)},noPadding:{padding:0},alignRight:{display:"flex",justifyContent:"flex-end","& > :not(:first-child)":{marginLeft:8}},height:{lineHeight:"45px"},title:{lineHeight:"25px"},Badge:{right:"unset",transform:"none"},sticky:{position:"sticky",backgroundColor:e.palette.background.default,top:-16,zIndex:1}}})),N=n(1584),K=n(70)();t.default=function(e){var t=B(),n=Object(o.useState)({}),a=Object(r.a)(n,2),d=a[0],s=a[1],u=Object(o.useRef)(K(Object(l.a)({moduleConfig:{},devices:[]},e.widget)));Object(o.useEffect)((function(){Object(m.decryptAllPasswords)(u.current).then((function(e){return u.current=e}))}),[]);var f=function(){u.current=null,e.onClose()},g=Object(o.useCallback)((function(t){var n={};if([].concat([{parameter:"title",required:!0},{parameter:"module",required:!0}],Object(i.a)(y.ModuleConfigurations[u.current.module]||[])).forEach((function(e){!0!==e.required||u.current[e.parameter]||u.current.moduleConfig[e.parameter]||(n[e.parameter]=!0)})),Object.values(n).indexOf(!0)>-1)return s((function(e){return Object(l.a)(Object(l.a)({},e),n)})),!1;Object(m.encryptAllPasswords)(u.current).then(e.onSave)}),[e.onSave]),b=Object(o.useCallback)((function(e,t,n){if(s((function(t){var n=Object(l.a)({},t);return e.error&&e.error!==t[e.id]?n[e.id]=e.error:!e.error&&t[e.id]&&delete n[e.id],n})),void 0!==n)if(u.current.devices=u.current.devices||[],u.current.devices[n]=u.current.devices[n]||{},e.id.indexOf("componentConfig.")>-1){var a=e.id.split("."),i=Object(r.a)(a,3),o=i[1],c=i[2];u.current.devices[n][o]=u.current.devices[n][o]||{},u.current.devices[n][o][c]=t}else u.current.devices[n][e.id]=t;else e.id.indexOf("moduleConfig.")>-1?u.current.moduleConfig[e.id.replace("moduleConfig.","")]=t:u.current[e.id]=t}),[]),p=Object(o.useCallback)((function(e,t){b({error:!t,id:e},t||"")}),[b]);return Object(o.useEffect)((function(){return p("title",e.widget.title)}),[]),null===e.widget?null:c.a.createElement(F.default,{header:v.default.t("Widget configuration"),actions:c.a.createElement(j.a,{container:!0},c.a.createElement(j.a,{item:!0,xs:6},void 0!==e.widget.index&&c.a.createElement(P.default.Button,{key:"action-delete",variant:"text",onClick:function(){return e.onDelete(e.widget.index)},color:"secondary",startIcon:c.a.createElement(k.a,null),label:"Delete Widget"}),"\xa0"),c.a.createElement(j.a,{item:!0,xs:6,className:t.alignRight},c.a.createElement(P.default.Button,{key:"action-cancel",variant:"text",onClick:f,color:"secondary",label:"Cancel"}),c.a.createElement(P.default.Button,{key:"action-save",variant:"text",onClick:g,color:"primary",disabled:Object.keys(d).length>0,label:"Apply"}))),dense:!0,maxWidth:!1,fullWidth:!0,open:!0,onClose:f},c.a.createElement(G,Object.assign({},e,{_onChange:b,_validate:p,editor:u.current})),c.a.createElement(U,Object.assign({},e,{_onChange:b,editor:u.current})))};var G=c.a.memo((function(e){p.default._("WidgetPage","RENDER SectionWidget","development");var t=e._onChange,n=e.editor,a=Object.values(g.default).map((function(e){var a=P.default[e.type||"Text"];return delete e.hideOn,c.a.createElement(P.default.FieldsetItem,{key:"key-"+e.parameter,columns:e.columns||2},c.a.createElement(a,Object.assign({},e,{id:e.parameter,onChange:t,val:void 0!==n[e.parameter]?n[e.parameter]:e.val||""})))}));return c.a.createElement(P.default.Fieldset,{label:"Widget-Box"},a)})),U=c.a.memo((function(e){p.default._("WidgetPage","RENDER SectionModule","development");var t=e._onChange,n=e.editor,a=Object(o.useState)(n.module||f.default.get("DEFAULT_MODULE")),i=Object(r.a)(a,2),l=i[0],d=i[1];return c.a.createElement(P.default.Fieldset,{label:"Module"},c.a.createElement(P.default.FieldsetItem,null,c.a.createElement(P.default.Text,{key:"module",id:"module",required:!0,label:"config#Layout#widgetModule#label",autoComplete:!0,autoHighlight:!0,val:l,options:y.ModuleList,onChange:function(e,n){t(e,n),d(n)}})),c.a.createElement(J,Object.assign({},e,{moduleSettings:l&&y.ModuleSettings[l]||{},moduleConfigurations:l&&y.ModuleConfigurations[l]||[]})),c.a.createElement(V,Object.assign({},e,{moduleSettings:l&&y.ModuleSettings[l]||{}})))})),J=function(e){p.default._("WidgetPage","RENDER ModuleConfig","development");var t=e._onChange,n=e.moduleSettings,i=e.moduleConfigurations,d=e.editor,s=Object(o.useState)({}),u=Object(r.a)(s,2),f=u[0],g=u[1];Object(o.useEffect)((function(){var e=Object.keys(f);e.length>0&&e.forEach((function(e){return t({error:!0,id:e},"")}))}),[f,t]);var m=[];return i.length>0&&m.push(i.map((function(e){if(e.hide)return null;"function"===typeof e.selection&&(e.selection=e.selection()),f["moduleConfig."+e.parameter]||!0!==e.required||d.moduleConfig[e.parameter]||e.val||g((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(a.a)({},"moduleConfig."+e.parameter,!0))}));var n=P.default[e.type||"Text"];return c.a.createElement(P.default.FieldsetItem,{columns:e.columns||3,key:"ModuleConfiguration-"+e.parameter},c.a.createElement(n,Object.assign({},e,{key:"moduleConfig-"+e.parameter,id:"moduleConfig."+e.parameter,label:e.label||e.parameter,info:e.description,onChange:t,val:void 0!==d.moduleConfig[e.parameter]?d.moduleConfig[e.parameter]:e.val})))}))),void 0!==n.ModuleConfiguration&&m.push(c.a.createElement(j.a,{key:"CustomModuleConfiguration",item:!0,xs:12},c.a.createElement(O.a,{style:{marginBottom:8}}),c.a.createElement(n.ModuleConfiguration,{options:d.moduleConfig,_onChange:t}))),0===m.length&&(m=c.a.createElement(P.default.FieldsetItem,{key:"noModuleConfiguration",noPadding:!0},c.a.createElement(S.a,null,v.default.t("No configuration available for this module"),"."))),[c.a.createElement(P.default.FieldsetItem,{key:"ModuleConfiguration",noPadding:!0},c.a.createElement(P.default.FieldsetLegend,{label:"Module Configuration",variant:"h4",divider:!1})),m]},V=c.a.memo((function(e){p.default._("WidgetPage","RENDER SectionDevices","development");var t=B(),n=e._onChange,a=e.moduleSettings,d=e.editor,u=Object(o.useState)(d.devices||[]),f=Object(r.a)(u,2),g=f[0],m=f[1],y=Object(o.useState)(""),E=Object(r.a)(y,2),O=E[0],j=E[1];if(!a.devices)return null;var x=function(e,t){var a={type:e};"device"===e?a.deviceId=t.id:"group"===e&&(a.name=t);var l=[].concat(Object(i.a)(g),[a]);j(""),m(l),n({id:"devices"},l)},w=function(e,t,a){return n(t,a,e)},S=function(e){var t=Object(i.a)(g);t.splice(e,1),m(t),n({id:"devices"},t)},L=Object(b.sortArray)(Object(b.sortArray)(Object.values(e.devices),"name"),"function"),k=g.map((function(e){return e.deviceId})),_=!1,I=g.map((function(t,n){var a=Object.keys(t.states||{}),i=void 0!==t.bodyStateKey?t.bodyStateKey:t.primaryStateKey||a&&a[0]||null;return"group"===t.type?_=!0:"divider"===t.type&&(_=!1),c.a.createElement(q,Object.assign({},e,{key:t.type+"- "+(t.deviceId||t.name)+"-"+n,_addItem:x,_editItem:w,_deleteItem:S,device:e.devices[t.deviceId]||null,options:Object(l.a)(Object(l.a)({label:i&&t.states&&t.states[i]&&t.states[i].label||""},t),{},{index:n}),withinGroup:_,devices:g}))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(P.default.FieldsetItem,{noPadding:!0},c.a.createElement(P.default.FieldsetLegend,{label:"Assigned Devices",variant:"h4",divider:!1})),c.a.createElement(P.default.Fieldset,{noPadding:!0},c.a.createElement(P.default.Fieldset,{noPadding:!0,className:t.sticky},c.a.createElement(P.default.FieldsetItem,{columns:3},c.a.createElement(P.default.Text,{width:"90%",key:"addDevice",id:"addDevice",label:"Add device",error:""!==O,errorMessage:O,autoComplete:!0,autoHighlight:!0,disableCloseOnSelect:!0,clearOnSelect:!0,clearOnBlur:!0,options:L,getOptionLabel:function(e){return v.default.t(e.function)+" "+e.name+(e.attributes&&e.attributes.manufacturer?" ("+e.attributes.manufacturer.name+")":"")},renderOption:function(e,n){var a=k.indexOf(e.id)>-1?k.filter((function(t){return t===e.id})).length:0;return c.a.createElement(h.a,{badgeContent:a,classes:{badge:t.Badge},color:"primary"},c.a.createElement("span",{style:{fontSize:"0.8rem",paddingLeft:"24px"}},a>0?c.a.createElement("strong",null,e.name):e.name))},onChange:function(e,t){if(t){var n=Object.keys(t.states||{});a.devicesStates&&a.devicesStates.requiredStates&&Array.isArray(a.devicesStates.requiredStates)&&a.devicesStates.requiredStates.some((function(e){return-1===n.indexOf(e)}))?j(v.default.t("Device needs one of the following states")+": "+a.devicesStates.requiredStates.join(", ")):x("device",t)}},groupBy:function(e){return v.default.t(e.function)},closeIcon:null,popupIcon:null})),Array.isArray(a.devices)&&a.devices.indexOf("group")>-1&&[c.a.createElement(P.default.FieldsetItem,{key:"orGroup",columns:1,centered:!0},c.a.createElement("em",null,v.default.t("or"))),c.a.createElement(P.default.FieldsetItem,{key:"addGroup",columns:3},c.a.createElement(P.default.Text,{width:"90%",key:"addGroup",id:"addGroup",label:"Add group",onEnter:function(e,t){return t&&x("group",t)},clearOnEnter:!0,clearOnBlur:!0}))],Array.isArray(a.devices)&&a.devices.indexOf("divider")>-1&&[c.a.createElement(P.default.FieldsetItem,{key:"orDivider",columns:1,centered:!0},c.a.createElement("em",null,v.default.t("or"))),c.a.createElement(P.default.FieldsetItem,{key:"addDivider",columns:3},c.a.createElement(P.default.Button,{key:"addDivider",id:"addDivider",label:"Add divider",onClick:function(){return x("divider")}}))]),c.a.createElement(P.default.FieldsetItem,null,c.a.createElement(s.a,{onDragEnd:function(e){if(e.source&&e.destination&&e.source.index!==e.destination.index){var t=Object(i.a)(g);t.splice(e.destination.index,0,t.splice(e.source.index,1)[0]),m(t),n({id:"devices"},t)}}},c.a.createElement(s.c,{key:"dropList",droppableId:"dropList"},(function(e,n){return c.a.createElement("div",Object.assign({ref:e.innerRef,style:{minHeight:50}},e.droppableProps),c.a.createElement(C.a,{classes:{root:t.fullWidth},dense:!0,disablePadding:!0},I,e.placeholder))}))))))})),q=c.a.memo((function(e){p.default._("WidgetPage","RENDER Device","development");var t=B(),n=e._editItem,f=e._deleteItem,g=e.devices,m=e.device,b=e.options,y=e.moduleSettings,h=Object(o.useState)(null),O=Object(r.a)(h,2),C=O[0],S=O[1],L=m&&m.states&&Object.keys(m.states||{}).map((function(e){return Object(a.a)({_key:e,_translated:!0},e,m.states[e].label||e)})),_=b.deviceId,D=c.a.createElement(I.a,{classes:{root:t.iconCentered}}),M=null;"device"===b.type&&null!==m?(_=c.a.createElement("span",{className:t.title},m.name+" ("+v.default.t(m.function)+", #"+m.id+")"),y.DeviceActionsConfiguration||(M=(!y.devicesStates||y.devicesStates&&!1!==y.devicesStates.selectable)&&c.a.createElement(j.a,{container:!0,spacing:1},c.a.createElement(j.a,{item:!0,xs:6},(!y.devicesStates||!y.devicesStates.selectable||y.devicesStates.selectable&&y.devicesStates.selectable.indexOf("primaryStateKey")>-1)&&c.a.createElement(P.default.Select,{id:"primaryStateKey",width:150,label:"Primary State Key",selection:L,val:void 0!==b.primaryStateKey?b.primaryStateKey:m.primaryStateKey,onChange:function(e,t){t="object"===typeof t?t[t._key]:t,n(b.index,e,t)},disabled:y.devicesStates&&y.devicesStates.disabled&&y.devicesStates.disabled.indexOf("primaryStateKey")>-1})),c.a.createElement(j.a,{item:!0,xs:6},!y.devicesStates||!y.devicesStates.selectable||y.devicesStates.selectable&&y.devicesStates.selectable.indexOf("secondaryStateKey")>-1?c.a.createElement(P.default.Select,{id:"secondaryStateKey",width:150,label:"Secondary State Key",selection:[{"":v.default.t("none")}].concat(Object(i.a)(L)),val:void 0!==b.secondaryStateKey?b.secondaryStateKey:m.secondaryStateKey,onChange:function(e,t){t="object"===typeof t?t[t._key]:t,n(b.index,e,t)},disabled:y.devicesStates&&y.devicesStates.disabled&&y.devicesStates.disabled.indexOf("secondaryStateKey")>-1}):c.a.createElement(R.default,{width:150})),y.devicesStates&&!0===y.devicesStates.lastUpdateOption&&c.a.createElement(j.a,{item:!0,xs:12},c.a.createElement(P.default.Switch,{id:"lastUpdate",label:"Display Last Update",val:void 0===b.lastUpdate||b.lastUpdate,onChange:function(e,t){return n(b.index,e,t)}}))))):"group"===b.type?(D=c.a.createElement(W.a,{classes:{root:t.iconCentered}}),_=c.a.createElement("span",{className:t.title},b.name)):"divider"===b.type&&(D=c.a.createElement(T.a,{classes:{root:t.iconCentered}}),_=c.a.createElement("em",{className:t.title},"("+v.default.t("divider")+")"));var F={device:m||{},deviceStates:L,options:Object(l.a)(Object(l.a)({},g[b.index]||b),{},{withinGroup:e.withinGroup}),elements:{DeviceIcon:D,Device:_,Actions:M},onChange:function(e,t){return n(b.index,e,t)},onConfig:function(e,t,n){var a=N(E.componentsOptions._defaults[n]||{},E.componentsOptions[m.function]&&E.componentsOptions[m.function][n]||{}),i=N(m&&m.states&&m.states[t]&&m.states[t][n+"Config"]||{},b[n+"Config"]||{});Object.keys(i).forEach((function(e){var n=e.indexOf("-")>-1?e.split("-"):["",e],l=Object(r.a)(n,2)[1];a[l]="object"!==typeof a[l]?{val:a[l]}:a[l],a[l].val=i[t+"-"+l]||i[l]||a[l].val})),S({id:e,device:m,config:a,attributes:{stateKey:t,element:n}})}};return c.a.createElement(s.b,{key:"uuid-"+Object(u.a)(JSON.stringify(m)+"_"+JSON.stringify(F.options),"4eaf6392-6a70-4802-b343-5ff1a1673f39"),draggableId:"device-"+b.deviceId+"-"+b.index,index:b.index},(function(e,a){return c.a.createElement("div",Object.assign({className:Object(d.a)(t.drag,a.isDragging&&t.isDragging),ref:e.innerRef},e.draggableProps,e.dragHandleProps),c.a.createElement(z.default,Object.assign({_onClose:function(){return S(null)},_onChange:function(e,t,a){var i=a.stateKey+"-"+e.id.substr(e.id.lastIndexOf(".")+1),r=a.element+"Config";b[r]=b[r]||{},b[r][i]=t,n(b.index,Object(l.a)(Object(l.a)({},e),{},{id:"componentConfig."+r+"."+i}),t)}},C||{})),c.a.createElement(w.a,{divider:!0,classes:{container:t.height}},c.a.createElement(j.a,{container:!0,item:!0,xs:1},c.a.createElement("div",{className:t.iconContainer},c.a.createElement(H.default,{style:{fontSize:"1.5em"},icon:"mdi:drag"})),c.a.createElement(x.a,{onClick:function(){return f(b.index)}},c.a.createElement(k.a,null))),c.a.createElement(j.a,{container:!0,item:!0,xs:5},y.DeviceBodyConfiguration?c.a.createElement(y.DeviceBodyConfiguration,F):c.a.createElement(c.a.Fragment,null,D," ",_)),c.a.createElement(j.a,{container:!0,item:!0,xs:6},y.DeviceActionsConfiguration?c.a.createElement(y.DeviceActionsConfiguration,F):M)))}))}))},2074:function(e,t,n){"use strict";n.r(t);var a=n(28),i=n(10),l=n(5),r=n(25),o=n(0),c=n.n(o),d=n(2),s=n(2143),u=n(101),f=n(35),g=n(2066),m=n(6),b=n(11),v=n(21),p=n(55),y=n(66),E=n(661),h=n(77),O=n(663),j=n(117),x=n(142),C=n(40),w=n(932),S=n.n(w),L=n(928),k=n.n(L),_=n(2168),I=n.n(_),D=n(2167),T=n.n(D),M=n(29),W=n(31),z=n(2067),F=n(53),H=Object(F.a)((function(e){return{tabs:{marginBottom:"10px"},tab:{padding:e.spacing(3,2)},iconContainer:{alignItems:"center"},columnContainer:{marginTop:e.spacing(2)},column:{width:250,margin:e.spacing(1,1),borderRight:"1px solid rgba(0, 0, 0, 0.12)",borderLeft:"1px solid rgba(0, 0, 0, 0.12)"},DialogActions:{justifyContent:"initial"},alignRight:{display:"flex",justifyContent:"flex-end","& > :not(:first-child)":{marginLeft:8}},drag:{cursor:"grab !important",userSelect:"none","&:hover":{backgroundColor:e.palette.action.hover}},isDragging:{backgroundColor:e.palette.action.selected}}}));m.default.setTranslations((function(e){return n(2166)("./"+e)}));var P=c.a.memo((function(e){b.default._("LayoutsPage","RENDER LayoutsPage","development");var t=Object(o.useRef)(Array.isArray(e.layout)&&e.layout.length>0?Object(r.a)(e.layout):[{title:"",tabs:[]}]),n=function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t.current=n(t.current),a&&a(),e._onLayoutsChange(t.current)},a=t.current.map((function(a,i){return a?(a.id=a.title.toLowerCase().replace(/ /g,"")+i,c.a.createElement(R,Object.assign({},e,{key:"Drawer-"+a.id,_setLayout:n,layout:t.current,drawer:Object(l.a)(Object(l.a)({},a),{},{index:i,id:a.id})}))):null}));return c.a.createElement(x.a,null,a)}),(function(e,t){return!0!==t.selected}));t.default=P;var R=c.a.memo((function(e){b.default._("LayoutsPage","RENDER Drawer "+e.drawer.id,"development");var t=H(),n=e._setLayout,d=Object(o.useState)(e.drawer||{}),f=Object(i.a)(d,2),y=f[0],x=f[1],C=Object(o.useRef)(!0);Object(o.useEffect)((function(){!1===C.current&&n((function(e){var t=Object(r.a)(e||[]);return t[y.index]=y,t})),C.current=!1;var e=document.getElementById("Drawer-"+y.id+"-Tab-"+m.default.t("add tab").toLowerCase().replace(/ /g,"")+(y.tabs.length-1));e&&(document.getElementById("DialogContent").scrollTop=e.offsetTop)}),[n,y]);var w=function(e){x((function(t){var n=Object(l.a)({},t);return n.tabs.splice(e,1),n}))},S=function(e,t){return function(n){n.stopPropagation(),x((function(n){var a=Object(l.a)({},n);return a.tabs=Object(v.moveKeyInArray)(Object(r.a)(a.tabs||[]),t,e),a}))}},L=y.tabs.map((function(t,n){return t?(t.columns=t.columns||[],c.a.createElement(A,Object.assign({},e,{key:"Tab-"+t.id,tab:Object(l.a)(Object(l.a)({},t),{},{index:n,id:t.title.toLowerCase().replace(/ /g,"")+n}),_moveTab:S,_deleteTab:w}))):null}));return c.a.createElement(E.a,{className:t.tabs,key:"Drawer-"+y.id,id:"Drawer-"+y.id},c.a.createElement(h.a,{divider:!0,classes:{root:t.tab}},c.a.createElement(O.a,{classes:{root:t.iconContainer}},c.a.createElement(T.a,null)),c.a.createElement(j.a,{disableTypography:!0},c.a.createElement(p.a,{container:!0},c.a.createElement(p.a,{item:!0},c.a.createElement(W.default.Button,{key:"addTabs",id:"addTabs",label:"add tab",onClick:function(){x((function(e){var t=Object(l.a)({},e);return t.tabs.push({id:Object(u.a)(),title:m.default.t("add tab"),icon:"home",columns:[[]]}),t}))}})),c.a.createElement(p.a,{item:!0},c.a.createElement(W.default.Switch,Object.assign({key:"tabsHideLabels",id:"tabsHideLabels"},g.default.tabsHideLabels,{onChange:function(t,n){var i=t.id;return e._onLayoutsChange(null,Object(a.a)({},i,n))},val:e.settings.tabsHideLabels})))))),c.a.createElement(s.a,{onDragEnd:function(e){if(e.source&&e.destination)if("TAB"===e.type)e.source.index!==e.destination.index&&x((function(t){var n=Object(l.a)({},t);return n.tabs.splice(e.destination.index,0,n.tabs.splice(e.source.index,1)[0]),n}));else if("COLUMN"===e.type){var t=e.source.droppableId.split("#"),n=Object(i.a)(t,2)[1],a=e.destination.droppableId.split("#"),r=Object(i.a)(a,2)[1];n===r&&e.source.index===e.destination.index||x((function(t){var a=Object(l.a)({},t),i=a.tabs[n].columns[e.source.index];return a.tabs[n].columns.splice(e.source.index,1),a.tabs[r].columns.splice(e.destination.index,0,i),a}))}else if("WIDGET"===e.type){var o=e.source.droppableId.split("#"),c=Object(i.a)(o,2)[1].split("-"),d=Object(i.a)(c,2),s=d[0],u=d[1],f=e.destination.droppableId.split("#"),g=Object(i.a)(f,2)[1].split("-"),m=Object(i.a)(g,2),b=m[0],v=m[1];s===b&&u===v&&e.source.index===e.destination.index||x((function(t){var n=Object(l.a)({},t),a=null;return void 0!==n.tabs[s]._fullscreen?(a=n.tabs[s]._fullscreen,n.tabs[s]._fullscreen=null):(a=n.tabs[s].columns[u][e.source.index],n.tabs[s].columns[u].splice(e.source.index,1)),void 0!==n.tabs[b]._fullscreen?n.tabs[b]._fullscreen=a:n.tabs[b].columns[v].splice(e.destination.index,0,a),n}))}}},c.a.createElement(s.c,{key:y.id,type:"TAB",droppableId:"drawer_"+y.id+"#"},(function(e,t){return c.a.createElement("div",Object.assign({ref:e.innerRef,style:{minHeight:50}},e.droppableProps),L,e.placeholder)}))))})),A=function(e){var t=H();return c.a.createElement(s.b,{key:e.tab.id,draggableId:e.tab.id,index:e.tab.index},(function(n,a){return c.a.createElement("div",Object.assign({className:Object(d.a)(t.drag,a.isDragging&&t.isDragging),ref:n.innerRef},n.draggableProps,n.dragHandleProps),c.a.createElement(B,e))}))},B=c.a.memo((function(e){b.default._("LayoutsPage","RENDER Tab "+e.tab.id,"development");var t=H(),n=e._setLayout,d=e.drawer,f=Object(o.useState)(e.tab||{}),m=Object(i.a)(f,2),v=m[0],E=m[1],x=Object(o.useRef)(!0);Object(o.useEffect)((function(){!1===x.current&&n((function(e){var t=Object(r.a)(e||[]);return t[d.index].tabs[v.index]=v,t})),x.current=!1}),[n,d.index,v]);var C=function(e,t){return function(e,t){var n=e.id;"fullscreen"===(n=n.substr(0,n.indexOf("-")))?E((function(e){var t=Object(l.a)({},e);return void 0!==t._fullscreen?(t.columns=[[t._fullscreen]],delete t._fullscreen):(t._fullscreen=t.columns&&t.columns[0]&&t.columns[0][0]||null,delete t.columns),t})):v[n]!==t&&E((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(a.a)({},n,t))}))}},w=function(e){E((function(t){var n=Object(l.a)({},t||{});return n.columns.splice(e,1),n}))},S=1,L=v.columns&&v.columns[1]&&v.columns[1].length||0,_=[];if(void 0!==v._fullscreen){var I={key:Object(u.a)(),index:"fullscreen",widgets:v._fullscreen?[v._fullscreen]:[]};_.push(c.a.createElement(N,Object.assign({},e,{key:"Column-"+I.key,_changeTab:C,column:I,tab:v,fullscreen:!0})))}else S=v.columns.length,_=v.columns.map((function(t,n){var a={key:Object(u.a)(),index:n,widgets:t};return c.a.createElement(N,Object.assign({},e,{key:"Column-"+a.key,_deleteColumn:w,column:a,tab:v}))}));return c.a.createElement(h.a,{id:"Drawer-"+d.id+"-Tab-"+v.id,divider:v.index!==e.layout[d.index].tabs.length-1,classes:{root:t.tab}},c.a.createElement(O.a,{classes:{root:t.iconContainer}},c.a.createElement(M.default,{style:{fontSize:"1.8em"},icon:"mdi:drag"}),c.a.createElement(y.a,{onClick:function(){return e._deleteTab(v.index)}},c.a.createElement(k.a,null))),c.a.createElement(j.a,{disableTypography:!0},c.a.createElement(p.a,{container:!0},c.a.createElement(p.a,{item:!0},c.a.createElement(W.default.Text,Object.assign({key:"Input-tabIcon-"+v.id,id:"icon-"+v.index},g.default.tabIcon,{onBlur:C(d.index,v.index),val:v.icon||"",icon:v.icon?v.icon.replace("mdi-",""):""}))),c.a.createElement(p.a,{item:!0},c.a.createElement(W.default.Text,Object.assign({key:"Input-tabTitle-"+v.id,id:"title-"+v.index},g.default.tabTitle,{onBlur:C(d.index,v.index),val:v.title||""}))),c.a.createElement(p.a,{item:!0},c.a.createElement(W.default.Button,{key:"Input-tabAddColumn-"+v.id,id:"tabAddColumn-"+v.index,label:"add column",disabled:void 0!==v._fullscreen,onClick:function(){E((function(e){var t=Object(l.a)({},e||{});return t.columns.push([]),t}))}})),c.a.createElement(p.a,{item:!0},c.a.createElement(W.default.Switch,Object.assign({key:"Input-tabFullscreen-"+v.id,id:"fullscreen-"+v.index},g.default.tabFullscreen,{disabled:S>1||L>1,onChange:C(d.index,v.index),val:void 0!==v._fullscreen}))),c.a.createElement(p.a,{item:!0},c.a.createElement(W.default.Switch,Object.assign({key:"tabsWidgetsEdges",id:"widgetsEdges-"+v.index},g.default.tabsWidgetsEdges,{disabled:!(S>1||L>1),onChange:C(d.index,v.index),val:void 0!==v.widgetsEdges?v.widgetsEdges:g.default.tabsWidgetsEdges.val})))),c.a.createElement(s.c,{key:v.id,type:"COLUMN",droppableId:"tab_"+v.id+"#"+v.index,direction:"horizontal",isDropDisabled:void 0!==v._fullscreen},(function(e,n){return c.a.createElement(p.a,Object.assign({ref:e.innerRef,key:"Tab-"+v.id+"-ColumnContainer",classes:{root:t.columnContainer},container:!0,style:{minHeight:50}},e.droppableProps),_,e.placeholder)}))))})),N=function(e){var t=H();return c.a.createElement(s.b,{key:e.column.id,draggableId:e.column.id+"#"+e.tab.index,index:void 0!==e.fullscreen?0:e.column.index,isDragDisabled:void 0!==e.fullscreen},(function(n,a){return c.a.createElement(p.a,Object.assign({classes:{root:Object(d.a)(t.column,t.drag,a.isDragging&&t.isDragging)},ref:n.innerRef},n.draggableProps,n.dragHandleProps,{item:!0}),c.a.createElement(K,e))}))},K=c.a.memo((function(e){b.default._("LayoutsPage","RENDER Column "+e.column.index,"development");var t=H(),n=e._setLayout,a=e.drawer,d=e.tab,g=Object(o.useState)(e.column),v=Object(i.a)(g,2),p=v[0],x=v[1],C=Object(o.useState)(null),w=Object(i.a)(C,2),L=w[0],_=w[1],I=Object(o.useRef)(!0);Object(o.useEffect)((function(){!1===I.current&&n((function(e){var t=Object(r.a)(e||[]);return"fullscreen"===p.index?(t[a.index].tabs[d.index]._fullscreen=p.widgets[0],delete t[a.index].tabs[d.index].columns):t[a.index].tabs[d.index].columns[p.index]=p.widgets,t})),I.current=!1}),[n,a.index,d.index,p]);var D,T=function(e){return _(e)},W=function(t,n,a){e._setDrawer((function(e){var t=Object(l.a)({},e),i=t.tabs[n.tabIndex].columns[n.columnIndex].splice(n.widgetIndex,1);return t.tabs[a.tabIndex].columns[a.columnIndex].splice(a.widgetIndex,0,i[0]),t}))};return D=p.widgets.map((function(t,n){return null!==t?(t.index=n,t.module=t.module||f.default.get("DEFAULT_MODULE"),c.a.createElement(G,Object.assign({},e,{key:"Widget-"+t.id,widget:t,_moveWidget:W,_openWidget:T}))):null})),c.a.createElement(c.a.Fragment,null,null!==L&&c.a.createElement(z.default,{devices:e.devices,widget:L,onSave:function(e){var t=e.index;delete e.index,e.id=e.id||Object(u.a)(),_(null),x((function(n){var a=Object(l.a)({},n||{});return"fullscreen"===p.index?a.widgets[0]=e:t>=0?a.widgets[t]=e:a.widgets.push(e),a}))},onDelete:function(e){_(null),x((function(t){var n=Object(l.a)({},t||{});return n.widgets.splice(e,1),n}))},onClose:function(){return _(null)}}),c.a.createElement(E.a,null,void 0===d._fullscreen&&c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{divider:!0,dense:!0},c.a.createElement(O.a,{classes:{root:t.iconContainer}},c.a.createElement(M.default,{style:{fontSize:"1.5em",margin:"0 3px"},icon:"mdi:drag"})),c.a.createElement(j.a,{primary:m.default.t("move column")})),c.a.createElement(h.a,{onClick:function(){return e._deleteColumn(p.index)},button:!0,divider:!0,dense:!0},c.a.createElement(O.a,{classes:{root:t.iconContainer}},c.a.createElement(y.a,{size:"small"},c.a.createElement(k.a,null))),c.a.createElement(j.a,{primary:m.default.t("delete column")}))),(void 0===d._fullscreen||void 0!==d._fullscreen&&p.widgets.length<1)&&c.a.createElement(h.a,{onClick:function(){return T({module:f.default.get("DEFAULT_MODULE")})},button:!0,divider:!0,dense:!0},c.a.createElement(O.a,{classes:{root:t.iconContainer}},c.a.createElement(y.a,{size:"small"},c.a.createElement(S.a,null))),c.a.createElement(j.a,{primary:m.default.t("add widget")})),c.a.createElement(s.c,{key:p.id,type:"WIDGET",droppableId:"widget_"+p.id+"#"+d.index+"-"+p.index,isDropDisabled:!(void 0===d._fullscreen||void 0!==d._fullscreen&&p.widgets.length<1)},(function(e,t){return c.a.createElement("div",Object.assign({ref:e.innerRef,style:{minHeight:50}},e.droppableProps),D,e.placeholder)}))))})),G=function(e){var t=H();return c.a.createElement(s.b,{key:e.widget.id,draggableId:e.widget.id+"#"+e.tab.index+"-"+e.column.index,index:e.widget.index},(function(n,a){return c.a.createElement("div",Object.assign({className:Object(d.a)(t.drag,a.isDragging&&t.isDragging),ref:n.innerRef},n.draggableProps,n.dragHandleProps),c.a.createElement(U,e))}))},U=function(e){b.default._("LayoutsPage","RENDER Widget "+e.widget.index,"development");var t=H(),n=e.widget;return c.a.createElement(h.a,{key:"widget-"+n.id,onClick:function(){return e._openWidget(n)},divider:!0},e.tab._fullscreen?c.a.createElement(O.a,{classes:{root:t.iconContainer}},c.a.createElement(I.a,null)):c.a.createElement(O.a,{classes:{root:t.iconContainer}},c.a.createElement(M.default,{style:{fontSize:"1.5em"},icon:"mdi:drag"})),c.a.createElement(j.a,{primary:c.a.createElement(c.a.Fragment,null,c.a.createElement(C.a,{display:"block"},n.title),c.a.createElement(C.a,{variant:"subtitle2"},"(",n.module,")"))}))}},2155:function(e,t,n){"use strict";var a=n(45),i=n(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),r=(0,a(n(47)).default)(l.createElement("path",{d:"M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"}),"Devices");t.default=r},2156:function(e,t,n){"use strict";var a=n(45),i=n(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),r=(0,a(n(47)).default)(l.createElement("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),"FormatListBulleted");t.default=r},2157:function(e,t,n){"use strict";var a=n(45),i=n(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),r=(0,a(n(47)).default)(l.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=r},2166:function(e,t,n){var a={"./de":2047,"./de.js":2047,"./en":2048,"./en.js":2048};function i(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=l,e.exports=i,i.id=2166},2167:function(e,t,n){"use strict";var a=n(45),i=n(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),r=(0,a(n(47)).default)(l.createElement("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"}),"Tab");t.default=r},2168:function(e,t,n){"use strict";var a=n(45),i=n(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),r=(0,a(n(47)).default)(l.createElement("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}),"Fullscreen");t.default=r}}]);
//# sourceMappingURL=17.12315a8e.chunk.js.map