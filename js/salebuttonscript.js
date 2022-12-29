var today = new Date();
var element = document.getElementById('salebutton')
if (
    //Fixed holidays
    //Republic day
    (today.getDate() == 26 && today.getMonth() == 0) ||
    //Valentine's day
    (today.getDate() == 14 && today.getMonth() == 1) ||
    //Birthday 
    (today.getDate() == 19 && today.getMonth() == 4) ||
    //Independence day
    (today.getDate() == 14 && today.getMonth() == 7) ||
    //Children's day
    (today.getDate() == 14 && today.getMonth() == 10) ||
    //Black Friday
    (today.getDate() == 25 && today.getMonth() == 10) ||
    //Christmas
    (today.getDate() == 25 && today.getMonth() == 11) ||
    //New year
    (today.getDate() == 31 && today.getMonth() == 11) ||
    (today.getDate() == 1 && today.getMonth() == 0)
) {
    element.innerHTML = `<h5> &nbsp;&nbsp;&nbsp; Sale - Rs 349
    </h5>

    You save: Rs 350 (50%) No hidden charges
    <br><br>
    <div class='pm-button' style=" width: 220px; margin: auto;">
        <a href="https://pmny.in/DrqE6Ryu5IyY" target="_blank">

            <button style="border-radius: 25px" class="normal_button">
                <img src="gifs/download.gif" alt="this slowpoke moves" style="text-align: center; margin: auto;"  width="25px" />
                <br>
                <h6>Buy Now</h6>
            </button>
            <br> Secure Transaction
            <br>
            <br>
        </a>
    </div>`;
} else {
    element.innerHTML = `<h5> &nbsp;&nbsp;&nbsp; Deal of the Day - Rs 499
    </h5>

    You save: Rs 200 (29%) No hidden charges
    <br><br>
    <div class='pm-button' style=" width: 220px; margin: auto;">
        <a href="https://pmny.in/cIvhabd4PoOL" target="_blank">

            <button style="border-radius: 25px" class="normal_button">
                <img src="gifs/download.gif" alt="this slowpoke moves" style="text-align: center; margin: auto;"  width="25px" />
                <br>
                <h6>Buy Now</h6>
            </button>
            <br> Secure Transaction
            <br>
            <br>
        </a>
    </div>`;
}