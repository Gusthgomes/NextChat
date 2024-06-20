"use client";

import LoadingLogo from "@/components/shared/loadingLogo";
import { useAuth } from "@clerk/nextjs";
import { Authenticated, AuthLoading, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

type Props = {
  children: React.ReactNode;
};

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";

const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider = ({ children }: Props) => {
  return (
    <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
      <Authenticated>{children}</Authenticated>
      <AuthLoading>
        <LoadingLogo />
      </AuthLoading>
    </ConvexProviderWithClerk>
  );
};

export default ConvexClientProvider;
