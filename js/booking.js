function getSelectedValue_1day() {
  var optionValue = document.getElementById("mySelect_1day").value;
  var memberValue = document.getElementById("member_1day").value;
  const selectedDate = document.getElementById("date_1day").value;
  const email = document.getElementById("email1").value;
  console.log(optionValue + ":" + memberValue + ":" + selectedDate + email);
}