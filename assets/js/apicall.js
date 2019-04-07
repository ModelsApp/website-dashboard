console.log("Ajax call");

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
                $.each(response, function(i, item) {
                    var trr = $('<tr>').append(
                        $('<td>').text(item.name),
                        $('<td>').text(item.surname),
                        $('<td>').text(item.email),
                        $('<td>').text(item.phone),
                        $('<td>').text(item.birthDate),
                        $('<td>').text(item.nationality),
                        $('<td>').text(item.motherAgency),
                        $('<td>').text(item.currentAgency),
                        $('<td>').text(item.level),
                        $('<td>').text(item.link)
                    ); //.appendTo('#records_table');
                    console.log(trr);
                });

            /*
            console.log(data);
            $.each(data, function() {
              $.each(this, function(key, value) {
                console.log(key, value);


              });
            });*/

        }
    });
