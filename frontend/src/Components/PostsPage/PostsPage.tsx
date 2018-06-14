import * as React from 'react';
import {createPost, fetchPosts, Post} from "../../api";

interface Props {

}

interface State {
    posts: Post[];
    error?: string;
    loading: boolean;
    message: string;
}

class PostsPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            posts: [],
            loading: false,
            message: "",
        }
    }

    componentDidMount() {
        this.getPosts();
    }

    render() {

        if (this.state.error) {
            return <div>{`Couldn't load posts (error: ${this.state.error}`}</div>
        }

        const posts = this.state.posts.sort((a, b) => a.timestamp - b.timestamp);

        return (
            <div>
                <h1>Posts</h1>

                <form onSubmit={this.createNewPost} className="post-form">
                    <input name="message"
                           value={this.state.message}
                           onChange={(e: any) => this.setState({message: e.target.value})}
                    />
                    <button type="submit">Create Post</button>
                    {this.state.loading &&
                    <div className="spinner">
                        <div className="rect1"/>
                        <div className="rect2"/>
                        <div className="rect3"/>
                        <div className="rect4"/>
                        <div className="rect5"/>
                    </div>
                    }
                </form>

                <ul>
                    {posts.map((post: Post) => (
                        <li key={post.Id}>{post.message}</li>
                    ))}
                </ul>
            </div>
        );
    }

    getPosts = () => {
        this.setState({loading: true});

        fetchPosts().then((json: any) => {
            this.setState({posts: json.data, error: json.error, loading: false, message: ""});
        })
    };

    createNewPost = (event: any) => {
        event.preventDefault();

        createPost({message: this.state.message})
            .then(() => this.getPosts());
    }
}

export default PostsPage
