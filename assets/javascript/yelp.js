$(document).ready(function(){
    // Dinner Page
    
        $("#search").on("click", function(event) {
          $("#results").empty();
            event.preventDefault();
          
            // This line grabs the input from the textbox
            var location = $("#input-term").val().trim();
            var categories =$("#selectType").val().trim();
          ////Reset the input box to blank after user submit
    
           
      
        var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=by-restaurant&location="+location+"&categories="+categories;
      
    
             $.ajax({
                url: queryURL ,
                headers: {
                 'Authorization':'Bearer VVvVOjZGwwjxwP4wq77qbiUkO8tOtAWv7M6f0WIIkbRNnYzcGYm9jpxdWa9sEHncnFvEIDaU6pl3CftfLcI8sw_6gwZAZfjM9I6kRmMTdKUtszphLRLoOW3oIqrEXnYx',
             },
                method: 'GET',
                dataType: 'json',
                success: function(data){
                    console.log('success: '+data);
                   // Grab the results from the API JSON return
                   var totalresults = data.total;
    
            
                   // If our results are greater than 0, continue
                   if (totalresults > 0){
                       
                       // Itirate through the JSON array of 'businesses' which was returned by the API
    
                  
                       $.each(data.businesses, function(i, item) {
                      
                           // Store each business's object in a variable
                           var id = item.id;
                           var alias = item.alias;
                           var phone = item.display_phone;
                           var image = item.image_url;
                           var name = item.name;
                           var rating = item.rating;
                           var reviewcount = item.review_count;
                           var address = item.location.address1;
                           var city = item.location.city;
                           var state = item.location.state;
                           var zipcode = item.location.zip_code;
                           // Append our result into our page
                          
                           console.log(data.business);
    
    $('#results').append(`<div class="card mb-3">
      <div class="row no-gutters">
      
        <div class="col-lg-4">
        <div >
      <a  id="busName" class="btn btn-primary" href="https://www.yelp.com/biz/${alias}" target="new">${name}</a>
      </div>
        <img id="pic" class="card-img" src=" ${image}" alt="${name}"> 
        
      </div>
        <div class="col-lg-8">
          <div class="card-body >
            <h3 class="card-title" style="font-size: 20px;"><strong>Restaurant Name : </strong><span style="font-size: 18px;"> ${name}</span></h3>
            <h3 class="card-title" style="font-size: 20px;"><strong>Address : </strong><span style="font-size: 18px;"> ${address}  ${city} ${state} ${zipcode}</span></h3>
            <h3 class="card-title" style="font-size: 20px;"><strong>Phone : </strong><span style="font-size: 18px;">${phone}</span></h3>
            <h3 class="card-title" style="font-size: 20px;"><strong>Rating : </strong><span style="font-size: 18px;">${rating} <i class="fa fa-star" style="color:red;"></i></span></h3>
            <h3 class="card-title" style="font-size: 20px;"><strong>Reviews : </strong><span style="font-size: 18px;">${reviewcount}</span></h3>
          </div>
        </div>
      </div>
    </div>`);
    


                        });
                   } else {
                       // If our results are 0; no businesses were returned by the JSON therefor we display on the page no results were found
                       $('#results').append('<h5 id="discovered">We discovered no results! Please Refresh The Page!! or try another city,state or zipcode</h5>');
                   }
               }
            
        });             
    
    }); 

}); 
    
    
    
    
    