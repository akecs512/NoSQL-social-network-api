# social-network-api

## Description
A social media startup that wants an API for their social network that uses a NoSQL database
so thtat their website can handle large amounts of unstructured data.

## Usage
Given a social network API when the user enters the command to invoke the application
then their server is started and the Mongoose models are synced to the MongoDB database.
When they open API GET routes in Insomnia for users and thoughts then the data for each of these routes is displayed in a formatted JSON.
When they test API POST, PUT, and DELETE routes in Insomnia then they are able to successfully create, update, and delete users and thoughts in their database.
When they test API POST and DELETE routes in Insomnia then thy are able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.