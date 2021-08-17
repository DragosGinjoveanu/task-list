var taskNumber = 1;

//adds the given task
function addTask() {
  const task = $("#task").val();
  const isUrgent = $('#urgent').is(':checked');
  let divClass = "card";
  if (isUrgent) {
    divClass += " alert-danger";
  }
  console.log(isUrgent);
  if (task.length !== 0) {
    $('#list').append(`
      <div class="` + divClass + `" id = "` + taskNumber + `">
        <div class="card-body">
          <h5>` + task + `</h5>
        </div>
        <div class="card-footer text-muted">
          <a href="#" class="btn btn-secondary" onclick = "return deleteTask(` + taskNumber + `);"><i class="las la-trash-alt"></i></a>
        </div>
      </div>`
    );
    document.getElementById("status").innerHTML = "";
  } else {
    document.getElementById("status").innerHTML = "You forgot to write the task!";
    document.getElementById("status").style.color = "red";
  }
  ++taskNumber;
  return false;
}

//deletes the clicked task
function deleteTask(taskId) {
  $('#' + taskId).remove();
  return false;
}