import { NextApiRequest, NextApiResponse } from 'next';
import auth0 from '../../shared/utils/auth0';

export default async function me(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  try {
    await auth0.handleProfile(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
