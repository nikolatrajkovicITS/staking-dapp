import React from "react";
import { Typography } from "@mui/material";
import { Pool } from "@/types/pool";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PersonIcon from "@mui/icons-material/Person";
import CardStyled from "@/components/atoms/CardStyled";
import InfoBox from "@/components/atoms/InfoBox";
import InfoItem from "@/components/molecules/InfoItem";
import CardHeaderStyled from "@/components/atoms/CardHeaderStyled";
import Avatar from "@/components/molecules/Avatar";

const WithdrawPoolInfo: React.FC<{ poolData: Pool }> = ({ poolData }) => {
  return (
    <CardStyled>
      <CardHeaderStyled>
        <Typography variant="h5">{poolData?.name || "No Name"}</Typography>
        <Avatar
          src={poolData?.imageUrl || ""}
          alt={poolData?.name || "Pool"}
          containerSx={{ height: 50, width: 50 }}
        />
      </CardHeaderStyled>
      <InfoBox>
        <InfoItem
          icon={<AttachMoneyIcon />}
          label="Pool"
          value={poolData?.name}
        />
        <InfoItem icon={<TrendingUpIcon />} label="APY" value={poolData?.apy} />
        <InfoItem
          icon={<AccountBalanceIcon />}
          label="Total Liquidity"
          value={poolData?.totalLiquidity}
        />
        <InfoItem
          icon={<PersonIcon />}
          label="User Deposited"
          value={poolData?.amountDeposited}
        />
      </InfoBox>
    </CardStyled>
  );
};

export default WithdrawPoolInfo;
