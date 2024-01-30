import AddCard from "@mui/icons-material/AddCard";
import Bookmarks from "@mui/icons-material/Bookmarks";
import Collections from "@mui/icons-material/Collections";
import CorporateFare from "@mui/icons-material/CorporateFare";
import CreditCard from "@mui/icons-material/CreditCard";
import EventNote from "@mui/icons-material/EventNote";
import Explore from "@mui/icons-material/Explore";
import Groups from "@mui/icons-material/Groups";
import LocalMall from "@mui/icons-material/LocalMall";
import People from "@mui/icons-material/People";
import Pix from "@mui/icons-material/Pix";
import SpeakerNotes from "@mui/icons-material/SpeakerNotes";
import Timeline from "@mui/icons-material/Timeline";
import ViewList from "@mui/icons-material/ViewList";
import Wallet from "@mui/icons-material/Wallet";
import Work from "@mui/icons-material/Work";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface Menu {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  path: string;
}
export interface WithSubmenu extends Menu {
  subMenu?: Menu;
}

const menu_list: WithSubmenu[] = [
  {
    title: "Timeline",
    icon: Timeline,
    path: "/",
  },
  {
    title: "Message",
    icon: SpeakerNotes,
    path: "/",
  },
  {
    title: "Albums",
    icon: Collections,
    path: "/",
  },
  {
    title: "Save post",
    icon: Bookmarks,
    path: "/",
  },
  {
    title: "Card holder",
    icon: CreditCard,
    path: "/",
    subMenu: {
      icon: AddCard,
      path: "/",
      title: "Generate Card",
    },
  },
  {
    title: "Jobs",
    icon: Work,
    path: "/",
  },
  {
    title: "Corporate",
    icon: CorporateFare,
    path: "/",
  },
  {
    title: "Wallet",
    icon: Wallet,
    path: "/",
  },
  {
    title: "Shop & Market",
    icon: LocalMall,
    path: "/",
  },
  {
    title: "Canvas",
    icon: Pix,
    path: "/",
  },
  {
    title: "My group",
    icon: Groups,
    path: "/",
    subMenu: {
      icon: People,
      path: "/",
      title: "Create group",
    },
  },
  {
    title: "Events",
    icon: EventNote,
    path: "/",
  },

  {
    title: "Community",
    icon: People,
    path: "/",
  },
  {
    title: "Blog",
    icon: ViewList,
    path: "/",
  },
  {
    title: "Explore",
    icon: Explore,
    path: "/",
  },
];
export default menu_list;
