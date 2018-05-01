import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import { bind } from 'decko';
import styles from './styles.css';
import atoms from '../../style/atoms.css';
import cx from 'classnames';

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
				class={cx(
					atoms.ba,
					atoms.pa,
					atoms.pointer,
					atoms.background,
					isActive ? styles.active : styles.inactive
				)}
				onClick={this.handleClick}
			>
				<h3>{post.title.rendered}</h3>
				{isActive ? (
					<div>
						<div
							class={atoms.wpContent}
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
