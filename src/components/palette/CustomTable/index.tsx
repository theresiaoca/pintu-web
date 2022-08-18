import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import CustomTableRow from "./components/CustomTableRow";

import { FieldType, RecordType } from "./types";

type CustomTableProps = {
  fields: FieldType[];
  records?: RecordType[];
};

const CustomTable = ({ fields, records }: CustomTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {fields.map((field) => (
              <TableCell
                align={field.align || "inherit"}
                style={{ color: "#C8C8C8", fontWeight: 600, fontSize: "18px" }}
              >
                {field.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {records?.map((record, idx) => (
            <CustomTableRow key={idx} fields={fields} record={record} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
