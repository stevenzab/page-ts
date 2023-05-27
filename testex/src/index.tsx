import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Footer from './components/footer';
import Header from './components/header';
import Card from './components/card';
import SearchBar from './components/searchbar';
import Box from './components/box_info';
import reportWebVitals from './reportWebVitals';
import { HiBriefcase } from 'react-icons/hi';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='page-container'>
      <Header />
      <Card title='Explorer' text='Vous pouvez répondre à une demande d’entreprise, effectuer une offre d’apport et intégrer plusieurs projets à la fois.' />
      <SearchBar />
      <Box title='CoopCycle' subtitle='app.federage.com/coopcycle' text='Fédération de coopératives de livraison à vélo, gouvernée démocratiquement et orientée mutualisation des services.' icon=<HiBriefcase /> />
      <Box title='OpenFoodFacts' subtitle='app.federage.com/openfoodfacts' text='Projet collaboratif de base de données libre et ouverte sur les produits alimentaires commercialisés dans...' icon=<HiBriefcase /> />
      <Box title='Polère' subtitle='app.federage.com/polerebrand' text='Spécialiste de la conception et de la vente de vêtements éco-responsables, durables et éthiques.' icon=<HiBriefcase /> />
      <Footer />
    </div>
  </React.StrictMode>
);

reportWebVitals();
