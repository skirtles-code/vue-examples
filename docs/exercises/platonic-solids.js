const solids = ['Tetrahedron', 'Cube', 'Octahedron', 'Dodecahedron', 'Icosahedron']

export default {
  question: `Name the ${solids.length} Platonic solids`,
  size: solids.length,

  createChecker() {
    let index = -1

    return (answer) => {
      const canonical = answer.slice(0, 1).toUpperCase() + answer.slice(1).toLowerCase()

      if (!solids.includes(canonical)) {
        return false
      }

      ++index

      return {
        index,
        canonical
      }
    }
  }
}
