const form = document.getElementById('form')
const submitBtn = document.getElementById('submit-btn')
const daysDisplay = document.getElementById('days-display')
const monthsDisplay = document.getElementById('months-display')
const yearsDisplay = document.getElementById('years-display')

function resetStats(){
    // Set stats back to --
    const stats = document.querySelectorAll('.results-container__stat-dash')
    stats.forEach(stat => stat.innerHTML="--")
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!form.checkValidity()){ // Check if the form is valid
        resetStats()

        // Display error messages if the form is not valid
        const inputs = form.querySelectorAll('input');
        for (const input of inputs) {
            if (!input.checkValidity()) {
                input.classList.add('invalid');
                if (input.nextElementSibling !== null) {
                    if(input.id === "day"){
                        input.nextElementSibling.innerHTML="Must be a valid day"
                    }
                    else if(input.id === "month"){
                        input.nextElementSibling.innerHTML="Must be a valid month"
                    }
                    else if(input.id === "year"){
                        input.nextElementSibling.innerHTML="Must be in the past"

                    }
                    input.nextElementSibling.classList.remove('hidden');
                }
                if (input.previousElementSibling !== null) {
                    input.previousElementSibling.classList.add('invalid-text');
                }
            }
            else{
                input.classList.remove('invalid');
                if (input.nextElementSibling !== null) {
                    input.nextElementSibling.classList.add('hidden');
                }
                if (input.previousElementSibling !== null) {
                    input.previousElementSibling.classList.remove('invalid-text');
                }
            }
        }
        return
    }
    else{
        // If the form is valid, check if the date is valid
        const formData = new FormData(form);
        const year = parseInt(formData.get('year'));
        const month = parseInt(formData.get('month'));
        const day = parseInt(formData.get('day'));
        
        let maxDays = 31;
        if (month === 2) {
            maxDays = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
        } else if (month === 4 || month === 6 || month === 9 || month === 11) {
            maxDays = 30;
        }
        
        if (day > maxDays) {
            const dayInput = form.querySelector('#day');
            dayInput.classList.add('invalid');
            dayInput.nextElementSibling.innerHTML = `Must be a valid date`;
            dayInput.nextElementSibling.classList.remove('hidden');
            dayInput.previousElementSibling.classList.add('invalid-text');
            resetStats()
            return;
        }
        
        // Calculate the date and display the result
        const dates = calculateDate(`${year}-${month}-${day}`);
        daysDisplay.innerHTML = dates.days + ' ';
        monthsDisplay.innerHTML = dates.months + ' ';
        yearsDisplay.innerHTML = dates.years + ' ';

        // Animate the result elements
        const resultElements = document.querySelectorAll('.results-container__stat-dash');
        resultElements.forEach(element => {
            element.classList.add('result-animate')
            setTimeout(() => {
                element.classList.remove('result-animate')
            }, 1000)
        })


        // Reset error messages
        const inputs = form.querySelectorAll('input');
        for (const input of inputs) {
            input.classList.remove('invalid');
            if (input.nextElementSibling !== null) {
                input.nextElementSibling.classList.add('hidden');
            }
            if (input.previousElementSibling !== null) {
                input.previousElementSibling.classList.remove('invalid-text');
            }
        }
    } 
});

  


function calculateDate(birthDate){
    // Target date
    const birthdate = moment(birthDate);

    // Current date
    const currentDate = moment();

    // Get the difference between the two dates in years, months, and days
    const diffYears = currentDate.diff(birthdate, 'years');
    const diffMonths = currentDate.diff(birthdate, 'months') % 12;
    const diffDays = currentDate.diff(birthdate, 'days') % 30;

    // Output the result
    return {years: diffYears, months: diffMonths, days: diffDays}
}
