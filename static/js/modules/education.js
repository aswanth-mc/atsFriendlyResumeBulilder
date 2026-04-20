import { formatDate } from './utils.js';

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