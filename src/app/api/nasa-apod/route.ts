import { plainToInstance } from 'class-transformer';
import { APODResponse } from '../_dto/APODResponse';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
  try {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch APOD data');
    }

    const data = await response.json();
    const apodResponse = plainToInstance(APODResponse, data);
    return Response.json(apodResponse)
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to fetch APOD data. Error occurred.' }), {
      status: 500,
    });
  }
}
