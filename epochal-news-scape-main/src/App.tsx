
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import React from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Ethics from "./pages/Ethics";
import World from "./pages/World";
import Politics from "./pages/Politics";
import Business from "./pages/Business";
import Technology from "./pages/Technology";
import Science from "./pages/Science";
import Health from "./pages/Health";
import Arts from "./pages/Arts";

// Create the query client
const queryClient = new QueryClient();

const App = () => (
  // Fixed the ThemeProvider to use a string literal for attribute
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ethics" element={<Ethics />} />
          
          {/* News Section Routes */}
          <Route path="/world" element={<World />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/business" element={<Business />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/science" element={<Science />} />
          <Route path="/health" element={<Health />} />
          <Route path="/arts" element={<Arts />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
