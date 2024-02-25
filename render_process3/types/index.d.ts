// 排序类型
export type SortTypeIO = [
    'popularity.asc',   // 人气 升序
    'popularity.desc',
    'revenue.asc',  // 票房 
    'revenue.desc',
    'primary_release_date.asc', // 发行日期 
    'primary_release_date.desc',
    'vote_average.asc', // 评分
    'vote_average.desc',
    'vote_count.asc',   // 投票人数
    'vote_count.desc',
]

export interface BaseIO {
    page: number;           // 页数
    include_adult?: boolean;    // 是否包含成人
    include_video?: boolean;    // 是否包含视频
    language?: string;       // 语言
    certification_country?: string;  // 认证国家
    with_original_language?: string;  // 原始语言
    'vote_average.gte'?: number; // 评分人数不少于
    'with_runtime.lte'?: number;  // 电影时长不超过
    primary_release_year?: number;  // 电影上映年份
    'with_genres'?: string; // 类型
    region?: string;         // 地区
    sort_by?: SortTypeIO;    // 排序
}

export interface BaseDataConfigIO<T> {
    page: number; // 页码
    results: T[]; // 数据
    totalResults: number; // 总页数
}

export interface ActorsPictureIO {
    id: number; // 主键
    gender: number, // 性别
    known_for_department: string, // 部门
    name: string, // 名字
    original_name: string, // 原来的名字
    popularity: number, // 人气
    profile_path: string, // 图片
    cast_id: number,
    character: string, // 字符
}
