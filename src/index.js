import { h, render } from 'preact';
import { App } from './components/app';

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
    render(<App {...initialState} />, document.body);
})()
