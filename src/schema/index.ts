import { mergeSchemas } from "apollo-server-micro"

import dockerSchema from "./docker"
import osSchema from "./os"

export default mergeSchemas({
  schemas: [dockerSchema, osSchema],
})
