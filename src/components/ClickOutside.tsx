import React, { useRef, useEffect } from "react";
import { ClickOutsideType } from "@/types/ClickOutsideType";

const ClickOutside: React.FC<ClickOutsideType> = ({
  children,
  exceptionRef,
  onClick,
  className,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickListener = (event: MouseEvent) => {
      const isInside =
        wrapperRef.current?.contains(event.target as Node) ?? false;
      const isException =
        exceptionRef?.current?.contains(event.target as Node) ?? false;

      if (!isInside && !isException) onClick();
    };

    document.addEventListener("mousedown", handleClickListener);

    return () => {
      document.removeEventListener("mousedown", handleClickListener);
    };
  }, [exceptionRef, onClick]);

  return (
    <div ref={wrapperRef} className={`${className || ""}`}>
      {children}
    </div>
  );
};

export default ClickOutside;
