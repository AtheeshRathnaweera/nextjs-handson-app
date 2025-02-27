import { TodaysFactResponse } from '../../_dto/TodaysFactResponse';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
  try {
    const today = new Date();
    const day: number = today.getDate();
    const month: number = today.getMonth() + 1;

    const apiUrl = `http://numbersapi.com/${month}/${day}/date`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch todays fact data');
    }

    const data = await response.text();
    const factResponse = new TodaysFactResponse();
    factResponse.fact = data;
    factResponse.date = today.toISOString().split("T")[0]

    return Response.json(factResponse)
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to fetch Todays Fact data. Error occurred.' }), {
      status: 500,
    });
  }
}
