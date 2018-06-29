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
		this.state.fonts = randomFontSet();
	}

	render({ post, isActive, onClick, position }, { fonts }) {
		return (
			<div
				class={cx(
					atoms.ba,
					atoms.pa,
					atoms.pointer,
					atoms.background,
					isActive ? styles.active : styles.inactive,
					fonts.header,
					isActive ? '' : atoms.parentHeight,
					atoms.overflowHidden,
					styles[position]
				)}
				onClick={onClick}
			>
				<h3>{post.title.rendered}</h3>
				{isActive ? (
					<div>
						<div
							class={cx(atoms.wpContent, fonts.body)}
							dangerouslySetInnerHTML={{
								__html:
									post.content.rendered.length < 750
										? post.content.rendered
										: post.content.rendered.slice(0, 750) +
										  '...'
							}}
						/>
						<Link to={`/?post=${post.slug}`}>more</Link>
					</div>
				) : null}
			</div>
		);
	}
}
