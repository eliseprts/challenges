const ctx = document.getElementById("spendingChart").getContext("2d")

const labels = []
const spending = []
const backgroundcolor = []
const hoverbackgroundcolor = []

fetch("./data.json")
    .then(res => res.json())
    .then(spendingData => {

        // console.log(spendingData)

        // Put data in separated array
        for (let e of spendingData) {
            const day = e.day
            labels.push(day)
        }
        for (let e of spendingData) {
            const amount = e.amount
            spending.push(amount)
        }

        // Different bgColor for highest value
        let max = Math.max(...spending)
        // console.log(max)
        for (let e of spending) {
            if (e === max) {
                backgroundcolor.push("hsl(186, 34%, 60%)")
                hoverbackgroundcolor.push("hsl(187, 49%, 80%")
            } else {
                backgroundcolor.push("hsl(10, 79%, 65%)")
                hoverbackgroundcolor.push("hsl(10, 100%, 76%)")
            }
        }

        // Chart
        const data = {
            labels: labels,
            datasets: [{
                data: spending,
                backgroundColor: backgroundcolor,
                hoverBackgroundColor: hoverbackgroundcolor,
                borderRadius: [
                    "5"
                ]
            }]
        }

        const config = {
            type: "bar",
            data: data,
            options: {
                scales: {
                    y: {
                        grid: {
                            display: false,
                            drawBorder: false
                        }
                    },
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false
                        }
                    },

                },
                plugins: {
                    legend: {
                        display: false
                    },
                    background: {
                        display: false
                    }
                }
            },
        }

        const spendingChart = new Chart(
            document.getElementById("spendingChart"), config
        )


    })

// console.log(labels)
// console.log(spending)