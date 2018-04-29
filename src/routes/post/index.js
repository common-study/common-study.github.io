import { h } from 'preact';
import { Link } from 'react-router-dom';
import { formattedDate, tagNamesFromIds } from '../../lib/utils';
import styles from './styles.css';

export const Post = ({ tags, categories, post }) => (
	<div class={styles.wrapper}>
		<header class="pa4">
			<Link to="/">common study</Link>
		</header>
		<main class="flex">
			<section class="w-third pa4">
				{post.featured_media ? (
					<img src={post.featured_media_url} />
				) : null}

				<div>Published on: {formattedDate(post.date)}</div>

				<ul>
					{tagNamesFromIds(
						[].concat(post.tags, post.categories),
						[].concat(tags, categories)
					).map(tag => <li>{tag}</li>)}
				</ul>
			</section>
			<section class="pa4 w-two-thirds">
				<h1>{post.title.rendered}</h1>
				<div
					class="measure"
					dangerouslySetInnerHTML={{ __html: post.content.rendered }}
				/>
			</section>
		</main>
	</div>
);
