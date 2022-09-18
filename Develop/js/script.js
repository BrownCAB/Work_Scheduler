// variables
var save = $('.saveBtn');



// Current date
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
savebtn.on("click", function() {
    var time = $(this).sibling(".hour").text();
    var toDo = $(this).sibling(".toDo").text();

    localStorage.setItem(time, toDo);
});


function savedtoDo() {
    $('.hour').each(function() {
    var currHour = $(this).text();
    var currDo = localStorage.getItem(currHour);

    if (currDo !== null) {
        $(this).siblings()
    }
});
