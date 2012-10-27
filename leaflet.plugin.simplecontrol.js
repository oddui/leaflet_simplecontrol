L.Control.SimpleControl = L.Control.extend({
  options: {
    position: 'topleft',

    locationControl: true,
    locationSetView: true,
    locationMaxZoom: Infinity,
    locationMarkerIcon: null,
    locationMarkerPopup: ''
  },

  onAdd: function (map) {
    var className = 'leaflet-simplecontrol',
        container = L.DomUtil.create('div', className);

    this._createButton('Zoom out', className + '-zoomout', container, map.zoomOut, map);
    this._createButton('Zoom in',  className + '-zoomin',  container, map.zoomIn, map);

    if (this.options.locationControl) {

      this._createButton('Locate', className + '-locate', container,
        (function(scope) {
          return function() {
            map.locate({
              setView: scope.locationSetView,
              maxZoom: scope.locationMaxZoom
            });
          }
        })(this.options), map);

      map.on('locationerror', function(e) {
        console.log('locationerror... ' + e.message);
      });

      map.on('locationfound', function(e) {
        //console.log('locationfound...');

        if (null == this._location_marker) {
          // create marker

          var popup = this.options.locationMarkerPopup + ' (within ' + e.accuracy + ' metres)';

          if (null == this.options.locationMarkerIcon) {
            this._location_marker = L.marker(e.latlng)
          } else {
            this._location_marker = L.marker(e.latlng, { icon : this.options.locationMarkerIcon })
          }

          this._location_marker.addTo(map).bindPopup(popup).openPopup();

        } else {

          // update marker
          this._location_marker.setLatLng(e.latlng);
          this._location_marker.openPopup();
        }

      }, this);
    }

    return container;
  },

  _location_marker: null,

  _createButton: function (title, className, container, fn, context) {
    var link = L.DomUtil.create('a', className, container);
    link.href = '#';
    link.title = title;

    L.DomEvent
      .on(link, 'click', L.DomEvent.stopPropagation)
      .on(link, 'click', L.DomEvent.preventDefault)
      .on(link, 'click', fn, context)
      .on(link, 'dblclick', L.DomEvent.stopPropagation);

    return link;
  }
});
