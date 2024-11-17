import Main from "./main";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="w-full sm:w-[90%] md:w-[85] lg:w-[60%] p-5 font-[family-name:var(--font-geist-sans)]">
      <Main />

      <Footer />
    </div>
  );
}
