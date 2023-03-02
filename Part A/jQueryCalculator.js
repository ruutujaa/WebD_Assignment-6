// $(document).ready(function () {
//     const urlParams = new URLSearchParams(window.location.search);
//     const name = urlParams.get("username");
//     $("#name").html("welcome, " +name);

//     $(".calc").click(function () {

//         var x1 = $("#txtNo1").val();
//         var reg1 = /^[0-9]+$/;
//         var x2 = $("#txtNo2").val();
//         var reg2 = /^[0-9]+$/;
//         if(x1.length == "" && x2.length == ""){
//          $("#txtNo1check").show();
//          $("#txtNo2check").show();
//         }
//         if(reg2.test(x2) && reg1.test(x1)) {
//             var operand = $(this).attr("id");
//             var output = () => {
//                 if(operand == "add"){
//                     return parseInt(x1) + parseInt(x2);
//                 }else if(operand == "sub") {
//                     return parseInt(x1) - parseInt(x2);
//                 } else if(operand == "mul") {
//                     return parseInt(x1) * parseInt(x2);
//                 } else if (operand == "div") {
//                     return parseInt(x1) / parseInt(x2);
//                 }
//             };
//             $("#result").val(output);
//         }
//     });
//     //validate
//     $("#txtNo1check").hide();
//   let tError = true;
//   $("#txtNo1").keyup(function () {
//     validatet1();
//   });

//   function validatet1() {
//     var t1Value = $("#txtNo1").val();
//     var regex = /^[0-9]+$/;
//     if (t1Value.length == "") {
//       $("#txtNo1check").show();
//       tError = false;
//       return false;
//     } else if (!regex.test(t1Value)) {
//       $("#txtNo1check").show();
//       $("#txtNo1check").html("Please Enter a Valid Number");
//       tError = false;
//       return false;
//     } else {
//       $("#txtNo1check").hide();
//       tError = true;
//     }
//   }
// // validate
// $("#txtNo2check").hide();
//   let t2Error = true;
//   $("#txtNo2").keyup(function () {
//     validatet2();
//   });

//   function validatet2() {
//     var t2Value = $("#txtNo2").val();
//     var regex2 = /^[0-9]+$/;
//     if (t2Value.length == "") {
//       $("#txtNo2check").show();
//       t2Error = false;
//       return false;
//     } else if (!regex2.test(t2Value)) {
//       $("#txtNo2check").show();
//       $("#txtNo2check").html("Please Enter a Valid Number");
//       t2Error = false;
//       return false;
//     } else {
//       $("#txtNo2check").hide();
//       t2Error = true;
//     }
//   }
// });


// When the document is ready, do the following
$(document).ready(function () {
  
  // Get the username from the URL parameters and display it
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("username");
  $("#name").html("welcome, " +name);

  // When a calculation button is clicked, do the following
  $(".calc").click(function () {
  
    // Get the values from the text fields and check if they are numbers
    var x1 = $("#txtNo1").val();
    var reg1 = /^[0-9]+$/;
    var x2 = $("#txtNo2").val();
    var reg2 = /^[0-9]+$/;
    
    // If either field is empty, show an error message
    if(x1.length == "" && x2.length == ""){
      $("#txtNo1check").show();
      $("#txtNo2check").show();
    }
    
    // If both fields contain valid numbers, perform the calculation and display the result
    if(reg2.test(x2) && reg1.test(x1)) {
      var operand = $(this).attr("id");
      var output = () => {
        if(operand == "add"){
          return parseInt(x1) + parseInt(x2);
        }else if(operand == "sub") {
          return parseInt(x1) - parseInt(x2);
        } else if(operand == "mul") {
          return parseInt(x1) * parseInt(x2);
        } else if (operand == "div") {
          return parseInt(x1) / parseInt(x2);
        }
      };
      $("#result").val(output);
    }
  });
  
  // Validate the first input field
  $("#txtNo1check").hide();
  let tError = true;
  $("#txtNo1").keyup(function () {
    validatet1();
  });

  function validatet1() {
    var t1Value = $("#txtNo1").val();
    var regex = /^[0-9]+$/;
    if (t1Value.length == "") {
      $("#txtNo1check").show();
      tError = false;
      return false;
    } else if (!regex.test(t1Value)) {
      $("#txtNo1check").show();
      $("#txtNo1check").html("Please Enter a Valid Number");
      tError = false;
      return false;
    } else {
      $("#txtNo1check").hide();
      tError = true;
    }
  }
  
  // Validate the second input field
  $("#txtNo2check").hide();
  let t2Error = true;
  $("#txtNo2").keyup(function () {
    validatet2();
  });

  function validatet2() {
    var t2Value = $("#txtNo2").val();
    var regex2 = /^[0-9]+$/;
    if (t2Value.length == "") {
      $("#txtNo2check").show();
      t2Error = false;
      return false;
    } else if (!regex2.test(t2Value)) {
      $("#txtNo2check").show();
      $("#txtNo2check").html("Please Enter a Valid Number");
      t2Error = false;
      return false;
    } else {
      $("#txtNo2check").hide();
      t2Error = true;
    }
  }
});
