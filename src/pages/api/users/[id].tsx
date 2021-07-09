/* eslint-disable import/no-anonymous-default-export */
import {NextApiRequest,NextApiResponse} from 'next'

// JWT (Storage)
// Next Auth (Social)
// Cognito, Auth0

export default (request:NextApiRequest, response:NextApiResponse) => {

  const { id } = request.query;

  const users = [
    {
      id:1, name:'Luique'
    },
    {
      id:2, name:'Mario'
    },
    {
      id:3, name:'David'
    }
  ]

  return response.json(users);
}