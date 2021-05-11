(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let birthday = "May 26, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
              if(distance<1000)
              {
                window.location.replace("/live.html");
              }
              let d=Math.floor(distance / (day))
              if(d<10)
              {
                  d="0"+d
              }
              let h=Math.floor((distance % (day)) / (hour))

              if(h<10)
              {
                  h="0"+h
              }
              let m=Math.floor((distance % (hour)) / (minute))
              if(m<10)
              {
                  m="0"+m
              }
              let s=Math.floor((distance % (minute)) / second)
              if(s<10)
              {
                  s="0"+s
              }
  
          document.getElementById("days").innerText = d,
            document.getElementById("hours").innerText = h,
            document.getElementById("minutes").innerText = m,
            document.getElementById("seconds").innerText = s;
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            headline.innerText = "It's my birthday!";
            countdown.style.display = "none";
            content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());