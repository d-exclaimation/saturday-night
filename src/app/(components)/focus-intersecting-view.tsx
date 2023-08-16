"use client";

//
//  focus-intersecting-view.tsx
//  d-exclaimation
//
//  Created by d-exclaimation on 09 May 2023
//

import { useWithinView } from "@/app/(hooks)/useWithinView";
import { rc } from "@d-exclaimation/next";
import { type ReactNode } from "react";

type Props = {
  children: (inView: boolean) => ReactNode;
};

const FocusIntersectingView = rc<Props>(({ children }) => {
  const { ref, inView } = useWithinView({
    rootMargin: "-29% 0px -49% 0px",
    threshold: 0,
  });

  return (
    <div className="group peer" ref={ref} data-in-view={inView}>
      {children(inView)}
    </div>
  );
});

export default FocusIntersectingView;
