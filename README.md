# Quantum Core Project

## Description
This project implements Firebase Cloud Functions to handle HTTP requests and interact with Firestore.

## Setup
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize Firebase project: `firebase init`
3. Implement Cloud Functions in `functions` directory

## File Structure
- `functions/`
  - `index.js`: Entry point for Cloud Functions, initializes Firebase Admin and exposes functions
  - `api/addMessage.js`: Handles HTTP request to add message to Firestore

## Usage
1. Ensure Firebase project is set up correctly and Firestore is enabled.
2. Deploy Cloud Functions: `firebase deploy --only functions`
3. Test Cloud Functions using Postman or other HTTP client.

## Testing
- Use Postman to send `POST` requests to Cloud Functions URL with JSON payload containing `text` and `userId`.

## Monitoring
- View logs and errors in Firebase Console under Functions section.

## Next Steps
- Integrate Cloud Functions with frontend application.
- Implement authentication and security rules for Firestore.
- Implement additional Cloud Functions for other backend tasks.

## References
- Firebase Documentation: [https://firebase.google.com/docs](https://firebase.google.com/docs)
- Firebase CLI Reference: [https://firebase.google.com/docs/cli](https://firebase.google.com/docs/cli)
