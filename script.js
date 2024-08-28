function solveEquations() {
  //Get value from user
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const c = parseFloat(document.getElementById('c').value);
  const d = parseFloat(document.getElementById('d').value);
  const e = parseFloat(document.getElementById('e').value);
  const f = parseFloat(document.getElementById('f').value);

  // Calculate the equation
  const D = a * e - b * d;
  const Dx = c * e - b * f;
  const Dy = a * f - d * c;

  // Check requirement and solve
  if (D !== 0) {
    const x = Dx / D;
    const y = Dy / D;
    document.getElementById('result').innerHTML = `Value: x = ${x}, y = ${y}`;
  } else if (Dx === 0 && Dy === 0) {
    document.getElementById('result').innerHTML = 'Multiple values';
  } else {
    document.getElementById('result').innerHTML = 'None values';
  }
}