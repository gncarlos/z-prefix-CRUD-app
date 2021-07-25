# Quotes for you App
*This app was created to fulfill the CRUD app requirement for the USSF Z-Prefix evaluation*

[Supra Coders](http://supracoders.us/)

## What you will see:
The home page will display a quote. The use will have the abbility to request a new quote and/or create a quote and send it to the database.
The user has a page where it will display all the created quotes and there will be able to update a quote or delete. (The changes on this page will reflect on the database)
### REQUIREMENTS:
- React frontend
- Proper RESTful architecture (GET, POST, PUT/PATCH, DELETE routes)
- A database connection
- Express Server with full CRUD functionality
- Deployed
### Future improvements:
- Add a user accounts database and link the created quotes to that account
- Only that user will be able to update or delete those created quotes
---
### How to CRUD
**To do a CREATE:**
- Click on "Create a Quote" button
- Type a quote and author on the fields that appear
- Click "Create"

The frontend will send a POST request to the server along with an object with data to insert to the database:
```
{
  "quote": "Quote example string",
  "author": "Author example string",
  "user_created": true
}
```
**To do a READ:**
- Click on the menu bars on the top left of the page
- Select "Created Quotes'
- The page will show a list of all the quotes that has been created by users

**To do a UPDATE:**
- Navigate to the Created Quotes pages if your not already there
- Click on the pen icon next to the quote you would like to update/edit
- Make the desired changes
- Click on "Save"

The frontend will send a equest where the server will match the updated quote id with the one in the database and save the changes.


```
{
  "id": number,
  "quote": "Quote example string",
  "author": "Author example string"
}

OR

{
  "id": number,
  "quote": "Quote example string"
}

OR

{
  "id": number,
  "author": "Author example string"
}

```
The user will be able to see the changes immediately.

**To do a DELETE:**
- Navigate to the Created Quotes pages if your not already there
- Click on the trash can icon next to the quote you want to delete

The frontend will send a request to the server with the quote id to be deleted. The server will match that id to the one in the database and delete it.
```
{
  "id": number
}
```
The user will see immediately the quote being removed from the page as soon as it is deleted from the database

---

You can see the fully deployed app [here](https://quotes-for-you-fe.herokuapp.com)
