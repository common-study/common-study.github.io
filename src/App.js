import { h, Component } from 'preact';
const uniqueArray = array => [...new Set(array)];
const fullYear = date => new Date(date).getFullYear();

const tagNamesFromIds = (tags, data) => tags
    .map(tagId => data.find(tag => tag.id === tagId).name)
    .map(name => name.toLowerCase().replace(' ', '-'));

const Checkbox = props =>
    <div class="js-checkbox w-25" data-tag={ props.value }>
        <div class="w1 h1 ba dib"></div>
        <span>{ props.value }</span>
    </div>

const Nav = ({ postData, tagData, categoryData }) =>
    <nav class="w-third dib bg-white br relative">
        <button class="js-nav-close absolute top-0 right-0 button-reset">X</button>
        <div class="flex flex-wrap">
            { uniqueArray(postData.map(({date}) => new Date(date).getFullYear()))
                .map(date => <Checkbox value={date} />) }
        </div>
        <div class="js-categories-container flex flex-wrap">
            { categoryData.map(({name}) => <Checkbox value={name} />) }
        </div>
        <div class="js-tags-container flex flex-wrap">
            { tagData.map(({name}) => <Checkbox value={name} />) }
        </div>
    </nav>

const Post = props =>
    <div
        class="js-card ba w-25 h4 ma3 pa2"
        data-tags={
            tagNamesFromIds(
                props.post.tags,
                [].concat(props.tagData, props.categoryData)
            )
                .concat(fullYear(props.post.date))
                .join(',')
        }
    >
        <h3>{ props.post.title.rendered }</h3>
    </div>

const Main = props =>
    <main class="dib v-top w-two-thirds">
        <div class="js-posts-container flex flex-wrap pa3">
            { props.postData.map(post => <Post post={post} {...props} />) }
        </div>
    </main>

export const App = props =>
    <div class="flex vh-100">
        <button class="js-nav-open dn">Nav</button>
        <Nav {...props} />
        <Main {...props}/>
    </div>
