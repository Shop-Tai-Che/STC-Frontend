import React, { useEffect, useRef, useState } from "react";
import { ReplySvg } from "@assets/svg";
import { ButtonSecondary } from "@components/common";
import { useSnackbar } from "zmp-ui";
import { Review } from "@utils/type";
import { FetchState } from "@utils/type/FetchState";
import { PostReview } from "@services/ReviewServices/ReviewProduct";
import convertDMY from "@utils/helper/convertDMY";

const ProductComment: React.FC<{ listReview: Review[]; productId: number }> = ({
  listReview,
  productId,
}) => {
  const { openSnackbar, setDownloadProgress, closeSnackbar } = useSnackbar();
  const [listItemReviews, setListItemReviews] = useState<Review[]>(listReview);
  const [fetchStatus, postReview] = PostReview();
  const [inputTextComment, setInputTextComment] = useState<string | null>(null);
  const handleInputTextComment = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setInputTextComment(e.target.value);
  };
  useEffect(() => {
    if (fetchStatus == FetchState.SUCCESS) {
      setListItemReviews((prev) => [
        {
          product_id: productId,
          user_id: 2,
          rating: 2,
          comment: inputTextComment,
        } as Review,
        ...prev,
      ]);
    }
  }, [fetchStatus]);
  return (
    <section className="bg-white antialiased">
      <form className="mb-6 px-4">
        <div className="py-2 px-2 mb-4 bg-white rounded-lg rounded-t-lg border border-black  ">
          <textarea
            id="comment"
            rows={6}
            style={{ resize: "none" }}
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
            placeholder="Bạn cảm thấy sao về sản phẩm này?"
            required
            onChange={handleInputTextComment}
          />
        </div>
        <div style={{ width: "100%" }}>
          <ButtonSecondary
            title="Gửi đánh giá"
            isDisable={!inputTextComment}
            {...{ type: "button" }}
            onClick={() => {
              postReview({
                product_id: productId,
                user_id: 2,
                rating: 2,
                comment: inputTextComment,
              } as Review);

              openSnackbar({
                type: "success",
                text: "Chức năng dành cho các bên tích hợp phát triển...",
              });
            }}
          />
        </div>
      </form>

      <div className="max-w-2xl mx-auto">
        {listItemReviews &&
          listItemReviews.map((itemComment, index) => {
            return (
              <article
                key={index}
                className={`py-4 text-base bg-white rounded-lg 
                 mb-3 ml-6 lg:ml-12  
                `}
              >
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://img.a.transfermarkt.technology/portrait/big/3366-1683638749.jpg?lm=1"
                        alt="user"
                      />
                      Ricardo Izecson dos Santos Leite {itemComment.user_id}
                    </p>
                    <p className="text-sm text-gray-600  ">
                      <time title={itemComment.created_at}>
                        {itemComment.created_at
                          ? convertDMY(itemComment.created_at)
                          : "Vừa xong"}
                      </time>
                    </p>
                  </div>
                </footer>
                <p dangerouslySetInnerHTML={{ __html: itemComment.comment }} />
                {/* <div className="flex items-center mt-4 space-x-4">
                      <button
                        type="button"
                        className="flex items-center text-sm text-gray-500 hover:underline font-medium"
                      >
                        <ReplySvg />
                        Reply
                      </button>
                    </div> */}
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default ProductComment;
