import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import { bind } from 'decko';
import styles from './styles.css';

export class PostPreview extends Component {
	constructor() {
		super();
		this.state.isActive = false;
	}

	@bind
	handleClick() {
		this.setState({ isActive: !this.state.isActive });
	}

	render({ post }, { isActive }) {
		return (
			<div
				class={styles.card}
				onClick={this.handleClick}
				style={{
					width: isActive ? '33rem' : '100%'
				}}
			>
				<h3>{post.title.rendered}</h3>
				{isActive ? (
					<div>
						<div
							dangerouslySetInnerHTML={{
								__html: post.content.rendered
							}}
						/>
						<Link to={`/?post=${post.slug}`}>more</Link>
					</div>
				) : null}
			</div>
		);
	}
}