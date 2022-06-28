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


async function init(p) {
    try {
        console.log("before await")
        const result = await getApiData(p)
        console.log(result)
    } catch (ex) {
        console.log(ex)
    }
}
init("Liel")
init("Dina")
init()
init()

console.log("End Script")



