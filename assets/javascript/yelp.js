$(document).ready(function(){
// Dinner Page
    $("#search").on("click", function(event) {
    $("#results").empty();
        event.preventDefault();
        // This line grabs the input from the textbox
        var location = $("#zipcode").val().trim();
        var categories =$("#selectType").val().trim();
  
    var queryURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/transactions/delivery/search?limit=5&location=${location}&categories=${categories}&offset=50`;
  

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
                   // Display a header on the page with the number of results
                //   $('#results').append('<p>We found ' + totalresults + ' results!</p>');
                   // Iterate through the JSON array of 'businesses' which was returned by the API
                console.log(data);
              
                   $.each(data.businesses, function(i, item) {
                  
                       // Store each business's object in a variable
                       var id = item.id;
                       var image = item.image_url;
                       var alias = item.alias;
                       var phone = item.display_phone;
                       var name = item.name;
                       var rating = item.rating;
                       var reviewcount = item.review_count;
                       var address = item.location.address1;
                       var city = item.location.city;
                       var state = item.location.state;
                       var zipcode = item.location.zip_code;
                       var type = item.categories.alias;
                       
                       // Append our result into our page
                     $('#results').append(
                        '<tr><td><img id="pic" src="' + image + '">  <a href="https://www.yelp.com/biz/' + alias + '" target="new">' + name + '</a></b></td><td><b>' + rating + '</b><i class="fa fa-star"></i><br>' + reviewcount + ' reviews</td><td>' + address + '<br>' + city + ' ' + state + ' ' + zipcode + '</td><td>' + phone + '</td></tr>');
                console.log(name, type);

                    });
               } else {
                   // If our results are 0; no businesses were returned by the JSON therefor we display on the page no results were found
                   $('#results').append('<h5 id="discovered">We found no results! Please try again, or try another zipcode.</h5>');
               }
           }
        });             

}); 

}); 



function clear() {
    $("#results").empty();
    $("#discovered").empty();
    inputForm.reset();
    location.reload(true);

  }

//  .on("click") function associated with the clear button
$("#clear-all").on("click", function(){
    clear();
});


//----------------------------------------------------------------//

// Home Page


