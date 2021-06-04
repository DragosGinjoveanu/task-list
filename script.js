var numarTask = 1;
//adds the given task
function addTask() {
  var task = $("#task").val();
  var isUrgent = $('#urgent').is(':checked');
  var divClass = "card";
  if (isUrgent) {
    divClass += " alert-danger";
  }
  if (task.length !== 0) {
    $('#list').append(`
      <div class="` + divClass + `" id = "` + numarTask + `">
        <div class="card-body">
          <h5>` + task + `</h5>
        </div>
        <div class="card-footer text-muted">
          <a href="#" class="btn btn-secondary" onclick = "return deleteTask(` + numarTask + `);"><i class="las la-trash-alt"></i></a>
        </div>
      </div>`
    );
    document.getElementById("status").innerHTML = "";
  } else {
    document.getElementById("status").innerHTML = "You forgot to write the task!";
    document.getElementById("status").style.color = "red";
  }
  ++numarTask;
  return false;
}
//deletes the clicked task
function deleteTask(idTask) {
  $('#' + idTask).remove();
  //congrats, you deleted the rules :)
  return false;
}