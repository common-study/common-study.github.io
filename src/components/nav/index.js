import { h } from 'preact';
import cx from 'classnames';
import { Checkbox } from '../checkbox';
import { uniqueArray } from '../../lib/utils';
import atoms from '../../style/atoms.css';

export const Nav = ({ posts, tags, categories, selectTag, deselectTag }) => (
	<nav class={cx(atoms.relative, atoms.br, atoms.fullHeight)}>
		<div class={atoms.flexWrap}>
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
		<div class={atoms.flexWrap}>
			{categories.map(({ name }) => (
				<Checkbox
					value={name}
					selectTag={selectTag}
					deselectTag={deselectTag}
				/>
			))}
		</div>
		<div class={atoms.flexWrap}>
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
