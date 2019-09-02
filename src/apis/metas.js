import { axios, BASE_URL } from "./index";

/** meta info means categories, tags, comments
 * and any other information
 * except the post itself
 */
async function getMetas(meta_field, params = {}) {
    const { page, post_id, per_page } = params;

    try {
        let resp = await axios.request({
            url: `${BASE_URL}/wp-json/wp/v2/${meta_field}`,
            method: "get", // all ways get
            params: !!post_id
                ? {
                      hide_empty: true,
                      page: page ? page : 1,
                      per_page: per_page ? per_page : 100,
                      post: post_id ? post_id : "",
                  }
                : {
                      hide_empty: true,
                      page: page ? page : 1,
                      per_page: per_page ? per_page : 100,
                  },
        });
        return resp;
    } catch (e) {
        return e.response;
    }
}

export { getMetas };
