import { h } from 'preact';
import { Header } from '../../components/header';
import { formattedDate, tagNamesFromIds } from '../../lib/utils';
import styles from './styles.css';
import atoms from '../../style/atoms.css';

const PostDetails = ({ post, tags, categories }) => (
	<section class={atoms.pa}>
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
	<section class={atoms.pa}>
		<h1>{post.title.rendered}</h1>
		<div
			class={`${atoms.measure} ${atoms.wpContent}`}
			dangerouslySetInnerHTML={{ __html: post.content.rendered }}
		/>
	</section>
);

export const PostPage = ({ tags, categories, post }) => (
	<div class={styles.wrapper}>
		<Header />
		<main class={atoms.central}>
			{/* <div class={atoms.wOneThird}>
				<PostDetails {...{ post, tags, categories }} />
			</div> */}
			<div class={atoms.wTwoThirds}>
				<Post post={post} />
			</div>
		</main>
	</div>
);
