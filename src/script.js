/**
 * solveEquation
 * 
 * Input: The system of equation taken as input from the user.
 * 
 * Process: 
 * - Convert the input values from strings to floating-point numbers
 * - Call the `solveQuadraticEquation(a,b,c,d,e,f)` function to calculate the result
 * 
 * Output: The result is displayed to the user with ID "result". 
**/
const solveEquation = () => {
  // 1. Get value from user inputs
  const [a, b, c, d, e, f] = ['a', 'b', 'c', 'd', 'e', 'f'].map(id => parseFloat(document.getElementById(id).value));
  
  // 2. Calculate the result using the solveQuadraticEquation function and display it
  try {
    // 2.1: Attempt to solve the equations and store the result
    let result = solveQuadraticEquation(a, b, c, d, e, f);

    // 2.2: Display the result to the user
    document.getElementById("result").textContent = "Result is: " + result;
  }
  // 2: If an error occurs (e.g., no unique solution), display the error message 
  catch (error) {    
    document.getElementById("result").textContent = error.message;
  }
};

/**
 * solveQuadraticEquation
 * 
 * Input: Take input from the user (a, b, c, d, e, f).
 * 
 * Process:
 * - Convert the input values from strings to floating-point numbers and validate if the inputs are valid numbers
 * - Compute the determinants (D, Dx, Dy)
 * - Depending on the values of these determinants, determine if the result has:
 *   + a unique solution (x, y)
 *   + infinitely many solutions
 *   + no solution
 * 
 * Output: The result is returned as a string describing result of equation.
 * 
 **/
const solveQuadraticEquation = (a,b,c,d,e,f) =>{
  // 1. Get and validate inputs, converting them to floating-point numbers
  [a, b, c, d, e, f] = [a, b, c, d, e, f].map((value, i) => {
    //1.1. Get inputs and converting them to floating-point numbers
    const parsedValue = parseFloat(value);
    //1.2. validate if the inputs are valid numbers
    if (isNaN(parsedValue)) {
      throw new Error(`Invalid input: Please enter a valid number for input`);
    }
    return parsedValue;
  });

 // 2. Calculate the determinants D, Dx, and Dy
  const D = a * e - b * d;
  const Dx = c * e - b * f;
  const Dy = a * f - d * c;

  //3. Return the result based on conditions
    //3.1. a unique solution (x, y)
  if (D !== 0) {
    const x = Dx / D;
    const y = Dy / D;
    return `Value: x = ${x}, y = ${y}`;
  } 
   //3.2. infinitely many solutions
  else if (Dx === 0 && Dy === 0) {
    return 'Multiple values';
  }
    //3.3. no solution 
  else {
    return 'None value';
  }
};
