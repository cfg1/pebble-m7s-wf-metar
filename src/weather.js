var CLOUDPEBBLE = 1;

var CLIMACON = {
  'cloud'            : '!',
  'cloud_day'        : '"',
  'cloud_night'      : '#',
  'rain'             : '$',
  'rain_day'         : '%',
  'rain_night'       : '&',
  'showers'          : "'",
  'showers_day'      : '(',
  'showers_night'    : ')',
  'downpour'         : '*',
  'downpour_day'     : '+',
  'downpour_night'   : ',',
  'drizzle'          : '-',
  'drizzle_day'      : '.',
  'drizzle_night'    : '/',
  'sleet'            : '0',
  'sleet_day'        : '1',
  'sleet_night'      : '2',
  'hail'             : '3',
  'hail_day'         : '4',
  'hail_night'       : '5',
  'flurries'         : '6',
  'flurries_day'     : '7',
  'flurries_night'   : '8',
  'snow'             : '9',
  'snow_day'         : ':',
  'snow_night'       : ';',
  'fog'              : '<',
  'fog_day'          : '=',
  'fog_night'        : '>',
  'haze'             : '?',
  'haze_day'         : '@',
  'haze_night'       : 'A',
  'wind'             : 'B',
  'wind_cloud'       : 'C',
  'wind_cloud_day'   : 'D',
  'wind_cloud_night' : 'E',
  'lightning'        : 'F',
  'lightning_day'    : 'G',
  'lightning_night'  : 'H',
// ---
  'sun'              : 'I',
   'set'             : 'J',
   'rise'            : 'K',
   'low'             : 'L',
   'lower'           : 'M',
  'moon'             : 'N',
   'new'             : 'O',
   'wax_cresc'       : 'P',
   'wax_quart'       : 'Q',
   'wax_gib'         : 'R',
   'full'            : 'S',
   'wane_cresc'      : 'T',
   'wane_quart'      : 'U',
   'wane_gib'        : 'V',
  'snowflake'        : 'W',
  'tornado'          : 'X',
  'thermometer'      : 'Y',
   'temp_low'        : 'Z',
   'temp_med-low'    : '[',
   'temp_med-high'   : "\\",
   'temp_high'       : ']',
   'temp_full'       : '^',
  'celsius'          : '`',
  'fahrenheit'       : '_',
  'compass'          : 'a',
   'north'           : 'b',
   'east'            : 'c',
   'south'           : 'd',
   'west'            : 'e',
  'umbrella'         : 'f',
  'sunglasses'       : 'g',
  'cloud_refresh'    : 'h',
  'cloud_up'         : 'i',
  'cloud_down'       : 'j'
};

var OWMclimacon= {
// Thunderstorm
  200 : CLIMACON['lightning'], // thunderstorm with light rain
  201 : CLIMACON['lightning'], // thunderstorm with rain
  202 : CLIMACON['lightning'], // thunderstorm with heavy rain
  210 : CLIMACON['lightning'], // light thunderstorm
  211 : CLIMACON['lightning'], // thunderstorm
  212 : CLIMACON['lightning'], // heavy thunderstorm
  221 : CLIMACON['lightning'], // ragged thunderstorm
  230 : CLIMACON['lightning'], // thunderstorm with light drizzle
  231 : CLIMACON['lightning'], // thunderstorm with drizzle
  232 : CLIMACON['lightning'], // thunderstorm with heavy drizzle
// Drizzle
  300 : CLIMACON['drizzle'], // light intensity drizzle
  301 : CLIMACON['drizzle'], // drizzle
  302 : CLIMACON['drizzle'], // heavy intensity drizzle
  310 : CLIMACON['drizzle'], // light intensity drizzle rain
  311 : CLIMACON['drizzle'], // drizzle rain
  312 : CLIMACON['drizzle'], // heavy intensity drizzle rain
  313 : CLIMACON['showers'], // shower rain and drizzle
  314 : CLIMACON['showers'], // heavy shower rain and drizzle
  321 : CLIMACON['showers'], // shower drizzle
// Rain
  500 : CLIMACON['rain'], // light rain
  501 : CLIMACON['rain'], // moderate rain
  502 : CLIMACON['downpour'], // heavy intensity rain
  503 : CLIMACON['downpour'], // very heavy rain
  504 : CLIMACON['downpour'], // extreme rain
  511 : CLIMACON['downpour'], // freezing rain
  520 : CLIMACON['showers'], // light intensity shower rain
  521 : CLIMACON['showers'], // shower rain
  522 : CLIMACON['showers'], // heavy intensity shower rain
  531 : CLIMACON['showers'], // ragged shower rain
// Snow
  600 : CLIMACON['snow'], // light snow
  601 : CLIMACON['snow'], // snow
  602 : CLIMACON['snow'], // heavy snow
  611 : CLIMACON['sleet'], // sleet
  612 : CLIMACON['sleet'], // shower sleet
  615 : CLIMACON['snow'], // light rain and snow
  616 : CLIMACON['snow'], // rain and snow
  620 : CLIMACON['snow'], // light shower snow
  621 : CLIMACON['snow'], // shower snow
  622 : CLIMACON['snow'], // heavy shower snow
// Atmosphere
  701 : CLIMACON['haze'], // mist
  711 : CLIMACON['haze'], // smoke
  721 : CLIMACON['haze'], // haze
  731 : CLIMACON['haze'], // Sand/Dust Whirls
  741 : CLIMACON['fog'], // Fog
  751 : CLIMACON['haze'], // sand
  761 : CLIMACON['haze'], // dust
  762 : CLIMACON['haze'], // VOLCANIC ASH
  771 : CLIMACON['wind'], // SQUALLS
  781 : CLIMACON['tornado'], // TORNADO
// Clouds
  800 : CLIMACON['sun'], // sky is clear
  801 : CLIMACON['cloud_day'], // few clouds
  802 : CLIMACON['cloud_day'], // scattered clouds
  803 : CLIMACON['cloud_day'], // broken clouds
  804 : CLIMACON['cloud'], // overcast clouds
// Extreme
  900 : CLIMACON['tornado'], // tornado
  901 : CLIMACON['tornado'], // tropical storm
  902 : CLIMACON['tornado'], // hurricane
  903 : CLIMACON['temp_low'], // cold
  904 : CLIMACON['temp_high'], // hot
  905 : CLIMACON['wind'], // windy
  906 : CLIMACON['hail'], // hail 
// Additional
  950 : CLIMACON['set'], // Setting
  951 : CLIMACON['sun'], // Calm
  952 : CLIMACON['sun'], // Light breeze
  953 : CLIMACON['sun'], // Gentle Breeze
  954 : CLIMACON['sun'], // Moderate breeze
  955 : CLIMACON['sun'], // Fresh Breeze
  956 : CLIMACON['wind'], // Strong breeze
  957 : CLIMACON['wind'], // High wind, near gale
  958 : CLIMACON['wind'], // Gale
  959 : CLIMACON['wind'], // Severe Gale
  960 : CLIMACON['lightning'], // Storm
  961 : CLIMACON['lightning'], // Violent Storm
  962 : CLIMACON['tornado'], // Hurricane 
};

var OWM_DEFAULT_API_KEY = "";

var configuration = {
  invert: 0,
  light: 1,
  display_sec: 1,
  date_format: "%a, %d.%m.%Y",
  date_format_index: 2,
  time_zone_info: 1,
  vibe_disconnect: 1,
  vibe_full: 0,
  vibe_hour: 0,
  default_loc: "Berlin",
  default_stn: "EDDB",
  autodetect_loc: 1,
  show_update_time: 0,  //should be 0 until something was selected. Default on cofig page is 1.
  moon_phase: 0,
  weatherInfo1: 2,
  weatherInfo2: 1,
  weatherInfo3: 6,
  weatherInfo4: 7,
  weatherInfo5: 4,
  weatherInfo6: 8,
  weatherInfo7: 3,
  weatherInfo8_1: 9,
  weatherInfo8_2: 0,
  weatherInfo8_3: 0,
  weatherUpdateInt: 45,
  lang_id: "en",
  OWM_API_KEY: OWM_DEFAULT_API_KEY
};

var DataJSON_AVWX;
var DataJSON_OWM;
var DataJSON_OWM_forecast;

var xhrRequest = function (url, type, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open(type, url);
  xhr.send();
};

function locationSuccess(pos) {
  console.log("locationSuccess Begin");
  SendToPebble(pos, 0);
}

function locationError(err) {
  console.log("locationError Begin");
  console.log('location error (' + err.code + '): ' + err.message);
  console.log("Error requesting location! Using Default.");
  var pos = {
    coords: {latitude: 0, longitude: 0}
  };
  SendToPebble(pos, 1);
}

function SendToPebble(pos, use_default) {
  var url_AVWX;
  var url_OWM;
  var url_OWM_forecast;
  
  var multiplier = 100;
  var pos_lat = Math.round(multiplier*pos.coords.latitude)/multiplier;
  var pos_lon = Math.round(multiplier*pos.coords.longitude)/multiplier;
  console.log("pos_lat = " + pos_lat);
  console.log("pos_lon = " + pos_lon);
  
  // Construct URL
  console.log("conf.auto_loc = " + configuration.autodetect_loc);
  //configuration.OWM_API_KEY = OWM_DEFAULT_API_KEY; //TODO
  if (typeof configuration.OWM_API_KEY === 'string' || configuration.OWM_API_KEY instanceof String){
    if (configuration.OWM_API_KEY == "default"){
      configuration.OWM_API_KEY = OWM_DEFAULT_API_KEY;
    }
    if (String(configuration.OWM_API_KEY).length < 20){
      configuration.OWM_API_KEY = OWM_DEFAULT_API_KEY;
    }
  } else {
    configuration.OWM_API_KEY = OWM_DEFAULT_API_KEY;
  }
  console.log("Using OWM API KEY: "+configuration.OWM_API_KEY);
  if ((use_default === 0) && (configuration.autodetect_loc)){
    url_OWM = "http://api.openweathermap.org/data/2.5/weather?APPID=" + configuration.OWM_API_KEY + "&lat=" +
        pos_lat + "&lon=" + pos_lon + "&lang=" + configuration.lang_id;
    url_OWM_forecast = "http://api.openweathermap.org/data/2.5/forecast?APPID=" + configuration.OWM_API_KEY + "&lat=" +
        pos_lat + "&lon=" + pos_lon + "&lang=" + configuration.lang_id;
    url_AVWX = "http://avwx.rest/api/metar.php?lat=" +
        pos_lat + "&lon=" + pos_lon + "&format=JSON";
  } else {
    console.log("conf.def_loc = " + configuration.default_loc);
    var city_name_req = configuration.default_loc;
    console.log("conf.def_stn = " + configuration.default_stn);
    var station_name_req = configuration.default_stn;
    // Construct URL
    url_OWM = "http://api.openweathermap.org/data/2.5/weather?APPID=" + configuration.OWM_API_KEY + "&q=" + city_name_req + "&lang=" + configuration.lang_id;
    url_OWM_forecast = "http://api.openweathermap.org/data/2.5/forecast?APPID=" + configuration.OWM_API_KEY + "&q=" + city_name_req + "&lang=" + configuration.lang_id;
    url_AVWX = "http://avwx.rest/api/metar.php?station=" + station_name_req + "&format=JSON";
  }
  
  //UTC:
  var utc_offset = new Date().getTimezoneOffset() * 60;
  console.log("UTC Offset is " + utc_offset);
  
  console.log("url_OWM = " + url_OWM);
  console.log("url_OWM = " + url_OWM_forecast);
  console.log("url_AVWX = " + url_AVWX);
  
  xhrRequest(url_OWM, 'GET', 
    function(responseText) {
      var DataJSON_OWM_error = 0;
      try {
        DataJSON_OWM = JSON.parse(responseText);
        console.log("successfully parsed returned text of OWM data.");
      } catch (e){
        DataJSON_OWM_error = 1;
        console.log("could not parse returned text of OWM data: " + e);
      }
      
      xhrRequest(url_OWM_forecast, 'GET', 
        function(responseText) {
          var DataJSON_OWM_fc_error = 0;
          try {
            DataJSON_OWM_forecast = JSON.parse(responseText);
            console.log("successfully parsed returned text of OWM forecast data.");
          } catch (e){
            DataJSON_OWM_fc_error = 1;
            console.log("could not parse returned text of OWM forecast data: " + e);
          }
        
          xhrRequest(url_AVWX, 'GET', 
            function(responseText) {
              var DataJSON_AVWX_error = 0;
              
              
              /*
              var responseText_replaced_minus = responseText;
              console.log('responseText_replaced_minus = '+ responseText_replaced_minus);
              var i;
              for (i = 0; i<responseText_replaced_minus.length; i++){
                if (responseText_replaced_minus.charAt(i) == '-') responseText_replaced_minus[i] = '_';
              }
              console.log('responseText_replaced_minus = '+ responseText_replaced_minus);
              */
              /*
              console.log('responseText = '+ responseText);
              responseText = responseText.split('-').join('_');
              console.log('responseText = '+ responseText);
              */
              
              try {
                DataJSON_AVWX = JSON.parse(responseText);
                console.log("successfully parsed returned text of AVWX data.");
              } catch (e){
                DataJSON_AVWX_error = 1;
                console.log("could not parse returned text of AVWX data: " + e);
              }
              
              
              //---------------------------------------------------------------------------------------------------
              
              if (!DataJSON_AVWX_error){
                var conditions_icon = 73;
                var sunrise = "--:--";
                var sunset  = "--:--";
                var sunrise_unix = 0;
                var sunset_unix  = 0;
                if (!DataJSON_OWM_error){
                  // Conditions
                  //var conditions = WeatherDataJSON.weather[0].description;
                  //console.log("Conditions are " + conditions);
                  
                  // Location:
                  var location_name = DataJSON_OWM.name;
                  if (use_default){
                    location_name = "*" + location_name + "*";
                  }
                  
                  conditions_icon = OWMclimacon[DataJSON_OWM.weather[0].id].charCodeAt(0);
                  console.log("Conditions icon:  " + conditions_icon);
                  sunrise_unix    = DataJSON_OWM.sys.sunrise;
                  sunset_unix     = DataJSON_OWM.sys.sunset;
                  console.log("sun rise unix = "+sunrise_unix);
                  console.log("sun set  unix = "+sunset_unix);
                  sunrise = timeConverter(Math.round(DataJSON_OWM.sys.sunrise));
                  sunset  = timeConverter(Math.round(DataJSON_OWM.sys.sunset));
                  console.log("sun rise      = " + sunrise);
                  console.log("sun set       = " + sunset);
                  //sunrise_unix = sunrise_unix - utc_offset;
                  //sunset_unix  = sunset_unix  - utc_offset;
                }
  
                
                
                console.log(JSON.stringify(DataJSON_AVWX, null, 2));
                
                console.log("DataJSON_AVWX.Station             --> " + DataJSON_AVWX.Station);
                console.log("DataJSON_AVWX.Temperature         --> " + DataJSON_AVWX.Temperature);
                console.log("DataJSON_AVWX.Altimeter           --> " + DataJSON_AVWX.Altimeter);
                console.log("DataJSON_AVWX.Dewpoint            --> " + DataJSON_AVWX.Dewpoint);
                console.log("DataJSON_AVWX['Cloud-List']       --> " + DataJSON_AVWX["Cloud-List"]);
                console.log("DataJSON_AVWX['Other-List']       --> " + DataJSON_AVWX["Other-List"]);
                console.log("DataJSON_AVWX.Time                --> " + DataJSON_AVWX.Time);
                console.log("DataJSON_AVWX.Units.Altimeter     --> " + DataJSON_AVWX.Units.Altimeter);
                console.log("DataJSON_AVWX.Units.Temperature   --> " + DataJSON_AVWX.Units.Temperature);
                console.log("DataJSON_AVWX.Units['Wind-Speed'] --> " + DataJSON_AVWX.Units["Wind-Speed"]);
                console.log("DataJSON_AVWX['Wind-Speed']       --> " + DataJSON_AVWX["Wind-Speed"]);
                console.log("DataJSON_AVWX['Wind-Direction']   --> " + DataJSON_AVWX["Wind-Direction"]);
                console.log("DataJSON_AVWX.Remarks             --> " + DataJSON_AVWX.Remarks);
              
                // Station:
                var station_name = DataJSON_AVWX.Station;
                if (use_default){
                  station_name = "*" + station_name + "*";
                }
                console.log("location_name = " + location_name);
                console.log("station_name  = " + station_name);
                console.log("LATITUDE      = " + pos.coords.latitude);
                console.log("LONGITUDE     = " + pos.coords.longitude);
                
                
                //METAR infos:
                var wind_info   = DataJSON_AVWX["Wind-Direction"] + "__/" + DataJSON_AVWX["Wind-Speed"] + "" + DataJSON_AVWX.Units["Wind-Speed"];
                var wind_gust   = " ";
                if (DataJSON_AVWX["Wind-Gust"] !== ""){
                  wind_gust   = DataJSON_AVWX["Wind-Gust"] + DataJSON_AVWX.Units["Wind-Speed"];
                }
                var temperature = DataJSON_AVWX.Temperature + "__" + DataJSON_AVWX.Units.Temperature;
                var temp_dew_p  = DataJSON_AVWX.Temperature + "__" + DataJSON_AVWX.Units.Temperature + " (D." + DataJSON_AVWX.Dewpoint + "__)";
                var dew_point   = "D." + DataJSON_AVWX.Dewpoint + "__" + DataJSON_AVWX.Units.Temperature;
                var altimeter   = DataJSON_AVWX.Altimeter + " " + DataJSON_AVWX.Units.Altimeter;
                var otherlist   = DataJSON_AVWX["Other-List"];
                var remarks     = DataJSON_AVWX.Remarks;
                var cloudlist   = DataJSON_AVWX["Cloud-List"];
                var flight_rules = DataJSON_AVWX["Flight-Rules"];
                var runway_vis  = DataJSON_AVWX["Runway-Visibility"];
                var visibility  = DataJSON_AVWX["Visibility"] + DataJSON_AVWX.Units["Visibility"];
                
                
                var temp_color_celsius = DataJSON_AVWX.Temperature;
                if (DataJSON_AVWX.Units.Temperature == "F") {
                  temp_color_celsius = (DataJSON_AVWX.Temperature - 32)*5/9;
                  console.log("Converted from " + DataJSON_AVWX.Temperature + "F to " + temp_color_celsius + "C");
                }
                console.log("temp_color_celsius = " + temp_color_celsius);
                
                //cloudlist = JSON.stringify(cloudlist);
                
                var foo = cloudlist;
                var cloudlist_str = " ";
                var otherlist_str = " ";
                
                var j = 0;
                var key_value_pair;
                for(var i in foo) {
                  key_value_pair = String(foo[i]);
                  key_value_pair = key_value_pair.split(",").join("");
                  console.log("key_value_pair = " + key_value_pair);
                  if (j === 0) cloudlist_str = key_value_pair; else cloudlist_str = cloudlist_str + " " + key_value_pair;
                  j++;
                }
                j = 0;
                foo = otherlist;
                for(var i in foo) {
                  key_value_pair = String(foo[i]);
                  key_value_pair = key_value_pair.split(",").join("");
                  console.log("key_value_pair = " + key_value_pair);
                  if (j === 0) otherlist_str = key_value_pair; else otherlist_str = otherlist_str + " " + key_value_pair;
                  j++;
                }
                
                var time_of_last_data = 0; //time of data on server in Unix Timestamp (UTC !!!)
                ;
                var time_of_last_data_example = 1439136487;
                time_of_last_data = convertAVWXTimeToUnix(DataJSON_AVWX.Time);
                if (!DataJSON_OWM_error){
                  if (configuration.show_update_time == 2){
                    time_of_last_data = Number(DataJSON_OWM.dt);
                  }
                }
                
                
                
                //Additional OWM infos:
                
                // Get Min/Max temp. from forecast:
                var Forecast = {
                  TempMin: 10000, // in Kelvin
                  TempMax:     0  // in Kelvin
                };
                if (!DataJSON_OWM_fc_error){
                  console.log("OWM_forecast_list has " + DataJSON_OWM_forecast.cnt + " elements");
                  var i;
                  for (i = 0; i < Math.min(DataJSON_OWM_forecast.cnt, 8); i++) { // 8 entries means 24 hours for 3 hour forecast
                    console.log("forecast_list[" + i + "].dt_text = "+DataJSON_OWM_forecast.list[i].dt_txt+"; T = " + (DataJSON_OWM_forecast.list[i].main.temp - 273.15) + " C");
                    Forecast.TempMin = Math.min(DataJSON_OWM_forecast.list[i].main.temp, Forecast.TempMin);
                    Forecast.TempMax = Math.max(DataJSON_OWM_forecast.list[i].main.temp, Forecast.TempMax);
                  }
                }
                var OWM_ForecastMinMax = "";
                if ((Forecast.TempMin == 10000) || (Forecast.TempMax === 0)){
                  OWM_ForecastMinMax = " --/-- ";
                } else {
                  if (DataJSON_AVWX.Units.Temperature == "F") {
                    OWM_ForecastMinMax = Math.round((Forecast.TempMax-273.15)*1.8+32) + "__/" + Math.round((Forecast.TempMin-273.15)*1.8+32) + "__F";
                  } else {
                    OWM_ForecastMinMax = Math.round((Forecast.TempMax-273.15)) + "__/" + Math.round((Forecast.TempMin-273.15)) + "__C";
                  }
                }
                console.log("Forecast.TempMin = "+Forecast.TempMin);
                console.log("Forecast.TempMax = "+Forecast.TempMax);
                console.log("OWM_ForecastMinMax = "+OWM_ForecastMinMax);
                
                
                
                var warn_location = 0;
                if (!DataJSON_OWM_error){
                  // Conditions
                  var OWM_conditions = DataJSON_OWM.weather[0].description;
                  console.log("OWM_conditions are: " + OWM_conditions);
                  
                  var OWM_temperature_K = Math.round((DataJSON_OWM.main.temp)) + " K";
                  var OWM_temperature_C = Math.round((DataJSON_OWM.main.temp - 273.15)) + "__C";
                  var OWM_temperature_F = Math.round((DataJSON_OWM.main.temp - 273.15)*1.8+32) + "__F";
                  console.log("OWM_temperature_K = " + OWM_temperature_K);
                  console.log("OWM_temperature_C = " + OWM_temperature_C);
                  console.log("OWM_temperature_F = " + OWM_temperature_F);
                  
                  var OWM_humidity = Math.round(DataJSON_OWM.main.humidity) + " %";
                  console.log("OWM_humidity = " + OWM_humidity);
                  
                  var OWM_pressure_hPa  = Math.round(DataJSON_OWM.main.pressure) + " hPa";
                  var OWM_pressure_mmHg = Math.round(DataJSON_OWM.main.pressure/1.333) + " mmHg";
                  var OWM_pressure_inHg = Math.round(DataJSON_OWM.main.pressure/33.86389*100)/100 + " inHg";
                  console.log("OWM_pressure_hPa  = " + OWM_pressure_hPa);
                  console.log("OWM_pressure_mmHg = " + OWM_pressure_mmHg);
                  console.log("OWM_pressure_inHg = " + OWM_pressure_inHg);
                  
                  var OWM_wind_info_ms  = DataJSON_OWM.wind.speed + " m/s(" + DataJSON_OWM.wind.gust + ") " + DataJSON_OWM.wind.deg + "__";
                  var OWM_wind_info_km  = Math.round(DataJSON_OWM.wind.speed*3.6) + " km/h(" + Math.round(DataJSON_OWM.wind.gust*3.6) + ") " + DataJSON_OWM.wind.deg + "__";
                  var OWM_wind_info_mh  = Math.round(DataJSON_OWM.wind.speed*2.236) + " mph(" + Math.round(DataJSON_OWM.wind.gust*2.236) + ") " + DataJSON_OWM.wind.deg + "__";
                  var OWM_wind_info_kt  = Math.round(DataJSON_OWM.wind.speed*1.944) + " kts(" + Math.round(DataJSON_OWM.wind.gust*1.944) + ") " + DataJSON_OWM.wind.deg + "__";
                  console.log("OWM_wind_info_ms  = " + OWM_wind_info_ms);
                  console.log("OWM_wind_info_km  = " + OWM_wind_info_km);
                  console.log("OWM_wind_info_mh  = " + OWM_wind_info_mh);
                  console.log("OWM_wind_info_kt  = " + OWM_wind_info_kt);
                  
                  
                  
                  if ((configuration.autodetect_loc) && (use_default)){ //tried autodection of location, but could not get the lat long values from phone, so used default location set by the user.
                    warn_location = 1;
                    console.log("Tried autodection of location, but could not get the lat long values from phone.");
                  } 
                  if ((configuration.autodetect_loc === 0) && (use_default === 0)){ //detected location, but used user input
                    console.log("Could autodect location, but used user input instead.");
                    console.log(" |lat_autodetect - user_lat| = " + Math.abs(DataJSON_OWM.coord.lat - pos_lat));
                    console.log(" |lon_autodetect - user_lon| = " + Math.abs(DataJSON_OWM.coord.lon - pos_lon));
                    console.log("pos_lat                   = " + pos_lat);
                    console.log("DataJSON_OWM.coord.lat = " + DataJSON_OWM.coord.lat);
                    console.log("pos_lon                   = " + pos_lon);
                    console.log("DataJSON_OWM.coord.lon = " + DataJSON_OWM.coord.lon);
                    if ((Math.abs(DataJSON_OWM.coord.lat - pos_lat) > 0.3) && (Math.abs(DataJSON_OWM.coord.lon - pos_lon) > 0.5)){
                      console.log("User input location differs from autodeteced location.");
                      warn_location = 1;
                    }
                  }
                }
                
                
                
                var WeatherInfoList = [
                  "",             // i =  0
                  location_name,  // i =  1
                  station_name,   // i =  2
                  wind_info,      // i =  3
                  wind_gust,      // i =  4
                  temperature,    // i =  5
                  temp_dew_p,     // i =  6
                  dew_point,      // i =  7
                  cloudlist_str,  // i =  8
                  otherlist_str,  // i =  9
                  altimeter,      // i = 10
                  remarks,        // i = 11
                  flight_rules,   // i = 12
                  runway_vis,     // i = 13
                  visibility,     // i = 14
                  OWM_ForecastMinMax, // i = 15
                  OWM_conditions,     // i = 16
                  OWM_temperature_K,  // i = 17
                  OWM_temperature_C,  // i = 18
                  OWM_temperature_F,  // i = 19
                  OWM_humidity,       // i = 20
                  OWM_pressure_hPa,   // i = 21
                  OWM_pressure_mmHg,  // i = 22
                  OWM_pressure_inHg,  // i = 23
                  OWM_wind_info_ms,   // i = 24
                  OWM_wind_info_km,   // i = 25
                  OWM_wind_info_mh,   // i = 26
                  OWM_wind_info_kt    // i = 27
                ];
                
                var max_index = 27;
                
                if (configuration.weatherInfo1 < 0) configuration.weatherInfo1 = 0;
                if (configuration.weatherInfo2 < 0) configuration.weatherInfo2 = 0;
                if (configuration.weatherInfo3 < 0) configuration.weatherInfo3 = 0;
                if (configuration.weatherInfo4 < 0) configuration.weatherInfo4 = 0;
                if (configuration.weatherInfo5 < 0) configuration.weatherInfo5 = 0;
                if (configuration.weatherInfo6 < 0) configuration.weatherInfo6 = 0;
                if (configuration.weatherInfo7 < 0) configuration.weatherInfo7 = 0;
                if (configuration.weatherInfo8_1 < 0) configuration.weatherInfo8_1 = 0;
                if (configuration.weatherInfo8_2 < 0) configuration.weatherInfo8_2 = 0;
                if (configuration.weatherInfo8_3 < 0) configuration.weatherInfo8_3 = 0;
                if (configuration.weatherInfo1 > max_index) configuration.weatherInfo1 = max_index;
                if (configuration.weatherInfo2 > max_index) configuration.weatherInfo2 = max_index;
                if (configuration.weatherInfo3 > max_index) configuration.weatherInfo3 = max_index;
                if (configuration.weatherInfo4 > max_index) configuration.weatherInfo4 = max_index;
                if (configuration.weatherInfo5 > max_index) configuration.weatherInfo5 = max_index;
                if (configuration.weatherInfo6 > max_index) configuration.weatherInfo6 = max_index;
                if (configuration.weatherInfo7 > max_index) configuration.weatherInfo7 = max_index;
                if (configuration.weatherInfo8_1 > max_index) configuration.weatherInfo8_1 = max_index;
                if (configuration.weatherInfo8_2 > max_index) configuration.weatherInfo8_2 = max_index;
                if (configuration.weatherInfo8_3 > max_index) configuration.weatherInfo8_3 = max_index;
                
                var WeatherInfoStr_1   = WeatherInfoList[configuration.weatherInfo1];
                var WeatherInfoStr_2   = WeatherInfoList[configuration.weatherInfo2];
                var WeatherInfoStr_3   = WeatherInfoList[configuration.weatherInfo3];
                var WeatherInfoStr_4   = WeatherInfoList[configuration.weatherInfo4];
                var WeatherInfoStr_5   = WeatherInfoList[configuration.weatherInfo5];
                var WeatherInfoStr_6   = WeatherInfoList[configuration.weatherInfo6];
                var WeatherInfoStr_7   = WeatherInfoList[configuration.weatherInfo7];
                var WeatherInfoStr_8_1 = WeatherInfoList[configuration.weatherInfo8_1];
                var WeatherInfoStr_8_2 = WeatherInfoList[configuration.weatherInfo8_2];
                var WeatherInfoStr_8_3 = WeatherInfoList[configuration.weatherInfo8_3];
                
                console.log("WeatherInfoStr_1   = " + WeatherInfoStr_1);
                console.log("WeatherInfoStr_2   = " + WeatherInfoStr_2);
                console.log("WeatherInfoStr_3   = " + WeatherInfoStr_3);
                console.log("WeatherInfoStr_4   = " + WeatherInfoStr_4);
                console.log("WeatherInfoStr_5   = " + WeatherInfoStr_5);
                console.log("WeatherInfoStr_6   = " + WeatherInfoStr_6);
                console.log("WeatherInfoStr_7   = " + WeatherInfoStr_7);
                console.log("WeatherInfoStr_8_1 = " + WeatherInfoStr_8_1);
                console.log("WeatherInfoStr_8_2 = " + WeatherInfoStr_8_2);
                console.log("WeatherInfoStr_8_3 = " + WeatherInfoStr_8_3);
                  
                    
                var weather_Line_1 = WeatherInfoStr_1 + " " + WeatherInfoStr_2;
                var weather_Line_2 = WeatherInfoStr_5;
                var weather_Line_3 = WeatherInfoStr_6 + "\n" + WeatherInfoStr_7;
                var weather_Line_4 = WeatherInfoStr_3 + " " + WeatherInfoStr_4;
                var weather_Line_5 = WeatherInfoStr_8_1 + " " + WeatherInfoStr_8_2 + " " + WeatherInfoStr_8_3;
                var weather_Line_6 = "";
                var weather_Line_7 = "";
                var weather_Line_8 = "";
                var weather_Line_9 = "";
                
                console.log("weather_Line_1 = " + weather_Line_1);
                console.log("weather_Line_2 = " + weather_Line_2);
                console.log("weather_Line_3 = " + weather_Line_3);
                console.log("weather_Line_4 = " + weather_Line_4);
                console.log("weather_Line_5 = " + weather_Line_5);
                console.log("weather_Line_6 = " + weather_Line_6);
                console.log("weather_Line_7 = " + weather_Line_7);
                console.log("weather_Line_8 = " + weather_Line_8);
                console.log("weather_Line_9 = " + weather_Line_9);
                
                var dictionary = {
                  "KEY_WEATHER_AVWX_STRING_1":  weather_Line_1,
                  "KEY_WEATHER_AVWX_STRING_2":  weather_Line_2,
                  "KEY_WEATHER_AVWX_STRING_3":  weather_Line_3,
                  "KEY_WEATHER_AVWX_STRING_4":  weather_Line_4,
                  "KEY_WEATHER_AVWX_STRING_5":  weather_Line_5,
                  //"KEY_WEATHER_AVWX_STRING_6":  weather_Line_6,
                  //"KEY_WEATHER_AVWX_STRING_7":  weather_Line_7,
                  //"KEY_WEATHER_AVWX_STRING_8":  weather_Line_8,
                  //"KEY_WEATHER_AVWX_STRING_9":  weather_Line_9,
                  "KEY_WEATHER_DATA_TIME": time_of_last_data,
                  "KEY_LOCATION_LAT": Math.round(pos.coords.latitude*1000000),
                  "KEY_LOCATION_LON": Math.round(pos.coords.longitude*1000000),
                  "KEY_WEATHER_ICON": conditions_icon,
                  "KEY_TIME_UTC_OFFSET": utc_offset,
                  "KEY_TIME_ZONE_NAME": getTimeZone(),
                  "KEY_SUN_RISE": sunrise,
                  "KEY_SUN_SET": sunset,
                  "KEY_WEATHER_TEMP": Number(temp_color_celsius),
                  "KEY_SUN_RISE_UNIX": sunrise_unix,
                  "KEY_SUN_SET_UNIX": sunset_unix, //both converted to local time zone
                  "KEY_WARN_LOCATION": warn_location
                }
                
                console.log("dictionary assembled");
                
              
                /*
                if (CLOUDPEBBLE) {
                  weather_string_1 = (weather_string_1.replace('°', '__')).replace('°', '__');
                  weather_string_2 = (weather_string_2.replace('°', '__')).replace('°', '__');
                }
                
                // Assemble dictionary using our keys
                var dictionary = {
                  "KEY_LOCATION_NAME": location_name,
                  "KEY_LOCATION_LAT": Math.round(pos.coords.latitude*1000000),
                  "KEY_LOCATION_LON": Math.round(pos.coords.longitude*1000000),
                  "KEY_WEATHER_TEMP": temperature,
                  "KEY_WEATHER_STRING_1": weather_string_1,
                  "KEY_WEATHER_STRING_2": weather_string_2,
                  "KEY_WEATHER_ICON": conditions_icon,
                  "KEY_TIME_UTC_OFFSET": utc_offset,
                  "KEY_TIME_ZONE_NAME": getTimeZone(),
                  "KEY_SUN_RISE": sunrise,
                  "KEY_SUN_SET": sunset
                };
                */
              
                // Send to Pebble
                console.log("Sending Weather Info to Pebble ...");
                
                Pebble.sendAppMessage(dictionary,
                                      function(e) {
                                        console.log("Weather info sent to Pebble successfully!");
                                      },
                                      function(e) {
                                        console.log("Error sending weather info to Pebble!");
                                      }
                                     );
              } //end: if (!DataJSON_AVWX_error)
              var date = new Date();
              console.log("Time is " + date);
              
              DataJSON_AVWX = {};
              DataJSON_OWM  = {};
              DataJSON_OWM_forecast = {};
              
              
              //---------------------------------------------------------------------------------------------------
            }
          ); //req. AVWX data
        }
      ); //req. OWM forecast
    }
  ); //req. OWM data
}

function getTimeZone() {
    return /\((.*)\)/.exec(new Date().toString())[1];
}



function timeConverter(UNIX_timestamp){
  
  var a = new Date(UNIX_timestamp*1000);
  var year = a.getFullYear();
  var month = pad(a.getMonth()+1);
  var date = pad(a.getDate());
  var hour = pad(a.getHours());
  var min = pad(a.getMinutes());
  var sec = pad(a.getSeconds());
  var time = hour + ':' + min;
  console.log("timeConverter: "+year+" "+month+" "+date+" "+hour+" "+min+" "+sec);
  
  /*
  var t = new Date(UNIX_timestamp*1000);
  var log = t.format("dd.mm.yyyy hh:MM:ss");
  console.log("timeConverter: "+log);
  var time = t.format("hh:MM");
  */
  return time;
}

function convertAVWXTimeToUnix(t){
  var result = 0;
  
  console.log(" --- convertAVWXTimeToUnix: ---");
  var input_date = t[0] + t[1];
  var input_hour = t[2] + t[3];
  var input_min  = t[4] + t[5];
  console.log("input_date = " + input_date);
  console.log("input_hour = " + input_hour);
  console.log("input_min  = " + input_min);
  
  var now = new Date();
  var year = now.getFullYear();
  var month = pad(now.getMonth()+1);
  var date = pad(now.getDate());
  var hour = pad(now.getHours());
  var min = pad(now.getMinutes());
  var sec = pad(now.getSeconds());
  
  var now_yesterday = new Date(Date.now() + - 24*3600*1000); // now - one day
  var year1 = now_yesterday.getFullYear();
  var month1 = pad(now_yesterday.getMonth()+1);
  var date1 = pad(now_yesterday.getDate());
  
  if (date != input_date){
    console.log("Data is not from today");
    if (date1 != input_date){
      console.log("Data is also not from yesterday. Return 0.");
      return 0; // data is too old
    } else {
      year = year1;
      month = month1;
      date = date1;
    }
  }
  
  console.log("Converting Time: " + year + "-" + month + "-" + date + " " + input_hour + ":" + input_min);
  var utc_offset = new Date().getTimezoneOffset() * 60; //input_hour is in UTC already, and new Date() converts it to UTC internally, so we must give it a local time 
  console.log("convert_time: utc_offset = " + utc_offset); //utc_offset is -7200 sec in UTC+2 time zone
  var result = Math.round(Number(new Date(year,month-1,date,input_hour,input_min))/1000) - utc_offset; //in unix timestamp (seconds) and in UTC! 
  
  console.log("result = " + result);
  
  return result;
}

function pad(input) {
    //var BASE = "00";
    //return input ? BASE.substr(0, 2 - Math.ceil(input / 10)) + input : BASE;
  if (input < 10){
    return ('0' + input);
  } else return input;
}



function getWeather() {
  
  
  if (window.localStorage.getItem("configuration")){
    console.log("read config start");
    configuration = JSON.parse(window.localStorage.configuration);
    //var test = JSON.parse(window.localStorage.configuration);
    console.log("loaded config = " + JSON.stringify(configuration, null, 2));
    console.log("read config finished");
  } else {
    console.log("error reading config from localStorage");
  }
  
  //console.log("reading config from localStorage REMOVED!!!");
  
  console.log("getWeather Begin");
  var options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
  };
  navigator.geolocation.getCurrentPosition(    //could also use navigator.geolocation.watchPosition() ?
    locationSuccess,
    locationError,
    options
  );
  console.log("getWeather End");
}

// Listen for when the watchface is opened
Pebble.addEventListener('ready', 
  function(e) {
    console.log("PebbleKit JS ready!");

    //var i;
    //for (i=0; i<12; i++) console.log(pad(i));
    
    // Get the initial weather
    //getWeather();
  }
);

// Listen for when an AppMessage is received
Pebble.addEventListener('appmessage',
  function(e) {
    console.log("AppMessage received!");
    getWeather();
  }
);

Pebble.addEventListener("showConfiguration",
  function(e) {
    //Load the remote config page
    
    /* --> */ Pebble.openURL("https://googledrive.com/host/0B3ivuMdwFLKzfnRGRFRHaXdJbGVRd0FsUElteEVybVZhSHBjM3YzQWRwa0loYUVqaG1JaWM/pebble_m7s_metar_config_v2_0.html");
    
    //TODO: send some usefull values to the settings page (e. g. location, battery staistics etc.) by adding ?xxx to the URL
  }
);

Pebble.addEventListener("webviewclosed",
  function(e) {
    //Get JSON dictionary
    configuration = JSON.parse(decodeURIComponent(e.response));
    var configuration_str = JSON.stringify(configuration);
    console.log("Configuration window returned: " + JSON.stringify(configuration, null, 2));

    if (configuration_str.charAt(0) == "{" && configuration_str.slice(-1) == "}" && configuration_str.length > 5) {
    
      window.localStorage.configuration = JSON.stringify(configuration);
      
      
      if (typeof configuration.OWM_API_KEY === 'string' || configuration.OWM_API_KEY instanceof String){
        if (configuration.OWM_API_KEY == "default"){
          configuration.OWM_API_KEY = OWM_DEFAULT_API_KEY;
        }
        if (String(configuration.OWM_API_KEY).length < 10){
          configuration.OWM_API_KEY = OWM_DEFAULT_API_KEY;
        }
      } else {
        configuration.OWM_API_KEY = OWM_DEFAULT_API_KEY;
      }
      
   
      //Send to Pebble, persist there
      var InvertColors = configuration.invert;
      console.log("InvertColors    = " + InvertColors);
      var LightOn = configuration.light;
      console.log("LightOn         = " + LightOn);
      var DisplaySeconds = configuration.display_sec;
      console.log("DisplaySeconds  = " + DisplaySeconds);
      
      var date_format_str = configuration.date_format; //"%a, %m.%d.%y";
      date_format_str = date_format_str.split('_').join('%');
      console.log("DEBUG: date_format     = " + configuration.date_format + "; date_format_str = " + date_format_str);
      
      
      Pebble.sendAppMessage(
        {
          "KEY_SET_INVERT_COLOR": InvertColors,
          "KEY_SET_LIGHT_ON": LightOn,
          "KEY_SET_DISPLAY_SEC": DisplaySeconds,
          "KEY_SET_VIBE_DISC": configuration.vibe_disconnect,
          "KEY_SET_VIBE_FULL": configuration.vibe_full,
          "KEY_SET_VIBE_HOUR": configuration.vibe_hour,
          
          "KEY_SET_DATE_FORMAT": date_format_str,
          "KEY_WEATHER_UPDATE_INT": configuration.weatherUpdateInt,
          "KEY_SET_TZ_FORMAT": configuration.time_zone_info,
          "KEY_SET_UPDATE_TIME": configuration.show_update_time,
          "KEY_SET_MOON_PHASE": configuration.moon_phase,
         
          "KEY_SET_LANG_ID": configuration.lang_id,
          "KEY_SET_LABEL_INDEX_1": configuration.weatherInfo1,
          "KEY_SET_LABEL_INDEX_2": configuration.weatherInfo2,
          "KEY_SET_LABEL_INDEX_3": configuration.weatherInfo3,
          "KEY_SET_LABEL_INDEX_4": configuration.weatherInfo4,
          "KEY_SET_LABEL_INDEX_5": configuration.weatherInfo5,
          "KEY_SET_LABEL_INDEX_6": configuration.weatherInfo6,
          "KEY_SET_LABEL_INDEX_7": configuration.weatherInfo7,
          "KEY_SET_LABEL_INDEX_8": configuration.weatherInfo8
          
        },
        function(e) {
          console.log("Settings data transfered successfully.");
        },
        function(e) {
          console.log("Settings feedback failed!");
        }
      );
    } else {
      console.log("Settings page cancelled.");
    }
  }
);

