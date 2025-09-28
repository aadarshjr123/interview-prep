# HashMaps & Sets  

### 🔑 What is a HashMap?  
- Stores **key → value** pairs.  
- Keys are hashed → placed in "buckets".  
- **Lookup/insert/delete** → Average **O(1)**, Worst **O(n)** (if many collisions).  

📖 **Analogy**: Phonebook → Name = key, Phone number = value.  

---

### 🗂️ What is a HashSet?  
- Like a HashMap, but **only stores keys** (no values).  
- Main use → **Check membership fast** (`exists or not`).  

---

### ⚡ Collision Handling  
1. **Chaining** → Each bucket holds a list of entries.  
2. **Open Addressing** → If spot taken, try next empty slot.  

---

✅ **Use Cases**  
- HashMap: store & retrieve data by unique identifier (e.g., userID → profile).  
- HashSet: quickly check if something exists (e.g., visited nodes in graph).  
