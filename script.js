document.addEventListener('DOMContentLoaded', function () {
    // Page load animation using GSAP
    gsap.from('.container', {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: 'power2.out',
    });

    const character = document.getElementById('character');
    const bmiText = document.getElementById('bmiText');

    document.getElementById('calculateBtn').addEventListener('click', function () {
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const result = document.getElementById('result');

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            character.textContent = '⚠️';
            bmiText.textContent = 'Please enter valid height and weight.';
            result.style.display = 'block';
            gsap.fromTo('#result', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 });
            return;
        }

        const bmi = weight / ((height / 100) ** 2);
        let status = '';

        if (bmi < 18.5) {
            status = 'Underweight';
            character.textContent = '😕';  // Sad face for underweight
        } else if (bmi >= 18.5 && bmi < 24.9) {
            status = 'Normal weight';
            character.textContent = '😊';  // Happy face for normal weight
        } else if (bmi >= 25 && bmi < 29.9) {
            status = 'Overweight';
            character.textContent = '😟';  // Slightly worried face for overweight
        } else {
            status = 'Obese';
            character.textContent = '😰';  // Sweating face for obese
        }

        bmiText.textContent = `Your BMI is ${bmi.toFixed(2)} (${status})`;
        result.style.display = 'block';

        // GSAP animation for result display
        gsap.fromTo('#result', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 });
    });
});
