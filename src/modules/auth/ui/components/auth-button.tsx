import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
  return (
    <Button
      variant="outline"
      className="py-2  text-sm font-medium  text-blue-600 hover:bg-text-200 rounded-full shadow-none [&_svg]:size-4 "
    >
      <UserCircleIcon />
      Sign In
    </Button>
  );
};
