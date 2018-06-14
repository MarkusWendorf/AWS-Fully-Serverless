"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = "https://ekqvl2bwbk.execute-api.eu-central-1.amazonaws.com/dev/";
exports.fetchPosts = function () {
    return fetch(api + "posts").then(function (response) { return response.json(); });
};
exports.createPost = function (post) {
    return fetch(api + "posts", {
        method: 'post',
        body: JSON.stringify(post),
    }).then(function (response) { return response.json(); });
};
//# sourceMappingURL=api.js.map