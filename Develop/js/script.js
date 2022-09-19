// variables
var save = $('.saveBtn');


// Display Current date
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
console.log(currentDay);

// time block is color coded to indicate past, present or future
function blockColor() {
var hour = momnet().hours();

$('.time-block').each(function() {
    var currHour = parseInt($(this).attr('id'));

    if (currHour > hour) {
        $(this).addClass("future");
    } else if (currHour === hour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("past");
    }
})
};

//Click Savebtn to save input to local storage
save.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time, plan);
});

// Getting Saved plans from storage
function userPlans() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);
        
        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}
