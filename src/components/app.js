import { h } from 'preact';
import { BrowserRouter, Route } from 'react-router-dom';
import { parse } from 'query-string';
import { Home } from '../routes/home';
import { Post } from '../routes/post';

export const App = props =>
    <BrowserRouter>
        <Route exact
            path="/"
            render={({location}) => {
                const query = parse(location.search);
                return query.post
                    ? <Post post={ props.postData.find(post => post.slug === query.post) } {...props} />
                    : <Home {...props} />
            }}
        />
    </BrowserRouter>
