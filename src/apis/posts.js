import { axios, BASE_URL } from "./index";

const postsUrl = `${BASE_URL}/wp-json/wp/v2/posts`;
const mediaUrl = `${BASE_URL}/wp-json/wp/v2/media`;
const commentsUrl = `${BASE_URL}/wp-json/wp/v2/comments`;

/**
 * @param {*} page
 * To determine how many pages of data are available,
 * the API returns two header fields with every paginated response:
 *      X-WP-Total: the total number of records in the collection
 *      X-WP-TotalPages: the total number of pages encompassing all available records
 */
async function getPosts(page) {
    try {
        let resp = await axios.request({
            url: postsUrl,
            method: "get",
            page: page ? page : 1,
            per_page: 10,
        });
        return resp;
    } catch (e) {
        return e.response;
    }
}

async function searchPosts(keyword, page) {
    const [k, p] = arguments;
    try {
        let resp = await axios.request({
            url: postsUrl,
            method: "get",
            params: {
                search: k,
                page: p ? p : 1,
                per_page: 10,
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

export { getPosts, searchPosts, getMediaOfOnePost, getCommentsOfOnePost, addOneCommentOfOnePost };
