(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{319:function(e,n,i){"use strict";i.r(n);var o=i(3),s=i(2),a=i(5),t=i(226),c=i(4),r=i(9),p=i(54),l="pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2t0cGdwMHVnMGdlbzMxbDhwazBic2xrNSJ9.WbcTL9uj8JPAsnT9mgb7oQ";function u(e,n){var i=$(e+" input.visible");i.on("change",(function(){n.setVisible(this.checked)})),i.prop("checked",n.getVisible());var o=$(e+" input.opacity");o.on("input change",(function(){n.setOpacity(parseFloat(this.value))})),o.val(String(n.getOpacity()))}new o.a({layers:[new a.a({source:new r.b}),new t.a({layers:[new a.a({source:new p.a({url:"https://api.tiles.mapbox.com/v4/mapbox.20110804-hoa-foodinsecurity-3month.json?secure&access_token="+l,crossOrigin:"anonymous"})}),new a.a({source:new p.a({url:"https://api.tiles.mapbox.com/v4/mapbox.world-borders-light.json?secure&access_token="+l,crossOrigin:"anonymous"})})]})],target:"map",view:new s.a({center:Object(c.f)([37.4057,8.81566]),zoom:4})}).getLayers().forEach((function(e,n){u("#layer"+n,e),e instanceof t.a&&e.getLayers().forEach((function(e,i){u("#layer"+n+i,e)}))})),$("#layertree li > span").click((function(){$(this).siblings("fieldset").toggle()})).siblings("fieldset").hide()}},[[319,0]]]);
//# sourceMappingURL=layer-group.js.map