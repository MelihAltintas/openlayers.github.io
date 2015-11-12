var source = new ol.source.Vector();
$.ajax('data/geojson/roads-seoul.geojson').then(function(response) {
  var format = new ol.format.GeoJSON();
  var features = format.readFeatures(response,
      {featureProjection: 'EPSG:3857'});

  var parser = new jsts.io.olParser();

  for (var i = 0; i < features.length; i++) {
    var feature = features[i];
    // convert the OpenLayers geometry to a JSTS geometry
    var jstsGeom = parser.read(feature.getGeometry());

    // create a buffer of 40 meters around each line
    var buffered = jstsGeom.buffer(40);

    // convert back from JSTS and replace the geometry on the feature
    feature.setGeometry(parser.write(buffered));
  }

  source.addFeatures(features);
});
var vectorLayer = new ol.layer.Vector({
  source: source
});

var rasterLayer = new ol.layer.Tile({
  source: new ol.source.MapQuest({
    layer: 'osm'
  })
});

var map = new ol.Map({
  layers: [rasterLayer, vectorLayer],
  target: document.getElementById('map'),
  view: new ol.View({
    center: ol.proj.fromLonLat([126.979293, 37.528787]),
    zoom: 15
  })
});
