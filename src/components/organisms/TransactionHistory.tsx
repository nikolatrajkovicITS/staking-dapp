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
} from "@mui/material";
import useTransactionsHistory from "@/hooks/useTransactionsHistory";
import colors from "@/themes/colors";

const TransactionHistory: React.FC = () => {
  const { transactions, isLoading, isError } = useTransactionsHistory();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Error loading transactions.</Typography>;
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
    <Box
      sx={{
        mt: 5,
        background: colors.darkGradientBackground,
        padding: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" mb={1.5} color="white">
        Transaction History
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pool Name</TableCell>
              <TableCell>Pool Address</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Transaction Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.poolName}</TableCell>
                  <TableCell>{transaction.poolAddress}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.currency}</TableCell>
                  <TableCell>{transaction.transactionType}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={transactions?.length || 0}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
};

export default TransactionHistory;
