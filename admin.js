$(function() {
      
//ADMIN SIGN IN
$(document).ready(function () {

        
    $("#signup-btn").on("click", function(e) {
        e.preventDefault()
        var $user = $("#username").val();
        var $password = $("#password").val();
        if($user == "" || $password == ""){
            alert("please fill all field");
            //return;
        }
        
        
        console.log(password);
        $.ajax({
            method: "GET",
            url: "http://localhost:3000/admin"
        }).done(function (data) {
            if (data.length > 0){
                for(var i=0; data.length > i; i++ ){
                    if(data[i].adminId == $user && data[i].password == $password){
                        window.location="main-admin.html";
                    }
                }
            }
            
            $("#error").show();
        });  
    });

});
     








                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%
                //  GET A SINGLE HOTEL FOR LISTING
                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%

















               // %%%%%%%%%%%%%%%%%%%%%%%%%%%%
                //  UPDATE A HOTEL LISTING
                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%






















                          





                    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%
                //  UPDATE A HOTEL LISTING
                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%              

                var updatehotel = `<button id="button">update</button>`;













                 

                  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%
                //  DELETE A HOTEL LISTING
                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%      
                var deletehotel = `<button id="button">delete</button>`;
                
                $('#button').on('click', () => {
                    console.log("its working");
                    var id = $(this).parent().attr('id');
                    $.ajax({
                        type: 'DELETE',
                        dataType: 'json',
                        contentType: 'application/json',
                        url: 'localhost:3000/hotels/' + id,
                        success: (data) => {
                            console.log('deleted', data)
                        },
                        error: (e) => {
                            console.log(e)
                        }
                    })
                })

         // %%%%%%%%%%%%%%%%%%%%%%%%%%%%
                //  READ ALL HOTELS LISTING
                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      
    let getHotels = () => {
        $.ajax({
            type: 'get',
            url: 'http://localhost:3000/hotels',
            data: 'json',
            success: (data) => {
                console.log(data);
                let result = '';
                for (let i in data) {
                    result += `
                    <div id="${data[i].id}" class="bottom-container-image">
                    <p>${data[i].discount}</p>
                    <img src="${data[i].imageUrl}" alt="hotelimg1">
                
                        <p class="food">${data[i].address}</p>
                        <a href="">view hotel</a>
                        <p>24/7 per week</p>
                        <p>${deletehotel}</p>
                        <p>${updatehotel}</p>

                    
                </div>
                    `
                }
                // $('#meals').empty();
                $('#div').html(result);
            },
            error: (e) => console.log('error', e)
        });
    }
    getHotels();
        
                  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%
                //  CREATE HOTELS FOR LISTING
                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    $("#submit").on("click", function(e) {
        e.preventDefault()
    
        var hotels = {
            category: $('#category').val(),
            imageUrl: $('#imageUrl').val(),
            address: $('#address').val(),
            name: $('#name').val(),
            discount: $('#discount').val(),
        
             
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
                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%
                //  CREATE BOOKINGS
                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    
    $("#submit1").on("click", function(e) {
        e.preventDefault()
       
        var bookings = {
            name: $('#name').val(),
            hotelsName: $('#hotelsName').val(),
            categoryType: $('#categoryType').val(),
            socialLinks: $('#socialLinks').val(),
            visitDay: $('#visitDay').val(),

        }
        $.ajax({
            method: "POST",
            data: JSON.stringify(bookings),
            dataType: 'json',
            contentType: 'application/json',
            url: "http://localhost:3000/bookings",
            success: function(data) {
                console.log(data)
                $('#name').val('')
                $('#hotelsName').val('')
                $('#categoryType').val('')
                $('#socialLinks').val('')
                $('#visitDay').val('')
            },
            error: function(err) {
                console.log(err)
            }
        })
    })

                 // %%%%%%%%%%%%%%%%%%%%%%%%%%%%
                //  READ ALL BOOKINGS FOR LISTING
                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%% 















               
}) //end of jquery


 
function deleteHotel(){

}





























// example
//  function getHotels(){
//     let s = {
//         searchParam: $('#search-field').val()
//     }
//     $.ajax({
//         type: 'get',
//         url: 'localhost:3000/hotels/',
//         data: JSON.stringify(s),
//         dataType: 'json',
//         contentType: 'application/json',
//         success: (data) => {
//             for (let i in data) {
//                 if (data[i] === s.searchParam) {
//                     // happenings
//                     $("#meals").empty();
//                     let address = data[i].address;
//                     let imageUrl = data[i].imageUrl;
//                     let name = data[i].name;

//                     var result = `
//                     <div class="bottom-container-image">
//                     <p>Up to 40% off</p>
//                     <p>${name}</p>
//                     <img src="${imageUrl}" alt="hotelimg1">
//                         <div>
//                             <p class="food">${address}</p>
//                             <a href="">view hotel</a>
//                             <p>Monday - June 10, 2019</p>
//                         </div>
//                     </div>`

//                     $("main").append(result);
//                 }
//             }
//         },
//         error: (e) => console.log(e)
//     })
//  }
// $('#search-btn').on('click', getHotels)


