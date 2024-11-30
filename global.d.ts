import { MongoClient } from 'mongodb';

declare global {
  // Declare the property on the global object
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export { };
