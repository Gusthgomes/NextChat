import ConversationFallback from "@/components/shared/conversation/ConversationFallback";
import ItemList from "@/components/shared/item-list/ItemList";
import React from "react";
import AddFriendsDialog from "./_components/AddFriendsDialog";

type Props = {};

const FriendsPage = (props: Props) => {
  return (
    <>
      <ItemList title="Friends" action={<AddFriendsDialog />}>
        Amigos
      </ItemList>
      <ConversationFallback />
    </>
  );
};

export default FriendsPage;
