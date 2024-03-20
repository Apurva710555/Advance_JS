const empID = ["12345", "234", "4321"];

// Check if employee ID is valid
function isValidEmpId(empID) {
  return true; // For demonstration purposes, always return true
}

// Function to review employee
function EmpReview(empID) {
  return new Promise(function (resolve, reject) {
    if (!isValidEmpId(empID)) {
      const err = new Error("The employee ID doesn't exist");
      reject(err);
    }

    const empPin = "12345"; // Assuming this is the employee pin
    setTimeout(() => {
      resolve(empPin); // Resolve with the employee pin after 5 seconds
    }, 5000);
  });
}

// Call EmpReview function with empID
const promise = EmpReview(empID);
promise
  .then(function (empPin) {
    console.log(empPin);
  })
  .catch(function (error) {
    console.error(error.message);
  });

//ASYN_AWAIT
async function reviewEmployee() {
  try {
    const empPin = await EmpReview(empID);
    console.log(empPin);
  } catch (error) {
    console.error(error.message);
  }
}

reviewEmployee();
