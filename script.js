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
            team : 'barcelona',
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
            team : 'barcelona',
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
            team : 'barcelona',
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
            team : 'barcelona',
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
    }
    
    
    
 ]
 const makeChart = (H2Hgames,currentCLubPage)=>{
    
    let parentData = document.createElement('ul')
    for (let games of H2Hgames) {
        let listOfGames = document.createElement('li')
        const{homeTeam,awayTeam} = games
        const{team:homeClub,goals:homeGoals} = homeTeam
        const{team:awayClub,goals:awayGoals} = awayTeam
       const targetTeam = homeClub == currentCLubPage ? homeTeam : awayTeam
       console.log(targetTeam)
      
        let scoreline ;
        if(homeGoals > awayGoals){
            scoreline = `<b>${homeGoals}</b> : ${awayGoals}`
        }else{
            scoreline = `${homeGoals} : <b>${awayGoals}</b>`

        }
        
        // console.log(currentCLubPage)
        
        listOfGames.innerHTML= `${homeClub} vs ${awayClub} \n Scoreline : ${scoreline}`
        parentData.appendChild(listOfGames)
        document.body.prepend(parentData)
        
    }
    
    return parentData

 }

 
 let week1Games = makeChart(leagueTeams,'Real Madrid')



 
 
 


  
 

