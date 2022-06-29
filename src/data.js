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
          name: "New South Wales",
          cities: [
            {
              id: 601,
              name: "Sydney"
            },
            {
              id: 602,
              name: "Canberra"
            }
          ]
        },
        {
          id: 203,
          name: "Southern Australia",
          cities: [
            {
              id: 621,
              name: "Adelaide"
            }
          ]
        }
      ]
    }
  ]
};

export default data;
