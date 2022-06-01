// Toggle skills' legend
function legend() {
    document.getElementById('legend').classList.toggle('hidden');
}

function legendAdvanced() {
    let skills = document.querySelectorAll('.advanced');
    skills.forEach(item => {
        item.classList.toggle('hidden');
    });
}

function legendMedium() {
    let skills = document.querySelectorAll('.medium');
    skills.forEach(item => {
        item.classList.toggle('hidden');
    });
}

function legendBeginner() {
    let skills = document.querySelectorAll('.beginner');
    skills.forEach(item => {
        item.classList.toggle('hidden');
    });
}

function isCategoryEmpty() {
    document.querySelector()
}