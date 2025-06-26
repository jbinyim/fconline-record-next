"use client"

import MatchItem from "./Official"

const matchData = [
    {
      time: "2025-02-09 16:55",
      homeTeam: "호날두",
      awayTeam: "발베르데",
      homeScore: 4,
      awayScore: 3,
    },
    {
      time: "2025-02-08 16:00",
      homeTeam: "메시",
      awayTeam: "음바페",
      homeScore: 2,
      awayScore: 1,
    },
    {
      time: "2025-02-07 15:00",
      homeTeam: "네이마르",
      awayTeam: "벤제마",
      homeScore: 3,
      awayScore: 2,
    },
  ]

const MatchGame = () => {
  return (
    <div>
        <section className="pc:w-[70%] tablet:w-[80%] w-[90%] mx-auto grid grid-cols-1 gap-[20px]">
        {matchData.map((match, index) => (
          <MatchItem key={index} matchData={match} />
        ))}
      </section>
    </div>
  )
}

export default MatchGame