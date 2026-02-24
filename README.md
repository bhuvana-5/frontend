# frontend
### UI Pages / Components

**A. Chat Screen**

- Input box + Send button
- Message list (user + assistant messages)
- Loading state while response is being generated

**B. Session Handling**

- Generate a `sessionId` on first load (UUID or timestamp-based)
- Store it in localStorage
- Continue conversation using the same sessionId

**C. Extras (nice-to-have)**

- Button: “New Chat” → generates a new sessionId
- Display conversation timestamp
