export interface ApiMonitoring {
    values: Value[]
    logs: Log[]
}
  
export interface Value {
    key: number
    creation_datetime: string
    total_response_time_ms: number
    total_requests: number
    total_errors: number
}
  
export interface Log {
    key: number
    payload: string
    creation_datetime: string
    response_time: number
    response_code: string | number
}