import { ROUTES } from "@/constants/common/constants";
import { color } from "@/styles";
import { Row, Text } from "@/ui";
import Link from "next/link";
import styled from "styled-components";

interface Faq {
  title: string;
  date: string;
}

const FaqTableItem = ({ title, date }: Faq) => {
  return (
    <Link href={ROUTES.FAQ_POST} style={{ width: "100%" }}>
      <StyledFaqTableItem style={{ cursor: "pointer" }}>
        <TableItem>
          <Row gap={48} alignItems="center">
            <Text fontType="B2" width={"78%"}>
              {title}
            </Text>
            <Text fontType="B3" width={80} color={color.gray400}>
              {date}
            </Text>
          </Row>
        </TableItem>
      </StyledFaqTableItem>
    </Link>
  );
};

export default FaqTableItem;

const StyledFaqTableItem = styled.button`
  text-align: start;
  width: 100%;
`;

const TableItem = styled.div`
  padding: 26px 40px;
  border-bottom: 1px solid ${color.adminGray400};
`;
