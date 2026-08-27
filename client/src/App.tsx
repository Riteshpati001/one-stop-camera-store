/** Aperture Noir design note: global routing keeps all public pages inside a cinematic, practical shell. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MotionConfig } from "framer-motion";
import { SiteLayout } from "@/components/SiteChrome";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import GearFinder from "@/pages/GearFinder";
import Quote from "@/pages/Quote";
import About from "@/pages/About";
import Reviews from "@/pages/Reviews";
import Contact from "@/pages/Contact";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return <SiteLayout><Switch>
    <Route path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/products/:slug" component={ProductDetail} />
    <Route path="/gear-finder" component={GearFinder} />
    <Route path="/quote" component={Quote} />
    <Route path="/about" component={About} />
    <Route path="/reviews" component={Reviews} />
    <Route path="/contact" component={Contact} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch></SiteLayout>;
}

function App() {
  return <MotionConfig reducedMotion="user"><ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary></MotionConfig>;
}

export default App;
