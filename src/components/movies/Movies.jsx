import React, { useEffect,useState } from 'react'

const GENRE_LIST =[
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

export default function Movies() {
  const selectedMovieByUser =JSON.parse(localStorage.getItem("selectedMovies"));
  const selectedGenresToFetch = selectedMovieByUser.map((movies) =>{
    return GENRE_LIST.find((genre)=>genre.name === movies);
  });
  console.log(selectedGenresToFetch);
  const [movies, setMovies] = useState([
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/bk2fTuIhQIvdAA3RbnrnvLvuaTc.jpg",
      "genre_ids": [
        10402,
        35,
        28,
        80
      ],
      "id": 525,
      "original_language": "en",
      "original_title": "The Blues Brothers",
      "overview": "Jake Blues, just released from prison, puts his old band back together to save the Catholic home where he and his brother Elwood were raised.",
      "popularity": 282.43,
      "poster_path": "https://image.tmdb.org/t/p/original/rhYJKOt6UrQq7JQgLyQcSWW5R86.jpg",
      "release_date": "1980-06-16",
      "title": "The Blues Brothers",
      "video": false,
      "vote_average": 7.74,
      "vote_count": 4036
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/vNXGrknx4GjWLgmuNTftWZluIUl.jpg",
      "genre_ids": [
        18,
        10402
      ],
      "id": 244786,
      "original_language": "en",
      "original_title": "Whiplash",
      "overview": "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
      "popularity": 249.672,
      "poster_path": "https://image.tmdb.org/t/p/original/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
      "release_date": "2014-10-10",
      "title": "Whiplash",
      "video": false,
      "vote_average": 8.382,
      "vote_count": 14643
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/xcaSYLBhmDzJ6P14bcKe0KTh3QV.jpg",
      "genre_ids": [
        10402,
        18
      ],
      "id": 424694,
      "original_language": "en",
      "original_title": "Bohemian Rhapsody",
      "overview": "Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.",
      "popularity": 230.554,
      "poster_path": "https://image.tmdb.org/t/p/original/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg",
      "release_date": "2018-10-24",
      "title": "Bohemian Rhapsody",
      "video": false,
      "vote_average": 7.987,
      "vote_count": 16501
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/fRIzLAIlhRc1QKe8lpXOcdmmfHJ.jpg",
      "genre_ids": [
        10402,
        18
      ],
      "id": 998846,
      "original_language": "en",
      "original_title": "Back to Black",
      "overview": "The extraordinary story of Amy Winehouse’s early rise to fame from her early days in Camden through the making of her groundbreaking album, Back to Black that catapulted Winehouse to global fame. Told through Amy’s eyes and inspired by her deeply personal lyrics, the film explores and embraces the many layers of the iconic artist and the tumultuous love story at the center of one of the most legendary albums of all time.",
      "popularity": 216.823,
      "poster_path": "https://image.tmdb.org/t/p/original/xHQEeUT3Ac4fTY72UeNrI75xLtE.jpg",
      "release_date": "2024-04-11",
      "title": "Back to Black",
      "video": false,
      "vote_average": 6.742,
      "vote_count": 156
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/oAr5bgf49vxga9etWoQpAeRMvhp.jpg",
      "genre_ids": [
        10402,
        18
      ],
      "id": 504608,
      "original_language": "en",
      "original_title": "Rocketman",
      "overview": "The story of Elton John's life, from his years as a prodigy at the Royal Academy of Music through his influential and enduring musical partnership with Bernie Taupin.",
      "popularity": 194.221,
      "poster_path": "https://image.tmdb.org/t/p/original/f4FF18ia7yTvHf2izNrHqBmgH8U.jpg",
      "release_date": "2019-05-17",
      "title": "Rocketman",
      "video": false,
      "vote_average": 7.325,
      "vote_count": 4492
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/lFLwxSd9JReOBBxoUwQFBANcyIl.jpg",
      "genre_ids": [
        18,
        10402,
        36,
        35
      ],
      "id": 327331,
      "original_language": "en",
      "original_title": "The Dirt",
      "overview": "The story of Mötley Crüe and their rise from the Sunset Strip club scene of the early 1980s to superstardom.",
      "popularity": 192.948,
      "poster_path": "https://image.tmdb.org/t/p/original/xGY5rr8441ib0lT9mtHZn7e8Aay.jpg",
      "release_date": "2019-03-22",
      "title": "The Dirt",
      "video": false,
      "vote_average": 7.46,
      "vote_count": 1188
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
      "genre_ids": [
        10751,
        16,
        10402,
        12
      ],
      "id": 354912,
      "original_language": "en",
      "original_title": "Coco",
      "overview": "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
      "popularity": 178.501,
      "poster_path": "https://image.tmdb.org/t/p/original/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
      "release_date": "2017-10-27",
      "title": "Coco",
      "video": false,
      "vote_average": 8.212,
      "vote_count": 18812
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/qLsoHP5ri2xnOxZMp8PBf82rgkY.jpg",
      "genre_ids": [
        10402,
        35,
        18,
        10751
      ],
      "id": 49863,
      "original_language": "en",
      "original_title": "The Singing Nun",
      "overview": "Belgian nun Sister Ann is sent to another order where she's at first committed to helping troubled souls, like Nichole and little Dominic. When Father Clementi hears Sister Ann's uplifting singing style, he takes her to a talent contest. Sister Ann is signed to a record deal and everyone is listening to her lighthearted songs. She is unprepared for her newfound fame (like appearing on The Ed Sullivan Show) and unwanted side effects, including a wrongful attraction to an old friend.",
      "popularity": 172.036,
      "poster_path": "https://image.tmdb.org/t/p/original/vITreT3v0ofJXchbvtlwB6AjR1Z.jpg",
      "release_date": "1966-03-17",
      "title": "The Singing Nun",
      "video": false,
      "vote_average": 5.5,
      "vote_count": 17
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/tnPgH5j3rPRajvF1iUqLH9WgWqz.jpg",
      "genre_ids": [
        35,
        10402,
        10749
      ],
      "id": 3080,
      "original_language": "en",
      "original_title": "Top Hat",
      "overview": "Showman Jerry Travers is working for producer Horace Hardwick in London. Jerry demonstrates his new dance steps late one night in Horace's hotel room, much to the annoyance of sleeping Dale Tremont below. She goes upstairs to complain and the two are immediately attracted to each other. Complications arise when Dale mistakes Jerry for Horace.",
      "popularity": 166.797,
      "poster_path": "https://image.tmdb.org/t/p/original/qoPBiN6PBs2NsP7BNOJGCnmwruG.jpg",
      "release_date": "1935-08-29",
      "title": "Top Hat",
      "video": false,
      "vote_average": 7.293,
      "vote_count": 278
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/6QOZ7RGucRJLGvm7TH5k2BN0xSp.jpg",
      "genre_ids": [
        18,
        10402
      ],
      "id": 86829,
      "original_language": "en",
      "original_title": "Inside Llewyn Davis",
      "overview": "In Greenwich Village in the early 1960s, gifted but volatile folk musician Llewyn Davis struggles with money, relationships, and his uncertain future.",
      "popularity": 164.595,
      "poster_path": "https://image.tmdb.org/t/p/original/nNxK3pC3DMpPpWKMvo2p3liREVT.jpg",
      "release_date": "2013-10-18",
      "title": "Inside Llewyn Davis",
      "video": false,
      "vote_average": 7.197,
      "vote_count": 2602
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/ww6f0XEn8aUbNsK1OQGdutJWwQf.jpg",
      "genre_ids": [
        10749,
        18,
        10402
      ],
      "id": 369557,
      "original_language": "en",
      "original_title": "Sing Street",
      "overview": "A boy growing up in Dublin during the 1980s escapes his strained family life by starting a band to impress the mysterious girl he likes.",
      "popularity": 150.83,
      "poster_path": "https://image.tmdb.org/t/p/original/sUWpVlrvzU2SJbnVZqIeKulPKwk.jpg",
      "release_date": "2016-03-11",
      "title": "Sing Street",
      "video": false,
      "vote_average": 7.875,
      "vote_count": 2208
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/5om2iHhm2dgv0s2YgPDSEMIkRNx.jpg",
      "genre_ids": [
        35,
        14,
        10402,
        10749
      ],
      "id": 515195,
      "original_language": "en",
      "original_title": "Yesterday",
      "overview": "Jack Malik is a struggling singer-songwriter in an English seaside town whose dreams of fame are rapidly fading, despite the fierce devotion and support of his childhood best friend, Ellie. After a freak bus accident during a mysterious global blackout, Jack wakes up to discover that he's the only person on Earth who can remember The Beatles.",
      "popularity": 144.982,
      "poster_path": "https://image.tmdb.org/t/p/original/9fYka5CQt9nrb6LOtKicysUf9NA.jpg",
      "release_date": "2019-06-26",
      "title": "Yesterday",
      "video": false,
      "vote_average": 6.705,
      "vote_count": 3771
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/vRfo7aDU9k10G1FUSixOCPbcBmr.jpg",
      "genre_ids": [
        35,
        14,
        10402,
        10749
      ],
      "id": 25199,
      "original_language": "en",
      "original_title": "Teen Witch",
      "overview": "Louise is not very popular at her highschool. Then she learns that she's descended from the witches of Salem and has inherited their powers. At first she uses them to get back at the girls and teachers who teased her and to win the heart of the handsome footballer's captain. But soon she has doubts if it's right to 'cheat' her way to popularity.",
      "popularity": 141.983,
      "poster_path": "https://image.tmdb.org/t/p/original/51A71crqobviJRX2Ktl7JVROwdv.jpg",
      "release_date": "1989-04-28",
      "title": "Teen Witch",
      "video": false,
      "vote_average": 6.079,
      "vote_count": 165
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/zMtBbNhROxPf0urHSBoZUnqJEwT.jpg",
      "genre_ids": [
        16,
        10751,
        10402,
        14,
        35
      ],
      "id": 901362,
      "original_language": "en",
      "original_title": "Trolls Band Together",
      "overview": "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
      "popularity": 141.925,
      "poster_path": "https://image.tmdb.org/t/p/original/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
      "release_date": "2023-10-12",
      "title": "Trolls Band Together",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 762
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/o44P2W9ga6rISAVyOrChHqXjN42.jpg",
      "genre_ids": [
        10402
      ],
      "id": 1063549,
      "original_language": "en",
      "original_title": "Gaga Chromatica Ball",
      "overview": "In front of a sold-out crowd of 52,000 people, Lady Gaga delivers a career-defining performance at Los Angeles's Dodger Stadium during her 2022 Chromatica Ball Tour.",
      "popularity": 138.779,
      "poster_path": "https://image.tmdb.org/t/p/original/8uWhPiEcMDI8XelSmfTobTmPyA1.jpg",
      "release_date": "2024-05-23",
      "title": "Gaga Chromatica Ball",
      "video": false,
      "vote_average": 8.167,
      "vote_count": 24
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/s3WFrpZV1QIo8Aao2TaAI5ERUTO.jpg",
      "genre_ids": [
        18,
        10402,
        10749
      ],
      "id": 13763,
      "original_language": "en",
      "original_title": "Purple Rain",
      "overview": "A victim of his own anger, the Kid is a Minneapolis musician on the rise with his band, the Revolution, escaping a tumultuous home life through music. While trying to avoid making the same mistakes as his truculent father, the Kid navigates the club scene and a rocky relationship with a captivating singer, Apollonia. But another musician, Morris, looks to steal the Kid's spotlight -- and his girl.",
      "popularity": 130.159,
      "poster_path": "https://image.tmdb.org/t/p/original/vkQmzaSuDj8QyXmwNhCceCAmwUe.jpg",
      "release_date": "1984-07-27",
      "title": "Purple Rain",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 349
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/1ZSKH5GGFlM8M32K34GMdaNS2Ew.jpg",
      "genre_ids": [
        10402,
        36,
        18
      ],
      "id": 802219,
      "original_language": "en",
      "original_title": "Bob Marley: One Love",
      "overview": "Jamaican singer-songwriter Bob Marley overcomes adversity to become the most famous reggae musician in the world.",
      "popularity": 123.854,
      "poster_path": "https://image.tmdb.org/t/p/original/mKWalirPreEdCKDJjc5TKeOP2xi.jpg",
      "release_date": "2024-02-14",
      "title": "Bob Marley: One Love",
      "video": false,
      "vote_average": 6.907,
      "vote_count": 566
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/qSc5JzPvSm6KxVv54nrn7SNXFtk.jpg",
      "genre_ids": [
        16,
        10402,
        35
      ],
      "id": 1192209,
      "original_language": "pt",
      "original_title": "Arca de Noé",
      "overview": "A pair of mice attempt to board Noah's Ark: Vini, a charismatic poet with terrible stage fright, and Tito, a talented and charming guitarist. When the rains come, only one male and one female of each species is allowed on Noah's Ark. With the help of an ingenious cockroach and fate's good luck, Vini and Tito sneak their way onto the Ark and together avert a showdown among the ships carnivores and plant eaters. All the while, the animals perform a series of classic songs inspired by world renowned poet, Vinicius de Moraes. Can these talented stowaways use music to break the tension and help these cooped up creatures survive the 40 days and 40 nights together?",
      "popularity": 123.026,
      "poster_path": "https://image.tmdb.org/t/p/original/j1Rjw6a62UwrbTNT0I3JzZnnCmr.jpg",
      "release_date": "2024-01-05",
      "title": "Noah's Ark",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 58
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/cpqWIjNrAzLIBUHhRWB79LJ39lr.jpg",
      "genre_ids": [
        18,
        10402,
        36
      ],
      "id": 277216,
      "original_language": "en",
      "original_title": "Straight Outta Compton",
      "overview": "In 1987, five young men, using brutally honest rhymes and hardcore beats, put their frustration and anger about life in the most dangerous place in America into the most powerful weapon they had: their music.  Taking us back to where it all began, Straight Outta Compton tells the true story of how these cultural rebels—armed only with their lyrics, swagger, bravado and raw talent—stood up to the authorities that meant to keep them down and formed the world’s most dangerous group, N.W.A.  And as they spoke the truth that no one had before and exposed life in the hood, their voice ignited a social revolution that is still reverberating today.",
      "popularity": 111.266,
      "poster_path": "https://image.tmdb.org/t/p/original/9B63hMwU6iICtNDTISCaZQ5US7R.jpg",
      "release_date": "2015-08-11",
      "title": "Straight Outta Compton",
      "video": false,
      "vote_average": 7.783,
      "vote_count": 3764
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/6mJrgL7Mi13XjJeGYJFlD6UEVQw.jpg",
      "genre_ids": [
        16,
        10751,
        10402,
        35
      ],
      "id": 438695,
      "original_language": "en",
      "original_title": "Sing 2",
      "overview": "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
      "popularity": 111.101,
      "poster_path": "https://image.tmdb.org/t/p/original/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
      "release_date": "2021-12-01",
      "title": "Sing 2",
      "video": false,
      "vote_average": 7.874,
      "vote_count": 4207
    }
  ]);
  // useEffect(()=>{
  //  async function fetchMovies(id){
  //  const url = `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${id}&page=1`;
  //  const options = {
  //         method: 'GET',
  //         headers: {
  //           'X-RapidAPI-Key': '96789d6ccbmsh4e121fd627b6b44p15ee71jsn7e0d7271ef92',
  //           'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
  //         }
  //       };

  //       try {
  //         const response = await fetch(url, options);
  //         const result = await response.text();
  //         console.log(result);
  //         return result;
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     } 
  //  const promises = selectedGenresToFetch.map((genre)=>{
  //    return fetchMovies(genre.id);
  //  }) ;
  //    promises.forEach(async (promise) =>{
  //      const result = await promise;
  //      setTimeout(async ()=>{
  //       setMovies((prev)=> [...prev, JSON.parse(result)]);
  //      },5000);
  //      setMovies((prev)=>[...prev,JSON.parse(result)]); 
  //    });
  // },[selectedGenresToFetch]);
  return (
    <div className='bg-black'>
      <h1 className='text-[#72DB73] text-5xl font-single '>Super App </h1>
      <p>Entertainment according to your choice</p>
      <div className='grid grid-rows-5 grid-flow-col gap-4 text-white '>
             <h1></h1>
             {movies.map((movie)=>{
                 return <div key={movie.id}>
                    <img src={movie.poster_path} alt={movie.title} className='h-[100px] w-[100px]' />
                    {movie.title}
                    {/* {movies} */}
                 </div>;
             })}
      </div>
    </div>
  )
}

