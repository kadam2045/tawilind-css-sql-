import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNabar } from "../components/home-navbar";
import { HomeSidebar } from "../components/home-sidebar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  console.log("inside home layout");

  return (
    <SidebarProvider>
      <div>
        <HomeNabar />
      </div>
      <div className="flex min-h-screen pt-[4rem]">
        <HomeSidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
};
