(this["webpackJsonpapp-one"]=this["webpackJsonpapp-one"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(7),r=n.n(s),o=(n(98),n(23)),i=n.n(o),l=n(38),u=n(11),d=(n(100),n(240)),j=n(241),f=n(242),h=n(232),b=n(236),v=n(21),p=n(237),O=(n(101),n(3));var x=function(e){var t=e.title,n=e.cases,c=e.total,a=e.active,s=e.isRed,r=Object(v.a)(e,["title","cases","total","active","isRed"]);return console.log(t,a),Object(O.jsx)(h.a,{onClick:r.onClick,className:"infoBox ".concat(a&&"infoBox--selected"," ").concat(s&&"infoBox--red"),children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(p.a,{color:"textSecondary",gutterBottom:!0,children:t}),Object(O.jsx)("h2",{className:"infoBox__cases ".concat(!s&&"infoBox__cases--green"),children:n}),Object(O.jsxs)(p.a,{className:"infoBox__total",color:"textSecondary",children:[c," Total"]})]})})},m=n(239),g=n(244),y=(n(106),n(87)),C=n(12),N=n.n(C),w=n(243),_=n(238),k={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},S=function(e){var t=Object(y.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},B=function(e){return e?"+".concat(N()(e).format("0.0a")):"+0"},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(O.jsx)(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:k[t].hex,fillColor:k[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*k[t].multiplier,children:Object(O.jsx)(_.a,{children:Object(O.jsxs)("div",{className:"info-container",children:[Object(O.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(O.jsx)("div",{className:"info-name",children:e.country}),Object(O.jsxs)("div",{className:"info-confirmed",children:["Cases: ",N()(e.cases).format("0,0")]}),Object(O.jsxs)("div",{className:"info-recovered",children:["Recovered: ",N()(e.recovered).format("0,0")]}),Object(O.jsxs)("div",{className:"info-deaths",children:["Deaths: ",N()(e.deaths).format("0,0")]})]})})})}))};var R=function(e){var t=e.countries,n=e.casesType,c=e.center,a=e.zoom;return Object(O.jsx)("div",{className:"map",children:Object(O.jsxs)(m.a,{center:c,zoom:a,children:[Object(O.jsx)(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),I(t,n)]})})};n(107);var T=function(e){var t=e.countries;return Object(O.jsx)("div",{className:"table",children:t.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.country}),Object(O.jsx)("td",{children:Object(O.jsx)("strong",{children:N()(e.cases).format("0,0")})})]})}))})},D=n(86),A={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return N()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,n){return N()(e).format("0a")}}}]}},E=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",c=[];for(var a in e.cases){if(t){var s={x:a,y:e[n][a]-t};c.push(s)}t=e[n][a]}return c};var F=function(e){var t=e.casesType,n=void 0===t?"cases":t,a=Object(c.useState)({}),s=Object(u.a)(a,2),r=s[0],o=s[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=E(e,n);o(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(O.jsx)("div",{children:(null===r||void 0===r?void 0:r.length)>0&&Object(O.jsx)(D.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:r}]},options:A})})};n(204);var L=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("worldwide"),r=Object(u.a)(s,2),o=r[0],v=r[1],p=Object(c.useState)({}),m=Object(u.a)(p,2),g=m[0],y=m[1],C=Object(c.useState)([]),w=Object(u.a)(C,2),_=w[0],k=w[1],I=Object(c.useState)({lat:34.80746,lng:-40.4796}),D=Object(u.a)(I,2),A=D[0],E=D[1],L=Object(c.useState)(3),M=Object(u.a)(L,2),z=M[0],W=M[1],J=Object(c.useState)([]),P=Object(u.a)(J,2),V=P[0],Y=P[1],q=Object(c.useState)("cases"),K=Object(u.a)(q,2),G=K[0],H=K[1];console.log(G),Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){y(e)}))}),[]),Object(c.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),n=S(e);k(n),Y(e),a(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var Q=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,c="worldwide"===n?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(n),e.next=4,fetch(c).then((function(e){return e.json()})).then((function(e){v(n),y(e),E("https://disease.sh/v3/covid-19/all"===c?[34.80746,-40.4796]:[e.countryInfo.lat,e.countryInfo.long]),y(e),W(4),console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(g),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("div",{className:"app__left",children:[Object(O.jsxs)("div",{className:"app_header",children:[Object(O.jsx)("h1",{children:" COVID 19 TRACKER"}),Object(O.jsx)(d.a,{className:"app_dropdown",children:Object(O.jsxs)(j.a,{variant:"outlined",value:o,onChange:Q,children:[Object(O.jsx)(f.a,{value:"worldwide",children:" WorldWide "}),n.map((function(e){return Object(O.jsxs)(f.a,{value:e.value,children:[" ",e.name," "]})}))]})})]}),Object(O.jsxs)("div",{className:"app_stats",children:[Object(O.jsx)(x,{onClick:function(e){return H("cases")},active:"cases"===G,title:"CoronaVirus Cases",isRed:!0,cases:B(g.todayCases),total:N()(g.cases).format("0.0a")}),Object(O.jsx)(x,{onClick:function(e){return H("recovered")},title:"Recovered",active:"recovered"===G,cases:B(g.todayRecovered),total:N()(g.recovered).format("0.0a")}),Object(O.jsx)(x,{onClick:function(e){return H("deaths")},title:"Deaths",isRed:!0,active:"deaths"===G,cases:B(g.todayDeaths),total:N()(g.deaths).format("0.0a")})]}),Object(O.jsx)(R,{countries:V,casesType:G,center:A,zoom:z})]}),Object(O.jsx)(h.a,{className:"app__right",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)("h3",{children:"Live Cases By Country"}),Object(O.jsx)(T,{countries:_}),Object(O.jsxs)("h3",{children:["WorldWide New ",G]}),Object(O.jsx)(F,{casesType:G})]})})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,246)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(L,{})}),document.getElementById("root")),M()},98:function(e,t,n){}},[[205,1,2]]]);
//# sourceMappingURL=main.f9754bc9.chunk.js.map