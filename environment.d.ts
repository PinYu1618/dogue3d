declare namespace NodeJS {
  export interface ProcessEnv {
    readonly REDIS_URL: string
    readonly MONGO_URL: string
    readonly TOKEN_SECRET: string
  }
}
