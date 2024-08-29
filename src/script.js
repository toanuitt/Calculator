/**
 * getCalculator
 * 
 * Input: The system of equation taken as input from the user.
 * 
 * Process: 
 * - Convert the input values from strings to floating-point numbers
 * - Call the `solveQuadraticEquation(a,b,c,d,e,f)` function to calculate the result
 * 
 * Output: The result is displayed to the user with ID "result". 
**/
const getCalculator = () =>{
  //Get value from user
  const [a,b,c,d,e,f]=['a','b','c','d','e','f'].map(id=> parseFloat(document.getElementById(id).value))  ;

  // Calculate the equation and display the result
  try {
    let result = solveQuadraticEquation(a, b, c, d, e, f);
    document.getElementById("result").textContent = "Result is: " + result;
  } catch (error) {
    document.getElementById("result").textContent = error.message;
  }

  
};

/** Function to solve equation:
 *    ax+by=c
 *    dx+ey=f
 * 1. Validate inputs and destructure
 * 2. Calculate determinants
 * 3. Return the result based on the calculated determinants
 * **/
const solveQuadraticEquation = (a,b,c,d,e,f) =>{
  // Validate inputs and destructure 
  [a, b, c, d, e, f] = [a, b, c, d, e, f].map((value, i) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
      throw new Error(`Invalid input: Please enter a valid number for input`);
    }
    return parsedValue;
  });

  // Calculate determinants
  const D = a * e - b * d;
  const Dx = c * e - b * f;
  const Dy = a * f - d * c;

  //  Return the result based on conditions
  if (D !== 0) {
    const x = Dx / D;
    const y = Dy / D;
    return `Value: x = ${x}, y = ${y}`;
  } else if (Dx === 0 && Dy === 0) {
    return 'Multiple values';
  } else {
    return 'None value';
  }
};
