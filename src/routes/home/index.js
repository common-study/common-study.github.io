import { h, Component } from 'preact';
import { Nav } from '../../components/nav';
import { Main } from '../../components/main';
import { fullYear, formattedTag, tagNamesFromIds } from '../../lib/utils';
import { bind } from 'decko';
import atoms from '../../style/atoms.css';
import cx from 'classnames';

export class Home extends Component {
	constructor() {
		super();
		this.state.selectedTags = [];
	}

	@bind
	selectTag(tag) {
		this.setState({ selectedTags: this.state.selectedTags.concat(tag) });
	}

	@bind
	deselectTag(tag) {
		this.setState({
			selectedTags: this.state.selectedTags.filter(
				selectedTag => selectedTag !== tag
			)
		});
	}

	get selectedPosts() {
		if (this.state.selectedTags.length) {
			return this.props.posts.filter(post => {
				const postTags = tagNamesFromIds(
					[].concat(post.tags, post.categories),
					[].concat(this.props.tags, this.props.categories)
				).concat(formattedTag(fullYear(post.date)));

				return this.state.selectedTags.every(selectedTag =>
					postTags.includes(selectedTag)
				);
			});
		} else {
			return this.props.posts;
		}
	}

	render({ posts, tags, categories }, { selectedTags }) {
		return (
			<div class={atoms.flex}>
				<div class={cx(atoms.wOneThird, atoms.dib)}>
					<Nav
						{...{
							posts,
							tags,
							categories,
							selectTag: this.selectTag,
							deselectTag: this.deselectTag
						}}
					/>
				</div>
				<div class={cx(atoms.wTwoThirds, atoms.dib)}>
					<Main selectedPosts={this.selectedPosts} />
				</div>
			</div>
		);
	}
}
