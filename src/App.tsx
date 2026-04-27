import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Overview from "./pages/Overview";
import Learn from "./pages/Learn";
import GetInvolved from "./pages/GetInvolved";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/learn" element={<Learn />} />
              
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
