import themoviedb from '@/utils/request/themoviedb'

// 认证验证
export function AuthenticationAPI() {
	return themoviedb.get('/authentication');
}

