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
	<section class={styles.postDetails}>
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
	<section class={styles.post}>
		<h1>{post.title.rendered}</h1>
		<div
			class={styles.postContent}
			dangerouslySetInnerHTML={{ __html: post.content.rendered }}
		/>
	</section>
);

export const PostPage = ({ tags, categories, post }) => (
	<div class={styles.wrapper}>
		<Header />
		<main class={styles.flex}>
			<PostDetails {...{ post, tags, categories }} />
			<Post post={post} />
		</main>
	</div>
);
