import { Card } from "@/components/ui/card";
import React from "react";

type Props = React.PropsWithChildren<{}>;

// TODO: checking screen mobile size

const ConversationContainer = ({ children }: Props) => {
  return (
    <Card className="h-full w-full lg:h-full p-2 flex flex-col gap-2">
      {children}
    </Card>
  );
};

export default ConversationContainer;
