Leaflet simplecontrols
=====================

Provides Mapbox styled controls(zoomin, zoomout and locate) for Leaflet.

Check out the [Demo](http://oddui.github.com/leaflet_simplecontrol)

### Usage
Create a new leaflet map without zoomControl, then add simplecontrol to the map

```javascript
var map = new L.Map(...);
map.addControl(new L.Control.SimpleControl());
```

### Defaults
By default the simplecontrol enables some nice defaults for you:
* **locationControl**: Enables location control.
* **locationSetView**: Automatically sets the map view to the user location with respect to detection accuracy.

You can disable the location control in the options when you create the simplecontrol:
```javascript
var simpleControl = new L.Control.SimpleControl({
  locationControl: false
});
```

### Options
* **position**: The initial position of simplecontrol (one of the map corners).

location options
* **locationControl**: If set to true location control will be enabled else disabled. Defaults to true.
* **locationSetView**: If set to true it automatically sets the map view to the user location with respect to detection accuracy. Defaults to true.
* **locationMaxZoom**: The maximum zoom for automatic view setting when using locationSetView option..
* **locationMarkerIcon**: The icon for the user's position marker.
* **locationMarkerPopup**: The popup for the user's postion marker.

### License

Leaflet simplecontrols is free software, and may be redistributed under the MIT-LICENSE.
