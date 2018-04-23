import { h, Component } from 'preact';
import { Link } from 'react-router-dom';

export class PostPreview extends Component {
    constructor () {
        super();
		this.state.isActive = false;
    }

    handleClick () {
        this.setState({isActive: !this.state.isActive})
    }

    render (props, state) {
		console.log('post preview props', props)
        return (
            <div
                class={`js-card ba ma3 pa2 ${ state.isActive ? 'w-50' : 'w-25 h3'}`}
                onClick={this.handleClick.bind(this)}
            >
                <h3>{ props.post.title.rendered }</h3>
                { state.isActive ?
                    <div>
                        <div dangerouslySetInnerHTML={{__html: props.post.content.rendered}} />
                        <Link to={`/?post=${props.post.slug}`}>></Link>
                    </div>
                : null }
            </div>
        );
    }
}

