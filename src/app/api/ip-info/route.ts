import { IpInfoRequest } from '../_dto/IpInfoRequest';
import { plainToInstance } from 'class-transformer';
import { IpInfoResponse } from '../_dto/IpInfoResponse';

export async function POST(request: Request) {
  try {
    const requestData = await request.json();
    const validatedData = plainToInstance(IpInfoRequest, requestData);

    if (!validatedData.ip) {
      throw new Error('ip is invalid');
    }
    
    const apiUrl = `https://api.ip2location.io/?key=${process.env.IP2LOCATION_API_KEY}&ip=${validatedData.ip}`;
    const response = await fetch(apiUrl);

    if (!response.ok) { 
      throw new Error('Failed to fetch IP data');
    }

    const data = await response.json();
    const ipInfoResponse = plainToInstance(IpInfoResponse, data);
    return Response.json(ipInfoResponse)
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to fetch IP data. Error occurred.' }), {
      status: 500,
    });
  }
}
