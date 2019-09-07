import { axios, BASE_URL } from "./base";

const postsUrl = `${BASE_URL}/wp-json/wp/v2/posts`;

/**
 * @param {*} page
 * To determine how many pages of data are available,
 * the API returns two header fields with every paginated response:
 *      X-WP-Total: the total number of records in the collection
 *      X-WP-TotalPages: the total number of pages encompassing all available records
 */

async function getPosts(params = {}) {
    const { keyword, page, per_page, category_id } = params;

    try {
        let resp = await axios.request({
            url: postsUrl,
            method: "get",
            params: {
                search: keyword ? keyword : "",
                page: page ? page : 1,
                per_page: per_page ? per_page : 10,
                categories: category_id ? category_id : "",
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
const commentsUrl = `${BASE_URL}/wp-json/wp/v2/comments`;
async function addOneComment(payload) {
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

export { getPosts, addOneComment };
