// Get form and resume elements
var form = document.getElementById('resume-form');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var degreeInput = document.getElementById('degree');
var schoolInput = document.getElementById('school');
var jobTitleInput = document.getElementById('jobTitle');
var companyInput = document.getElementById('company');
var skillsInput = document.getElementById('skills');
var personalInfoDiv = document.getElementById('personal-info');
var educationInfoDiv = document.getElementById('education-info');
var experienceInfoDiv = document.getElementById('experience-info');
var skillsInfoDiv = document.getElementById('skills-info');
// Function to validate form fields
function validateForm() {
    if (nameInput.value.trim() === '' ||
        emailInput.value.trim() === '' ||
        degreeInput.value.trim() === '' ||
        schoolInput.value.trim() === '' ||
        jobTitleInput.value.trim() === '' ||
        companyInput.value.trim() === '' ||
        skillsInput.value.trim() === '') {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}
// Function to dynamically generate the resume
function generateResume() {
    personalInfoDiv.innerHTML = "\n    <h3>Personal Information</h3>\n    <p><strong>Name:</strong> ".concat(nameInput.value, "</p>\n    <p><strong>Email:</strong> ").concat(emailInput.value, "</p>\n  ");
    educationInfoDiv.innerHTML = "\n    <h3>Education</h3>\n    <p><strong>Degree:</strong> ".concat(degreeInput.value, "</p>\n    <p><strong>School:</strong> ").concat(schoolInput.value, "</p>\n  ");
    experienceInfoDiv.innerHTML = "\n    <h3>Work Experience</h3>\n    <p><strong>Job Title:</strong> ".concat(jobTitleInput.value, "</p>\n    <p><strong>Company:</strong> ").concat(companyInput.value, "</p>\n  ");
    var skillsArray = skillsInput.value.split(',');
    var skillsList = skillsArray.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('');
    skillsInfoDiv.innerHTML = "\n    <h3>Skills</h3>\n    <ul>".concat(skillsList, "</ul>\n  ");
}
// Form submission event listener
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload
    if (validateForm()) {
        generateResume();
    }
});
