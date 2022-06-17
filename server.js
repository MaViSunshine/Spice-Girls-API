const express= require('express')
const app= express()
const cors= require('cors')
const PORT= 8000

app.use(cors())

const members= {
    'geri': {
        'birthName': 'Geraldine Estelle Halliwell',
        'nickName': 'Ginger Spice',
        'birthDate': 'August 6, 1972',
        'birthPlace': 'Watford, England'
    },

    'mel b': {
        'birthName': 'Melanie Janine Brown',
        'nickName': 'Scary Spice',
        'birthDate': 'May 29, 1975',
        'birthPlace': 'West Yorkshire, England'
    },
    'mel c': {
        'birthName': 'Melanie Jayne Chisholm',
        'nickName': 'Sporty Spice',
        'birthDate': 'January 12, 1974',
        'birthPlace': 'Liverpool, England'
    },
    'victoria': {
        'birthName': 'Victoria Caroline Adams',
        'nickName': 'Posh Spice',
        'birthDate': 'April	17, 1974',
        'birthPlace': 'Essex, England'
    },
    'emma': {
        'birthName': 'Emma Lee Bunton',
        'nickName': 'Baby Spice',
        'birthDate': 'January 21, 1976',
        'birthPlace': 'London, England'
    },
    'unknown':{
        '':''
    }
    
}

const discography={
    'first': {
        'albumName': 'Spice',
        'albumDuration': '35:04',
        'releaseDate': '1996',
        'albumGenre': 'Pop, Dance Pop',
        'albumCover': 'https://raw.githubusercontent.com/MaViSunshine/ImgAlbums/main/spice-album.jpg'
    },
    'second': {
        'albumName': 'Spiceworld',
        'albumDuration': '38:37',
        'releaseDate': 'November 4, 1997',
        'albumGenre': 'Pop, Dance Pop',
        'albumCover': 'https://raw.githubusercontent.com/MaViSunshine/ImgAlbums/main/spiceworld-album.jpg'
    },
    'third': {
        'albumName': 'Forever',
        'albumDuration': '52:03',
        'releaseDate': 'November 7, 2000',
        'albumGenre': 'Pop, Dance Pop',
        'albumCover': 'https://raw.githubusercontent.com/MaViSunshine/ImgAlbums/main/forever-album.jpg'
    },
    'unknown':{
        'error':'not an album'
    },
    }

 const spice={
    'track_01':{	
        'trackTitle':'Wannabe',
        'trackLenght':'02:52',
        'videoUrl': 'https://www.youtube.com/watch?v=gJLIiF15wjQ'
        },	
                
    'track_02':{	
        'trackTitle': "Say You'll Be There",
        'trackLenght':'03:56',
        'videoUrl': 'https://www.youtube.com/watch?v=9ro0FW9Qt-4'
        },
        
    'track_03':{	
        'trackTitle':'2 Become 1',
        'trackLenght':'04:00',
        'videoUrl': 'https://www.youtube.com/watch?v=FA5jsa1lR9c'
        },
        
    'track_04':{	
        'trackTitle':'Love Thing',
        'trackLenght':'03:37',
        'videoUrl': 'https://youtu.be/6ifMthurwe8'
        },
            
    'track_05':{	
        'trackTitle':'Last Time Lover',
        'trackLenght':'04:11',
        'videoUrl': 'https://youtu.be/2XBWbolukMA'
        },	
            
    'track_06':{	
        'trackTitle':'Mama',
        'trackLenght':'05:03',
        'videoUrl': 'https://youtu.be/VsNbhwSXDB8'
        },
            
    'track 07':{	
        'trackTitle':'Who Do You Think You Are',
        'trackLenght':'03:59',
        'videoUrl': 'https://youtu.be/-YriinrRGug'
        },
            
    'track 08':{	
        'trackTitle':'Something Kinda Funny',
        'trackLenght':'04:02',
        'videoUrl': 'https://youtu.be/_AJJoHzEZm0'
        },
            
    'track_09':{	
        'trackTitle':'Naked',
        'trackLenght':'04:25',
        'videoUrl': 'https://youtu.be/PWyLqqqCb1U'
        },	

    'track_10':{	
        'trackTitle':"If U Can't Dance",
        'trackLenght':'03:58',
        'videoUrl': 'https://youtu.be/_PbcgC1t9oY'
        },
     'unknown':{
        '0':'not a track'
        },       
 } 
 
 const spiceworld={
    'track_01':{	
        'trackTitle':'Spice Up Your Life',
        'trackLenght':'02:54',
        'videoUrl': 'https://youtu.be/s_J-RVWhJHU'
        },		
        
    'track_02':{	
        'trackTitle':'Stop',
        'trackLenght':'03:24',
        'videoUrl': 'https://youtu.be/5JD6ejmlpa8'
        },	
        
    'track_03':{	
        'trackTitle':'Too Much',
        'trackLenght':'04:31',
        'videoUrl': 'https://youtu.be/_4VoZ6afztc'
        },		
        
    'track_04':{	
        'trackTitle':'Saturday Night Divas',
        'trackLenght':'04:26',
        'videoUrl': 'https://youtu.be/oYfk7ps1YYs'
        },		
            
    'track_05':{	
        'trackTitle':'Never Give Up on the Good Times',
        'trackLenght':'04:30',
        'videoUrl': 'https://youtu.be/oXnTeUsgBoY'
        },
        
    'track_06':{	
        'trackTitle':'Move Over',
        'trackLenght':'02:45',
        'videoUrl': 'https://youtu.be/jpDwwlVYCFI'
        },	
            
    'track_07':{	
        'trackTitle':'Do It',
        'trackLenght':'04:04',
        'videoUrl': 'https://youtu.be/Qn02Hl8i7g0'
        },
            
    'track_08':{	
        'trackTitle':'Denying',
        'trackLenght':'03:47',
        'videoUrl': 'https://youtu.be/WsTouxzdtgg'
        },	
        
    'track_09':{	
        'trackTitle':'Viva Forever',
        'trackLenght':'05:10',
        'videoUrl': 'https://youtu.be/3wkuqRFXNvI'
        },		
            
    'track_10':{	
        'trackTitle':'The Lady Is a Vamp',
        'trackLenght':'03:09',
        'videoUrl': 'https://youtu.be/FPRumXQLteg'
        },
        'unknown':{
            '0':'not a track'
            }, 
 }

const forever={
    'track_01':{	
        'trackTitle':'Holler',
        'trackLenght':'04:15',
        'videoUrl': 'https://youtu.be/v1MTKS-1OHU'
        },
            
    'track_02':{	
        'trackTitle':'Tell Me Why',
        'trackLenght':'04:14',
        'videoUrl': 'https://youtu.be/Qe_LyvBrDMI'
        },
        
    'track_03':{	
        'trackTitle':'Let Love Lead the Way',
        'trackLenght':'04:58',
        'videoUrl': 'https://youtu.be/RtczIm5XrNo'
        },	
        
    'track_04':{	
        'trackTitle':'Right Back at Ya',
        'trackLenght':'04:10',
        'videoUrl': 'https://youtu.be/vH8eX0ZSZp0'
        },	
            
    'track_05':{	
        'trackTitle':'Get Down with Me',
        'trackLenght':'03:46',
        'videoUrl': 'https://youtu.be/VzDh3KGxeeg'
        },
            
    'track_06':{	
        'trackTitle':'Wasting My Time',
        'trackLenght':'04:14',
        'videoUrl': 'https://youtu.be/7Cr5YZYa87k'
        },
        
    'track_07':{	
        'trackTitle':'Weekend Love',
        'trackLenght':'04:06',
        'videoUrl': 'https://youtu.be/JkiOmyaMhAw'
        },
            
    'track_08':{	
        'trackTitle':'Time Goes By',
        'trackLenght':'04:51',
        'videoUrl': 'https://youtu.be/OnNo8cGklxc'
        },
            
    'track_09':{	
        'trackTitle':'If You Wanna Have Some Fun',
        'trackLenght':'05:26',
        'videoUrl': 'https://youtu.be/WQkOIa6ANPA'
        },	
        
    'track_10':{	
        'trackTitle':'Oxygen',
        'trackLenght':'04:56',
        'videoUrl': 'https://youtu.be/2m2MRk--vK8'
        },	
            
    'track_11':{	
        'trackTitle':'Goodbye',
        'trackLenght':'07:07',
        'videoUrl': 'https://youtu.be/eegDtyrSUZw'
        },

    'unknown':{
        '0':'not a track'
        }, 
    
}

app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/member/:name', (request, response)=> {
    const memberName= request.params.name.toLowerCase()
    if (members[memberName]){
        response.json(members[memberName])
    }else{
        response.json(unknown)
    }
})

app.get('/discography/:album', (request, response)=> {
    const albumNumber= request.params.album.toLowerCase()

    if (discography[albumNumber]){
        response.json(discography[albumNumber])
    }else{
        response.json(unknown)
    }
})

app.get('/album/first/:track', (request, response)=> {
    const trackNumber= request.params.track.toLowerCase()
    if (spice[trackNumber]){
        response.json(spice[trackNumber])
    }else{
        response.json(unknown)
    }
})
app.get('/album/second/:track', (request, response)=> {
    const trackNumber= request.params.track.toLowerCase()
    if (spiceworld[trackNumber]){
        response.json(spiceworld[trackNumber])
    }else{
        response.json(unknown)
    }
})

app.get('/album/third/:track', (request, response)=> {
    const trackNumber= request.params.track.toLowerCase()
    if (forever[trackNumber]){
        response.json(forever[trackNumber])
    }else{
        response.json(unknown)
    }
})

app.listen(process.env.PORT||PORT, ()=>{
    console.log( `Port running on ${PORT}, you better go catch it `)
})
