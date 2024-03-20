function divide(x, y) {
  try {
    if (y === 0) {
      throw new Error("Division by zero");
    }
    return x / y;
  } catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
    // Optionally, rethrow the error
    throw error;
  }
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error("Error caught in outer catch block:", error.message);
}
