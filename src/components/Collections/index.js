import { useContext, useEffect, useState } from "react";
import { Collection } from "./Collection";
import data from "../../data.json";
import { useRouter } from "next/router";
import GradientButton from "../Shared/GradientButton";
import ReactLoading from "react-loading";
import {
  CollectionsContainer,
  Header,
  MenuListWrapper,
  LoadingScreen,
  MenuItem,
  CollectionListWrapper,
  CreateButtonWrapper,
} from "./styles";
import GlobalContext, { useGlobal } from "../../contexts/GlobalContext";
import { useCustomWallet } from "../../contexts/WalletContext";
import { useAuth } from "../../contexts/AuthContext";
import useToast from "../../hooks/useToast";

export const Collections = (props) => {
  const router = useRouter();
  const { filter } = props;
  const [selectedMenu, setSelectedMenu] = useState("most_sold");
  const { invokeServer } = useContext(GlobalContext);
  const { auth } = useAuth();
  const { wallet } = useCustomWallet();
  const { toastError, toastInfo } = useToast();
  const [collectionLoaded, setLoadCollection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("")

  const walletSessionKey = "walletHyperXV1";

  useEffect(() => {
    let oldAddr = window.localStorage.getItem(walletSessionKey);
    // if (!oldAddr) {
    //   router.push("/");
    //   return;
    // }
    setAddress(oldAddr);
  }, [address]);

  const menuList = [
    { key: "most_sold", name: "Most sold" },
    { key: "popular", name: "Popular" },
  ];

  useEffect(() => {
    // if (wallet.address === '' || auth.isLoggedIn !== true)
    //   return;
    setLoading(true);

    // if (filter === "owner") {
      invokeServer(
        "get",
        `/api/collection?owner=${address}&extra=all`
      )
        .then((res) => {
          if (res.data.result == 0) {
            toastInfo("Warning", res.data.msg);
          } else if (res.data.result == 1) {
            setLoadCollection(res.data.collections);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          toastError("Fail", err.message);
        });
    // } else if (filter === "all") {
    //   invokeServer("get", `/api/collection?owner=${address}&extra=all`)
    //     .then((res) => {
    //       if (res.data.result == 0) {
    //         toastInfo("Warning", res.data.msg);
    //       } else if (res.data.result == 1) {
    //         setLoadCollection(res.data.collections);
    //         setLoading(false);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       toastError("Fail", err.message);
    //     });
    // }
  }, [invokeServer, filter, address, auth]);

  const handleSort = (menu) => {
    setSelectedMenu(menu.key);
    setLoadCollection((t) => {
      t.sort((first, second) => {
        if (menu.key === "most_sold") {
          return second.tradeVolume - first.tradeVolume;
        } else if (menu.key === "popular") {
          return second.tradeCount - first.tradeCount;
        } else return 0;
      });
      return t;
    });
  };

  return (
    <CollectionsContainer>
      <Header>
        <h1>{filter == "all" ? "All Collections" : "My Collections"}</h1>
        <MenuListWrapper>
          {menuList.map((menu) => (
            <MenuItem
              key={menu.key}
              active={selectedMenu === menu.key}
              onClick={() => handleSort(menu)}
            >
              {menu.name}
            </MenuItem>
          ))}
        </MenuListWrapper>
      </Header>
      {filter == "owner" ? (
        <CreateButtonWrapper>
          <GradientButton
            isNoPadding
            width="178px"
            height="48px"
            label="Create a Collection"
            className="create-btn"
            handleClick={() => router.push(`/my-collections/create`)}
          />
        </CreateButtonWrapper>
      ) : (
        <></>
      )}
      {loading ? (
        <LoadingScreen>
          <ReactLoading type="cylon" color="#AAFF26" width={120} />
        </LoadingScreen>
      ) : (
        ""
      )}

      <CollectionListWrapper>
        {collectionLoaded.length > 0 &&
          collectionLoaded.map((collection, i) => (
            <Collection key={i} collection={collection} />
          ))}
      </CollectionListWrapper>
    </CollectionsContainer>
  );
};
