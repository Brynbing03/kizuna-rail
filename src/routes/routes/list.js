import { getAllRoutes, getListOfRegions, getListOfSeasons } from '../../models/model.js';

export default async (req, res) => {
  const regions = await getListOfRegions();
  const seasons = await getListOfSeasons();

  const { region = 'all', season = 'all' } = req.query;

  let routes = await getAllRoutes();

  //this filters by region if the user selects it 
  if (region !== 'all') {
    routes = routes.filter((r) => r.region === region);
  }

  //this does the same by filters by season
  if (season !== 'all') {
    routes = routes.filter((r) => r.bestSeason === season);
  }

  res.render('routes/list', {
    title: 'Scenic Train Routes',
    regions,
    seasons,
    routes,
    // i did this so the select logic i did above works
    query: { region, season },
  });
};
