import { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, Alert } from "react-native"

import { Icons, Cell, Box } from '../components'

const WIN_POSITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function Home() {
  const [turn, setTurn] = useState("X")
  const [cells, setCells] = useState([
    null, null, null,
    null, null, null,
    null, null, null
  ])
  const [scores, setScores] = useState({
    xWins: 0,
    ties: 0,
    oWins: 0
  })

  const mark = (position) => {
    if (cells[position] !== null) return

    const cellsArray = [...cells]
    cellsArray[position] = turn
    setCells(cellsArray)
    if (turn === "X") setTurn("O")
    else setTurn("X")
  }

  const restartCells = () => {
    setCells([
      null, null, null,
      null, null, null,
      null, null, null
    ])
  }

  const restartGame = () => {
    restartCells()
    setScores({
      xWins: 0,
      ties: 0,
      oWins: 0
    })
  }

  const checkWinner = (cells) => {
    let winner
    WIN_POSITIONS.forEach((_, position) => {
      const [a, b, c] = WIN_POSITIONS[position]

      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        winner = cells[a]
      }
    });

    const isAllFilled = cells.some(c => c === null)
    if (!isAllFilled && !winner ) {
      const scoresCopy = {...scores}
      scoresCopy['ties']++
      setScores(scoresCopy)
      restartCells()
    }

    return winner || null
  }

  useEffect(() => {
    const winner = checkWinner(cells)
    
    if(winner) {
      const scoresCopy = {...scores}
      if (winner === "X") {
        alert("X won!")
        scoresCopy['xWins']++
        setScores(scoresCopy)
        restartCells()
      } else if (winner === "O") {
        alert("O won!")
        scoresCopy['oWins']++
        setScores(scoresCopy)
        restartCells()
      }
    }
  }, [cells])

  return (
    <View className="items-center">
      <View className="flex-row items-center justify-between w-full">
          <View className="flex-row">
            <Text className="mr-2"><Icons.XIcon/></Text>
            <Text><Icons.OIcon /></Text>
          </View>
          <Text className="font-primary text-primary bg-secondary py-4 max-h-16 rounded-xl text-3xl uppercase px-8 mx-2">
            {turn === "X" ? (<Icons.XIcon size={30} />) : (<Icons.OIcon size={30} />)} Turn
          </Text>
          <TouchableOpacity onPress={restartGame}>
            <Text className="bg-primary flex-row text-center mt-auto pt-2 rounded-xl w-16 h-16">
              {Icons.restartIcon}
            </Text>
          </TouchableOpacity>
      </View>
      <View className="flex-wrap flex-row mt-6 justify-center">
        {cells && cells.map((cell, position) => (
          <Cell key={position} value={cell} mark={mark} position={position} />
        ))}
      </View>
      <View className="mt-6 flex-row">
        <Box className="bg-primary" title="X wins" text={scores['xWins']} />
        <Box className="bg-[#a8bec9]" title="Ties" text={scores['ties']} />
        <Box className="bg-yellow" title="O wins" text={scores['oWins']} />
      </View>
    </View>
  )
}

export default Home