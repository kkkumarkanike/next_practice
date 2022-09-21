import Nav from "./Nav";

function Layout({ children }) {
  return (
    <div className="flex min-h-scrseen flex-col">
      <header>
        <Nav />
      </header>
      <main className="container m-10">{children}</main>
      <footer></footer>
    </div>
  );
}

export default Layout;
