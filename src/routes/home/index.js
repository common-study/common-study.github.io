import { h, Component } from 'preact';
import { Nav } from '../../components/nav';
import { Main } from '../../components/main';
import { fullYear, formattedTag, tagNamesFromIds } from '../../lib/utils';
import { bind } from 'decko';

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

	render({ posts, tags, categories }, { selectedTags }) {
		const selectedPosts = selectedTags.length
			? posts.filter(post =>
					tagNamesFromIds(
						[].concat(post.tags, post.categories),
						[].concat(tags, categories)
					)
						.concat(formattedTag(fullYear(post.date)))
						.some(tag => selectedTags.includes(tag))
			  )
			: posts;
		return (
			<div class="flex vh-100">
				<Nav
					{...{
						posts,
						tags,
						categories,
						selectTag: this.selectTag,
						deselectTag: this.deselectTag
					}}
				/>
				<Main selectedPosts={selectedPosts} />
			</div>
		);
	}
}
