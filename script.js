
	var title = document.querySelector('.title');
        var counter = document.querySelector('.counter');
        var sehriSet = [
            "0:0","3:39","3:39","3:39","3:39","3:39","3:39",
            "3:52","3:51","3:50","3:50","3:49",
            "3:49","3:48","3:48","3:47","3:47",
            "3:46","3:46","3:45","3:44","3:44",
            "3:43","3:43","3:42","3:42","3:41",
            "3:41","3:40","3:40","3:40","3:39",
	    "3:39"
        ];
        var iftarSet = [
            "0:0","18:45","18:46","18:46","18:46","18:47","18:47",
            "18:47","18:34","18:34","18:35","18:35",
            "18:36","18:36","18:36","18:37","18:37",
            "18:38","18:38","18:39","18:39","18:40",
            "18:40","18:41","18:42","18:42","18:42",
            "18:43","18:43","18:44","18:44","18:45",
            "18:45"
        ];

        setInterval(function () {
            var today = new Date();
            var curDate = today.getDate();
            var curTime = today.getHours()*60*60+ today.getMinutes()*60+today.getSeconds();

            var checkIftar = iftarSet[curDate].split(":");
            var checkSehri = sehriSet[curDate].split(":");
            var timeIftar = checkIftar[0]*60*60 + checkIftar[1]*60;
            var timeSehri = checkSehri[0]*60*60 + checkSehri[1]*60;
            
            if (timeSehri<timeIftar && timeSehri>curTime && timeSehri>=0){
                checkSehriTime(curDate, curTime);
            }
            else if (timeSehri<timeIftar && timeIftar<curTime) {
                checkSehriTime(curDate, curTime);
            }
            else {
                checkIftarTime(curDate, curTime);
            }

        },1000);


    function checkIftarTime(todayDate, curTime) {
        var time = iftarSet[todayDate].split(":");
        var setTime = time[0]*60*60 + time[1]*60;
        var diffTime = setTime - curTime;
        if (diffTime<setTime && diffTime>=0){
            title.innerHTML = " ইফতারের সময় বাকি ";
            counter.innerHTML = printTimer(diffTime);
        }
    }

    function checkSehriTime(todayDate, curTime) {
        var time = sehriSet[todayDate].split(":");
        var setTime = time[0]*60*60 + time[1]*60;
        var diffTime = setTime - curTime;

        if (diffTime<setTime && diffTime>=0){
            title.innerHTML = " সেহেরীর সময় বাকি ";
            counter.innerHTML = printTimer(diffTime);
        }
        else {
            var lastTime = setTime+24*60*60;
            var sehriEnd = lastTime - curTime;
            title.innerHTML = " সেহেরীর সময় বাকি ";
            counter.innerHTML = printTimer(sehriEnd);
        }
    }



    function printTimer(sec) {
        hr = Math.floor(sec / 3600) % 24;
        mm = Math.floor(sec / 60) % 60;
        ss = sec % 60;

        var x = hr < 10? "0"+hr : hr;
        var y = mm < 10? "0"+mm : mm;
        var z = ss < 10? "0"+ss : ss;
        return ( x+":"+y+":"+z)
    }
