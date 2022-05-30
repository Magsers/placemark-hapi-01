export const serviceUrl = "http://localhost:4000";

export const maggie = {
  firstName: "Maggie",
  lastName: "Simpson",
  email: "maggie@simpson.com",
  password: "secret",
};

export const maggieCredentials = {
  email: "maggie@simpson.com",
  password: "secret",
};

export const testUsers = [
  {
    firstName: "Homer",
    lastName: "Simpson",
    email: "homer@simpson.com",
    password: "secret",
  },
  {
    firstName: "Marge",
    lastName: "Simpson",
    email: "marge@simpson.com",
    password: "secret",
  },
  {
    firstName: "Bart",
    lastName: "Simpson",
    email: "bart@simpson.com",
    password: "secret",
  },
];

  export const testCrags = [
    {
      title: "Doonshean Head",
      approach: "by abseil",
      lat: "52.160858",
      lng: "-7.152420",
      img: "/images/ailladie.jpg"
    },
    {
      title: "Gap of Dunloe",
      approach: "path from car park",
      lat: "52.160858",
      lng: "-7.152420",
      img: "/images/ailladie.jpg"
    },
    {
      title: "Glendalough",
      approach: "by abseil",
      lat: "52.160858",
      lng: "-7.152420",
      img: "/images/ailladie.jpg"
    }
  ];

  export const testRoutes = [
    {
      name: "Lisdoonfarout",
      grade: "HS",
      height: 10,
      firstascent: "Dave Ayton",
      description: "easy",
      lat: "52.160858",
      lng: "-7.152420",
      climber: "->users.homer",
      crag: "->crags.ailladie"
    },
    {
      name: "Moonrill",
      grade: "HVS",
      height: 25,
      firstascent: "Richard Doody",
      description: "chimney climb, very exposed",
      lat: "52.149220",
      lng: "-6.994620",
      climber: "->users.marge",
      crag: "->crags.ailladie"
    },
    {
      name: "An Bonain Bui",
      grade: "VS",
      height: 20,
      firstascent: "Vicky Cleary",
      description: "polished",
      lat: "52.161290",
      lng: "-7.231540",
      climber: "->users.bart",
      crag: "->crags.ailladie"
    }
];

  export const burren = {
    title: "The Burren",
    approach: "Abseil",
    lat: 20.00,
    lng: 20.00,
    img: "/images/ailladie.jpg"
  };

  export const fairhead = {
    title: "Fairhead",
    approach: "by abseil",
    lat: "52.160858",
    lng: "-7.152420",
    img: "/images/ailladie.jpg"
  };

  export const jugcity = {
    name: "Jug City",
    grade: "VS",
    height: 20,
    firstascent: "Vicky Cleary",
    description: "polished",
    lat: "52.161290",
    lng: "-7.231540",
    climber: "->users.marge",
    crag: "->crags.burren"
  };