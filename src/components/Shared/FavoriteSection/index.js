import React, { useEffect, useState } from "react";
import GradientButton from "../GradientButton";
import { EmptyFavoriteIcon, EmptyHideNftIcon } from "../SvgIcons";
import { FavoriteSectionContainer } from "./styles";

import { CardList } from "../../Profile/MainContent/styles";
import CardItem from "../../Shared/CardItem";
import { useGlobal } from "../../../contexts/GlobalContext";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const FavoriteSection = (props) => {
  const { address } = props;
  const router = useRouter();
  const { invokeServer } = useGlobal();
  const [favoriteNFTList, setFavoriteNFTList] = useState([]);
  const { t } = useTranslation();
  const handleDetails = (collectionAddress, tokenId) => {
    router.push(`/products/${collectionAddress}/${tokenId}/sell`);
  };

  useEffect(() => {
    let ac = new AbortController();
    invokeServer("get", `/api/favorite/owner?address=${address}`)
      .then((res) => {
        if (ac.signal.aborted === false) {
          if (res.data.result === 1) {
            let j;
            let rr = res.data.items;
            setFavoriteNFTList((t) => rr);
          } else {
          }
        }
      })
      .catch((err) => {
        console.log(`${err.message}`);
      });

    return () => ac.abort();
  }, [address]);

  return (
    <FavoriteSectionContainer>
      {favoriteNFTList.length > 0 ? (
        <>
          <CardList isMoreView={false}>
            {favoriteNFTList.map((item, index) => (
              <CardItem
                key={index}
                item={item}
                onClick={() =>
                  handleDetails(item.collectionAddress, item.tokenId)
                }
              />
            ))}
          </CardList>
        </>
      ) : (
        <div className="no-result">
          <EmptyFavoriteIcon />
          <div className="empty-text">
            {t("There Are No favorites NFT on your list yet")}
          </div>
          <div className="action-buttons">
            <GradientButton
              label={"Add new"}
              height={"36px"}
              width={"106px"}
              fontSize={"14px"}
              handleClick={() => router.push("/explorer")}
            />
          </div>
        </div>
      )}
    </FavoriteSectionContainer>
  );
};

export default FavoriteSection;
