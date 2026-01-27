import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      {/* NAVBAR */}
      <nav
        style={{
          padding: "10px",
          background: "#222",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "white", marginRight: "15px" }}>
          About
        </Link>
        <Link to="/contact" style={{ color: "white" }}>
          Contact
        </Link>
      </nav>

      {/* PAGE CONTENT */}
      <main
        style={{
          minHeight: "calc(100vh - 120px)",
          padding: "30px",
          marginTop: "60px",
          paddingBottom: "80px",
        }}
      >
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer
        style={{
          padding: "10px",
          background: "#eee",
          textAlign: "center",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        © 2026 MyWebsite
      </footer>
    </>
  );
}

export default Layout;
