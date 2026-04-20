export function initUiSync() {
    const mappings = [
        { input: 'name-input', preview: 'preview-name' },
        { input: 'professional-title', preview: 'preview-title' },
        { input: 'email', preview: 'preview-email' },
        { input: 'phone', preview: 'preview-phone' },
        { input: 'location', preview: 'preview-location' },
        { input: 'professional-summary', preview: 'preview-summary' }
    ];

    mappings.forEach(item => {
        const inp = document.getElementById(item.input);
        const pre = document.getElementById(item.preview);
        if (inp && pre) {
            inp.addEventListener('input', () => {
                pre.textContent = inp.value || pre.getAttribute('data-placeholder');
            });
        }
    });
}