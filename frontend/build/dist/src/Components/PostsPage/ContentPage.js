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
var ContentPage = /** @class */ (function (_super) {
    __extends(ContentPage, _super);
    function ContentPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            posts: [],
        };
        return _this;
    }
    ContentPage.prototype.componentDidMount = function () {
        var _this = this;
        api_1.fetchPosts().then(function (json) {
            _this.setState({ posts: json.data.Items, error: json.error });
        });
    };
    ContentPage.prototype.render = function () {
        if (this.state.error) {
            return React.createElement("div", null, "Couldn't load posts (error: " + this.state.error);
        }
        console.log(this.state.posts, "post");
        var posts = this.state.posts.sort(function (a, b) { return a.timestamp.N - b.timestamp.N; });
        return (React.createElement("div", null,
            React.createElement("h1", null, "Posts"),
            React.createElement("ul", null, posts.map(function (post) { return (React.createElement("li", { key: post.Id.S }, post.message.S)); }))));
    };
    return ContentPage;
}(React.Component));
exports.default = ContentPage;
//# sourceMappingURL=ContentPage.js.map