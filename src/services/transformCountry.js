const transformCountry = country_data => {
    const { name, capital, region, subregion, flag } = country_data[0];
    const data = {
        name,
        capital,
        region,
        subregion,
        flag
    }
    return data;
};

export default transformCountry;