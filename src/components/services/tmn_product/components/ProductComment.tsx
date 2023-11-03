import React from "react";
import CommentList from "../../../../../mockReview.json";
import { ReplySvg } from "src/assets/svg";

const ProductComment: React.FC = () => {
  return (
    <section className="bg-white antialiased">
      <div className="max-w-2xl mx-auto px-4">
        {Object.keys(CommentList).map((IdParent: string) =>
          CommentList[IdParent].map((itemComment, index) => {
            return (
              <article
                key={index}
                className={`p-6 text-base bg-white rounded-lg ${
                  itemComment.child_id ? "mb-3 ml-6 lg:ml-12" : ""
                }`}
              >
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src={itemComment.cover}
                        alt={itemComment.user_id}
                      />
                      {itemComment.user_id}
                    </p>
                    <p className="text-sm text-gray-600  ">
                      <time title={itemComment.create_at}>
                        {itemComment.create_at}
                      </time>
                    </p>
                  </div>
                </footer>
                <p className="text-gray-500">{itemComment.comment}</p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center text-sm text-gray-500 hover:underline font-medium"
                  >
                    <ReplySvg />
                    Reply
                  </button>
                </div>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
};

export default ProductComment;
