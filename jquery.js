$(function() {

    $("#addNewTask").on("click", function() {

        if ($("#newSentance").val().length == 0) {
            return;
        }

        // struct: li.task>div.taskTxt+button.btnDelete
        $("#taskList").append(
            "<li class=\"task\">" + 
            "<div class=\"taskTxt\">" +
            $("#newSentance").val() +
            "</div>" +
            "<button class=\"btnDelete\">Delete</button>" +
            "</li>"
        );

        // clears txt and puts cursor on input field
        $("#newSentance").val('');
        $("#newSentance").trigger("focus");
    });

    // deletes specific li.task
    $("#taskList").on("click", ".btnDelete", function() {
        $(this).parent().remove();
    });

    // adds/removes line-through on clicking text
    $("#taskList").on("click", ".taskTxt", function() {

        let decorationVal = $(this).css("text-decoration-line");

        if (decorationVal == "none")
            $(this).css("text-decoration-line", "line-through");
        else
            $(this).css("text-decoration-line", "none");
    });
});