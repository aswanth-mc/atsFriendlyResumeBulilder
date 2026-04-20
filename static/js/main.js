import { initUiSync } from './modules/ui-sync.js';
import { initEducation } from './modules/education.js';

document.addEventListener('DOMContentLoaded', () => {
    initUiSync();
    initEducation();
    // initWorkExp();
    // initCertificates();
    console.log("All modules initialized.");
});