const nav = document.querySelector('nav');

const projectsNumber = 15;
let html = '';

for (let i = 1; i <= projectsNumber; i++) {
    html += `<a href="./project-${i}/index.html" aria-current="Project ${i}">Project ${i}</a>`
}
nav.innerHTML = html;
