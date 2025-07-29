const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.post("/bfhl", (req, res) => {
  res.status(200).json({
    is_success: true,
    user_id: "khushal_hingorani_1304",
    email: "khushal3802.be22@chitkara.edu.in",
    roll_number: "2210993802",
    odd_numbers: [],
    even_numbers: [],
    alphabets: [],
    special_characters: [],
    sum: "0",
    concat_string: ""
  })
})
