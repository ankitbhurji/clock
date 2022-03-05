showtime=()=>{
    var date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    session = "AM";

    if(h>12){
        h = h-12;
        session = "PM";
    }
    if(h==0){
        h = 12;
    }


    if(h<10){
        h = "0"+h;
    }
    if(m<10){
        m = "0"+m;
    }
    if(s<10){
        s = "0"+s
    }
    //or above code can write with given format
    // h=(h<10)?"0"+h:h;
    // m=(m<10)?"0"+m:m;
    // s=(s<10)?"0"+s:s;

    
    // document.getElementById("clock").innerHTML=`${h} : ${m} : ${s}` ;
    document.getElementById("clock_hours").innerHTML = h;
    document.getElementById("clock_minutes").innerHTML = m;
    document.getElementById("clock_seconds").innerHTML = s; 
    setTimeout(showtime, 1000);
}
showtime();



anime({
    targets: 'div',
    keyframes: [
    //   {translateY: -40},
      {translateX: 50},
      {translateY: 50},
      {translateX: -60},
      {translateY: 0}
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
  });