import React, { FC } from "react";
import SectionText from "../section/SectionText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HOME_TITLE } from "@utils/type/Title";
import { ProductCategory } from "@utils/type/Category";
import { Avatar, Text } from "zmp-ui";
import { greyColor, secondaryColor, tertiaryColor } from "@utils/helper/config";

const CategoryListSwipeContent: React.FC<{}> = () => {
  return (
    <SectionText padding="title-only">
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        className="px-4"
      >
        <div>
          {ProductCategory.map(({ id, name, cover, tag }) => (
            <SwiperSlide
              key={id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            // onClick={ () => }
            >
              <div style={{
                // border: '1px solid black',
                borderRadius: '8px',
                borderColor: `${greyColor}`,
                flex: 1,
                marginBottom: 4,
                padding: '10px',
                backgroundColor: `#E6FAED`
              }}>{cover}</div>
              <Text size='normal' style={{
                flex: 1
              }}>{name}</Text>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </SectionText >
  );
};

export default CategoryListSwipeContent;
