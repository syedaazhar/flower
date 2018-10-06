// Write all your Javascript here!

function showContant( urlLink) {

  
    


    $.ajax({
        url: 'https://techkaro-test.herokuapp.com/api/v1/getdata?lang='+urlLink,

        success: function (data) {
            document.querySelector('.main-img').style = `background-image:url(${data.imageURL})`;
            document.querySelector('.flower-detail h4').innerHTML = data.info.heading;
            document.querySelector('.flower-detail p').innerHTML = data.info.description;
            document.querySelector('.sale-contain h4').innerHTML = data.sale.heading;
            document.querySelector('.sale-contain p').innerHTML = data.sale.description;

             let year =new Date(data.date);
            document.querySelector('.month').innerHTML =parseInt(year.getFullYear())
            let hearderEl =  document.querySelector('header');
            hearderEl.innerHTML=
            `<nav class="navbar navbar-expand-lg navbar-dark bg-dark main-nav">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">${data.menuOptions[0]}<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">${data.menuOptions[1]}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">${data.menuOptions[2]}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">${data.menuOptions[3]}</a>
                    </li>
                </ul>
            </div>
        </nav>`
           
        }
    })
};






