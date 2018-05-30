import { h, Component } from 'preact';
import { Nav } from '../../components/nav';
import { Main } from '../../components/main';
import { fullYear, formattedTag, tagNamesFromIds } from '../../lib/utils';
import { bind } from 'decko';
import atoms from '../../style/atoms.css';
import cx from 'classnames';
import Media from 'react-media';

class MobileNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	@bind
	handleClick() {
		this.setState(prev => ({
			open: !prev.open
		}));
	}

	render(props, { open }) {
		return (
			<div>
				{open ? (
					<div
						style={{
							position: 'absolute',
							background: 'white',
							zIndex: 100,
							top: 0
						}}
					>
						<button onClick={this.handleClick}>close</button>
						<Nav {...props} />
					</div>
				) : (
					<button onClick={this.handleClick}>menu</button>
				)}
			</div>
		);
	}
}

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
			<Media query="(max-width: 1000px)">
				{matches =>
					matches ? (
						<span>
							<MobileNav
								{...{
									posts,
									tags,
									categories,
									selectTag: this.selectTag,
									deselectTag: this.deselectTag,
									selectedTags: this.state.selectedTags
								}}
							/>
							<Main
								selectedPosts={this.selectedPosts}
								rowLength={2}
							/>
						</span>
					) : (
						<div class={atoms.flex}>
							<div class={cx(atoms.wOneThird, atoms.dib)}>
								<Nav
									{...{
										posts,
										tags,
										categories,
										selectTag: this.selectTag,
										deselectTag: this.deselectTag,
										selectedTags: this.state.selectedTags
									}}
								/>
							</div>
							<div class={cx(atoms.wTwoThirds, atoms.dib)}>
								<Main selectedPosts={this.selectedPosts} />
							</div>
						</div>
					)
				}
			</Media>
		);
	}
}
