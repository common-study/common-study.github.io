import { h } from 'preact';
import { Link } from 'react-router-dom';
import { formattedDate, tagNamesFromIds } from '../../lib/utils';

export const Post = props =>
    <div>
        <header class="h3"><Link to="/">common study</Link></header>
        <main class="flex">
            <section class="w-third">
                { props.post.featured_media ? <img src={props.post.featured_media_url} /> : null }

                <div>Published on: { formattedDate(props.post.date) }</div>

                <ul>{
                    tagNamesFromIds(
                        [].concat(props.post.tags, props.post.categories),
                        [].concat(props.tagData, props.categoryData)
                    ).map(tag => <li>{tag}</li>)
                }</ul>

            </section>
            <section class="pl2 w-two-thirds">
                <h1>{ props.post.title.rendered }</h1>
                <div class="measure" dangerouslySetInnerHTML={{__html: props.post.content.rendered}} />
            </section>
        </main>
    </div>
