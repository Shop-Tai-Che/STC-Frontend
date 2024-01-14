import React, { useEffect, useRef, useState } from "react";
import { ReplySvg } from "@assets/svg";
import { ButtonSecondary } from "@components/common";
import { useSnackbar, Text, Input, Avatar } from "zmp-ui";
import { Review } from "@utils/type/Review";
import { STATUS_ORDER } from "@utils/type/StatusOrder";
import { FetchState } from "@utils/type/FetchState";
import { CreateReview } from "@services/ReviewServices";
import convertDMY from "@utils/helper/convertDMY";
import { UserFetch } from "@utils/type/User";
import { Product } from "@utils/type/Product";

const ProductComment: React.FC<{
  listReview: Review[];
  product: Product;
  currentUser: UserFetch;
}> = ({ listReview, product, currentUser }) => {
  const { openSnackbar, setDownloadProgress, closeSnackbar } = useSnackbar();
  const [listItemReviews, setListItemReviews] = useState<Review[]>(listReview);
  const [fetchStatus, postReview] = CreateReview();
  const [inputTextComment, setInputTextComment] = useState<string>("");
  const handleInputTextComment = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInputTextComment(e.target.value);
  };
  useEffect(() => {
    if (fetchStatus == FetchState.SUCCESS) {
      setListItemReviews((prev) => [
        {
          product_id: product.id,
          user_id: currentUser.id,
          rating: 5,
          comment: inputTextComment,
        } as Review,
        ...prev,
      ]);
      setInputTextComment("");
    }
  }, [fetchStatus]);

  const checkOrderStatus = (userIdToCheck, orders, desiredStatus) => {
    return orders.some(
      (order) =>
        order.user_id === userIdToCheck && order.status === desiredStatus
    );
  };

  const handlePostReview = () => {
    if (inputTextComment.length == 0) {
      openSnackbar({
        type: "warning",
        text: "Vui lòng nhập đánh giá",
      });
    } else {
      postReview({
        product_id: product.id,
        user_id: currentUser.id,
        rating: 2,
        comment: inputTextComment,
      } as Review);

      openSnackbar({
        type: "success",
        text: "Đã gửi đánh giá",
      });
    }
  };

  return (
    <section className="bg-white antialiased">
      <form className="px-4">
        {product &&
          checkOrderStatus(
            currentUser.id,
            product.Order,
            STATUS_ORDER.SUCCESS
          ) && (
            <>
              <div className="mb-4 bg-white rounded-lg rounded-t-lg">
                <Input.TextArea
                  id="comment"
                  // rows={6}
                  // style={{ resize: "none" }}
                  className="w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Bạn cảm thấy như thế nào về sản phẩm này?"
                  required
                  value={inputTextComment}
                  onChange={handleInputTextComment}
                  size="small"
                />
              </div>

              <div style={{ width: "100%" }}>
                <ButtonSecondary
                  title="Gửi đánh giá"
                  isDisable={!inputTextComment}
                  {...{ type: "button" }}
                  onClick={handlePostReview}
                />
              </div>
            </>
          )}
      </form>

      <div
      // className="max-w-2xl mx-auto"
      >
        {listItemReviews.length > 0 ? (
          listItemReviews.map((itemComment, index) => {
            return (
              <article
                key={index}
                className="text-base bg-white rounded-lg"
                style={{ margin: 16 }}
              >
                <footer className="flex justify-between items-center">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="inline-flex items-center text-sm text-gray-900  font-semibold"
                      style={{
                        marginRight: 12,
                      }}
                    >
                      <Avatar
                        size={24}
                        src={
                          itemComment.User
                            ? itemComment.User.avatar
                            : currentUser.avatar
                        }
                        style={{
                          marginRight: 6,
                        }}
                        // alt="user"
                      />
                      <Text size="small" bold>
                        {itemComment.User
                          ? itemComment.User.name
                          : currentUser.name}
                      </Text>
                    </div>
                    <Text size="small" className="text-gray-500  ">
                      <time title={itemComment.created_at}>
                        {itemComment.created_at
                          ? convertDMY(itemComment.created_at)
                          : "Vừa xong"}
                      </time>
                    </Text>
                  </div>
                </footer>
                <p
                  className="mt-2"
                  dangerouslySetInnerHTML={{ __html: itemComment.comment }}
                />
                <div
                  style={{
                    height: 1,
                    alignSelf: "stretch",
                    background: "#E9EBED",
                  }}
                />
              </article>
            );
          })
        ) : (
          <Text size="small" className="ml-4 text-gray-500">
            Sản phẩm chưa có đánh giá
          </Text>
        )}
      </div>
    </section>
  );
};

export default ProductComment;
