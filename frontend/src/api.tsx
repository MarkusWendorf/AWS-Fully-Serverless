const api = "https://ekqvl2bwbk.execute-api.eu-central-1.amazonaws.com/dev/";

export const fetchPosts = (): any => {
    return fetch(api + "posts").then(response => response.json())
};

export const createPost = (post: {message: string}): any => {
    return fetch(api + "posts", {
        method: 'post',
        body: JSON.stringify(post),
    }).then(response => response.json())
};

export interface Post {
    Id: string;
    message: string;
    timestamp: number;
}
