import { getCompleteRouteDetails } from '../../models/model.js';

export default async (req, res) => {
  const { routeId } = req.params;

  const details = await getCompleteRouteDetails(routeId);
  if (!details) {
    return res.status(404).render('404');
  }

  res.render('routes/details', { 
    title: 'Route Details',
    details
  });
};
