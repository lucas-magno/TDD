module.exports = {
    sum: notes => notes.reduce((acc, note) => {
        acc += note
        return acc;
    }, 0)
}

// module.exports = {
//     sum: notes => {
//         if(Math.min(...notes) === 0){
//             return 0
//         }
//      return notes.reduce((acc, note) => {
//         acc += note
//         return acc;
//     }, 0)
//   }
// }

// module.exports = {
//     sum: notes => {
//         if (Math.min(...notes) === 0) {
//             const result = notes.reduce((acc, note) => {
//                 acc += note
//                 return acc;
//             }, 0)
//             return notes.length > 5 ? reesult * 2 : result
//         }
//         return 0
//     }
// }