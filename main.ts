// Get form and resume elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const degreeInput = document.getElementById('degree') as HTMLInputElement;
const schoolInput = document.getElementById('school') as HTMLInputElement;
const jobTitleInput = document.getElementById('jobTitle') as HTMLInputElement;
const companyInput = document.getElementById('company') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;

const personalInfoDiv = document.getElementById('personal-info')!;
const educationInfoDiv = document.getElementById('education-info')!;
const experienceInfoDiv = document.getElementById('experience-info')!;
const skillsInfoDiv = document.getElementById('skills-info')!;

// Function to validate form fields
function validateForm() {
  if (
    nameInput.value === '' ||
    emailInput.value === '' ||
    degreeInput.value === '' ||
    schoolInput.value === '' ||
    jobTitleInput.value === '' ||
    companyInput.value === '' ||
    skillsInput.value === ''
  ) 
  return true;
}

// Function to dynamically generate the resume
function generateResume(): void {
  personalInfoDiv.innerHTML = `
    <h3>Personal Information</h3>
    <p><strong>Name:</strong> ${nameInput.value}</p>
    <p><strong>Email:</strong> ${emailInput.value}</p>
  `;

  educationInfoDiv.innerHTML = `
    <h3>Education</h3>
    <p><strong>Degree:</strong> ${degreeInput.value}</p>
    <p><strong>School:</strong> ${schoolInput.value}</p>
  `;

  experienceInfoDiv.innerHTML = `
    <h3>Work Experience</h3>
    <p><strong>Job Title:</strong> ${jobTitleInput.value}</p>
    <p><strong>Company:</strong> ${companyInput.value}</p>
  `;

  const skillsArray = skillsInput.value.split(',');
  const skillsList = skillsArray.map((skill) => `<li>${skill.trim()}</li>`).join('');

  skillsInfoDiv.innerHTML = `
    <h3>Skills</h3>
    <ul>${skillsList}</ul>
  `;
}

// Form submission event listener
form.addEventListener('submit', (e: Event) => {
  e.preventDefault(); // Prevent page reload

  if (validateForm()) {
    generateResume();
  }
});
