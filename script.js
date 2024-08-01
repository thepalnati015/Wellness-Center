// Symptom Checker Form Submission
document.getElementById('symptomForm').addEventListener('submit', function(event) {
    event.preventDefault();     
    
    const symptoms = document.getElementById('symptoms').value.toLowerCase().split(',').map(symptom => symptom.trim());
    const sex = document.getElementById('sex').value;
    const age = parseInt(document.getElementById('age').value);
  
    const conditions = {
        "fever, cough": "Possible condition: Flu",
        "headache, nausea": "Possible condition: Migraine",
        "chest pain, shortness of breath": "Possible condition: Heart Disease",
        "stomach ache, diarrhea": "Possible condition: Gastroenteritis"
    };
   
    const symptomKey = symptoms.join(', ');
  
    const result = conditions[symptomKey] || "No conditions found for the given symptoms.";

    document.getElementById('result').innerText = result;
});

// Hamburger Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
});
