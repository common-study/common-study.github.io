import { h, Component } from 'preact';
import { formattedTag } from '../../lib/utils';
import { bind } from 'decko';
import styles from './styles.css';

export class Checkbox extends Component {
	constructor() {
		super();
		this.state.isChecked = false;
	}

	@bind
	handleClick() {
		if (this.state.isChecked) {
			this.setState({ isChecked: false });
			this.props.deselectTag(formattedTag(this.props.value));
		} else {
			this.setState({ isChecked: true });
			this.props.selectTag(formattedTag(this.props.value));
		}
	}

	render({ value }, { isChecked }) {
		return (
			<div class={`foo js-checkbox ma2 f6 w-25`}>
				<div
					class="flex items-center pointer"
					onClick={this.handleClick}
				>
					<div
						class={`${styles.tickbox} ${
							isChecked ? styles.tickboxActive : ''
						}`}
					/>
					<span class="ml1">{value}</span>
				</div>
			</div>
		);
	}
}
