console.log("Start Script")
function getApiData(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!userName) return reject("Missing userName")
            return resolve(["Liel", "Tania", "Yocheved"].filter(u => u.toLowerCase() === userName.toLowerCase()))
            // Run this code after 3 sec
        }, 3000);
    })

}

getApiData("tania").then(reolveUsers).catch(rejectUsers)
function reolveUsers(data) {
    console.log(data)
}
function rejectUsers(error) {
    console.log(error)
}


console.log("End Script")



