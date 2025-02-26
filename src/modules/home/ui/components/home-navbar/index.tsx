import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export const HomeNabar = () => {
  return (
    <nav className="flex items-center fixed  top-0 left-0 right-0 bg-white pr-5 w-full h-16 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* menu and log */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/">
            <div className="flex p-4 items-center gap-1 ">
              <Image
                src="/logo.svg"
                alt="youtube logo"
                width={30}
                height={30}
              />
              <p className="text-xl font-semibold tracking-tight">NewTube</p>
            </div>
          </Link>
        </div>

        {/* serach bar */}
        <div className=" flex-1 items-center justify-center max-w-[700px] mx-auto">
          <SearchInput />
        </div>

        {/* sign in Button */}
        <div className="flex-shrink-0 gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
