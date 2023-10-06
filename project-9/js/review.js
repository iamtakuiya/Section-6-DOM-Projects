/* 
Tasks
- select buttons and item container 
- Add click event for each buttons.
- Correspond the data by dataset property
- filte items
- Check matches
- If matches, display block, not matches are none.
*/

const btns = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.items__content');
// const itemTags = document.querySelectorAll('.tag');

// Copy label tags from the item object
// items.forEach(item => {
// 	// copy labels
// 	const itemTags = Array.from(item.querySelectorAll('.tag'));
// 	const extractTagDataID = itemTags.map(itemTag => itemTag.dataset.id);
// 	// console.log(extractTagDataID);
// });

// Option 1: Get the data from item
// itemTags.forEach(item => {
// 	const itemTag = item.getAttribute('data-id');
// 	console.log(itemTag);
// });

// ! Doesn't work this
// const extractDataId = itemTags.forEach(item => item.map(itemTag => itemTag.dataset.id));
// console.log(extractDataId);
// const itemTags = items.forEach(item => item.Array.from(items.querySelectorAll('.tag')));

btns.forEach(btn => {
	btn.addEventListener('click', e => {
		const filterId = e.currentTarget.dataset.id;

		// Loop through every items
		items.forEach(item => {
			const itemTags = Array.from(item.querySelectorAll('.tag'));

			// Filter item matching tag and filterId or all like yes or no
			const displayMatching = itemTags.filter(tag => tag.dataset.id === filterId || filterId === 'all');

			console.log(displayMatching);
			item.style.display = displayMatching.length > 0 ? 'block' : 'none';
		});
	});
});

// stacked
// btns.forEach(btn => {
// 	btn.addEventListener('click', e => {
// 		const btnId = e.currentTarget.dataset;
// 		itemTags.filter(itemTag => {
// 			if (itemTag === btnId) {
// 				console.log(items);
// 			}
// 		});
// 	});
// });
