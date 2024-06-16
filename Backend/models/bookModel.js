import mongoose from "mongoose";

const bookSchema=mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        author:{
            type:String,
            required:true,
        },
        publishYear:{
            type:Number,
            required:true,
        },
    },
    {
        timestamps:true,
    }
);
export const Book=mongoose.model('Book',bookSchema);


// Line 3: const bookSchema = mongoose.Schema( starts the definition of a new Mongoose schema. The schema defines the structure of the documents in a MongoDB collection.

// Lines 4-10: This block defines the fields of the schema:

// title:
// type: String: Specifies that the title field should be a string.
// required: true: Specifies that the title field is required, meaning it cannot be omitted when creating a new document.
// author:
// type: String: Specifies that the author field should be a string.
// required: true: Specifies that the author field is required.
// publishYear:
// type: Number: Specifies that the publishYear field should be a number.
// required: true: Specifies that the publishYear field is required.
// Lines 11-13: This block is the schema options object:

// timestamps: true: This option automatically adds createdAt and updatedAt fields to the schema. These fields are managed by Mongoose and will automatically be set when a document is created or updated.
// Creating the Book Model
// export const Book = mongoose.model('Book', bookSchema);
// Line 15: This line creates a model named Book using the defined bookSchema.
// mongoose.model('Book', bookSchema): This method compiles the schema into a model. The first argument is the name of the model ('Book'), and the second argument is the schema (bookSchema). The model provides an interface to interact with the books collection in the MongoDB database.
// Line 16: This line exports the Book model so that it can be imported and used in other parts of the application.
// Summary
// The code imports Mongoose, defines a schema for a Book collection with fields title, author, and publishYear, and adds automatic timestamp fields.
// It then creates and exports a Mongoose model based on this schema, allowing you to interact with the books collection in MongoDB using the defined schema structure.