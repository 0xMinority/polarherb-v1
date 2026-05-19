import { ReactNode } from "react";
import { layout } from "../../lib/design-tokens";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <div
      className="mx-auto w-full"
      style={{
        maxWidth: layout.pageMaxWidth,
        paddingLeft: layout.sectionPaddingX,
        paddingRight: layout.sectionPaddingX,
      }}
    >
      {children}
    </div>
  );
}