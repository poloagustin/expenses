import { NextApiRequest, NextApiResponse } from 'next';
import auth0 from '../../shared/utils/auth0';

export default async function session(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  try {
    const tokenCache = auth0.tokenCache(req, res);
    const { accessToken } = await tokenCache.getAccessToken();
    console.log('Access token', accessToken);
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
}
