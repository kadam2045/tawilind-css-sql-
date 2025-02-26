import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNabar } from "../components/home-navbar";

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
      <div>{children}</div>
    </SidebarProvider>
  );
};
