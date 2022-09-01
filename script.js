 const leagueTeams = [
    {
        awayTeam : {
            team : ' real Madrid',
            point : 90,
            winner : true
        },
        homeTeam : {
            team : 'barcelona',
            point : 80,
            winner : false
        }
    },
    {
        awayTeam : {
            team : 'barcelona',
            point : 85,
            winner : true
        },
        homeTeam : {
            team : 'Real Madrid',
            point : 70,
            winner : false
        }
    },
    {
        awayTeam : {
            team : 'Real Madrid',
            point : 85,
            winner : true
        },
        homeTeam : {
            team : 'Barcelona',
            point : 70,
            winner : false
        }
    },
    {
        awayTeam : {
            team : 'Real Madrid',
            point : 85,
            winner : true
        },
        homeTeam : {
            team : 'Barcelona',
            point : 70,
            winner : false
        }
    },
    {
        awayTeam : {
            team : 'barcelona',
            point : 85,
            winner : true
        },
        homeTeam : {
            team : 'Real Madrid',
            point : 70,
            winner : false
        }
    },
    
    
 ]
 let ul = document.createElement('ul')
 let points ;
for (let clubs of leagueTeams) {
   const{awayTeam,homeTeam} = clubs;
  let {team:aTeam,point:aPoint} = awayTeam
  let{team:hTeam,point:hPoint} = homeTeam


  let clubName = `${hTeam} vs ${aTeam}`
  if(hPoint> aPoint){
    points =` <b>${hPoint}</b> : ${aPoint}`
  }else{
    points =` ${hPoint} : <b>${aPoint}</b>`
  }
  let barcelona = hTeam == 'Barcelona' ? homeTeam : awayTeam

   let leagueTable = document.createElement('li')
   
   leagueTable.innerHTML = `${clubName}   \n Points : ${points} `
  leagueTable.classList.add(barcelona.winner? 'win': 'loss')

   ul.appendChild(leagueTable)
  


  
}
document.body.prepend(ul)