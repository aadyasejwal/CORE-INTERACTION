
    var clock = document.querySelector('#clock');


    function tick() {

        var now = new Date();        
        var h = now.getHours();       
        var m = now.getMinutes();     
        var s = now.getSeconds();     

        
        var hh = String(h).padStart(2, '0');
        var mm = String(m).padStart(2, '0');
        var ss = String(s).padStart(2, '0');

        clock.textContent = hh + ':' + mm + ':' + ss;


        if (h < 6 ) {
            document.body.style.backgroundImage = "url('night1.jpg')";
            document.body.style.color = 'white';
            document.body.style.margin = '100vh';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center center";
        } else if (h < 11 ) {
            document.body.style.backgroundImage = "url('sunrise1.jpg')";
            document.body.style.color = 'orange';
            document.body.style.margin = '100vh';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center center";
        } else if (h < 16) {
            document.body.style.backgroundImage= "url('day1.jpg')";
            document.body.style.color = 'yellow';
           document.body.style.margin = '100vh';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center center";
        } 
        else if (h < 16.5) {
            document.body.style.backgroundImage= "url('sunset1.jpg')";
            document.body.style.color = 'red';
            document.body.style.margin = '100vh';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center center";
        } else {
            document.body.style.backgroundImage = "url('night1.jpg')";
            document.body.style.color = 'white';
            document.body.style.margin = '0';
            document.body.style.margin = '100vh';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center center";
        }
    }

// STEP 4: Run tick once now, then again every 1000 milliseconds (1 second).
    // tick();
    setInterval(tick, 1000);