$(function() {
        
    $("#submit").on("click", function(e) {
        e.preventDefault()
        // var $Category = $("Category")
        // var $ImageURL = $("#ImageURL")
        // var $Address = $("#Address")
       
        var hotels = {
            category: $('#category').val(),
            imageUrl: $('#imageUrl').val(),
            address: $('#address').val(),
             
        }
        $.ajax({
            method: "POST",
            data: JSON.stringify(hotels),
            dataType: 'json',
            contentType: 'application/json',
            url: "http://localhost:3000/hotels",
            success: function(data) {
                console.log(data)
            },
            error: function(err) {
                console.log(err)
            }
        })
    })
})


// example
$('#search-btn').on('click', () => {
    let s = {
        searchParam: $('#search-field').val()
    }

    $.ajax({
        type: 'post',
        url: 'localhost:3000/hotels',
        data: JSON.stringify(s),
        dataType: 'json',
        contentType: 'application/json',
        success: (data) => {
            for (let i in data) {
                if (data[i] === s.searchParam) {
                    // happenings
                    $("#meals").empty();
                    let address = data[i].address;
                    let imageUrl = data[i].imageUrl;
                    let name = data[i].name;

                    var result = `
                    <div class="bottom-container-image">
                    <p>Up to 40% off</p>
                    <p>${name}</p>
                    <img src="${imageUrl}" alt="hotelimg1">
                        <div>
                            <p class="food">${address}</p>
                            <a href="">view hotel</a>
                            <p>Monday - June 10, 2019</p>
                        </div>
                    </div>`

                    $("main").append(result);
                }
            }
        },
        error: (e) => console.log(e)
    })
})

