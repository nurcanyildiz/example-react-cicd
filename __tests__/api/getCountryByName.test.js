import axios from "axios";
import {getCountryByName} from "../../src/api/getCountryByName";
//TODO: write a mock to simulate data being fetched from the API
//Use this to help: https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb
jest.mock('axios')
test('Get country by Name return countries', async () => {
    axios.get.mockResolvedValue({
        data: [
            {
                name: {
                    common: 'spain',

                }
            },
        ]
    })

    const countries = await getCountryByName('spain');
    expect(countries.length).toEqual(1);
    expect(countries[0].name.common).toEqual('spain');
});