"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return null;

  return (
    <div className="absolute left-8 top-40"> {/* Force to left */}
      <h2 className="text-2xl lg:text-4xl text-white font-medium">
        Welcome Back, {user?.firstName} 😸
      </h2>
      <p className="text-sm lg:text-base text-[#89b6fd]">
        This is your Financial Overview Report
      </p>
    </div>
  );
};
