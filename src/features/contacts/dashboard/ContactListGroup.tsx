import { List, Image } from "semantic-ui-react";
import { Group } from "../../../app/types/contact";

type Props = {
  group: Group;
};

export default function ContactListGroup({ group }: Props) {
  return (
    <List.Item>
      <Image size="mini" circular src={group.photoURL} />
    </List.Item>
  );
}
