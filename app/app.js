const projects = [{ project: '01-color-flipper' }, { project: '02-counter' }, { project: '03-reviews' }, { project: '04-navbar' }, { project: '05-sidebar' }, { project: '06-modal' }, { project: '07-questions' }, { project: '08-menu' }, { project: '09-video' }, { project: '10-scroll' }, { project: '11-tabs' }, { project: '12-countdown-timer' }, { project: '13-lorem-ipsum' }, { project: '14-grocery-bud' }, { project: '15-slider' }, { project: '16-counter' }, { project: '17-gallery' }, { project: '18-numbers' }, { project: '19-dark-mode' }, { project: '20-filters' }, { project: '21-dad-jokes' }, { project: '22-products' }, { project: '23-random-user' }, { project: '24-cocktails' }, { project: '25-slider' }, { project: '26-stripe-submenus' }, { project: '27-pagination' }, { project: '28-wikipedia' }, { project: '29-comfy-store' }];

function render(projects) {
	const mainLinks = document.querySelector('.main-links');

	const list = document.createElement('ul');
	list.setAttribute('class', 'project-lists');
	const item = projects.map(key => {
		const elements = `
      <li>
        <a href="./${key.project}/final/index.html">${key.project}</a>
      </li>
    `;
		// console.log(elements);
		return elements;
	});
	list.innerHTML = item.join('');
	// console.log(list);
	mainLinks.appendChild(list);
}

function linksElement(props) {
	const html = `
    <ul class="links">
      <li>
        <a href="./${props}/final/index.html">${props}</a>
      </li>
    </ul>
  `;
	return html;
}

function ProjectLinks() {
	render(projects);
}

ProjectLinks();

export default ProjectLinks;

/**
 * Ideas:
 * Create ul and insert the list items to it.
 * Item has html element and loop through the projects array object.
 * Contain the list within the list.
 * Append the list with item to the mainLinks.
 */
