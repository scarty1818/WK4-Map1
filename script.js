require([
  "esri/Map",
  "esri/layers/FeatureLayer",
  "esri/views/MapView",
  "dojo/domReady!"
], function(
  Map,
  FeatureLayer,
  MapView
) {

  // Create the map
  var map = new Map({
    basemap: "gray"
  });

  // Create the MapView
  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-90.199402, 38.627003],
    zoom: 11
  });

  var template = { // autocasts as new PopupTemplate()
    title: "Neighborhood: {NHD_NAME}", // Updated title template
    content: [{ 
      type: "fields",
      fieldInfos: [
        {
          fieldName: "ANGLE",
          label: "Angle: ",
          visible: true
        }, 
        {
          fieldName: "NHD_NAME",
          label: "Neighborhood Name: ",
          visible: true
        }, 
        {
          fieldName: "NHD_NUM",
          label: "Neighborhood Number: ",
          visible: true
        }, 
        {
          fieldName: "NHD_NUM_ST",
          label: "NHD_NUM_ST",
          visible: true
        },
        {
          fieldName: "NHD_NUMTXT",
          label: "NHD_NUMTXT: ",
          visible: true
        }
        // Add or modify fieldInfos as needed to display different fields
      ]
    }]
  };

  // var symbol = {
   // type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
  //  url: "https://cdn.iconscout.com/icon/premium/png-256-thumb/hockey-240-984443.png",
  //  width: "64px",
  //  height: "64px"
  // };
  
    var renderer = {
    type: "simple",  // autocasts as new SimpleRenderer()
    symbol: {
      type: "simple-marker",  // new SimpleMarkerSymbol()
      color: "red",  // Set the color of the marker to red
      size: "8px",  
      outline: {  
        width: 0.5,
        color: "white"
      }
    }
  };

  // Reference the popupTemplate instance in the popupTemplate property of FeatureLayer
  var featureLayer = new FeatureLayer({
    url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/ArcGIS/rest/services/STL_Neighborhood/FeatureServer/0",
    outFields: ["*"], // Ensure you have the correct field names here
    popupTemplate: template,
    renderer: renderer
  });

  map.add(featureLayer);

  // Adjust or add any additional layer settings as needed
});
