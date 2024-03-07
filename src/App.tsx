import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Result } from "./pages";
import MobileWrapper from "@layouts/MobileWrapper";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@infra/queries";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<MobileWrapper page={Home} />} />
          <Route path="/result" element={<MobileWrapper page={Result} />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
