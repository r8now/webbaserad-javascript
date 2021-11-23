$(document).ready(function () {

    // Get and display all courses
    $.get("http://localhost:3000/courses/", function (data) {
        for(let index = 0; index < data.length; index++) {
            $( "#courses" )
            .append("<tr></tr>")
            .append("<td>" +  data[index]._id + "</td>")
            .append("<td>" + data[index].courseId + "</td>")
            .append("<td>" + data[index].courseName + "</td>")
            .append("<td>" + data[index].coursePeriod + "</td>")
            .append("<img id='" + data[index]._id + "' class='can' src='trash-can.svg' alt='delete item'/>");
        }
    }, "json");

    // Delete a specific course when clicking on a trash can
    $( "#courses" ).delegate("img", "click", function() {
        $.ajax({
            url: "http://localhost:3000/courses/" + this.id ,
          //  url: "http://localhost:3000/courses/'"+ this.id+"'" + this.id ,
            type: 'DELETE',
            success: function(data) {
                console.log("Kurs raderad.");
            }
        });
    });

});