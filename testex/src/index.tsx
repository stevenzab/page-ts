import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Footer from './components/footer';
import Header from './components/header';
import Card from './components/card';
import SearchBar from './components/searchbar';
import Box from './components/box_info';
import Text from './components/text';
import reportWebVitals from './reportWebVitals';
import { HiBriefcase } from 'react-icons/hi';
import { TfiWorld } from 'react-icons/tfi';
import { SiAdguard } from 'react-icons/si';
import CoopCycle from './assets/coopcycle.png';
import Polere from './assets/polère.png';
import OpenFoodFact from './assets/food.png';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='page-container'>
      <Header />
      <Card title='Explorer' text='Vous pouvez répondre à une demande d’entreprise, effectuer une offre d’apport et intégrer plusieurs projets à la fois.' />
      <SearchBar />
      <Box title='CoopCycle'
        subtitle='app.federage.com/coopcycle'
        logo={<img src={CoopCycle} alt="CoopCycle Logo" />}
        text='Fédération de coopératives de livraison à vélo, gouvernée démocratiquement et orientée mutualisation des services.'
        icon=<HiBriefcase />
        titreicon1='Projets ouverts'
        icon2=<TfiWorld />
        titreicon2='Coopérative'
        icon3=<SiAdguard />
        titreicon3='Vérifié' />
      <Box title='OpenFoodFacts'
        subtitle='app.federage.com/openfoodfacts'
        logo={<img src={OpenFoodFact} alt="OpenFoodFacts Logo" />}
        text='Projet collaboratif de base de données libre et ouverte sur les produits alimentaires commercialisés dans...'
        icon=<HiBriefcase />
        titreicon1='Projets ouverts'
        icon2=<TfiWorld />
        titreicon2='Commun' />
      <Box title='Polère'
        subtitle='app.federage.com/polerebrand'
        logo={<img src={Polere} alt="Polere Logo" />}
        text='Spécialiste de la conception et de la vente de vêtements éco-responsables, durables et éthiques.'
        icon=<HiBriefcase />
        titreicon1='Projets ouverts'
        icon2=<TfiWorld />
        titreicon2='Entreprise' />
      <Text />
      <Footer />
    </div>
  </React.StrictMode >
);

reportWebVitals();
