import http from '@/services/http-service'

export const list = _ => http.get('/opportunities')
