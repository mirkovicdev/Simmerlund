
import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI || "";

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
      })
      .then((mongoose) => {
        return mongoose;
      })
      .catch((error) => {
        console.error("Error connecting to database:", error);
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
