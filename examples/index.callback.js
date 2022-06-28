console.log("Start Script")
function getApiData(callback) {
    setTimeout(() => {
        callback(["Liel", "Tania", "Yocheved"])
        // Run this code after 3 sec
    }, 3000);
}

getApiData((users) => {
    if (!Array.isArray(users)) return;
    console.log(users)
})


console.log("End Script")



