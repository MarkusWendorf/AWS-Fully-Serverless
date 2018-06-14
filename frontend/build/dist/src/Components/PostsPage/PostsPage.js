"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var api_1 = require("../../api");
var PostsPage = /** @class */ (function (_super) {
    __extends(PostsPage, _super);
    function PostsPage(props) {
        var _this = _super.call(this, props) || this;
        _this.getPosts = function () {
            _this.setState({ loading: true });
            api_1.fetchPosts().then(function (json) {
                _this.setState({ posts: json.data, error: json.error, loading: false, message: "" });
            });
        };
        _this.createNewPost = function (event) {
            event.preventDefault();
            api_1.createPost({ message: _this.state.message })
                .then(function () { return _this.getPosts(); });
        };
        _this.state = {
            posts: [],
            loading: false,
            message: "",
        };
        return _this;
    }
    PostsPage.prototype.componentDidMount = function () {
        this.getPosts();
    };
    PostsPage.prototype.render = function () {
        var _this = this;
        if (this.state.error) {
            return React.createElement("div", null, "Couldn't load posts (error: " + this.state.error);
        }
        var posts = this.state.posts.sort(function (a, b) { return a.timestamp - b.timestamp; });
        return (React.createElement("div", null,
            React.createElement("h1", null, "Posts"),
            React.createElement("form", { onSubmit: this.createNewPost, className: "post-form" },
                React.createElement("input", { name: "message", value: this.state.message, onChange: function (e) { return _this.setState({ message: e.target.value }); } }),
                React.createElement("button", { type: "submit" }, "Create Post"),
                this.state.loading &&
                    React.createElement("div", { className: "spinner" },
                        React.createElement("div", { className: "rect1" }),
                        React.createElement("div", { className: "rect2" }),
                        React.createElement("div", { className: "rect3" }),
                        React.createElement("div", { className: "rect4" }),
                        React.createElement("div", { className: "rect5" }))),
            React.createElement("ul", null, posts.map(function (post) { return (React.createElement("li", { key: post.Id }, post.message)); }))));
    };
    return PostsPage;
}(React.Component));
exports.default = PostsPage;
//# sourceMappingURL=PostsPage.js.map