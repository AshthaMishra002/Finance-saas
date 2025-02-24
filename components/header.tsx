import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { Navigation } from "@/components/navigation";
import { HeaderLogo } from "@/components/header-logo";
import { Loader2 } from "lucide-react";
import { WelcomeMsg } from "./welcome-msg";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <div className="ml-auto">
            <ClerkLoaded>
              <UserButton afterSignOutUrl="/" />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className="size-8 animate-spin text-slate-400 mr-2" />
            </ClerkLoading>
          </div>
        </div>
        <div>
          <WelcomeMsg />
        </div>
      </div>
    </header>
  );
};
