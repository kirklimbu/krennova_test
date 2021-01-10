import { VisitType } from "./visit-type.model";

export class Client {
  id: number;
  isToday: boolean;
  name: string;
  address: string;
  mobile: string;
  email?: string;
  dob?: string;
  photo?: string;
  regDateBs?: string;
  visitDateBs?: string;
  visitType?: VisitType;
}
