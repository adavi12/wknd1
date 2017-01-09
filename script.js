console.log("JS");
var empArray = [];
var monthlySalaryCost = 0;
$(document).ready(function(){
  var employees = $("#employees");
  console.log(employees);
  console.log("JQ");
  $( "form" ).submit(function( event ) {

    console.log("result:", $( this ).serializeArray() );
    empArray.push($(this).serializeArray());
    event.preventDefault();
    var formInfo = {};

    var empform = $(this).serializeArray();

    empform.forEach(function(input){

      formInfo[input.name] = input.value;
    });


    var employeeFName = '<td>' + formInfo.empFirstName + '</td>';
    var employeeLName = '<td>' + formInfo.empLastName + '</td><';
    var employeeIDNum ='<td>' + formInfo.empIDNum + '</td>';
    var employeeJobTitle = '<td>' + formInfo.empJobTitle + '</td>';
    var employeeSalary = '<td>' + formInfo.empSalary + '</td>';


  var $employee = $('<tr>');
    $employee.append(employeeFName);
    $employee.append(employeeLName);
    $employee.append(employeeIDNum);
    $employee.append(employeeJobTitle);
    $employee.append(employeeSalary);
    employees.append($employee);
    $employee.append('</tr>');
    $("#empd").append($employee);
  //another way to clear form
    // $("#empFirstName").val(" ");
    // $("#empLastName").val(" ");
    // $("#empIDNum").val(" ");
    // $("#empJobTitle").val(" ");
    // $("#empSalary").val(" ");
    clearForm();
  $("#deleteButton" ).click(function() {
   console.log("delete clicked");
   //clears the entire form
  //  ($employee).remove();
  });
  monthlySalaryCost = parseFloat((formInfo.empSalary)/12).toFixed(2);
  $("#monthlySalCost").text(monthlySalaryCost);
  });

});
//to clear form
function clearForm(){
  $('form').find('input[type=text]').val('');
}
