import { Page } from "zmp-ui";
import React from "react";
import {ProdcutDetail} from "../components/services/tmn_product";

const DetailProductPage: React.FC = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <div className="flex-1 overflow-auto pb-20">
        <ProdcutDetail/>
      </div>
    </Page>
  );
};

export default DetailProductPage;
