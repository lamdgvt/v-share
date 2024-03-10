import Crawler from 'crawler'

export default defineEventHandler(async (event) => {
    const params = getQuery(event);

    const c = new Crawler({
        maxConnections: 10,
        // This will be called for each crawled page
        callback: (error: any, res: any, done: any) => {
            if (error)
                console.log(error);
            done();
        }
    });

    c.queue([{
        uri: 'https://www.kisssub.org/addon.php?r=bangumi/table',
        callback: (error, res, done) => {
            const { $ } = res;

            const bgmTable = $('#bgm-table')
            const weekData = bgmTable.find('dl dt')

            for (let i = 0; i < weekData.length; i++) {
                const team: any = weekData[i]

                const text = team.children[0].data.trim()

                console.log(text)
            }

            done();
        }
    }])

    return
})
