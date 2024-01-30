import List from "@mui/material/List";
import Scrollbars from "react-custom-scrollbars-2";
import menu_list from "../../constants/menus";
import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  return (
    <Scrollbars
      style={{ width: "100%" }}
      className="min-h-[calc(100vh-100px)]"
      autoHide
      universal={true}
    >
      <List component="nav" aria-labelledby="nested-list-subheader">
        {menu_list.map((item, i) => {
          return <SidebarButton key={i} item={item} />;
        })}
      </List>
    </Scrollbars>
  );
}
