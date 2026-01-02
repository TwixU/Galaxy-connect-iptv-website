import { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch } from 'wouter';
import { Helmet } from 'react-helmet';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrialCTA from './components/TrialCTA';
import ValueProposition from './components/ValueProposition';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import SimpleComparison from './components/SimpleComparison';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import DeviceCompatibility from './components/DeviceCompatibility';
import SupportCTA from './components/SupportCTA';
import LoadingFallback from './components/LoadingFallback';
import WhatsAppWidget from './components/WhatsAppWidget';
import ExitIntentPopup from './components/ExitIntentPopup';
import CookieConsent from './components/CookieConsent';
import { useCrispPageTracking } from './hooks/useCrispPageTracking';
import './index.css';

// Lazy load secondary pages to improve initial load time
const Checkout = lazy(() => import('./pages/Checkout'));
const ChannelsList = lazy(() => import('./pages/ChannelsList'));
const InstallationGuide = lazy(() => import('./pages/InstallationGuide'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const FeaturesPage = lazy(() => import('./pages/Features'));
const SubscriptionsPage = lazy(() => import('./pages/Subscriptions'));
const Setup = lazy(() => import('./pages/Setup'));
const About = lazy(() => import('./pages/About'));

// Legal Pages
const Terms = lazy(() => import('./pages/legal/Terms'));
const Privacy = lazy(() => import('./pages/legal/Privacy'));
const Refund = lazy(() => import('./pages/legal/Refund'));
const DMCA = lazy(() => import('./pages/legal/DMCA'));
const LegalNotice = lazy(() => import('./pages/LegalNotice'));

// A/B Testing Landing Pages
const TrustLanding = lazy(() => import('./pages/landing/TrustLanding'));
const SocialProofLanding = lazy(() => import('./pages/landing/SocialProofLanding'));
const LimitedOfferLanding = lazy(() => import('./pages/landing/LimitedOfferLanding'));
const ValueLanding = lazy(() => import('./pages/landing/ValueLanding'));
const ValueCheckout = lazy(() => import('./pages/ValueCheckout'));
const PlanRedirect = lazy(() => import('./pages/PlanRedirect'));

const queryClient = new QueryClient();

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Galaxy Connect - #1 Premium Streaming Service | 17,000+ Channels</title>
        <meta name="description" content="Experience the future of streaming with Galaxy Connect. Access 17,000+ live channels, movies, and series in 4K/HD. No buffering, instant activation." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Galaxy Connect",
              "url": "https://apollogrouptvs.com",
              "logo": "https://apollogrouptvs.com/logo.png",
              "sameAs": []
            }
          `}
        </script>
      </Helmet>
      <Navigation />
      <Hero />
      <TrialCTA />
      <ValueProposition />
      <HowItWorks />
      <Pricing />
      <DeviceCompatibility />

      <SimpleComparison />
      <Testimonials />
      <SupportCTA />
      <FinalCTA />
      <Footer />
    </>
  );
}

function App() {
  // Track page changes in Crisp for real-time visitor monitoring
  useCrispPageTracking();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Suspense fallback={<LoadingFallback />}>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/checkout/:duration/:devices" component={PlanRedirect} />
            <Route path="/channels-list" component={ChannelsList} />
            <Route path="/features" component={FeaturesPage} />
            <Route path="/subscriptions" component={SubscriptionsPage} />

            {/* Setup Routes */}
            <Route path="/setup" component={Setup} />
            <Route path="/installation-guide" component={InstallationGuide} />

            <Route path="/thank-you" component={ThankYou} />
            <Route path="/about" component={About} />

            {/* Legal Routes */}
            <Route path="/terms" component={Terms} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/legal" component={LegalNotice} />
            <Route path="/refund" component={Refund} />
            <Route path="/dmca" component={DMCA} />

            {/* Landing pages for Google Ads A/B testing (not linked in navigation) */}
            <Route path="/landing/trust" component={TrustLanding} />
            <Route path="/landing/social-proof" component={SocialProofLanding} />
            <Route path="/landing/limited-offer" component={LimitedOfferLanding} />
            <Route path="/landing/value" component={ValueLanding} />

            {/* Emotional checkout page for Value landing */}
            <Route path="/checkout/value" component={ValueCheckout} />

            <Route>
              {/* 404 - Redirect to home */}
              <HomePage />
            </Route>
          </Switch>
        </Suspense>

        {/* Conversion Optimization Widgets - Loaded eagerly as they are critical for CRO */}
        <WhatsAppWidget />
        <ExitIntentPopup />

        {/* Cookie Consent Banner */}
        <CookieConsent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
