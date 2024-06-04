import React, { useEffect,useState } from 'react'
import profile from './image14.png';
import cloud from './Vector.png'
import wind from './wind.png';
import pressure from './pressure.png'
import humidity from './humidity.png'
import newsimg from './newsimg.png'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function Info() {
  return (
   <div className='bg-black'>
     <div className='grid grid-cols-3  grid-flow-row-dense gap-6 bg-black mx-auto h-max max-w-[90vw] py-12 auto-rows-[170px] '>
       <div className='col-span-1 row-span-2'><UserData/></div>
       <div className='col-span-1 row-span-3'><NotePad/></div>
       <div className='col-span-1 row-span-4'><NewsData/> </div>
       <div className='col-span-1'><WeatherData/></div>
       <div className='col-span-2 bg-white'><Timer/></div>
    </div>
   </div>
  )
}

const Timer=()=>{
  const [isPlaying,setPlaying]=useState(false);
  const [time,setTime]=useState(0);
  function increaseSecond(){
    setTime((time)=>time+1);
  }
  function increaseMinute(){
    setTime((time)=>time+60);
  }
  function increaseHour(){
    setTime((time)=>time+3600);
  }
  function decreaseSecond(){
    if(time>0){
    setTime((time)=>time-1);
    }
  }
  function decreaseMinute(){
    if (time>=60){
    setTime((time)=>time-60);
    }
  }
  function decreaseHour(){
    if (time>=3600){
    setTime((time)=>time-3600);
    }
  }
  function formatTime(time){
   const hours =parseInt(time/3600,10);
   const minutes = parseInt((time - hours*3600)/60,10);
   const seconds = parseInt(time-hours*3600-minutes*60,10);
   return (
    <p>
      {hours}:{minutes}:{seconds}
    </p>
   );

  }
  return (
  <div className='bg-[#1E2343] flex flex-row'>
    <div className='basis'>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={time}
        colors={['#004777']}
      >
        {({ remainingTime }) => formatTime(remainingTime)}
      </CountdownCircleTimer>
   </div>
   <div>
      <button onClick={increaseSecond}  className='bg-white border-2 border-black'  >+1 Second</button>
      <button onClick={decreaseSecond}  className='bg-white border-2 border-black'  >-1 Second</button>
      <button onClick={increaseMinute}  className='bg-white border-2 border-black'  >+1 Minute</button>
      <button onClick={decreaseMinute}  className='bg-white border-2 border-black'  >-1 Minute</button>
      <button onClick={increaseHour}    className='bg-white border-2 border-black'>+1 Hour</button>
      <button onClick={decreaseHour}    className='bg-white border-2 border-black'>-1 Hour</button>
      <button  onClick={()=>{ isPlaying?setPlaying(false):setPlaying(true) } } className='bg-white border-2 border-black'>{isPlaying?<span>Stop</span>:<span>Start</span> }</button>
   </div>
  </div>

  );
} 

const UserData =()=>{
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  const movies = JSON.parse(localStorage.getItem("selectedMovies"));

   return(
     <div className='border border-black rounded-xl py-10 px-4 gap-x-2 flex  h-[100%] bg-[#5746EA]'>
        <div className='basis-1/4 object-cover'>
          <img src={profile} alt="error" className='h-[100%] w-[7vw]' />
        </div>
        <div className='basis-3/4 text-white font-roboto '>
          <p className='text-[21px] mb-1'>{userDetails.name}</p>
          <p className='text-[21px] mb-1'>{userDetails.email}</p>
          <p className='text-[41px] mb-8'>{userDetails.username}</p>
          <div className='grid grid-cols-2 gap-3 flex-wrap   '>{movies.map((movie,index)=>(
                <p className='bg-[#9F94FF] text-white  p-2 text-[16px] rounded-full text-left '  key={index}>{movie}</p> 
                ))}
           </div>
        </div>
     </div>
)

}

const WeatherData =()=>{
  const [weather,setWeather] = useState(
    {
      "location": {
        "city": "Delhi",
        "woeid": 2295019,
        "country": "India",
        "lat": 28.643999,
        "long": 77.091003,
        "timezone_id": "Asia/Kolkata"
      },
      "current_observation": {
        "pubDate": 1717269592,
        "wind": {
          "chill": 90,
          "direction": "West",
          "speed": 10
        },
        "atmosphere": {
          "humidity": 32,
          "visibility": 10,
          "pressure": 1003
        },
        "astronomy": {
          "sunrise": "5:24 AM",
          "sunset": "7:16 PM"
        },
        "condition": {
          "temperature": 93,
          "text": "Partly Cloudy",
          "code": 30
        }
      },
      "forecasts": [
        {
          "day": "Sun",
          "date": 1717257600,
          "high": 109,
          "low": 88,
          "text": "Partly Cloudy",
          "code": 30
        },
        {
          "day": "Mon",
          "date": 1717344000,
          "high": 110,
          "low": 89,
          "text": "Hot",
          "code": 36
        },
        {
          "day": "Tue",
          "date": 1717430400,
          "high": 109,
          "low": 86,
          "text": "Hot",
          "code": 36
        },
        {
          "day": "Wed",
          "date": 1717516800,
          "high": 108,
          "low": 87,
          "text": "Haze",
          "code": 21
        },
        {
          "day": "Thu",
          "date": 1717603200,
          "high": 107,
          "low": 85,
          "text": "Sunny",
          "code": 32
        },
        {
          "day": "Fri",
          "date": 1717689600,
          "high": 114,
          "low": 89,
          "text": "Hot",
          "code": 36
        },
        {
          "day": "Sat",
          "date": 1717776000,
          "high": 111,
          "low": 88,
          "text": "Haze",
          "code": 21
        },
        {
          "day": "Sun",
          "date": 1717862400,
          "high": 113,
          "low": 89,
          "text": "Hot",
          "code": 36
        },
        {
          "day": "Mon",
          "date": 1717948800,
          "high": 113,
          "low": 90,
          "text": "Hot",
          "code": 36
        },
        {
          "day": "Tue",
          "date": 1718035200,
          "high": 104,
          "low": 84,
          "text": "Sunny",
          "code": 32
        },
        {
          "day": "Wed",
          "date": 1718121600,
          "high": 104,
          "low": 84,
          "text": "Sunny",
          "code": 32
        }
      ]
    });
  // useEffect(()=>{
  //   const fetchWeather = async () => {
  //     const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=DELHI&format=json&u=f';
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key': '96789d6ccbmsh4e121fd627b6b44p15ee71jsn7e0d7271ef92',
  //         'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
  //       }
  //     };
      
  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       console.log(result);
  //       setWeather(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  // };
  // fetchWeather();
  // },[])
  const today = new Date();
  const yyyy =today.getFullYear();
  let mm =today.getMonth() +1;
  let dd = today.getDate();

  if(dd < 10) dd = "0" + dd;
  if(mm < 10) mm = "0" + mm;

  const formattedToday = dd + "-" + mm + "-" + yyyy;
  var date = new Date();
  var time = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}).replace(/(:\d{2}| [AP]M)$/, "");

  return weather ?( 
      <div className='felx flex-col  text-[white] rounded-xl font-roboto '>
          
          <div className='basis-1/3 text-4xl bg-[#FF4ADE] py-2 px-12 rounded-t-xl'>
              <p className=''>{formattedToday} &nbsp; &nbsp; &nbsp; {time} </p>
              {/* {moment().format("HH:MM")} */}
          </div>
          <div className='basis-2/3 bg-[#101744] flex flex-row-3 gap-14 py-2 justify-evenly items-center rounded-b-xl' >
            
            <div className='flex items-center'><img src={cloud } alt="error" /></div>
            <div className=' flex flex-col items-center'>
               <p className='text-[44px]'>{weather.current_observation.condition.temperature}°F</p>
                <div className='flex flex-row  items-center gap-2 text-[14px]'>
                       <img src={pressure} alt="" />
                       <p>{weather.current_observation.atmosphere.pressure} mbar <br />Pressure</p>   
                </div> 
            </div>
            <div className='flex flex-col items-center gap-3'>
                <div className='flex flex-row  items-center gap-2 text-[14px]'> 
                  <img src={wind} alt="error" />
                  <p className=''>{weather.current_observation.wind.speed} km/h <br/>Wind</p>
                </div>
                <div className='flex flex-row  items-center gap-2 text-[14px]'>
                  <img src={humidity} alt="" />
                  <p>{weather.current_observation.atmosphere.humidity} % <br />Humidity</p>
                </div>
            </div>
          </div>
      </div>
    ) : null;
};


const NewsData =()=>{
  const [data, setNews] = useState( [
        {
          "title": "Piers Morgan ridiculed over reaction to Trump's guilty verdict",
          "snippet": "Piers Morgan has leapt to the defence of Donald Trump after he became the first criminally convicted US president in history. On Thursday (30 May), ...",
          "publisher": "The Independent",
          "timestamp": "1717264717000",
          "newsUrl": "https://www.independent.co.uk/arts-entertainment/tv/news/trump-guilty-verdict-piers-morgan-b2554940.html",
          "images": {
            "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXVSVEZMTldNM1dIQkJVemxsVFJDVUF4alFCU2dLTWdZQlFwVEVIZ2s=-w280-h168-p-df-rw",
            "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXVSVEZMTldNM1dIQkJVemxsVFJDVUF4alFCU2dLTWdZQlFwVEVIZ2s"
          },
          "hasSubnews": true,
          "subnews": [
            {
              "title": "Trump and his allies braced for a guilty verdict. Then the bombshell arrived",
              "snippet": "The next time former President Donald Trump holds a campaign rally will be his first as a convicted felon. When that will be remains to be seen – one of ...",
              "publisher": "CNN",
              "timestamp": "1717243260000",
              "newsUrl": "https://www.cnn.com/2024/06/01/politics/trump-what-is-next-verdict/index.html",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNWpkRFIxVUV4MU1qSXlORGxQVFJERUF4aW1CU2dLTWdZQlVKN01vUWs=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNWpkRFIxVUV4MU1qSXlORGxQVFJERUF4aW1CU2dLTWdZQlVKN01vUWs"
              }
            },
            {
              "title": "How political cartoons took on Trump’s historic guilty verdict",
              "snippet": "Cartoonists across the political spectrum made light of a historic conviction.",
              "publisher": "The Washington Post",
              "timestamp": "1717279494000",
              "newsUrl": "https://www.washingtonpost.com/entertainment/2024/06/01/political-cartoons-trump-guilty-verdict/",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNTJZWG8zVEZVMU5YVlNiWGMwVFJEVkF4aU9CU2dLTWdtRkZJNk9wU2U1eEFJ=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNTJZWG8zVEZVMU5YVlNiWGMwVFJEVkF4aU9CU2dLTWdtRkZJNk9wU2U1eEFJ"
              }
            },
            {
              "title": "Trump Has Few Ways to Overturn His Conviction as a New York Felon",
              "snippet": "“This is long from over,” Donald J. Trump, the former president and current felon, declared on Thursday, moments after a Manhattan jury convicted him on 34 ...",
              "publisher": "The New York Times",
              "timestamp": "1717225241000",
              "newsUrl": "https://www.nytimes.com/2024/06/01/nyregion/trump-appeal-conviction.html",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNU9OMWh2YkVwU1RXSTBZMncyVFJDUUF4allCQ2dLTWdZQlVKeUlvUWs=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNU9OMWh2YkVwU1RXSTBZMncyVFJDUUF4allCQ2dLTWdZQlVKeUlvUWs"
              }
            },
            {
              "title": "Trump's criminal justice contradictions called out by Black leaders",
              "snippet": "NEW YORK (AP) — As Donald Trump lambasted the guilty verdict of his hush money trial this week, he stood inside a Manhattan courthouse that was the site of ...",
              "publisher": "The Associated Press",
              "timestamp": "1717245120000",
              "newsUrl": "https://apnews.com/article/trump-guilty-verdict-central-park-five-b59498a04d148a65ef33df36a61aa668",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNDRVVk5wVUZkMVZYTTJZVXREVFJDZkF4ampCU2dLTWdZWkE2SktqUW8=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNDRVVk5wVUZkMVZYTTJZVXREVFJDZkF4ampCU2dLTWdZWkE2SktqUW8"
              }
            },
            {
              "title": "Trump trial was an 'abuse' of the US justice system: Jonathan Turley",
              "snippet": "Fox News contributor Jonathan Turley and \"The Five\" co-host Judge Jeanine Pirro discussed how the Trump trial verdict was \"popular justice of Manhattan,\" ...",
              "publisher": "Fox News",
              "timestamp": "1717275600000",
              "newsUrl": "https://www.foxnews.com/media/trump-trial-abuse-us-justice-system-jonathan-turley",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNWFORFJ4YlhkS1ltVkRTVEppVFJDZkF4ampCU2dLTWdrRk1Kd0xGdW9HS1FJ=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNWFORFJ4YlhkS1ltVkRTVEppVFJDZkF4ampCU2dLTWdrRk1Kd0xGdW9HS1FJ"
              }
            }
          ]
        },
        {
          "title": "Chad Daybell is sentenced to death in ‘doomsday’ triple-murder case",
          "snippet": "Chad Daybell was sentenced to death Saturday upon the recommendation of the jury that convicted him of first-degree murder and conspiracy charges in the ...",
          "publisher": "CNN",
          "timestamp": "1717268580000",
          "newsUrl": "https://www.cnn.com/2024/06/01/us/chad-daybell-murder-sentencing-death-penalty/index.html",
          "images": {
            "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNXVNMnM0V2pGZlpXaDBhRGRIVFJDZkF4amlCU2dLTWdrQlVwajFuS25RN0FF=-w280-h168-p-df-rw",
            "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNXVNMnM0V2pGZlpXaDBhRGRIVFJDZkF4amlCU2dLTWdrQlVwajFuS25RN0FF"
          },
          "hasSubnews": true,
          "subnews": [
            {
              "title": "Chad Daybell Sentenced to Death in ‘Doomsday’ Killings",
              "snippet": "An Idaho judge on Saturday sentenced a man to death, two days after he was found guilty of first-degree murder and other charges in the 2019 killings of his ...",
              "publisher": "The New York Times",
              "timestamp": "1717270039000",
              "newsUrl": "https://www.nytimes.com/2024/06/01/us/chad-daybell-convicted-idaho-jury.html",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNUdNbGsyT0ZsamExUlZXRzA1VFJDUUF4allCQ2dLTWdrQkFLRE5HU29tWUFN=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNUdNbGsyT0ZsamExUlZXRzA1VFJDUUF4allCQ2dLTWdrQkFLRE5HU29tWUFN"
              }
            },
            {
              "title": "Chad Daybell sentenced to death in slayings of first wife and second wife's 2 kids",
              "snippet": "Idaho doomsday author Chad Daybell, who was found guilty of murder in the deaths of his first wife and his second wife's two youngest children, ...",
              "publisher": "Yahoo! Voices",
              "timestamp": "1717270773000",
              "newsUrl": "https://www.yahoo.com/news/chad-daybell-sentenced-death-slayings-193933896.html",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNVVVMHBGY1dOSU1sbEllWEJCVFJDM0FSaVRBaWdCTWdtQk01NVNsYXJRYUFJ=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNVVVMHBGY1dOSU1sbEllWEJCVFJDM0FSaVRBaWdCTWdtQk01NVNsYXJRYUFJ"
              }
            },
            {
              "title": "Chad Daybell sentenced to death in triple murder of family",
              "snippet": "An Idaho jury sentenced Chad Daybell, the man who killed his first wife and second wife's two children in 2019, to death.",
              "publisher": "ABC News",
              "timestamp": "1717264800000",
              "newsUrl": "https://abcnews.go.com/US/jury-reaches-decision-chad-daybell-sentencing/story?id=110742421",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVVhVU40YjA5UmFHYzNjVnBIVFJDZkF4ampCU2dLTWdZQkJKb0xvZ2c=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNVVhVU40YjA5UmFHYzNjVnBIVFJDZkF4ampCU2dLTWdZQkJKb0xvZ2c"
              }
            },
            {
              "title": "Chad Daybell sentenced to death in Idaho for murder of Lori Vallow's 2 children, first wife",
              "snippet": "Two days after being found guilty of murdering Lori Vallow's two kids and his first wife, Chad Daybell was sentenced to death in an Idaho courtroom ...",
              "publisher": "Fox News",
              "timestamp": "1717265760000",
              "newsUrl": "https://www.foxnews.com/us/chad-daybell-sentenced-death-idaho-murder-lori-vallows-2-children-first-wife",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNXJORTFLTUU1aVJVaElTbEkxVFJDZkF4ampCU2dLTWdtQlE1cFNHYXJRS2dJ=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNXJORTFLTUU1aVJVaElTbEkxVFJDZkF4ampCU2dLTWdtQlE1cFNHYXJRS2dJ"
              }
            }
          ]
        },
        {
          "title": "Disruptions at University of Chicago graduation as school withholds 4 diplomas over protests",
          "snippet": "A crowd of students protesting the war in Gaza walked out of the University of Chicago's commencement.",
          "publisher": "ABC News",
          "timestamp": "1717269525000",
          "newsUrl": "https://abcnews.go.com/US/wireStory/disruptions-university-chicago-graduation-school-withholds-4-diplomas-110743138",
          "images": {
            "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNXBNRk5ZTmxwRVNETk5iRkp2VFJDZkF4ampCU2dLTWdrQkFJamhDT2xTRGdJ=-w280-h168-p-df-rw",
            "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNXBNRk5ZTmxwRVNETk5iRkp2VFJDZkF4ampCU2dLTWdrQkFJamhDT2xTRGdJ"
          },
          "hasSubnews": false
        },
        {
          "title": "Ukraine war: Can using Western weapons on Russia change the war?",
          "snippet": "Ukraine is now allowed to use Western weapons to hit targets inside Russia. What will this decision change and how will it affect the front line in Ukraine?",
          "publisher": "BBC.com",
          "timestamp": "1717240399000",
          "newsUrl": "https://www.bbc.com/news/articles/cjll1r1el5wo",
          "images": {
            "thumbnail": "https://news.google.com/api/attachments/CC8iMkNnNU9ZamwzTW5FNE16SmZPSGR5VFJDZkF4ampCU2dLTWd1QlJvRUUzbUd3UGJoZVRR=-w280-h168-p-df-rw",
            "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iMkNnNU9ZamwzTW5FNE16SmZPSGR5VFJDZkF4ampCU2dLTWd1QlJvRUUzbUd3UGJoZVRR"
          },
          "hasSubnews": true,
          "subnews": [
            {
              "title": "On Friday, Ukraine Got Permission To Launch American Rockets At Targets Inside Russia. Hours Later, HIMARS Opened Fire.",
              "snippet": "For more than two years after Russia widened its war on Ukraine, the administration of U.S. Pres. Joe Biden drew a red line for Ukrainian forces.",
              "publisher": "Forbes",
              "timestamp": "1717275069000",
              "newsUrl": "https://www.forbes.com/sites/davidaxe/2024/06/01/on-friday-ukraine-got-permission-to-launch-american-rockets-at-targets-inside-russia-hours-later-ukraines-himars-opened-fire/",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iJ0NnNXZZVWR3WlZGQ2JUbERXRGx0VFJEN0FoaXBCaWdLTWdNbDBBUQ=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iJ0NnNXZZVWR3WlZGQ2JUbERXRGx0VFJEN0FoaXBCaWdLTWdNbDBBUQ"
              }
            },
            {
              "title": "Volodymyr Zelenskiy: Russian troops are laughing at and ‘hunting’ Ukrainians",
              "snippet": "Exclusive interview: Ukrainian president says US delaying use of western weapons on targets inside Russia has cost lives.",
              "publisher": "The Guardian",
              "timestamp": "1717168140000",
              "newsUrl": "https://www.theguardian.com/world/article/2024/may/31/volodymyr-zelenskiy-russian-troops-have-been-laughing-at-and-hunting-ukrainians",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNW5VbTgzVkhaMFl6WlVObkJPVFJDUkF4ajhCU2dLTWdheEJLS3ZEUXM=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNW5VbTgzVkhaMFl6WlVObkJPVFJDUkF4ajhCU2dLTWdheEJLS3ZEUXM"
              }
            },
            {
              "title": "Ukraine's Kharkiv region endures intensified attacks: See maps",
              "snippet": "Updated maps show shifting front lines near Kharkiv where Russia has made largest territorial gains in 18 months.",
              "publisher": "USA TODAY",
              "timestamp": "1717236268000",
              "newsUrl": "https://www.usatoday.com/story/graphics/2024/06/01/ukraine-war-kharkiv-map/73881525007/",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXJNMmxHUWxKTmVUQTJabGcyVFJDUUF4aXNBaWdLTWdZQlVJenNNUWc=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXJNMmxHUWxKTmVUQTJabGcyVFJDUUF4aXNBaWdLTWdZQlVJenNNUWc"
              }
            },
            {
              "title": "Biden partially lifts ban on Ukraine using US arms in Russia strikes",
              "snippet": "The move comes as Ukrainian officials have stepped up calls on the U.S. to allow its forces to defend itself against attacks originating from Russia.",
              "publisher": "Military Times",
              "timestamp": "1717103226000",
              "newsUrl": "https://www.militarytimes.com/news/pentagon-congress/2024/05/30/biden-partially-lifts-ban-on-ukraine-using-us-arms-in-russia-strikes/",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNXBSMTlRTFdocloxTXRORlZYVFJEREF4aW5CU2dLTWdrQklJcXFOV1JVeHdJ=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNXBSMTlRTFdocloxTXRORlZYVFJEREF4aW5CU2dLTWdrQklJcXFOV1JVeHdJ"
              }
            }
          ]
        },
        {
          "title": "Israel describes a permanent cease-fire in Gaza as a 'nonstarter,' undermining Biden's proposal",
          "snippet": "Israel's prime minister calls a permanent cease-fire in Gaza a “nonstarter” until long-standing conditions for the ending the war are met.",
          "publisher": "The Associated Press",
          "timestamp": "1717269480000",
          "newsUrl": "https://apnews.com/article/israel-hamas-war-news-01-06-2024-8c06dda3a8e20491b5a34377c60bb827",
          "images": {
            "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVRaVFYzV2xkbldrcE5jREJYVFJDZkF4ampCU2dLTWdhUjFJckl3UVE=-w280-h168-p-df-rw",
            "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNVRaVFYzV2xkbldrcE5jREJYVFJDZkF4ampCU2dLTWdhUjFJckl3UVE"
          },
          "hasSubnews": true,
          "subnews": [
            {
              "title": "Israel confirms Gaza hostage-ceasefire deal proposal details laid out by Biden",
              "snippet": "Israel confirmed President Biden's speech on Friday described \"in general\" the Israeli proposal for a hostage-ceasefire deal in Gaza but emphasized Israel ...",
              "publisher": "Axios",
              "timestamp": "1717277966000",
              "newsUrl": "https://www.axios.com/2024/06/01/israel-gaza-hostage-ceasefire-deal-confirms-biden",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNHlPRXhSWVMweGJ6ZHRaMHB4VFJDZkF4ampCU2dLTWdrUlVJYXRLT01XdFFB=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNHlPRXhSWVMweGJ6ZHRaMHB4VFJDZkF4ampCU2dLTWdrUlVJYXRLT01XdFFB"
              }
            },
            {
              "title": "Ministers threaten to bring down Israeli government over 'reckless' Gaza ceasefire plan",
              "snippet": "Right-wing allies of Benjamin Netanyahu have rejected a US-brokered ceasefire proposal to end the war in Gaza as “total surrender” to Hamas, threatening to ...",
              "publisher": "Financial Times",
              "timestamp": "1717277792000",
              "newsUrl": "https://www.ft.com/content/57eb4c8d-2064-411d-b004-b0aa55890146",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVBVemhCVGtSVWIwMXRNQzF1VFJDS0F4aThCU2dLTWdZTklKVEpuUWc=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNVBVemhCVGtSVWIwMXRNQzF1VFJDS0F4aThCU2dLTWdZTklKVEpuUWc"
              }
            },
            {
              "title": "Israel-Hamas War and Gaza News: Latest Updates",
              "snippet": "The Israeli leader did not explicitly endorse or reject a proposal outlined by Mr. Biden, but the timing of his remarks seemed to put the brakes on hopes ...",
              "publisher": "The New York Times",
              "timestamp": "1717274483000",
              "newsUrl": "https://www.nytimes.com/live/2024/06/01/world/israel-gaza-war-hamas-rafah",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNTVSRU5FUVdFNWEzazBPSFV5VFJDUUF4allCQ2dLTWdrQklJb1NzZVZ6S2dJ=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNTVSRU5FUVdFNWEzazBPSFV5VFJDUUF4allCQ2dLTWdrQklJb1NzZVZ6S2dJ"
              }
            },
            {
              "title": "'Biden Offer Is Total Defeat': Ben-Gvir, Smotrich Reject U.S. Hostage Proposal, Threaten to Quit Netanyahu Coalition - Israel News",
              "snippet": "Netanyahu Rejects a Permanent Gaza Cease-fire, While Gantz Demands the War Cabinet Convene to Discuss the U.S. Proposal. Opposition Leader Lapid Offers the ...",
              "publisher": "Haaretz",
              "timestamp": "1717275420000",
              "newsUrl": "https://www.haaretz.com/israel-news/2024-06-01/ty-article/.premium/ben-gvir-smotrich-reject-u-s-hostage-proposal-threaten-to-quit-netanyahu-coalition/0000018f-d552-d5bc-a1bf-df7225960000",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNWpWR1ZaVlU1aVpWTjVhREZyVFJDUkF4ajhCU2dLTWdZQlFKcW1KUWs=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNWpWR1ZaVlU1aVpWTjVhREZyVFJDUkF4ajhCU2dLTWdZQlFKcW1KUWs"
              }
            },
            {
              "title": "June 1, 2024 - Israel-Gaza news",
              "snippet": "President Joe Biden has laid out a three-phase proposal to end the conflict in Gaza, as global condemnation of Israel's offensive in Rafah grows.",
              "publisher": "CNN",
              "timestamp": "1717274135000",
              "newsUrl": "https://www.cnn.com/middleeast/live-news/israel-hamas-war-gaza-news-06-01-24/index.html",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXRaakZTT0hkbGQySTNaV2hEVFJDZkF4amlCU2dLTWdhcFk0aHZMUVU=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXRaakZTT0hkbGQySTNaV2hEVFJDZkF4amlCU2dLTWdhcFk0aHZMUVU"
              }
            },
            {
              "title": "‘Non-starter’: Netanyahu says no permanent Gaza ceasefire until Hamas destroyed",
              "snippet": "Prime Minister Benjamin Netanyahu said on Saturday there would be no “permanent ceasefire” in Gaza until Hamas's military and governing capabilities were ...",
              "publisher": "The Times of Israel",
              "timestamp": "1717245321000",
              "newsUrl": "https://www.timesofisrael.com/non-starter-netanyahu-says-no-permanent-gaza-ceasefire-until-hamas-destroyed/",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNTViMTkzWDBodk5XRXhZM0ZJVFJERUF4aW1CU2dLTWdhWk41QkttZ2s=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNTViMTkzWDBodk5XRXhZM0ZJVFJERUF4aW1CU2dLTWdhWk41QkttZ2s"
              }
            }
          ]
        },
        {
          "title": "India’s exit polls show a majority for Modi’s BJP-led alliance in election",
          "snippet": "Indian Prime Minister Narendra Modi's Bharatiya Janata Party (BJP)-led alliance is projected to win an emphatic majority in the general election, ...",
          "publisher": "Al Jazeera English",
          "timestamp": "1717259483000",
          "newsUrl": "https://www.aljazeera.com/news/2024/6/1/indias-exit-polls-predict-a-big-majority-for-modis-bjp-led-alliance",
          "images": {
            "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNUZSa1ZaZEdGWU4xQklObEZaVFJEZ0F4aUFCU2dLTWdhRkk0emxrZ28=-w280-h168-p-df-rw",
            "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNUZSa1ZaZEdGWU4xQklObEZaVFJEZ0F4aUFCU2dLTWdhRkk0emxrZ28"
          },
          "hasSubnews": true,
          "subnews": [
            {
              "title": "Modi’s alliance to win easily in India election, exit polls project",
              "snippet": "Indian prime minister Narendra Modi's Bharatiya Janata party (BJP)-led alliance is projected to win a big majority in the general election that concluded on ...",
              "publisher": "The Guardian",
              "timestamp": "1717264080000",
              "newsUrl": "https://www.theguardian.com/world/article/2024/jun/01/modis-alliance-to-win-big-in-india-election-exit-polls-project",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNURVa0pwU1dSeFlqUmpaRkppVFJDUkF4ajhCU2dLTWdhbGNZTHRyUVk=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNURVa0pwU1dSeFlqUmpaRkppVFJDUkF4ajhCU2dLTWdhbGNZTHRyUVk"
              }
            },
            {
              "title": "Exit Poll 2024 Live Updates: BJP makes big gains in Bengal, South as multiple surveys predict NDA returning to power with thumping majority",
              "snippet": "Lok Sabha Election Exit Poll Results 2024 Today Live: The exit polls are out and all major surveys have projected the BJP-led NDA's resounding victory in ...",
              "publisher": "The Indian Express",
              "timestamp": "1717270286000",
              "newsUrl": "https://indianexpress.com/article/india/exit-poll-2024-live-updates-lok-saba-election-result-9365035/",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNDRObGRmWmxoMVRGRjNOVEZZVFJEb0FSaWVBeWdLTWdZQmhZekROUVk=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNDRObGRmWmxoMVRGRjNOVEZZVFJEb0FSaWVBeWdLTWdZQmhZekROUVk"
              }
            },
            {
              "title": "Exit Polls Today: How Accurate Were They In 2014 And 2019 Lok Sabha Polls?",
              "snippet": "Voting for the 2024 Lok Sabha elections ends today with the conclusion of the seventh phase. Before the finals results are announced on June 4, exit polls ...",
              "publisher": "NDTV",
              "timestamp": "1717241053000",
              "newsUrl": "https://www.ndtv.com/india-news/exit-poll-predictions-vs-final-results-a-look-at-2014-and-2019-lok-sabha-elections-5793267",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNU9TRWh3U1dkRE1IbDJTVmRHVFJDM0FSaVRBaWdCTWdrQkVJcnNwR1NoNmdF=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNU9TRWh3U1dkRE1IbDJTVmRHVFJDM0FSaVRBaWdCTWdrQkVJcnNwR1NoNmdF"
              }
            },
            {
              "title": "Exit Polls 2024: BJP poised for good south show riding on PM Modi's mega push",
              "snippet": "India News: NEW DELHI: Prime Minister Narendra Modi's mega south push may help BJP make significant gains in the region, with the exit polls predicting ...",
              "publisher": "The Times of India",
              "timestamp": "1717262220000",
              "newsUrl": "https://timesofindia.indiatimes.com/india/exit-polls-2024-bjp-poised-for-good-south-show-riding-on-pm-modis-mega-push/articleshow/110624221.cms",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNWphSFYwY2xJemVIUjNhREJVVFJDZkF4ampCU2dLTWdtQms0eHdPU2JZTWdF=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNWphSFYwY2xJemVIUjNhREJVVFJDZkF4ampCU2dLTWdtQms0eHdPU2JZTWdF"
              }
            },
            {
              "title": "Modi's BJP-led alliance projected to win decisive majority in India's election, exit polls show",
              "snippet": "India's Prime Minister Narendra Modi looks set for a rare third consecutive term in power, as local exit polls on Saturday suggest his Bharatiya Janata ...",
              "publisher": "CNBC",
              "timestamp": "1717248725000",
              "newsUrl": "https://www.cnbc.com/2024/06/01/india-election-modis-bjp-alliance-set-to-win-parliamentary-majority.html",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNTBVRkkwZWsxQmRUWmxjbXRmVFJDZkF4ampCU2dLTWdhbEpJTHRGUW8=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNTBVRkkwZWsxQmRUWmxjbXRmVFJDZkF4ampCU2dLTWdhbEpJTHRGUW8"
              }
            },
            {
              "title": "India Election Exit Polls Show Major Win For Modi, BJP",
              "snippet": "Welcome to India Edition, I'm Menaka Doshi. Each week, I bring you a ringside view of the billionaires, businesses and policy decisions behind India's rise ...",
              "publisher": "Bloomberg",
              "timestamp": "1717267350000",
              "newsUrl": "https://www.bloomberg.com/news/newsletters/2024-06-01/india-election-exit-polls-show-major-win-for-modi-bjp",
              "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNWFUa1JLTW10dVVYWlBRbHBQVFJERUF4aW1CU2dLTWdhdElvd1NHUWs=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNWFUa1JLTW10dVVYWlBRbHBQVFJERUF4aW1CU2dLTWdhdElvd1NHUWs"
              }
            }
          ]
        },
        {
          "title": "Obituary: Marian Robinson, Michelle Obama’s mother, dies",
          "snippet": "Described as the most popular person in the White House, she had the unique title of \"first grandma\".",
          "publisher": "BBC.com",
          "timestamp": "1717263273000",
          "newsUrl": "https://www.bbc.com/news/world-us-canada-57037248",
          "images": {
            "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNHdWR1IzZW10TVZucHdkM056VFJDZkF4ampCU2dLTWdhcGNwSXRMUWM=-w280-h168-p-df-rw",
            "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNHdWR1IzZW10TVZucHdkM056VFJDZkF4ampCU2dLTWdhcGNwSXRMUWM"
          },
          "hasSubnews": false
        },
        {
          "title": "Claudia Sheinbaum set to be first woman president in Mexico elections",
          "snippet": "Mexico's presidential front-runner is Claudia Sheinbaum, a scientist, former mayor of Mexico City, and a grandchild of Jewish immigrants.",
          "publisher": "USA TODAY",
          "timestamp": "1717232739000",
          "newsUrl": "https://www.usatoday.com/story/news/world/2024/06/01/claudia-sheinbaum-first-woman-president-mexico-elections/73893082007/",
          "images": {
            "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNUdkMlF3Y1dKTFZYWnNXblZpVFJEekFoaVVCU2dLTWdB=-w280-h168-p-df-rw",
            "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iI0NnNUdkMlF3Y1dKTFZYWnNXblZpVFJEekFoaVVCU2dLTWdB"
          },
          "hasSubnews": false
        },
        {
          "title": "Prominent Samoan playwright charged in murder of Tulsi Gabbard’s aunt",
          "snippet": "HONOLULU ( ...",
          "publisher": "Hawaii News Now",
          "timestamp": "1717168800000",
          "newsUrl": "https://www.hawaiinewsnow.com/2024/05/31/retired-uh-professor-stabbed-beaten-death-by-fellow-writer-samoa/",
          "images": {
            "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVZZbkJ2VjJkQ1NtdFNWM0IyVFJDSEF4aVBCaWdLTWdZQmRwUU1NZ2M=-w280-h168-p-df-rw",
            "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNVZZbkJ2VjJkQ1NtdFNWM0IyVFJDSEF4aVBCaWdLTWdZQmRwUU1NZ2M"
          },
          "hasSubnews": false
        },
        {
          "title": "Launch of Boeing's 1st Starliner astronaut test flight aborted minutes before liftoff (video)",
          "snippet": "The first crewed launch of Boeing's Starliner spacecraft has been delayed yet again, this time due to an automatic abort just minutes before liftoff today ...",
          "publisher": "Space.com",
          "timestamp": "1717262704000",
          "newsUrl": "https://www.space.com/boeing-starliner-astronaut-launch-abort-minutes-before-liftoff",
          "images": {
            "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNXlWemg0Y0hCSWQwWmFSVnB4VFJDb0FSaXNBaWdCTWdrQkJvVHNsV21MMWdB=-w280-h168-p-df-rw",
            "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNXlWemg0Y0hCSWQwWmFSVnB4VFJDb0FSaXNBaWdCTWdrQkJvVHNsV21MMWdB"
          },
          "hasSubnews": false
        },
        {
          "title": "Officials ID man killed in shooting after Minneapolis officer 'ambushed' on Thursday",
          "snippet": "MINNEAPOLIS — Officials identified a man killed in a shooting on Thursday that injured four people and killed two others, including a Minneapolis police ...",
          "publisher": "KARE11.com",
          "timestamp": "1717272780000",
          "newsUrl": "https://www.kare11.com/article/news/special-reports/blaisdell-ave-shooting/officials-identify-shooter-ambushed-minneapolis-officer-mitchell/89-edd00828-dae3-4a78-b856-63dcfd4b444f",
          "images": {
            "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNHRVMWxuYkhjdFoydHdXa1pvVFJETEFSam9BaWdLTWdhNUVaVHpsQWs=-w280-h168-p-df-rw",
            "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNHRVMWxuYkhjdFoydHdXa1pvVFJETEFSam9BaWdLTWdhNUVaVHpsQWs"
          },
          "hasSubnews": false
        },
        {
          "title": "LGBTQ+ Pride Month 2024: All you need to know",
          "snippet": "Pride Month is kicking off around the world with parades in cities. The annual celebration of LGBTQ+ people and culture begins Saturday against a ...",
          "publisher": "The Associated Press",
          "timestamp": "1717260540000",
          "newsUrl": "https://apnews.com/article/pride-month-lgbtq-2024-1abf80d0cf1026b60b47f565e9953fec",
          "images": {
            "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVVVMUppTFd0V1lYQm5SREJvVFJDUEF4alhCQ2dLTWdhQmRKS3ZLUWc=-w280-h168-p-df-rw",
            "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNVVVMUppTFd0V1lYQm5SREJvVFJDUEF4alhCQ2dLTWdhQmRKS3ZLUWc"
          },
          "hasSubnews": false
        },
      ])
  // useEffect(()=>{
  //     const fetchNews = async () => {
  //     const url = 'https://google-news13.p.rapidapi.com/latest?lr=en-US';
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key': '309820fdb3mshec94f35a4387c62p149e9bjsnd6c408b084ec',
  //         'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
  //       }
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       setNews(result);
  //       console.log(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchNews();
  // },[])
  return data ?( 
    <div className='flex flex-col h-[100%]'> 
       <div className='basis-2/3 rounded-t-xl '>
       <img src="https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg" alt="error" className='h-[100%] rounded-t-xl' />
       <h1 className='bg-[#000000BD] text-white z-50'>{data[2].title}</h1>
       </div>
       <div className='basis-1/3 bg-white rounded-b-xl '>
         <p>{data[2].snippet}</p>
       </div>
       
    </div> 
    ): null
}

const NotePad = ()=>{
  const [data, setData] = useState(localStorage.getItem("notes") ?? "");
  return (
    <div className='flex h-[100%]  flex-col items-center '>
    <div className='bg-[#F1C75B] w-[30vw] text-black basis-[18%] rounded-t-xl text-3xl pl-10 py-8  '>All notes</div>
    <textarea 
      className=' basis-[82%] bg-[#F1C75B] h-[64vh] w-[30vw] text-black rounded-b-xl resize-none pl-10 pr-3 focus:outline-none '
      value={data} 
      onChange={(e) => {
      localStorage.setItem("notes",e.target.value)
      setData(e.target.value); 
      }}></textarea>
    </div>
  );
};