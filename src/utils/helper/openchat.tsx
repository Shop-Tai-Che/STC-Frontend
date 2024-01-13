import { openChat } from "zmp-sdk/apis";

export const CHAT_TYPE = {
  SUPPORT: "SUPPORT",
  SELLER_REGISTRATION: "SELLER_REGISTRATION",
};

export const openChatScreen = async (chatType, product?) => {
  try {
    await openChat({
      type: "user",
      id: "717203160990310871",
      message:
        chatType == CHAT_TYPE.SUPPORT
          ? `Tôi cần hỗ trợ tư vấn mua hàng với sản phẩm sau: \n- Tên: ${product.title}\n- Link sản phẩm: https://zalo.me/s/4341737245452906396/product-detail/${product.id}`
          : "Tôi muốn đăng kí bán hàng trên Shop Tái Chế",
    });
  } catch (error) {
    console.log(error);
  }
};
