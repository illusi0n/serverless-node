# Serverless Node

Learning AWS with Nodejs while going through [Serverless Applications with Nodejs](https://www.manning.com/books/serverless-applications-with-node-js).


# Running curl on Windows 10 in PowerShell

Before running `curl` on Windows execute in PowerShell : `Remove-item alias:curl`.
For specifying data in `curl` , `"` has to be escaped, eg. `POST -d '{\"pizzaId\":\"1\", \"address\": \"Address 1\"}'`

Currently I can't find a solution to run in `cmd` POST request with data in body successfully.
