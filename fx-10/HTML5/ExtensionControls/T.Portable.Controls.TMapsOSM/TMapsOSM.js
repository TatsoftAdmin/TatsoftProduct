//Keep the 3 next lines
this.T = this.T || {};
this.T.Portable = this.T.Portable || {};
this.T.Portable.Controls = this.T.Portable.Controls || {};

this.isMapLoaded = false;
this.mapObj;

T.Portable.Controls.MTapsOSM = function () {

    var parameters;
    var updateCallback;
    var subId;
    var inp;
    var shouldLoadDefaultGeoJson = false;
    var arrayOfStrings;
    var lastIsOnlineStatus = false;
    var lastCheckOnline = null;

    this.OnInitializeControl = function (control, _parameters, _updateCallback) {
        //debugger;;

        lastCheckOnline = new Date().getTime();

        FetchDefaultGeoJSON = async function () {
            var loc = window.location.href;
            var path = loc.substring(0, loc.lastIndexOf('/')) // 'http://127.0.0.1:3203/fs-9.2/html5'
            path = path + "/ExternalControls/Maps/world_map.json";
            var temp = "";
            const response = await fetch(path);
            const data = await response.text();
            return data;
        }

        var online = navigator.onLine;

        // Control Info -> https://ej2.syncfusion.com/javascript/documentation/maps/es5-getting-started/

        parameters = _parameters;
        updateCallback = _updateCallback;

        subId = control.id + "_element";

        arrayOfStrings = parameters.split(';');

        inp = document.createElement("MAPS");
        inp.id = subId;

        control.appendChild(inp);

        inp.style.height = control.style.height;
        inp.style.width = control.style.width;
        inp.style.margin = "auto";
        inp.style.display = "block";
        //inp.style.border = "1px solid #dddddd";

        var title = arrayOfStrings[0].substring(("Title=").length);

        var enableZoom = (arrayOfStrings[1].substring(("EnableZoom=").length) === 'True');

        //debugger;;
        var centerPosLatitude = Number(arrayOfStrings[2].substring(("CenterPosLatitude=").length));
        var centerPosLongitude = Number(arrayOfStrings[3].substring(("CenterPosLongitude=").length));
        var centerPosition = [];
        if (centerPosLatitude != "" && centerPosLongitude != "")
            centerPosition = { latitude: centerPosLatitude, longitude: centerPosLongitude };

        var shapeData = arrayOfStrings[4].substring(("GEOJSON=").length);
        if (shapeData) {
            shapeData = JSON.parse(shapeData);
        }
        else {
            shouldLoadDefaultGeoJson = true;
        }

        var layerType = arrayOfStrings[5].substring(("LayerType=").length);
        var urlTemplate = undefined;
        if (layerType == "OpenStreetMap")
            layerType = "OSM";
        else // Add GoogleMaps render
        {
            layerType = "Google";
            //urlTemplate = "http://mt1.google.com/vt/lyrs=m@129&hl=en&x=tileX&y=tileY&z=level";
        }

        var enableMarker = (arrayOfStrings[6].substring(("EnableMarker=").length) === 'True');
        var markerHeight = 10;
        var markerWidth = 10;
        if (enableMarker) {
            markerHeight = Number(arrayOfStrings[7].substring(("MarkerHeight=").length));
            markerWidth = Number(arrayOfStrings[8].substring(("MarkerWidth=").length));
        }

        var shapeValuePath = 'shape';
        var colorValuePath = 'color';

        var enableTooltip = (arrayOfStrings[9].substring(("EnableTooltip=").length) === 'True');
        var valuePathTooltip = 'name';
        var formatTooltip = arrayOfStrings[10].substring(("formatTooltip=").length);
        var tooltipSettings = [];
        tooltipSettings.push({ visible: enableTooltip, valuePath: valuePathTooltip, format: 'name' });

        //var inputDataSource = arrayOfStrings[11].substring(("DataSource=").length);
        var inputDataSource = [
            //{ latitude: 34.060620, longitude: -118.330491, name: "California", color: 'red', shape: 'Circle' },
            //{ latitude: 40.724546, longitude: -73.850344, name: "New York", color: 'red', shape: 'Circle' },
        ];
        var dataSource = [];
        for (var i = 0; i < inputDataSource.length; i++) {
            var latitude = Number(inputDataSource[i].latitude);
            var longitude = Number(inputDataSource[i].longitude);
            var name = inputDataSource[i].name;
            var color = inputDataSource[i].color;
            var shape = inputDataSource[i].shape;
            dataSource.push({ latitude: latitude, longitude: longitude, name: name, color: color, shape: shape });
        }

        //var inputNavigationLine =  arrayOfStrings[12].substring(("NavigationLineSettings=").length);
        var inputNavigationLine = [];


        var navigationLineSettings = [];
        for (var i = 0; i < inputNavigationLine.length; i++) {
            var latitude = inputNavigationLine[i].latitude;
            var longitude = inputNavigationLine[i].longitude;
            var dashArray = inputNavigationLine[i].dashArray;
            var color = inputNavigationLine[i].color;
            var visible = inputNavigationLine[i].visible;
            var width = inputNavigationLine[i].width;
            var angle = inputNavigationLine[i].angle;
            navigationLineSettings.push({
                latitude: latitude,
                longitude: longitude,
                dashArray: dashArray,
                color: color,
                visible: visible,
                width: width,
                angle: angle
            });
        }


        this.mapObj = new ej.maps.Maps({
            titleSettings: {
                text: title,
            },

            legendSettings: {
                visible: true,// enable legend
                //type: 'Markers',
            },

            zoomSettings: { // Zoom Toolbar at the top-right side (Zooming and Panning)
                enable: enableZoom,  // enable zoom
                enablePanning: true, // move map with mouse
                mouseWheelZoom: true, // enable zoom on mouse wheel
                pinchZooming: true, // enable zoom for TouchScreen
                doubleClickZoom: true, // enable zoom on double click
                toolBars: ["Zoom", "ZoomIn", "ZoomOut", "Pan", "Reset"],
                zoomFactor: 3,
            },

            centerPosition: centerPosition,

            layers: [{

                layerType: layerType,
                urlTemplate: urlTemplate,

            },
            {
                type: 'SubLayer',

                shapeSettings: {
                    opacity: 0.6,
                    fill: 'lightGrey',

                },

                shapeData: shapeData,
                navigationLineSettings: inputNavigationLine,

                markerSettings: [{
                    visible: enableMarker,
                    height: markerHeight,
                    width: markerWidth,
                    shapeValuePath: shapeValuePath,
                    colorValuePath: colorValuePath,

                    tooltipSettings: {
                        visible: enableTooltip,
                        valuePath: valuePathTooltip,

                    },

                    dataSource: dataSource,

                    dataLabelSettings: {
                        visible: true,
                        labelPath: 'name',
                        smartLabelMode: 'Trim'
                    },
                }],


            }],


        });

        // add markerClick;
        this.mapObj.addEventListener("markerClick", this.LocalPropertyChange, false);


        this.mapObj.appendTo('#' + subId);


        if (shouldLoadDefaultGeoJson) {

            var defaultGeoJSON = "";
            FetchDefaultGeoJSON()
                .then(t => { defaultGeoJSON += t })
                .then(s => {
                    defaultGeoJSON = defaultGeoJSON.replaceAll("\n", "");
                    defaultGeoJSON = defaultGeoJSON.replaceAll("\\", "");
                    defaultGeoJSON = JSON.parse(defaultGeoJSON);
                    this.mapObj.layers[1].shapeData = defaultGeoJSON;
                    this.mapObj.refresh();
                });
        }


        // this.CheckInternetConnection();

        this.isMapLoaded = true;
        return true;
    };

    this.OnDisposeControl = function (control) {
        ////debugger;;

        this.mapObj.removeEventListener("markerClick", this.LocalPropertyChange);

        control.removeChild(control.childNodes[0]);
    };

    this.SetPropertyValue = function (parameter, newValue) {

        try {
            if (parameter == 'LinkedValue') {

            }

            if (parameter.includes(";")) {

                var split = parameter.split(";");
                var _param = split[0];
                var _idx = split[1];

                if (_param == "AlarmState") {

                    if (newValue == 0) {
                        this.ChangeMarkerSettings("", "", "", "green", "", "", _idx);
                        return;
                    }
                    else {
                        this.ChangeMarkerSettings("", "", "", "red", "", "", _idx);
                    }
                }
            }
        } catch (error) {
            alert("[SetPropertyValue] Error: " + error);
        }
    }

    this.LocalPropertyChange = function (parameter) {

        if (parameter.name == "markerClick") {

            try {
                var str = "#Name='" + parameter.data.name + "';";
                str += "#Shape='" + parameter.data.shape + "';";
                str += "#Color='" + parameter.data.color + "';";
                str += "#Latitude=" + parameter.data.latitude + ";";
                str += "#Longitude=" + parameter.data.longitude + ";";
                str += "#TagName='" + String(parameter.data.tag) + "';";
                str += "#Tag=" + parameter.data.tag;
                document.ObjectServer.DB.RunDB.GetObj(10).OpenDisplay("NewPopup", str)
            }
            catch (error) {
                alert("[MarkerClicked] Error: " + error);
            }

        }


    }

    this.OnSizeChangedControl = function (control) {
        this.mapObj.height = String(control.height) + 'px';
        this.mapObj.width = String(control.width) + 'px';

        var width = parseInt(Math.min(control.height, control.width), 10);

    }

    this.AddMarker = function (latitude, longitude, name, color, shape, tag) {

        try {
            if (this.mapObj.layers[1].markerSettings[0].dataSource.filter(function (e) { return e.name === name; }).length > 0) {
                return;
            }

            this.mapObj.layers[1].markerSettings[0].dataSource.push({ latitude: latitude, longitude: longitude, name: name, color: color, shape: shape, tag: tag });
            this.mapObj.refresh();
        } catch (error) {
            alert("[AddMarker] Error: " + error);
        }
    }

    this.RemoveMarker = function (idx) {
        try {
            if (typeof idx === 'string') {
                idx = this.mapObj.layers[1].markerSettings[0].dataSource.findIndex(x => x.name === idx);
            }

            this.mapObj.layers[1].markerSettings[0].dataSource.splice(idx, 1);
            this.mapObj.refresh();
        } catch (error) {
            alert("[RemoveMarker] Error: " + error);
        }
    }

    this.ClearMarkers = function () {
        try {
            this.mapObj.layers[1].markerSettings[0].dataSource = [];
            this.mapObj.refresh();
        } catch (error) {
            alert("[ClearMarkers] Error: " + error);
        }
    }

    this.ChangeMarkerSettings = function (latitude, longitude, name, color, shape, tag, idx) {

        try {
            if (typeof idx === 'string') {
                idx = this.mapObj.layers[1].markerSettings[0].dataSource.findIndex(x => x.name === idx);
            }

            if (latitude) {
                this.mapObj.layers[1].markerSettings[0].dataSource[idx].latitude = latitude
            }
            if (longitude) {
                this.mapObj.layers[1].markerSettings[0].dataSource[idx].longitude = longitude;
            }
            if (name) {
                this.mapObj.layers[1].markerSettings[0].dataSource[idx].name = name;
            }
            if (color) {
                this.mapObj.layers[1].markerSettings[0].dataSource[idx].color = color;
            }
            if (shape) {
                this.mapObj.layers[1].markerSettings[0].dataSource[idx].shape = shape;
            }
            if (tag) {
                this.mapObj.layers[1].markerSettings[0].dataSource[idx].tag = tag;
            }

            this.mapObj.refresh();
        } catch (error) {
            alert("[ChangeMarkerSettings] Error: " + error);
        }
    }

    this.AddNavigationLine = function (latitudes, longitudes, dashArray, color, width, angle, visible) {
        try {
            var properties = [];
            for (var i = 0; i < this.mapObj.layers[1].navigationLineSettings.length; i++) {
                properties.push(this.mapObj.layers[1].navigationLineSettings[i].properties);
            }

            this.mapObj.layers[1].navigationLineSettings = [];
            var _dashArray = String(dashArray)

            properties.push({
                latitude: latitudes,
                longitude: longitudes,
                angle: angle,
                visible: visible,
                width: width,
                dashArray: _dashArray,
                color: color,
            })
            this.mapObj.layers[1].navigationLineSettings = properties;
            this.mapObj.refresh();
        } catch (error) {
            alert("[AddNavigationLine] Error: " + error);
        }
    }

    this.ToggleNavigationLine = function (idx) {
        try {
            this.mapObj.layers[1].navigationLineSettings.splice(idx, 1);
            this.mapObj.refresh();
        } catch (error) {
            alert("[ToggleNavigationLine] Error: " + error);
        }
    }

    this.ToggleNavigationLine = function () {
        try {
            for (var i = 0; i < this.mapObj.layers[1].navigationLineSettings.length; i++) {
                this.mapObj.layers[1].navigationLineSettings[i].properties.visible = !this.mapObj.layers[1].navigationLineSettings[i].properties.visible;
            }
            this.mapObj.refresh();
        } catch (error) {
            alert("[ToggleNavigationLine] Error: " + error);
        }
    }

    this.ToggleZoom = function () {
        try {
            this.mapObj.zoomSettings.enable = !this.mapObj.zoomSettings.enable;
            this.mapObj.refresh();
        } catch (error) {
            alert("[ToggleZoom] Error: " + error);
        }
    }


    this.CheckInternetConnection = async () => {
        try {
            var dateNow = new Date().getTime();
            var millisBetweenChecks = 5000 // 5 seconds

            var waitTimeBetweenCheck = Boolean((dateNow - lastCheckOnline) < millisBetweenChecks);
            if (waitTimeBetweenCheck) {
                return;
            }

            lastCheckOnline = new Date().getTime();

            var isOnline = await checkOnlineStatusAsync();

            if (isOnline == lastIsOnlineStatus) {
                return;
            }

            var opacity = 0.6;
            var layerType = arrayOfStrings[5].substring(("LayerType=").length);
            if (layerType == "OpenStreetMap")
                layerType = "OSM";
            else // Add GoogleMaps render
            {
                layerType = "Google";
                //urlTemplate = "http://mt1.google.com/vt/lyrs=m@129&hl=en&x=tileX&y=tileY&z=level";
            }
            if (!isOnline) {
                opacity = 1.0;
                layerType = "";
            }

            this.mapObj.layers[1].shapeSettings.opacity = opacity;
            this.mapObj.layers[0].layerType = layerType;
            this.mapObj.refresh();
            lastIsOnlineStatus = isOnline;
        } catch (error) {
            alert("[CheckInternetConnection] Error: " + error);
        }
    }

    var checkOnlineStatusAsync = async () => {
        try {
            var controller = new AbortController();
            var id = setTimeout(() => controller.abort(), 5000);

            // makes request for a public api available online
            var online = await fetch('https://api.publicapis.org/entries', { signal: controller.signal });
            return online.status >= 200 && online.status < 300; // either true or false

        } catch (err) {
            return false; // definitely offline
        }
    };


}



