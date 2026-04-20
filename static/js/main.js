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

// 1. Fixed Field Mapping logic
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
    if (item.input && item.preview) {
        item.input.addEventListener('input', () => {
            item.preview.textContent = item.input.value;
        });
    }
});

// 2. Add Education Button logic
document.getElementById('add-edu-btn').addEventListener('click', function() {
    const educationList = document.getElementById('education-list');
    if (!educationList) return; // Safety check

    const newEntry = document.createElement('div');
    newEntry.className = 'education-entry';
    newEntry.innerHTML = `
        <hr> 
        <input type="text" placeholder="school/university" class="extra-school">
        <input type="text" placeholder="Degree" class="extra-degree">
        <div class="date-group">
            <div class="date-field">
                <label>Start Date</label>
                <input type="date" class="extra-start">
            </div>
            <div class="date-field">
                <label>End Date</label>
                <input type="date" class="extra-end">
            </div>
        </div>
    `;
    educationList.appendChild(newEntry);
    // NOTE: For a beginner, we won't sync these "extra" ones to the preview yet 
    // to keep the code simple, but this prevents errors.
    updateDateRange();
});

// 3. Date Formatting Function
function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    // Fixed: Use UTC options to avoid time-zone shifts
    return date.toLocaleDateString('en-US', { 
        month: 'short', 
        year: 'numeric', 
        timeZone: 'UTC' 
    });
}

function updateDateRange() {
    if (!startDateInput || !endDateInput || !datePreview) return;
    
    const start = formatDate(startDateInput.value);
    const end = formatDate(endDateInput.value);
    
    // Check if at least one date has been selected
    if (start || end) {
        // If start is missing but end exists, show "... - End Date"
        // If start exists but end is missing, show "Start Date - Present"
        const startText = start || "...";
        const endText = end || "Present";
        datePreview.textContent = `${startText} - ${endText}`;
    } else {
        // Only show this if BOTH inputs are empty
        datePreview.textContent = "Graduation Date";
    }
}
// 5. Education Event Listeners (Check if elements exist first)
if (schoolInput && schoolPreview) {
    schoolInput.addEventListener('input', () => {
        schoolPreview.textContent = schoolInput.value || "University Name";
    });
}

if (degreeInput && degreePreview) {
    degreeInput.addEventListener('input', () => {
        degreePreview.textContent = degreeInput.value || "Degree / Major";
    });
}

if (startDateInput && endDateInput) {
    startDateInput.addEventListener('input', updateDateRange);
    endDateInput.addEventListener('input', updateDateRange);
}