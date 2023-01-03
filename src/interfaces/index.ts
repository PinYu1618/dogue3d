//User存使用者資料
export type User = {
  id: string
  name: string //帳號（註冊）
  password: string //密碼（註冊）
  marble: number //marble遊戲分數
  racing: number //racing遊戲分數
  loggedIn: boolean
}

//Marble存marble遊戲資料
export type Marble = {
  user: string //玩家
  score: number //分數
}

//Racing存racing遊戲資料
export type Racing = {
  user: string //玩家
  score: number //分數
}
