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
