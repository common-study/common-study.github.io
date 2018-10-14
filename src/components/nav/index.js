import { h } from 'preact';
import cx from 'classnames';
import { Checkbox } from '../checkbox';
import { uniqueArray, formattedDate, formattedTag } from '../../lib/utils'; // TODO: remove dates
import atoms from '../../style/atoms.css';

export const Nav = ({
	posts,
	tags,
	categories,
	selectTag,
	deselectTag,
	selectedTags
}) => (
	<nav class={cx(atoms.relative, atoms.br, atoms.fullHeight)}>
		{/* <div class={atoms.flexWrap}>
			{uniqueArray(
				posts.map(({ date }) => new Date(date).getFullYear())
			).map(date => (
				<Checkbox
					value={date}
					selectTag={selectTag}
					deselectTag={deselectTag}
					isChecked={selectedTags.includes(formattedDate(date))}
				/>
			))}
		</div> */}
		<div class={atoms.flexWrap}>
			{categories
				.sort(
					(a, b) =>
						a.name === 'Upcoming' ? -1 : b === 'Upcoming' ? 1 : 0
				)
				.map(({ name }) => (
					<Checkbox
						value={name}
						selectTag={selectTag}
						deselectTag={deselectTag}
						isChecked={selectedTags.includes(formattedTag(name))}
					/>
				))}
		</div>
		<div class={atoms.flexWrap}>
			{tags.map(({ name }) => (
				<Checkbox
					value={name}
					selectTag={selectTag}
					deselectTag={deselectTag}
					isChecked={selectedTags.includes(formattedTag(name))}
				/>
			))}
		</div>
	</nav>
);
