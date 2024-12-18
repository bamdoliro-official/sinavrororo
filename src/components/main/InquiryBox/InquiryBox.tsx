import { color } from "@/styles";
import { Button, Column, Row, Text } from "@/ui/index";
import { flex } from "@/utils";
import styled from "styled-components";
import { useState } from "react";
import { New } from "@public/svgs";
import { useInquiryListQuery } from "@/services/inquiry/queries";
import { ROUTES } from "@/constants/common/constants";
import { useRouter } from "next/navigation";

const InquiryBox = () => {
  const router = useRouter();
  const { data: InquiryList } = useInquiryListQuery();

  const InquiryCount = InquiryList?.length;
  const [isNewInquiry] = useState(InquiryCount);

  return (
    <StyledApplicationBox>
      <Column>
        <Row justifyContent="space-between">
          <Text fontType="Heading2" color={color.gray900}>
            문의 내역
          </Text>
          {isNewInquiry && <New />}
        </Row>
        <Text fontType="B2" color={color.gray600}>
          새로 생긴 문의 내역 {InquiryCount}개
        </Text>
      </Column>
      <Button
        size="LARGE"
        styleType="TERTIARY"
        style={{ whiteSpace: "nowrap" }}
        onClick={() => {
          router.push(ROUTES.INQUIRY);
        }}
      >
        문의 내역으로 이동
      </Button>
    </StyledApplicationBox>
  );
};

export default InquiryBox;

const StyledApplicationBox = styled.div`
  ${flex({ flexDirection: "column", justifyContent: "space-between" })}
  width: 480px;
  height: 220px;
  padding: 28px 32px;
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  cursor: pointer;
`;
