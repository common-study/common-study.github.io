import { h, Component } from 'preact';
import { Nav } from '../../components/nav';
import { PostPreview } from '../../components/post-preview';
import { fullYear, formattedTag, tagNamesFromIds } from '../../lib/utils';

export class Home extends Component {
    constructor () {
        super();
        this.state.selectedTags = []
    }

    selectTag (tag) {
        this.setState({selectedTags: this.state.selectedTags.concat(tag)})
    }

    deselectTag (tag) {
        this.setState({selectedTags: this.state.selectedTags.filter(selectedTag => selectedTag !== tag)})
    }

    render (props, state) {
        const posts = state.selectedTags.length
            ? props.postData.filter(post =>
                tagNamesFromIds(
                    [].concat(post.tags, post.categories),
                    [].concat(props.tagData, props.categoryData)
                )
                    .concat(formattedTag(fullYear(post.date)))
                    .some(tag => state.selectedTags.includes(tag))
            )
            : props.postData;
        return (
            <div class="flex vh-100">
                <Nav {...props} selectTag={this.selectTag.bind(this)} deselectTag={this.deselectTag.bind(this)}/>
                <main class="dib v-top w-two-thirds">
                    <div class="js-posts-container flex flex-wrap pa3">
                        { posts.map(post => <PostPreview post={post} {...props} />) }
                    </div>
                </main>
            </div>
        );
    }
}
