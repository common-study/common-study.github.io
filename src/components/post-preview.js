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

    render ({ post }, {isActive}) {
        return (
            <div
                class={`js-card ba ma3 pa2 ${ isActive ? 'w-50' : 'w-25 h3 pointer'}`}
                onClick={this.handleClick.bind(this)}
            >
                <h3>{ post.title.rendered }</h3>
                { isActive ?
                    <div>
                        <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                        <Link to={`/?post=${post.slug}`}>more</Link>
                    </div>
                : null }
            </div>
        );
    }
}

