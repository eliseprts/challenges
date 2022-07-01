const ctx = document.getElementById("spendingChart").getContext("2d")

// const labels = Utils.days({ count: 7 })
const labels = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun"
]

const data = {
    labels: labels,
    datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            "hsl(10, 79%, 65%)"
        ],
        hoverBackgroundColor: [
            "hsl(10, 66%, 73%)"
        ],
        borderRadius: [
            "3"
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