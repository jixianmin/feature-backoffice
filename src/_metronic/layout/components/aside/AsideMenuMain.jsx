/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../helpers";
import { AsideMenuItemWithSub } from "./AsideMenuItemWithSub";
import { AsideMenuItem } from "./AsideMenuItem";
export function AsideMenuMain() {
  const intl = useIntl();
  return (
    <>
      <AsideMenuItem
        to="/dashboard"
        icon="/media/icons/duotune/art/art002.svg"
        title="대시보드"
        fontIcon="bi-app-indicator"
      />
      {/* <AsideMenuItem
        to="/builder"
        icon="/media/icons/duotune/general/gen019.svg"
        title="Layout Builder"
        fontIcon="bi-layers"
      /> */}
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            관리
          </span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to="/users"
        title="회원관리"
        icon="/media/icons/duotune/communication/com006.svg"
        fontIcon="bi-person"
      >
        <AsideMenuItem to="/users" title="회원리스트" hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to="/event"
        title="이벤트"
        icon="/media/icons/duotune/general/gen022.svg"
        fontIcon="bi-archive"
      >
        <AsideMenuItem
          to="/event/reservation"
          title="사전예약"
          hasBullet={true}
        />
        <AsideMenuItem to="/event/survey" title="설문조사" hasBullet={true} />
      </AsideMenuItemWithSub>

      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            게임
          </span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to="/apps/chat"
        title="캠페인"
        fontIcon="bi-chat-left"
        icon="/media/icons/duotune/communication/com012.svg"
      >
        <AsideMenuItem
          to="/apps/chat/private-chat"
          title="캠페인 설정"
          hasBullet={true}
        />
        <AsideMenuItem
          to="/apps/chat/private-chat"
          title="싱글 캠페인"
          hasBullet={true}
        />
        <AsideMenuItem
          to="/apps/chat/group-chat"
          title="랭킹 캠페인"
          hasBullet={true}
        />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to="/apps/chat"
        title="브릭관리"
        fontIcon="bi-chat-left"
        icon="/media/icons/duotune/general/gen025.svg"
      >
        <AsideMenuItem
          to="/apps/chat/private-chat"
          title="블루브릭"
          hasBullet={true}
        />
        <AsideMenuItem
          to="/apps/chat/private-chat"
          title="레드브릭"
          hasBullet={true}
        />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to="/apps/chat"
        title="인앱결제"
        fontIcon="bi-chat-left"
        icon="/media/icons/duotune/communication/com012.svg"
      >
        <AsideMenuItem
          to="/apps/chat/private-chat"
          title="상품관리"
          hasBullet={true}
        />
        <AsideMenuItem
          to="/apps/chat/private-chat"
          title="결제내역"
          hasBullet={true}
        />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to="/apps/chat"
        title="Wallet"
        fontIcon="bi-layers"
        icon="/media/icons/duotune/general/gen051.svg"
      >
        <AsideMenuItem
          to="/apps/chat/private-chat"
          title="지갑관리"
          hasBullet={true}
        />
        <AsideMenuItem
          to="/apps/chat/private-chat"
          title="스펜딩내역"
          hasBullet={true}
        />
        <AsideMenuItem
          to="/apps/chat/private-chat"
          title="입출금 관리"
          hasBullet={true}
        />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to="/apps/chat"
        title="리포트"
        fontIcon="bi-layers"
        icon="/media/icons/duotune/general/gen051.svg"
      >
        <AsideMenuItem
          to="/apps/chat/private-chat"
          title="매출리포트"
          hasBullet={true}
        />
        <AsideMenuItem
          to="/apps/chat/private-chat"
          title="랜덤박스 리포트"
          hasBullet={true}
        />
      </AsideMenuItemWithSub>

      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            고객지원
          </span>
        </div>
      </div>

      <AsideMenuItem
        to="/apps/user-management/users"
        icon="/media/icons/duotune/general/gen051.svg"
        title="QnA"
        fontIcon="bi-layers"
      />
      <AsideMenuItem
        to="/apps/user-management/users"
        icon="/media/icons/duotune/general/gen051.svg"
        title="FAQ"
        fontIcon="bi-layers"
      />
    </>
  );
}
