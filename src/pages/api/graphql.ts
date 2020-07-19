import { ApolloServer } from "apollo-server-micro"
import { NextApiRequest, NextApiResponse } from "next"
import memoize from "promise-memoize"
import "reflect-metadata"

import buildSchema from "schema"

export const config = {
  api: {
    bodyParser: false,
  },
}

async function apolloHandler() {
  const apolloServer = new ApolloServer({
    schema: await buildSchema(),
  })

  return apolloServer.createHandler({ path: "/api/graphql" })
}
const memoizedHandler = memoize(apolloHandler)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return (await memoizedHandler())(req, res)
}
