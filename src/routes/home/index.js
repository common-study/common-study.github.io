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

    render ({ posts, tags, categories }, { selectedTags }) {
        console.log({ posts, tags, categories })
        const selectedPosts = selectedTags.length
            ? posts.filter(post =>
                tagNamesFromIds(
                    [].concat(post.tags, post.categories),
                    [].concat(tags, categories)
                )
                    .concat(formattedTag(fullYear(post.date)))
                    .some(tag => selectedTags.includes(tag))
            )
            : posts;
        return (
            <div class="flex vh-100">
                <Nav {...{ posts, tags, categories, selectTag: this.selectTag.bind(this), deselectTag: this.deselectTag.bind(this) }} />
                <main class="dib v-top w-two-thirds">
                    <div class="js-posts-container flex flex-wrap pa3">
                        { selectedPosts.map(post => console.log(post) || <PostPreview post={post} />) }
                    </div>
                </main>
            </div>
        );
    }
}
