import simpsons from './images/simpsons.png'
import health2 from './images/health1.png'
import hanoi from './images/hanoi.png'
import animal from './images/Animal-sightings.png'

export const projects = [
    {
      title: "Health Hero",
      subtitle: "",
      description:
        "Health social media application with ability to share posts or recipes with users on the site. Incorporated an API, allowing users to search a list of foods with calorie infomation. ",
      image: health2,
      link: "https://healthappproject.netlify.app/",
      tech: [
        "Reactjs,",
        " Javascript,",
        " HTML,",
        " Tailwind(CSS),",
        " Express.js,",
        " Node.js",
        " API",
      ],
      github: "https://github.com/Caesar11SL/project3-frontend/settings"
    },
    {
      title: "Simpsons Catalog",
      subtitle: "",
      description:
        "This is a full CRUD applications that allows users to keep their very own character catalog. Users are allowed to add/edit/delete characters, as well as choosing your favorite character!",
      image: simpsons,
      link: "https://csl-simpsons-project.herokuapp.com/simpsons/",
      tech: [
        " Javascript,",
        " EJS,",
        " HTML,",
        " CSS,",
        " MongoDB,",
        " Express.js,",
        " Node.js",
        
      ],
      github: "https://github.com/Caesar11SL/simpsons"
    },
    {
      title: "Animal Sightings",
      subtitle: "",
      description:
        "Catalog application that allows users to share pictures of animals anywhere. Users can comment on other's posts. Full CRUD operation.",
      image: animal,
      link: "https://still-castle-25816.herokuapp.com/",
      tech: [
        "Reactjs,",
        " Django,",
        " CSS,",
        " Python"
      ],
      github: "https://github.com/Caesar11SL/animal-sightings-front"
    },
      {
        title: "Tower of Hanoi",
        subtitle: "",
        description:
          "This is the game of Hanoi, a game built using Javascript. The goal of the game is to move the all the discs to the rightmost peg, one disc at a time, without a bigger disc overlapping a smaller one ",
        image: hanoi,
        link: "https://caesar11sl.github.io/Tower-of-Hanoi/",
        tech: [
          " Javascript,",
          " HTML,",
          " CSS",
        ],
        github: "https://github.com/Caesar11SL/Tower-of-Hanoi"
      },
]