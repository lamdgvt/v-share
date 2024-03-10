import Crawler from 'crawler'

export default new Crawler({
    maxConnections: 10,
    callback: (error: any, res: any, done: any) => {
        if (error)
            console.log(error);
        done();
    }
})