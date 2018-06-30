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

const fontsList = [
	{
		header: atoms.sansSerif,
		body: atoms.sansSerif
	},
	{
		header: atoms.serif,
		body: atoms.serif
	},
	{
		header: atoms.monospace,
		body: atoms.monospace
	},
	{
		header: atoms.palatino,
		body: atoms.palatino
	},
	{
		header: atoms.garamond,
		body: atoms.garamond
	},
	{
		header: atoms.bookman,
		body: atoms.bookman
	},
	{
		header: atoms.comicSans,
		body: atoms.comicSans
	},
	{
		header: atoms.avantGarde,
		body: atoms.avantGarde
	},
	{
		header: atoms.trebuchet,
		body: atoms.trebuchet
	},
	{
		header: atoms.impact,
		body: atoms.impact
	},
	{
		header: atoms.verdana,
		body: atoms.verdana
	},
	{
		header: atoms.georgia,
		body: atoms.georgia
	}
];

export const randomFontSet = () => {
	return fontsList[Math.floor(Math.random() * fontsList.length)];
};
