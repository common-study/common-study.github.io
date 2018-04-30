import { h, render } from 'preact';
import { App } from './components/app';
import './style/normalise.css';

const fetchContent = type =>
	fetch(
		`https://public-api.wordpress.com/wp/v2/sites/commonstudy.wordpress.com/${type}?per_page=100`
	).then(res => res.json());

export const content = () =>
	Promise.all([
		fetchContent('posts'),
		fetchContent('tags'),
		fetchContent('categories')
	]);

(async () => {
	const [posts, tags, categories] = await content();
	render(<App {...{ posts, tags, categories }} />, document.body);
})();
