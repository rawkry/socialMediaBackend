import mongoose from "mongoose";

const postDataSchema = new mongoose.Schema(
  {
    caption: String,
    // image: {
    //   type: String,
    //   default:
    //     "https://imgs.search.brave.com/TVd2T3Vi6WpLGDT_qK9soPcv2jY1JiKRnTAHYMzfPGM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLmlt/Z3VyLmNvbS9rc1lF/MWJNLmpwZw",
    //   // public_id: String,
    //   // url: String,
    // },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    image: String,
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postDataSchema);

export { Post };
