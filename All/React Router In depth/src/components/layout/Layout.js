import MainNavigation from "./MainNavigation";

import style from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={style.main}>{props.children}</main>
    </>
  );
};
export default Layout;
