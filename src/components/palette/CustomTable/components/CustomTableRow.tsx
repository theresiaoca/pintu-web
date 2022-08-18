import { TableCell, TableRow } from "@mui/material";

import { FieldType, RecordType } from "../types";

type CustomTableRowProps = {
  fields: FieldType[];
  record?: RecordType;
};

const CustomTableRow = ({ fields, record }: CustomTableRowProps) => {
  return (
    <TableRow>
      {fields.map((field, idx) => {
        const Component = field.component;
        return (
          <TableCell align={field.align || "inherit"}>
            <Component
              {...field}
              record={record}
              key={`${field.fieldId}-${idx}`}
            />
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default CustomTableRow;
