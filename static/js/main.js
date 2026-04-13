const nameInput = document.getElementById('name-input');
const previewName = document.getElementById('preview-name');

nameInput.addEventListener('input',() =>{
    previewName.textContent = nameInput.value;
})