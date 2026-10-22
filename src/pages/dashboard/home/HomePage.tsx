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
          <CourseList />
        </div>
      </HomeThemeProvider>
    </>
  )
}
