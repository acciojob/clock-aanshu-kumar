       let count=0;
        let timer=document.getElementById("timer");
        function displayClock()
        {
            let d=new Date()
            let dd=d.getDate()
            let mm=d.getMonth()
            let yyyy = d.getFullYear();
            let hh=d.getHours();
            let min=d.getMinutes();
            let ss=d.getSeconds()

            timer.innerHTML = `${mm}/${dd}/${yyyy},${hh}:${min<10? ("0"+min):min}:${ss} ${hh>=12?"PM":"AM"}`
        }
        setInterval(displayClock,1000);