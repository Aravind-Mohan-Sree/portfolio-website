$(document).ready(function () {
  $("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbzxNfcAXlLVMHadQySXxqxqcvWKTFJw-gcPgs8QTDgvfqfKqe1ZHBTE_r__CyvnwOpFmw/exec",
      data: $("#submit-form").serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully")
        window.location.reload()
        //window.location.href="https://google.com"
      },
      error: function (err) {
        alert("Something Error")
      }
    })
  })
});
