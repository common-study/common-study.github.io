import { h, Component } from 'preact';
import { formattedTag } from '../lib/utils';

export class Checkbox extends Component {
    constructor () {
        super();
		this.state.isChecked = false;
    }

    handleClick () {
        if (this.state.isChecked) {
            this.setState({isChecked: false});
            this.props.deselectTag(formattedTag(this.props.value))
        } else {
            this.setState({isChecked: true});
            this.props.selectTag(formattedTag(this.props.value))
        }
    }

    render (props, state) {
        return (
            <div class={`js-checkbox w-25 ${state.isChecked ? 'js-checkbox--checked' : ''}`} onClick={this.handleClick.bind(this)}>
                <div class="w1 h1 ba dib"></div>
                <span>{ props.value }</span>
            </div>
        );
    }
}
