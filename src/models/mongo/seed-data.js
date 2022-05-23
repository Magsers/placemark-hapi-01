export const seedData = {
    users: {
      _model: "User",
      homer: {
        firstName: "Homer",
        lastName: "Simpson",
        email: "homer@simpson.com",
        password: "secret",
      },
      marge: {
        firstName: "Marge",
        lastName: "Simpson",
        email: "marge@simpson.com",
        password: "$2a$10$D3TWK8MSAh63Lhk4gIFSJ.ekM368J88qJRUYSbuBfzffex6B0dFwK",
      },
      bart: {
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@simpson.com",
        password: "$2a$10$uqnPlgyVjBEOtcgMhn/WRO3FwW4T9gX36tTB4RqpGeB/LkCR3YQuO",
      },
    },
    crags: {
      _model: "Crag",
      ailladie: {
        title: "Ailladie",
        approach: "Park at Lat/Lng and follow path to sea cliffs.  Abseil from huge boulder",
        img: "/images/ailladie.jpg"
      },
      murlough: {
        title: "Murlough Bay",
        approach: "Boat from Donegal",
        img: "/images/murlough.jpg"
      },
      inismor: {
        title: "Inis Mor",
        approach: "Boat from Doolin, camping at opposite of island",
        img: "/images/crag.jpg"
      }
    },
    routes: {
      _model : "Route",
      giraffe : {
        name: "Giraffe",
        grade: "Very Severe",
        height: 25,
        firstascent: "Michael Duffy",
        description: "Sketchy first few moves",
        lat: "52.118861",
        lng: "-10.228969",
        climber: "->users.homer",
        crag: "->crags.ailladie"
      },
      nutella : {
        name: "Nutella",
        grade: "Hard Severe",
        height: 24,
        firstascent: "Michael Duffy",
        description: "Bomber gear all the way",
        lat: "52.119178",
        lng: "-10.227632",
        climber: "->users.marge",
        crag: "->crags.ailladie"
      },
      needle : {
        name: "The Needle",
        grade: "Hard Very Severe",
        height: 15,
        firstascent: "Vicki Cleary",
        description: "No gear",
        lat: "52.118541",
        lng: "-10.229779",
        climber: "->users.bart",
        crag: "->crags.ailladie"
      },
      kleptomaniac : {
        name: "Kleptomaniac",
        grade: "Very Severe",
        height: 25,
        firstascent: "Michael Duffy",
        description: "Sketchy first few moves",
        lat: "53.151991",
        lng: "-9.790328",
        climber: "->users.homer",
        crag: "->crags.inismor"
      },
      sarcophagas : {
        name: "Sarcophagas",
        grade: "E1",
        height: 24,
        firstascent: "Michael Duffy",
        description: "Bomber gear all the way",
        lat: "53.151585",
        lng: "-9.794223",
        climber: "->users.marge",
        crag: "->crags.inismor"
      },
      sunsetglory : {
        name: "Sunset Glory",
        grade: "E3",
        height: 15,
        firstascent: "Vicki Cleary",
        description: "No gear",
        lat: "55.057841",
        lng: "-8.444998",
        climber: "->users.bart",
        crag: "->crags.murlough"
      },
    }
  };
