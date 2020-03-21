import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useQuery } from "@apollo/react-hooks";
import { GET_DOCUMENTS_ALL } from "../queries/queries";
import * as dayjs from "dayjs";

const useStyles = makeStyles({
  table: {
    margin: "16px 8px"
  }
});

export default function DocumentsList() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_DOCUMENTS_ALL);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error...</Typography>;

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Content</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.documents.map(row => (
          <TableRow key={row.id}>
            <TableCell>{row.title}</TableCell>
            <TableCell>{dayjs(row.date).format("YYYY-MM-DD")}</TableCell>
            <TableCell>{row.content}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
