import Navbar from "../navbar";
import Footer from "../footer";
export const Mainlayout = (props) => {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>{props.children}</section>
      <section><Footer/></section>
    </>
  );
};
