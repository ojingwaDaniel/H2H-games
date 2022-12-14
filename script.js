 const leagueTeams = [
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
            team : 'Barcelona',
            goals : 2,
            winner : false
        },
        homeTeam : {
            team : 'Real Madrid',
            goals : 3,
            winner : true
        }
    },
    {
        awayTeam : {
            team : ' Real Madrid',
            goals : 0,
            winner : false
        },
        homeTeam : {
            team : 'Barcelona',
            goals : 4,
            winner : true
        }
    },
    {
        awayTeam : {
            team : ' Real Madrid',
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
            team : 'Barcelona',
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
            team : ' Real Madrid',
            goals : 4,
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
            team : 'Barcelona',
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
            team : ' Real Madrid',
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
            team : ' Real Madrid',
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
            team : 'Barcelona',
            goals : 5,
            winner : true
        },
        homeTeam : {
            team : 'Real Madrid',
            goals : 2,
            winner : false
        }
    }
    
    
    
 ]
 const premierLeague = [
    {
        awayTeam : {
            team : 'liverpool',
            goals : 2,
            winner : true
        },
        homeTeam : {
            team : 'ManCity',
            goals : 1,
            winner : false
        }
    },
    {
        awayTeam : {
            team : 'ManCity',
            goals : 2,
            winner : false
        },
        homeTeam : {
            team : 'liverpool',
            goals : 3,
            winner : true
        }
    },
    {
        awayTeam : {
            team : 'liverpool',
            goals : 0,
            winner : false
        },
        homeTeam : {
            team : 'ManCity',
            goals : 4,
            winner : true
        }
    },
    {
        awayTeam : {
            team : 'liverpool',
            goals : 0,
            winner : false
        },
        homeTeam : {
            team : 'ManCity',
            goals : 1,
            winner : true
        }
    },
    {
        awayTeam : {
            team : 'ManCity',
            goals : 5,
            winner : true
        },
        homeTeam : {
            team : 'liverpool',
            goals : 0,
            winner : false
        }
    },
    {
        awayTeam : {
            team : 'liverpool',
            goals : 4,
            winner : true
        },
        homeTeam : {
            team : 'ManCity',
            goals : 1,
            winner : false
        }
    },
    {
        awayTeam : {
            team : 'ManCity',
            goals : 4,
            winner : true
        },
        homeTeam : {
            team : 'liverpool',
            goals : 1,
            winner : false
        }
    },
    {
        awayTeam : {
            team : 'liverpool',
            goals : 2,
            winner : true
        },
        homeTeam : {
            team : 'ManCity',
            goals : 1,
            winner : false
        }
    },
    {
        awayTeam : {
            team : 'liverpool',
            goals : 2,
            winner : true
        },
        homeTeam : {
            team : 'ManCity',
            goals : 1,
            winner : false
        }
    },
    {
        awayTeam : {
            team : 'ManCity',
            goals : 5,
            winner : true
        },
        homeTeam : {
            team : 'liverpool',
            goals : 2,
            winner : false
        }
    }
    
    
    
 ]
 const makeChart = (H2Hgames,currentCLubPage)=>{
    
    let parentData = document.createElement('ul')
    for (let games of H2Hgames) {
        let listOfGames = document.createElement('li')
        const{homeTeam,awayTeam} = games
        const{team:homeClub,goals:homeGoals} = homeTeam
        const{team:awayClub,goals:awayGoals} = awayTeam
        let scoreline ;
        if(homeGoals > awayGoals){
            scoreline = `<b>${homeGoals}</b> : ${awayGoals}`
        }else{
            scoreline = `${homeGoals} : <b>${awayGoals}</b>`

        }
        
       const targetTeam = homeClub === currentCLubPage ? homeTeam : awayTeam;
       
        
      
        
        listOfGames.classList.add( targetTeam.winner ?'win':'loss')
        listOfGames.innerHTML= `${homeClub} vs ${awayClub} \n Scoreline : ${scoreline}`

        parentData.appendChild(listOfGames)
        document.body.prepend(parentData)
        
    }
    
    return parentData

 }

 
//  let week1Games = makeChart(leagueTeams,'Barcelona')
//  let week2Games = makeChart(leagueTeams,'Real Madrid')
let week3Games = makeChart(premierLeague,'liverpool')
// let week4Games = makeChart(premierLeague,'ManCity')
 



 
 
 


  
 

