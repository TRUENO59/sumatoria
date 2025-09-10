document.getElementById('sumar-btn').addEventListener('click', function() {
            // Get the values from the input fields
            let num1 = parseFloat(document.getElementById('numero1').value) || 0;
            let num2 = parseFloat(document.getElementById('numero2').value) || 0;

            // Calculate the sum
            let resultado = num1 + num2;

            // Display the result
            document.getElementById('resultado').textContent = resultado;
        });