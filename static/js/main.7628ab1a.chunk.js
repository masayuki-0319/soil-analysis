(this["webpackJsonpsoil-analysis"]=this["webpackJsonpsoil-analysis"]||[]).push([[0],{397:function(a,t,n){"use strict";n.r(t);var i,e=n(0),o=n.n(e),m=n(44),_=n.n(m),r=n(76),s=n(474),c=n(23),u={cao:28.04,mgo:20.15,k2o:47.1},l=function(a,t,n){return Math.ceil(t*u[n]/100*a*10)/10},d=function(a,t,n){return Math.ceil(t/u[n]*100/a*10)/10},x=function(a){return{reportAnalysisData:function(a){var t=d(a.cec,a.cao,"cao"),n=d(a.cec,a.mgo,"mgo"),i=d(a.cec,a.k2o,"k2o"),e=Math.ceil(10*(t+n+i))/10,o=Math.ceil(a.mgo/a.k2o*10)/10,m=Math.ceil(a.cao/a.mgo*10)/10;return Object(c.a)({base_saturation:e,cao_saturation:t,mgo_saturation:n,k2o_saturation:i,ratio_mgo_k2o:o,ratio_cao_mgo:m},a)}(a)}},p=n(7),j=Object(r.b)({key:"inputAnalysisDataState",default:{fieldTypeId:1,soilTypeId:1,ph:5.3,ec:.62,cao:248,mgo:13,k2o:98,p2o5:59,nitro_nn:1,cec:20}}),g=function(){var a=Object(r.c)(j),t=Object(p.a)(a,2);return{inputAnalysisData:t[0],setInputAnalysisData:t[1]}},b=Object(r.b)({key:"reportAnalysisDataState",default:null}),y=function(){var a=g().inputAnalysisData,t=function(){var a=Object(r.c)(b),t=Object(p.a)(a,2);return{reportAnalysisData:t[0],setReportAnalysisData:t[1]}}(),n=t.reportAnalysisData,i=t.setReportAnalysisData;return Object(e.useEffect)((function(){var t=x(a).reportAnalysisData;i(t)}),[a,i]),{reportAnalysisData:n}},h=n(9),O=n(462),k=n(456),N=n(458),f=n(2),v=function(a){var t=a.title,n=a.description;return Object(f.jsx)(k.a,{item:!0,container:!0,style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:21},children:Object(f.jsxs)(k.a,{children:[Object(f.jsx)(N.a,{variant:"h5",style:{fontWeight:"bold"},gutterBottom:!0,children:t}),Object(f.jsx)(N.a,{variant:"body1",gutterBottom:!0,children:n})]})})},D=n(453),C=n(449),I=n(457),A=n(442),w=n(459),T=Object(A.a)((function(){return{selectFormControl:{width:"80%"}}})),S=function(a){var t=a.children,n=T();return Object(f.jsx)(w.a,{variant:"outlined",className:n.selectFormControl,children:t})},K=Object(e.memo)((function(a){var t=a.children,n=a.displayName,i=a.keyName,e=a.defaultValue,o=a.onChange;return Object(f.jsxs)(S,{children:[Object(f.jsx)(D.a,{id:"label-id",children:n}),Object(f.jsx)(C.a,{labelId:"label-id",input:Object(f.jsx)(I.a,{name:i}),value:e,onChange:o,children:t})]})})),M=n(454),B=function(a){var t=a.options,n=a.nameKey,i=a.valueKey;return t.map((function(a,t){return Object(f.jsx)(M.a,{value:a[i],children:a[n]},t)}))},F=[{id:1,name:"\u9732\u5730\u7551"},{id:2,name:"\u9732\u5730\u7551(\uff8e\uff73\uff9a\uff9d\uff7f\uff73)"},{id:3,name:"\u65bd\u8a2d\u7551"},{id:4,name:"\u679c\u6a39\u5712"},{id:5,name:"\u679c\u6a39\u5712(\uff8c\uff9e\uff84\uff9e\uff73\u7b49)"},{id:6,name:"\u679c\u6a39\u5712(\uff8c\uff9e\uff99-\uff8d\uff9e\uff98-)"},{id:7,name:"\u5e38\u7dd1\u679c\u6a39"},{id:8,name:"\u6c34\u7530(\u30af\u30ed\u30dc\u30af\u571f)"},{id:9,name:"\u6c34\u7530(\u305d\u306e\u4ed6\u571f\u58cc)"},{id:10,name:"\u8336\u5712"},{id:11,name:"\u6851\u5712"},{id:12,name:"\u98fc\u6599\u4f5c\u7551"},{id:13,name:"\u82b1\u6728"},{id:14,name:"\u57f9\u571f"}],E=[{id:1,name:"\u5ca9\u5c51\u571f"},{id:2,name:"\u7802\u4e18\u672a\u719f\u571f"},{id:3,name:"\u9ed2\u30dc\u30af\u571f"},{id:4,name:"\u591a\u6e7f\u9ed2\u30dc\u30af\u571f"},{id:5,name:"\u9ed2\u30dc\u30af\u30b0\u30e9\u30a4\u571f"},{id:6,name:"\u8910\u8272\u68ee\u6797\u571f"},{id:7,name:"\u7070\u8272\u53f0\u5730\u571f"},{id:8,name:"\u30b0\u30e9\u30a4\u53f0\u5730\u571f"},{id:9,name:"\u8d64\u8272\u571f"},{id:10,name:"\u9ec4\u8272\u571f"},{id:11,name:"\u6697\u8d64\u8272\u571f"},{id:12,name:"\u8910\u8272\u4f4e\u5730\u571f"},{id:13,name:"\u7070\u8272\u4f4e\u5730\u571f"},{id:14,name:"\u30b0\u30e9\u30a4\u571f"},{id:15,name:"\u9ed2\u6ce5\u571f"},{id:16,name:"\u6ce5\u70ad\u571f"}],P=function(){return{fieldTypeData:F,soilTypeData:E}},W=function(a){var t=a.inputAnalysisData,n=a.handleChange,i=P().fieldTypeData;return Object(f.jsx)(K,{displayName:"\u307b\u5834\u306e\u7a2e\u985e",keyName:"fieldTypeId",defaultValue:t.fieldTypeId,onChange:n,children:B({options:i,nameKey:"name",valueKey:"id"})})},z=function(a){var t=a.inputAnalysisData,n=a.handleChange,i=P().soilTypeData;return Object(f.jsx)(K,{displayName:"\u571f\u58cc\u306e\u7a2e\u985e",keyName:"soilTypeId",defaultValue:t.soilTypeId,onChange:n,children:B({options:i,nameKey:"name",valueKey:"id"})})},G=Object(e.memo)((function(){var a=g(),t=a.inputAnalysisData,n=a.setInputAnalysisData,i=function(a){n(Object(c.a)(Object(c.a)({},t),{},Object(h.a)({},a.target.name,Number(a.target.value))))};return Object(f.jsx)(O.a,{elevation:8,style:{padding:20,marginBottom:21},children:Object(f.jsxs)(k.a,{container:!0,children:[Object(f.jsx)(v,{title:"\u307b\u5834\u30c7\u30fc\u30bf\u5165\u529b",description:"\u203b \u307b\u5834\u306e\u57fa\u672c\u30c7\u30fc\u30bf\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),Object(f.jsxs)(k.a,{item:!0,container:!0,children:[Object(f.jsx)(k.a,{item:!0,md:6,xs:12,style:{marginBottom:12},children:Object(f.jsx)(W,{inputAnalysisData:t,handleChange:i})}),Object(f.jsx)(k.a,{item:!0,md:6,xs:12,style:{marginBottom:12},children:Object(f.jsx)(z,{inputAnalysisData:t,handleChange:i})})]})]})})})),H=n(455),V=n(463),q=[{keyName:"ph",displayName:"pH ( \u6c34\u7d20\u30a4\u30aa\u30f3\u6307\u6570 )",unitName:null},{keyName:"ec",displayName:"EC ( \u96fb\u6c17\u4f1d\u5c0e\u5ea6 )",unitName:"mS / cm"},{keyName:"cao",displayName:"CaO ( \u4ea4\u63db\u6027\u30ab\u30eb\u30b7\u30a6\u30e0 )",unitName:"mg / 100g"},{keyName:"mgo",displayName:"MgO ( \u4ea4\u63db\u6027\u30de\u30b0\u30cd\u30b7\u30a6\u30e0 )",unitName:"mg / 100g"},{keyName:"k2o",displayName:"K2O ( \u4ea4\u63db\u6027\u30ab\u30ea\u30a6\u30e0 )",unitName:"mg / 100g"},{keyName:"p2o5",displayName:"P2O5 ( \u6709\u52b9\u614b\u30ea\u30f3\u9178 )",unitName:"mg / 100g"},{keyName:"nitro_nn",displayName:"NO3-N ( \u785d\u9178\u614b\u7a92\u7d20 )",unitName:"mg / 100g"},{keyName:"cec",displayName:"CEC ( \u967d\u30a4\u30aa\u30f3\u4ea4\u63db\u5bb9\u91cf )",unitName:"meq / 100g"}],J=function(a){var t=a.inputAnalysisData,n=a.handleChange;return Object(f.jsx)(f.Fragment,{children:q.map((function(a,i){return Object(f.jsx)(k.a,{item:!0,md:6,xs:12,style:{marginBottom:12},children:Object(f.jsx)(S,{children:Object(f.jsx)(H.a,{variant:"outlined",type:"number",onChange:n,name:a.keyName,value:t[a.keyName],label:a.displayName,InputProps:{endAdornment:Object(f.jsx)(V.a,{position:"end",children:a.unitName})},helperText:"cec"===a.keyName?"\u203b \u672a\u5165\u529b\u306e\u5834\u5408\u306f 20 \u3068\u3057\u3066\u8a08\u7b97\u3055\u308c\u307e\u3059":""})})},i)}))})},L=Object(e.memo)((function(){var a=g(),t=a.inputAnalysisData,n=a.setInputAnalysisData;return Object(f.jsx)(O.a,{elevation:8,style:{padding:20,marginBottom:21},children:Object(f.jsxs)(k.a,{container:!0,children:[Object(f.jsx)(v,{title:"\u5206\u6790\u7d50\u679c\u306e\u5165\u529b",description:"\u203b \u5206\u6790\u6a5f\u5668\u306b\u3088\u308b\u571f\u58cc\u30b5\u30f3\u30d7\u30eb\u306e\u5206\u6790\u7d50\u679c\u3092\u5165\u529b\u3059\u308b\u3002"}),Object(f.jsx)(J,{inputAnalysisData:t,handleChange:function(a){n(Object(c.a)(Object(c.a)({},t),{},Object(h.a)({},a.target.name,Number(a.target.value))))}})]})})})),R=n(448),Q=n(450),U=n(470),X=n(444),Y=n(231),Z=n(232),$=n(235),aa=["ph","ec","cao","mgo","k2o","p2o5","nitro_nn","base_saturation","cao_saturation","mgo_saturation","k2o_saturation","ratio_mgo_k2o","ratio_cao_mgo"],ta={ph:{keyName:"ph",displayName:"pH",displayName_i18n:"\u6c34\u7d20\u30a4\u30aa\u30f3\u6307\u6570",fieldName:"pH ( \u6c34\u7d20\u30a4\u30aa\u30f3\u6307\u6570 )",unitName:null},ec:{keyName:"ec",displayName:"EC",displayName_i18n:"\u96fb\u6c17\u4f1d\u5c0e\u5ea6",fieldName:"EC ( \u96fb\u6c17\u4f1d\u5c0e\u5ea6 )",unitName:"mS / cm"},cao:{keyName:"cao",displayName:"CaO",displayName_i18n:"\u4ea4\u63db\u6027\u30ab\u30eb\u30b7\u30a6\u30e0",fieldName:"CaO ( \u4ea4\u63db\u6027\u30ab\u30eb\u30b7\u30a6\u30e0 )",unitName:"mg / 100g"},mgo:{keyName:"mgo",displayName:"MgO",displayName_i18n:"\u4ea4\u63db\u6027\u30de\u30b0\u30cd\u30b7\u30a6\u30e0",fieldName:"MgO ( \u4ea4\u63db\u6027\u30de\u30b0\u30cd\u30b7\u30a6\u30e0 )",unitName:"mg / 100g"},k2o:{keyName:"k2o",displayName:"K2O",displayName_i18n:"\u4ea4\u63db\u6027\u30ab\u30ea\u30a6\u30e0",fieldName:"K2O ( \u4ea4\u63db\u6027\u30ab\u30ea\u30a6\u30e0 )",unitName:"mg / 100g"},p2o5:{keyName:"p2o5",displayName:"P2O5",displayName_i18n:"\u6709\u52b9\u614b\u30ea\u30f3\u9178",fieldName:"P2O5 ( \u6709\u52b9\u614b\u30ea\u30f3\u9178 )",unitName:"mg / 100g"},nitro_nn:{keyName:"nitro_nn",displayName:"NO3-N",displayName_i18n:"\u785d\u9178\u614b\u7a92\u7d20",fieldName:"NO3-N ( \u785d\u9178\u614b\u7a92\u7d20 )",unitName:"mg / 100g"},cec:{keyName:"cec",displayName:"CEC",displayName_i18n:"\u967d\u30a4\u30aa\u30f3\u4ea4\u63db\u5bb9\u91cf",fieldName:"CEC ( \u967d\u30a4\u30aa\u30f3\u4ea4\u63db\u5bb9\u91cf )",unitName:"meq / 100g"},base_saturation:{keyName:"base_saturation",displayName:"Base Saturation",displayName_i18n:"\u5869\u57fa\u98fd\u548c\u5ea6",fieldName:"Base Saturation ( \u5869\u57fa\u98fd\u548c\u5ea6 )",unitName:"%"},cao_saturation:{keyName:"cao_saturation",displayName:"CaO Saturation",displayName_i18n:"\u77f3\u7070\u98fd\u548c\u5ea6",fieldName:"CaO Saturation ( \u77f3\u7070\u98fd\u548c\u5ea6 )",unitName:"%"},mgo_saturation:{keyName:"mgo_saturation",displayName:"MgO Saturation",displayName_i18n:"\u82e6\u571f\u98fd\u548c\u5ea6",fieldName:"MgO Saturation ( \u82e6\u571f\u98fd\u548c\u5ea6 )",unitName:"%"},k2o_saturation:{keyName:"k2o_saturation",displayName:"K2O Saturation",displayName_i18n:"\u52a0\u91cc\u98fd\u548c\u5ea6",fieldName:"K2O Saturation ( \u52a0\u91cc\u98fd\u548c\u5ea6 )",unitName:"%"},ratio_mgo_k2o:{keyName:"ratio_mgo_k2o",displayName:"MgO / K20",displayName_i18n:"\u82e6\u571f\u52a0\u91cc\u6bd4",fieldName:"MgO / K2O ( \u82e6\u571f\u52a0\u91cc\u6bd4 )",unitName:"%"},ratio_cao_mgo:{keyName:"ratio_cao_mgo",displayName:"CaO / MgO",displayName_i18n:"\u77f3\u7070\u82e6\u571f\u6bd4",fieldName:"CaO / MgO ( \u77f3\u7070\u82e6\u571f\u6bd4 )",unitName:"%"}},na=function(a){var t=a.chartData,n=t.chartMin,i=t.chartMax,e=[t];return Object(f.jsxs)(X.a,{layout:"vertical",barGap:0,width:800,height:80,data:e,margin:{top:5,right:20,left:20,bottom:5},children:[Object(f.jsx)(Y.a,{type:"number",domain:[n,i],allowDataOverflow:!0}),Object(f.jsx)(Z.a,{dataKey:function(a){return ta[a.keyName].fieldName},width:200,tick:{fontWeight:"bold"},type:"category",yAxisId:0}),Object(f.jsx)(Z.a,{dataKey:"name",type:"category",yAxisId:1,hide:!0}),Object(f.jsx)(Z.a,{dataKey:"name",type:"category",yAxisId:2,hide:!0}),Object(f.jsx)(Z.a,{dataKey:"name",type:"category",yAxisId:3,hide:!0}),Object(f.jsx)($.a,{dataKey:"chartMax",barSize:40,yAxisId:0,fill:"red",opacity:.7}),Object(f.jsx)($.a,{dataKey:"max",barSize:40,yAxisId:1,fill:"lightgreen"}),Object(f.jsx)($.a,{dataKey:"min",barSize:40,yAxisId:2,fill:"yellow"}),Object(f.jsx)($.a,{dataKey:"current",barSize:10,yAxisId:3,fill:"black"})]})},ia=Object(e.memo)((function(a){var t=a.bulletChartData,n=Object(e.useMemo)((function(){return t.map((function(a,t){return Object(f.jsx)(k.a,{item:!0,style:{width:"800px",height:"80px"},children:Object(f.jsx)(na,{chartData:a})},t)}))}),[t]);return Object(f.jsx)(k.a,{children:n})})),ea=n(464),oa=n(465),ma=n(466),_a=n(467),ra=n(468),sa=n(469),ca=Object(e.memo)((function(a){var t=a.tableDataSet,n=function(a){var t=a.current,n=a.min,i=a.max;return t>=n&&t<=i?{backgroundColor:"white"}:t>i?{backgroundColor:"#FF9999",fontWeight:"bold"}:{backgroundColor:"#FFFF99",fontWeight:"bold"}},i=t.map((function(a,t){return Object(f.jsxs)(ea.a,{style:n(a),children:[Object(f.jsx)(oa.a,{component:"th",scope:"row",children:ta[a.keyName].displayName_i18n}),Object(f.jsx)(oa.a,{component:"th",scope:"row",children:ta[a.keyName].displayName}),Object(f.jsx)(oa.a,{children:a.current}),Object(f.jsxs)(oa.a,{children:[a.min," ~ ",a.max]}),Object(f.jsx)(oa.a,{children:ta[a.keyName].unitName})]},t)}));return Object(f.jsx)(k.a,{container:!0,children:Object(f.jsx)(ma.a,{children:Object(f.jsxs)(_a.a,{style:{width:"auto"},children:[Object(f.jsx)(ra.a,{children:Object(f.jsxs)(ea.a,{children:[Object(f.jsx)(oa.a,{align:"center",colSpan:2,children:"\u5206\u6790\u9805\u76ee"}),Object(f.jsx)(oa.a,{align:"center",children:"\u6e2c\u5b9a\u7d50\u679c"}),Object(f.jsx)(oa.a,{align:"center",children:"\u307b\u5834\u306e\u9069\u6b63\u7bc4\u56f2"}),Object(f.jsx)(oa.a,{align:"center",children:"\u5358\u4f4d"})]})}),Object(f.jsx)(sa.a,{children:i})]})})})})),ua=[{id:1,fieldTypeId:1,ph_min:5.5,ph_max:6,ec_min:0,ec_max:.25,p2o5_min:20,p2o5_max:50,nitro_nn_min:0,nitro_nn_max:4,k2o_saturation_min:2,k2o_saturation_max:4,cao_saturation_min:40,cao_saturation_max:50,mgo_saturation_min:10,mgo_saturation_max:15,ratio_mgo_k2o_min:1.1,ratio_mgo_k2o_max:3.2,base_saturation_min:52,base_saturation_max:69,k2o_saturation_max_power:8,sio2_min:0,ratio_cao_mgo_min:3.7,ratio_cao_mgo_max:7},{id:2,fieldTypeId:2,ph_min:6.4,ph_max:6.8,ec_min:0,ec_max:.25,p2o5_min:20,p2o5_max:50,nitro_nn_min:0,nitro_nn_max:3,k2o_saturation_min:2,k2o_saturation_max:4,cao_saturation_min:50,cao_saturation_max:60,mgo_saturation_min:10,mgo_saturation_max:15,ratio_mgo_k2o_min:1.1,ratio_mgo_k2o_max:3.2,base_saturation_min:52,base_saturation_max:69,k2o_saturation_max_power:4,sio2_min:0,ratio_cao_mgo_min:3.7,ratio_cao_mgo_max:7},{id:3,fieldTypeId:3,ph_min:6,ph_max:6.5,ec_min:0,ec_max:.35,p2o5_min:40,p2o5_max:80,nitro_nn_min:0,nitro_nn_max:6,k2o_saturation_min:3,k2o_saturation_max:6,cao_saturation_min:50,cao_saturation_max:60,mgo_saturation_min:15,mgo_saturation_max:20,ratio_mgo_k2o_min:1.1,ratio_mgo_k2o_max:2.9,base_saturation_min:68,base_saturation_max:86,k2o_saturation_max_power:10,sio2_min:0,ratio_cao_mgo_min:3.5,ratio_cao_mgo_max:5.6},{id:4,fieldTypeId:4,ph_min:5.5,ph_max:6,ec_min:0,ec_max:.15,p2o5_min:20,p2o5_max:50,nitro_nn_min:0,nitro_nn_max:2.5,k2o_saturation_min:2,k2o_saturation_max:5,cao_saturation_min:40,cao_saturation_max:50,mgo_saturation_min:10,mgo_saturation_max:15,ratio_mgo_k2o_min:.9,ratio_mgo_k2o_max:3.2,base_saturation_min:52,base_saturation_max:70,k2o_saturation_max_power:8,sio2_min:0,ratio_cao_mgo_min:3.7,ratio_cao_mgo_max:7},{id:5,fieldTypeId:5,ph_min:6,ph_max:6.5,ec_min:0,ec_max:.15,p2o5_min:20,p2o5_max:50,nitro_nn_min:0,nitro_nn_max:2.5,k2o_saturation_min:2,k2o_saturation_max:5,cao_saturation_min:50,cao_saturation_max:60,mgo_saturation_min:10,mgo_saturation_max:15,ratio_mgo_k2o_min:.9,ratio_mgo_k2o_max:3.2,base_saturation_min:62,base_saturation_max:80,k2o_saturation_max_power:8,sio2_min:0,ratio_cao_mgo_min:4.6,ratio_cao_mgo_max:8.4},{id:6,fieldTypeId:6,ph_min:4.5,ph_max:5,ec_min:0,ec_max:.2,p2o5_min:20,p2o5_max:50,nitro_nn_min:0,nitro_nn_max:3,k2o_saturation_min:3,k2o_saturation_max:6,cao_saturation_min:15,cao_saturation_max:25,mgo_saturation_min:3,mgo_saturation_max:7,ratio_mgo_k2o_min:.2,ratio_mgo_k2o_max:1,base_saturation_min:21,base_saturation_max:38,k2o_saturation_max_power:6,sio2_min:0,ratio_cao_mgo_min:5.6,ratio_cao_mgo_max:13.9},{id:7,fieldTypeId:7,ph_min:5.5,ph_max:6,ec_min:0,ec_max:.15,p2o5_min:25,p2o5_max:50,nitro_nn_min:0,nitro_nn_max:2.5,k2o_saturation_min:2,k2o_saturation_max:5,cao_saturation_min:40,cao_saturation_max:50,mgo_saturation_min:5,mgo_saturation_max:10,ratio_mgo_k2o_min:.4,ratio_mgo_k2o_max:2.1,base_saturation_min:47,base_saturation_max:65,k2o_saturation_max_power:8,sio2_min:0,ratio_cao_mgo_min:5.6,ratio_cao_mgo_max:13.9},{id:8,fieldTypeId:8,ph_min:6,ph_max:6.5,ec_min:0,ec_max:.2,p2o5_min:10,p2o5_max:20,nitro_nn_min:0,nitro_nn_max:2,k2o_saturation_min:1,k2o_saturation_max:3,cao_saturation_min:50,cao_saturation_max:60,mgo_saturation_min:10,mgo_saturation_max:20,ratio_mgo_k2o_min:1.4,ratio_mgo_k2o_max:8.6,base_saturation_min:61,base_saturation_max:83,k2o_saturation_max_power:5,sio2_min:25,ratio_cao_mgo_min:3.5,ratio_cao_mgo_max:8.4},{id:9,fieldTypeId:9,ph_min:6,ph_max:6.5,ec_min:0,ec_max:.2,p2o5_min:10,p2o5_max:20,nitro_nn_min:0,nitro_nn_max:2,k2o_saturation_min:1,k2o_saturation_max:3,cao_saturation_min:50,cao_saturation_max:60,mgo_saturation_min:10,mgo_saturation_max:20,ratio_mgo_k2o_min:1.4,ratio_mgo_k2o_max:8.6,base_saturation_min:61,base_saturation_max:83,k2o_saturation_max_power:5,sio2_min:15,ratio_cao_mgo_min:3.5,ratio_cao_mgo_max:8.4},{id:10,fieldTypeId:10,ph_min:4,ph_max:5,ec_min:0,ec_max:.25,p2o5_min:20,p2o5_max:50,nitro_nn_min:0,nitro_nn_max:4,k2o_saturation_min:3,k2o_saturation_max:6,cao_saturation_min:15,cao_saturation_max:25,mgo_saturation_min:3,mgo_saturation_max:7,ratio_mgo_k2o_min:.2,ratio_mgo_k2o_max:1,base_saturation_min:21,base_saturation_max:38,k2o_saturation_max_power:10,sio2_min:0,ratio_cao_mgo_min:3,ratio_cao_mgo_max:11.6},{id:11,fieldTypeId:11,ph_min:6,ph_max:6.5,ec_min:0,ec_max:.15,p2o5_min:10,p2o5_max:30,nitro_nn_min:0,nitro_nn_max:2.5,k2o_saturation_min:1,k2o_saturation_max:3,cao_saturation_min:50,cao_saturation_max:60,mgo_saturation_min:5,mgo_saturation_max:10,ratio_mgo_k2o_min:.7,ratio_mgo_k2o_max:4.3,base_saturation_min:56,base_saturation_max:73,k2o_saturation_max_power:5,sio2_min:0,ratio_cao_mgo_min:7,ratio_cao_mgo_max:16.7},{id:12,fieldTypeId:12,ph_min:5.5,ph_max:6.5,ec_min:0,ec_max:.15,p2o5_min:10,p2o5_max:50,nitro_nn_min:0,nitro_nn_max:2.5,k2o_saturation_min:2,k2o_saturation_max:5,cao_saturation_min:40,cao_saturation_max:60,mgo_saturation_min:5,mgo_saturation_max:20,ratio_mgo_k2o_min:.4,ratio_mgo_k2o_max:4.3,base_saturation_min:47,base_saturation_max:85,k2o_saturation_max_power:8,sio2_min:0,ratio_cao_mgo_min:2.8,ratio_cao_mgo_max:16.7},{id:13,fieldTypeId:13,ph_min:5.5,ph_max:6,ec_min:0,ec_max:.15,p2o5_min:10,p2o5_max:20,nitro_nn_min:0,nitro_nn_max:2.5,k2o_saturation_min:1,k2o_saturation_max:3,cao_saturation_min:40,cao_saturation_max:50,mgo_saturation_min:5,mgo_saturation_max:15,ratio_mgo_k2o_min:.7,ratio_mgo_k2o_max:6.4,base_saturation_min:46,base_saturation_max:68,k2o_saturation_max_power:5,sio2_min:0,ratio_cao_mgo_min:3.7,ratio_cao_mgo_max:13.9},{id:14,fieldTypeId:14,ph_min:6,ph_max:6.5,ec_min:0,ec_max:1,p2o5_min:50,p2o5_max:100,nitro_nn_min:0,nitro_nn_max:20,k2o_saturation_min:3,k2o_saturation_max:6,cao_saturation_min:50,cao_saturation_max:60,mgo_saturation_min:10,mgo_saturation_max:15,ratio_mgo_k2o_min:.7,ratio_mgo_k2o_max:2.1,base_saturation_min:63,base_saturation_max:81,k2o_saturation_max_power:10,sio2_min:0,ratio_cao_mgo_min:4.6,ratio_cao_mgo_max:8.4}],la=function(a){var t=a.fieldTypeId,n=a.soilTypeId;console.log(n);var i=function(a,t){var n=t.find((function(t){return t.id===a}));if(void 0===n)throw new Error("Not found fieldTypeId");return n}(t,ua);return aa.map((function(t){return da(t,a,i)}))},da=function(a,t,n){var i,e,o;if("cao"===a||"mgo"===a||"k2o"===a){var m="".concat(a,"_saturation_min"),_="".concat(a,"_saturation_max");i=l(t.cec,n[m],a),e=l(t.cec,n[_],a),o=t[a]}else{var r="".concat(a,"_min"),s="".concat(a,"_max");i=n[r],e=n[s],o=t[a]}return{keyName:a,current:o,min:i,max:e}},xa=function(a){return a.map((function(a){return pa(a)}))},pa=function(a){var t,n;return"ph"===a.keyName?(t=0,n=14):"cao_saturation"===a.keyName||"mgo_saturation"===a.keyName||"k2o_saturation"===a.keyName?(t=0,n=100):(t=0,n=1.25*a.max),Object(c.a)({chartMin:t,chartMax:n},a)},ja=function(a){var t=la(a);return{tableData:t,chartData:xa(t)}},ga=Object(e.memo)((function(a){var t=function(a){var t=Object(e.useState)([]),n=Object(p.a)(t,2),i=n[0],o=n[1],m=Object(e.useState)([]),_=Object(p.a)(m,2),r=_[0],s=_[1];return Object(e.useEffect)((function(){var t=ja(a),n=t.tableData,i=t.chartData;s(i),o(n)}),[a]),{tableDataSet:i,bulletChartData:r}}(a.reportAnalysisData),n=t.tableDataSet,i=t.bulletChartData,o=Object(e.useState)(0),m=Object(p.a)(o,2),_=m[0],r=m[1];return Object(f.jsxs)(O.a,{elevation:8,style:{padding:20,marginBottom:21},children:[Object(f.jsx)(v,{title:"\u571f\u58cc\u5206\u6790\u7d50\u679c",description:"\u203b \u524d\u30da\u30fc\u30b8\u306e\u5165\u529b\u7d50\u679c\u3092\u51fa\u529b\u3059\u308b\u3002"}),Object(f.jsx)(R.a,{sx:{borderBottom:4,borderColor:"divider"},children:Object(f.jsxs)(Q.a,{value:_,onChange:function(a,t){r(t)},centered:!0,children:[Object(f.jsx)(U.a,{label:"\u30c6\u30fc\u30d6\u30eb"}),Object(f.jsx)(U.a,{label:"\u30c1\u30e3\u30fc\u30c8"})]})}),Object(f.jsxs)(R.a,{display:"flex",justifyContent:"center",m:1,p:1,children:[Object(f.jsx)(R.a,{hidden:0!==_,children:Object(f.jsx)(ca,{tableDataSet:n})}),Object(f.jsx)(R.a,{hidden:1!==_,children:Object(f.jsx)(ia,{bulletChartData:i})})]})]})})),ba=Object(e.memo)((function(){var a=y().reportAnalysisData;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(G,{}),Object(f.jsx)(L,{}),null!==a?Object(f.jsx)(ga,{reportAnalysisData:a}):Object(f.jsx)("div",{children:"Null"})]})})),ya=n(471),ha=n(472),Oa=n(473),ka=n(233),Na=n.n(ka),fa=function(){return Object(f.jsx)(R.a,{sx:{flexGrow:1},children:Object(f.jsx)(ya.a,{position:"static",style:{marginBottom:10},children:Object(f.jsxs)(ha.a,{children:[Object(f.jsx)(N.a,{variant:"h5",component:"div",sx:{flexGrow:1},children:"Soil Analysis System"}),Object(f.jsx)(Oa.a,{edge:"end",color:"inherit","aria-label":"menu",children:Object(f.jsx)(Na.a,{})})]})})})},va=function(){return Object(f.jsxs)(r.a,{children:[Object(f.jsx)(fa,{}),Object(f.jsx)(s.a,{maxWidth:"lg",fixed:!0,children:Object(f.jsx)(ba,{})})]})};_.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(va,{})}),document.getElementById("root")),i&&i instanceof Function&&n.e(3).then(n.bind(null,475)).then((function(a){var t=a.getCLS,n=a.getFID,e=a.getFCP,o=a.getLCP,m=a.getTTFB;t(i),n(i),e(i),o(i),m(i)}))}},[[397,1,2]]]);
//# sourceMappingURL=main.7628ab1a.chunk.js.map