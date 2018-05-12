export const uniqueArray = array => [...new Set(array)];
import atoms from '../style/atoms.css';

export const formattedTag = tag =>
	String(tag)
		.toLowerCase()
		.replace(/ /g, '-');

export const fullYear = date => new Date(date).getFullYear();

export const tagNamesFromIds = (tags, data) =>
	tags
		.map(tagId => data.find(tag => tag.id === tagId).name)
		.map(formattedTag);

export const formattedDate = date =>
	new Date(date).toLocaleString('en-US', {
		month: 'long',
		year: 'numeric',
		day: 'numeric'
	});

export const randomFontSet = () => {
	const fontsList = [
		{
			header: atoms.sansSerif,
			body: atoms.sansSerif
		}
		// ADD MORE FONT OPTIONS HERE
	];
	return fontsList[Math.floor(Math.random() * fontsList.length)];
};
