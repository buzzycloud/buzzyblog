import { axios, BASE_URL } from "./index";

/** meta info means categories, tags, comments
 * and any other information
 * except the post itself
 */
async function getMetas(meta_field, params = {}) {
    const { page, post_id } = params;
    let query = !!post_id ? `post=${post_id}` : "";
    try {
        let resp = await axios.request({
            url: `${BASE_URL}/wp-json/wp/v2/${meta_field}?${query}`,
            method: "get", // all ways get
            hide_empty: true,
            page: page ? page : 1,
            per_page: 100,
        });
        return resp;
    } catch (e) {
        return e.response;
    }
}

export { getMetas };
