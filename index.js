const express = require("express")
const axios = require("axios")
const cors = require("cors")
const fs = require("fs")
const app = express()
app.use(cors())

 app.get("/videos", (req,res) => {
    const readFile = fs.readFileSync("./movies2.json");
    const videoFile = JSON.parse(readFile);
    let randomNum1 = Math.floor(Math.random() * 250)
    let randomNum2 = Math.floor(Math.random() * 250)
    const randomVideos = [videoFile[randomNum1],videoFile[randomNum2]]
    res.send(randomVideos)
 })

// axios.get("https://imdb-api.com/en/API/Top250Movies/k_6ew1h179")
//     .then((response)=>{
//         const parseVideos = response.data
//         const videoArray = parseVideos.items
//         const ourVideos = []
//         for (let i=0; i < 250; i++) {
//             let video = videoArray[i]
//             const videoObj = {
//                 id: i ,
//                 title: video.title,
//                 rating: video.imDbRating,
//                 image: video.image
//             }
//             ourVideos.push(videoObj)
//         }
//         fs.writeFileSync("./movies2.json", JSON.stringify(ourVideos))
//     })
app.listen(8080, ()=>{
    console.log("I'm here and I'm listening on port 8080")
})