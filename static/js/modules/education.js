import { formatDate } from './utils.js';

export function initEducation() {
    // 1. SELECT ELEMENTS (Crucial: Define these so the functions can see them)
    const schoolInput = document.getElementById('school-input');
    const degreeInput = document.getElementById('degree-input');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');

    const schoolPreview = document.getElementById('preview-school');
    const degreePreview = document.getElementById('preview-degree');
    const datePreview = document.getElementById('preview-edu-date');

    // 2. INTERNAL FUNCTION: Update Date Range
    function updateDateRange() {
        if (!startDateInput || !endDateInput || !datePreview) return;
        
        const start = formatDate(startDateInput.value);
        const end = formatDate(endDateInput.value);
        
        if (start || end) {
            const startText = start || "...";
            const endText = end || "Present";
            datePreview.textContent = `${startText} - ${endText}`;
        } else {
            datePreview.textContent = "Graduation Date";
        }
    }

    // 3. ADD EDUCATION BUTTON LOGIC
    const addBtn = document.getElementById('add-edu-btn');
    if (addBtn) {
        addBtn.addEventListener('click', function() {
            const educationList = document.getElementById('education-list');
            if (!educationList) return;

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
            updateDateRange(); // Updates the first row's preview
        });
    }

    // 4. EVENT LISTENERS
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
}