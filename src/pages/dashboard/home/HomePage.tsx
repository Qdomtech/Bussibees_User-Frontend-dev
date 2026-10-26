import SearchBar from "@/ui/search/SearchBar";
import "./home-page.css";
import CourseList from "./components/course-list/CourseList";
import HomeThemeProvider from "./hook/HomeThemeProvider";

export default function HomePage() {
  return (
    <>
      <HomeThemeProvider>
        <div className="p-4">
          <SearchBar />
          {/* Hero Banner */}
          <div className="home-hero -mx-4 -mt-4 lg:mt-0 lg:mx-0 lg:rounded-2xl mb-5">
            <div className="home-hero-inner">
              <div className="home-hero-content">
                <p className="home-hero-eyebrow">Hello there! 👋</p>
                <h2 className="home-hero-title">
                  Ready to <span>crack</span> your exam?
                </h2>
                <p className="home-hero-sub">
                  Handpicked courses built for your success.
                </p>
              </div>
              <div className="home-hero-art" aria-hidden="true">
                <div className="home-hero-circle home-hero-circle--lg" />
                <div className="home-hero-circle home-hero-circle--sm" />
              </div>
            </div>
          </div>
          <CourseList />
        </div>
      </HomeThemeProvider>
    </>
  )
}
