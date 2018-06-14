import * as React from 'react';
import {Route, Switch} from "react-router";
import HomePage from "./Components/Home/HomePage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import PostsPage from "./Components/PostsPage/PostsPage";
import {BrowserRouter, Link} from "react-router-dom";
import AboutPage from "./Components/AboutPage/AboutPage";


interface Props {

}

interface State {

}

class Main extends React.Component<Props, State> {


    componentDidMount() {
    }


    render() {

        return (
            <div className="page">
                <BrowserRouter>
                    <div>
                        <nav className="navigation">
                            <Link to={"/"}>Home</Link>
                            <Link to={"/posts"}>Posts</Link>
                            <Link to={"/about"}>About</Link>
                        </nav>

                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/posts" component={PostsPage}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route component={ErrorPage}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Main;
