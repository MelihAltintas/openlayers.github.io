(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{397:function(e,t,n){"use strict";n.r(t);var o=n(112),r=n(3),a=n(9),s=n(2),w=n(5),c=n(69),g=new o.a({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states"},ratio:1,serverType:"geoserver"}),i=function(e){var t=g.getLegendUrl(e);document.getElementById("legend").src=t},u=[new w.a({source:new a.b}),new c.a({extent:[-13884991,2870341,-7455066,6338219],source:g})],p=new r.a({layers:u,target:"map",view:new s.a({center:[-10997148,4569099],zoom:4})}),l=p.getView().getResolution();i(l),p.getView().on("change:resolution",(function(e){var t=e.target.getResolution();i(t)}))}},[[397,0]]]);
//# sourceMappingURL=wms-getlegendgraphic.js.map