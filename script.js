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

            let date =new Date(data.date);
            var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

            document.querySelector('.full-date').innerHTML=`${months[date.getMonth()]} 
                                                            ${parseInt(date.getDate())}, 
                                                            ${parseInt(date.getFullYear())} - 
                                                            ${parseInt(date.getHours())}h 
                                                            ${parseInt(date.getMinutes())}m`;
        
            let hearderEl =  document.querySelector('.navbar-nav');
            hearderEl.innerHTML = " ";
            for(let i=0;i<4;i++){

                hearderEl.innerHTML+=
            `
                    <li class="nav-item">
                        <a class="nav-link" href="#">${data.menuOptions[i]}<span class="sr-only">(current)</span></a>
                    </li>`
            }
           
        }
    })
};






