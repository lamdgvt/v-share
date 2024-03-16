import request from "~/utils/request";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    return await request.post('/anime/animeByBgmId', body)
})
