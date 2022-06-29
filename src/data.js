let data = {
  countries: [
    {
      id: 101,
      name: "India",
      states: [
        {
          id: 201,
          name: "UP",
          cities: [
            {
              id: 501,
              name: "Lucknow"
            },
            { id: 502, name: "Prayagraj" }
          ]
        },
        {
          id: 202,
          name: "haryana",
          cities: [
            {
              id: 501,
              name: "panipat"
            },
            { id: 502, name: "gurgoan" }
          ]
        }
      ]
    },
    {
      id: 102,
      name: "Australia",
      states: [
        {
          id: 202,
          name: "abc",
          cities: [
            {
              id: 601,
              name: "Sydney"
            },
            { id: 602, name: "Brisbane" }
          ]
        }
      ]
    }
  ]
};

export default data;
