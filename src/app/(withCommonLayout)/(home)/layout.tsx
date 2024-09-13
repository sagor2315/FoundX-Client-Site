import { ReactNode } from "react";

const Layout = ({
  children,
  recetPosts,
}: {
  children: ReactNode;
  recetPosts: ReactNode;
}) => {
  return (
    <>
      <h3> This is from (home)</h3>
      {children}
      {recetPosts}
    </>
  );
};

export default Layout;
