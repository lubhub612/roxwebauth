import React, { useState } from "react";
import { SideBarContainer, SideBarDiv } from "./styles";
import { SideToggleBar } from "./styles";
import AiOutlineMenu from "@meronex/icons/ai/AiOutlineMenu";
import { SideBarFilterSection } from "../../Shared/SideBarFilterSection";
import {
  FilterSharpIcon,
  FourGridIcon,
  MistoryIcon,
  NineGridIcon,
  PersonSettingSharpIcon,
  ProgressUploadSharpIcon,
  UserCircleSharpIcon,
} from "../../Shared/SvgIcons";
import { SideBarAllSection } from "../../Shared/SideBarAllSection";
import { useAuth } from "../../../contexts/AuthContext";
import HyperTooltip from "../../Shared/HyperTooltip";
import { useCustomWallet } from "../../../contexts/WalletContext";
import { useRouter } from "next/router";

export default function SideBar(props) {
  const {
    isMoreView,
    handleMoreView,
    isOpenSideMenu,
    setIsOpenSideMenu,
    closeSideMenu,
    filterParams,
    setFilterParams,
  } = props;

  const { auth } = useAuth();
  const { getWalletAddressBySessionKey } = useCustomWallet();

  const router = useRouter();
  const [selectedSection, setSelectedSection] = useState("");
  const [depths, setDepths] = useState({});

  const updateSelectedSection = (selSection) => {
    setIsOpenSideMenu(true);
    setSelectedSection(selSection);
  };
  return (
    <div>
      <SideBarContainer>
        {isOpenSideMenu ? (
          <SideBarDiv>
            {selectedSection === "all" && (
              <SideBarAllSection
                {...props}
                closeSideMenu={closeSideMenu}
                depths={depths}
                setDepths={setDepths}
                address={getWalletAddressBySessionKey()}
              />
            )}
            {selectedSection === "filter" && (
              <SideBarFilterSection
                closeSideMenu={closeSideMenu}
                filterParams={filterParams}
                setFilterParams={setFilterParams}
              />
            )}
          </SideBarDiv>
        ) : (
          <SideToggleBar>
            <div
              className="all-sharp"
              onClick={() => updateSelectedSection("all")}
            >
              <HyperTooltip text="Main Menu">
                <AiOutlineMenu />
              </HyperTooltip>
            </div>
            <div
              className="mistory-sharp"
              onClick={() => router.push("/mystery")}
            >
              <HyperTooltip text="Mistery Box">
                <MistoryIcon />
              </HyperTooltip>
            </div>
            <div className="grid-sharp" onClick={() => handleMoreView()}>
              <HyperTooltip text="Grid View">
                {isMoreView ? <FourGridIcon /> : <NineGridIcon />}
              </HyperTooltip>
            </div>
            <div
              className="filter-sharp"
              onClick={() => updateSelectedSection("filter")}
            >
              <HyperTooltip text="Filters">
                <FilterSharpIcon />
              </HyperTooltip>
            </div>
            {auth?.isLoggedIn && (
              <>
                <div
                  className="upload-sharp"
                  onClick={() => router.push("/upload")}
                >
                  <HyperTooltip text="Upload NFT">
                    <ProgressUploadSharpIcon />
                  </HyperTooltip>
                </div>
                <div
                  className="profile-sharp"
                  onClick={() => router.push("/profile/me")}
                >
                  <HyperTooltip text="Profile">
                    <UserCircleSharpIcon />
                  </HyperTooltip>
                </div>
                <div
                  className="setting-sharp"
                  onClick={() => router.push("/settings")}
                >
                  <HyperTooltip text="Profile Settings">
                    <PersonSettingSharpIcon />
                  </HyperTooltip>
                </div>
              </>
            )}
          </SideToggleBar>
        )}
      </SideBarContainer>
    </div>
  );
}
