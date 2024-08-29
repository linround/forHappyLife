import {Outlet} from "react-router-dom";
import style from "./root.module.less";

export default function Root() {
  return (
    <div className={style.container}>
      <Outlet />
    </div>
  )
}
