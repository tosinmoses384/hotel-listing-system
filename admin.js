$(function() {
      
//ADMIN SIGN IN
$(document).ready(function () {

        
    $("#signup-btn").on("click", function(e) {
        
        
        // console.log(password);
        // $.ajax({
        //     method: "GeT",
        //     url: "http://localhost:3000/user"
        // }).done(function (data) {
        //     if (data.length > 0){
        //         for(var i=0; data.length > i; i++ ){
        //             if(data[i].adminId == user && data[i].password == password){
        //             }
        //         }
        //     }
            
        //     $("#error").show();
        // });  
    });

});
                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%
                //  GET A SINGLE HOTEL FOR LISTING
                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                // $(document).ready(() => {
                //     $('#search-field').keyup(() => {
                //         $('#meals').html('')
                //         let searchField = $('#search-field').val();
                //         let expression = new RegExp(searchField, 'i');
                //         $.getJSON('db.json', (data) => {
                //             $.each(data, (key, value) => {
                //                 if (value.name.search(searchField) != -1) {
                //                     let result = `
                //                 <div class="bottom-container-image">
                //                     <p>Up to 40% off</p>
                //                         <p>${value.name}</p>
                //                     <img src="${value.imageUrl}" alt="hotelimg1">
                //                 <div>
                //                     <p class="food">${value.address}</p>
                //                     <a href="">view hotel</a>
                //                     <p>Monday - June 10, 2019</p>
                //                 </div>
                //                 </div>`
                //                     $('#meals').append(result);
                //                 }
                //             })
                //         })
                //     })
                // })
                
                








                    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%
                //  UPDATE A HOTEL LISTING
                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%              

                










                  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%
                //  DELETE A HOTEL LISTING
                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%      
                var deletehotel = `<button id="button">delete</button>`;
                var updatehotel = `<button id="button">update</button>`;
                
                $('#button').on('click', () => {
                    console.log("its working");
                    var id = $(this).parent().attr('id');
                    $.ajax({
                        type: 'DELETE',
                        dataType: 'json',
                        contentType: 'application/json',
                        url: 'localhost:3000/hotels/' + id,
                        success: () => {
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
                <div>
                        <p class="food">${data[i].address}</p>
                        <a href="">view hotel</a>
                        <p>24/7 per week</p>
                        <p>${deletehotel}</p>
                        <p>${updatehotel}</p>
                </div>
                    
                </div>
                    `
                }

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
            discount: $('#discount').val()
        
             
        }
        $.ajax({
            method: "POST",
            data: JSON.stringify(hotels),
            dataType: 'json',
            contentType: 'application/json',
            url: "http://localhost:3000/hotels",
            success: function(data) {
                console.log(data)
                $('#category').val('')
                $('#imageUrl').val('')
                $('#address').val('')
                $('##name').val('')
                $('#discount').val('')
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


