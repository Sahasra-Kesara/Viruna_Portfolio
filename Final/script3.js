document.addEventListener("DOMContentLoaded", function() {
    const selectCourseButton = document.getElementById("selectCourseButton");
    const courseResult = document.getElementById("courseResult");
  
    selectCourseButton.addEventListener("click", function() {
      const mathResult = getSelectedValue("mathResult");
      const physicsResult = getSelectedValue("physicsResult");
      const chemistryResult = getSelectedValue("chemistryResult");
  
      const selectedCourse = selectCourse(mathResult, physicsResult, chemistryResult);
  
      if (selectedCourse) {
        courseResult.textContent = `You are eligible for the "${selectedCourse}" course.`;
        showAlert(`Congratulations! You are eligible for the "${selectedCourse}" course.`);
      } else {
        courseResult.textContent = "Sorry, you are not eligible for any course.";
        showAlert("Sorry, you are not eligible for any course.");
      }
    });
  
    function getSelectedValue(name) {
      const selectedInput = document.querySelector(`input[name="${name}"]:checked`);
      return selectedInput ? selectedInput.value : null;
    }
  
    function selectCourse(mathResult, physicsResult, chemistryResult) {
      if (mathResult === "A" && physicsResult === "A" && chemistryResult === "A") {
        return "Engineering";
      } else if (mathResult === "A" && physicsResult === "A" && chemistryResult === "B") {
        return "Computer Science";
      } else if (mathResult === "A" && physicsResult === "A" && chemistryResult === "B") {
        return "Statistic";
      }else if (mathResult === "A" && physicsResult === "B" && chemistryResult === "C") {
        return "Physics";
      }else if (mathResult === "B" && physicsResult === "B" && chemistryResult === "C") {
        return "Management";
      }else if (mathResult === "A" && physicsResult === "A" && chemistryResult === "C") {
        return "Mechanics";
      }else if (mathResult === "C" && physicsResult === "B" && chemistryResult === "A") {
        return "Teaching";
      }else if (mathResult === "B" && physicsResult === "C" && chemistryResult === "B") {
        return "Web Designing";
      }else if (mathResult === "C" && physicsResult === "C" && chemistryResult === "B") {
        return "Automobile";
      }else if (mathResult === "C" && physicsResult === "C" && chemistryResult === "S") {
        return "Computational Maths";
      }else if (mathResult === "C" && physicsResult === "S" && chemistryResult === "S") {
        return "Computer Applications";
      }else if (mathResult === "S" && physicsResult === "S" && chemistryResult === "S") {
        return "Ms Office Certificate course";
    //   }else if (mathResult || physicsResult || chemistryResult === "F" ) {
    //     null;
      }else {
        return null;
      }
    }
    function showAlert(message) {
        alert(message);
    }
  });