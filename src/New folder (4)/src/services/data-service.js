import {storageService} from './async-storage-service';

const KEY = 'data';
const COMPANIES = [
  {name: 'Water Express'},
  {name: 'Clear Appeal'},
  {name: 'West Barnes Pro'},
  {name: 'Glass Empower'},
  {name: 'Smarty Life'},
  {name: 'Time Cop'},
  {name: 'knoxfitness store'},
  {name: 'Auto MAGMA'},
  {name: 'Changing Faces'},
  {name: 'Expansion Place'},
  {name: 'Custom Extractors Ltd'},
  {name: 'The Fetal Development'},
  {name: 'Glass Advantage'},
  {name: 'Ensure Bank'},
  {name: 'Sapino Windows'},
  {name: 'MagicBox'},
  {name: 'Gold Dreams'},
  {name: 'Glass Platinum'},
  {name: 'Identa Windows'},
  {name: 'Time on Your Side'},
  {name: 'Regular Ticker'},
  {name: 'Sales Market'},
  {name: 'Zoey Copper'},
  {name: 'The Big Dig Mining'},
  {name: 'blucinematic stores'},
  {name: 'Platinum Home'},
  {name: 'SassySerene'},
  {name: 'Continued Ontogeny'},
  {name: 'Triple Play Mining'},
  {name: 'Galaxy Mining'},
  {name: 'PrimeFex Finance'},
  {name: 'Alpha Shine'},
  {name: 'Your Security First'},
  {name: 'Rift Energy'},
  {name: 'Trottego Custom Windows'},
  {name: 'Water Express'},
  {name: 'Clear Appeal'},
  {name: 'West Barnes Pro'},
  {name: 'Glass Empower'},
  {name: 'Smarty Life'},
  {name: 'Time Cop'},
  {name: 'knoxfitness store'},
  {name: 'Auto MAGMA'},
  {name: 'Changing Faces'},
  {name: 'Expansion Place'},
  {name: 'Custom Extractors Ltd'},
  {name: 'The Fetal Development'},
  {name: 'Glass Advantage'},
  {name: 'Ensure Bank'},
  {name: 'Sapino Windows'},
  {name: 'MagicBox'},
  {name: 'Gold Dreams'},
  {name: 'Glass Platinum'},
  {name: 'Identa Windows'},
  {name: 'Time on Your Side'},
  {name: 'Regular Ticker'},
  {name: 'Sales Market'},
  {name: 'Zoey Copper'},
  {name: 'The Big Dig Mining'},
  {name: 'blucinematic stores'},
];

export const dataService = {
  query,
};

async function query(filterBy = '') {
  // console.log(filterBy);
  const x = await storageService.query(KEY);
  return x?.length ? x : createData();
}

function createData() {
  for (let i = 0; i < COMPANIES.length; i++) {
    const companySize = {
      x: getRandomInt(5, 20),
      y: getRandomInt(5, 20),
      r: getRandomInt(5, 20),
    };
    COMPANIES[i].size = companySize;
  }
  storageService.save(KEY, COMPANIES);
  return COMPANIES;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min + 1) + min;
}
