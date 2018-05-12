import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import { bind } from 'decko';
import styles from './styles.css';
import atoms from '../../style/atoms.css';
import cx from 'classnames';
import { randomFontSet } from '../../lib/utils';

export class PostPreview extends Component {
	constructor() {
		super();
		this.state.isActive = false;
		this.state.fonts = randomFontSet();
	}

	@bind
	handleClick() {
		this.setState({ isActive: !this.state.isActive });
	}

	render({ post }, { isActive, fonts }) {
		return (
			<div
				class={cx(
					atoms.ba,
					atoms.pa,
					atoms.pointer,
					atoms.background,
					isActive ? styles.active : styles.inactive,
					fonts.header
				)}
				onClick={this.handleClick}
			>
				<h3>{post.title.rendered}</h3>
				{isActive ? (
					<div>
						<div
							class={cx(atoms.wpContent, fonts.body)}
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
