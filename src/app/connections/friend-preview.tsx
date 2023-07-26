import { rc } from "@d-exclaimation/next";
import { useMemo } from "react";

type Props = {
  name: string;
  img?: string;
};

export default rc<Props>(({ name, img }) => {
  const src = useMemo(
    () => img ?? `https://api.dicebear.com/6.x/shapes/svg?seed=${name}`,
    [img, name]
  );
  return (
    <div className="group w-full flex items-center py-2 px-3 rounded border border-black/5 gap-3 hover:bg-slate-100 active:bg-slate-100">
      <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
        <img
          className="w-10 h-10 md:w-12 md:h-12 rounded-full group-hover:scale-110"
          src={src}
        />
      </div>
      <span className="max-w-[60%] truncate">{name}</span>
    </div>
  );
});
