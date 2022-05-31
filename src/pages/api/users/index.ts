import { NextApiRequest, NextApiResponse } from 'next'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Leonardo Brizolla' },
    { id: 2, name: 'Vinicius Brizolla' },
    { id: 3, name: 'Leonel Brizolla' }
  ]

  return response.json(users)
}
