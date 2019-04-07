//https://documenter.getpostman.com/view/6229213/Rzn8RN8X#e419ab0a-fea5-435c-bf97-73b9df07a2be
console.log("logged");

//Get Pending users
$.ajax({
    contentType: 'application/json;charset=utf-8',
    type: 'GET',
    dataType: 'json',
    //async: true,
    url: 'https://square-app-api.herokuapp.com/api/user/pending',
    dataType: "json",
    error: function (data) {
        console.log(data);
    },
    success: function (data) {
        console.log(data);
    }
});

//Get  all users

$.ajax({
    contentType: 'application/json;charset=utf-8',
    type: 'GET',
    dataType: 'json',
    //async: true,
    url: 'https://square-app-api.herokuapp.com/api/user',
    dataType: "json",
    error: function (data) {
        console.log(data);

    },
    success: function (data) {
        console.log(data);
        $.each(data, function() {
          $.each(this, function(k, v) {
            console.log(k.surname);
          });
        });

    }
});
