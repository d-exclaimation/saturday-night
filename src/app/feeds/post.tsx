import { rc } from "@d-exclaimation/next";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default rc<Props>(({ children }) => {
  return <div>{children}</div>;
});
