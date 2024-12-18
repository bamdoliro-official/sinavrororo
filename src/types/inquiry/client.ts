export type InquiryStatus = "대기" | "진행" | "완료" | "";

export interface Inquiry {
  id: number;
  title: string;
  status: string;
  user: User[];
  updatedAt: string;
}

export interface InquiryDetail {
  title: string;
  content: string;
  status: string;
  answerResponseList: Answer[];
  updatedAt: string;
}

export interface User {
  email: string;
  name: string;
  authority: string;
}

export interface Answer {
  content: string;
}

export type InquiryStatusType = "WAITING" | "IN_PROGRESS" | "COMPLETED" | "";
