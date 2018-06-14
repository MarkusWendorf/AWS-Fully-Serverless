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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_router_1 = require("react-router");
var HomePage_1 = __importDefault(require("./Components/Home/HomePage"));
var ErrorPage_1 = __importDefault(require("./Components/ErrorPage/ErrorPage"));
var PostsPage_1 = __importDefault(require("./Components/PostsPage/PostsPage"));
var react_router_dom_1 = require("react-router-dom");
var AboutPage_1 = __importDefault(require("./Components/AboutPage/AboutPage"));
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.componentDidMount = function () {
    };
    Main.prototype.render = function () {
        return (React.createElement("div", { className: "page" },
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement("div", null,
                    React.createElement("nav", { className: "navigation" },
                        React.createElement(react_router_dom_1.Link, { to: "/" }, "Home"),
                        React.createElement(react_router_dom_1.Link, { to: "/posts" }, "Posts"),
                        React.createElement(react_router_dom_1.Link, { to: "/about" }, "About")),
                    React.createElement(react_router_1.Switch, null,
                        React.createElement(react_router_1.Route, { exact: true, path: "/", component: HomePage_1.default }),
                        React.createElement(react_router_1.Route, { path: "/posts", component: PostsPage_1.default }),
                        React.createElement(react_router_1.Route, { path: "/about", component: AboutPage_1.default }),
                        React.createElement(react_router_1.Route, { component: ErrorPage_1.default }))))));
    };
    return Main;
}(React.Component));
exports.default = Main;
//# sourceMappingURL=Main.js.map