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
				class={isActive ? styles.cardActive : styles.cardNormal}
				onClick={this.handleClick}
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
