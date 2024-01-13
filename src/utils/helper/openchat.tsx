import { openChat } from "zmp-sdk/apis";

export const CHAT_TYPE = {
  SUPPORT: "SUPPORT",
  SELLER_REGISTRATION: "SELLER_REGISTRATION",
  POST_PRODUCT: "POST_PRODUCT",
};

export const openChatScreen = async (chatType, product?) => {
  let messageContent;
  switch (chatType) {
    case CHAT_TYPE.SUPPORT:
      messageContent = `- Tên: ${product.title}\n- Link sản phẩm: https://zalo.me/s/4341737245452906396/product-detail/${product.id}\nTôi cần hỗ trợ tư vấn mua hàng với sản phẩm trên`;
      break;
    case CHAT_TYPE.SELLER_REGISTRATION:
      messageContent = "Tôi muốn đăng kí bán hàng trên Shop Tái Chế";
      break;
    case CHAT_TYPE.POST_PRODUCT:
      messageContent = "Tôi muốn thêm sản phẩm mới trên Shop Tái Chế của mình";
      break;
  }
  try {
    await openChat({
      type: "user",
      id: "717203160990310871",
      message: messageContent,
    });
  } catch (error) {
    console.log(error);
  }
};
