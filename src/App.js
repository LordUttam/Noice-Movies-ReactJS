import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  var movieList = {
    Action: [
      {
        bg: "thor_ragnarok_gk5hxm.jpg",
        name: "Thor: Ragnarok",
        year: "2017",
        score: "93%"
      },
      {
        bg: "avengers_endgame_dsshhu.jpg",
        name: "Avengers: Endgame",
        year: "2019",
        score: "93%"
      },
      { bg: "logan_cz88l0.jpg", name: "Logan", year: "2017", score: "93%" },
      {
        bg: "parabellum_bklxsv.jpg",
        name: "John Wick: Parabellum",
        year: "2019",
        score: "89%"
      },
      {
        bg: "ip_man_gp59tx.jpg",
        name: "Ip Man",
        year: "2008",
        score: "86%"
      },
      {
        bg: "ip_man_2_nwrhn7.jpg",
        name: "Ip man 2",
        year: "2010",
        score: "96%"
      },
      {
        bg: "bloodsport_e6iyxd.jpg",
        name: "Bloodsport",
        year: "1988",
        score: "70%"
      },
      {
        bg: "karate_kid_bcdvzj.jpg",
        name: "The karate kid",
        year: "1984",
        score: "89%"
      }
    ],

    Animation: [
      {
        bg: "incredibles_2_qjs0la.jpg",
        name: "Incredibles 2",
        year: "2018",
        score: "93%"
      },
      {
        bg: "zootopia_c0pf5n.jpg",
        name: "Zootopia",
        year: "2016",
        score: "98%"
      },
      { bg: "wall_e_brrgrh.jpg", name: "Wall-E", year: "2008", score: "95%" },
      {
        bg: "spiderman_jlhjc2.jpg",
        name: "Spiderman: Into the spiderverse",
        year: "2018",
        score: "97%"
      },
      {
        bg: "ratatouille_qztchj.jpg",
        name: "Ratatouille",
        year: "2007",
        score: "96%"
      },
      {
        bg: "kung_fu_panda_jwefj7.jpg",
        name: "Kung fu panda",
        year: "2008",
        score: "87%"
      },
      {
        bg: "kung_fu_panda_II_jlygkv.jpg",
        name: "Kung fu panda II",
        year: "2011",
        score: "85%"
      },
      {
        bg: "how_to_train_your_dragon_lo4mil.jpg",
        name: "How to train your dragon",
        year: "2010",
        score: "95%"
      },
      {
        bg: "big_hero_6_kmr9aj.jpg",
        name: "Big Hero 6",
        year: "2014",
        score: "90%"
      }
    ],
    History: [
      {
        bg: "schindlers_list_k1ohsl.jpg",
        name: "Schindler's List",
        year: "1993",
        score: "98%"
      },
      {
        bg: "pirates_of_silicon_valley_qrdfy3.jpg",
        name: "Pirates of Silicon Valley",
        year: "1999",
        score: "89%"
      },
      { bg: "dunkirk_ljc6m5.jpg", name: "Dunkirk", year: "2018", score: "92%" },
      {
        bg: "tanhaji_j7qose.jpg",
        name: "Tanhaji: The Unsung Warrior",
        year: "2020",
        score: "76%"
      },
      {
        bg: "apollo_13_mwxpx4.jpg",
        name: "Apollo 13",
        year: "1995",
        score: "96%"
      },
      {
        bg: "black_hawk_down_szdhyg.jpg",
        name: "Black Hawk Down",
        year: "2001",
        score: "78%"
      }
    ],
    Biography: [
      {
        bg: "a_beautiful_mind_llxuz5.jpg",
        name: "A Beautiful Mind",
        year: "2001",
        score: "74%"
      },
      {
        bg: "the_man_who_knew_infinity_mskxih.jpg",
        name: "The man who knew infinity",
        year: "2015",
        score: "89%"
      },
      {
        bg: "bhaag_milkha_bhaag_vrzqey.jpg",
        name: "Bhaag Milkha Bhaag",
        year: "2013",
        score: "94%"
      },
      {
        bg: "imitation_game_bvphhq.jpg",
        name: "The Imitation Game",
        year: "2014",
        score: "89%"
      },
      {
        bg: "12_years_a_slave_nioqwv.jpg",
        name: "12 Years a Slave",
        year: "2013",
        score: "90%"
      },
      {
        bg: "pursuit_of_happyness_uaw6x6.jpg",
        name: "Pursuit of Happyness",
        year: "2006",
        score: "87%"
      },
      {
        bg: "the_wolf_of_wall_street_wljiqu.jpg",
        name: "The wolf of Wall Street",
        year: "2013",
        score: "79%"
      },
      {
        bg: "catch_me_if_you_can_kj8eox.jpg",
        name: "Catch me if you can",
        year: "2002",
        score: "96%"
      },
      {
        bg: "first_man_slyiy1.jpg",
        name: "First Man",
        year: "2018",
        score: "90%"
      }
    ]
  };

  let bglink =
    "https://res.cloudinary.com/uttamsharma/image/upload/v1622386707/fav_movies/";

  const [genre, setGenre] = useState("Action");
  var genreList = Object.keys(movieList);

  function highlighter(genre) {
    let navchild = document.querySelector(".nav").childNodes;

    for (let i = 0; i < genreList.length; i++) {
      navchild[i].style.fontWeight = "normal";
    }
    let j = genreList.indexOf(genre);
    navchild[j].style.fontWeight = "bold";
  }

  function displayMovies(chosenGenre) {
    highlighter(chosenGenre);
    setGenre(chosenGenre);
  }

  return (
    <div className="App">
      <nav className="nav">
        {genreList.map((genre) => {
          return (
            <span
              className="genres"
              onClick={() => displayMovies(genre)}
              key={genre}
            >
              {genre}
            </span>
          );
        })}
      </nav>

      <section className="main">
        <header>
          <h1>NOICE Movies</h1>
          <span>Check out my favorite movies.</span>
        </header>

        <div className="cards">
          {movieList[genre].map((movieDetails) => {
            return (
              <div className="card-item">
                <ul
                  className="card"
                  style={{
                    backgroundImage: `url(${bglink}${movieDetails.bg})`
                  }}
                  key={movieDetails.bg}
                >
                  <li key={movieDetails.name}>{movieDetails.name}</li>
                  <li key={movieDetails.year}>{movieDetails.year}</li>
                  <li key={movieDetails.score}>{movieDetails.score}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
