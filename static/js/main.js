// select input elements
const nameInput = document.getElementById('name-input');
const professionalTitleInput = document.getElementById('professional-title');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const locationInput = document.getElementById('location');
const linkedinInput = document.getElementById('linkedin');
const githubInput = document.getElementById('github');
const websiteInput = document.getElementById('website');
const professionalSummaryInput = document.getElementById('professional-summary');
const jobTitleInput = document.getElementById('job-title');
const companyInput = document.getElementById('company-name');
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const jobDescriptionInput = document.getElementById('job-description');

// select preview elements
const previewName = document.getElementById('preview-name');
const previewTitle = document.getElementById('preview-title');
const previewEmail = document.getElementById('preview-email');
const previewPhone = document.getElementById('preview-phone');
const previewLocation = document.getElementById('preview-location');
const previewLinkedin = document.getElementById('preview-linkedin');
const previewGithub = document.getElementById('preview-github');
const previewWebsite = document.getElementById('preview-website');
const previewSummary = document.getElementById('preview-summary');
const previewJobTitle = document.getElementById('preview-job-title');
const previewCompany = document.getElementById('preview-company');
const previewStartDate = document.getElementById('preview-start-date');
const previewEndDate = document.getElementById('preview-end-date');
const previewJobDescription = document.getElementById('preview-job-description');


const fildMapping = [
    {input:nameInput, preview:previewName},
    {input:professionalTitleInput, preview:previewTitle},
    {input:emailInput, preview:previewEmail},
    {input:phoneInput, preview:previewPhone},
    {input:locationInput, preview:previewLocation},
    {input:linkedinInput, preview:previewLinkedin},
    {input:githubInput, preview:previewGithub},
    {input:websiteInput, preview:previewWebsite},
    {input:professionalSummaryInput, preview:previewSummary}
]

fildMapping.forEach(item => {
    if(item.input && item.preview) {
        item.input.addEventListener('input', () => {
            item.preview.textContent = item.input.value;
        });     
    }
})