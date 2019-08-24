import { axios, BASE_URL } from "./index";

const tagsUrl = `${BASE_URL}/wp-json/wp/v2/tags`;

async function getTags(page) {
    try {
        let resp = await axios.request({
            url: postsUrl,
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

export { getTags };
