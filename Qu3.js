 var nameData = ['A', 'B', 'C', 'D', 'E', 'F'];
    var nameDataLength = nameData.length;
    var avgGrade = 0;
    var gradeDate = prompt('Enter your grade to check your letter grade');

    function getAvg(nameData, gradeData) {
      for (var i = 0; i < nameData.length; i++) {
        alert("Your grades are " + nameData[i] + " ," + gradeData[i]);
        if (gradeData[i] >= 90) {
          alert("Your grades are " + nameData[i] + "A");
        } else if (gradeData[i] >= 80) {
          alert("Your grades are " + nameData[i] + "B");
        } else if (gradeData[i] >= 70) {
          alert("Your grades are " + nameData[i] + "C");
        } else if (gradeData[i] >= 60) {
          alert(" Your grades are " + nameData[i] + "D");
        } else {
          alert("Your grades are " + nameData[i] + "F");
        }
      }
    }