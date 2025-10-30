import { useState } from "react";

import PageRoute from "./Routes/PageRoute";
import MobileNav from "./components/mobile/MobileNav";
import DesktopSideBar from "./components/DesktopSideBar";

function App() {
  const [open, setIsopen] = useState(false);
  const handleIsClick = (isOpen) => {
    setIsopen(isOpen);
  };
  return (
    <>
      <MobileNav />
      <div>
        <nav>
          <DesktopSideBar onIsClick={handleIsClick} />
        </nav>
        <main className="bg-slate-100 min-h-screen mt-10 lg:mt-0">
          <div
            className={`mx-auto lg:max-w-[75rem] 2xl:max-w-full transition-all duration-200 allsection ${
              !open ? "lg:pl-65" : "lg:pl-15"
            }`}
          >
            <PageRoute />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
