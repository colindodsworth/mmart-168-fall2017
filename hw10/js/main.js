// https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y

const apiKey = 'MW9S-E7SL-26DU-VV8V'

const makeStationList = () => {
    const url = 'https://api.bart.gov/api/stn.aspx?key=' + apiKey +
                    '&cmd=stns&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root
            console.log(json)
            console.log(json.stations.station)
            json.stations.station.forEach((station) => {
                          // PART III.A.: Use a loop to populate the select menu with *ALL*
                          // of the stations that are returned from the BART data feed:
              const option = document.createElement("option")
              option.innerHTML = station.name
              option.value = station.abbr
              document.getElementById('station_list').appendChild(option)
            })
            // const option1 = document.createElement("option")
            // option1.value = 'DBRK'
            // option1.innerHTML = 'Downtown Berkeley'
            // document.getElementById('station_list').appendChild(option1)
        })
        .catch((err) => {
            console.log(err)
        })
}

// PART III.B.1: The bartStationCode should read from the list and query for the corresponding station
const getArrivalTimes = () => {
    // find element with the Id 'station_list' & store it in a variable called stationList:
    const stationList = document.getElementById('station_list')
    // get stationList's selected value:
    const bartStationCode = stationList.value
    // print it:
    console.log('Selected Station Code:', bartStationCode)
    let url = 'https://api.bart.gov/api/etd.aspx?key=' + apiKey + '&cmd=etd&orig=' + bartStationCode + '&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root

            // print it (clear first):
            document.getElementById('results').innerHTML = ''
            // add header:
            const header = document.createElement("h2")
            header.innerHTML = json.station[0].name
            document.getElementById('results').appendChild(header)

            // log each:
            json.station[0].etd.forEach((line) => {

              const trainLine = document.createElement("h3")
              trainLine.innerHTML = line.destination + ': Platform #' + line.estimate[0].platform + ' (' + line.estimate[0].direction + 'bound)'
              document.getElementById('results').appendChild(trainLine)

              const square = document.createElement("span")
              square.style.background = line.estimate[0].hexcolor
              square.classList.add('train-square')
              document.getElementById('results').appendChild(square)

              const departureTimeJoiner = []
              line.estimate.forEach((estimate) => {
                  departureTimeJoiner.push(estimate.minutes)
                  console.log('Estimate: ', estimate)
              })

                // time estimates:
                const departureTimes = document.createElement("span")
                departureTimes.innerHTML = '    ' + departureTimeJoiner.join(', ')
                departureTimes.innerHTML += ' minutes'
                // if (estimate.delay !== 0) {
                //   departureTimes.innerHTML += " (possibly delayed)"
                // }
                document.getElementById('results').appendChild(departureTimes)
                // trainLine.style.background = estimate.hexcolor
              })
        })
}

makeStationList()
