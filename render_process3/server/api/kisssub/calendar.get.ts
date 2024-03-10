import crawler from '@/utils/crawler'
import { toJSON, stringify } from 'flatted'

const getData = () => {
    return new Promise((resolve, reject) => {
        crawler.queue([{
            uri: 'https://www.kisssub.org/addon.php?r=bangumi/table',
            callback: (error, res, done) => {
                if (error) reject()

                const { $ } = res;

                const bgmTable = $('#bgm-table')
                const dlList = bgmTable.find('dl')
                const data = []

                for (let i = 0; i < dlList.length; i++) {
                    const team: any = $(dlList[i])

                    const week: any = team.find('dt')
                    const weekName = week[0].children[0].data.trim()
                    let animeList = team.find('dd a')

                    animeList = animeList.map((index: number, item: any) => item.children[0].data.trim())

                    weekName && data.push({
                        weekName,
                        animeList
                    })
                }

                resolve(data)

                done();
            }
        }])
    })
}

export default defineEventHandler(async (event) => {
    const params = getQuery(event);

    return stringify(await getData())
})
