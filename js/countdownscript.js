// Set the date we're counting down to
var countDownDate = new Date("Oct 24, 2022").getTime();
// new Date("Oct 24, 2022").getTime();
// new Date("Nov 14, 2022").getTime();
// new Date("Nov 25, 2022").getTime();
// new Date("Dec 25, 2022").getTime();
// new Date("Dec 31, 2022").getTime();
// new Date("Jan 1, 2023").getTime();

//Dussehra
//(today.getDate() == 5 && today.getMonth() == 9) ||
//Diwali
//(today.getDate() == 24 && today.getMonth() == 9) ||
//Children's day
//(today.getDate() == 14 && today.getMonth() == 10) ||
//Black Friday
//(today.getDate() == 25 && today.getMonth() == 10) ||
//Christmas
//(today.getDate() == 25 && today.getMonth() == 11) ||
//New year
//(today.getDate() == 31 && today.getMonth() == 11) ||
//(today.getDate() == 1 && today.getMonth() == 0)

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days < 7 && days > -2) {
        document.getElementById("counter").innerHTML = "Sale on Ebook in <br>" + days + " days ";
        if (days == 0) {
            document.getElementById("counter").innerHTML = "Sale on Ebook in <br>" + hours + "h " +
                minutes + "m " + seconds + "s ";
        } else {
            if (days == -1) {
                clearInterval(x);
                document.getElementById("counter").innerHTML = "50% off now! <br>"
            }
        }
    }

}, 1000);