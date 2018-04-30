import { h } from 'preact';
import { Link } from 'react-router-dom';
import { formattedDate, tagNamesFromIds } from '../../lib/utils';
import styles from './styles.css';

const Header = () => (
	<header class={styles.header}>
		<Link to="/">common study</Link>
	</header>
);

const PostDetails = ({ post, tags, categories }) => (
	<section class={styles.pa}>
		{post.featured_media ? <img src={post.featured_media_url} /> : null}

		<div>Published on: {formattedDate(post.date)}</div>

		<ul>
			{tagNamesFromIds(
				[].concat(post.tags, post.categories),
				[].concat(tags, categories)
			).map(tag => <li>{tag}</li>)}
		</ul>
	</section>
);

const Post = ({ post }) => (
	<section class={styles.pa}>
		<h1>{post.title.rendered}</h1>
		<div
			class={styles.measure}
			dangerouslySetInnerHTML={{ __html: post.content.rendered }}
		/>
	</section>
);

export const PostPage = ({ tags, categories, post }) => (
	<div class={styles.wrapper}>
		<Header />
		<main>
			<div class={styles.wOneThird}>
				<PostDetails {...{ post, tags, categories }} />
			</div>
			<div class={styles.wTwoThirds}>
				<Post post={post} />
			</div>
		</main>
	</div>
);
