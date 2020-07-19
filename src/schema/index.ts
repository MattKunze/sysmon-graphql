import { mergeSchemas } from "apollo-server-micro"

import dockerSchema from "./docker"
import osSchema from "./os"

export default async function buildCompositeSchema() {
  return mergeSchemas({
    schemas: [dockerSchema, await osSchema],
  })
}
