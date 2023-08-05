"use client";

import { rc } from "@d-exclaimation/next";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps & {
    children?: ReactNode;
  };

export default rc<Props>(({ href, children, ...rest }) => {
  if (href.toString().startsWith("/")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href.toString()} {...rest}>
      {children}
    </a>
  );
});
