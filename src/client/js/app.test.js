import { getCoordinates, getWeather, getImage } from './app';

test('getCoordinates should return correct lat and lng', async () => {
    const data = await getCoordinates('London');
    expect(data).toEqual({ lat: 51.5074, lng: -0.1278 });
});

test('getWeather should return weather data', async () => {
    const data = await getWeather(51.5074, -0.1278, '2024-08-05');
    expect(data).toHaveProperty('data');
});

test('getImage should return image URL', async () => {
    const data = await getImage('London');
    expect(data).toContain('pixabay.com');
});