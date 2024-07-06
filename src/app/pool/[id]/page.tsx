"use client";

import React, { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
import usePoolsData from "@/hooks/usePoolsData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PoolDetails from "@/components/organisms/pools/PoolDetails";
import PrimaryButton from "@/components/atoms/PrimaryButton";

const PoolDetail: React.FC = () => {
  const router = useRouter();
  const { slug } = useParams();
  const poolId = slug as string;

  const { pools, isLoading, isError } = usePoolsData(poolId);
  const poolData = useMemo(() => pools?.[0], [pools]);

  const handleBack = () => {
    router.push("/");
  };

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError || !poolData) {
    return <Typography>Error loading pool details.</Typography>;
  }

  return (
    <Box>
      <PrimaryButton
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        sx={{ animation: "fadeIn 0.8s ease-in-out" }}
      >
        Pools
      </PrimaryButton>

      <PoolDetails poolData={poolData} />
    </Box>
  );
};

export default PoolDetail;
