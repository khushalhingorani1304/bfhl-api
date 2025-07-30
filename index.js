const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.post("/bfhl", (req, res) => {
  const { data } = req.body

  console.log(data);
  

  const odd_numbers = []
  const even_numbers = []
  const alphabets = []
  const special_characters = []
  let sum = 0
  let concat = ""

  data.forEach((item) => {
    if (/^\d+$/.test(item)) {
      const num = parseInt(item)
      sum += num
      if (num % 2 === 0) {
        even_numbers.push(item)
      } else {
        odd_numbers.push(item)
      }
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase())
      concat += item
    } else {
      special_characters.push(item)
    }
  })

  const reversed = concat.split("").reverse()
  let concat_string = ""
  reversed.forEach((ch, i) => {
    concat_string += i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
  })

  res.status(200).json({
    is_success: true,
    user_id: "khushal_hingorani_13042004",
    email: "khushal3802.be22@chitkara.edu.in",
    roll_number: "2210993802",
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string
  })
})

