import React from "react";
import { CardContent, Typography } from "@mui/material";
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

const DepositPoolInfo: React.FC<{ poolData: Pool }> = ({ poolData }) => {
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
      <CardContent sx={{ padding: 0 }}>
        <InfoBox>
          <InfoItem
            icon={<AttachMoneyIcon />}
            label="Pool"
            value={poolData?.name}
          />
          <InfoItem
            icon={<TrendingUpIcon />}
            label="APY"
            value={poolData?.apy}
          />
          <InfoItem
            icon={<AccountBalanceIcon />}
            label="Deposit Limit"
            value={poolData?.amountDeposited}
          />
          <InfoItem
            icon={<PersonIcon />}
            label="User Deposited"
            value={poolData?.amountDeposited}
          />
        </InfoBox>
      </CardContent>
    </CardStyled>
  );
};

export default DepositPoolInfo;
