import request from "~/utils/request";

export default defineEventHandler(async (event) => {
    const params = getQuery(event);

    return await request.get('/anime/bitTorrent', { params })
})
