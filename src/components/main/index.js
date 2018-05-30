import { h, Component } from 'preact';
import { Motion, spring, presets } from 'react-motion';
import cx from 'classnames';
import { PostPreview } from '../post-preview';
import styles from './styles.css';
import atoms from '../../style/atoms.css';

export class Main extends Component {
	constructor(props) {
		super(props);
		this.ROW_LENGTH = this.props.rowLength || 3;
		this.BOX_HEIGHT = this.props.boxHeight || 5;
		this.BOX_WIDTH = this.props.boxWidth || 16; // TODO: share between css and js
		this.state = {
			activePostId: null
		};
	}

	row(index) {
		return Math.ceil((index + 1) / this.ROW_LENGTH) - 1;
	}

	column(index) {
		return index % this.ROW_LENGTH;
	}

	style(index) {
		return {
			translateX: spring(
				this.BOX_WIDTH * this.column(index) + this.column(index), // times two to hack a gutter
				presets.stiff
			),
			translateY: spring(
				this.BOX_HEIGHT * this.row(index) + this.row(index),
				presets.stiff
			)
		};
	}

	toggleActive(id) {
		if (this.state.activePostId === id) {
			this.setState({
				activePostId: null
			});
		} else {
			this.setState({
				activePostId: id
			});
		}
	}

	render({ selectedPosts }, { activePostId }) {
		return (
			<main class={atoms.ma}>
				{selectedPosts.map((post, index) => (
					<Motion key={post.id} style={this.style(index)}>
						{({ translateX, translateY }) => (
							<div
								class={cx(
									atoms.absolute,
									atoms.background,
									styles.post
								)}
								style={{
									transform: `translate3d(${translateX}rem, ${translateY}rem, 0)`,
									zIndex:
										index === 0
											? 99
											: selectedPosts.length - index
								}}
							>
								<PostPreview
									post={post}
									onClick={this.toggleActive.bind(
										this,
										post.id
									)}
									isActive={post.id === activePostId}
								/>
							</div>
						)}
					</Motion>
				))}
			</main>
		);
	}
}
