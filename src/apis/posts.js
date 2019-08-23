import { axios, BASE_URL } from "./index";

const postsUrl = `${BASE_URL}/wp-json/wp/v2/posts`;
const mediaUrl = `${BASE_URL}/wp-json/wp/v2/media`;
const commentsUrl = `${BASE_URL}/wp-json/wp/v2/comments`;

async function getAllPosts() {
    try {
        let resp = await axios.request({
            url: postsUrl,
            method: "get",
        });
        return resp;
    } catch (e) {
        return e.response;
    }
}

async function searchPosts(keyword) {
    try {
        let resp = await axios.request({
            url: postsUrl,
            method: "get",
            params: {
                search: keyword,
            },
        });
        return resp;
    } catch (e) {
        return e.response;
    }
}

async function getMediaOfOnePost(post_id) {
    try {
        let resp = await axios.request({
            url: mediaUrl,
            method: "get",
            params: {
                parent: post_id,
            },
        });
        return resp;
    } catch (e) {
        return e.response;
    }
}

async function getCommentsOfOnePost(post_id) {
    try {
        let resp = await axios.request({
            url: commentsUrl,
            method: "get",
            params: {
                post: post_id,
            },
        });
        return resp;
    } catch (e) {
        return e.response;
    }
}

/**
 * @param {*} payload
 * {
 * "author_name":"XYZ",
 * "author_email":"abc@gamil.com",
 * "content":"xyz published a comement",
 * "parent":0,
 * "post":7
 * }
 *
 */
async function addOneCommentOfOnePost(payload) {
    try {
        let resp = await axios.request({
            url: commentsUrl,
            method: "post",
            data: payload,
        });
        return resp;
    } catch (e) {
        return e.response;
    }
}

export { getAllPosts, searchPosts, getMediaOfOnePost, getCommentsOfOnePost, addOneCommentOfOnePost };
