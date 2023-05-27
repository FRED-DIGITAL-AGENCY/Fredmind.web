import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import 'bootstrap/dist/css/bootstrap.min.css';

// Layouts

import LayoutDefault from './layouts/LayoutDefault';
// Section

import AppDev from './components/Services/AppDev'
import WebDev from './components/Services/WebDev'
import BrandingSection from './components/Services/BrandingSection'
import DigitalMarketing from './components/Services/DigitalMarketing'
// Use Cases
import Startup from './components/Usecases/Startup'
import Professional from './components/Usecases/Professional'
import Saas from './components/Usecases/Saas'
import Ecommerce from './components/Usecases/Ecommerce'
import Creators from './components/Usecases/Creators'



// Views 
import Home from './views/Home';
import Services from './views/Services';
import UseCases from './views/Usecases';
import Pricing from './views/Pricing';
import Company from './views/Company'
import Blog from './views/Blog'
import School from './views/School';


// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
             <AppRoute exact path="/WhatWeDo" component={Services} layout={LayoutDefault} />
             <AppRoute exact path="/usecases" component={UseCases} layout={LayoutDefault} />
             <AppRoute exact path="/pricing" component={Pricing} layout={LayoutDefault} />
             <AppRoute exact path="/WhoWeAre" component={Company} layout={LayoutDefault} />
             <AppRoute exact path="/blog" component={Blog} />
               <AppRoute exact path="/school" component={School} layout={LayoutDefault} />
               {/* WhatWeDo */}
               <AppRoute exact path="/DigitalMarketing" component={DigitalMarketing} layout={LayoutDefault} />
               <AppRoute exact path="/BrandingSection" component={BrandingSection} layout={LayoutDefault} />
               <AppRoute exact path="/WebDev" component={WebDev} layout={LayoutDefault} />
               <AppRoute exact path="/AppDev" component={AppDev} layout={LayoutDefault} />
               {/* UseCases */}
               <AppRoute exact path="/Ecommerce" component={Ecommerce} layout={LayoutDefault} />
               <AppRoute exact path="/Professional" component={Professional} layout={LayoutDefault} />
               <AppRoute exact path="/Startup" component={Startup} layout={LayoutDefault} />
               <AppRoute exact path="/Saas" component={Saas} layout={LayoutDefault} />
               <AppRoute exact path="/Creators" component={Creators} layout={LayoutDefault} />


        </Switch>
      )} />
  );
}

export default App;