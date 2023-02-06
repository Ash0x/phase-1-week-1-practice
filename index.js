// This is just allowing us to use the dataset from the other file. You can ignore this line.
const UFO_SIGHTINGS = require('./nyc-ufo-sightings.json')

//Array of objects with structure like:
// {
//     "shape": "light",
//     "duration": 240,
//     "comments": "Flying object with large bright light-The object was moving rapidly and changed to at least 4 different colors. MARCH 31&#44 2014 NYC"
//   }

const calculateMinutes = (seconds) => {
	return Math.floor(seconds / 60)
}

const getRandomSighting = (dataSet) => {
	return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const getRandomSightings = (num, dataSet) => {
	let result = []
	for (let i = 0; i < num; i++) {
		result.push(getRandomSighting(dataSet))
	}
	return result
}

const getLongestSighting = (dataSet) => {
	let result = { duration: 0 }
	dataSet.forEach((sighting) => {
		if (result.duration < sighting.duration) result = sighting
	})
	return result
}

const getComment = (ufoSighting) => {
	return ufoSighting.comments
}

const getFirstWordInComment = (ufoSighting) => {
	return getComment(ufoSighting).split(' ')[0]
}
// console.log(getFirstWordInComment(UFO_SIGHTINGS[1]))

const shapeTypes = (dataSet) => {
	let result = []
	dataSet.forEach((sighting) => {
		if (!result.includes(sighting.shape)) result.push(sighting.shape)
	})
	return result
}
// with For loop and 'continue'
// for (let i = 0; i < dataSet.length; i++) {
//     if (result.includes(dataSet[i].shape)) continue
//     else result.push(dataSet[i].shape)
// }
// return result

const calculateViewDuration = (ufoSighting) => {
    if (ufoSighting.duration < 120) return 'Short'
    else if (ufoSighting.duration > 120 && ufoSighting.duration < 240) return "Average"
    else return 'Long'
}
// console.log(UFO_SIGHTINGS[5].duration, calculateViewDuration(UFO_SIGHTINGS[5]))

const averageViewDuration = (dataSet) => {
     return (dataSet.reduce((sum, sighting) => (sum + sighting.duration), 0)) / dataSet.length
    // dataSet.forEach(sighting => { console.log(sighting.duration)})
}
// console.log(averageViewDuration(UFO_SIGHTINGS))

const longerThanTen = dataSet => {
    return dataSet.find(sighting => sighting.duration > 6000)
}
// console.log(longerThanTen(UFO_SIGHTINGS))

const commentsForLessThanMinute = dataSet => {
    let result = []
    let filtered = dataSet.filter(sighting => sighting.duration < 60)
    filtered.forEach(sighting => result.push(sighting.comments))
    return result
}
// console.log(commentsForLessThanMinute(UFO_SIGHTINGS))