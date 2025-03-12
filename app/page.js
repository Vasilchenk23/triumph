import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Face from "./components/Face";
import SimpleSlider from "./components/SimpleSlider";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 


export default function Home() {
  return (
   <>
    <Face/>
    <SimpleSlider/>
    {/* <Main/> */}
   </>
  );
}
