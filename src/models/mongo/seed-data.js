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
        lat: "53.067656",
        lng: "-9.362239",
        img: "/images/ailladie.jpg"
      },
      murlough: {
        title: "Murlough Bay",
        approach: "Boat from Donegal",
        lat: "55.21406334",
        lng: "-6.12272558",
        img: "/images/murlough.jpg"
      },
      inismor: {
        title: "Inis Mor",
        approach: "Boat from Doolin, camping at opposite of island",
        lat: "53.149634",
        lng: "-9.810778",
        img: "/images/crag.jpg"
      },
      ballykeefe: {
        title: "Ballykeefe",
        approach: "Park at entrance to the woods and walk to the ampitheatre",
        lat: "52.60923",
        lng: "-7.40002159",
        img: "/images/ballykeefe.jpg"
      },
      fairhead: {
        title: "Fairhead",
        approach: "Parking at Sean's farm.  20 minute walk to the top of the Prow.",
        lat: "55.227755",
        lng: "-6.1548246",
        img: "/images/fairhead.jpg"
      },
      mournes: {
        title: "The Mournes",
        approach: "Via South carpark.  Follow the Mourne wall for 20 minutes until you veer off to the right.  Crags visible from a distance.",
        lat: "54.1537794",
        lng: "-6.06618910",
        img: "/images/mournes.jpg"
      },
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
