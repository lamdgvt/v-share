import kitsuRequest from '~/utils/kitsuRequest'

export default defineEventHandler(async (event) => {
    const params = await readBody(event)

    return await kitsuRequest.post('/oauth/token', params)
})
