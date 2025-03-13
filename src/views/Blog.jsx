import BlogContent from "../components/Blog/BlogContent/BlogContent";
import Explore from "../components/Blog/Explore/Explore";
import HeroBlog from "../components/Blog/HeroBlog/HeroBlog";
import Footer from "../components/Footer/Footer";
import UpdatedNavbar from "../components/Navbar/UpdatedNavbar";

const Blog = () => {
  return (
    <>
      <UpdatedNavbar
        showButton={true}
        className="mt-8 mb-10 md:mt-14 md:mb-16 "
      />
      <HeroBlog />
      <BlogContent />
      <Explore/>
      <Footer />
    </>
  );
};

export default Blog;