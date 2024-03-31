function dateArea(){
    var dateDay = new Date().getDate();
    var d = new Date();
    var dateMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var dateName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    document.querySelector(".day").innerHTML=dateDay;
    document.querySelector(".month").innerHTML=dateMonth[d.getMonth()];
    document.querySelector(".day-name").innerHTML=dateName[d.getDay()];
  }
  
  setInterval(dateArea, 1000);
  
  function clockArea(){
    var hoursArea = new Date().getHours();
    var minutesArea = new Date().getMinutes();
    var clockArea = hoursArea + ":" + minutesArea;
    
    if(hoursArea<10){
      var clockArea = "0" + hoursArea + ":" + minutesArea;
    } else if(minutesArea<10){
      var clockArea = hoursArea + ":0" + minutesArea;
    } else{
      var clockArea = hoursArea + ":" + minutesArea;
    }
    document.querySelector(".clock-area").innerHTML = clockArea;
  }
  
  setInterval(clockArea, 1000);
  
  var ntf = document.querySelector(".bell");
  var ntfBell = document.querySelector(".sound");
  var ntfBellSlash = document.querySelector(".quiet");
  var dynamicIsland = document.querySelector(".dynamic-island");
  var bellAnmArea = document.querySelector(".bell-animation-area");
  var bellAnm = document.querySelector(".bell-animation");
  
  var spotify = document.querySelector(".spotify");
  
  var dynamicVolume = document.querySelector(".bi-soundwave");
  var geoIcon = document.querySelector(".bi-geo-alt-fill");
  var fuelArea = document.querySelector(".fuel-area");
  var fuelWidgetIcon = document.querySelector(".fuelWidgetIcon");
  

  

  var oynat=document.getElementById("oynat");
  var ses=document.getElementById("ses");

  //what to do when range object is changed for audio setting
  /* ses.oninput=function(){
    sarki.volume =ses.value/100;
  }
  */
