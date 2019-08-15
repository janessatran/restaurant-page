import {createAboutSection, 
        createTabs, 
        createTabLabels, 
        createContentContainers,
        createMenuSection,
        createContactSection } from './page-load';

window.addEventListener("load", init, true); 
function init(){  
  let tabs = ['OUR STORY', 'MENU', 'GALLERY'];
  createTabs();
  createTabLabels();
  createContentContainers();
  createAboutSection();
  createMenuSection();
  createContactSection();
};
