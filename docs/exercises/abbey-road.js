const tracks = [
  'Come Together',
  'Something',
  'Maxwell\'s Silver Hammer',
  'Oh! Darling',
  'Octopus\'s Garden',
  'I Want You (She\'s So Heavy)',
  'Here Comes The Sun',
  'Because',
  'You Never Give Me Your Money',
  'Sun King',
  'Mean Mr Mustard',
  'Polythene Pam',
  'She Came In Through The Bathroom Window',
  'Golden Slumbers',
  'Carry That Weight',
  'The End',
  'Her Majesty'
]

const mappings = {
  'octopus garden': 'octopuss garden',
  'octopuses garden': 'octopuss garden',
  'i want you': 'i want you shes so heavy',
  'shes so heavy': 'i want you shes so heavy',
  'mean mister mustard': 'mean mr mustard',
}

function canonical(str) {
  const replaced = str.toLowerCase().replace(/[^a-z ]/g, '').replace(/ +/, ' ').trim()

  return mappings[replaced] || replaced
}

const canon = tracks.map(canonical)

export default {
  question: `Name the ${tracks.length} tracks on The Beatles album Abbey Road`,
  size: tracks.length,

  createChecker() {
    return (answer) => {
      const index = canon.indexOf(canonical(answer))

      if (index === -1) {
        return false
      }

      return {
        index,
        canonical: tracks[index]
      }
    }
  }
}
