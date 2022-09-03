 const leagueTeams = [
    {
        awayTeam : {
            team : ' real Madrid',
            goals : 2,
            winner : true
        },
        homeTeam : {
            team : 'barcelona',
            goals : 1,
            winner : false
        }
    },
    {
        awayTeam : {
            team : 'barcelona',
            goals : 2,
            winner : false
        },
        homeTeam : {
            team : 'Real Madrid',
            goals : 3,
            winner : false
        }
    },
    {
        awayTeam : {
            team : 'Real Madrid',
            goals : 0,
            winner : true
        },
        homeTeam : {
            team : 'Barcelona',
            goals : 4,
            winner : true
        }
    },
    {
        awayTeam : {
            team : 'Real Madrid',
            goals : 0,
            winner : false
        },
        homeTeam : {
            team : 'Barcelona',
            goals : 1,
            winner : true
        }
    },
    {
        awayTeam : {
            team : 'barcelona',
            goals : 5,
            winner : true
        },
        homeTeam : {
            team : 'Real Madrid',
            goals : 0,
            winner : false
        }
    },
    {
        awayTeam : {
            team : ' real Madrid',
            goals : 4,
            winner : true
        },
        homeTeam : {
            team : 'barcelona',
            goals : 1,
            winner : false
        }
    },
    {
        awayTeam : {
            team : 'barcelona',
            goals : 4,
            winner : true
        },
        homeTeam : {
            team : 'Real Madrid',
            goals : 1,
            winner : false
        }
    },
    {
        awayTeam : {
            team : 'Real Madrid',
            goals : 2,
            winner : true
        },
        homeTeam : {
            team : 'Barcelona',
            goals : 1,
            winner : false
        }
    },
    {
        awayTeam : {
            team : 'Real Madrid',
            goals : 2,
            winner : true
        },
        homeTeam : {
            team : 'Barcelona',
            goals : 1,
            winner : false
        }
    },
    {
        awayTeam : {
            team : 'barcelona',
            goals : 5,
            winner : true
        },
        homeTeam : {
            team : 'Real Madrid',
            goals : 2,
            winner : false
        }
    },
    
    
    
 ]
 let ul = document.createElement('ul')
 let scoreline ;
for (let clubs of leagueTeams) {
   const{awayTeam,homeTeam} = clubs;
  let {team:aTeam,goals:agoals} = awayTeam
  let{team:hTeam,goals:hgoals} = homeTeam


  let clubName = `${hTeam} vs ${aTeam}`
  if(hgoals> agoals){
    scoreline =` <b>${hgoals}</b> : ${agoals}`
  }else{
    scoreline =` ${hgoals} : <b>${agoals}</b>`
  }
  let barcelona = hTeam == 'Barcelona' ? homeTeam : awayTeam

   let leagueTable = document.createElement('li')
   
   leagueTable.innerHTML = `${clubName}   \n Goals : ${scoreline} `
  leagueTable.classList.add(barcelona.winner? 'win': 'loss')

   ul.appendChild(leagueTable)
  


  
}
document.body.prepend(ul)