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

document.getElementById('add-edu-btn').addEventListener('click', function() {
    
    const educationList = document.getElementById('education-list');
    const newEntry = document.createElement('div');
    newEntry.className = 'education-entry';
    newEntry.innerHTML = `
        <hr> <input type="text" placeholder="school/university">
        <input type="text" placeholder="Degree">
        <div class="date-group">
            <div class="date-field">
                <label>Start Date</label>
                <input type="date">
            </div>
            <div class="date-field">
                <label>End Date</label>
                <input type="date">
            </div>
        </div>
    `;
    educationList.appendChild(newEntry);
});