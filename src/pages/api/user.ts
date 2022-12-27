import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body
  console.log('body: ', body)
  res.status(200).json({ data: `${body.userName}` })
}
