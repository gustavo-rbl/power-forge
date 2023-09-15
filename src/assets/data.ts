const headerData = [
  {
    id: 0,
    to: "home",
  },
  {
    id: 1,
    to: "about",
  },
  {
    id: 2,
    to: "trainers",
  },
  {
    id: 3,
    to: "prices",
  },
  {
    id: 4,
    to: "contact",
  },
];

const footerData = [
  {
    id: 1,
    section: "programs",
    links: [
      {
        id: 1,
        to: "muscle building",
      },
      {
        id: 2,
        to: "fat loss",
      },
      {
        id: 3,
        to: "increase strength",
      },
      {
        id: 4,
        to: "full body",
      },
    ],
  },
  {
    id: 2,
    section: "company",
    links: [
      {
        id: 1,
        to: "employee wellness",
      },
      {
        id: 2,
        to: "media",
      },
      {
        id: 3,
        to: "careers",
      },
      {
        id: 4,
        to: "privacy notice",
      },
      {
        id: 5,
        to: "terms and conditions",
      },
      {
        id: 6,
        to: "promotions",
      },
    ],
  },
  {
    id: 3,
    section: "members",
    links: [
      {
        id: 1,
        to: "fitness app",
      },
      {
        id: 2,
        to: "coach care connect",
      },
    ],
  },
];

const homeData = {
  banner:
    "https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Ym9keS1idWlsZGVyfHx8fHx8MTY5NDUzNzc3MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  "training-home":
    "https://images.unsplash.com/photo-1546483875-ad9014c88eba?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXhlcmNpc2V8fHx8fHwxNjk0NTM3OTkz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
};

const trainers = [
  {
    name: "Ron Medina",
    img: "https://images.unsplash.com/photo-1589880768855-b106592ac541?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8dHJhaW5lcnx8fHx8fDE2OTQ1MzgxMjk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
    background:
      "https://images.unsplash.com/photo-1547919307-1ecb10702e6f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3ltLWVxdWlwbWVudHx8fHx8fDE2OTQ1Mzg4NTg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
  },
  {
    name: "Ellen Fletcher",
    img: "https://images.unsplash.com/photo-1623171875313-e4d35ba8200f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8dHJhaW5lcnx8fHx8fDE2OTQ1MzgyMDM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
    background:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3ltLWVxdWlwbWVudHx8fHx8fDE2OTQ1MzkxMjY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
  },
  {
    name: "Eric Sims",
    img: "https://images.unsplash.com/photo-1590070714379-e894212d7838?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8dHJhaW5lcnx8fHx8fDE2OTQ1MzgyNTg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
    background:
      "https://images.unsplash.com/photo-1612099197070-4db4ab9abcd4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3ltLWVxdWlwbWVudHx8fHx8fDE2OTQ1Mzg5NjM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
  },
  {
    name: "Nora White",
    img: "https://images.unsplash.com/photo-1589860518300-9eac95f784d9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8dHJhaW5lcnx8fHx8fDE2OTQ1MzgzMjM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
    background:
      "https://images.unsplash.com/photo-1601923876380-7e5b12e09eeb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3ltLWVxdWlwbWVudHx8fHx8fDE2OTQ1Mzg5ODA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
  },
];

const aboutPage = {
  banner:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3ltfHx8fHx8MTY5NDY1NDE4Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
  backgroundLarge: {
    0: "https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3ltfHx8fHx8MTY5NDUzODQwOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
    1: "https://images.unsplash.com/photo-1581122584612-713f89daa8eb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3ltfHx8fHx8MTY5NDUzODQ5Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
  },
  backgroundSmall: [
    {
      bg: "https://images.unsplash.com/photo-1594381898411-846e7d193883?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3ltfHx8fHx8MTY5NDUzODU2Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    },
    {
      bg: "https://images.unsplash.com/photo-1637666133087-23b7138ea721?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3ltfHx8fHx8MTY5NDUzODU5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    },
    {
      bg: "https://images.unsplash.com/photo-1611800065908-233b597db552?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8eW9nYXx8fHx8fDE2OTQ1Mzg2MzU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    },
    {
      bg: "https://images.unsplash.com/photo-1604909052743-94e838986d24?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGlldHx8fHx8fDE2OTQ1Mzg2NzI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    },
  ],
};

const trainersPage = {
  banner:
    "https://images.unsplash.com/photo-1584863231364-2edc166de576?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3ltfHx8fHx8MTY5NDUzOTc0OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
};

const pricesPage = {
  banner:
    "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3ltfHx8fHx8MTY5NDUzOTU2Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
  backgroundLarge: {
    0: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3ltLWVxdWlwbWVudHx8fHx8fDE2OTQ1MzkyNzc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    1: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8d29ya291dHx8fHx8fDE2OTQ1MzkyNDA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
  },
  rates: [
    {
      name: "beginner",
      price: 29,
      benefits: [
        {
          name: "lorem",
          hasBenefit: true,
        },
        {
          name: "ipsum sit",
          hasBenefit: true,
        },
        {
          name: "dolor consecteur",
          hasBenefit: false,
        },
        {
          name: "sit dolor",
          hasBenefit: false,
        },
        {
          name: "amet  sit",
          hasBenefit: false,
        },
        {
          name: "consect lorem sit",
          hasBenefit: false,
        },
      ],
    },
    {
      name: "advanced",
      price: 59,
      benefits: [
        {
          name: "lorem",
          hasBenefit: true,
        },
        {
          name: "ipsum sit",
          hasBenefit: true,
        },
        {
          name: "dolor consecteur",
          hasBenefit: true,
        },
        {
          name: "sit dolor",
          hasBenefit: true,
        },
        {
          name: "amet  sit",
          hasBenefit: false,
        },
        {
          name: "consect lorem sit",
          hasBenefit: false,
        },
      ],
    },
    {
      name: "expert",
      price: 79,
      benefits: [
        {
          name: "lorem",
          hasBenefit: true,
        },
        {
          name: "ipsum sit",
          hasBenefit: true,
        },
        {
          name: "dolor consecteur",
          hasBenefit: true,
        },
        {
          name: "sit dolor",
          hasBenefit: true,
        },
        {
          name: "amet  sit",
          hasBenefit: true,
        },
        {
          name: "consect lorem sit",
          hasBenefit: true,
        },
      ],
    },
  ],
};

const contactPage = {
  banner:
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3ltfHx8fHx8MTY5NDUzOTY0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
};

export {
  headerData,
  footerData,
  homeData,
  trainers,
  aboutPage,
  trainersPage,
  pricesPage,
  contactPage,
};
