# BFHL API

A Node.js + Express REST API that processes an array of mixed data and returns categorized output.

### 🚀 Hosted URL

POST: https://bfhl-api-gules.vercel.app/bfhl

---

### 📥 Sample Request

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
📤 Sample Response
json
Copy
Edit
{
  "is_success": true,
  "user_id": "khushal_hingorani_1304",
  "email": "khushal3802.be22@chitkara.edu.in",
  "roll_number": "2210993802",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
👨‍💻 Author
Khushal Hingorani
Roll No: 2210993802
Email: khushal3802.be22@chitkara.edu.in