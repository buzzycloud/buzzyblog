import { axios, BASE_URL } from "./index";

async function getMetas(meta_field, page) {
    try {
        let resp = await axios.request({
            url: `${BASE_URL}/wp-json/wp/v2/${meta_field}`,
            method: "get",
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
