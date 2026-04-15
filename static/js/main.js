const nameInput = document.getElementById('name-input');
const previewName = document.getElementById('preview-name');
const professionalTitleInput = document.getElementById('professional-title');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const locationInput = document.getElementById('location');
const linkedinInput = document.getElementById('linkedin');
const githubInput = document.getElementById('github');
const websiteInput = document.getElementById('website');
const professionalSummaryInput = document.getElementById('professional-summary');
const previewTitle = document.getElementById('preview-title');
const previewEmail = document.getElementById('preview-email');
const previewPhone = document.getElementById('preview-phone');
const previewLocation = document.getElementById('preview-location');
const previewLinkedin = document.getElementById('preview-linkedin');
const previewGithub = document.getElementById('preview-github');
const previewWebsite = document.getElementById('preview-website');
const previewSummary = document.getElementById('preview-summary');


nameInput.addEventListener('input',() =>{
    previewName.textContent = nameInput.value
    previewTitle.textContent = professionalTitleInput.value
    previewEmail.textContent = emailInput.value
    previewPhone.textContent = phoneInput.value
    previewLocation.textContent = locationInput.value
    previewLinkedin.textContent = linkedinInput.value
    previewGithub.textContent = githubInput.value
    previewWebsite.textContent = websiteInput.value
    previewSummary.textContent = professionalSummaryInput.value

})