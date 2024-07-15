import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TablePagination,
  styled,
} from "@mui/material";
import useTransactionsHistory from "@/hooks/useTransactionsHistory";
import colors from "@/themes/colors";
import LoadingBar from "../molecules/loaders/LoadingBar";

const CustomBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
  background: colors.darkGradientBackground,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: `0 3px 10px rgba(0, 0, 0, 0.8)`,
  transition: "all 0.4s ease-in-out",
}));

const CustomTable = styled(Table)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  "& th, & td": {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const CustomTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.common.white,
  backgroundColor: colors.lighterDarkGrey,
  borderBottom: `1px solid ${theme.palette.primary.main}`,
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: "center",
  marginBottom: theme.spacing(2),
  fontSize: "1.75rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "1.5px",
}));

const TransactionHistory: React.FC = () => {
  const { transactions, isLoading, isError } = useTransactionsHistory();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  if (isLoading) {
    return (
      <CustomBox>
        <CustomTypography>Loading...</CustomTypography>
        <LoadingBar color="secondary" />
      </CustomBox>
    );
  }

  if (isError) {
    return <CustomTypography>Error loading transactions.</CustomTypography>;
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <CustomBox>
      <CustomTypography>Transaction History</CustomTypography>

      <TableContainer component={Paper} sx={{ backgroundColor: "transparent" }}>
        <CustomTable>
          <TableHead>
            <TableRow>
              <CustomTableCell>Pool Name</CustomTableCell>
              <CustomTableCell>Pool Address</CustomTableCell>
              <CustomTableCell>Amount</CustomTableCell>
              <CustomTableCell>Currency</CustomTableCell>
              <CustomTableCell>Transaction Type</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((transaction) => (
                <TableRow key={transaction.id}>
                  <CustomTableCell>{transaction.poolName}</CustomTableCell>
                  <CustomTableCell>{transaction.poolAddress}</CustomTableCell>
                  <CustomTableCell>{transaction.amount}</CustomTableCell>
                  <CustomTableCell>{transaction.currency}</CustomTableCell>
                  <CustomTableCell>
                    {transaction.transactionType}
                  </CustomTableCell>
                </TableRow>
              ))}
          </TableBody>
        </CustomTable>
        <TablePagination
          component="div"
          count={transactions?.length || 0}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            color: "white",
            "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
              {
                color: "white",
              },
            "& .MuiTablePagination-selectIcon": {
              color: "white",
            },
          }}
        />
      </TableContainer>
    </CustomBox>
  );
};

export default TransactionHistory;
