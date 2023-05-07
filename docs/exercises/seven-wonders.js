const wonders = {
  'Great Pyramid of Giza': ['Great Pyramid', 'Pyramid of Giza'],
  'Colossus of Rhodes': ['Rhodes Colossus', 'Colosus of Rhodes'],
  'Lighthouse of Alexandria': ['Alexandria Lighthouse'],
  'Mausoleum at Halicarnassus': ['Mausoleum at Halicarnasus', 'Mausoleum at Halycarnassus', 'Tomb of Mausolus'],
  'Temple of Artemis at Ephesus': ['Temple of Artemis'],
  'Statue of Zeus at Olympia': ['Statue of Zeus'],
  'Hanging Gardens of Babylon': ['Hanging Gardens']
}

function canonical(str) {
  const normal = str => str.toLowerCase().replace(/(^| )(of|at|in|the)( |$)/g, ' ').replace(/ +/, ' ').trim()

  const replaced = normal(str)

  for (const key in wonders) {
    if (normal(key) === replaced) {
      return key
    }

    for (const alt of wonders[key]) {
      if (normal(alt) === replaced) {
        return key
      }
    }
  }

  return false
}

export default {
  question: `Name the seven wonders of the ancient world`,
  size: 7,

  createChecker() {
    const matched = new Set()
    let index = 0

    return (answer) => {
      const canon = canonical(answer)

      if (!canon || matched.has(canon)) {
        return false
      }

      return {
        canonical: canon,
        index: index++
      }
    }
  }
}
