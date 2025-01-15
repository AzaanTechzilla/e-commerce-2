import Banner from "../component/banner/Banner";
import "../../../public/assets/css/Banner.css"
export default function Home() {
  return (
    <>
      <section className="banner">
        <div className="banner-wrapper">
          <div className="container mx-auto">
           <Banner />
          </div>
        </div>
      </section>
    </>
  );
}
