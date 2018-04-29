import { h } from 'preact';
import { Checkbox } from '../checkbox';
import { uniqueArray } from '../../lib/utils';
import styles from './styles.css';

export const Nav = ({ posts, tags, categories, selectTag, deselectTag }) => (
	<nav class={styles.nav}>
		<div class={styles.tagGroup}>
			{uniqueArray(
				posts.map(({ date }) => new Date(date).getFullYear())
			).map(date => (
				<Checkbox
					value={date}
					selectTag={selectTag}
					deselectTag={deselectTag}
				/>
			))}
		</div>
		<div class={styles.tagGroup}>
			{categories.map(({ name }) => (
				<Checkbox
					value={name}
					selectTag={selectTag}
					deselectTag={deselectTag}
				/>
			))}
		</div>
		<div class={styles.tagGroup}>
			{tags.map(({ name }) => (
				<Checkbox
					value={name}
					selectTag={selectTag}
					deselectTag={deselectTag}
				/>
			))}
		</div>
	</nav>
);
