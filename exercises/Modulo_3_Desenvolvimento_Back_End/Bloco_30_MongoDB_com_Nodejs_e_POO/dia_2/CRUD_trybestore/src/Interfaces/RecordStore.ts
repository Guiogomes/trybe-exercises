import { z } from "zod";
import { Document } from "mongoose";

const RecordStoreSchema = z.object({
  artist: z.string({
    required_error: "Artist is required",
    invalid_type_error: "Artist must be a string",
  }).min(3, { message: "Artist must be at least 3 characters" }),
  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "Title must be a string",
  }).min(5, { message: "Title must be at least 5 characters" }),
  format: z.string({
    required_error: "Format is required",
    invalid_type_error: "Format must be a string",
  }),
  yearPublished: z.number({
    required_error: "'yearPublished' is required",
    invalid_type_error: "'yearPublished' must be a number",
  }),
  new: z.boolean(),
});

type RecordStore = z.infer<typeof RecordStoreSchema>;

interface RecordStoreDocument extends RecordStore, Document {}

export default RecordStore;
export {
  RecordStoreSchema,
  RecordStoreDocument,
}