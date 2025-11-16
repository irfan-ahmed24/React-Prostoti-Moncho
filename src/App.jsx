import { useContext, useEffect, useState } from "react";

//import component
import PageRoute from "./Routes/PageRoute";
import MobileNav from "./components/mobile/MobileNav";
import DesktopSideBar from "./components/DesktopSideBar";
import { DarkContext } from "./USE_CONTEXT_HOOkS/DarkContext";

function App() {
  const storedTheme = localStorage.getItem("isDark");
  const [theme, setTheme] = useState(storedTheme);

  const isDark = theme === "dark" ? true : false;

  useEffect(() => {
    localStorage.setItem("isDark", theme);
  }, [theme]);
  const [open, setIsopen] = useState(false);
  const handleIsClick = (isOpen) => {
    setIsopen(isOpen);
  };
  return (
    <>
      <DarkContext.Provider value={{ theme, setTheme }}>
        <div className={`${isDark ? "dark" : ""}`}>
          <MobileNav />
          <div>
            <nav>
              <DesktopSideBar onIsClick={handleIsClick} />
            </nav>
            <main className="bg-slate-100 dark:bg-[#060F1D] min-h-screen mt-10 lg:mt-0 transition-all duration-200">
              <div
                className={`mx-auto lg:max-w-[75rem] 2xl:max-w-full transition-all duration-200 allsection ${
                  !open ? "lg:pl-65" : "lg:pl-15"
                }`}
              >
                <PageRoute />
              </div>
            </main>
          </div>
        </div>
      </DarkContext.Provider>
    </>
  );
}

export default App;
