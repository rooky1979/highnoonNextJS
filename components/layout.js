import Nav from "../components/nav";

export default function Layout({ children }) {
  return (
    <>
      <main>
        <Nav />
        {children}
      </main>
    </>
  );
}
