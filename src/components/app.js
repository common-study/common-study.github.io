import { h } from 'preact';
import { BrowserRouter, Route } from 'react-router-dom';
import { parse } from 'query-string';
import { Home } from '../routes/home';
import { PostPage } from '../routes/post';

export const App = props => (
	<BrowserRouter>
		<Route
			exact
			path="/"
			render={({ location }) => {
				const query = parse(location.search);
				if (query.post) {
					const post = props.posts.find(
						post => post.slug === query.post
					);
					return <PostPage post={post} {...props} />;
				} else {
					return <Home {...props} />;
				}
			}}
		/>
	</BrowserRouter>
);
