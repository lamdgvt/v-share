import themoviedb from '@/utils/request/themoviedb'

// 获取 24 小时内所有电影 ID 列表
export function CertificationMovieListAPI() {
    return themoviedb.get('/certification/movie/list');
}

export function CertificationTVListAPI() {
    return themoviedb.get('/certification/tv/list')
}


