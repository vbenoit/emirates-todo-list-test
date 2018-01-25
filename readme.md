# emirates-todo-list-test

To run and use dist packages, the front-end application and the back-end one should be on the same server.

---

Deploy angular dist package on a server (like apache) and set the value of the current server folder in the property href of the base tag, examples:
1. if you deploy in the root of your htdocs or www, just let the value "/" for the property href
2. if you deploy in the folder htdocs/folder1/subfolder2 put the value "/folder1/subfolder2/" in the property href without forgeting the final slash

---

Deploy back-end jar (spring boot + h2) making sure that port 8888 of localhost is available and free

use: java - jar emirates-test-middleware-0.0.1-SNAPSHOT.jar

---

Go to localhost (add the path to folder where you copied the frontend dist) in a web browser.
Instead of localhost, use localhost:SPECIFIC_PORT if you use a custom port with your server.

---

You should be able to start to use the app.
