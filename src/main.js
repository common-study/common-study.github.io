import { h, render } from 'preact';
import { App } from './App';

export const data = () => Promise.all([
	fetch('https://public-api.wordpress.com/wp/v2/sites/commonstudy.wordpress.com/tags?per_page=100')
		.then(res => res.json()),
	fetch('https://public-api.wordpress.com/wp/v2/sites/commonstudy.wordpress.com/posts?per_page=100')
		.then(res => res.json()),
	fetch('https://public-api.wordpress.com/wp/v2/sites/commonstudy.wordpress.com/categories?per_page=100')
		.then(res => res.json())
]);

(async () => {
	const [ tagData, postData, categoryData ] = await data();
	const initialState = { tagData, postData, categoryData };
	console.log(initialState);
    render(<App {...initialState} />, document.body);
})()


// (async () => {
// 	// Make the HTTP requests for the wordpress data
// 	const [ tagData, postData, categoryData ] = await data();

// 	// For the initial prototype we will combine tags and categories and treat them as just plain tags.
// 	// Todo: define what we want to do when a user selects categories / about pages in the nav.
// 	const allTagsAndCategories = [].concat(tagData, categoryData);

// 	const tagNamesFromIds = (tags, data) => tags
// 		.map(tagId => data.find(tag => tag.id === tagId).name)
// 		.map(name => name.toLowerCase().replace(' ', '-'));

// 	const fullYear = date => new Date(date).getFullYear();

// 	postData.forEach(({ tags, categories, title, date}) => {
// 		// Create card element
// 		const card = document.createElement('div');
// 		// Add tachyons classes for styling (see: www.tachyons.io)
// 		card.classList.add('js-card', 'ba', 'w-25', 'h4', 'ma3', 'pa2');
// 		// Add comma-sepated list of the card's tags as a data-attribute.
// 		// Treat tags, categories AND dates as plain tags for now (not desired behaviour in future, see above).
// 		card.dataset.tags = tagNamesFromIds([].concat(tags, categories), allTagsAndCategories)
// 			.concat(fullYear(date))
// 			.join(',');
// 		// Create the card's title element
// 		const header = document.createElement('h3');
// 		header.innerText = title.rendered
// 		// Append the title to the card
// 		card.appendChild(header);
// 		document.querySelector('.js-posts-container').appendChild(card);
// 	})

// 	const navItem = text => {

// 		const container = document.createElement('div');
// 		container.classList.add('js-checkbox', 'w-25');
// 		container.dataset.tag = text.toLowerCase().replace(' ', '-');

// 		const checkbox = document.createElement('div');
// 		checkbox.classList.add('w1', 'h1', 'ba', 'dib');

// 		const label = document.createElement('span');
// 		label.innerText = text

// 		container.appendChild(checkbox);
// 		container.appendChild(label);
// 		return container;

// 	}

// 	tagData.map(tag => tag.name)
// 		.map(navItem)
// 		.forEach(item => document.querySelector('.js-tags-container').appendChild(item));

// 	categoryData.map(category => category.name)
// 		.map(navItem)
// 		.forEach(item => document.querySelector('.js-categories-container').appendChild(item))

// 	postData.map(post => new Date(post.date).getFullYear())
// 		// Get unique Date results
// 		.sort().filter((date, index, array) => date !== array[index - 1])
// 		// Turn numbers into strings
// 		.map(String)
// 		// Create checkbox elements for each date
// 		.map(navItem)
// 		// Attach each date checkbox to the dates container element
// 		.forEach(item => document.querySelector('.js-dates-container').appendChild(item))

// 	const closeButton = document.querySelector('.js-nav-close')
// 	const nav = document.querySelector('nav');
// 	const openButton = document.querySelector('.js-nav-open')
// 	const main = document.querySelector('main');
// 	const cards = document.querySelectorAll('.js-card');
// 	const checkboxes = document.querySelectorAll('.js-checkbox');

// 	const checkedTags = () =>
// 		// Get the tag data attributes of all selected checkboxes in the navigation
// 		Array.from(document.querySelectorAll('.js-checkbox--checked')).map(checkbox => checkbox.dataset.tag);

// 	const toggleNav = () => {
// 		// Toggle tachyons classes to show / hide the navigation and its open button as appropriate
// 		nav.classList.toggle('dn');
// 		nav.classList.toggle('dib');
// 		openButton.classList.toggle('dn');
// 	}
// 	const handleCardClick = ({ currentTarget }) => {
// 		// Toggle tachyons classes to expand / shrink cards as appropriate
// 		currentTarget.classList.toggle('w-25');
// 		currentTarget.classList.toggle('w-50');
// 		currentTarget.classList.toggle('h5');
// 		currentTarget.classList.toggle('h3');
// 	}
// 	const handleCheckboxClick = ({ currentTarget }) => {
// 		// Add or remove the --checked class to the clicked checkbox
// 		currentTarget.classList.toggle('js-checkbox--checked');

// 		const checkedBoxes = Array.from(document.querySelectorAll(`.js-checkbox--checked`));
// 		if (!checkedBoxes.length) {
// 			// If no tags are selected in the navigation, make any hidden cards visible
// 			Array.from(document.querySelectorAll('.js-card.dn'))
// 				.forEach(hiddenCard => hiddenCard.classList.remove('dn'));
// 			return;
// 		};

// 		const taggedCards = Array.from(cards)
// 			.filter(el => el.dataset.tags
// 				.split(',')
// 				.some(tag => checkedTags().includes(tag))
// 			);

// 		// Make sure no cards tagged with any of the selected tags are hidden
// 		taggedCards.forEach(card => card.classList.remove('dn'));

// 		// Hide cards not tagged with any of the selected tags
// 		Array.from(cards)
// 			.filter(card => !taggedCards.includes(card))
// 			.forEach(card => card.classList.add('dn'));
// 	}

// 	Array.from(cards)
// 		.forEach(card => card.addEventListener('click', handleCardClick));

// 	Array.from(checkboxes)
// 		.forEach(checkbox => checkbox.addEventListener('click', handleCheckboxClick));

// 	closeButton.addEventListener('click', toggleNav);
// 	openButton.addEventListener('click', toggleNav);
// })();
