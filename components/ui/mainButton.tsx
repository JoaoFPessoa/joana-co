import { cn } from "@/lib/utils";
import { Button } from "./button";

export default function MainButton({
  children,
  className,
  onClick,
}: {
  children: Readonly<React.ReactNode>;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      className={cn(
        "w-full bg-yellow rounded-3xl text-primary-foreground hover:bg-yellow-light  active:scale-95",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
