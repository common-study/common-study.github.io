import { h, Component } from 'preact';
import { formattedTag } from '../../lib/utils';
import { bind } from 'decko';
import cx from 'classnames';
import styles from './styles.css';
import atoms from '../../style/atoms.css';

export class Checkbox extends Component {
	@bind
	handleClick() {
		this.props.isChecked
			? this.props.deselectTag(formattedTag(this.props.value))
			: this.props.selectTag(formattedTag(this.props.value));
	}

	render({ value, isChecked }) {
		return (
			<div class={cx(atoms.fSmall, atoms.wOneThird, atoms.pa)}>
				<div
					class={cx(atoms.flex, atoms.pointer, styles.checkboxInner)}
					onClick={this.handleClick}
				>
					<div
						class={cx(styles.tickbox, atoms.ba, atoms.relative, {
							[styles.tickboxActive]: isChecked
						})}
					/>
					<span class={atoms.mlSmall}>{value}</span>
				</div>
			</div>
		);
	}
}
