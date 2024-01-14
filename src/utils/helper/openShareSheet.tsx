import { openShareSheet } from "zmp-sdk/apis";

export const openShareScreen = async (shopInfo?) => {
  try {
    await openShareSheet({
      type: "zmp",
      data: {
        title: `Shop Tái Chế của ${shopInfo.name}`,
        description:
          "Đây là Shop Tái Chế của mình trên Zalo. Mời bạn ghé qua để quẹo lựa các sản phẩm tái chế thân thiện với môi trường nghe!",
        thumbnail: `${shopInfo.avatar}`,
        path: `${shopInfo.shopUrl}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
